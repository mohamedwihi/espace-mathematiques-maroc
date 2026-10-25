import { math, parseExpression, step, toTex, toUserString, formatNumber, type Step } from './engine';
import { MathError, R, Rational, gcd } from './rational';
import {
  degree,
  horner,
  linearFactorTex,
  polyFromNode,
  polyToTex,
  rationalRootCandidates,
  toIntegerPoly,
  trim,
  type Poly,
} from './polynomial';

/** √n = k√m avec m sans facteur carré. */
export function simplifySqrt(n: number): { k: number; m: number } {
  if (!Number.isSafeInteger(n) || n < 0) throw new MathError('عدد غير صالح.', 'Nombre invalide.');
  let k = 1;
  let m = n;
  for (let d = 2; d * d <= m; d++) {
    while (m % (d * d) === 0) {
      m /= d * d;
      k *= d;
    }
  }
  return { k, m };
}

/** (p ± k·√m) / q simplifié, en LaTeX (avec i devant la racine si `imaginary`). */
export function surdTex(p: number, k: number, m: number, q: number, sign: 1 | -1, imaginary = false): string {
  const g = gcd(gcd(p, k), q) || 1;
  let [pp, kk, qq] = [p / g, k / g, q / g];
  if (qq < 0) [pp, kk, qq] = [-pp, -kk, -qq];
  const radical = m === 1 ? '' : `\\sqrt{${m}}`;
  const unit = imaginary ? 'i' : '';
  const kAbs = Math.abs(kk);
  const coeff = kAbs === 1 && (radical || unit) ? '' : `${kAbs}`;
  const surdPart = `${coeff}${unit}${radical}`;
  const s = sign * Math.sign(kk) < 0 ? '-' : '+';
  const numerator = pp === 0 ? `${s === '-' ? '-' : ''}${surdPart}` : `${pp}${s}${surdPart}`;
  return qq === 1 ? numerator : `\\dfrac{${numerator}}{${qq}}`;
}

/* ====================== Équations ====================== */

export type EquationResult =
  | { kind: 'all'; steps: Step[] }
  | { kind: 'none'; steps: Step[] }
  | { kind: 'roots'; roots: { tex: string; value: number }[]; complex?: string[]; steps: Step[]; degree: number };

