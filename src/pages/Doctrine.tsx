import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pointLabelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: '0.5875rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#0F1B2D',
  opacity: 0.38,
  marginBottom: '6px',
};

const pointTextStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.85,
};

interface CasePoint {
  label: string;
  text: string;
}

function CaseBody({ points }: { points: CasePoint[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '36px' }}>
      {points.map((p, i) => (
        <div key={i}>
          <p style={pointLabelStyle}>{p.label}</p>
          <p style={pointTextStyle}>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

const Doctrine = () => {
  const { t } = useLanguage();
  useScrollReveal();
  const [openCase, setOpenCase] = useState<number | null>(null);

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('COMPREHENSIVE READING', 'Lecture globale'),
      body: t(
        "Each situation is analysed in its full legal, institutional and operational context. This approach identifies genuine points of tension — not merely surface-level exposures.",
        "Chaque situation est analysée dans son environnement juridique, institutionnel et opérationnel complet. Cette approche permet d'identifier les points de tension réels — et non les seules expositions apparentes."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('ARBITRATION', 'Arbitrage'),
      body: t(
        "Risk management involves navigating between regulatory constraints, operational realities and institutional responsibilities. The objective is not formal compliance — it is the construction of a coherent and defensible position.",
        "La gestion du risque implique des arbitrages entre contraintes réglementaires, réalités opérationnelles et responsabilités institutionnelles. L'objectif n'est pas la conformité formelle — c'est la construction d'une position cohérente et défendable."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('SUSTAINABILITY', 'Soutenabilité'),
      body: t(
        "A decision is only relevant if it can be sustained over time in the face of the institutions concerned. This requirement for sustainability is the central principle of the Stonebridge approach.",
        "Une décision n'est pertinente que si elle peut être soutenue dans le temps face aux institutions concernées. Cette exigence de soutenabilité constitue le principe central de l'approche Stonebridge."
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('LEGITIMACY', 'Ligne de légitimité'),
      body: t(
        "Stonebridge engagements draw on direct experience in international fiduciary and regulatory environments, particularly in Luxembourg, France and Switzerland.",
        "Les interventions de Stonebridge s'appuient sur une expérience directe en environnements fiduciaires et réglementaires internationaux, notamment au Luxembourg et en France."
      ),
    },
  ];

  const illustrativeCases = [
    {
      title: t('I — The silence as a signal', 'I — Le silence comme signal'),
      accroche: t(
        "From what point does the absence of information itself become relevant information for the purposes of ongoing due diligence obligations?",
        "À partir de quel moment l'absence d'information devient-elle elle-même une information pertinente au regard des obligations de vigilance ?"
      ),
      points: [
        {
          label: t('Situation', 'Situation'),
          text: t(
            "A long-standing banking relationship with a non-resident client, standard risk profile, no incidents on file. The client stops responding. The periodic review, now overdue, is deferred.",
            "Relation bancaire ancienne avec un client non-résident, profil de risque classé standard, aucun incident au dossier. Le client cesse de répondre. La revue périodique, échue, est différée."
          ),
        },
        {
          label: t('Question', 'Question'),
          text: t(
            "Does the absence of an internal signal justify suspending heightened vigilance?",
            "L'absence de signal interne suffit-elle à justifier la suspension d'une vigilance renforcée ?"
          ),
        },
        {
          label: t('Analysis', 'Analyse'),
          text: t(
            "Ongoing due diligence requires information to flow from outside the file into the file. The absence of an internal signal does not constitute clearance. External monitoring — press, third-party sources — can retrospectively alter a client's risk profile.",
            "La vigilance constante impose que l'information circule depuis l'extérieur vers le dossier. L'absence de signal interne ne vaut pas quitus. Une veille externe — presse, sources tiers — peut modifier rétrospectivement la qualification du profil de risque."
          ),
        },
        {
          label: t('Engagement', 'Intervention'),
          text: t(
            "Cross-referencing of external monitoring with portfolio knowledge. Immediate reactivation of the deferred review. Risk profile reassessment. Suspicious activity report filed within the statutory deadlines.",
            "Rapprochement de la veille externe avec la connaissance du portefeuille. Réactivation immédiate de la revue différée. Réévaluation du profil de risque. Instruction de la déclaration de soupçon dans les délais légaux."
          ),
        },
        {
          label: t('Objective', 'Résultat recherché'),
          text: t(
            "Suspicious activity report filed and transactions frozen. Documented and defensible framework in the event of regulatory scrutiny. No exposure to failure-to-monitor liability.",
            "Déclaration déposée et opérations gelées. Dispositif documenté et défendable devant l'autorité de contrôle. Absence de mise en cause pour défaut de vigilance."
          ),
        },
      ],
    },
    {
      title: t('II — Le bénéficiaire que nul ne déclare', 'II — Le bénéficiaire que nul ne déclare'),
      accroche: t(
        "What remains of the beneficial owner when each shareholding has been precisely calibrated to make them disappear?",
        "Que reste-t-il du bénéficiaire effectif lorsque chaque participation a précisément été calibrée pour le faire disparaître ?"
      ),
      points: [
        {
          label: t('Situation', 'Situation'),
          text: t(
            "A Cypriot holding company subscribing to a fund. Six shareholders, none above the 25% threshold. Complete declaratory file, no beneficial owner declared at the capital level.",
            "Une holding chypriote souscrivant un fonds. Six actionnaires, aucun au-dessus du seuil de 25 %. Dossier déclaratif complet, aucun bénéficiaire effectif déclaré au capital."
          ),
        },
        {
          label: t('Question', 'Question'),
          text: t(
            "Does deliberate fragmentation below the regulatory threshold suffice to erase actual control?",
            "Le fractionnement délibéré sous le seuil réglementaire suffit-il à faire disparaître le contrôle réel ?"
          ),
        },
        {
          label: t('Analysis', 'Analyse'),
          text: t(
            "The shareholding lines converge on a single British Virgin Islands vehicle common to several lines. Control can be exercised outside the capital structure — through shareholder agreements, voting arrangements, or financing. Identification does not stop at percentages.",
            "Les lignes de participation convergent vers un même véhicule des Îles Vierges, commun à plusieurs lignes. Le contrôle peut s'exercer hors du capital — pactes, conventions de vote, financement. L'identification ne s'arrête pas aux pourcentages."
          ),
        },
        {
          label: t('Engagement', 'Intervention'),
          text: t(
            "Reconstruction of each ownership chain level by level. Identification of the common vehicle. Consolidation of direct and indirect holdings. Analysis of effective powers beyond the capital structure.",
            "Reconstitution de chaque chaîne de détention niveau par niveau. Identification du véhicule commun. Consolidation des détentions directes et indirectes. Analyse des pouvoirs effectifs au-delà du capital."
          ),
        },
        {
          label: t('Objective', 'Résultat recherché'),
          text: t(
            "Identification of the actual beneficial owner. Documentary compliance of the onboarding file. Defensible position in the event of scrutiny on the robustness of the onboarding process.",
            "Identification du bénéficiaire effectif réel. Mise en conformité documentaire du dossier d'entrée en relation. Position défendable en cas de contrôle sur la robustesse du processus d'entrée en relation."
          ),
        },
      ],
    },
    {
      title: t('III — Le lien qui ne figure dans aucune liste', 'III — Le lien qui ne figure dans aucune liste'),
      accroche: t(
        "Between official function and proximity to power lies a zone where lists cease to provide a sufficient answer.",
        "Entre la fonction officielle et la proximité avec le pouvoir existe une zone où les listes cessent d'apporter une réponse suffisante."
      ),
      points: [
        {
          label: t('Situation', 'Situation'),
          text: t(
            "A French resident, liberal profession, honorary consul of a sub-Saharan African state. No remuneration. No executive function. No text resolves the PEP classification.",
            "Résident français, profession libérale, consul honoraire d'un État d'Afrique subsaharienne. Aucune rémunération. Aucune fonction exécutive. Aucun texte ne tranche la qualification PPE."
          ),
        },
        {
          label: t('Question', 'Question'),
          text: t(
            "Does the absence of a listing or statutory enumeration suffice to exclude the classification of politically exposed person?",
            "L'absence d'inscription sur une liste ou dans une énumération légale suffit-elle à écarter la qualification de personne politiquement exposée ?"
          ),
        },
        {
          label: t('Analysis', 'Analyse'),
          text: t(
            "Two competing and equally legitimate readings. Exposure does not follow a list — it follows relationships. Appointment by a foreign government and access to networks of influence call for a prudent classification.",
            "Deux lectures concurrentes et également légitimes. L'exposition ne suit pas une liste — elle suit des liens. La nomination par un gouvernement étranger et l'accès à des réseaux d'influence commandent une qualification prudente."
          ),
        },
        {
          label: t('Engagement', 'Intervention'),
          text: t(
            "PEP classification retained. Enhanced due diligence applied. Reasoning filed on record. Position constructed to be defensible before a supervisory authority, not to satisfy the letter of a silent text.",
            "Qualification PPE retenue. Vigilance renforcée appliquée. Motivation versée au dossier. Position construite pour être défendable devant l'autorité de contrôle, non pour satisfaire à la lettre d'un texte silencieux."
          ),
        },
        {
          label: t('Objective', 'Résultat recherché'),
          text: t(
            "Position defensible before the supervisory authority. Enhanced and documented due diligence framework. Internal precedent applicable to future cases of uncertain classification.",
            "Position tenable devant l'autorité de contrôle. Dispositif renforcé documenté et motivé. Précédent interne applicable aux situations futures de qualification incertaine."
          ),
        },
      ],
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

      {/* Image banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/doctrine.jpg)',
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

      {/* ── Cas illustratifs ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">

          <h2
            className="reveal font-serif uppercase mb-6"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Illustrative Cases', 'Cas illustratifs')}
          </h2>

          <p
            className="reveal reveal-delay-1 mb-14"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              fontStyle: 'italic',
              color: 'rgba(15, 27, 45, 0.45)',
              lineHeight: 1.7,
            }}
          >
            {t(
              'Situations types. Aucun élément réel. Toute ressemblance avec un dossier existant serait fortuite.',
              'Situations types. Aucun élément réel. Toute ressemblance avec un dossier existant serait fortuite.'
            )}
          </p>

          <div style={{ borderBottom: '1px solid rgba(15, 27, 45, 0.12)' }}>
            {illustrativeCases.map((cas, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(15, 27, 45, 0.12)' }}>
                <button
                  onClick={() => setOpenCase(openCase === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '28px 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '24px',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      className="font-serif"
                      style={{
                        color: '#0F1B2D',
                        fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        marginBottom: '10px',
                      }}
                    >
                      {cas.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        fontSize: '0.875rem',
                        color: '#2F2F2F',
                        lineHeight: 1.75,
                        opacity: 0.8,
                      }}
                    >
                      {cas.accroche}
                    </p>
                  </div>
                  <ChevronDown
                    size={15}
                    style={{
                      color: '#BFA46F',
                      flexShrink: 0,
                      marginTop: '5px',
                      transform: openCase === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>

                {openCase === i && (
                  <CaseBody points={cas.points} />
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: 'rgba(15, 27, 45, 0.6)',
                lineHeight: 1.75,
                marginBottom: '12px',
              }}
            >
              {t(
                "Ces situations s'inscrivent dans une réflexion plus large sur la vigilance constante et la défendabilité des dispositifs.",
                "Ces situations s'inscrivent dans une réflexion plus large sur la vigilance constante et la défendabilité des dispositifs."
              )}
            </p>
            <a
              href="https://www.village-justice.com/articles/triangle-conformite-friction-silencieuse-entre-conformite-dirigeant-client,57699.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.8125rem',
                letterSpacing: '0.04em',
                color: '#BFA46F',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(191, 164, 111, 0.4)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s ease, opacity 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderBottomColor = '#BFA46F';
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderBottomColor = 'rgba(191, 164, 111, 0.4)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              {t("Lire l'article publié", "Lire l'article publié")}
            </a>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Doctrine;
