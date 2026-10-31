/**
 * Générateur de questions du jeu « Défi Maths ».
 * Chaque question est tirée au hasard selon le niveau et une difficulté (1 à 3) ;
 * les mauvaises réponses sont des erreurs plausibles, jamais égales à la bonne.
 */
import type { LevelId } from '@/types';

export interface GameQuestion {
  /** Énoncé (peut contenir du LaTeX entre $…$), identique en arabe et en français. */
  prompt: string;
  choices: string[];
  answer: number;
  /** Courte explication affichée après la réponse. */
  explain: string;
}

type Rng = () => number;
type Gen = (r: Rng, d: number) => { prompt: string; good: string; bad: string[]; explain: string };

const int = (r: Rng, a: number, b: number) => a + Math.floor(r() * (b - a + 1));
const pick = <T,>(r: Rng, xs: readonly T[]) => xs[Math.floor(r() * xs.length)];
const nz = (r: Rng, a: number, b: number) => {
  let x = 0;
  while (x === 0) x = int(r, a, b);
  return x;
};
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
/** Nombre au format décimal français, en LaTeX. */
const n = (x: number) => {
  const s = String(Math.round(x * 1000) / 1000).replace('.', '{,}');
  return `$${s}$`;
};
const frac = (p: number, q: number) => {
  if (q < 0) [p, q] = [-p, -q];
  const g = gcd(p, q) || 1;
  [p, q] = [p / g, q / g];
  return q === 1 ? `$${p}$` : `$${p < 0 ? '-' : ''}\\dfrac{${Math.abs(p)}}{${q}}$`;
};
const signed = (x: number) => (x < 0 ? `(${x})` : `${x}`);
/** Terme « a x » propre : 1x → x, -1x → -x. */
const ax = (a: number, v = 'x') => (a === 1 ? v : a === -1 ? `-${v}` : `${a}${v}`);
const plus = (b: number) => (b === 0 ? '' : b > 0 ? `+${b}` : `${b}`);

/* ---------------- Générateurs par thème ---------------- */

const mental: Gen = (r, d) => {
  const op = pick(r, d === 1 ? ['+', '-', '×'] : ['+', '-', '×', '÷']);
  const m = d === 1 ? 20 : d === 2 ? 60 : 150;
  let a = int(r, 2, m), b = int(r, 2, d === 1 ? 12 : 25), good: number;
  if (op === '÷') { good = int(r, 2, 15); a = good * b; }
  else good = op === '+' ? a + b : op === '-' ? a - b : a * b;
  return {
    prompt: `$${a}${op === '×' ? '\\times' : op === '÷' ? '\\div' : op}${b}=\\,?$`,
    good: n(good),
    bad: [n(good + 1), n(good - (op === '×' ? b : 2)), n(good + 10)],
    explain: `$${a}${op === '×' ? '\\times' : op === '÷' ? '\\div' : op}${b}=${good}$`,
  };
};

const decimals: Gen = (r) => {
  const a = int(r, 11, 99) / 10, k = pick(r, [10, 100, 1000, 0.1, 0.01]);
  const good = a * k;
  const shift = k >= 1 ? 10 : 0.1;
  return {
    prompt: `$${String(a).replace('.', '{,}')}\\times${String(k).replace('.', '{,}')}=\\,?$`,
    good: n(good),
    bad: [n(good * shift), n(good / shift), n(a + k)],
    explain: k >= 1 ? 'On décale la virgule vers la droite. / نزيح الفاصلة نحو اليمين.' : 'On décale la virgule vers la gauche. / نزيح الفاصلة نحو اليسار.',
  };
};

const priorities: Gen = (r) => {
  const a = int(r, 2, 9), b = int(r, 2, 9), c = int(r, 2, 9);
  const good = a + b * c;
  return {
    prompt: `$${a}+${b}\\times${c}=\\,?$`,
    good: n(good),
    bad: [n((a + b) * c), n(a * b + c), n(good + 1)],
    explain: `La multiplication d’abord : $${b}\\times${c}=${b * c}$. / الضرب أولاً.`,
  };
};