export function solveEquation(input: string): EquationResult {
  const parts = input.split('=');
  if (parts.length > 2) throw new MathError('يجب أن تحتوي المعادلة على علامة = واحدة.', "L'équation doit contenir un seul signe =.");
  const [lhs, rhs = '0'] = parts;
  if (!lhs.trim() || !rhs.trim()) throw new MathError('أكمل طرفي المعادلة.', "Complétez les deux membres de l'équation.");

  const left = polyFromNode(parseExpression(lhs, ['x']));
  const right = polyFromNode(parseExpression(rhs, ['x']));
  const n = Math.max(left.length, right.length);
  const p = trim(Array.from({ length: n }, (_, i) => (left[i] ?? R(0)).sub(right[i] ?? R(0))));
  const deg = degree(p);
  const steps: Step[] = [];

  steps.push(step('ننقل جميع الحدود إلى الطرف الأول ونبسط:', 'On ramène tout au premier membre et on réduit :', `${polyToTex(p)}=0`));

  if (deg === 0) {
    if (p[0].isZero()) {
      steps.push(step('المساواة $0=0$ صحيحة دائماً: كل عدد حقيقي حل.', "L'égalité $0=0$ est toujours vraie : tout réel est solution.", 'S=\\mathbb{R}'));
      return { kind: 'all', steps };
    }
    steps.push(step('نحصل على مساواة خاطئة: المعادلة ليس لها حل.', "On obtient une égalité fausse : l'équation n'a pas de solution.", 'S=\\varnothing'));
    return { kind: 'none', steps };
  }

  if (deg === 1) {
    const [b, a] = p;
    const x = b.neg().div(a);
    steps.push(step('معادلة من الدرجة الأولى من الشكل $ax+b=0$:', 'Équation du premier degré de la forme $ax+b=0$ :', `a=${a.toTex()},\\quad b=${b.toTex()}`));
    steps.push(step('نعزل $x$:', 'On isole $x$ :', `${a.equals(R(1)) ? '' : a.equals(R(-1)) ? '-' : a.toTex()}x=${b.neg().toTex()}`));
    steps.push(step('نقسم على $a\\neq0$:', 'On divise par $a\\neq0$ :', `x=${x.toTex()}`));
    steps.push(step('مجموعة الحلول:', 'Ensemble des solutions :', `S=\\left\\{${x.toTex()}\\right\\}`));
    return { kind: 'roots', roots: [{ tex: x.toTex(), value: x.valueOf() }], steps, degree: 1 };
  }

  if (deg === 2) {
    const [c, b, a] = p;
    steps.push(step('معادلة من الدرجة الثانية من الشكل $ax^2+bx+c=0$:', 'Équation du second degré de la forme $ax^2+bx+c=0$ :', `a=${a.toTex()},\\quad b=${b.toTex()},\\quad c=${c.toTex()}`));
    const delta = b.mul(b).sub(R(4).mul(a).mul(c));
    steps.push(step('نحسب المميز:', 'On calcule le discriminant :', `\\Delta=b^2-4ac=\\left(${b.toTex()}\\right)^2-4\\times\\left(${a.toTex()}\\right)\\times\\left(${c.toTex()}\\right)=${delta.toTex()}`));

    if (delta.isZero()) {
      const x0 = b.neg().div(R(2).mul(a));
      steps.push(step('$\\Delta=0$: للمعادلة حل وحيد (مزدوج).', '$\\Delta=0$ : l’équation admet une solution double.', `x_0=-\\frac{b}{2a}=${x0.toTex()}`));
      steps.push(step('مجموعة الحلول:', 'Ensemble des solutions :', `S=\\left\\{${x0.toTex()}\\right\\}`));
      return { kind: 'roots', roots: [{ tex: x0.toTex(), value: x0.valueOf() }], steps, degree: 2 };
    }

    // Écriture exacte via les coefficients entiers proportionnels A, B, C
    const [C, B, A] = toIntegerPoly(p).ints;
    const D = B * B - 4 * A * C;
    const { k, m } = simplifySqrt(Math.abs(D));

    if (delta.sign() < 0) {
      steps.push(step('$\\Delta<0$: ليس للمعادلة حل في $\\mathbb{R}$.', '$\\Delta<0$ : l’équation n’a pas de solution dans $\\mathbb{R}$.', 'S=\\varnothing'));
      const z1 = surdTex(-B, k, m, 2 * A, -1, true);
      const z2 = surdTex(-B, k, m, 2 * A, 1, true);
      steps.push(step('(للشعب التي تدرس الأعداد العقدية) الحلان في $\\mathbb{C}$:', '(Pour les filières qui étudient les complexes) solutions dans $\\mathbb{C}$ :', `z_1=${z1},\\quad z_2=${z2}`));
      return { kind: 'roots', roots: [], complex: [z1, z2], steps, degree: 2 };
    }

    const sq = Math.sqrt(D);
    const v1 = (-B - sq) / (2 * A);
    const v2 = (-B + sq) / (2 * A);
    const t1 = m === 1 ? R(-B - k, 2 * A).toTex() : surdTex(-B, k, m, 2 * A, -1);
    const t2 = m === 1 ? R(-B + k, 2 * A).toTex() : surdTex(-B, k, m, 2 * A, 1);
    const [lo, hi] = v1 <= v2 ? [{ tex: t1, value: v1 }, { tex: t2, value: v2 }] : [{ tex: t2, value: v2 }, { tex: t1, value: v1 }];
    const sqrtDelta = m === 1 && delta.isInteger() ? `${Math.sqrt(delta.valueOf())}` : `\\sqrt{${delta.toTex()}}`;
    steps.push(step('$\\Delta>0$: للمعادلة حلان مختلفان.', '$\\Delta>0$ : l’équation admet deux solutions distinctes.', `\\sqrt{\\Delta}=${sqrtDelta}`));
    steps.push(step('نطبق الصيغتين:', 'On applique les formules :', `x_1=\\frac{-b-\\sqrt\\Delta}{2a}=${lo.tex}\\qquad x_2=\\frac{-b+\\sqrt\\Delta}{2a}=${hi.tex}`));
    if (m !== 1) {
      steps.push(step('قيم مقربة:', 'Valeurs approchées :', `x_1\\approx${formatNumber(lo.value, 6)}\\qquad x_2\\approx${formatNumber(hi.value, 6)}`));
    }
    steps.push(step('مجموعة الحلول:', 'Ensemble des solutions :', `S=\\left\\{${lo.tex};\\,${hi.tex}\\right\\}`));
    return { kind: 'roots', roots: [lo, hi], steps, degree: 2 };
  }

  throw new MathError(
    `المعادلة من الدرجة ${deg}. هذه الأداة تحل الدرجة الأولى والثانية فقط؛ جرّب أداة تحليل الحدوديات.`,
    `Équation de degré ${deg}. Cet outil résout seulement les degrés 1 et 2 ; essayez l'outil de factorisation.`,
  );
}

