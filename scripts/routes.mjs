// Single source of truth for the site's routes, shared by generate-sitemap.mjs and
// prerender.mjs so the two can never drift apart (and a new route only needs to be
// added here once). Keep STATIC_ROUTES in sync with src/App.tsx.
//
// Every route here is served (200, no redirect) only WITH a trailing slash except "/"
// itself — see public/.htaccess (Apache mod_dir redirects a bare directory path to its
// slash form). `path` below is the canonical/sitemap form actually served.
import { readFileSync } from 'fs';

export const STATIC_ROUTES = [
  { path: '/', file: 'src/pages/Index.tsx', priority: 1.0 },
  { path: '/mandats/', file: 'src/pages/Mandats.tsx', priority: 0.8 },
  { path: '/situations/', file: 'src/pages/Situations.tsx', priority: 0.8 },
  { path: '/methode/', file: 'src/pages/Methode.tsx', priority: 0.8 },
  { path: '/doctrine/', file: 'src/pages/Doctrine.tsx', priority: 0.8 },
  { path: '/contact/', file: 'src/pages/Contact.tsx', priority: 0.8 },
  { path: '/urgence/', file: 'src/pages/Urgence.tsx', priority: 0.8 },
  { path: '/actualites/', file: 'src/pages/Actualites.tsx', priority: 0.7 },
  { path: '/veille-complete/', file: 'src/pages/VeilleComplete.tsx', priority: 0.4 },
  { path: '/analyses-veille/', file: 'src/pages/AnalysesVeilleHub.tsx', priority: 0.7 },
  { path: '/mentions-legales/', file: 'src/pages/MentionsLegales.tsx', priority: 0.3 },
  { path: '/cookies/', file: 'src/pages/Cookies.tsx', priority: 0.3 },
  { path: '/confidentialite/', file: 'src/pages/Confidentialite.tsx', priority: 0.3 },
];

// src/data/analysesVeilleContent.tsx exports JSX (body/methodologyBody render functions),
// so it can't be imported directly by a plain Node script without a JSX transform.
// Extracted via regex instead — each entry's `slug` is always followed by its own
// `dateModified` before the next entry starts (see the file's object shape).
function parseAnalysesVeilleEntries() {
  const src = readFileSync(new URL('../src/data/analysesVeilleContent.tsx', import.meta.url), 'utf8');
  const entries = [];
  const entryRe = /slug:\s*'([^']+)'[\s\S]*?dateModified:\s*'([^']+)'/g;
  let match;
  while ((match = entryRe.exec(src))) {
    entries.push({ slug: match[1], dateModified: match[2] });
  }
  return entries;
}

export const ANALYSES_VEILLE_ENTRIES = parseAnalysesVeilleEntries();

export const ALL_ROUTES = [
  ...STATIC_ROUTES.map((r) => r.path),
  ...ANALYSES_VEILLE_ENTRIES.map((e) => `/analyses-veille/${e.slug}/`),
];
