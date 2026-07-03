import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FEEDS = [
  { name: 'AMF',  url: 'https://www.amf-france.org/fr/rss/actualites.xml' },
  { name: 'ACPR', url: 'https://acpr.banque-france.fr/rss.xml' },
  { name: 'EBA',  url: 'https://www.eba.europa.eu/rss.xml' },
];

const KEYWORDS = [
  'lcb-ft', 'aml', 'kyc', 'psan', 'sgp', 'sanction',
  'conformit', 'compliance', 'blanchiment', 'terrorisme',
  'mica', 'aifmd', 'edd', 'anti-money', 'lutte contre',
];

function matches(text) {
  const lower = text.toLowerCase();
  return KEYWORDS.some(kw => lower.includes(kw));
}

function extractText(block, tag) {
  const re = new RegExp(
    `<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
    'i'
  );
  const m = block.match(re);
  if (!m) return '';
  return (m[1] ?? m[2] ?? '').trim();
}

function extractLink(block) {
  // Atom: <link href="..."/>
  const atom = block.match(/<link[^>]+href="([^"]+)"/i);
  if (atom) return atom[1].trim();
  // RSS 2.0: <link>URL</link> (may contain CDATA)
  const rss = block.match(/<link>(?:<!\[CDATA\[)?(https?:\/\/[^\]<]+?)(?:\]\]>)?<\/link>/i);
  if (rss) return rss[1].trim();
  // guid fallback
  const guid = block.match(/<guid[^>]*>([^<]+)<\/guid>/i);
  if (guid) return guid[1].trim();
  return '';
}

function extractDate(block) {
  for (const tag of ['pubDate', 'updated', 'published', 'dc:date']) {
    const val = extractText(block, tag) || block.match(new RegExp(`<${tag}>([^<]+)<\/${tag}>`, 'i'))?.[1];
    if (val) {
      const d = new Date(val.trim());
      if (!isNaN(d.getTime())) return d.toISOString();
    }
  }
  return null;
}

async function fetchFeed(name, url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Stonebridge-RSS/1.0)' },
    });
    clearTimeout(timer);
    if (!res.ok) { console.warn(`[${name}] HTTP ${res.status}`); return []; }

    const xml = await res.text();

    const rawRss  = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
    const rawAtom = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
    console.log(`[${name}] ${rawRss.length + rawAtom.length} items bruts (${rawRss.length} RSS + ${rawAtom.length} Atom)`);

    const isGenericAlert = (title) =>
      /^e-?mail\s+alert\.?$/i.test(title.trim());

    const items = [];

    // RSS 2.0 items
    for (const m of rawRss) {
      const block = m[1];
      const title = extractText(block, 'title');
      const desc  = extractText(block, 'description');
      if (isGenericAlert(title)) continue;
      if (!matches(title + ' ' + desc)) continue;
      const link = extractLink(block);
      if (!title || !link) continue;
      items.push({ title, link, pubDate: extractDate(block), source: name });
    }

    // Atom entries
    for (const m of rawAtom) {
      const block = m[1];
      const title   = extractText(block, 'title');
      const summary = extractText(block, 'summary') || extractText(block, 'content');
      if (isGenericAlert(title)) continue;
      if (!matches(title + ' ' + summary)) continue;
      const link = extractLink(block);
      if (!title || !link) continue;
      items.push({ title, link, pubDate: extractDate(block), source: name });
    }

    console.log(`[${name}] ${items.length} entrées retenues après filtrage`);
    return items;
  } catch (err) {
    console.warn(`[${name}] Échec : ${err.message}`);
    return [];
  }
}

async function main() {
  const results = await Promise.allSettled(FEEDS.map(f => fetchFeed(f.name, f.url)));

  const all = [];
  for (const r of results) {
    if (r.status === 'fulfilled') all.push(...r.value);
  }

  all.sort((a, b) => {
    if (!a.pubDate && !b.pubDate) return 0;
    if (!a.pubDate) return 1;
    if (!b.pubDate) return -1;
    return new Date(b.pubDate) - new Date(a.pubDate);
  });

  const output = all.slice(0, 20);

  const outDir = join(__dirname, 'public', 'data');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'veille.json'), JSON.stringify(output, null, 2), 'utf-8');
  console.log(`veille.json généré — ${output.length} entrée(s)`);
}

main().catch(err => {
  console.error('Erreur fatale :', err.message);
  const outDir = join(dirname(fileURLToPath(import.meta.url)), 'public', 'data');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'veille.json'), '[]', 'utf-8');
  process.exit(0);
});
