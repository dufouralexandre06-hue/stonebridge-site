import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FEEDS = [
  { name: 'AMF',  urls: ['https://www.amf-france.org/fr/rss/actualites.xml'] },
  { name: 'ACPR', urls: ['https://acpr.banque-france.fr/rss.xml'] },
  { name: 'EBA',  urls: ['https://www.eba.europa.eu/feed/press-releases', 'https://www.eba.europa.eu/feed/news'] },
];

const KEYWORDS = [
  // Communs FR/EN
  'lcb-ft', 'aml', 'kyc', 'psan', 'sgp', 'sanction',
  'conformit', 'compliance', 'blanchiment', 'terrorisme',
  'mica', 'aifmd', 'edd', 'anti-money',
  // Vocabulaire ACPR spécifique
  'lutte contre', 'financement', 'gel des avoirs', 'vigilance',
  'soupçon', 'tracfin', 'établissement de crédit',
  'prestataire de services',
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
  const atom = block.match(/<link[^>]+href="([^"]+)"/i);
  if (atom) return atom[1].trim();
  const rss = block.match(/<link>(?:<!\[CDATA\[)?(https?:\/\/[^\]<]+?)(?:\]\]>)?<\/link>/i);
  if (rss) return rss[1].trim();
  const guid = block.match(/<guid[^>]*>([^<]+)<\/guid>/i);
  if (guid) return guid[1].trim();
  return '';
}

function extractDate(block) {
  for (const tag of ['pubDate', 'updated', 'published']) {
    const val = extractText(block, tag) || block.match(new RegExp(`<${tag}>([^<]+)<\\/${tag}>`, 'i'))?.[1];
    if (val) {
      const d = new Date(val.trim());
      if (!isNaN(d.getTime())) return d.toISOString();
    }
  }
  return null;
}

// Exclut "EBA E-mail alert" générique et variantes
function isGenericAlert(title) {
  return /^(eba\s+)?e-?mail\s+alert(\s+\S+)?\.?$/i.test(title.trim());
}

async function tryFetch(name, url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Stonebridge-RSS/1.0)' },
    });
    clearTimeout(timer);
    console.log(`[${name}] ${url} → HTTP ${res.status}`);
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    clearTimeout(timer);
    console.warn(`[${name}] ${url} → Échec : ${err.message}`);
    return null;
  }
}

async function fetchFeed(name, urls) {
  let xml = null;
  for (const url of urls) {
    xml = await tryFetch(name, url);
    if (xml) break;
  }
  if (!xml) { console.warn(`[${name}] Tous les endpoints ont échoué`); return []; }

  const rawRss  = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
  const rawAtom = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
  console.log(`[${name}] ${rawRss.length + rawAtom.length} items bruts (${rawRss.length} RSS + ${rawAtom.length} Atom)`);

  const items = [];

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
}

async function main() {
  const results = await Promise.allSettled(FEEDS.map(f => fetchFeed(f.name, f.urls)));

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

  console.log(`\nveille.json — ${output.length} entrée(s) :`);
  for (const item of output) {
    console.log(`  [${item.source}] ${item.pubDate?.slice(0, 10) ?? 'sans date'} — ${item.title.slice(0, 80)}`);
  }
}

main().catch(err => {
  console.error('Erreur fatale :', err.message);
  const outDir = join(dirname(fileURLToPath(import.meta.url)), 'public', 'data');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'veille.json'), '[]', 'utf-8');
  process.exit(0);
});
