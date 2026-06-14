import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const casI_body =
`Une structure de gestion accompagne depuis plusieurs années un client non-résident. Le dossier d'entrée en relation est complet, le profil de risque classé standard, la relation ancienne et sans incident.

Le client cesse de répondre. Les relances demeurent sans suite. La structure conclut à une absence temporaire ; ce type de client voyage. La revue périodique, échue, est différée.

Une veille réglementaire suivie signale, dans la presse économique d'un pays tiers, la mise en cause d'un dirigeant pour détournement de fonds publics. Le nom diffère. Le secteur, la juridiction, la période et la structure de détention concordent. Le rapprochement est établi : le client est en détention provisoire ; ses avoirs font l'objet d'une enquête.

La déclaration de soupçon est déposée dans les délais. Les opérations sont gelées.

Le dossier n'avait pas évolué. Le profil de risque n'avait pas changé. Aucun signal interne n'avait été émis. La réaction n'a tenu qu'à une veille externe tenue avec constance et croisée avec la connaissance du portefeuille. L'obligation de vigilance constante ne se satisfait pas d'un dossier ouvert une fois ; elle suppose que l'information circule de l'extérieur vers le dossier, et du dossier vers la décision.`;

const casII_body =
`Une société de gestion examine l'entrée d'un souscripteur dans l'un de ses fonds : une holding chypriote. Le dossier déclaratif est complet — registre des bénéficiaires effectifs à jour, organigramme, attestations signées.

Le capital se répartit entre six détenteurs : une personne physique à 18 %, et cinq sociétés à 22, 17, 16, 15 et 12 %. Aucune ligne n'atteint le seuil de 25 %. La holding déclare en conséquence n'avoir aucun bénéficiaire effectif au capital et désigne son dirigeant par défaut. Le dossier est, à la lettre, conforme.

La répartition n'a rien de grossier : des pourcentages irréguliers, dispersés, l'image d'un actionnariat sans tête. C'est cette apparence qu'il convient d'instruire.

Chaque société actionnaire est reprise, niveau par niveau. La ligne luxembourgeoise est détenue depuis Malte et les Îles Vierges britanniques. La ligne néerlandaise a pour actionnaire unique ce même véhicule des Îles Vierges. La ligne émiratie partage administrateur et adresse avec la société maltaise. Une ligne procède d'un trust dont le constituant n'est pas nommé. Une seule des cinq est réellement indépendante.

Les chaînes convergent. Le véhicule des Îles Vierges, présent en plusieurs points, remonte à la personne physique déjà inscrite en direct. Détentions directes et indirectes consolidées, celle-ci contrôle l'essentiel du capital. Aucune ligne, isolée, ne le laissait paraître.

Le capital n'épuise du reste pas la question. Le contrôle effectif peut s'exercer par tout autre moyen — pacte d'actionnaires, convention de vote, droit de veto sur les distributions, financement qui place le détenteur apparent en situation de dépendance. Une chaîne de détention parfaitement éclatée peut coexister avec un contrôle parfaitement concentré, logé hors du capital. L'analyse ne s'arrête donc pas à la reconstitution des pourcentages ; elle interroge aussi les pouvoirs.

Le dossier satisfaisait à la lettre du registre ; le bénéficiaire effectif demeurait dissimulé. Les deux constats sont exacts simultanément. Le seuil de 25 % n'est pas une garantie, mais une ligne que les structures conçues pour dissimuler fractionnent à dessein. L'identification du contrôle réel suppose de remonter chaque chaîne, d'examiner les pouvoirs au-delà de la détention, et de raisonner sur le contrôle consolidé, jamais sur la déclaration — un travail qui ne se confie pas à celui qui a intérêt à ce qu'il ne soit pas conduit.`;

