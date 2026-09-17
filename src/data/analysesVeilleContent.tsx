import { Link } from 'react-router-dom';
import {
  h2Style,
  h2FirstStyle,
  h3Style,
  bodyStyle,
  listStyle,
  linkStyle,
  externalLinkStyle,
  vigilanceBoxStyle,
  vigilanceItemStyle,
} from '@/lib/analysesVeilleStyles';

export interface FaqItem {
  q: string;
  a: string;
}

export interface AnalyseVeillePage {
  slug: string;
  title: string;
  metaDescription: string;
  hubSummary: string;
  datePublished: string;
  dateModified: string;
  intro: string;
  body: () => JSX.Element;
  faq: FaqItem[];
  methodologyBody: () => JSX.Element;
}

// Légifrance / AMF — URLs vérifiées par recherche le 2026-09-17 (voir rapport d'intégration)
const LEGI = {
  L561_2: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000050361172',
  L561_3: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000050361174',
  L561_15: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033517847',
  L561_19: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020196563',
  L561_22: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041577908',
  L561_36: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042498755',
  L561_36_1: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041578162',
  L574_1: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041578321',
  R621_44: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000021288754',
};
const AMF_SAN_2025_08 = 'https://www.amf-france.org/sites/institutionnel/files/private/2025-09/san-2025-08.pdf';

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={externalLinkStyle}>
    {children}
  </a>
);

