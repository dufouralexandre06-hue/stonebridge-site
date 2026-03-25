import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavigationProps {
  variant?: 'dark' | 'light';
  transparent?: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ transparent = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', labelEn: 'Overview', labelFr: 'Présentation' },
    { path: '/mandats', labelEn: 'Mandates', labelFr: 'Mandats' },
    { path: '/situations', labelEn: 'Situations', labelFr: 'Situations' },
    { path: '/doctrine', labelEn: 'Doctrine', labelFr: 'Doctrine' },
    { path: '/contact', labelEn: 'Contact', labelFr: 'Contact' },
  ];

  return (
    <div className="lg:hidden">
      {/* Mobile header bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-500 ease-out"
        style={{ backgroundColor: (!transparent || scrolled || isOpen) ? '#0F1B2D' : 'transparent' }}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-sm tracking-[0.28em] text-white uppercase"
            onClick={() => setIsOpen(false)}
          >
            Stonebridge
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className="block h-px bg-white transition-all duration-300"
                style={{ transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}
              />
              <span
                className="block h-px bg-white transition-all duration-300"
                style={{ opacity: isOpen ? 0 : 1 }}
              />
              <span
                className="block h-px bg-white transition-all duration-300"
                style={{ transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500"
        style={{
          backgroundColor: '#0F1B2D',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {navItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="font-serif text-2xl tracking-[0.12em] uppercase transition-all duration-300"
            style={{
              color: location.pathname === item.path ? '#ffffff' : 'rgba(255,255,255,0.45)',
              transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {t(item.labelEn, item.labelFr)}
          </Link>
        ))}

        <div
          className="flex items-center gap-4 mt-6 transition-all duration-300"
          style={{
            transitionDelay: isOpen ? '480ms' : '0ms',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <button
            onClick={() => setLanguage('en')}
            className="institutional-label"
            style={{ color: language === 'en' ? '#ffffff' : 'rgba(255,255,255,0.35)' }}
          >
            EN
          </button>
          <span className="text-white opacity-20 text-xs">|</span>
          <button
            onClick={() => setLanguage('fr')}
            className="institutional-label"
            style={{ color: language === 'fr' ? '#ffffff' : 'rgba(255,255,255,0.35)' }}
          >
            FR
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
