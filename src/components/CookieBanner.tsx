import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const COOKIE_KEY = 'stonebridge-cookies-accepted';

const CookieBanner = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        backgroundColor: '#0F1B2D',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap',
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '0.8125rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6,
          flex: 1,
          minWidth: '240px',
          margin: 0,
        }}
      >
        {t(
          'This site uses technical cookies necessary for its operation. By continuing to browse, you accept their use.',
          "Ce site utilise des cookies techniques nécessaires à son fonctionnement. En continuant votre navigation, vous en acceptez l'utilisation."
        )}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
        <Link
          to="/cookies"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.75rem',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.18)',
            paddingBottom: '1px',
          }}
        >
          {t('Learn more', 'En savoir plus')}
        </Link>
        <button
          onClick={accept}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.6875rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: btnHovered ? '#0F1B2D' : '#ffffff',
            backgroundColor: btnHovered ? '#ffffff' : 'transparent',
            border: '1px solid rgba(255,255,255,0.45)',
            borderColor: btnHovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
            padding: '10px 24px',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
          }}
        >
          {t('Accept', 'Accepter')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