const fractions: Gen = (r, d) => {
  const q1 = int(r, 2, d === 1 ? 6 : 9), q2 = d === 1 ? q1 : int(r, 2, 9);
  const p1 = int(r, 1, 7), p2 = int(r, 1, 7);
  const op = d === 3 ? pick(r, ['+', '×']) : '+';
  const [P, Q] = op === '+' ? [p1 * q2 + p2 * q1, q1 * q2] : [p1 * p2, q1 * q2];
  return {
    prompt: `$\\dfrac{${p1}}{${q1}}${op === '×' ? '\\times' : '+'}\\dfrac{${p2}}{${q2}}=\\,?$`,
    good: frac(P, Q),
    bad: [frac(p1 + p2, q1 + q2), frac(P + 1, Q), op === '+' ? frac(p1 * p2, q1 * q2) : frac(p1 * q2 + p2 * q1, q1 * q2)],
    explain: op === '+' ? 'Même dénominateur, puis on additionne les numérateurs. / نوحد المقامات.' : 'Numérateurs entre eux, dénominateurs entre eux. / نضرب البسطين والمقامين.',
  };
};

const relatives: Gen = (r, d) => {
  const a = nz(r, -15, 15), b = nz(r, -15, 15);
  const op = pick(r, d === 1 ? ['+', '-'] : ['+', '-', '×']);
  const good = op === '+' ? a + b : op === '-' ? a - b : a * b;
  return {
    prompt: `$${signed(a)}${op === '×' ? '\\times' : op}${signed(b)}=\\,?$`,
    good: n(good),
    bad: [n(-good === good ? good + 2 : -good), n(op === '-' ? a + b : a - b), n(good + (good >= 0 ? 2 : -2))],
    explain: op === '×' ? 'Règle des signes. / قاعدة الإشارات.' : 'Soustraire, c’est ajouter l’opposé. / الطرح هو إضافة المقابل.',
  };
};

const powers: Gen = (r, d) => {
  if (d < 3) {
    const a = int(r, 2, 5), e = int(r, 2, 4);
    const good = a ** e;
    return { prompt: `$${a}^{${e}}=\\,?$`, good: n(good), bad: [n(a * e), n(good + a), n(a ** (e - 1))], explain: `$${a}^{${e}}$ = ${e} facteurs égaux à ${a}.` };
  }
  const a = int(r, 2, 7), m = int(r, -4, 6), k = int(r, -4, 6);
  return {
    prompt: `$${a}^{${m}}\\times${a}^{${k}}=\\,?$`,
    good: `$${a}^{${m + k}}$`,
    bad: [`$${a}^{${m * k}}$`, `$${a * a}^{${m + k}}$`, `$${a}^{${m - k}}$`],
    explain: '$a^m\\times a^n=a^{m+n}$',
  };
};

const sqrt: Gen = (r, d) => {
  if (d === 1) {
    const a = int(r, 2, 15);
    return { prompt: `$\\sqrt{${a * a}}=\\,?$`, good: n(a), bad: [n(a * a / 2), n(a + 1), n(2 * a)], explain: `$${a}^2=${a * a}$` };
  }
  const k = pick(r, [2, 3, 5, 6, 7]), a = int(r, 2, 5);
  return {
    prompt: `$\\sqrt{${a * a * k}}=\\,?$`,
    good: `$${a}\\sqrt{${k}}$`,
    bad: [`$${k}\\sqrt{${a}}$`, `$${a * a}\\sqrt{${k}}$`, `$${a}\\sqrt{${k * a}}$`],
    explain: `$\\sqrt{${a * a * k}}=\\sqrt{${a * a}}\\times\\sqrt{${k}}$`,
  };
};

const linearEq: Gen = (r, d) => {
  const x = nz(r, -9, 9), a = nz(r, d === 1 ? 2 : -9, 9), b = int(r, -12, 12);
  const c = a * x + b;
  return {
    prompt: `${'Résoudre / حل'} : $${ax(a)}${plus(b)}=${c}$`,
    good: `$x=${x}$`,
    bad: [`$x=${-x}$`, `$x=${x + 1}$`, `$x=${c - b}$`].filter((s) => s !== `$x=${x}$`),
    explain: `$${ax(a)}=${c - b}$ donc $x=${x}$.`,
  };
};