/* ====================== Factorisation ====================== */

export interface FactorResult {
  factoredTex: string;
  roots: { tex: string; multiplicity: number; value: number }[];
  /** false si un facteur de degré ≥ 3 sans racine rationnelle subsiste */
  complete: boolean;
  steps: Step[];
}

/** Facteur (x − r) pour une racine écrite en LaTeX : x − (−√2) devient x + √2. */
function factorFromRootTex(tex: string) {
  if (tex.startsWith('-') && !/[+-]/.test(tex.slice(1))) return `\\left(x+${tex.slice(1)}\\right)`;
  return /[+-]/.test(tex) ? `\\left(x-\\left(${tex}\\right)\\right)` : `\\left(x-${tex}\\right)`;
}

function monicTex(p: Poly): string {
  const lead = p[p.length - 1];
  return polyToTex(p.map((c) => c.div(lead)));
}

export function factorPolynomial(input: string): FactorResult {
  let p = polyFromNode(parseExpression(input, ['x']));
  const deg = degree(p);
  if (deg < 1) throw new MathError('أدخل حدودية من الدرجة 1 على الأقل.', 'Saisissez un polynôme de degré au moins 1.');

  const steps: Step[] = [step('الشكل المنشور والمرتب:', 'Forme développée et ordonnée :', `P(x)=${polyToTex(p)}`)];
  const lead = p[deg];
  const rational: { r: Rational; multiplicity: number }[] = [];
  const irrational: { tex: string; multiplicity: number; value: number }[] = [];

  const addRoot = (r: Rational) => {
    const existing = rational.find((x) => x.r.equals(r));
    if (existing) existing.multiplicity++;
    else rational.push({ r, multiplicity: 1 });
  };

  // 1) Racines rationnelles (théorème des racines rationnelles + Horner)
  if (degree(p) >= 2) {
    steps.push(
      step(
        'نبحث عن الجذور الجذرية $\\frac pq$ حيث $p$ يقسم الحد الثابت و $q$ يقسم المعامل الرئيسي.',
        'On cherche les racines rationnelles $\\frac pq$ où $p$ divise le terme constant et $q$ le coefficient dominant.',
      ),
    );
  }
  let found = true;
  while (found && degree(p) >= 1) {
    found = false;
    const candidates = p[0].isZero() ? [R(0)] : rationalRootCandidates(toIntegerPoly(p).ints);
    for (const r of candidates) {
      const { quotient, remainder } = horner(p, r);
      if (!remainder.isZero()) continue;
      steps.push(
        step(
          `$P(${r.toTex()})=0$، إذن $${r.toTex()}$ جذر. القسمة على $${linearFactorTex(r)}$ (طريقة هورنر):`,
          `$P(${r.toTex()})=0$, donc $${r.toTex()}$ est racine. Division par $${linearFactorTex(r)}$ (méthode de Horner) :`,
          `${polyToTex(p)}=${linearFactorTex(r)}\\left(${polyToTex(quotient)}\\right)`,
        ),
      );
      addRoot(r);
      p = quotient;
      found = true;
      break;
    }
  }

  // 2) Facteur restant
  let restTex = '';
  let complete = true;
  if (degree(p) === 2) {
    const [c, b, a] = p;
    const delta = b.mul(b).sub(R(4).mul(a).mul(c));
    if (delta.sign() < 0) {
      steps.push(
        step(
          `العامل $${polyToTex(p)}$ مميزه سالب ($\\Delta=${delta.toTex()}$): لا يقبل التحليل في $\\mathbb{R}$.`,
          `Le facteur $${polyToTex(p)}$ a un discriminant négatif ($\\Delta=${delta.toTex()}$) : il ne se factorise pas dans $\\mathbb{R}$.`,
        ),
      );
      restTex = `\\left(${monicTex(p)}\\right)`;
    } else {
      const [C, B, A] = toIntegerPoly(p).ints;
      const D = B * B - 4 * A * C;
      const { k, m } = simplifySqrt(D);
      const t1 = surdTex(-B, k, m, 2 * A, -1);
      const t2 = surdTex(-B, k, m, 2 * A, 1);
      const v1 = (-B - Math.sqrt(D)) / (2 * A);
      const v2 = (-B + Math.sqrt(D)) / (2 * A);
      steps.push(
        step(
          `العامل $${polyToTex(p)}$: $\\Delta=${delta.toTex()}>0$ وجذراه غير جذريين.`,
          `Le facteur $${polyToTex(p)}$ : $\\Delta=${delta.toTex()}>0$, racines irrationnelles.`,
          `x=${t1}\\quad\\text{ou}\\quad x=${t2}`,
        ),
      );
      restTex = `${factorFromRootTex(t1)}${factorFromRootTex(t2)}`;
      irrational.push({ tex: t1, multiplicity: 1, value: v1 }, { tex: t2, multiplicity: 1, value: v2 });
    }
  } else if (degree(p) >= 3) {
    complete = false;
    restTex = `\\left(${monicTex(p)}\\right)`;
    steps.push(
      step(
        'لا يوجد جذر جذري آخر: لا تستطيع هذه الأداة متابعة التحليل (قد توجد جذور غير جذرية).',
        "Aucune autre racine rationnelle : l'outil ne peut pas aller plus loin (il peut exister des racines irrationnelles).",
        monicTex(p),
      ),
    );
  }

  const factors = rational
    .sort((a, b) => a.r.valueOf() - b.r.valueOf())
    .map(({ r, multiplicity }) => (multiplicity > 1 ? `${linearFactorTex(r)}^{${multiplicity}}` : linearFactorTex(r)))
    .join('');
  const leadTex = lead.equals(R(1)) ? '' : lead.equals(R(-1)) ? '-' : lead.toTex();
  const factoredTex = `P(x)=${leadTex}${factors}${restTex}`;
  steps.push(step('الشكل المحلل:', 'Forme factorisée :', factoredTex));

  const roots = [
    ...rational.map(({ r, multiplicity }) => ({ tex: r.toTex(), multiplicity, value: r.valueOf() })),
    ...irrational,
  ].sort((a, b) => a.value - b.value);

  return { factoredTex, roots, complete, steps };
}

