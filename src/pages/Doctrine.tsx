import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// ── Principes ──────────────────────────────────────────────────────────────────

interface Principe {
  num: string;
  titleFr: string;
  titleEn: string;
  bodyFr: string;
  bodyEn: string;
}

const PRINCIPES: Principe[] = [
  {
    num: '01',
    titleFr: 'Lecture globale',
    titleEn: 'Comprehensive reading',
    bodyFr: "Chaque situation est examinée dans son environnement juridique, institutionnel, opérationnel et humain. L'enjeu est d'identifier les véritables points de tension, au-delà des seules expositions apparentes.",
    bodyEn: "Each situation is examined in its legal, institutional, operational and human context. The goal is to identify genuine points of tension, beyond apparent exposures alone.",
  },
  {
    num: '02',
    titleFr: 'Arbitrage',
    titleEn: 'Arbitration',
    bodyFr: "La conformité implique des choix : entre obligation réglementaire, réalité opérationnelle, intérêt du client et responsabilité de la décision. Stonebridge aide à rendre ces arbitrages explicites, cohérents et documentés.",
    bodyEn: "Compliance involves choices: between regulatory obligation, operational reality, client interest and decision accountability. Stonebridge helps make those trade-offs explicit, coherent and documented.",
  },
  {
    num: '03',
    titleFr: 'Soutenabilité',
    titleEn: 'Sustainability',
    bodyFr: "Une réponse n'est utile que si elle peut être expliquée, justifiée et maintenue dans le temps auprès des interlocuteurs concernés. La soutenabilité constitue le critère final d'une position solide.",
    bodyEn: "A response is only useful if it can be explained, justified and maintained over time before the relevant counterparties. Sustainability is the final criterion of a solid position.",
  },
];

// ── Cas illustratifs ──────────────────────────────────────────────────────────

interface CasPoint {
  labelFr: string;
  labelEn: string;
  textFr: string;
  textEn: string;
}

interface Cas {
  titleFr: string;
  titleEn: string;
  accrocheFr: string;
  accrocheEn: string;
  points: CasPoint[];
}

