import { useEffect } from 'react';

/**
 * Injects one or more schema.org JSON-LD <script> tags into <head>.
 * Each entry in `schemas` is stringified as its own script tag and removed on unmount/change.
 */
export const useJsonLd = (schemas: object[], key: string) => {
  useEffect(() => {
    const nodes: HTMLScriptElement[] = schemas.map((schema, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-jsonld-key', `${key}-${i}`);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      nodes.forEach((node) => node.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
};