/* ====================== Simplification ====================== */

export interface SimplifyResult {
  inputTex: string;
  simplifiedTex: string;
  simplifiedText: string;
  expandedTex?: string;
}

export function simplifyExpression(input: string): SimplifyResult {
  const node = parseExpression(input, ['x', 'y', 'a', 'b']);
  const inputTex = toTex(node);

  // Polynôme en x : la forme développée réduite exacte est la forme simplifiée attendue en classe.
  try {
    const p = polyFromNode(node, 'x');
    const tex = polyToTex(p);
    return { inputTex, simplifiedTex: tex, simplifiedText: tex };
  } catch {
    /* pas un polynôme en x seul : simplification générale */
  }

  let simplified;
  try {
    simplified = math.simplify(node);
  } catch {
    throw new MathError('تعذر تبسيط هذا التعبير.', 'Impossible de simplifier cette expression.');
  }
  let expandedTex: string | undefined;
  try {
    expandedTex = toTex(math.rationalize(node) as never);
  } catch {
    expandedTex = undefined;
  }
  const simplifiedTex = toTex(simplified);
  return {
    inputTex,
    simplifiedTex,
    simplifiedText: toUserString(simplified),
    expandedTex: expandedTex !== simplifiedTex ? expandedTex : undefined,
  };
}
