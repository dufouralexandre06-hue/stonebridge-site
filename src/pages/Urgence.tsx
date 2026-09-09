import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Urgence = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Intervention d'urgence LCB-FT — Stonebridge | Contrôle AMF, refus bancaire, mise en demeure",
    "Urgent AML/CFT support — Stonebridge | AMF audit, banking refusal, formal notice",
    "Stonebridge intervient en urgence sur les situations critiques de conformité LCB-FT : contrôle AMF ou ACPR, refus bancaire, mise en demeure, échéance d'agrément. Réponse rapide et confidentielle.",
    "Stonebridge provides urgent support in critical AML/CFT compliance situations: AMF or ACPR audit, banking refusal, formal notice, licensing deadline. Fast, confidential response."
  );

  const sections = [
    {
      bg: '#EDE9E3',
      label: t('AMF or ACPR audit', 'Contrôle AMF ou ACPR'),
      body: t(
        'Receiving notice of an audit opens a period in which every document counts. Risk mapping, procedures, traceability of due diligence, justification of the source of funds: the points examined are precise, and insufficient demonstration weighs more heavily than the absence of a framework itself. Stonebridge intervenes in audit preparation and provides support throughout the procedure, consolidating supporting evidence within the allotted time.',
        'La réception d\'un avis de contrôle ouvre une période où chaque pièce compte. Cartographie des risques, procédures, traçabilité des diligences, justification de l\'origine des fonds : les points examinés sont précis, et l\'insuffisance de démonstration pèse davantage que l\'absence de dispositif. Stonebridge intervient en préparation de contrôle et en accompagnement pendant la procédure, pour consolider les éléments justificatifs dans le temps imparti.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('Banking refusal or account closure', 'Refus ou clôture de compte bancaire'),
      body: t(
        'When a bank suspends onboarding or threatens to close an account due to insufficient justification of the source of funds, the response time is short and the operational stakes immediate. Stonebridge reconstructs the traceability of flows and prepares the elements expected by the institution.',
        'Lorsqu\'un établissement bancaire suspend une entrée en relation ou menace de clôturer un compte pour insuffisance de justification sur l\'origine des fonds, le délai de réponse est court et l\'enjeu opérationnel immédiat. Stonebridge reconstitue la traçabilité des flux et prépare les éléments attendus par l\'établissement.'
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('Formal notice or licensing deadline', 'Mise en demeure ou échéance d\'agrément'),
      body: t(
        'A formal notice from an authority, requests for additional information on a licensing application, a hard regulatory deadline: these situations require a rigorous and rapid response, with no room for approximation. Stonebridge structures the response and upgrades the framework within the constrained timeframe.',
        'Une mise en demeure d\'une autorité, des demandes de compléments sur un dossier d\'agrément, une échéance réglementaire à délai dur : ces situations exigent une réponse rigoureuse et rapide, sans marge d\'approximation. Stonebridge structure la réponse et met à niveau le dispositif dans les délais contraints.'
      ),
    },
    {
      bg: '#FAF8F5',
      label: t('A response designed for urgency', 'Une intervention pensée pour l\'urgence'),
      body: t(
        'Stonebridge mobilises a response tailored to the nature and degree of urgency of the situation, from initial analysis to the consolidation of supporting evidence. The confidentiality of exchanges is preserved at every stage, in accordance with legal and professional obligations.',
        'Stonebridge mobilise une réponse adaptée à la nature et au degré d\'urgence de la situation, depuis l\'analyse initiale jusqu\'à la consolidation des éléments justificatifs. La confidentialité des échanges est préservée à chaque étape, dans le respect des obligations légales et déontologiques.'
      ),
    },
  ];

  return (
    <Layout variant="light">

      {/* ── Titre ── */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t("Urgent support", "Intervention d'urgence")}
          </h1>

          <p
            className="reveal reveal-delay-1 mt-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              color: '#0F1B2D',
              opacity: 0.65,
              lineHeight: 1.7,
              letterSpacing: '0.01em',
            }}
          >
            {t(
              'AMF audit, banking refusal, formal notice: an immediate response when time is short',
              'Contrôle AMF, refus bancaire, mise en demeure : une réponse immédiate quand le temps est compté'
            )}
          </p>

          <p
            className="reveal reveal-delay-2 mt-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: 'rgba(15,27,45,0.72)',
              lineHeight: 1.75,
              maxWidth: '40rem',
            }}
          >
            {t(
              'Some situations leave no room for prolonged deliberation. An announced audit, a suspended bank account, an imminent regulatory deadline: the quality of the response in the first days strongly influences how the matter unfolds. Stonebridge intervenes urgently in these situations, with rapid mobilisation and an approach centred on defensibility.',
              'Certaines situations ne laissent pas le délai d\'une réflexion prolongée. Un contrôle annoncé, un compte bancaire suspendu, une échéance réglementaire imminente : la qualité de la réponse dans les premiers jours influence fortement la suite donnée au dossier. Stonebridge intervient en urgence sur ces situations, avec une capacité de mobilisation rapide et une approche centrée sur la défendabilité.'
            )}
          </p>
        </div>
      </section>

      {/* Image banner */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/urgence.jpg)',
            filter: 'grayscale(100%) brightness(0.48)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(27, 42, 65, 0.58)' }}
        />
      </div>

      {/* ── Sections de contenu ── */}
      {sections.map((s, i) => (
        <section
          key={i}
          className="px-8 md:px-16 lg:px-24 py-14 md:py-20"
          style={{ backgroundColor: s.bg }}
        >
          <div className="max-w-3xl">
            <div className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                  color: '#0F1B2D',
                  opacity: 0.38,
                  marginBottom: '18px',
                }}
              >
                {s.label}
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
                {s.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ── Contact et mention légale ── */}
      <section className="px-8 md:px-16 lg:px-24 py-14 md:py-20" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl reveal reveal-delay-1">

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0F1B2D',
              opacity: 0.38,
              marginBottom: '14px',
            }}
          >
            {t('Direct contact', 'Contact direct')}
          </p>
          <a
            href="mailto:contact@stonebridgeconsult.com"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: '#0F1B2D',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(15,27,45,0.25)',
              paddingBottom: '1px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'rgba(15,27,45,0.25)')}
          >
            contact@stonebridgeconsult.com
          </a>

          <p
            className="mt-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              fontStyle: 'italic',
              color: 'rgba(15, 27, 45, 0.4)',
              lineHeight: 1.75,
            }}
          >
            {t(
              'Stonebridge provides advisory and operational support. Outcomes depend on the specifics of each matter, the decisions of the competent authorities, and the information provided by the client. No guarantee of results is given.',
              'Stonebridge apporte un conseil et un accompagnement opérationnel. Les résultats dépendent des spécificités de chaque dossier, des décisions des autorités compétentes et des éléments communiqués par le client. Aucune garantie de résultat n\'est donnée.'
            )}
          </p>

        </div>
      </section>

    </Layout>
  );
};

export default Urgence;
