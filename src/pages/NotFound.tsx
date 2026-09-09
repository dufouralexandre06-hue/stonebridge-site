import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <Layout variant="light">
      <section
        className="px-8 md:px-16 lg:px-24"
        style={{
          backgroundColor: '#FAF8F5',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '32rem' }}>
          <p
            className="font-serif"
            style={{
              color: '#0F1B2D',
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              lineHeight: 1,
              opacity: 0.12,
              marginBottom: '32px',
            }}
          >
            404
          </p>
          <h1
            className="font-serif"
            style={{
              color: '#0F1B2D',
              fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              marginBottom: '20px',
            }}
          >
            {t('Page not found', 'Page introuvable')}
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: 'rgba(15,27,45,0.6)',
              lineHeight: 1.75,
              marginBottom: '36px',
            }}
          >
            {t(
              "The page you are looking for does not exist or has been moved.",
              "La page que vous recherchez n'existe pas ou a été déplacée."
            )}
          </p>
          <Link
            to="/"
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
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.7)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.25)')}
          >
            {t('Return to home →', "Retour à l'accueil →")}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
