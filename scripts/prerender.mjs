// Post-build prerendering: snapshots each known route of the already-built SPA
// (dist/) into its own static index.html, so crawlers get real HTML/JSON-LD
// without executing JS. Runs after `vite build`, before the FTP deploy step.
//
// Route list comes from routes.mjs — the same source generate-sitemap.mjs reads —
// so this list and the sitemap can never drift apart.
import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import puppeteer from 'puppeteer';
import { ALL_ROUTES } from './routes.mjs';

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = join(process.cwd(), 'dist');

// routes.mjs paths have a trailing slash (the form actually served); the dev/preview
// server that prerendering crawls resolves either form the same way, so route it as-is.
const ROUTES = ALL_ROUTES;

// Path that matches no real route, so the SPA renders its NotFound ("*") page. It is
// snapshotted into dist/404.html (served by Apache's ErrorDocument 404, see
// public/.htaccess) and is deliberately NOT part of routes.mjs / the sitemap.
const NOT_FOUND_ROUTE = '/page-introuvable-404/';

// The snapshot starts from index.html's head (default canonical, robots "index, follow").
// A 404 page must be noindex and carry no canonical. Assets are already absolute (/assets/…,
// Vite base "/"), so the page renders correctly at any URL depth. Throws if an expected
// tag is missing, so a head change can't silently ship an indexable 404.
function to404Html(html) {
  const canonicalRe = /<link[^>]*rel="canonical"[^>]*>\s*/;
  const robotsRe = /<meta[^>]*name="robots"[^>]*>/;
  if (!canonicalRe.test(html) || !robotsRe.test(html)) {
    throw new Error('canonical or robots tag not found in 404 snapshot');
  }
  if (!html.includes('404')) {
    throw new Error('NotFound page content not found in 404 snapshot');
  }
  return html
    .replace(canonicalRe, '')
    .replace(robotsRe, '<meta name="robots" content="noindex">');
}

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > timeoutMs) {
            reject(new Error(`Server did not start within ${timeoutMs}ms`));
          } else {
            setTimeout(tryOnce, 300);
          }
        });
    };
    tryOnce();
  });
}

function routeToFilePath(route) {
  if (route === '/') return join(DIST_DIR, 'index.html');
  return join(DIST_DIR, route.replace(/^\//, ''), 'index.html');
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 60);
    });
  });
}

async function main() {
  console.log(`[prerender] serving ${DIST_DIR} on ${BASE_URL}`);
  const preview = spawn(
    `npx vite preview --port ${PORT} --strictPort`,
    { stdio: 'inherit', shell: true }
  );

  const cleanup = () => preview.kill();
  process.on('exit', cleanup);

  try {
    await waitForServer(BASE_URL);

    // --no-sandbox / --disable-setuid-sandbox: required for Chrome to launch in
    // containerized CI runners (GitHub Actions) that lack the privileges Chrome's
    // default sandbox needs. Harmless locally.
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    let ok = 0;

    for (const route of ROUTES) {
      const page = await browser.newPage();
      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        await autoScroll(page);
        // let scroll-triggered reveal transitions settle before snapshotting
        await new Promise((r) => setTimeout(r, 150));

        const html = await page.content();
        const filePath = routeToFilePath(route);
        mkdirSync(dirname(filePath), { recursive: true });
        writeFileSync(filePath, html);
        console.log(`[prerender] ✓ ${route} -> ${filePath.replace(DIST_DIR, 'dist')}`);
        ok += 1;
      } catch (err) {
        console.error(`[prerender] ✗ ${route}:`, err.message);
        process.exitCode = 1;
      } finally {
        await page.close();
      }
    }

    const notFoundPage = await browser.newPage();
    try {
      await notFoundPage.goto(`${BASE_URL}${NOT_FOUND_ROUTE}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await autoScroll(notFoundPage);
      await new Promise((r) => setTimeout(r, 150));
      const filePath = join(DIST_DIR, '404.html');
      writeFileSync(filePath, to404Html(await notFoundPage.content()));
      console.log(`[prerender] ✓ ${NOT_FOUND_ROUTE} -> dist\\404.html`);
    } catch (err) {
      console.error(`[prerender] ✗ 404.html:`, err.message);
      process.exitCode = 1;
    } finally {
      await notFoundPage.close();
    }

    await browser.close();
    console.log(`[prerender] done: ${ok}/${ROUTES.length} routes prerendered`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error('[prerender] fatal error:', err);
  process.exitCode = 1;
});
