// Post-build prerendering: snapshots each known route of the already-built SPA
// (dist/) into its own static index.html, so crawlers get real HTML/JSON-LD
// without executing JS. Runs after `vite build`, before the FTP deploy step.
//
// Route list is intentionally hardcoded (small, slow-changing set) — keep in
// sync with src/App.tsx and the slugs in src/data/analysesVeilleContent.tsx.
import { spawn } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import puppeteer from 'puppeteer';

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = join(process.cwd(), 'dist');

const ANALYSES_VEILLE_SLUGS = [
  'expert-comptable-obligation-tracfin',
  'psan-radie-que-faire',
  'family-office-lcb-ft',
  'controle-acpr-lcb-ft',
  'societe-gestion-controles-amf-lcb-ft',
  'avocat-fiscaliste-lcb-ft',
  'compliance-externalisee-lcb-ft',
];

const ROUTES = [
  '/',
  '/mandats',
  '/situations',
  '/methode',
  '/doctrine',
  '/contact',
  '/urgence',
  '/actualites',
  '/veille-complete',
  '/analyses-veille',
  ...ANALYSES_VEILLE_SLUGS.map((slug) => `/analyses-veille/${slug}`),
  '/mentions-legales',
  '/cookies',
  '/confidentialite',
];

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

    const browser = await puppeteer.launch({ headless: true });
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
