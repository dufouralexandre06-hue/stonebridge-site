import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Mandat {
  num: string;
  titleFr: string;
  titleEn: string;
  enjeuFr: string;
  enjeuEn: string;
  interventionFr: string;
  interventionEn: string;
  resultatFr: string;
  resultatEn: string;
}

const MANDATS: Mandat[] = [
  {
    num: '01',
    titleFr: 'Diagnostic et évaluation du risque',
    titleEn: 'Diagnostic and risk assessment',
    enjeuFr: "Qualifier correctement une situation avant d'engager une réponse opérationnelle ou institutionnelle.",
    enjeuEn: "Correctly qualifying a situation before committing to an operational or institutional response.",
    interventionFr: "Analyse structurée des enjeux réglementaires, institutionnels et de gouvernance. Identification des points de fragilité et des zones d'exposition. Lecture globale du risque, incluant les responsabilités personnelles et les délais contraints.",
    interventionEn: "Structured analysis of regulatory, institutional and governance challenges. Identification of vulnerabilities and areas of exposure. Comprehensive risk assessment, including personal liability and applicable deadlines.",
    resultatFr: "Note de diagnostic, cartographie des risques, recommandations de position.",
    resultatEn: "Diagnostic note, risk mapping, position recommendations.",
  },
  {
    num: '02',
    titleFr: 'Situations bancaires et diligences renforcées',
    titleEn: 'Banking situations and enhanced due diligence',
    enjeuFr: "Répondre à des refus, des demandes de justification ou des exigences de diligence renforcée imposées par un établissement financier.",
    enjeuEn: "Responding to refusals, requests for clarification or enhanced due diligence requirements from a financial institution.",
    interventionFr: "Reconstitution et structuration du dossier documentaire. Identification des zones de fragilité au regard des grilles d'analyse du secteur. Organisation des informations pertinentes et préparation d'une position cohérente, compréhensible pour les interlocuteurs de l'établissement.",
    interventionEn: "Reconstruction and structuring of the documentary file. Identification of weaknesses relative to industry risk frameworks. Organisation of relevant information and preparation of a coherent position, suited to the institution's own analysis.",
    resultatFr: "Dossier restructuré, note de position écrite, accompagnement des échanges avec l'établissement.",
    resultatEn: "Restructured file, written position note, support during exchanges with the institution.",
  },
  {
    num: '03',
    titleFr: 'Structures internationales et multi-juridictions',
    titleEn: 'International and multi-jurisdictional structures',
    enjeuFr: "Lire et structurer une situation impliquant plusieurs juridictions, des montages complexes ou des expositions réglementaires croisées.",
    enjeuEn: "Reading and structuring a situation involving multiple jurisdictions, complex arrangements or overlapping regulatory exposures.",
    interventionFr: "Analyse des chaînes de détention, du contrôle effectif et des flux. Identification des obligations applicables dans chaque juridiction concernée. Coordination des correspondants locaux et consolidation des analyses en une lecture unifiée.",
    interventionEn: "Analysis of ownership chains, effective control and flows. Identification of applicable obligations in each relevant jurisdiction. Coordination of local correspondents and consolidation of findings into a unified assessment.",
    resultatFr: "Cartographie structurée, note de position multi-juridictionnelle, recommandations de mise en conformité.",
    resultatEn: "Structured mapping, multi-jurisdictional position note, compliance recommendations.",
  },
  {
    num: '04',
    titleFr: 'Gouvernance et conformité',
    titleEn: 'Governance and compliance',
    enjeuFr: "Structurer ou renforcer un dispositif de gouvernance et de conformité adapté aux exigences réglementaires actuelles.",
    enjeuEn: "Structuring or strengthening a governance and compliance framework adapted to current regulatory requirements.",
    interventionFr: "Diagnostic du dispositif existant. Identification des manques au regard des obligations LCB-FT, de vigilance et de responsabilité des dirigeants. Élaboration ou révision des procédures, politiques internes et dispositifs de contrôle.",
    interventionEn: "Diagnostic of the existing framework. Identification of gaps against AML/CFT, due diligence and executive liability obligations. Drafting or revision of procedures, internal policies and control frameworks.",
    resultatFr: "Procédures documentées, dispositif formalisé et défendable en cas de contrôle réglementaire.",
    resultatEn: "Documented procedures, formalised framework defensible in the event of regulatory review.",
  },
  {
    num: '05',
    titleFr: 'Supervision externe et mandat continu',
    titleEn: 'External supervision and ongoing mandate',
    enjeuFr: "Disposer d'une fonction conformité opérationnelle sans recruter de profil dédié en interne.",
    enjeuEn: "Maintaining an operational compliance function without recruiting a dedicated internal resource.",
    interventionFr: "Prise en charge de la fonction de responsable conformité externalisé. Supervision régulière des obligations réglementaires, gestion des situations sensibles, reporting interne et maintien de la documentation à jour.",
    interventionEn: "Assumption of the outsourced compliance officer function. Regular supervision of regulatory obligations, management of sensitive situations, internal reporting and ongoing documentation maintenance.",
    resultatFr: "Couverture continue, documentation à jour, interlocuteur identifié pour les autorités de contrôle.",
    resultatEn: "Continuous coverage, up-to-date documentation, identified point of contact for regulatory authorities.",
  },
  {
    num: '06',
    titleFr: 'Coordination et soutien aux professionnels',
    titleEn: 'Coordination and professional support',
    enjeuFr: "Apporter une analyse indépendante ou une expertise spécialisée à des professionnels confrontés à une situation dépassant leur périmètre habituel.",
    enjeuEn: "Providing independent analysis or specialist expertise to professionals facing a situation beyond their usual scope.",
    interventionFr: "Diagnostic de la situation, identification des enjeux de compliance et de gouvernance. Coordination des intervenants spécialisés — avocats, auditeurs, conseils techniques. Production d'une note de synthèse partageable entre les parties.",
    interventionEn: "Situation assessment, identification of compliance and governance issues. Coordination of specialist contributors — lawyers, auditors, technical advisers. Production of a synthesis note shared between parties.",
    resultatFr: "Analyse indépendante, note de position ou mémo de coordination, accompagnement des échanges entre intervenants.",
    resultatEn: "Independent analysis, position note or coordination memo, support during exchanges between contributors.",
  },
];

const numStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.6875rem',
  letterSpacing: '0.12em',
  color: 'rgba(15,27,45,0.28)',
  lineHeight: 1,
  flexShrink: 0,
  paddingTop: '3px',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
  color: '#0F1B2D',
  letterSpacing: '0.01em',
  lineHeight: 1.3,
};

const enjeuStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  fontStyle: 'italic',
  color: 'rgba(15,27,45,0.62)',
  lineHeight: 1.65,
  marginTop: '10px',
};

const interventionStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.8,
  marginTop: '10px',
};

const resultatStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.8125rem',
  color: 'rgba(15,27,45,0.5)',
  lineHeight: 1.65,
  marginTop: '12px',
};

const Mandats = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Mandates — Stonebridge | Compliance and governance advisory",
    "Mandats — Stonebridge | Conseil conformité et gouvernance",
    "Six types of engagement: risk diagnostics, banking relationship structuring, AML/CFT frameworks, governance advisory, urgent support, and strategic positioning. Stonebridge, Paris.",
    "Six formats d'intervention : diagnostic de risque, structuration de la relation bancaire, dispositifs LCB-FT, conseil en gouvernance, intervention d'urgence et positionnement stratégique. Stonebridge, Paris."
  );

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
              "Stonebridge engagements take the form of discrete mandates or structured advisory assignments, where regulatory or institutional stakes require independent analysis and rigorous coordination.",
              "Les interventions de Stonebridge prennent la forme de mandats ponctuels ou d'accompagnements structurés, lorsque les enjeux réglementaires ou institutionnels nécessitent une analyse indépendante et une coordination rigoureuse."
            )}
          </p>
        </div>
      </section>

      {/* Image banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/mandats.jpg)',
            filter: 'grayscale(100%) brightness(0.51)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(27, 42, 65, 0.53)' }}
        />
      </div>

      {/* Blocs numérotés */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">
          {MANDATS.map((m, i) => (
            <div
              key={m.num}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                paddingTop: i === 0 ? 0 : '40px',
                paddingBottom: '40px',
                borderBottom: i < MANDATS.length - 1 ? '1px solid rgba(15,27,45,0.09)' : 'none',
              }}
            >
              {/* Numéro + titre */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <span style={numStyle}>{m.num}</span>
                <div style={{ flex: 1 }}>
                  <p style={titleStyle}>
                    — {t(m.titleEn, m.titleFr)}
                  </p>
                  <p style={enjeuStyle}>{t(m.enjeuEn, m.enjeuFr)}</p>
                  <p style={interventionStyle}>{t(m.interventionEn, m.interventionFr)}</p>
                  <p style={resultatStyle}>→ {t(m.resultatEn, m.resultatFr)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section de contact bas de page */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl reveal">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: 'rgba(15,27,45,0.65)',
              lineHeight: 1.75,
            }}
          >
            {t(
              "Each engagement is preceded by a confidential preliminary exchange to qualify the situation and confirm the scope of intervention.",
              "Chaque intervention est précédée d'un premier échange confidentiel destiné à qualifier la situation et à confirmer le périmètre d'intervention."
            )}
          </p>
          <Link
            to="/contact"
            style={{
              display: 'inline-block',
              marginTop: '20px',
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
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.7)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(15,27,45,0.25)';
            }}
          >
            {t('Request a first exchange →', 'Demander un premier échange →')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Mandats;
