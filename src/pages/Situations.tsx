import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Scenario {
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
}

const SCENARIOS: Scenario[] = [
  {
    titleFr: "Refus ou difficultés d'accès aux relations bancaires",
    titleEn: "Refusal or difficulties accessing banking relationships",
    bodyFr: "Un family office ou une structure patrimoniale se voit refuser l'ouverture d'un compte, ou fait face à des demandes documentaires croissantes sans issue claire. Les délais s'allongent, les interlocuteurs se raréfient. Ce que la structure vit comme une procédure administrative est souvent le signe d'un processus de dérisquage engagé en interne par l'établissement.",
    bodyEn: "A family office or wealth structure is refused an account opening, or faces growing documentary demands with no clear resolution. Timelines lengthen, contacts become scarce. What the structure experiences as an administrative procedure is often the sign of an internal de-risking process already underway at the institution.",
  },
  {
    titleFr: "Structures internationales à opacité apparente",
    titleEn: "International structures with apparent opacity",
    bodyFr: "Une holding détient des participations dans plusieurs juridictions. La chaîne de détention, parfaitement légale, est difficile à présenter de manière lisible à un interlocuteur bancaire ou réglementaire. Les questions sur le contrôle effectif, les bénéficiaires ultimes et les flux reviennent à chaque nouvelle relation institutionnelle — sans que la structure dispose d'une réponse documentée et cohérente.",
    bodyEn: "A holding company holds interests across several jurisdictions. The ownership chain, perfectly lawful, is difficult to present in a readable way to a banking or regulatory counterparty. Questions about effective control, ultimate beneficial owners and flows resurface at each new institutional relationship — without the structure having a documented, coherent answer ready.",
  },
  {
    titleFr: "Profils exposés ou classification à risque élevé",
    titleEn: "Exposed profiles or high-risk classification",
    bodyFr: "Le dirigeant, l'actionnaire principal ou un proche figure dans une base de données PPE ou a été associé, même indirectement, à une situation médiatisée. Les diligences renforcées deviennent systématiques, les conditions d'accès aux services financiers se restreignent progressivement, et la structure ne dispose pas toujours de la documentation nécessaire pour contester cette lecture.",
    bodyEn: "A director, principal shareholder or close associate appears in a PEP database, or has been linked — even indirectly — to a publicised situation. Enhanced due diligence becomes systematic, access to financial services gradually narrows, and the structure does not always have the documentation required to challenge this classification.",
  },
  {
    titleFr: "Environnements réglementaires sensibles",
    titleEn: "Sensitive regulatory environments",
    bodyFr: "L'activité implique des actifs atypiques — crypto-actifs, matières premières, flux transfrontaliers fréquents — ou s'inscrit dans un secteur exposé à une surveillance renforcée. Chaque nouvelle relation bancaire ou institutionnelle rouvre le même dossier. L'enjeu n'est pas de justifier l'activité mais de la rendre lisible selon les grilles d'analyse du secteur financier.",
    bodyEn: "The activity involves atypical assets — crypto-assets, commodities, frequent cross-border flows — or operates in a sector subject to heightened oversight. Each new banking or institutional relationship reopens the same file. The challenge is not to justify the activity but to make it legible through the analytical frameworks of the financial sector.",
  },
  {
    titleFr: "Situations pré-contentieuses ou anticipation de crise",
    titleEn: "Pre-contentious situations or crisis anticipation",
    bodyFr: "Des signaux faibles se multiplient : correspondance inhabituelle d'un contrôleur, gel préventif, demande d'information d'une autorité de supervision. La structure n'est pas encore en procédure formelle, mais le moment de qualifier la situation et de préparer une position structurée est déjà là — et souvent, le délai pour agir est plus court qu'il n'y paraît.",
    bodyEn: "Weak signals are accumulating: unusual correspondence from a supervisor, a precautionary freeze, an information request from a regulatory authority. The structure is not yet in formal proceedings, but the time to qualify the situation and prepare a structured position has already come — and often, the window to act is shorter than it appears.",
  },
  {
    titleFr: "Pression externe ou questionnement institutionnel",
    titleEn: "External pressure or institutional questioning",
    bodyFr: "Une demande de justification formelle, un audit inopiné, ou la pression d'un partenaire institutionnel place la structure dans une posture défensive. Il faut répondre de manière cohérente, dans un délai contraint, avec une position défendable. Répondre sans préparation revient souvent à aggraver la situation.",
    bodyEn: "A formal request for justification, an unannounced audit, or pressure from an institutional partner puts the structure on the defensive. A coherent, defensible response is required within a tight deadline. Responding without preparation often worsens the situation.",
  },
];

const scenarioTitleStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
  color: '#0F1B2D',
  letterSpacing: '0.01em',
  lineHeight: 1.35,
};

const scenarioBodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: 'rgba(47,47,47,0.9)',
  lineHeight: 1.8,
  marginTop: '10px',
};

const Situations = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <Layout variant="light">
      {/* Titre */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Situations', 'Situations')}
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
              "Certain situations present a level of complexity or institutional sensitivity that makes internal qualification difficult and internal management insufficient. Stonebridge provides a structured reading of the risk and the responsibilities involved.",
              "Certaines situations présentent un niveau de complexité ou de sensibilité institutionnelle qui rend leur qualification difficile et leur gestion interne insuffisante. Stonebridge apporte une lecture structurée du risque et des responsabilités engagées."
            )}
          </p>
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

      {/* 6 mini-scénarios */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl">
          {SCENARIOS.map((s, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                paddingTop: i === 0 ? 0 : '36px',
                paddingBottom: '36px',
                borderBottom: i < SCENARIOS.length - 1 ? '1px solid rgba(15,27,45,0.09)' : 'none',
              }}
            >
              <p style={scenarioTitleStyle}>{t(s.titleEn, s.titleFr)}</p>
              <p style={scenarioBodyStyle}>{t(s.bodyEn, s.bodyFr)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce que Stonebridge fait */}
      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          <div className="reveal reveal-delay-1">
            <h2
              className="institutional-label mb-6"
              style={{ color: '#0F1B2D', opacity: 0.45 }}
            >
              {t("What Stonebridge does", "Ce que Stonebridge fait")}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: 'rgba(15,27,45,0.72)',
                lineHeight: 1.8,
              }}
            >
              {t(
                "We qualify risks, identify documentary or governance shortcomings, organise relevant information, coordinate advisers and build a position capable of being understood and supported by institutional counterparties.",
                "Nous qualifions les risques, identifions les insuffisances documentaires ou de gouvernance, organisons les informations utiles, coordonnons les conseils concernés et construisons une position susceptible d'être comprise et soutenue par les interlocuteurs institutionnels."
              )}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: 'rgba(15,27,45,0.48)',
                lineHeight: 1.7,
                marginTop: '14px',
              }}
            >
              {t(
                "Formats: confidential diagnostic, position note, documentary review, preparation of exchanges with a financial institution or regulatory authority, coordination of external advisers, remediation support.",
                "Formats : diagnostic confidentiel, note de position, revue documentaire, préparation d'échanges avec un établissement financier ou une autorité, coordination de conseils externes, accompagnement de remédiation."
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Situations;
