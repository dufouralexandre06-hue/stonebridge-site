import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Doctrine = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('COMPREHENSIVE READING', 'Lecture globale'),
      body: t(
        'Each situation is analysed in its full legal, institutional and operational context. This approach identifies genuine points of tension — not merely surface-level exposures.',
        'Chaque situation est analysée dans son environnement juridique, institutionnel et opérationnel complet. Cette approche permet d\'identifier les points de tension réels — et non les seules expositions apparentes.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('ARBITRATION', 'Arbitrage'),
      body: t(
        'Risk management involves navigating between regulatory constraints, operational realities and institutional responsibilities. The objective is not formal compliance — it is the construction of a coherent and defensible position.',
        'La gestion du risque implique des arbitrages entre contraintes réglementaires, réalités opérationnelles et responsabilités institutionnelles. L\'objectif n\'est pas la conformité formelle — c\'est la construction d\'une position cohérente et défendable.'
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('SUSTAINABILITY', 'Soutenabilité'),
      body: t(
        'A decision is only relevant if it can be sustained over time in the face of the institutions concerned. This requirement for sustainability is the central principle of the Stonebridge approach.',
        'Une décision n\'est pertinente que si elle peut être soutenue dans le temps face aux institutions concernées. Cette exigence de soutenabilité constitue le principe central de l\'approche Stonebridge.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('LEGITIMACY', 'Ligne de légitimité'),
      body: t(
          'Stonebridge engagements draw on direct experience in international fiduciary and regulatory environments, particularly in Luxembourg, France and Switzerland.',
          'Les interventions de Stonebridge s\'appuient sur une expérience directe en environnements fiduciaires et réglementaires internationaux, notamment au Luxembourg et en France.'
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
            {t('Doctrine', 'Doctrine')}
          </h1>
          <br/>
          <div className="whitespace-pre">
          <p className="text-black">{t('Stonebridge considers that regulatory risk cannot be reduced to documentary compliance.', 'Stonebridge considère que le risque réglementaire ne peut être réduit à une conformité documentaire.')}</p>
          <p className="text-black">{t('It must be approached from a comprehensive perspective, integrating governance, responsibilities and the long-term sustainability of positions.', 'Il doit être appréhendé dans une perspective globale, intégrant la gouvernance, les responsabilités et la soutenabilité des positions dans le temps.')}</p>
          </div>
        </div>
      </section>

      {sections.map((s, i) => (
        <section
          key={i}
          className="px-8 md:px-16 lg:px-24 py-24 md:py-32"
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

export default Doctrine;
