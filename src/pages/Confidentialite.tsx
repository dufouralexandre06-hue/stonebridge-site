import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Confidentialite = () => {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <Layout variant="light">
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t("Privacy Policy", "Politique de confidentialite")}
          </h1>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#EDE9E3' }}>
        <div className="max-w-3xl" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>

          <div className="reveal">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Data controller", "Responsable du traitement")}
            </h2>
            <div className="institutional-body" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p>Stonebridge SAS</p>
              <p>SIREN : 942 820 671</p>
              <p>60 rue François Ier, 75008 Paris</p>
              <p>contact@stonebridgeconsult.com</p>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Data collected", "Données collectées")}
            </h2>
            <div className="institutional-body" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p>
                {t(
                  "The site stonebridgeconsult.com collects only the following data:",
                  "Le site stonebridgeconsult.com collecte uniquement les données suivantes :"
                )}
              </p>
              <p>
                {t(
                  "— Via the contact form: name, email address, message",
                  "— Via le formulaire de contact : nom, adresse e-mail, message"
                )}
              </p>
              <p>
                {t(
                  "— Via the newsletter subscription form: email address",
                  "— Via le formulaire d'inscription à la newsletter : adresse e-mail"
                )}
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Purpose of processing", "Finalité du traitement")}
            </h2>
            <p className="institutional-body">
              {t(
                "Data collected is used exclusively to respond to enquiries received through the contact form and to send Stonebridge compliance notes to newsletter subscribers.",
                "Les données collectées sont utilisées exclusivement pour répondre aux demandes reçues via le formulaire de contact et pour l'envoi des notes de conformité Stonebridge aux abonnés de la newsletter."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Legal basis", "Base légale")}
            </h2>
            <p className="institutional-body">
              {t(
                "Data processing is based on the consent of the data subject (Article 6.1.a of the GDPR).",
                "Le traitement des données repose sur le consentement de la personne concernée (article 6.1.a du RGPD)."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Retention period", "Durée de conservation")}
            </h2>
            <p className="institutional-body">
              {t(
                "Data is retained for a maximum of 3 years from the last contact. Newsletter subscriber data is retained until unsubscription.",
                "Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact. Les données des abonnés à la newsletter sont conservées jusqu'à leur désinscription."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Individual rights", "Droits des personnes")}
            </h2>
            <p className="institutional-body">
              {t(
                "In accordance with the GDPR, any individual has the right to access, rectify, delete, port and object to the processing of their personal data. These rights may be exercised by email at contact@stonebridgeconsult.com.",
                "Conformément au RGPD, toute personne dispose d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant ses données personnelles. Ces droits peuvent être exercés par e-mail à contact@stonebridgeconsult.com."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Processors", "Sous-traitants")}
            </h2>
            <p className="institutional-body">
              {t(
                "Data collected through forms is transmitted to Formspree Inc., a technical processor for form handling. No data is shared with third parties for commercial purposes.",
                "Les données collectées via les formulaires sont transmises à Formspree Inc., sous-traitant technique pour le traitement des formulaires. Aucune donnée n'est transmise à des fins commerciales à des tiers."
              )}
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <h2 className="institutional-label mb-6" style={{ color: '#0F1B2D', opacity: 0.55 }}>
              {t("Transfers outside the EU", "Transferts hors UE")}
            </h2>
            <p className="institutional-body">
              {t(
                "As Formspree Inc. is based in the United States, data may be transferred outside the European Union. Formspree adheres to the European Commission's standard contractual clauses.",
                "Formspree Inc. étant basé aux États-Unis, des données peuvent être transférées hors de l'Union européenne. Formspree adhère aux clauses contractuelles types de la Commission européenne."
              )}
            </p>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Confidentialite;
