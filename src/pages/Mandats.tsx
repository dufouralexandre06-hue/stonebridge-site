import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Mandats = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('Diagnostic and risk assessment', 'Diagnostic et évaluation du risque'),
      body: t(
        'Structured analysis of situations involving regulatory, institutional or governance challenges. Comprehensive risk assessment, identification of points of vulnerability and construction of a defensible position.',
        "Analyse structurée de situations présentant des enjeux réglementaires, institutionnels ou de gouvernance. Lecture globale du risque, identification des points de fragilité et construction d'une position défendable."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('BANKING SITUATIONS AND ENHANCED DUE DILIGENCE', 'Situations bancaires et diligences renforcées'),
      body: t(
        'Intervention in contexts involving difficulties in establishing or maintaining banking relationships, enhanced due diligence requirements, exposed profiles or complex banking environments that call for rigorous documentary structuring.',
        "Intervention dans des contextes impliquant des difficultés d'entrée en relation, des exigences de diligence renforcée, des profils exposés ou des environnements bancaires complexes nécessitant une structuration documentaire rigoureuse."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('INTERNATIONAL AND MULTI-JURISDICTIONAL STRUCTURES', 'Structures internationales et multi-juridictions'),
      body: t(
        'Analysis and structuring of situations involving multiple jurisdictions, complex organisational arrangements or cross-border regulatory exposures.',
        "Lecture et structuration de situations impliquant plusieurs juridictions, des dispositifs organisationnels complexes ou des expositions réglementaires croisées."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('GOVERNANCE AND COMPLIANCE', 'Gouvernance et conformité'),
      body: t(
        'Advisory support in structuring governance and compliance frameworks adapted to contemporary regulatory requirements — AML/CFT, due diligence obligations, executive liability.',
        "Accompagnement dans la structuration de dispositifs de gouvernance et de conformité adaptés aux exigences réglementaires contemporaines — LCB-FT, obligations de vigilance, responsabilité des dirigeants."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('EXTERNAL SUPERVISION AND ONGOING MANDATE', 'Supervision externe et mandat continu'),
      body: t(
        'Engagement as an outsourced compliance officer for structures without a dedicated internal compliance function. Regular supervision, reporting and management of regulatory obligations.',
        "Intervention en qualité de responsable conformité externalisé pour des structures ne disposant pas d'équipe dédiée en interne. Supervision régulière, reporting et pilotage des obligations réglementaires."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('COORDINATION AND PROFESSIONAL SUPPORT', 'Coordination et soutien aux professionnels'),
      body: t(
        'Support to professionals — lawyers, accountants, advisors — facing situations that require independent analysis or specialised expert coordination.',
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
          <p className="text-black">{t('Stonebridge engagements take the form of discrete mandates or structured advisory assignments, where regulatory or institutional stakes require independent analysis and rigorous coordination.', 'Les interventions de Stonebridge prennent la forme de mandats ponctuels ou d\'accompagnements structurés, lorsque les enjeux réglementaires ou institutionnels nécessitent une analyse indépendante et une coordination rigoureuse.')}</p>
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
