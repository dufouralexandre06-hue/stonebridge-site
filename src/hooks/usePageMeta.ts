import { useEffect } from 'react';

const DEFAULT_TITLE = 'Stonebridge | Conformité LCB-FT, KYC et Gouvernance | Paris';
const DEFAULT_DESC = 'Expert en conformité LCB-FT, KYC et gouvernance pour family offices, sociétés de gestion et avocats fiscalistes. Paris.';
const SITE_URL = 'https://stonebridgeconsult.com';
const DEFAULT_CANONICAL = SITE_URL;

const setMeta = (selector: string, value: string) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

/**
 * @param canonicalPath Path for this page's canonical URL, matching the exact form served as a
 *   200 (with OVH/Apache, every route except "/" serves only with a trailing slash — see
 *   .htaccess). Use "/" for the homepage. Required on every call so a page can no longer be left
 *   with the previous page's (or the default) canonical tag by omission.
 */
export const usePageMeta = (
  lang: string,
  titleFr: string,
  titleEn: string,
  descFr: string,
  descEn: string,
  canonicalPath: string
) => {
  useEffect(() => {
    const title = lang === 'fr' ? titleFr : titleEn;
    const desc  = lang === 'fr' ? descFr  : descEn;
    const canonical = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
    document.title = title;
    setMeta('meta[name="description"]',     desc);
    setMeta('meta[property="og:title"]',    title);
    setMeta('meta[property="og:description"]', desc);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]',     DEFAULT_DESC);
      setMeta('meta[property="og:title"]',    DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', DEFAULT_CANONICAL);
    };
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps
};
