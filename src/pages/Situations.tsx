import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Situations = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('Regulatory transition', 'Situations fréquemment rencontrées'),
      body: t(
        'Entities facing a significant change in their regulatory environment — new supervisory regime, cross-border restructuring, or jurisdictional shift — require counsel that is both structurally informed and operationally grounded. We intervene at the point where legal frameworks and governance decisions converge.',
        " ‣ Refus ou difficultés répétés d'accès aux relations bancaires \n ‣ Structures internationales présentant une opacité apparente ou une complexité capitalistique \n ‣ Profils exposés — personnes politiquement exposées, mandataires sensibles, clients à risque élevé \n ‣ Environnements réglementaires sensibles impliquant des actifs ou des flux atypiques \n ‣ Situations pré-contentieuses ou pré-crise nécessitant une intervention structurée en amont \n ‣ Pression externe — contrôle régulateur, questionnement institutionnel, demande de justification"
      ),
    },
    {
      bg: '#FAF8F5',
      body: t(
        'When control structures become contested, when board composition is under pressure, or when shareholder alignment breaks down, the priority is to restore clarity of authority before any strategic decision is made. We assist principals in reestablishing a coherent governance framework under time constraints.',
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
          <p className="text-black">Certaines situations présentent un niveau de complexité ou de sensibilité qui rend leur qualification difficile et leur gestion interne insuffisante.</p>
          <p className="text-black">Stonebridge intervient dans ces contextes pour apporter une lecture structurée du risque et des responsabilités engagées.</p>
        </div>
      </section>

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
    </Layout>
  );
};

export default Situations;
