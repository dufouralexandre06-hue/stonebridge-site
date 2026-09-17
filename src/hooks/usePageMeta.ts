import { useEffect } from 'react';

const DEFAULT_TITLE = 'Stonebridge | Conformité LCB-FT, KYC et Gouvernance | Paris';
const DEFAULT_DESC = 'Expert en conformité LCB-FT, KYC et gouvernance pour family offices, sociétés de gestion et avocats fiscalistes. Paris.';
const SITE_URL = 'https://stonebridgeconsult.com';
const DEFAULT_CANONICAL = SITE_URL;

const setMeta = (selector: string, value: string) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

/**
 * @param canonicalPath Optional path (e.g. "/analyses-veille/slug") to set as the canonical URL
 *   for this page. Omit to leave the canonical tag untouched (existing pages keep their current
 *   behaviour — the tag stays on its index.html default).
 */
export const usePageMeta = (
  lang: string,
  titleFr: string,
  titleEn: string,
  descFr: string,
  descEn: string,
  canonicalPath?: string
) => {
  useEffect(() => {
    const title = lang === 'fr' ? titleFr : titleEn;
    const desc  = lang === 'fr' ? descFr  : descEn;
    document.title = title;
    setMeta('meta[name="description"]',     desc);
    setMeta('meta[property="og:title"]',    title);
    setMeta('meta[property="og:description"]', desc);
    if (canonicalPath) {
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${canonicalPath}`);
    }
    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]',     DEFAULT_DESC);
      setMeta('meta[property="og:title"]',    DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      if (canonicalPath) {
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', DEFAULT_CANONICAL);
      }
    };
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps
};
