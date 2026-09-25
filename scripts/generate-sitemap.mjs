// Regenerates public/sitemap.xml before every build, from the single route list in
// routes.mjs — the same list prerender.mjs snapshots — so a new page can no longer be
// forgotten from the sitemap the way it previously was.
//
// <loc> uses the exact trailing-slash form the site actually serves as 200 (see
// routes.mjs). <lastmod> is the real last-modified date: the last git commit that
// touched the page's source file, or (for analyses-veille articles, tracked
// individually) the entry's own `dateModified` field.
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { STATIC_ROUTES, ANALYSES_VEILLE_ENTRIES } from './routes.mjs';

const SITE_URL = 'https://stonebridgeconsult.com';

function gitLastModified(file) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, { encoding: 'utf8' }).trim();
    if (out) return out;
  } catch {
    // fall through to today's date below (new/uncommitted file)
  }
  return new Date().toISOString().slice(0, 10);
}

const urls = [
  ...STATIC_ROUTES.map((route) => ({
    loc: route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`,
    lastmod: gitLastModified(route.file),
    priority: route.priority,
  })),
  ...ANALYSES_VEILLE_ENTRIES.map((entry) => ({
    loc: `${SITE_URL}/analyses-veille/${entry.slug}/`,
    lastmod: entry.dateModified,
    priority: 0.6,
  })),
];

const body = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority.toFixed(1)}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`[sitemap] wrote ${urls.length} URLs to public/sitemap.xml`);
