import type { Question } from '@/types';

/**
 * Lit une réponse numérique d'élève sans évaluer de code :
 * entier, décimal (point ou virgule) ou fraction a/b. Renvoie null si invalide.
 */
export function parseNumericAnswer(raw: string): number | null {
  const s = raw.trim().replace(/\s+/g, '').replace(/[−–]/g, '-').replace(',', '.');
  if (!s) return null;
  const frac = s.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
  if (frac) {
    const den = Number(frac[2]);
    if (den === 0) return null;
    return Number(frac[1]) / den;
  }
  if (/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(s)) return Number(s);
  return null;
}

export function isNumericCorrect(question: Extract<Question, { type: 'numeric' }>, value: number): boolean {
  const tol = question.tolerance ?? 1e-9;
  return Math.abs(value - question.answer) <= tol + 1e-12 * Math.abs(question.answer);
}

/** Affichage d'une réponse numérique attendue (virgule décimale, usage scolaire marocain). */
export function formatAnswer(n: number): string {
  return String(parseFloat(n.toPrecision(6))).replace('.', ',');
}
