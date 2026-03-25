import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Mandats = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('Scope', 'Diagnostic et évaluation du risque'),
      body: t(
        'Stonebridge accepts mandates of a strictly advisory nature, focused on governance architecture, regulatory positioning, and institutional structuring. Each mandate is defined by its objectives, its constraints, and the level of confidentiality required.',
        "Analyse structurée de situations présentant des enjeux réglementaires, institutionnels ou de gouvernance. Lecture globale du risque, identification des points de fragilité et construction d'une position défendable."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Conditions', 'Situations bancaires et diligences renforcées'),
      body: t(
        'We do not accept transactional, contingency-fee, or multi-party mandates involving conflicting interests. Our engagement is exclusive to the principal, and our counsel is delivered directly — without intermediary or delegated structure.',
        "Intervention dans des contextes impliquant des difficultés d'entrée en relation, des exigences de diligence renforcée, des profils exposés ou des environnements bancaires complexes nécessitant une structuration documentaire rigoureuse."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('Duration', 'Structures internationales et multi-juridictions'),
      body: t(
        'Mandates are structured over defined periods, renewable by mutual agreement. We do not operate on a retainer basis. Each renewal is subject to a full reassessment of objectives and conditions.',
        "Lecture et structuration de situations impliquant plusieurs juridictions, des dispositifs organisationnels complexes ou des expositions réglementaires croisées."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Duration', 'Gouvernance et conformité'),
      body: t(
        'Mandates are structured over defined periods, renewable by mutual agreement. We do not operate on a retainer basis. Each renewal is subject to a full reassessment of objectives and conditions.',
        "Accompagnement dans la structuration de dispositifs de gouvernance et de conformité adaptés aux exigences réglementaires contemporaines — LCB-FT, obligations de vigilance, responsabilité des dirigeants."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('Duration', 'Supervision externe et mandat continu'),
      body: t(
        'Mandates are structured over defined periods, renewable by mutual agreement. We do not operate on a retainer basis. Each renewal is subject to a full reassessment of objectives and conditions.',
        "Intervention en qualité de responsable conformité externalisé pour des structures ne disposant pas d'équipe dédiée en interne. Supervision régulière, reporting et pilotage des obligations réglementaires."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Duration', 'Coordination et soutien aux professionnels'),
      body: t(
        'Mandates are structured over defined periods, renewable by mutual agreement. We do not operate on a retainer basis. Each renewal is subject to a full reassessment of objectives and conditions.',
        "Intervention en soutien de professionnels — avocats, experts-comptables, conseils — confrontés à des situations nécessitant une analyse indépendante ou une coordination d'expertise spécialisée."
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
            {t('Mandates', 'Mandats')}
          </h1>
          <br/>
          <p className="text-black">Les interventions de Stonebridge prennent la forme de mandats ponctuels ou d'accompagnements structurés, lorsque les enjeux réglementaires ou institutionnels nécessitent une analyse indépendante et une coordination rigoureuse.</p>
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

export default Mandats;
