import type { Lang } from '@/types';
import { ar } from './ar';
import { fr } from './fr';
import type { Dictionary } from './types';

export const dictionaries: Record<Lang, Dictionary> = { ar, fr };

export const LANGS: { id: Lang; label: string; dir: 'rtl' | 'ltr'; htmlLang: string }[] = [
  { id: 'ar', label: 'العربية', dir: 'rtl', htmlLang: 'ar-MA' },
  { id: 'fr', label: 'Français', dir: 'ltr', htmlLang: 'fr-MA' },
];

export const DEFAULT_LANG: Lang = 'ar';

export function isLang(value: unknown): value is Lang {
  return value === 'ar' || value === 'fr';
}

/** Remplace les variables {nom} d'un modèle de texte. */
export function fmt(template: string, params: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match,
  );
}

export type { Dictionary };
