import { writeFileSync } from 'fs';

const FEEDS = [
  { name: 'AMF', url: 'https://www.amf-france.org/fr/rss/actualites.xml' },
  { name: 'ACPR', url: 'https://acpr.banque-france.fr/rss.xml' },
  { name: 'EBA', url: 'https://www.eba.europa.eu/feed/press-releases' },
];

const KEYWORDS = [
  'lcb-ft','aml','kyc','psan','sgp','sanction','conformité','compliance',
  'blanchiment','financement du terrorisme','mica','aifmd','edd',
  'lutte contre','gel des avoirs','vigilance','déclaration de soupçon',
  'tracfin','établissement de crédit','prestataire de services'
];

async function main() {
  const allItems = [];

  for (const feed of FEEDS) {
    try {
      console.log(`[${feed.name}] Fetching ${feed.url}`);
      const res = await fetch(feed.url);
      console.log(`[${feed.name}] HTTP ${res.status}`);
      if (!res.ok) continue;

      const xml = await res.text();

      // Extract items from RSS <item> or Atom <entry>
      const rssItems = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
      const atomItems = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)];
      const rawItems = [...rssItems, ...atomItems];
      console.log(`[${feed.name}] ${rawItems.length} items bruts`);

      for (const match of rawItems) {
        const block = match[1];
        const title = (block.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')?.trim() || '';
        const link = (block.match(/<link[^>]*href="([^"]*)"/) || block.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1]?.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')?.trim() || '';
        const pubDate = (block.match(/<pubDate>([\s\S]*?)<\/pubDate>/i) || block.match(/<published>([\s\S]*?)<\/published>/i) || block.match(/<updated>([\s\S]*?)<\/updated>/i) || [])[1]?.trim() || '';

        // Skip generic EBA email alerts
        if (/^EBA E-mail alert/i.test(title)) continue;

        // Keyword filter
        const lowerTitle = title.toLowerCase();
        const lowerBlock = block.toLowerCase();
        const matches = KEYWORDS.some(k => lowerTitle.includes(k) || lowerBlock.includes(k));
        if (!matches) continue;

        allItems.push({ title, link, pubDate, source: feed.name });
      }
    } catch (err) {
      console.error(`[${feed.name}] Erreur: ${err.message}`);
    }
  }

  // Sort reverse chronological, max 20
  allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  const final = allItems.slice(0, 20);

  console.log(`\nTotal: ${final.length} entrées retenues`);
  final.forEach(item => console.log(`  [${item.source}] ${item.pubDate} — ${item.title.slice(0, 80)}`));

  // WRITE — this is the critical part
  const json = JSON.stringify(final, null, 2);
  writeFileSync('veille-output.json', json, 'utf-8');
  console.log(`\nFichier écrit: veille-output.json (${json.length} bytes)`);
}

main();
