import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Situations = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('Frequently encountered situations', 'Situations fréquemment rencontrées'),
      body: t(
          " ‣ Repeated refusals or difficulties in establishing or maintaining banking relationships \n ‣ International structures presenting apparent opacity or complex ownership arrangements \n ‣ Exposed profiles — politically exposed persons, sensitive officeholders, high-risk clients \n ‣ Sensitive regulatory environments involving atypical assets or transaction flows \n ‣ Pre-litigation or pre-crisis situations requiring structured early intervention \n ‣ External pressure — regulatory scrutiny, institutional questioning, requests for justification",
          " ‣ Refus ou difficultés répétés d'accès aux relations bancaires \n ‣ Structures internationales présentant une opacité apparente ou une complexité capitalistique \n ‣ Profils exposés — personnes politiquement exposées, mandataires sensibles, clients à risque élevé \n ‣ Environnements réglementaires sensibles impliquant des actifs ou des flux atypiques \n ‣ Situations pré-contentieuses ou pré-crise nécessitant une intervention structurée en amont \n ‣ Pression externe — contrôle régulateur, questionnement institutionnel, demande de justification"
      ),
    },
    {
      bg: '#FAF8F5',
      body: t(
        'Before any decision is made, certain situations must first be correctly understood.',
        'Avant toute décision, certaines situations exigent d\'abord d\'être correctement lues.'
      ),
    },
  ];

  return (
    <Layout variant="light">
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Situations', 'Situations')}
          </h1>
          <br/>
          <p className="text-black">{t('Certain situations present a level of complexity or sensitivity that makes internal qualification difficult and internal management insufficient.', 'Certaines situations présentent un niveau de complexité ou de sensibilité qui rend leur qualification difficile et leur gestion interne insuffisante.')}</p>
          <p className="text-black">{t('Stonebridge intervenes in these contexts to provide a structured reading of the risk and responsibilities involved.', 'Stonebridge intervient dans ces contextes pour apporter une lecture structurée du risque et des responsabilités engagées.')}</p>
        </div>
      </section>

      {/* Image banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/situations.jpg)',
            filter: 'grayscale(100%) brightness(0.55)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(27, 42, 65, 0.45)' }}
        />
      </div>

      {sections.map((s, i) => (
        <section
          key={i}
          className="whitespace-pre px-8 md:px-16 lg:px-24 py-24 md:py-32"
          style={{ backgroundColor: s.bg }}
        >
          <div className="max-w-3xl">
            <div className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <h2
                className="institutional-label mb-8"
                style={{ color: '#0F1B2D', opacity: 0.55 }}
              >
                {s.label}
              </h2>
              <p className="institutional-body">{s.body}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          <div className="reveal reveal-delay-1">
            <h2 className="institutional-label mb-8" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("What Stonebridge does in these situations", "Ce que Stonebridge fait dans ces situations")}
            </h2>
            <p className="institutional-body">
              {t(
                "We qualify risks, identify documentary or governance shortcomings, organise relevant information, coordinate concerned advisers and build a position capable of being understood and supported by institutional counterparties.",
                "Nous qualifions les risques, identifions les insuffisances documentaires ou de gouvernance, organisons les informations utiles, coordonnons les conseils concernés et construisons une position susceptible d'être comprise et soutenue par les interlocuteurs institutionnels."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl">
          <div className="reveal reveal-delay-2">
            <h2 className="institutional-label mb-8" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Forms of engagement", "Formats d'intervention")}
            </h2>
            <p className="institutional-body">
              {t(
                "Confidential diagnostic, position note, documentary review, preparation of exchanges with a financial institution or regulatory authority, coordination of external advisers, remediation support.",
                "Diagnostic confidentiel, note de position, revue documentaire, préparation d'échanges avec un établissement financier ou une autorité, coordination de conseils externes, accompagnement de remédiation."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Situations;
