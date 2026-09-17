import type { CSSProperties } from 'react';

export const eyebrowStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.6875rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#0F1B2D',
  opacity: 0.38,
};

export const h2Style: CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  color: '#0F1B2D',
  fontSize: 'clamp(1.125rem, 1.7vw, 1.375rem)',
  fontWeight: 400,
  letterSpacing: '0.03em',
  lineHeight: 1.3,
  marginTop: '52px',
  marginBottom: '18px',
};

export const h2FirstStyle: CSSProperties = { ...h2Style, marginTop: 0 };

export const h3Style: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
  color: '#0F1B2D',
  letterSpacing: '0.01em',
  lineHeight: 1.3,
  marginTop: '28px',
  marginBottom: '10px',
};

export const bodyStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#2F2F2F',
  lineHeight: 1.85,
  marginBottom: '14px',
};

export const listStyle: CSSProperties = {
  ...bodyStyle,
  paddingLeft: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const linkStyle: CSSProperties = {
  color: '#0F1B2D',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(15,27,45,0.3)',
  paddingBottom: '1px',
};

export const externalLinkStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: '1px solid rgba(15,27,45,0.25)',
  paddingBottom: '1px',
};

export const vigilanceBoxStyle: CSSProperties = {
  backgroundColor: '#EDE9E3',
  borderLeft: '2px solid rgba(15,27,45,0.25)',
  padding: '24px 28px',
  margin: '36px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export const vigilanceItemStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.875rem',
  color: '#2F2F2F',
  lineHeight: 1.75,
};

export const faqQStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: '0.9375rem',
  color: '#0F1B2D',
  lineHeight: 1.4,
  marginBottom: '6px',
};

export const faqAStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.875rem',
  color: 'rgba(15,27,45,0.68)',
  lineHeight: 1.75,
};

export const methodologyStyle: CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 300,
  fontSize: '0.8125rem',
  fontStyle: 'italic',
  color: 'rgba(15,27,45,0.55)',
  lineHeight: 1.75,
};