const casIII_body =
`Une structure reçoit la demande d'un résident français, de nationalité française, exerçant une profession libérale. Le dossier mentionne une fonction : consul honoraire d'un État d'Afrique subsaharienne.

La qualification de personne politiquement exposée se pose. La réglementation énumère les fonctions concernées — exécutif, Parlement, hautes juridictions, banque centrale, entreprises publiques. Le consul honoraire n'y figure pas. Nommé par un État étranger, non rémunéré, sans fonction exécutive, il assure une représentation protocolaire. Aucun texte ne l'inscrit parmi les personnes exposées ; aucun ne l'en retranche.

Deux lectures se soutiennent. L'absence de rémunération et de pouvoir décisionnel écarte la qualification. La nomination par un gouvernement étranger et l'accès possible à des réseaux d'influence la commandent. La décision retenue fut la seconde : qualification retenue, vigilance renforcée, motivation versée au dossier. Non que le texte l'imposât — il se taisait. Parce que c'était la position tenable devant un contrôle.

Le consul honoraire n'est qu'un cas d'une question plus vaste. L'exposition ne suit pas une liste de fonctions ; elle suit des liens. L'associé d'un ministre. Le gérant du patrimoine d'un proche de dirigeant. Celui qui administre pour le compte d'un tiers jamais nommé. La famille élargie d'un chef d'État, au-delà du cercle expressément visé. Nul n'est listé ; tous portent une exposition. La liste désigne des fonctions ; le risque, lui, circule par des relations.

Sur ces zones que le texte ne tranche pas, la qualité du raisonnement et l'aptitude à motiver une décision importent autant que la décision. Un dispositif défendable n'est pas un dispositif sans risque : c'est un dispositif dont chaque choix peut être justifié devant l'autorité de contrôle.`;

const Doctrine = () => {
  const { t } = useLanguage();
  useScrollReveal();
  const [openCase, setOpenCase] = useState<number | null>(null);

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

  const illustrativeCases = [
    {
      title: t('I — The silence as a signal', 'I — Le silence comme signal'),
      accroche: t(
        'À partir de quel moment l\'absence d\'information devient-elle elle-même une information pertinente au regard des obligations de vigilance ?',
        'À partir de quel moment l\'absence d\'information devient-elle elle-même une information pertinente au regard des obligations de vigilance ?'
      ),
      body: casI_body,
    },
    {
      title: t('II — Le bénéficiaire que nul ne déclare', 'II — Le bénéficiaire que nul ne déclare'),
      accroche: t(
        'Que reste-t-il du bénéficiaire effectif lorsque chaque participation a précisément été calibrée pour le faire disparaître ?',
        'Que reste-t-il du bénéficiaire effectif lorsque chaque participation a précisément été calibrée pour le faire disparaître ?'
      ),
      body: casII_body,
    },
    {
      title: t('III — Le lien qui ne figure dans aucune liste', 'III — Le lien qui ne figure dans aucune liste'),
      accroche: t(
        'Entre la fonction officielle et la proximité avec le pouvoir existe une zone où les listes cessent d\'apporter une réponse suffisante.',
        'Entre la fonction officielle et la proximité avec le pouvoir existe une zone où les listes cessent d\'apporter une réponse suffisante.'
      ),
      body: casIII_body,
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

      {/* ── Cas illustratifs ── */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl">

          {/* Titre de section */}
          <h2
            className="reveal font-serif uppercase mb-6"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Illustrative Cases', 'Cas illustratifs')}
          </h2>

          {/* Avertissement */}
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

          {/* Accordéon */}
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
                  <div
                    style={{
                      paddingBottom: '36px',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      color: '#2F2F2F',
                      lineHeight: 1.85,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {cas.body}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Renvoi vers l'article */}
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
                'Ces situations s\'inscrivent dans une réflexion plus large sur la vigilance constante et la défendabilité des dispositifs.',
                'Ces situations s\'inscrivent dans une réflexion plus large sur la vigilance constante et la défendabilité des dispositifs.'
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
              {t('Lire l\'article publié', 'Lire l\'article publié')}
            </a>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Doctrine;