export const ANALYSES_VEILLE: AnalyseVeillePage[] = [
  // 1 ────────────────────────────────────────────────────────────────────
  {
    slug: 'expert-comptable-obligation-tracfin',
    title: 'Expert-comptable et obligation TRACFIN en 2026 : quand et comment déclarer un soupçon',
    metaDescription:
      "Expert-comptable et TRACFIN en 2026 : cadre légal, seuil de soupçon, procédure de déclaration, sanctions en cas de manquement. Le point complet.",
    hubSummary:
      "L'expert-comptable est assujetti aux obligations LCB-FT au même titre que les banques ou les notaires. Cadre légal, seuil de soupçon, procédure de déclaration et sanctions en cas de manquement.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "L'expert-comptable fait partie des professions assujetties à la lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT), au même titre que les établissements bancaires ou les notaires. Cette obligation, souvent perçue comme théorique tant qu'aucun cas concret ne se présente, devient une vraie question opérationnelle dès qu'un dossier client sort du cadre habituel — flux inhabituel, montage patrimonial complexe, incohérence entre l'activité déclarée et les mouvements constatés. Cette page précise le cadre légal, la procédure de déclaration, et les situations qui, en pratique, doivent alerter un professionnel du chiffre.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Pourquoi l'expert-comptable est assujetti à TRACFIN</h2>
        <h3 style={h3Style}>Le cadre légal</h3>
        <p style={bodyStyle}>
          L'article <ExtLink href={LEGI.L561_2}>L.561-2</ExtLink> du Code monétaire et financier fixe la liste des professions assujetties aux obligations de vigilance et de déclaration. Les experts-comptables y figurent explicitement (12° de l'article), aux côtés des commissaires aux comptes, des{' '}
          <Link to="/analyses-veille/avocat-fiscaliste-lcb-ft" style={linkStyle}>avocats</Link>, des notaires et des autres professions du chiffre et du droit.
        </p>
        <h3 style={h3Style}>Ce qui déclenche concrètement l'obligation</h3>
        <p style={bodyStyle}>
          L'assujettissement n'est pas conditionné à un type de mission particulier — il s'applique dès lors que l'expert-comptable exerce son activité professionnelle habituelle : tenue de comptabilité, conseil fiscal, accompagnement à la création ou à la structuration d'entités. La vigilance s'exerce tout au long de la relation d'affaires, pas seulement à l'entrée en relation.
        </p>

        <h2 style={h2Style}>Qu'est-ce qu'un soupçon justifiant une déclaration</h2>
        <h3 style={h3Style}>Le seuil retenu par la loi</h3>
        <p style={bodyStyle}>
          Le texte retient une échelle volontairement large : « savoir, soupçonner, ou avoir de bonnes raisons de soupçonner » qu'une somme ou une opération est liée à une infraction punie d'une peine privative de liberté supérieure à un an, ou à un financement du terrorisme (<ExtLink href={LEGI.L561_15}>article L.561-15</ExtLink>). Il ne s'agit donc pas d'exiger une certitude — un doute raisonnable, fondé sur des éléments objectifs, suffit à déclencher l'obligation d'analyse.
        </p>
        <h3 style={h3Style}>Exemples de situations qui doivent interroger</h3>
        <ul style={listStyle}>
          <li>Une structure de détention à plusieurs niveaux sans justification économique apparente</li>
          <li>Des flux en provenance de juridictions à risque, sans activité réelle correspondante</li>
          <li>Une incohérence marquée entre le train de vie ou le patrimoine du client et l'activité déclarée</li>
          <li>Un recours à des intermédiaires ou montages inhabituels pour une opération par ailleurs simple</li>
        </ul>
        <h3 style={h3Style}>Ce qui n'est pas, en soi, un soupçon</h3>
        <p style={bodyStyle}>
          Une erreur comptable, un retard de paiement, ou une opération d'optimisation fiscale menée dans le cadre légal ne constituent pas, à eux seuls, des éléments déclencheurs. La distinction entre optimisation légitime et montage à finalité dissimulée reste une question d'appréciation, qui gagne à être documentée avec méthode plutôt que tranchée dans l'urgence.
        </p>

        <h2 style={h2Style}>Le processus de déclaration</h2>
        <h3 style={h3Style}>Documenter avant de déclarer</h3>
        <p style={bodyStyle}>
          Avant toute déclaration, il s'agit de rassembler et d'organiser les éléments factuels ayant conduit au doute — chronologie, documents disponibles, incohérences relevées. Cette étape conditionne la qualité de l'analyse qui suit.
        </p>
        <h3 style={h3Style}>La déclaration elle-même</h3>
        <p style={bodyStyle}>
          La déclaration de soupçon se dépose auprès de TRACFIN via la plateforme dédiée (ERMES). Elle doit être précise, étayée, et fondée sur des éléments concrets plutôt que sur une impression générale.
        </p>
        <h3 style={h3Style}>La confidentialité, une obligation stricte</h3>
        <p style={bodyStyle}>
          Une fois la déclaration effectuée, le professionnel ne peut en aucun cas informer le client de son existence — c'est l'interdiction dite de « tipping-off », prévue par le Code monétaire et financier. Sa violation constitue une infraction pénale spécifique, distincte de l'obligation de déclaration elle-même.
        </p>

        <h2 style={h2Style}>Les conséquences en cas de manquement</h2>
        <p style={bodyStyle}>Il convient de distinguer deux situations, souvent confondues :</p>
        <p style={bodyStyle}>
          <strong>Le défaut de déclaration</strong> — ne pas avoir signalé un soupçon qui aurait dû l'être — relève de l'Ordre des experts-comptables lui-même, désigné autorité de contrôle de la profession en matière de LCB-FT par l'<ExtLink href={LEGI.L561_36}>article L.561-36</ExtLink> du Code monétaire et financier (pas d'une autorité financière externe). Les sanctions disciplinaires vont de l'avertissement à la radiation ; s'y ajoute une amende administrative pouvant atteindre <strong>1 million d'euros par manquement</strong> (<ExtLink href={LEGI.L561_36_1}>article L.561-36-1</ExtLink> du Code monétaire et financier).
        </p>
        <p style={bodyStyle}>
          <strong>La divulgation interdite</strong> — révéler à un client ou à un tiers qu'une déclaration a été effectuée — est en revanche une infraction pénale distincte, précisément définie par le Code monétaire et financier, punie d'une amende de 22 500 euros (<ExtLink href={LEGI.L574_1}>article L.574-1</ExtLink>).
        </p>
        <p style={bodyStyle}>
          À l'inverse, une déclaration effectuée de bonne foi protège le professionnel : l'<ExtLink href={LEGI.L561_22}>article L.561-22</ExtLink> du Code monétaire et financier prévoit une immunité civile et pénale pour toute déclaration fondée sur des éléments réels, même si l'analyse se révèle ensuite infondée.
        </p>

        <h2 style={h2Style}>Ce que montrent les chiffres</h2>
        <p style={bodyStyle}>
          Le dernier rapport d'activité de TRACFIN fait état d'un volume de déclarations de soupçon en provenance de la profession comptable qui reste, en proportion du nombre de professionnels en exercice, relativement modeste au regard d'autres secteurs plus fréquemment sollicités. Ce constat ne traduit pas une absence de vigilance de la profession, mais illustre la difficulté à identifier, dans le flux courant de l'activité, les situations qui appellent réellement une déclaration — une difficulté renforcée par l'absence, dans beaucoup de cabinets, d'un temps dédié à cette analyse. C'est ce type de constat qui pousse certains cabinets à recourir à une{' '}
          <Link to="/analyses-veille/compliance-externalisee-lcb-ft" style={linkStyle}>compliance externalisée</Link> pour cette fonction précise.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            La déclaration TRACFIN et le signalement à l'Ordre des experts-comptables répondent à des logiques et des canaux distincts — l'un ne se substitue pas à l'autre.
          </p>
          <p style={vigilanceItemStyle}>
            La documentation du processus d'analyse (pourquoi une opération a, ou n'a pas, été jugée suspecte) est ce qui permet de démontrer, a posteriori, la vigilance exercée — c'est souvent ce point précis qui fait défaut lors d'un contrôle.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Un expert-comptable peut-il être inquiété si une déclaration se révèle infondée ?',
        a: "Non, dès lors que la déclaration a été faite de bonne foi, sur la base d'éléments réels — l'immunité prévue par l'article L.561-22 du Code monétaire et financier couvre ce cas.",
      },
      {
        q: 'La déclaration doit-elle attendre la fin de la mission comptable ?',
        a: "Non — l'obligation naît dès que le soupçon se forme, pas à la clôture du dossier ou de l'exercice.",
      },
      {
        q: "Le client peut-il être informé qu'une déclaration a été faite ?",
        a: "Non, en aucun cas — c'est l'interdiction de tipping-off, dont la violation est une infraction pénale distincte, sanctionnée indépendamment du fond du dossier.",
      },
      {
        q: 'Un expert-comptable exerçant en libéral, sans structure de cabinet, est-il concerné ?',
        a: "Oui — l'assujettissement porte sur la personne exerçant l'activité, pas sur une taille ou une forme juridique particulière.",
      },
      {
        q: "Que couvre exactement l'immunité de bonne foi ?",
        a: "Elle protège contre une mise en cause civile ou pénale liée au fait d'avoir déclaré — pas contre une négligence caractérisée dans l'exercice général de la profession.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur le Code monétaire et financier (articles{' '}
        <ExtLink href={LEGI.L561_2}>L.561-2</ExtLink>, <ExtLink href={LEGI.L561_15}>L.561-15</ExtLink>,{' '}
        <ExtLink href={LEGI.L561_19}>L.561-19</ExtLink>, <ExtLink href={LEGI.L561_22}>L.561-22</ExtLink>,{' '}
        <ExtLink href={LEGI.L561_36}>L.561-36</ExtLink>, <ExtLink href={LEGI.L561_36_1}>L.561-36-1</ExtLink>), ainsi
        que sur les lignes directrices publiées conjointement par TRACFIN et le Conseil supérieur de l'Ordre des
        experts-comptables. Elle reflète une lecture opérationnelle du dispositif, construite sur l'accompagnement de
        structures confrontées à ces questions en situation réelle plutôt que sur un résumé théorique du texte.
      </>
    ),
  },

  // 2 ────────────────────────────────────────────────────────────────────
  {
    slug: 'psan-radie-que-faire',
    title: 'PSAN radié : que faire en 2026 ?',
    metaDescription:
      "PSAN radié après la fin de la période transitoire MiCA : délai de recours de dix jours, démarches à conduire, alternatives envisageables.",
    hubSummary:
      "La fin de la période transitoire MiCA a entraîné la radiation automatique des PSAN sans agrément PSCA. Délai de recours, démarches de cessation et alternatives envisageables.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "La fin de la période transitoire prévue par le règlement européen MiCA a entraîné, le 2 juillet 2026, la radiation automatique des prestataires de services sur actifs numériques (PSAN) n'ayant pas obtenu leur agrément PSCA dans les délais impartis. Pour les dirigeants concernés, cette radiation n'est pas la fin de leurs obligations — c'est le début d'une phase spécifique, encadrée, où la façon dont la cessation est conduite reste examinable a posteriori.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Ce que signifie concrètement une radiation</h2>
        <p style={bodyStyle}>
          La radiation entraîne l'interdiction de poursuivre l'activité de services sur actifs numériques. Elle ne dispense pas pour autant l'entité de ses obligations vis-à-vis de ses clients existants — restitution des actifs, information, et le cas échéant, poursuite de la vigilance sur les opérations en cours jusqu'à leur terme.
        </p>

        <h2 style={h2Style}>Le délai pour contester une décision de l'AMF</h2>
        <p style={bodyStyle}>
          Un point souvent mal connu, et pourtant déterminant : le délai pour contester une décision individuelle de retrait ou de radiation prise par l'AMF — qui n'est pas une sanction au sens strict — est de <strong>dix jours</strong> à compter de la notification, devant la Cour d'appel de Paris. Ce délai, nettement plus court que celui applicable aux sanctions proprement dites (deux mois), est fréquemment confondu avec ce dernier, ce qui peut faire perdre au dirigeant concerné toute possibilité de recours utile s'il tarde à réagir.
        </p>
        <p style={bodyStyle}>
          Il s'agit d'un recours en annulation : la Cour peut annuler la décision, mais ne peut pas la réformer ni y substituer sa propre appréciation.
        </p>

        <h2 style={h2Style}>Les démarches à conduire</h2>
        <h3 style={h3Style}>Analyser précisément la notification</h3>
        <p style={bodyStyle}>
          La première étape consiste à identifier avec exactitude le fondement de la radiation — caducité automatique liée à l'absence d'agrément dans les délais, ou décision individuelle motivée. Cette distinction conditionne les options réellement disponibles ensuite.
        </p>
        <h3 style={h3Style}>Documenter la cessation</h3>
        <p style={bodyStyle}>
          Un plan de cessation ordonnée, documenté et daté, retrace la manière dont les clients ont été informés, dont leurs actifs ont été restitués, et dont les opérations en cours ont été traitées. C'est ce document, plus que la radiation elle-même, qui sera examiné si l'AMF revient sur le dossier — de la même manière qu'un{' '}
          <Link to="/analyses-veille/controle-acpr-lcb-ft" style={linkStyle}>contrôle ACPR</Link> examine en priorité la cohérence entre la documentation existante et l'activité réelle.
        </p>
        <h3 style={h3Style}>Gérer la communication vis-à-vis des clients et partenaires</h3>
        <p style={bodyStyle}>
          Les établissements bancaires partenaires ont accès à l'information de radiation, publique. Une communication mal préparée ou tardive vers les clients peut aggraver une situation déjà sensible.
        </p>

        <h2 style={h2Style}>Les alternatives envisageables</h2>
        <p style={bodyStyle}>
          Selon la situation, plusieurs voies restent ouvertes : le repositionnement vers une activité de conseil non réglementée, la cession de l'entité ou de ses actifs technologiques, ou — pour certains — une nouvelle demande d'agrément après mise en conformité complète, sans garantie d'issue favorable.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            Le délai de dix jours pour contester une décision de radiation est impératif — un recours déposé hors délai est irrecevable, quel que soit le fond du dossier.
          </p>
          <p style={vigilanceItemStyle}>
            Une communication précipitée vers les clients, sans cadrage préalable, expose à des difficultés supplémentaires plutôt qu'à une résolution plus rapide.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Quel est le délai pour contester une décision de radiation PSAN ?',
        a: "Dix jours à compter de la notification, devant la Cour d'appel de Paris — à distinguer du délai de deux mois, qui s'applique uniquement aux sanctions proprement dites.",
      },
      {
        q: 'Un PSAN radié peut-il continuer à conseiller ses anciens clients ?',
        a: "La distinction se joue entre les services réglementés, désormais interdits, et une activité de conseil non réglementée, qui reste envisageable sous certaines conditions à examiner au cas par cas.",
      },
      {
        q: 'La radiation est-elle rendue publique ?',
        a: "Oui, elle figure sur les listes tenues par l'AMF, consultées notamment par les établissements bancaires partenaires.",
      },
      {
        q: 'Peut-on redemander un agrément après une radiation ?',
        a: "C'est envisageable en théorie, sous réserve d'une mise en conformité démontrée — l'issue dépend fortement des circonstances de la radiation initiale.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur le règlement européen MiCA, le Code monétaire et financier (notamment l'
        <ExtLink href={LEGI.R621_44}>article R.621-44</ExtLink> relatif aux délais de recours contre les décisions de
        l'AMF), et la jurisprudence récente de la Cour d'appel de Paris en matière de décisions individuelles
        non-sanctions.
      </>
    ),
  },

  // 3 ────────────────────────────────────────────────────────────────────
  {
    slug: 'family-office-lcb-ft',
    title: 'Family office et LCB-FT en 2026 : obligations, risques et bonnes pratiques',
    metaDescription:
      "Family office et LCB-FT en 2026 : quand un SFO ou MFO est assujetti, risques des structures patrimoniales complexes, cas de Monaco.",
    hubSummary:
      "L'assujettissement LCB-FT d'un family office dépend de l'activité réellement exercée, pas de l'appellation SFO ou MFO retenue. Obligations, risques spécifiques et cas de Monaco.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "Le terme « family office » recouvre des réalités très différentes selon la structure, sa taille, et la nature exacte de son activité. Cette diversité rend l'appréciation des obligations LCB-FT parfois incertaine pour les dirigeants concernés — l'assujettissement ne dépend pas de l'appellation retenue, mais de l'activité réellement exercée.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Quand un family office est-il assujetti à la LCB-FT</h2>
        <p style={bodyStyle}>
          Le Code monétaire et financier ne distingue pas, en tant que catégorie juridique autonome, le Single Family Office (SFO, dédié à une seule famille) du Multi Family Office (MFO, servant plusieurs familles). L'<ExtLink href={LEGI.L561_2}>article L.561-2</ExtLink> fixe la liste des activités assujetties — conseil en investissement, gestion pour compte de tiers, intermédiation — sans mentionner le family office comme catégorie en soi.
        </p>
        <p style={bodyStyle}>
          En pratique, un SFO qui gère exclusivement le patrimoine de sa famille fondatrice, sans exercer d'activité pour le compte de tiers, n'entre généralement pas dans le champ de l'assujettissement. Un MFO, dès lors qu'il exerce une activité de conseil ou de gestion pour plusieurs familles distinctes, s'y trouve le plus souvent soumis.
        </p>

        <h2 style={h2Style}>Les obligations qui s'appliquent en cas d'assujettissement</h2>
        <p style={bodyStyle}>
          Lorsque l'activité exercée relève de l'assujettissement, les obligations classiques s'appliquent : désignation d'un responsable de la fonction, vigilance sur l'entrée en relation et tout au long de celle-ci, et le cas échéant, déclaration de soupçon auprès de TRACFIN.
        </p>

        <h2 style={h2Style}>Les risques spécifiques aux structures patrimoniales complexes</h2>
        <p style={bodyStyle}>
          Les family offices sont, par la nature de leur activité, confrontés à des structures et des situations qui appellent une vigilance particulière : détentions via des holdings multi-juridictionnelles, actifs alternatifs (private equity, actifs numériques, art), changements de résidence fiscale accompagnés du maintien d'actifs en France. Ces situations ne sont pas problématiques en elles-mêmes — elles appellent une lecture attentive et documentée, distincte d'une approche purement déclarative, et gagnent souvent à être structurées avec le concours d'un{' '}
          <Link to="/analyses-veille/avocat-fiscaliste-lcb-ft" style={linkStyle}>avocat fiscaliste</Link>.
        </p>

        <h2 style={h2Style}>Le cas particulier des structures basées à Monaco</h2>
        <p style={bodyStyle}>
          Un family office établi à Monaco relève, pour sa conformité LCB-FT, du régime monégasque — la loi n° 1.362, sous la supervision de l'Autorité Monégasque de Sécurité Financière (AMSF). Ce cadre est autonome et distinct de la réglementation française.
        </p>
        <p style={bodyStyle}>
          La question d'un assujettissement à la réglementation française ne se pose pas du simple fait que la structure compte des clients français — elle se pose si le family office exerce une activité active et non autorisée sur le territoire français, ce qui relève alors d'une problématique de démarchage réglementé, à examiner au cas par cas selon les faits précis, plutôt que d'un assujettissement automatique à la LCB-FT française.
        </p>

        <h2 style={h2Style}>Externaliser la fonction compliance : ce qu'il faut savoir</h2>
        <p style={bodyStyle}>
          Un family office peut choisir de confier à un{' '}
          <Link to="/analyses-veille/compliance-externalisee-lcb-ft" style={linkStyle}>prestataire externe</Link>{' '}
          l'analyse des dossiers complexes, la cartographie des risques, ou la formation de ses équipes. La responsabilité vis-à-vis des autorités reste toutefois toujours portée par le dirigeant ou le responsable désigné en interne — l'externalisation ne déplace pas cette responsabilité, elle apporte un appui à son exercice.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            La distinction SFO/MFO est une catégorisation de marché, pas un critère juridique en soi — c'est l'activité exercée qui détermine l'assujettissement.
          </p>
          <p style={vigilanceItemStyle}>
            Un family office basé hors de France ne doit pas présumer être hors du champ de toute vigilance dès lors qu'il a une activité, même limitée, exercée directement en France.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Un SFO qui gère uniquement le patrimoine familial est-il assujetti ?',
        a: "En général non, dès lors qu'aucune activité pour le compte de tiers n'est exercée — mais l'appréciation reste fonction des faits précis.",
      },
      {
        q: "L'externalisation de la compliance dégage-t-elle la responsabilité du dirigeant ?",
        a: "Non — la responsabilité réglementaire reste portée par l'entité et son dirigeant, quel que soit le degré d'appui externe mobilisé.",
      },
      {
        q: 'Un family office monégasque doit-il appliquer la réglementation française ?',
        a: "Non, par principe — il relève du régime monégasque. La question ne se pose que dans des situations spécifiques d'activité exercée directement en France.",
      },
      {
        q: 'La détention via une structure offshore est-elle en soi problématique ?',
        a: "Non — mais elle appelle une documentation de la logique économique sous-jacente, qui doit pouvoir être présentée si la question est posée.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur l'<ExtLink href={LEGI.L561_2}>article L.561-2</ExtLink> du Code monétaire et
        financier, sur la loi monégasque n° 1.362 relative à la LCB-FT et ses évolutions récentes, ainsi que sur les
        principes généraux du droit financier français relatifs à la fourniture de services sur le territoire
        national par des entités étrangères.
      </>
    ),
  },

  // 4 ────────────────────────────────────────────────────────────────────
  {
    slug: 'controle-acpr-lcb-ft',
    title: 'Contrôle ACPR LCB-FT : comment préparer son cabinet en 2026',
    metaDescription:
      "Contrôle ACPR LCB-FT : formats de contrôle, durée réelle, points examinés, erreurs fréquentes. Comment préparer son établissement en 2026.",
    hubSummary:
      "Un contrôle ACPR ne se joue pas en quelques jours mais sur plusieurs semaines à plusieurs mois. Ce qui est examiné, comment s'y préparer, et les erreurs qui reviennent le plus souvent.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "La réception d'un avis de contrôle de l'ACPR ouvre une période où chaque pièce du dossier compte. Contrairement à une idée répandue, ces contrôles ne se déroulent pas sur quelques jours — ils s'inscrivent dans une durée qui laisse le temps d'une préparation sérieuse, à condition de l'engager suffisamment tôt.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Qui est concerné</h2>
        <p style={bodyStyle}>
          Les établissements de paiement, les prestataires de services sur actifs numériques, les conseillers en investissements financiers, et plus largement toute entité exerçant une activité assujettie relèvent potentiellement d'un contrôle ACPR sur leur dispositif LCB-FT — un périmètre qui recoupe en partie celui des{' '}
          <Link to="/analyses-veille/societe-gestion-controles-amf-lcb-ft" style={linkStyle}>sociétés de gestion contrôlées par l'AMF</Link>, l'ACPR et l'AMF partageant la supervision du dispositif LCB-FT selon le statut de l'entité.
        </p>

        <h2 style={h2Style}>Les formats de contrôle</h2>
        <p style={bodyStyle}>
          Le contrôle sur pièces consiste en une demande documentaire adressée à distance. Le contrôle sur place, plus approfondi, comprend des entretiens et un examen direct des dossiers et procédures. Dans les deux cas, la durée réelle dépasse largement ce qu'on imagine souvent : un contrôle sur place mobilise généralement l'établissement sur <strong>plusieurs semaines à plusieurs mois</strong>, la présence effective des contrôleurs pouvant, sur les dossiers les plus complexes, s'étendre exceptionnellement sur une période plus longue encore.
        </p>
        <p style={bodyStyle}>
          À l'issue du contrôle sur place, l'établissement dispose d'un délai fixe pour réagir à l'avant-projet de rapport lors de la phase contradictoire — généralement <strong>dix jours ouvrables</strong> pour un premier retour. Ce délai encadré, une fois le rapport définitif communiqué, laisse le temps de préparer une réponse argumentée, à condition de ne pas le sous-estimer.
        </p>

        <h2 style={h2Style}>Ce qui est généralement examiné</h2>
        <ul style={listStyle}>
          <li>La politique LCB-FT formalisée et son adéquation avec l'activité réelle de l'entité</li>
          <li>La cartographie des risques, tenue à jour</li>
          <li>Les procédures de vigilance et leur application concrète sur un échantillon de dossiers</li>
          <li>Les preuves de formation du personnel</li>
          <li>Le traitement des déclarations de soupçon, leur cohérence et leur délai</li>
        </ul>

        <h2 style={h2Style}>Se préparer avant l'arrivée des inspecteurs</h2>
        <p style={bodyStyle}>
          Une préparation sérieuse commence par un audit interne honnête de l'écart entre la documentation existante et l'activité réelle. Elle se poursuit par la mise à jour de la cartographie des risques, la vérification concrète — sur des dossiers réels, pas de façon théorique — de l'application des procédures, et la consolidation des preuves de formation. C'est le type de diagnostic qu'une{' '}
          <Link to="/analyses-veille/compliance-externalisee-lcb-ft" style={linkStyle}>compliance externalisée</Link>{' '}
          permet de conduire avec un regard extérieur, moins exposé aux angles morts d'une équipe interne.
        </p>
        <p style={bodyStyle}>
          Un point souvent négligé : désigner un interlocuteur unique, clairement identifié, pour l'ensemble des échanges avec l'autorité de contrôle.
        </p>

        <h2 style={h2Style}>Les erreurs qui reviennent le plus souvent</h2>
        <p style={bodyStyle}>
          Une politique LCB-FT rédigée de façon générique, sans lien apparent avec l'activité réelle de l'entité, est un signal immédiatement identifiable pour un inspecteur. L'absence de preuves tangibles de formation — au-delà de la simple affirmation qu'elle a eu lieu — en est un autre.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            Modifier ou compléter des dossiers après l'annonce d'un contrôle, plutôt qu'avant, peut être interprété comme une tentative d'obstruction — la préparation doit être un exercice continu, pas une réaction de dernière minute.
          </p>
          <p style={vigilanceItemStyle}>
            Les délais de réponse, bien que plus longs qu'on ne le pense souvent, restent fermes — les sous-estimer expose à un dossier incomplet au moment attendu.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: "Combien de temps dure réellement un contrôle sur place de l'ACPR ?",
        a: "Généralement plusieurs semaines, la durée variant selon la taille et la complexité de la structure contrôlée — bien au-delà de ce que suggère une idée reçue de quelques jours.",
      },
      {
        q: "L'ACPR peut-elle sanctionner sans contrôle préalable ?",
        a: "Un manquement grave et avéré peut être traité sans contrôle complet préalable, dans le cadre d'une procédure contradictoire.",
      },
      {
        q: "Les sanctions de l'ACPR sont-elles rendues publiques ?",
        a: "Oui, elles font l'objet d'une publication, avec un impact réputationnel qui dépasse souvent le montant de la sanction elle-même.",
      },
      {
        q: 'Une sanction ACPR peut-elle être contestée ?',
        a: "Oui, par la voie d'un recours devant les juridictions compétentes, dans les délais applicables aux décisions de sanction.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur les textes réglementaires applicables aux contrôles de l'ACPR en matière de LCB-FT
        et sur les pratiques observées lors de contrôles récents dans le secteur des services financiers et des
        prestataires sur actifs numériques.
      </>
    ),
  },

  // 5 ────────────────────────────────────────────────────────────────────
  {
    slug: 'societe-gestion-controles-amf-lcb-ft',
    title: 'Société de gestion et contrôles AMF LCB-FT en 2026 : préparation et exigences',
    metaDescription:
      "Sociétés de gestion et contrôles AMF LCB-FT : axes de contrôle, sanctions récentes (Eternam, Altaroc), préparation. Le point en 2026.",
    hubSummary:
      "Les sanctions AMF récentes montrent des montants qui dépassent largement plusieurs centaines de milliers d'euros. Axes de contrôle, exemples chiffrés et préparation.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "Les sociétés de gestion de portefeuille sont soumises à une surveillance renforcée de l'AMF sur leur dispositif de conformité et de contrôle interne, dont la dimension LCB-FT constitue un axe récurrent. Les sanctions prononcées ces dernières années montrent que les montants en jeu dépassent largement ce que l'on imagine souvent — la vigilance sur ce point n'est pas une précaution excessive.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Pourquoi les sociétés de gestion sont sous surveillance renforcée</h2>
        <p style={bodyStyle}>
          Les souscriptions et rachats de parts de fonds, les flux transfrontaliers, et la présence d'investisseurs non-résidents constituent des points d'attention structurels pour ce secteur, indépendamment de la taille de la société concernée.
        </p>

        <h2 style={h2Style}>Les axes de contrôle de l'AMF</h2>
        <p style={bodyStyle}>
          L'AMF examine typiquement la gouvernance et la désignation effective du responsable de la conformité (RCCI), les politiques de vigilance sur les investisseurs, le traitement des déclarations de soupçon, et les preuves de formation du personnel — pas seulement leur existence formelle, mais leur mise en œuvre traçable, un examen qui rejoint sur le fond celui conduit lors d'un{' '}
          <Link to="/analyses-veille/controle-acpr-lcb-ft" style={linkStyle}>contrôle ACPR</Link>.
        </p>

        <h2 style={h2Style}>Ce que les sanctions récentes montrent</h2>
        <p style={bodyStyle}>
          Les décisions de sanction publiées par l'AMF ces dernières années font apparaître des montants qui dépassent fréquemment plusieurs centaines de milliers d'euros. À titre d'illustration : la société Eternam a été sanctionnée à hauteur de 400 000 euros en septembre 2025 (décision{' '}
          <ExtLink href={AMF_SAN_2025_08}>SAN-2025-08</ExtLink>), notamment pour un dispositif LCB-FT jugé lacunaire ; Altaroc Partners et ses dirigeants ont, la même période, écopé de 1,3 million d'euros d'amendes cumulées. Ces montants concernent aussi bien des sociétés de gestion de taille modeste que des acteurs plus établis — l'AMF ne module pas la sévérité de sa lecture en fonction de la taille de la structure contrôlée.
        </p>

        <h2 style={h2Style}>Se préparer à un contrôle</h2>
        <p style={bodyStyle}>
          La préparation passe par un audit honnête du rapport de conformité existant, la mise à jour de la cartographie des risques investisseurs, la vérification concrète des procédures de gel des avoirs sur un échantillon de dossiers, et la consolidation des preuves de formation — un travail qu'une{' '}
          <Link to="/analyses-veille/compliance-externalisee-lcb-ft" style={linkStyle}>compliance externalisée</Link>{' '}
          peut prendre en charge en tout ou partie.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            L'absence de seuil d'effectif signifie qu'une petite société de gestion n'est pas moins exposée qu'une structure plus importante.
          </p>
          <p style={vigilanceItemStyle}>
            Les contrôles thématiques sectoriels, portant sur un point précis appliqué à l'ensemble d'un segment de sociétés de gestion, se sont multipliés — la préparation ne doit pas se limiter aux sujets déjà identifiés comme sensibles par le passé.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Une petite société de gestion est-elle concernée par les contrôles AMF LCB-FT ?',
        a: "Oui — l'assujettissement et le niveau d'exigence ne dépendent pas d'un seuil d'effectif ou de taille.",
      },
      {
        q: 'Quels montants les sanctions AMF récentes atteignent-elles concrètement ?',
        a: "Les décisions publiées ces dernières années dépassent régulièrement plusieurs centaines de milliers d'euros — 400 000 euros pour Eternam (SAN-2025-08, sept. 2025), 1,3 million d'euros cumulés pour Altaroc Partners et ses dirigeants la même période, 305 000 euros pour M Capital Partners en janvier 2026.",
      },
      {
        q: 'Une sanction AMF peut-elle être contestée ?',
        a: "Oui, par un recours devant la Cour d'appel de Paris, dans un délai de deux mois à compter de la notification pour les décisions de sanction proprement dites (article R.621-44 du Code monétaire et financier).",
      },
      {
        q: 'Un contrôle AMF peut-il survenir sans préavis ?',
        a: "Le contrôle sur place peut être inopiné ; le contrôle sur pièces s'accompagne d'une demande documentaire formelle avec délai de réponse.",
      },
      {
        q: "La compliance LCB-FT s'applique-t-elle aux fonds réservés à une clientèle professionnelle ?",
        a: "Oui — il n'existe pas d'exemption générale pour ce type de clientèle, même si la vigilance peut être proportionnée au profil de risque réel.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur les décisions de sanction publiées par la Commission des sanctions de l'AMF (dont
        la décision <ExtLink href={AMF_SAN_2025_08}>SAN-2025-08</ExtLink>), sur la synthèse des constats des
        contrôles LCB-FT de l'AMF portant sur la gestion d'actifs (période 2022-2025), et sur les synthèses de
        contrôles SPOT relatives au dispositif de conformité des sociétés de gestion de portefeuille. Les recours
        contre les décisions de sanction relèvent de l'<ExtLink href={LEGI.R621_44}>article R.621-44</ExtLink> du
        Code monétaire et financier.
      </>
    ),
  },

  // 6 ────────────────────────────────────────────────────────────────────
  {
    slug: 'avocat-fiscaliste-lcb-ft',
    title: 'Avocat fiscaliste et LCB-FT en 2026 : obligations, secret professionnel et déclarations',
    metaDescription:
      "Avocat fiscaliste et LCB-FT : assujettissement, articulation avec le secret professionnel, rôle du bâtonnier, sanctions en cas de manquement.",
    hubSummary:
      "L'avocat fiscaliste est assujetti à la LCB-FT dans un cadre qui compose avec le secret professionnel. Fondement légal, rôle du bâtonnier et conséquences en cas de manquement.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "L'avocat fiscaliste occupe une position particulière au regard de la LCB-FT : assujetti au même titre que d'autres professions du droit et du chiffre, mais dans un cadre qui compose avec le secret professionnel, pilier de la profession. Cette articulation, souvent source de confusion, mérite d'être clarifiée avant toute situation concrète.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Le fondement de l'assujettissement</h2>
        <p style={bodyStyle}>
          L'<ExtLink href={LEGI.L561_2}>article L.561-2</ExtLink> du Code monétaire et financier inclut les avocats parmi les professions assujetties, sous les conditions précisées à l'<ExtLink href={LEGI.L561_3}>article L.561-3</ExtLink> — principalement lorsque l'activité exercée relève du conseil fiscal, du montage de structures, ou de la gestion de patrimoine, par opposition aux activités de conseil juridique pur ou de représentation contentieuse. C'est le même socle qui assujettit l'{' '}
          <Link to="/analyses-veille/expert-comptable-obligation-tracfin" style={linkStyle}>expert-comptable</Link>{' '}
          — mais l'articulation avec le secret professionnel donne à la procédure applicable aux avocats une physionomie distincte.
        </p>

        <h2 style={h2Style}>Secret professionnel et obligation de déclaration : où se situe la limite</h2>
        <p style={bodyStyle}>
          Le secret professionnel de l'avocat couvre le conseil juridique et la défense — il ne s'étend pas, en tant que tel, aux activités de conseil fiscal ou de montage non-contentieux entrant dans le champ de l'assujettissement LCB-FT. La procédure de déclaration prévoit, à la différence des autres professions assujetties, un passage préalable par le bâtonnier, qui apprécie l'opportunité de transmettre l'information à TRACFIN — un mécanisme spécifique destiné à préserver, autant que possible, l'équilibre entre les deux obligations.
        </p>

        <h2 style={h2Style}>Ce qui constitue un soupçon pour un avocat fiscaliste</h2>
        <p style={bodyStyle}>
          Les situations qui appellent une vigilance particulière rejoignent celles observées dans d'autres professions du chiffre et du droit : montages sans justification économique apparente, flux en provenance de juridictions à risque, structures superposées sans rationalité patrimoniale visible. À l'inverse, l'optimisation fiscale conduite dans le cadre légal, aussi sophistiquée soit-elle, ne constitue pas en elle-même un motif de déclaration.
        </p>

        <h2 style={h2Style}>Le processus de déclaration</h2>
        <p style={bodyStyle}>
          La démarche suit une logique en plusieurs temps : documentation des faits, signalement au bâtonnier compétent, puis, selon son appréciation, transmission à TRACFIN. Cette étape intermédiaire distingue la procédure applicable aux avocats de celle des autres professions assujetties.
        </p>

        <h2 style={h2Style}>Conséquences en cas de manquement</h2>
        <p style={bodyStyle}>
          Le défaut de déclaration relève principalement de sanctions disciplinaires prononcées par l'Ordre des avocats, pouvant aller jusqu'à la radiation dans les cas les plus graves. La divulgation d'une déclaration effectuée — l'interdiction de tipping-off — constitue, comme pour les autres professions assujetties, une infraction pénale distincte, punie d'une amende de 22 500 euros (<ExtLink href={LEGI.L574_1}>article L.574-1</ExtLink>).
        </p>
        <p style={bodyStyle}>
          Une déclaration faite de bonne foi bénéficie de la même immunité civile et pénale que pour les autres professions assujetties, prévue à l'<ExtLink href={LEGI.L561_22}>article L.561-22</ExtLink> du Code monétaire et financier.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            La frontière entre conseil légitime et facilitation d'un montage à finalité dissimulée reste une question d'appréciation, qui gagne à être documentée au moment où la décision est prise, plutôt que reconstituée après coup.
          </p>
          <p style={vigilanceItemStyle}>
            Le passage par le bâtonnier ne dispense pas de la vigilance initiale — c'est un mécanisme d'arbitrage, pas un filtre qui décharge l'avocat de son analyse propre.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Le secret professionnel protège-t-il un avocat qui ne déclare pas un soupçon fondé ?',
        a: "Non — l'obligation légale de déclaration prévaut dans le champ défini par l'article L.561-3 ; le passage par le bâtonnier organise la procédure, il ne supprime pas l'obligation.",
      },
      {
        q: 'Un avocat peut-il être sanctionné pour une déclaration qui se révèle infondée ?',
        a: "Non, dès lors qu'elle a été faite de bonne foi sur des éléments réels — l'immunité prévue par l'article L.561-22 s'applique de la même façon que pour les autres professions assujetties.",
      },
      {
        q: "Le client est-il informé qu'une déclaration a été transmise ?",
        a: "Non, en aucun cas — l'interdiction de divulgation s'applique avec la même rigueur que pour les autres professions concernées.",
      },
      {
        q: 'Un avocat collaborateur, non associé, est-il personnellement concerné ?',
        a: "Oui — l'obligation porte sur la personne exerçant l'activité assujettie, indépendamment de son statut au sein du cabinet.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse s'appuie sur les articles <ExtLink href={LEGI.L561_2}>L.561-2</ExtLink>,{' '}
        <ExtLink href={LEGI.L561_3}>L.561-3</ExtLink>, <ExtLink href={LEGI.L561_19}>L.561-19</ExtLink> et{' '}
        <ExtLink href={LEGI.L561_22}>L.561-22</ExtLink> du Code monétaire et financier, ainsi que sur les règles
        déontologiques applicables à la profession d'avocat en matière de LCB-FT.
      </>
    ),
  },

  // 7 ────────────────────────────────────────────────────────────────────
  {
    slug: 'compliance-externalisee-lcb-ft',
    title: 'Compliance externalisée LCB-FT en 2026 : quand déléguer et comment choisir son prestataire',
    metaDescription:
      "Compliance externalisée LCB-FT : ce qui peut être délégué, ce qui ne peut pas l'être, critères de sélection d'un prestataire. Le guide 2026.",
    hubSummary:
      "Ce qui peut réellement être délégué à un prestataire externe en matière de compliance LCB-FT, ce qui ne le peut pas, et les critères pour choisir son prestataire.",
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    intro:
      "Face à la complexité croissante du dispositif réglementaire LCB-FT, de nombreuses structures — cabinets d'expertise comptable, sociétés de gestion, family offices — envisagent l'externalisation de tout ou partie de leur fonction compliance. Cette page précise ce qui peut réellement être délégué, et selon quels critères choisir un prestataire.",
    body: () => (
      <>
        <h2 style={h2FirstStyle}>Pourquoi envisager l'externalisation</h2>
        <p style={bodyStyle}>
          Constituer une fonction compliance interne complète — recrutement, formation continue, veille réglementaire — représente un investissement significatif, rarement justifié pour une structure de taille modeste. C'est une question qui se pose avec une acuité particulière pour les{' '}
          <Link to="/analyses-veille/expert-comptable-obligation-tracfin" style={linkStyle}>cabinets d'expertise comptable</Link>{' '}
          et les{' '}
          <Link to="/analyses-veille/family-office-lcb-ft" style={linkStyle}>family offices</Link>, structures pour lesquelles la fonction conformité reste rarement un métier premier. L'externalisation permet d'accéder à une expertise spécialisée sans supporter ce coût fixe, tout en bénéficiant d'un regard extérieur, moins exposé aux angles morts d'une équipe interne trop proche du quotidien de l'activité.
        </p>

        <h2 style={h2Style}>Les signaux qui doivent alerter</h2>
        <p style={bodyStyle}>
          L'absence de responsable LCB-FT clairement désigné, des procédures rédigées de façon générique sans lien apparent avec l'activité réelle, l'absence de preuves tangibles de formation, ou des déclarations de soupçon traitées de façon tardive ou incohérente sont autant de signaux qui appellent, à minima, un diagnostic externe.
        </p>

        <h2 style={h2Style}>Ce qui peut être externalisé, et ce qui ne le peut pas</h2>
        <p style={bodyStyle}>
          Peuvent être confiés à un prestataire externe : la rédaction et la mise à jour des politiques et procédures, la cartographie des risques, la formation des équipes, l'instruction de dossiers complexes, et la veille réglementaire.
        </p>
        <p style={bodyStyle}>
          Ne peuvent en revanche pas être délégués : la validation finale par la direction, la décision de déposer ou non une déclaration de soupçon, et le pilotage stratégique du dispositif — qui restent, en toute hypothèse, de la responsabilité du dirigeant ou du responsable désigné en interne.
        </p>

        <h2 style={h2Style}>Critères de sélection d'un prestataire</h2>
        <p style={bodyStyle}>
          Au-delà de la compétence technique, plusieurs éléments méritent d'être vérifiés avant de confier une mission : l'expérience sectorielle réelle du prestataire sur des dossiers comparables, l'existence d'une couverture d'assurance responsabilité civile professionnelle adaptée, l'absence de conflit d'intérêts avec d'autres missions menées en parallèle, et la clarté du périmètre contractuel — ce qui est inclus, ce qui ne l'est pas.
        </p>

        <h2 style={h2Style}>Les formats de prestation courants</h2>
        <p style={bodyStyle}>
          Trois formats reviennent le plus souvent en pratique : un diagnostic ponctuel assorti d'un plan de mise en conformité, une intervention récurrente à temps partiel sur un rythme mensuel, ou une prise en charge plus complète incluant politiques, formation et veille continue.
        </p>
        <p style={bodyStyle}>
          Sur le plan tarifaire, il n'existe pas de barème officiel publié pour ce type de prestation en France — les conditions varient significativement selon le périmètre retenu, la taille de la structure, et la nature des dossiers traités. Un devis établi après un premier diagnostic reste la seule façon d'obtenir un chiffrage fiable, plutôt qu'une fourchette générale qui ne refléterait pas la réalité d'un dossier donné.
        </p>

        <div style={vigilanceBoxStyle}>
          <p style={vigilanceItemStyle}>
            L'externalisation ne dispense jamais le dirigeant de conserver un pilotage minimal en interne — une délégation totale, sans validation ni suivi, expose davantage qu'elle ne protège.
          </p>
          <p style={vigilanceItemStyle}>
            Un prestataire qui ne peut présenter aucune preuve concrète de ses formations ou de ses méthodes de travail mérite une vigilance renforcée avant contractualisation.
          </p>
        </div>
      </>
    ),
    faq: [
      {
        q: 'Un prestataire externe peut-il être sanctionné à la place du dirigeant ?',
        a: "Non — la responsabilité réglementaire reste portée par l'entité assujettie et son dirigeant ; un recours contractuel envers le prestataire reste possible en cas de manquement de sa part.",
      },
      {
        q: "Un même cabinet peut-il assurer à la fois l'audit et la mission compliance continue ?",
        a: "Cette situation pose une question de conflit d'intérêts qui mérite d'être examinée avant de confier les deux missions à un même prestataire.",
      },
      {
        q: "L'externalisation est-elle acceptée par l'AMF et l'ACPR ?",
        a: "Oui, à condition que le dirigeant conserve un pilotage effectif et que les décisions clés restent validées en interne.",
      },
      {
        q: 'Combien de temps prend une mise en conformité externalisée ?',
        a: "La durée dépend entièrement du périmètre retenu et de l'état initial du dispositif — un diagnostic préalable permet d'en établir une estimation réaliste, propre à chaque situation.",
      },
    ],
    methodologyBody: () => (
      <>
        Cette analyse reflète les pratiques observées en matière d'accompagnement compliance LCB-FT auprès de
        cabinets d'expertise comptable, de sociétés de gestion et de family offices, en l'absence de barème officiel
        publié sur ce type de prestation.
      </>
    ),
  },
];

export const getAnalyseBySlug = (slug: string) => ANALYSES_VEILLE.find((p) => p.slug === slug);
