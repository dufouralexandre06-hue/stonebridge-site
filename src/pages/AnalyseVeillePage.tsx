import { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useJsonLd } from '@/hooks/useJsonLd';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getAnalyseBySlug } from '@/data/analysesVeilleContent';
import { eyebrowStyle, faqQStyle, faqAStyle, methodologyStyle, linkStyle } from '@/lib/analysesVeilleStyles';

const SITE_URL = 'https://stonebridgeconsult.com';

const AnalyseVeillePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  useScrollReveal();

  const entry = slug ? getAnalyseBySlug(slug) : undefined;

  usePageMeta(
    language,
    entry ? `${entry.title} — Stonebridge` : 'Stonebridge',
    entry ? `${entry.title} — Stonebridge` : 'Stonebridge',
    entry ? entry.metaDescription : '',
    entry ? entry.metaDescription : '',
    entry ? `/analyses-veille/${entry.slug}` : undefined
  );

  const schemas = useMemo(() => {
    if (!entry) return [];
    const pageUrl = `${SITE_URL}/analyses-veille/${entry.slug}`;
    const article = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: entry.title,
      description: entry.metaDescription,
      datePublished: entry.datePublished,
      dateModified: entry.dateModified,
      author: { '@type': 'Person', name: 'Alexandre Dufour', jobTitle: 'Managing Partner' },
      publisher: { '@type': 'Organization', name: 'Stonebridge', url: SITE_URL },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      inLanguage: 'fr-FR',
    };
    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: entry.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    };
    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Analyses & Veille', item: `${SITE_URL}/analyses-veille` },
        { '@type': 'ListItem', position: 3, name: entry.title, item: pageUrl },
      ],
    };
    return [article, faqPage, breadcrumb];
  }, [entry]);

  useJsonLd(schemas, entry ? entry.slug : 'analyse-veille-empty');

  if (!entry) {
    return <Navigate to="/analyses-veille" replace />;
  }

  return (
    <Layout variant="light">
      {/* Titre + fil d'Ariane */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <nav aria-label="Fil d'Ariane" className="reveal" style={{ marginBottom: '24px' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link to="/" style={{ ...eyebrowStyle, opacity: 0.5, textDecoration: 'none' }}>
                  {t('Home', 'Accueil')}
                </Link>
              </li>
              <li style={{ ...eyebrowStyle, opacity: 0.3 }}>/</li>
              <li>
                <Link to="/analyses-veille" style={{ ...eyebrowStyle, opacity: 0.5, textDecoration: 'none' }}>
                  {t('Analysis & Watch', 'Analyses & Veille')}
                </Link>
              </li>
              <li style={{ ...eyebrowStyle, opacity: 0.3 }}>/</li>
              <li style={{ ...eyebrowStyle, opacity: 0.75, maxWidth: '28rem' }}>{entry.title}</li>
            </ol>
          </nav>

          <h1
            className="reveal font-serif"
            style={{
              color: '#0F1B2D',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              letterSpacing: '0.02em',
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            {entry.title}
          </h1>

          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: 'rgba(15,27,45,0.7)',
              lineHeight: 1.75,
              marginTop: '24px',
              maxWidth: '40rem',
            }}
          >
            {entry.intro}
          </p>
        </div>
      </section>

      {/* Corps de l'analyse */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl reveal">{entry.body()}</div>
      </section>

      {/* FAQ */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl reveal">
          <h2 style={{ ...eyebrowStyle, marginBottom: '28px' }}>{t('Frequently asked questions', 'Questions fréquentes')}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {entry.faq.map((item, i) => (
              <div key={i} style={{ paddingBottom: '20px', borderBottom: i < entry.faq.length - 1 ? '1px solid rgba(15,27,45,0.08)' : 'none' }}>
                <p style={faqQStyle}>{item.q}</p>
                <p style={faqAStyle}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie et sources + CTA */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-20" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl reveal">
          <h2 style={{ ...eyebrowStyle, marginBottom: '16px' }}>{t('Methodology and sources', 'Méthodologie et sources')}</h2>
          <p style={methodologyStyle}>{entry.methodologyBody()}</p>

          <p style={{ ...methodologyStyle, marginTop: '28px' }}>
            {t("This approach follows the methodology described by Stonebridge — see the ", "Cette démarche s'inscrit dans l'approche méthodologique décrite par Stonebridge — voir la page ")}
            <Link to="/methode" style={linkStyle}>{t('Method page', 'Méthode')}</Link>.
          </p>

          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.9375rem', color: '#2F2F2F', lineHeight: 1.8, marginTop: '28px' }}>
            {t('If your situation requires personalised support on a specific matter, ', 'Si votre situation nécessite un accompagnement personnalisé sur un dossier précis, ')}
            <Link
              to="/contact"
              style={{
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
              {t('discuss confidentially →', 'échanger de manière confidentielle →')}
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AnalyseVeillePage;
