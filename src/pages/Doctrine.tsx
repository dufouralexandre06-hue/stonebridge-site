import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Doctrine = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('Primacy of structure', 'Lecture globale'),
      body: t(
        'We hold that most governance failures are not failures of intent but of architecture. Our counsel begins with the structure — the allocation of authority, the design of decision-making processes, and the coherence between formal rules and actual practice. We do not address symptoms before we have understood the framework that produces them.',
        'Chaque situation est analysée dans son environnement juridique, institutionnel et opérationnel complet. Cette approche permet d\'identifier les points de tension réels — et non les seules expositions apparentes.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Independence as method', 'Arbitrage'),
      body: t(
        'Our counsel is only valuable to the extent that it is unconstrained. We maintain no ongoing relationships with regulators, no positions in supervised entities, and no financial interests in the outcomes we advise on. This structural independence is not a posture — it is the condition of our usefulness.',
        'La gestion du risque implique des arbitrages entre contraintes réglementaires, réalités opérationnelles et responsabilités institutionnelles. L\'objectif n\'est pas la conformité formelle — c\'est la construction d\'une position cohérente et défendable.'
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('Discretion as discipline', 'Soutenabilité'),
      body: t(
        'We do not communicate publicly about our mandates, our clients, or the outcomes of our work. Discretion is not a service feature — it is a constraint we impose on ourselves as rigorously as we expect it from those we advise. The value of our counsel depends entirely on the trust it is conducted within.',
        'Une décision n\'est pertinente que si elle peut être soutenue dans le temps face aux institutions concernées. Cette exigence de soutenabilité constitue le principe central de l\'approche Stonebridge.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Discretion as discipline', 'Ligne de légitimité'),
      body: t(
          'We do not communicate publicly about our mandates, our clients, or the outcomes of our work. Discretion is not a service feature — it is a constraint we impose on ourselves as rigorously as we expect it from those we advise. The value of our counsel depends entirely on the trust it is conducted within.',
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
          <p className="text-black">Stonebridge considère que le risque réglementaire ne peut être réduit à une conformité documentaire.</p>
          <p className="text-black">Il doit être appréhendé dans une perspective globale, intégrant la gouvernance, les responsabilités et la soutenabilité des positions dans le temps.</p>
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
