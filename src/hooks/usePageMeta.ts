import { useEffect } from 'react';

const DEFAULT_TITLE = 'Stonebridge | Conformité LCB-FT, KYC et Gouvernance | Paris';
const DEFAULT_DESC = 'Expert en conformité LCB-FT, KYC et gouvernance pour family offices, sociétés de gestion et avocats fiscalistes. Paris.';

const setMeta = (selector: string, value: string) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

export const usePageMeta = (
  lang: string,
  titleFr: string,
  titleEn: string,
  descFr: string,
  descEn: string
) => {
  useEffect(() => {
    const title = lang === 'fr' ? titleFr : titleEn;
    const desc  = lang === 'fr' ? descFr  : descEn;
    document.title = title;
    setMeta('meta[name="description"]',     desc);
    setMeta('meta[property="og:title"]',    title);
    setMeta('meta[property="og:description"]', desc);
    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]',     DEFAULT_DESC);
      setMeta('meta[property="og:title"]',    DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
    };
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps
};
