import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#0F1B2D' }}>
      <Navigation transparent />
      <MobileNavigation transparent />

      {/* ── Hero ── */}
      <main
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '100vh' }}
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero_poster.jpg"
        >
          <source src="/hero_720.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(15, 27, 45, 0.72)' }}
        />
        {/* Content above overlay */}
        <div className="relative z-10 flex flex-col items-center">

        {/* Title */}
        <h1
          className="hero-fade-in font-serif uppercase text-white"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            letterSpacing: '0.22em',
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          STONEBRIDGE
        </h1>

        {/* Golden accent line */}
        <div
          className="hero-fade-in hero-fade-delay-1"
          style={{
            width: '120px',
            height: '1px',
            backgroundColor: '#BFA46F',
            margin: '24px auto 28px',
          }}
        />

        {/* Subtitle */}
        <p
          className="hero-fade-in hero-fade-delay-2 text-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
            letterSpacing: '0.06em',
            opacity: 0.75,
            maxWidth: '38rem',
            lineHeight: 1.8,
          }}
        >
          {t(
            "Independent counsel for sensitive regulatory situations, complex governance structures and exacting banking relationships.",
            "Conseil indépendant pour les situations réglementaires sensibles, les gouvernances complexes et les relations bancaires exigeantes."
          )}
        </p>

        {/* Cities */}
        <p
          className="hero-fade-in hero-fade-delay-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            color: 'rgba(245,245,245,0.55)',
            marginTop: '14px',
          }}
        >
          Paris
        </p>

        {/* CTA */}
        <div className="hero-fade-in hero-fade-delay-4 mt-14">
          <a
            href="/contact"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: 'inline-block',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: btnHovered ? '#0F1B2D' : '#ffffff',
              backgroundColor: btnHovered ? '#ffffff' : 'transparent',
              border: '1px solid rgba(255,255,255,0.45)',
              padding: '14px 32px',
              borderRadius: '2px',
              transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
              borderColor: btnHovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {t('Request a confidential assessment', 'Demander une évaluation confidentielle')}
          </a>
        </div>

        </div>{/* end z-10 wrapper */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
