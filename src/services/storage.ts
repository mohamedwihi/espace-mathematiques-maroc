/**
 * Accès sûr au LocalStorage : toutes les lectures/écritures sont protégées,
 * car le stockage peut être indisponible (navigation privée, quota, cookies bloqués).
 */
const PREFIX = 'emm:v1:';

export const STORAGE_KEYS = {
  lang: 'lang',
  progress: 'progress',
  calcHistory: 'calc-history',
  gameBests: 'game-bests',
} as const;

export function isStorageAvailable(): boolean {
  try {
    const probe = `${PREFIX}__probe__`;
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export function readJSON<T>(key: string, fallback: T, validate?: (value: unknown) => value is T): T {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (validate && !validate(parsed)) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

export function writeJSON(key: string, value: unknown): boolean {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key: string): void {
  try {
    window.localStorage.removeItem(PREFIX + key);
  } catch {
    /* stockage indisponible : rien à supprimer */
  }
}
