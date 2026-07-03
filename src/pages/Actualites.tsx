import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface VeilleItem {
  title: string;
  link: string;
  pubDate: string | null;
  source: string;
}

const PUBLICATIONS = [
  {
    year: '2025',
    titleFr: "Dirigeant, commercial et responsable conformité : une même personne peut-elle rester crédible ?",
    titleEn: "Director, business developer and compliance officer: can the same person remain credible?",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/dirigeant-commercial-responsable-conformite-une-meme-personne-peut-elle-rester,57998.html',
  },
  {
    year: '2025',
    titleFr: "Le triangle de la conformité : friction silencieuse entre conformité, dirigeant et client",
    titleEn: "The compliance triangle: silent friction between compliance, management and client",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/triangle-conformite-friction-silencieuse-entre-conformite-dirigeant-client,57699.html',
  },
];

const Actualites = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  const [actualites, setActualites] = useState<VeilleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/veille.json', { cache: 'no-cache' })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setActualites(Array.isArray(data) ? data : []))
      .catch(() => setActualites([]))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  };

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

      {/* Image banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/actualites.jpg)',
            filter: 'grayscale(100%) brightness(0.50)',
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27, 42, 65, 0.57)' }} />
      </div>

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
          ) : actualites.length === 0 ? (
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.8125rem', fontStyle: 'italic', color: 'rgba(15,27,45,0.3)' }}>
              {t('No updates available at this time.', 'Aucune actualité disponible pour le moment.')}
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {actualites.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '28px 0',
                    borderBottom: i < actualites.length - 1 ? '1px solid rgba(15,27,45,0.08)' : 'none',
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