const expand: Gen = (r, d) => {
  const a = nz(r, 1, d === 3 ? 4 : 1), b = nz(r, -7, 7);
  const sq = pick(r, ['+', '-']);
  if (sq === '+') {
    return {
      prompt: `$(${ax(a)}${plus(b)})^2=\\,?$`,
      good: `$${ax(a * a, 'x^2')}${plus(2 * a * b)}x+${b * b}$`,
      bad: [`$${ax(a * a, 'x^2')}+${b * b}$`, `$${ax(a * a, 'x^2')}${plus(a * b)}x+${b * b}$`, `$${ax(a * a, 'x^2')}${plus(2 * a * b)}x${plus(-b * b)}$`],
      explain: '$(a+b)^2=a^2+2ab+b^2$',
    };
  }
  const c = Math.abs(b);
  return {
    prompt: `$(${ax(a)}-${c})(${ax(a)}+${c})=\\,?$`,
    good: `$${ax(a * a, 'x^2')}-${c * c}$`,
    bad: [`$${ax(a * a, 'x^2')}+${c * c}$`, `$${ax(a * a, 'x^2')}-${2 * c}$`, `$${ax(a, 'x^2')}-${c * c}$`],
    explain: '$(a-b)(a+b)=a^2-b^2$',
  };
};

const pythagoras: Gen = (r) => {
  const [a, b, c] = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]] as const);
  return {
    prompt: `Triangle rectangle / مثلث قائم : $${a}$ et $${b}$ côtés de l’angle droit. Hypoténuse ?`,
    good: n(c),
    bad: [n(a + b), n(c + 1), n(Math.max(a, b) + 1 === c ? c + 2 : Math.max(a, b) + 1)],
    explain: `$${a}^2+${b}^2=${a * a + b * b}=${c}^2$`,
  };
};

const slope: Gen = (r) => {
  const x1 = int(r, -4, 3), y1 = int(r, -5, 5), dx = nz(r, 1, 4), m = nz(r, -3, 3), y2 = y1 + m * dx, x2 = x1 + dx;
  return {
    prompt: `Pente de $(AB)$ / ميل $(AB)$ : $A(${x1};${y1})$, $B(${x2};${y2})$`,
    good: n(m),
    bad: [n(-m), frac(dx, m * dx), n(m + 1)],
    explain: `$m=\\dfrac{${y2}-${signed(y1)}}{${x2}-${signed(x1)}}=${m}$`,
  };
};

const quadratic: Gen = (r) => {
  const x1 = int(r, -6, 6), x2 = int(r, -6, 6), s = x1 + x2, p = x1 * x2;
  const disc = s * s - 4 * p;
  return {
    prompt: `Discriminant de $x^2${s === 0 ? '' : -s > 0 ? `+${ax(-s)}` : ax(-s)}${plus(p)}=0$ / المميز ؟`,
    good: n(disc),
    bad: [n(s * s + 4 * p), n(disc + 4), n(-disc === disc ? disc + 1 : -disc)],
    explain: '$\\Delta=b^2-4ac$',
  };
};

const trigo: Gen = (r) => {
  const t = pick(r, [
    ['\\cos\\dfrac{\\pi}{3}', '$\\dfrac12$', ['$\\dfrac{\\sqrt3}{2}$', '$\\dfrac{\\sqrt2}{2}$', '$1$']],
    ['\\sin\\dfrac{\\pi}{6}', '$\\dfrac12$', ['$\\dfrac{\\sqrt3}{2}$', '$0$', '$\\dfrac{\\sqrt2}{2}$']],
    ['\\cos\\dfrac{\\pi}{4}', '$\\dfrac{\\sqrt2}{2}$', ['$\\dfrac12$', '$\\dfrac{\\sqrt3}{2}$', '$1$']],
    ['\\tan\\dfrac{\\pi}{4}', '$1$', ['$0$', '$\\sqrt3$', '$\\dfrac{\\sqrt3}{3}$']],
    ['\\cos\\pi', '$-1$', ['$1$', '$0$', '$\\dfrac12$']],
    ['\\sin\\dfrac{\\pi}{2}', '$1$', ['$0$', '$-1$', '$\\dfrac12$']],
    ['\\tan\\dfrac{\\pi}{3}', '$\\sqrt3$', ['$\\dfrac{\\sqrt3}{3}$', '$1$', '$\\dfrac12$']],
    ['\\cos^2x+\\sin^2x', '$1$', ['$0$', '$2$', '$\\cos2x$']],
  ] as const);
  return { prompt: `$${t[0]}=\\,?$`, good: t[1], bad: [...t[2]], explain: `$${t[0]}=$ ${t[1]}` };
};

