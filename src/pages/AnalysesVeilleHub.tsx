import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ANALYSES_VEILLE } from '@/data/analysesVeilleContent';
import { eyebrowStyle } from '@/lib/analysesVeilleStyles';

const numStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.6875rem',
  letterSpacing: '0.12em',
  color: 'rgba(15,27,45,0.28)',
  lineHeight: 1,
  flexShrink: 0,
  paddingTop: '3px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
  color: '#0F1B2D',
  letterSpacing: '0.01em',
  lineHeight: 1.3,
};

const summaryStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.75,
  marginTop: '10px',
};

const AnalysesVeilleHub = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    'Analysis & Regulatory Watch — Stonebridge | LCB-FT compliance analyses',
    'Analyses & Veille réglementaire — Stonebridge | Analyses conformité LCB-FT',
    'Analyses approfondies Stonebridge sur les obligations LCB-FT : TRACFIN, PSAN, family office, contrôles ACPR et AMF, secret professionnel, compliance externalisée.',
    'In-depth Stonebridge analyses on AML/CFT obligations: TRACFIN, digital asset providers, family offices, AMF and ACPR audits, professional secrecy, outsourced compliance.',
    '/analyses-veille'
  );

  return (
    <Layout variant="light">
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Analysis & Regulatory Watch', 'Analyses & Veille réglementaire')}
          </h1>
          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: 'rgba(15,27,45,0.7)',
              lineHeight: 1.75,
              marginTop: '28px',
              maxWidth: '40rem',
            }}
          >
            {t(
              "Stonebridge publishes regular analyses on the AML/CFT obligations facing regulated professions and structures — legal framework, recent sanctions, and operational guidance drawn from real engagements.",
              "Stonebridge publie des analyses régulières sur les obligations LCB-FT auxquelles sont confrontées les professions et structures réglementées — cadre légal, sanctions récentes et repères opérationnels tirés de situations réelles."
            )}
          </p>
        </div>
      </section>

      {/* Liste des 7 analyses */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          {ANALYSES_VEILLE.map((entry, i) => (
            <div
              key={entry.slug}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                paddingTop: i === 0 ? 0 : '32px',
                paddingBottom: '32px',
                borderBottom: i < ANALYSES_VEILLE.length - 1 ? '1px solid rgba(15,27,45,0.09)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={numStyle}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ flex: 1 }}>
                  <Link to={`/analyses-veille/${entry.slug}`} style={{ textDecoration: 'none' }}>
                    <p style={titleStyle}>{entry.title}</p>
                  </Link>
                  <p style={summaryStyle}>{entry.hubSummary}</p>
                  <Link
                    to={`/analyses-veille/${entry.slug}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.75rem',
                      letterSpacing: '0.06em',
                      color: 'rgba(15,27,45,0.5)',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(15,27,45,0.2)',
                    }}
                  >
                    {t('Read the analysis →', "Lire l'analyse →")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Veille réglementaire existante */}
      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl reveal">
          <h2 style={{ ...eyebrowStyle, marginBottom: '18px' }}>{t('Regulatory watch', 'Veille réglementaire')}</h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: 'rgba(15,27,45,0.72)',
              lineHeight: 1.8,
              maxWidth: '40rem',
            }}
          >
            {t(
              "Beyond these in-depth analyses, Stonebridge maintains a curated selection of AMF, ACPR and EBA regulatory texts, alongside the firm's own published articles.",
              "Au-delà de ces analyses approfondies, Stonebridge tient à jour une sélection de textes réglementaires AMF, ACPR et EBA, ainsi que les publications propres du cabinet."
            )}
          </p>
          <Link
            to="/actualites"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0F1B2D',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(15,27,45,0.25)',
              paddingBottom: '2px',
            }}
          >
            {t('View regulatory watch →', 'Consulter la veille réglementaire →')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AnalysesVeilleHub;