const CAS: Cas[] = [
  {
    titleFr: 'I — Le silence comme signal',
    titleEn: 'I — Silence as a signal',
    accrocheFr: "À partir de quel moment l'absence d'information devient-elle elle-même une information pertinente au regard des obligations de vigilance ?",
    accrocheEn: "From what point does the absence of information itself become relevant information for the purposes of ongoing due diligence obligations?",
    points: [
      {
        labelFr: 'Situation',
        labelEn: 'Situation',
        textFr: "Relation bancaire ancienne avec un client non-résident, profil de risque classé standard, aucun incident au dossier. Le client cesse de répondre. La revue périodique, échue, est différée.",
        textEn: "A long-standing banking relationship with a non-resident client, standard risk profile, no incidents on file. The client stops responding. The periodic review, now overdue, is deferred.",
      },
      {
        labelFr: 'Question',
        labelEn: 'Question',
        textFr: "L'absence de signal interne suffit-elle à justifier la suspension d'une vigilance renforcée ?",
        textEn: "Does the absence of an internal signal justify suspending heightened vigilance?",
      },
      {
        labelFr: "Points d'attention",
        labelEn: 'Key considerations',
        textFr: "La vigilance constante impose que l'information circule depuis l'extérieur vers le dossier. L'absence de signal interne ne vaut pas quitus. Une veille externe — presse, sources tiers — peut modifier rétrospectivement la qualification du profil de risque.",
        textEn: "Ongoing due diligence requires information to flow from outside the file into the file. The absence of an internal signal does not constitute clearance. External monitoring — press, third-party sources — can retrospectively alter a client's risk profile.",
      },
      {
        labelFr: 'Ce que Stonebridge structure',
        labelEn: 'What Stonebridge structures',
        textFr: "Rapprochement de la veille externe avec la connaissance du portefeuille. Réactivation immédiate de la revue différée. Réévaluation du profil de risque. Instruction de la déclaration de soupçon dans les délais légaux. Dispositif documenté et défendable devant l'autorité de contrôle.",
        textEn: "Cross-referencing of external monitoring with portfolio knowledge. Immediate reactivation of the deferred review. Risk profile reassessment. Suspicious activity report filed within statutory deadlines. Documented and defensible framework in the event of regulatory scrutiny.",
      },
    ],
  },
  {
    titleFr: 'II — Le bénéficiaire que nul ne déclare',
    titleEn: 'II — The beneficial owner no one declares',
    accrocheFr: "Que reste-t-il du bénéficiaire effectif lorsque chaque participation a précisément été calibrée pour le faire disparaître ?",
    accrocheEn: "What remains of the beneficial owner when each shareholding has been precisely calibrated to make them disappear?",
    points: [
      {
        labelFr: 'Situation',
        labelEn: 'Situation',
        textFr: "Une holding chypriote souscrivant un fonds. Six actionnaires, aucun au-dessus du seuil de 25 %. Dossier déclaratif complet, aucun bénéficiaire effectif déclaré au capital.",
        textEn: "A Cypriot holding company subscribing to a fund. Six shareholders, none above the 25% threshold. Complete declaratory file, no beneficial owner declared at the capital level.",
      },
      {
        labelFr: 'Question',
        labelEn: 'Question',
        textFr: "Le fractionnement délibéré sous le seuil réglementaire suffit-il à faire disparaître le contrôle réel ?",
        textEn: "Does deliberate fragmentation below the regulatory threshold suffice to erase actual control?",
      },
      {
        labelFr: "Points d'attention",
        labelEn: 'Key considerations',
        textFr: "Les lignes de participation convergent vers un même véhicule des Îles Vierges, commun à plusieurs lignes. Le contrôle peut s'exercer hors du capital — pactes, conventions de vote, financement. L'identification ne s'arrête pas aux pourcentages.",
        textEn: "The shareholding lines converge on a single British Virgin Islands vehicle common to several lines. Control can be exercised outside the capital structure — through shareholder agreements, voting arrangements, or financing. Identification does not stop at percentages.",
      },
      {
        labelFr: 'Ce que Stonebridge structure',
        labelEn: 'What Stonebridge structures',
        textFr: "Reconstitution de chaque chaîne de détention niveau par niveau. Identification du véhicule commun. Consolidation des détentions directes et indirectes. Analyse des pouvoirs effectifs au-delà du capital. Identification du bénéficiaire effectif réel et mise en conformité documentaire du dossier d'entrée en relation.",
        textEn: "Reconstruction of each ownership chain level by level. Identification of the common vehicle. Consolidation of direct and indirect holdings. Analysis of effective powers beyond the capital structure. Identification of the actual beneficial owner and documentary compliance of the onboarding file.",
      },
    ],
  },
  {
    titleFr: 'III — Le lien qui ne figure dans aucune liste',
    titleEn: 'III — The link that appears on no list',
    accrocheFr: "Entre la fonction officielle et la proximité avec le pouvoir existe une zone où les listes cessent d'apporter une réponse suffisante.",
    accrocheEn: "Between official function and proximity to power lies a zone where lists cease to provide a sufficient answer.",
    points: [
      {
        labelFr: 'Situation',
        labelEn: 'Situation',
        textFr: "Résident français, profession libérale, consul honoraire d'un État d'Afrique subsaharienne. Aucune rémunération. Aucune fonction exécutive. Aucun texte ne tranche la qualification PPE.",
        textEn: "A French resident, liberal profession, honorary consul of a sub-Saharan African state. No remuneration. No executive function. No text resolves the PEP classification.",
      },
      {
        labelFr: 'Question',
        labelEn: 'Question',
        textFr: "L'absence d'inscription sur une liste ou dans une énumération légale suffit-elle à écarter la qualification de personne politiquement exposée ?",
        textEn: "Does the absence of a listing or statutory enumeration suffice to exclude the classification of politically exposed person?",
      },
      {
        labelFr: "Points d'attention",
        labelEn: 'Key considerations',
        textFr: "Deux lectures concurrentes et également légitimes. L'exposition ne suit pas une liste — elle suit des liens. La nomination par un gouvernement étranger et l'accès à des réseaux d'influence commandent une qualification prudente.",
        textEn: "Two competing and equally legitimate readings. Exposure does not follow a list — it follows relationships. Appointment by a foreign government and access to networks of influence call for a prudent classification.",
      },
      {
        labelFr: 'Ce que Stonebridge structure',
        labelEn: 'What Stonebridge structures',
        textFr: "Qualification PPE retenue. Vigilance renforcée appliquée. Motivation versée au dossier. Position construite pour être défendable devant l'autorité de contrôle et applicable aux situations futures de qualification incertaine.",
        textEn: "PEP classification retained. Enhanced due diligence applied. Reasoning filed on record. Position constructed to be defensible before a supervisory authority and applicable to future cases of uncertain classification.",
      },
    ],
  },
];

