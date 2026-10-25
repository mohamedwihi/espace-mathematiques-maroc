import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Localized } from '@/types';
import { readJSON, STORAGE_KEYS, writeJSON } from '@/services/storage';
import { DEFAULT_LANG, dictionaries, fmt, isLang, LANGS, type Dictionary } from './index';

export interface I18nContextValue {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Choisit la version adaptée d'un texte bilingue. */
  L: (text: Localized) => string;
  fmt: typeof fmt;
  /** Formate un nombre selon la langue (chiffres latins dans les deux cas, usage scolaire marocain). */
  num: (n: number, maxDigits?: number) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

function initialLang(): Lang {
  const stored = readJSON<unknown>(STORAGE_KEYS.lang, null);
  if (isLang(stored)) return stored;
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) return 'fr';
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const info = LANGS.find((l) => l.id === lang) ?? LANGS[0];

  useEffect(() => {
    document.documentElement.lang = info.htmlLang;
    document.documentElement.dir = info.dir;
    document.documentElement.dataset.lang = lang;
  }, [lang, info]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    writeJSON(STORAGE_KEYS.lang, next);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir: info.dir,
      t: dictionaries[lang],
      setLang,
      toggleLang: () => setLang(lang === 'ar' ? 'fr' : 'ar'),
      L: (text) => text[lang],
      fmt,
      num: (n, maxDigits = 6) =>
        new Intl.NumberFormat(lang === 'ar' ? 'ar-MA-u-nu-latn' : 'fr-MA', { maximumFractionDigits: maxDigits }).format(n),
    }),
    [lang, info.dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
