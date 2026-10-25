import { useEffect } from 'react';
import { useI18n } from './useI18n';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Définit le titre et la description de la page (SEO et partage). */
export function usePageMeta(title: string, description?: string) {
  const { t } = useI18n();
  useEffect(() => {
    const fullTitle = title ? `${title} | ${t.meta.siteName}` : t.meta.siteName;
    const desc = description || t.meta.defaultDescription;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', desc);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', desc);
  }, [title, description, t]);
}
