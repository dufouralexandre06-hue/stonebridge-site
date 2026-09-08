import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const legalLinkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.6875rem',
  letterSpacing: '0.06em',
  color: 'rgba(255,255,255,0.55)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch('https://formspree.io/f/xkokqjgz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Newsletter — note de conformité' }),
      });
      if (res.ok) setSubscribed(true);
    } catch {
      // silently fail
    }
  };

  return (
    <footer style={{ backgroundColor: '#0F1B2D', borderTop: '1px solid rgba(255,255,255,0.08)' }} className="px-8 md:px-16 py-14">
      <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

        {/* Ligne 1 : marque + ville */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            to="/"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: '0.875rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.9)',
              textDecoration: 'none',
            }}
          >
            Stonebridge
          </Link>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            Paris, France
          </span>
        </div>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />

        {/* Ligne 2 : newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.65)',
              margin: 0,
              maxWidth: '22rem',
              lineHeight: 1.6,
            }}
          >
            {t(
              'Receive Stonebridge compliance notes by email.',
              'Recevoir les notes de conformité Stonebridge par e-mail.'
            )}
          </p>

          {subscribed ? (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.5)',
                margin: 0,
              }}
            >
              {t('Successfully subscribed.', 'Inscription enregistrée.')}
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
              <form
                onSubmit={handleNewsletter}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('Email address', 'Adresse e-mail')}
                  required
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.85)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.3)',
                    outline: 'none',
                    padding: '8px 0',
                    width: '220px',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.65)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.3)',
                    padding: '8px 14px',
                    cursor: 'pointer',
                    lineHeight: 1,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.95)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                >
                  →
                </button>
              </form>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.01em',
                  color: 'rgba(255,255,255,0.38)',
                  margin: 0,
                  maxWidth: '300px',
                  textAlign: 'right',
                  lineHeight: 1.65,
                }}
              >
                {t(
                  'By submitting this form, you agree to receive Stonebridge compliance notes. You may unsubscribe at any time by writing to contact@stonebridgeconsult.com.',
                  'En soumettant ce formulaire, vous acceptez de recevoir les notes de conformité Stonebridge. Vous pouvez vous désinscrire à tout moment en écrivant à contact@stonebridgeconsult.com.'
                )}
              </p>
            </div>
          )}
        </div>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />

        {/* Ligne 3 : liens légaux + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {[
              { to: '/mentions-legales', en: 'Legal Notice', fr: 'Mentions légales' },
              { to: '/cookies', en: 'Cookie Policy', fr: 'Politique de cookies' },
              { to: '/confidentialite', en: 'Privacy Policy', fr: 'Politique de confidentialité' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={legalLinkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                {t(link.en, link.fr)}
              </Link>
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            © 2026 Stonebridge SAS
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
