import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationProps {
  variant?: 'dark' | 'light';
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ transparent = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { path: '/', labelEn: 'Overview', labelFr: 'Présentation' },
    { path: '/mandats', labelEn: 'Mandates', labelFr: 'Mandats' },
    { path: '/situations', labelEn: 'Situations', labelFr: 'Situations' },
    { path: '/doctrine', labelEn: 'Doctrine', labelFr: 'Doctrine' },
    { path: '/contact', labelEn: 'Contact', labelFr: 'Contact' },
  ];

  const isSolid = !transparent || scrolled;

  return (
    <nav
      className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        backgroundColor: isSolid ? '#0F1B2D' : 'transparent',
        borderBottom: isSolid && scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="px-8 md:px-16 py-6">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-base tracking-[0.28em] text-white uppercase hover:opacity-70 transition-opacity duration-300 justify-self-start"
          >
            Stonebridge
          </Link>

          {/* Nav links — centré */}
          <div className="hidden lg:flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`institutional-label transition-opacity duration-200 ${
                  location.pathname === item.path
                    ? 'text-white opacity-100'
                    : 'text-white opacity-40 hover:opacity-80'
                }`}
              >
                {t(item.labelEn, item.labelFr)}
              </Link>
            ))}
          </div>

          {/* Language selector */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={`institutional-label transition-opacity duration-200 ${
                language === 'en' ? 'text-white opacity-100' : 'text-white opacity-35 hover:opacity-70'
              }`}
            >
              EN
            </button>
            <span className="text-white opacity-20 text-xs">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`institutional-label transition-opacity duration-200 ${
                language === 'fr' ? 'text-white opacity-100' : 'text-white opacity-35 hover:opacity-70'
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
