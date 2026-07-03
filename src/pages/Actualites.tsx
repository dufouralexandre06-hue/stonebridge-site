import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RssItem {
  title: string;
  link: string;
  pubDate: Date | null;
  source: string;
}

const FEEDS = [
  { name: 'AMF', url: 'https://www.amf-france.org/fr/rss/actualites.xml' },
  { name: 'ACPR', url: 'https://acpr.banque-france.fr/rss.xml' },
  { name: 'EBA', url: 'https://www.eba.europa.eu/rss.xml' },
];

const KEYWORDS = [
  'lcb-ft', 'aml', 'kyc', 'psan', 'sgp', 'sanction',
  'conformit', 'compliance', 'blanchiment', 'terrorisme',
  'mica', 'aifmd', 'edd', 'lutte contre', 'anti-money',
];

const matchesKeywords = (text: string): boolean => {
  const lower = text.toLowerCase();
  return KEYWORDS.some(kw => lower.includes(kw));
};

const getText = (el: Element, tag: string): string =>
  el.getElementsByTagName(tag)[0]?.textContent?.trim() ?? '';

const getLink = (el: Element): string => {
  const linkEl = el.getElementsByTagName('link')[0];
  return linkEl?.getAttribute('href') ?? linkEl?.textContent?.trim() ?? getText(el, 'guid');
};

const getDate = (el: Element): Date | null => {
  for (const tag of ['pubDate', 'updated']) {
    const str = getText(el, tag);
    if (!str) continue;
    const d = new Date(str);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
};

const fetchFeed = async (source: string, url: string): Promise<RssItem[]> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
      { signal: controller.signal }
    );
    clearTimeout(timer);
    const text = await res.text();
    if (!text) return [];
    const xml = new DOMParser().parseFromString(text, 'text/xml');
    const elements = [
      ...Array.from(xml.getElementsByTagName('item')),
      ...Array.from(xml.getElementsByTagName('entry')),
    ];
    return elements
      .filter(el => {
        const text = getText(el, 'title') + ' ' + getText(el, 'description') + ' ' + getText(el, 'summary');
        return matchesKeywords(text);
      })
      .map(el => ({
        title: getText(el, 'title'),
        link: getLink(el),
        pubDate: getDate(el),
        source,
      }))
      .filter(item => item.title && item.link);
  } catch {
    clearTimeout(timer);
    return [];
  }
};

const PUBLICATIONS = [
  {
    year: '2025',
    titleFr: "Dirigeant, commercial et responsable conformité : une même personne peut-elle rester crédible ?",
    titleEn: "Director, business developer and compliance officer: can the same person remain credible?",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/dirigeant-commercial-responsable-conformite-une-meme-personne-peut-elle-rester,57998.html',
  },
  {
    year: '2025',
    titleFr: "Le triangle de la conformité : friction silencieuse entre conformité, dirigeant et client",
    titleEn: "The compliance triangle: silent friction between compliance, management and client",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/triangle-conformite-friction-silencieuse-entre-conformite-dirigeant-client,57699.html',
  },
];

const Actualites = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled(FEEDS.map(f => fetchFeed(f.name, f.url))).then(results => {
      const all: RssItem[] = [];
      for (const r of results) {
        if (r.status === 'fulfilled') all.push(...r.value);
      }
      all.sort((a, b) => {
        if (!a.pubDate && !b.pubDate) return 0;
        if (!a.pubDate) return 1;
        if (!b.pubDate) return -1;
        return b.pubDate.getTime() - a.pubDate.getTime();
      });
      setItems(all.slice(0, 20));
      setLoading(false);
    });
  }, []);

  const formatDate = (d: Date) =>
    d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    fontSize: '0.9375rem',
    color: '#0F1B2D',
    textDecoration: 'none',
    lineHeight: 1.65,
    borderBottom: '1px solid rgba(15,27,45,0.15)',
    paddingBottom: '1px',
    transition: 'border-color 0.2s ease',
  };

  const metaStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    fontSize: '0.6875rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(15,27,45,0.4)',
  };

  const tick = (
    <span style={{ width: '1px', height: '11px', backgroundColor: 'rgba(15,27,45,0.2)', display: 'inline-block' }} />
  );

  return (
    <Layout variant="light">

      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('News', 'Actualités')}
          </h1>
        </div>
      </section>

      {/* Publications Stonebridge */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          <h2 className="reveal institutional-label mb-14" style={{ color: '#0F1B2D', opacity: 0.55 }}>
            {t('Stonebridge Publications', 'Publications Stonebridge')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={metaStyle}>{pub.year}</span>
                  {tick}
                  <span style={{ ...metaStyle, letterSpacing: '0.05em', textTransform: 'none' }}>{pub.source}</span>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.15)')}
                >
                  {t(pub.titleEn, pub.titleFr)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille réglementaire */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl">
          <h2 className="reveal institutional-label mb-14" style={{ color: '#0F1B2D', opacity: 0.55 }}>
            {t('Regulatory Watch', 'Veille réglementaire')}
          </h2>

          {loading ? (
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.8125rem', fontStyle: 'italic', color: 'rgba(15,27,45,0.3)' }}>
              {t('Loading…', 'Chargement…')}
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '28px 0',
                    borderBottom: i < items.length - 1 ? '1px solid rgba(15,27,45,0.08)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {item.pubDate && (
                      <>
                        <span style={metaStyle}>{formatDate(item.pubDate)}</span>
                        {tick}
                      </>
                    )}
                    <span style={{ ...metaStyle, letterSpacing: '0.05em', textTransform: 'none' }}>{item.source}</span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.5)')}
                    onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.15)')}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Actualites;