const derivative: Gen = (r, d) => {
  const t = pick(r, [
    ['x^3', '$3x^2$', ['$x^2$', '$3x^3$', '$\\dfrac{x^4}{4}$']],
    ['\\sqrt{x}', '$\\dfrac{1}{2\\sqrt x}$', ['$\\dfrac{1}{\\sqrt x}$', '$2\\sqrt x$', '$\\dfrac{\\sqrt x}{2}$']],
    ['\\dfrac1x', '$-\\dfrac{1}{x^2}$', ['$\\dfrac{1}{x^2}$', '$\\ln x$', '$-\\dfrac1x$']],
    ['\\sin x', '$\\cos x$', ['$-\\cos x$', '$-\\sin x$', '$\\tan x$']],
    ['\\cos x', '$-\\sin x$', ['$\\sin x$', '$\\cos x$', '$-\\cos x$']],
    ...(d >= 2
      ? ([
          ['\\ln x', '$\\dfrac1x$', ['$e^x$', '$x\\ln x$', '$\\dfrac{1}{x^2}$']],
          ['e^{2x}', '$2e^{2x}$', ['$e^{2x}$', '$2xe^{2x-1}$', '$\\dfrac{e^{2x}}{2}$']],
          ['(2x+1)^3', '$6(2x+1)^2$', ['$3(2x+1)^2$', '$2(2x+1)^3$', '$6(2x+1)^3$']],
        ] as const)
      : []),
  ] as const);
  return { prompt: `$f(x)=${t[0]}$ ; $f'(x)=\\,?$`, good: t[1], bad: [...t[2]], explain: `$f'(x)=$ ${t[1]}` };
};

const limits: Gen = (r) => {
  const t = pick(r, [
    ['\\lim\\limits_{x\\to0}\\dfrac{\\sin x}{x}', '$1$', ['$0$', '$+\\infty$', '$\\pi$']],
    ['\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}{x}', '$0$', ['$1$', '$+\\infty$', '$e$']],
    ['\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}{x}', '$+\\infty$', ['$0$', '$1$', '$e$']],
    ['\\lim\\limits_{x\\to0}\\dfrac{e^x-1}{x}', '$1$', ['$0$', '$e$', '$+\\infty$']],
    ['\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2+1}{x^2-3}', '$2$', ['$1$', '$+\\infty$', '$-\\dfrac13$']],
    ['\\lim\\limits_{x\\to0^+}x\\ln x', '$0$', ['$-\\infty$', '$1$', '$+\\infty$']],
  ] as const);
  return { prompt: `$${t[0]}=\\,?$`, good: t[1], bad: [...t[2]], explain: `$${t[0]}=$ ${t[1]}` };
};

const logExp: Gen = (r) => {
  const a = int(r, 2, 5), b = int(r, 2, 5);
  const t = pick(r, [
    [`\\ln${a}+\\ln${b}`, `$\\ln${a * b}$`, [`$\\ln${a + b}$`, `$\\ln${a}\\times\\ln${b}$`, `$\\ln${a * b * 2}$`]],
    [`e^{\\ln${a * b}}`, `$${a * b}$`, [`$${a + b}$`, `$e^{${a * b}}$`, `$\\ln${a * b}$`]],
    [`\\ln(e^{${a}})`, `$${a}$`, [`$e^{${a}}$`, `$1$`, `$${a}e$`]],
    [`e^{${a}}\\times e^{${b}}`, `$e^{${a + b}}$`, [`$e^{${a * b}}$`, `$e^{${a}}+e^{${b}}$`, `$${a + b}e$`]],
  ] as const);
  return { prompt: `$${t[0]}=\\,?$`, good: t[1], bad: [...t[2]], explain: `$${t[0]}=$ ${t[1]}` };
};

