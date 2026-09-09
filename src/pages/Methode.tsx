import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Step {
  num: string;
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    titleFr: 'Qualifier',
    titleEn: 'Qualify',
    bodyFr: "Comprendre les faits, l'urgence, les interlocuteurs, les points de blocage et les responsabilités engagées.",
    bodyEn: "Understand the facts, the urgency, the parties involved, the points of friction and the responsibilities at stake.",
  },
  {
    num: '02',
    titleFr: 'Cartographier',
    titleEn: 'Map',
    bodyFr: "Identifier les éléments disponibles, les zones d'incertitude, les documents manquants et les enjeux de gouvernance.",
    bodyEn: "Identify the available elements, the areas of uncertainty, the missing documents and the governance issues.",
  },
  {
    num: '03',
    titleFr: 'Structurer',
    titleEn: 'Structure',
    bodyFr: "Organiser la documentation, les explications, la logique économique et les décisions nécessaires.",
    bodyEn: "Organise the documentation, the explanations, the economic rationale and the decisions required.",
  },
  {
    num: '04',
    titleFr: 'Coordonner',
    titleEn: 'Coordinate',
    bodyFr: "Articuler les interventions du client, des avocats, experts-comptables, banques et conseils concernés.",
    bodyEn: "Align the actions of the client, lawyers, accountants, banks and advisers involved.",
  },
  {
    num: '05',
    titleFr: 'Soutenir',
    titleEn: 'Support',
    bodyFr: "Préparer une position claire, cohérente et défendable dans le temps.",
    bodyEn: "Prepare a position that is clear, coherent and defensible over time.",
  },
  {
    num: '06',
    titleFr: 'Suivre',
    titleEn: 'Follow through',
    bodyFr: "Lorsque nécessaire, mettre en place une supervision ou un accompagnement continu.",
    bodyEn: "Where necessary, establish ongoing supervision or continuous support.",
  },
];

const numColStyle: React.CSSProperties = {
  width: '32px',
  flexShrink: 0,
  borderRight: '1px solid rgba(15,27,45,0.15)',
};

const numStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.6875rem',
  letterSpacing: '0.12em',
  color: 'rgba(15,27,45,0.28)',
  lineHeight: 1,
};

const stepTitleStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
  color: '#0F1B2D',
  letterSpacing: '0.01em',
  lineHeight: 1.3,
};

const stepBodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.8,
  marginTop: '8px',
};

const Methode = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Method — Stonebridge | A structured, six-step working method",
    "Méthode — Stonebridge | Une méthode de travail en six étapes",
    "La méthode Stonebridge en six étapes : qualifier, cartographier, structurer, coordonner, soutenir, suivre. Une approche rigoureuse, proportionnée au niveau de risque.",
    "Stonebridge's six-step method: qualify, map, structure, coordinate, support, follow through. A rigorous approach, proportionate to the level of risk."
  );

  return (
    <Layout variant="light">
      {/* Titre */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t(
              'A structured working method, tailored to each situation.',
              'Une méthode de travail structurée, adaptée à chaque situation.'
            )}
          </h1>
          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: 'rgba(15,27,45,0.7)',
              lineHeight: 1.75,
              marginTop: '28px',
              maxWidth: '40rem',
            }}
          >
            {t(
              "In sensitive situations, the quality of a response depends as much on the analysis as on how facts, documents, decisions and responsibilities are organised. Stonebridge operates according to a rigorous method, proportionate to the level of risk and the nature of the parties involved.",
              "Dans les situations sensibles, la qualité d'une réponse dépend autant de l'analyse que de la manière dont les faits, documents, décisions et responsabilités sont organisés. Stonebridge intervient selon une méthode rigoureuse, proportionnée au niveau de risque et à la nature des interlocuteurs concernés."
            )}
          </p>
        </div>
      </section>

      {/* Six étapes */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{ display: 'flex', gap: '20px' }}
            >
              <div style={numColStyle}>
                <span style={numStyle}>{s.num}</span>
              </div>
              <div style={{ flex: 1, paddingBottom: i < STEPS.length - 1 ? '32px' : 0 }}>
                <p style={stepTitleStyle}>{t(s.titleEn, s.titleFr)}</p>
                <p style={stepBodyStyle}>{t(s.bodyEn, s.bodyFr)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formats d'intervention */}
      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl reveal">
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0F1B2D',
              opacity: 0.38,
              marginBottom: '20px',
            }}
          >
            {t('Formats of intervention', "Formats d'intervention")}
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: '#2F2F2F',
              lineHeight: 1.8,
            }}
          >
            {t(
              'Confidential diagnostic, position note, documentary review, preparation of institutional exchanges, coordination of external advisers, ongoing support.',
              "Diagnostic confidentiel, note de position, revue documentaire, préparation d'échanges institutionnels, coordination externe, accompagnement récurrent."
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="reveal" style={{ maxWidth: '44rem' }}>
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
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.7)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.25)')}
          >
            {t('Discuss a situation confidentially →', 'Échanger de manière confidentielle →')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Methode;
