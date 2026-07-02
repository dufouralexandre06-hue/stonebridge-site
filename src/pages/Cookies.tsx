import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Cookies = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <Layout variant="light">
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Cookie Policy', 'Politique de cookies')}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl reveal">
          <p className="institutional-body">
            {t(
              'Stonebridge uses only technical cookies strictly necessary for the site to function (session, language preferences). No advertising or behavioural tracking cookies are used. These cookies do not collect any personally identifiable data.',
              "Stonebridge utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site (session, préférences de langue). Aucun cookie publicitaire ou de tracking comportemental n'est utilisé. Ces cookies ne collectent aucune donnée personnelle identifiable."
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
