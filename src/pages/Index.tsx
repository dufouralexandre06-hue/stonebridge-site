import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  const { t, language } = useLanguage();
  useScrollReveal();
  usePageMeta(
    language,
    "Stonebridge | Conformité LCB-FT, KYC et Gouvernance | Paris",
    "Stonebridge | Independent Regulatory Counsel | Paris",
    "Stonebridge accompagne family offices, sociétés de gestion, experts-comptables et avocats sur leurs obligations LCB-FT, KYC et de gouvernance réglementaire.",
    "Stonebridge advises family offices, wealth structures and asset managers facing sensitive regulatory situations, complex governance arrangements or exacting banking relationships.",
    "/"
  );
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
          className="hero-fade-in font-serif uppercase text-white hero-title"
          style={{
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
        <div
          className="hero-fade-in hero-fade-delay-2 text-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(0.75rem, 1.1vw, 0.875rem)',
            letterSpacing: '0.04em',
            maxWidth: '36rem',
            lineHeight: 1.85,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <p style={{ opacity: 0.78, margin: 0 }}>
            {t(
              "Stonebridge establishes who truly owns and controls a structure. The firm reconstructs multi-jurisdictional ownership chains (Luxembourg, Switzerland, offshore jurisdictions, trusts) up to the ultimate beneficial owners, including where ownership is fragmented below reporting thresholds.",
              "Stonebridge établit qui détient et qui contrôle réellement une structure. Le cabinet reconstitue les chaînes de détention multi-juridictionnelles (Luxembourg, Suisse, juridictions offshore, trusts) jusqu'aux bénéficiaires effectifs, y compris lorsque la détention est fragmentée sous les seuils."
            )}
          </p>
          <p style={{ opacity: 0.52, margin: 0 }}>
            {t(
              "It supports family offices, asset managers, lawyers and accountants whose files must be justifiable, document by document, on the day a third party examines them.",
              "Il accompagne les family offices, sociétés de gestion, avocats et experts-comptables dont les dossiers doivent pouvoir être justifiés, pièce par pièce, le jour où un tiers les examine."
            )}
          </p>
        </div>

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
          <Link
            to="/contact/"
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
          </Link>
        </div>

        </div>{/* end z-10 wrapper */}
      </main>

      {/* ── Fondateur ── */}
      <section className="px-8 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-3xl">
          <h2
            className="reveal font-serif"
            style={{
              color: '#0F1B2D',
              fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
              fontWeight: 400,
              letterSpacing: '0.03em',
            }}
          >
            {t('Experience at the heart of ownership structures', 'Une expérience au cœur des structures de détention')}
          </h2>
          <div
            className="reveal reveal-delay-1"
            style={{
              width: '48px',
              height: '1px',
              backgroundColor: 'rgba(15,27,45,0.2)',
              margin: '18px 0 28px',
            }}
          />
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: '#2F2F2F',
                lineHeight: 1.8,
              }}
            >
              {t(
                "The founder of Stonebridge was trained in a Luxembourg fiduciary, working with holding companies, funds and multi-jurisdictional structures. There, he reconstructed ownership chains up to the ultimate beneficial owners, and took part in client acceptance decisions, based on supporting evidence.",
                "Le fondateur de Stonebridge s'est formé en fiduciaire luxembourgeoise, auprès de holdings, de fonds et de structures multi-juridictionnelles. Il y a reconstitué les chaînes de détention jusqu'aux bénéficiaires effectifs, et pris part aux décisions d'entrée en relation, pièces à l'appui."
              )}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: '#2F2F2F',
                lineHeight: 1.8,
              }}
            >
              {t(
                "From Luxembourg, covering the Benelux and working with Switzerland, he practised every stage of due diligence: identification, sanctions and politically exposed persons screening, risk rating, periodic file review. He also held the entire compliance function, reporting directly to senior management.",
                "Depuis Luxembourg, pour le Benelux et en lien avec la Suisse, il a pratiqué chaque étape de la vigilance : identification, filtrage des sanctions et des personnes politiquement exposées, notation du risque, revue périodique des dossiers. Il a également assuré l'ensemble de la fonction conformité, en rendant compte directement à la direction."
              )}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '0.9375rem',
                color: '#2F2F2F',
                lineHeight: 1.8,
              }}
            >
              {t(
                "From this, he drew the conviction that underpins the firm's method: a compliance decision is only worth something if it can be defended on the day a third party examines it.",
                "Il en a tiré la conviction qui fonde la méthode du cabinet : une décision de conformité ne vaut que si elle peut être défendue le jour où un tiers l'examine."
              )}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