// ── Publications ──────────────────────────────────────────────────────────────

const PUBLICATIONS = [
  {
    year: '2025',
    titleFr: "Dirigeant, commercial et responsable conformité : une même personne peut-elle rester crédible ?",
    titleEn: "Director, business developer and compliance officer: can the same person remain credible?",
    resumeFr: "Analyse des tensions structurelles lorsqu'une même personne occupe simultanément des fonctions incompatibles dans un dispositif de conformité.",
    resumeEn: "Analysis of the structural tensions when a single person simultaneously holds incompatible functions within a compliance framework.",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/dirigeant-commercial-responsable-conformite-une-meme-personne-peut-elle-rester,57998.html',
  },
  {
    year: '2025',
    titleFr: "Le triangle de la conformité : friction silencieuse entre conformité, dirigeant et client",
    titleEn: "The compliance triangle: silent friction between compliance, management and client",
    resumeFr: "Sur les interactions entre l'obligation de conformité, les objectifs commerciaux et les intérêts du client dans la gestion du risque réglementaire.",
    resumeEn: "On the interactions between compliance obligation, commercial objectives and client interests in the management of regulatory risk.",
    source: 'Village de la Justice',
    url: 'https://www.village-justice.com/articles/triangle-conformite-friction-silencieuse-entre-conformite-dirigeant-client,57699.html',
  },
];

// ── Styles ────────────────────────────────────────────────────────────────────

const caseLabelStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.5875rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#0F1B2D',
  opacity: 0.38,
  marginBottom: '8px',
};

const caseTextStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.8,
};

// ── Composant ─────────────────────────────────────────────────────────────────

