import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer style={{ backgroundColor: '#0F1B2D' }} className="px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Ligne 1 : marque + ville */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-serif tracking-[0.2em] text-white text-sm uppercase">
            Stonebridge
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Paris
          </span>
        </div>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

        {/* Ligne 2 : newsletter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.75rem',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.4)',
              margin: 0,
            }}
          >
            {t('Receive Stonebridge compliance notes', 'Recevoir les notes de conformité Stonebridge')}
          </p>

          {subscribed ? (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.75rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.35)',
                margin: 0,
              }}
            >
              {t('Noted.', 'Noté.')}
            </p>
          ) : (
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
                  fontSize: '0.75rem',
                  letterSpacing: '0.03em',
                  color: 'rgba(255,255,255,0.65)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.18)',
                  outline: 'none',
                  padding: '6px 0',
                  width: '220px',
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.4)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.18)',
                  padding: '6px 14px',
                  cursor: 'pointer',
                  lineHeight: 1,
                }}
              >
                →
              </button>
            </form>
          )}
        </div>

        {/* Séparateur */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

        {/* Ligne 3 : liens légaux + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              to="/mentions-legales"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.6875rem',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
              }}
            >
              {t('Legal Notice', 'Mentions légales')}
            </Link>
            <Link
              to="/cookies"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.6875rem',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
              }}
            >
              {t('Cookie Policy', 'Politique de cookies')}
            </Link>
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.2)',
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
