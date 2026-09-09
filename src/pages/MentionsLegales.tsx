import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MentionsLegales = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Legal Notice — Stonebridge",
    "Mentions légales — Stonebridge",
    "Mentions légales du site Stonebridge : éditeur, hébergeur, propriété intellectuelle.",
    "Legal notice for the Stonebridge website: publisher, host, intellectual property."
  );

  return (
    <Layout variant="light">
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Legal Notice', 'Mentions légales')}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>

          <div className="reveal">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F1B2D', opacity: 0.38, marginBottom: '20px' }}>
              {t('Publisher', 'Éditeur du site')}
            </h2>
            <div className="institutional-body" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p>Stonebridge SAS</p>
              <p>{t('Share capital: €50', 'Capital social : 50 €')}</p>
              <p>SIREN : 942 820 671</p>
              <p>{t('Registered office', 'Siège social')} : 60 rue François Ier, 75008 Paris</p>
              <p>contact@stonebridgeconsult.com</p>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F1B2D', opacity: 0.38, marginBottom: '20px' }}>
              {t('Publication director', 'Directeur de la publication')}
            </h2>
            <p className="institutional-body">Vega Studio</p>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F1B2D', opacity: 0.38, marginBottom: '20px' }}>
              {t('Hosting', 'Hébergement')}
            </h2>
            <div className="institutional-body" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p>OVH SAS</p>
              <p>2 rue Kellermann, 59100 Roubaix — France</p>
              <p>cluster121.hosting.ovh.net — 188.165.53.185</p>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F1B2D', opacity: 0.38, marginBottom: '20px' }}>
              {t('Professional liability insurance', 'Assurance professionnelle')}
            </h2>
            <p className="institutional-body">
              {t(
                'Stonebridge holds professional liability insurance subscribed with Hiscox Europe Underwriting Limited.',
                "Stonebridge est titulaire d'une assurance de responsabilité civile professionnelle souscrite auprès de Hiscox Europe Underwriting Limited."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0F1B2D', opacity: 0.38, marginBottom: '20px' }}>
              {t('Intellectual property', 'Propriété intellectuelle')}
            </h2>
            <p className="institutional-body">
              {t(
                'All content on stonebridgeconsult.com (text, visuals, architecture) is the exclusive property of Stonebridge SAS. Any reproduction, even partial, is prohibited without prior written authorisation.',
                "L'ensemble des contenus du site stonebridgeconsult.com (textes, visuels, architecture) est la propriété exclusive de Stonebridge SAS. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite."
              )}
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