const Doctrine = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Doctrine — Stonebridge | Comprehensive reading, arbitration, sustainability",
    "Doctrine — Stonebridge | Lecture globale, arbitrage, soutenabilité",
    "La doctrine Stonebridge : lecture globale des situations, arbitrages explicites entre obligation réglementaire et réalité opérationnelle, recherche de dispositifs soutenables dans la durée.",
    "Stonebridge's doctrine: comprehensive reading of situations, explicit arbitration between regulatory obligation and operational reality, pursuit of frameworks that remain sustainable over time."
  );
  const [openCase, setOpenCase] = useState<number | null>(null);

  return (
    <Layout variant="light">

      {/* ── 1. HERO ÉDITORIAL ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FAF8F5' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-5"
          style={{ minHeight: '100vh' }}
        >
          {/* Texte — 3/5 */}
          <div
            className="md:col-span-3 px-8 md:px-16 lg:px-24 flex flex-col justify-center"
            style={{ paddingTop: '10rem', paddingBottom: '5rem' }}
          >
            <h1
              className="reveal font-serif uppercase"
              style={{
                color: '#0F1B2D',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                letterSpacing: '0.07em',
                fontWeight: 400,
                lineHeight: 1.05,
              }}
            >
              {t('Doctrine', 'Doctrine')}
            </h1>

            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                color: 'rgba(15,27,45,0.68)',
                lineHeight: 1.8,
                maxWidth: '30rem',
                marginTop: '24px',
              }}
            >
              {t(
                "An approach to compliance founded on reading situations, accountability for decisions and the sustainability of positions over time.",
                "Une approche de la conformité fondée sur la lecture des situations, la responsabilité des décisions et la soutenabilité des positions dans le temps."
              )}
            </p>
          </div>

          {/* Image — 2/5 (desktop seulement) */}
          <div
            className="hidden md:block md:col-span-2 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/doctrine.jpg)',
                filter: 'grayscale(100%) brightness(0.52)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'rgba(15, 27, 45, 0.30)' }}
            />
          </div>
        </div>
      </section>

      {/* Image mobile uniquement */}
      <div
        className="block md:hidden relative overflow-hidden"
        style={{ height: '32vh' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/doctrine.jpg)',
            filter: 'grayscale(100%) brightness(0.52)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(15, 27, 45, 0.35)' }}
        />
      </div>

      {/* ── 2. TROIS PRINCIPES ────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10" style={{ maxWidth: '56rem' }}>
          {PRINCIPES.map((p, i) => (
            <div
              key={p.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ borderTop: '1px solid rgba(15,27,45,0.12)', paddingTop: '18px' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    color: 'rgba(15,27,45,0.28)',
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: '3px',
                  }}
                >
                  {p.num}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    color: '#0F1B2D',
                    fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    lineHeight: 1.25,
                  }}
                >
                  {t(p.titleEn, p.titleFr)}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  color: 'rgba(15,27,45,0.7)',
                  lineHeight: 1.8,
                }}
              >
                {t(p.bodyEn, p.bodyFr)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. POSITION STONEBRIDGE ───────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: '#0F1B2D' }}
      >
        <div className="reveal" style={{ maxWidth: '36rem' }}>
          <p
            className="font-serif"
            style={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)',
              fontWeight: 400,
              lineHeight: 1.38,
              letterSpacing: '0.01em',
              marginBottom: '28px',
            }}
          >
            {t(
              "Build a position — not merely produce compliance.",
              "Construire une position, pas seulement produire une conformité."
            )}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.58)',
              lineHeight: 1.8,
            }}
          >
            {t(
              "Stonebridge intervenes when the regulatory response cannot be reduced to a checklist. The firm connects facts, documents, people, jurisdictions and responsibilities to construct a position that is intelligible to the parties concerned and sufficiently robust to hold over time.",
              "Stonebridge intervient lorsque la réponse réglementaire ne peut pas être réduite à une checklist. Le cabinet met en relation les faits, les documents, les personnes, les juridictions et les responsabilités afin de construire une position intelligible pour les parties concernées et suffisamment solide pour résister dans le temps."
            )}
          </p>
        </div>
      </section>

      {/* ── 4. CAS ILLUSTRATIFS ───────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: '#EDE9E3' }}
      >
        <div style={{ maxWidth: '44rem' }}>

          <h2
            className="reveal font-serif"
            style={{
              color: '#0F1B2D',
              fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              marginBottom: '12px',
            }}
          >
            {t('Illustrative Cases', 'Cas illustratifs')}
          </h2>

          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              fontStyle: 'italic',
              color: 'rgba(15,27,45,0.42)',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            {t(
              "Illustrative cases — The situations presented are fictional. Their sole purpose is to illustrate questions of method; they describe no mandate or client situation.",
              "Cas illustratifs — Les situations présentées sont fictives. Elles ont pour seul objet d'illustrer des questions de méthode ; elles ne décrivent aucun mandat ni aucune situation client."
            )}
          </p>

          <div style={{ borderBottom: '1px solid rgba(15,27,45,0.12)' }}>
            {CAS.map((cas, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(15,27,45,0.12)' }}>
                <button
                  onClick={() => setOpenCase(openCase === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '24px 0',
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
                        fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {t(cas.titleEn, cas.titleFr)}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        fontSize: '0.875rem',
                        color: 'rgba(15,27,45,0.58)',
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      {t(cas.accrocheEn, cas.accrocheFr)}
                    </p>
                  </div>
                  <ChevronDown
                    size={14}
                    style={{
                      color: 'rgba(15,27,45,0.28)',
                      flexShrink: 0,
                      marginTop: '4px',
                      transform: openCase === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </button>

                {openCase === i && (
                  <div style={{ paddingBottom: '32px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    {cas.points.map((point, j) => (
                      <div key={j}>
                        <p style={caseLabelStyle}>
                          {language === 'fr' ? point.labelFr : point.labelEn}
                        </p>
                        <p style={caseTextStyle}>
                          {language === 'fr' ? point.textFr : point.textEn}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. PUBLICATIONS ──────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-16 md:py-24"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div style={{ maxWidth: '44rem' }}>

          <h2
            className="reveal"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0F1B2D',
              opacity: 0.38,
              marginBottom: '36px',
            }}
          >
            {t('Publications', 'Publications')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.06em',
                      color: 'rgba(15,27,45,0.38)',
                    }}
                  >
                    {pub.year}
                  </span>
                  <span style={{ width: '1px', height: '10px', backgroundColor: 'rgba(15,27,45,0.15)', display: 'inline-block' }} />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.6875rem',
                      color: 'rgba(15,27,45,0.38)',
                    }}
                  >
                    {pub.source}
                  </span>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    color: '#0F1B2D',
                    textDecoration: 'none',
                    lineHeight: 1.5,
                    borderBottom: '1px solid rgba(15,27,45,0.15)',
                    paddingBottom: '1px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.15)')}
                >
                  {t(pub.titleEn, pub.titleFr)}
                </a>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    fontStyle: 'italic',
                    color: 'rgba(15,27,45,0.48)',
                    lineHeight: 1.7,
                    marginTop: '8px',
                  }}
                >
                  {t(pub.resumeEn, pub.resumeFr)}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{ marginTop: '40px', paddingTop: '28px', borderTop: '1px solid rgba(15,27,45,0.08)' }}
          >
            <Link
              to="/actualites"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: 'rgba(15,27,45,0.45)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(15,27,45,0.15)',
                paddingBottom: '1px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(15,27,45,0.78)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(15,27,45,0.45)')}
            >
              {t('Regulatory watch and recent publications →', 'Veille réglementaire et publications récentes →')}
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5bis. ORIGINE ET EXPERTISE ────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-14 md:py-20"
        style={{ backgroundColor: '#EDE9E3' }}
      >
        <div className="reveal" style={{ maxWidth: '42rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={caseTextStyle}>
            {t(
              "Stonebridge's approach is grounded in operational risk practice, developed within a multi-jurisdictional Luxembourg trust and corporate services group specialising in the cross-border structuring of companies and investment funds for an international clientele. Within that group, Stonebridge held operational responsibility for the compliance function, working directly with its various jurisdictions and the regulatory requirements specific to each. This hands-on, multi-jurisdictional practice forms the firm's methodological foundation: a reading of risk built on concrete case experience rather than a theoretical approach.",
              "Stonebridge fonde son approche sur une pratique opérationnelle du risque, acquise au sein d'un groupe fiduciaire luxembourgeois multi-juridictions, spécialisé dans la structuration transfrontalière de sociétés et de fonds d'investissement pour une clientèle internationale. Stonebridge y a assumé la responsabilité opérationnelle de la fonction compliance, en lien direct avec les différentes implantations du groupe, au contact des exigences réglementaires propres à chaque juridiction. Cette pratique de terrain, multi-juridictionnelle, constitue le socle méthodologique du cabinet : une lecture du risque construite sur l'expérience concrète des dossiers, plutôt que sur une approche théorique."
            )}
          </p>
          <p style={caseTextStyle}>
            {t(
              "The firm works alongside legal, accounting and regulatory professionals, engaged according to the specific needs of each matter — on a coordination basis rather than blanket outsourcing.",
              "Le cabinet travaille en lien avec des professionnels du droit, du chiffre et de la réglementation, mobilisés selon les besoins spécifiques de chaque dossier — dans une logique de coordination plutôt que de sous-traitance généralisée."
            )}
          </p>
          <p style={caseTextStyle}>
            {t(
              "Stonebridge supports family offices, asset managers and legal professionals — whether they lack a dedicated in-house compliance function, or are seeking an external perspective or targeted support on a specific matter.",
              "Stonebridge accompagne les family offices, gestionnaires d'actifs et professionnels du droit — qu'ils ne disposent pas de fonction compliance dédiée en interne, ou qu'ils recherchent un regard extérieur ou un renfort ponctuel sur un dossier spécifique."
            )}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.8125rem',
              fontStyle: 'italic',
              color: 'rgba(15,27,45,0.45)',
              letterSpacing: '0.01em',
              marginTop: '8px',
            }}
          >
            Alexandre Dufour, Managing Partner
          </p>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 lg:px-24 py-14 md:py-20"
        style={{ backgroundColor: '#ffffff' }}
      >
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

export default Doctrine;
