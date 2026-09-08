import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface VeilleItem {
  title: string;
  link: string;
  pubDate: string | null;
  source: string;
}

const VeilleComplete = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  const [items, setItems] = useState<VeilleItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/veille.json', { cache: 'no-cache' })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]))
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
          <Link
            to="/actualites"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(15,27,45,0.4)',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '28px',
            }}
          >
            ← {t('Back to News', '← Actualités')}
          </Link>
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Full Regulatory Watch', 'Veille réglementaire complète')}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">

          {loading ? (
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.8125rem', fontStyle: 'italic', color: 'rgba(15,27,45,0.3)' }}>
              {t('Loading…', 'Chargement…')}
            </p>
          ) : items.length === 0 ? (
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.8125rem', fontStyle: 'italic', color: 'rgba(15,27,45,0.3)' }}>
              {t('No updates available at this time.', 'Aucune actualité disponible pour le moment.')}
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
                    padding: '24px 0',
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

export default VeilleComplete;