const complex: Gen = (r) => {
  const a = nz(r, -5, 5), b = nz(r, -5, 5), c = nz(r, -5, 5), e = nz(r, -5, 5);
  const z = (re: number, im: number) => `$${re}${im < 0 ? '-' : '+'}${Math.abs(im) === 1 ? '' : Math.abs(im)}i$`;
  return {
    prompt: `$(${z(a, b).slice(1, -1)})(${z(c, e).slice(1, -1)})=\\,?$`,
    good: z(a * c - b * e, a * e + b * c),
    bad: [z(a * c + b * e, a * e + b * c), z(a * c, b * e), z(a * c - b * e, a * e - b * c)].map((s) => (s === z(a * c - b * e, a * e + b * c) ? z(a * c - b * e + 1, a * e + b * c) : s)),
    explain: '$i^2=-1$',
  };
};

const sequences: Gen = (r) => {
  const u0 = int(r, -5, 8), q = nz(r, -4, 6), k = int(r, 3, 6), arith = r() < 0.5;
  if (arith) return { prompt: `Suite arithmétique / متتالية حسابية : $u_0=${u0}$, $r=${q}$. $u_{${k}}=\\,?$`, good: n(u0 + k * q), bad: [n(u0 + (k - 1) * q), n(u0 * q ** k), n(u0 + k + q)], explain: `$u_n=u_0+nr$` };
  const g = pick(r, [2, 3, -2]), v0 = nz(r, 1, 4), m = int(r, 2, 4);
  return { prompt: `Suite géométrique / متتالية هندسية : $v_0=${v0}$, $q=${g}$. $v_{${m}}=\\,?$`, good: n(v0 * g ** m), bad: [n(v0 + m * g), n(v0 * g ** (m - 1)), n(g ** m)], explain: '$v_n=v_0q^n$' };
};

const probability: Gen = (r) => {
  const nb = int(r, 4, 8), k = int(r, 2, 3);
  const C = (a: number, b: number) => { let x = 1; for (let i = 0; i < b; i++) x = (x * (a - i)) / (i + 1); return x; };
  return { prompt: `$C_{${nb}}^{${k}}=\\binom{${nb}}{${k}}=\\,?$`, good: n(C(nb, k)), bad: [n(C(nb, k) * k), n(nb * k), n(C(nb, k) + nb)], explain: `$\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$` };
};

/* ---------------- Thèmes par niveau ---------------- */

const THEMES: Record<LevelId, Gen[]> = {
  '1ac': [mental, decimals, priorities, fractions, relatives, powers],
  '2ac': [mental, fractions, relatives, powers, linearEq, priorities],
  '3ac': [sqrt, powers, expand, linearEq, pythagoras, slope, fractions],
  tc: [sqrt, expand, quadratic, slope, trigo, linearEq],
  '1bac': [quadratic, trigo, derivative, limits, sequences, expand],
  '2bac': [limits, derivative, logExp, complex, sequences, probability],
};

/** Générateur pseudo-aléatoire déterministe (pour les tests). */
export function seeded(seed: number): Rng {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

export function makeQuestion(level: LevelId, difficulty: number, r: Rng = Math.random): GameQuestion {
  const d = Math.min(3, Math.max(1, difficulty));
  for (let attempt = 0; attempt < 20; attempt++) {
    const q = pick(r, THEMES[level])(r, d);
    const bad = [...new Set(q.bad)].filter((b) => b !== q.good);
    if (bad.length < 3) continue;
    const choices = [q.good, ...bad.slice(0, 3)];
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    return { prompt: q.prompt, choices, answer: choices.indexOf(q.good), explain: q.explain };
  }
  // Repli : question de calcul mental toujours valide.
  const a = int(r, 2, 9), b = int(r, 2, 9);
  return { prompt: `$${a}\\times${b}=\\,?$`, choices: [`$${a * b}$`, `$${a * b + 1}$`, `$${a + b}$`, `$${a * b - b}$`], answer: 0, explain: `$${a}\\times${b}=${a * b}$` };
}

export const GAME_LEVELS: LevelId[] = ['1ac', '2ac', '3ac', 'tc', '1bac', '2bac'];
