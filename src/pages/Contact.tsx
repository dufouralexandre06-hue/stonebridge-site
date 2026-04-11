import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(15, 27, 45, 0.2)',
  outline: 'none',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  padding: '10px 0',
  letterSpacing: '0.01em',
  lineHeight: 1.6,
  borderRadius: 0,
  transition: 'border-color 0.2s ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: '0.625rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#0F1B2D',
  opacity: 0.5,
  marginBottom: '6px',
};

const Contact = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const [form, setForm] = useState({
    email: '',
    organisation: '',
    fonction: '',
    juridiction: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [rgpdAccepted, setRgpdAccepted] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldBorder = (name: string) => ({
    ...inputStyle,
    borderBottomColor: focusedField === name ? 'rgba(15, 27, 45, 0.7)' : 'rgba(15, 27, 45, 0.2)',
  });

  const infoSections = [
    {
      bg: '#FAF8F5',
      label: t('FORM DISCLAIMER', 'Correspondance'),
      body: t(
        'Each request is subject to prior review.\n' +
          'Submission of a request does not constitute a commitment to engage.',
        "Toute prise de contact fait l'objet d'une appréciation préalable, au regard de la nature de la situation exposée et du niveau de risque identifié."
      ),
    },
    {
      bg: '#EDE9E3',
      label: t('Location', 'Localisation'),
      body: t('Geneva, Switzerland', 'Genève, Suisse'),
    },
  ];

  return (
    <Layout variant="light">
      {/* Page title */}
      <section className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl">
          <h1
            className="reveal font-serif uppercase"
            style={{ color: '#0F1B2D', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '0.08em', fontWeight: 400 }}
          >
            {t('Contact', 'Contact')}
          </h1>

          <p
            className="reveal reveal-delay-1 institutional-body mt-10"
          >
            {t(
              'Stonebridge engagements are conducted exclusively under formal mandate, following an initial qualification of the situation.',
              'Les interventions de Stonebridge sont réalisées exclusivement sous mandat, après une première qualification de la situation.'
            )}
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-2xl reveal reveal-delay-1">
          {submitted ? (
            <div style={{ paddingTop: '16px' }}>
              <p
                className="institutional-label mb-6"
                style={{ color: '#0F1B2D', opacity: 0.55 }}
              >
                {t('Confirmation', 'Confirmation')}
              </p>
              <p className="institutional-body">
                {t(
                  'Your message has been received. We will review your submission and revert if appropriate.',
                  'Votre message a bien été reçu. Nous examinerons votre demande et reviendrons vers vous le cas échéant.'
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p
                className="institutional-label mb-14"
                style={{ color: '#0F1B2D', opacity: 0.55 }}
              >
                {t('Stonebridge reviews each request before any commitment is made. To submit a situation, please provide:', 'Stonebridge examine chaque demande avant tout engagement. Pour soumettre une situation, merci d\'indiquer :')}
              </p>

              <div className="space-y-10">
                {/* Email */}
                <div>
                  <label style={labelStyle}>
                    {t('Email address', 'Adresse e-mail')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    autoComplete="email"
                    style={fieldBorder('email')}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label style={labelStyle}>
                    {t('Organisation or structure', 'Organisation ou structure')}
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('organisation')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldBorder('organisation')}
                  />
                </div>

                {/* Fonction */}
                <div>
                  <label style={labelStyle}>
                    {t('Position held', 'Fonction')}
                  </label>
                  <input
                    type="text"
                    name="fonction"
                    value={form.fonction}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fonction')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldBorder('fonction')}
                  />
                </div>

                {/* Juridiction */}
                <div>
                  <label style={labelStyle}>
                    {t('Primary jurisdiction concerned', 'Juridiction principale concernée')}
                  </label>
                  <input
                    type="text"
                    name="juridiction"
                    value={form.juridiction}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('juridiction')}
                    onBlur={() => setFocusedField(null)}
                    style={fieldBorder('juridiction')}
                  />
                </div>

                {/* Description */}
                <div>
                  <label style={labelStyle}>
                    {t('Brief description of the situation', 'Description synthétique de la situation')}
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('description')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: `1px solid ${focusedField === 'description' ? 'rgba(15, 27, 45, 0.7)' : 'rgba(15, 27, 45, 0.2)'}`,
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      color: '#2F2F2F',
                      letterSpacing: '0.01em',
                      lineHeight: 1.6,
                      borderRadius: 0,
                      transition: 'border-color 0.2s ease',
                      resize: 'none',
                      padding: '12px',
                    }}
                  />
                </div>
              </div>

              {/* RGPD */}
              <div className="mt-10 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  checked={rgpdAccepted}
                  onChange={(e) => setRgpdAccepted(e.target.checked)}
                  style={{
                    marginTop: '2px',
                    width: '14px',
                    height: '14px',
                    accentColor: '#0F1B2D',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                />
                <label
                  htmlFor="rgpd"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    color: '#2F2F2F',
                    lineHeight: 1.6,
                    cursor: 'pointer',
                  }}
                >
                  {t(
                    'I acknowledge that the information submitted will be processed by Stonebridge solely for the purpose of responding to this enquiry, in accordance with applicable data protection regulations.',
                    'J\'accepte que les informations transmises soient traitées par Stonebridge dans le seul but de répondre à cette prise de contact, conformément à la réglementation applicable en matière de protection des données personnelles.'
                  )}
                </label>
              </div>

              {/* Submit */}
              <div className="mt-14">
                <button
                  type="submit"
                  disabled={!rgpdAccepted}
                  onMouseEnter={() => rgpdAccepted && setBtnHovered(true)}
                  onMouseLeave={() => setBtnHovered(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: !rgpdAccepted ? 'rgba(255,255,255,0.4)' : btnHovered ? '#0F1B2D' : '#ffffff',
                    backgroundColor: !rgpdAccepted ? 'rgba(15,27,45,0.35)' : btnHovered ? '#ffffff' : '#0F1B2D',
                    border: '1px solid #BFA46F',
                    padding: '14px 36px',
                    borderRadius: '2px',
                    cursor: rgpdAccepted ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  {t('Submit', 'Soumettre')}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Info sections */}
      {infoSections.map((s, i) => (
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
              <p className="institutional-body whitespace-pre-line">{s.body}</p>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Contact;
