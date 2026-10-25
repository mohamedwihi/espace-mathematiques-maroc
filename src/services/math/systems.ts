import { evaluateInput, step, type Step } from './engine';
import { MathError, R, Rational } from './rational';

export type SystemResult =
  | { kind: 'unique'; solution: Rational[]; steps: Step[] }
  | { kind: 'none'; steps: Step[] }
  | { kind: 'infinite'; steps: Step[] };

const VARS = ['x', 'y', 'z'];

/** Lit un coefficient saisi (entier, décimal ou fraction). */
export function parseCoefficient(raw: string): Rational {
  const s = raw.trim().replace(',', '.');
  if (s === '' || s === '+') return R(s === '' ? 0 : 1);
  if (s === '-') return R(-1);
  const frac = s.match(/^([+-]?\d+(?:\.\d+)?)\s*\/\s*([+-]?\d+(?:\.\d+)?)$/);
  if (frac) return Rational.fromNumber(Number(frac[1])).div(Rational.fromNumber(Number(frac[2])));
  if (/^[+-]?\d+(?:\.\d+)?$/.test(s)) return Rational.fromNumber(Number(s));
  const v = evaluateInput(s);
  return Rational.fromNumber(v);
}

function termTex(c: Rational, v: string, first: boolean): string {
  if (c.isZero()) return '';
  const neg = c.sign() < 0;
  const abs = neg ? c.neg() : c;
  const coef = abs.equals(R(1)) ? '' : abs.den === 1 ? `${abs.num}` : `\\frac{${abs.num}}{${abs.den}}`;
  return `${first ? (neg ? '-' : '') : neg ? ' - ' : ' + '}${coef}${v}`;
}

export function equationTex(row: Rational[], rhs: Rational, n: number): string {
  let s = '';
  for (let j = 0; j < n; j++) s += termTex(row[j], VARS[j], s === '');
  return `${s || '0'}=${rhs.toTex()}`;
}

export function systemTex(A: Rational[][], b: Rational[]): string {
  const n = A[0].length;
  return `\\begin{cases}${A.map((row, i) => equationTex(row, b[i], n)).join('\\\\')}\\end{cases}`;
}

function det2(a: Rational, b: Rational, c: Rational, d: Rational) {
  return a.mul(d).sub(b.mul(c));
}

/** Résolution d'un système n×n (n = 2 ou 3). Pour 2×2 : déterminants (Cramer) ; sinon pivot de Gauss. */
export function solveSystem(A: Rational[][], b: Rational[]): SystemResult {
  const n = A.length;
  if (n < 2 || n > 3 || A.some((r) => r.length !== n) || b.length !== n) {
    throw new MathError('حجم النظمة غير مدعوم.', 'Taille de système non prise en charge.');
  }
  const steps: Step[] = [step('النظمة المقترحة:', 'Système proposé :', systemTex(A, b))];

  if (n === 2) {
    const [[a, bb], [c, d]] = A;
    const [e, f] = b;
    const D = det2(a, bb, c, d);
    steps.push(step('نحسب محددة النظمة:', 'On calcule le déterminant du système :', `\\Delta=\\begin{vmatrix}${a.toTex()} & ${bb.toTex()}\\\\ ${c.toTex()} & ${d.toTex()}\\end{vmatrix}=${a.toTex()}\\times${paren(d)}-${paren(bb)}\\times${paren(c)}=${D.toTex()}`));
    const Dx = det2(e, bb, f, d);
    const Dy = det2(a, e, c, f);
    if (!D.isZero()) {
      const x = Dx.div(D);
      const y = Dy.div(D);
      steps.push(step('$\\Delta\\neq0$: للنظمة حل وحيد. نحسب $\\Delta_x$ و $\\Delta_y$:', '$\\Delta\\neq0$ : le système admet une solution unique. On calcule $\\Delta_x$ et $\\Delta_y$ :', `\\Delta_x=\\begin{vmatrix}${e.toTex()} & ${bb.toTex()}\\\\ ${f.toTex()} & ${d.toTex()}\\end{vmatrix}=${Dx.toTex()}\\qquad \\Delta_y=\\begin{vmatrix}${a.toTex()} & ${e.toTex()}\\\\ ${c.toTex()} & ${f.toTex()}\\end{vmatrix}=${Dy.toTex()}`));
      steps.push(step('إذن:', 'Donc :', `x=\\frac{\\Delta_x}{\\Delta}=${x.toTex()}\\qquad y=\\frac{\\Delta_y}{\\Delta}=${y.toTex()}`));
      steps.push(step('مجموعة الحلول:', 'Ensemble des solutions :', `S=\\left\\{\\left(${x.toTex()};\\,${y.toTex()}\\right)\\right\\}`));
      return { kind: 'unique', solution: [x, y], steps };
    }
    if (Dx.isZero() && Dy.isZero()) {
      steps.push(step('$\\Delta=\\Delta_x=\\Delta_y=0$: المعادلتان متكافئتان (أو إحداهما منعدمة)؛ للنظمة ما لا نهاية من الحلول أو لا حل لها حسب المعاملات.', '$\\Delta=\\Delta_x=\\Delta_y=0$ : les équations sont proportionnelles ; le système a une infinité de solutions (ou aucune selon les coefficients).'));
      // Vérification fine via Gauss
      return gauss(A, b, steps);
    }
    steps.push(step('$\\Delta=0$ و $\\Delta_x\\neq0$ أو $\\Delta_y\\neq0$: ليس للنظمة حل (مستقيمان متوازيان قطعاً).', '$\\Delta=0$ et $\\Delta_x\\neq0$ ou $\\Delta_y\\neq0$ : le système n’a pas de solution (droites strictement parallèles).', 'S=\\varnothing'));
    return { kind: 'none', steps };
  }
  return gauss(A, b, steps);
}

function paren(r: Rational) {
  return r.sign() < 0 ? `(${r.toTex()})` : r.toTex();
}

function gauss(A0: Rational[][], b0: Rational[], steps: Step[]): SystemResult {
  const n = A0.length;
  const M = A0.map((row, i) => [...row, b0[i]]);
  const label = (i: number) => `L_{${i + 1}}`;
  let rank = 0;
  const pivotCols: number[] = [];

  for (let col = 0; col < n && rank < n; col++) {
    let piv = -1;
    for (let r = rank; r < n; r++) if (!M[r][col].isZero()) { piv = r; break; }
    if (piv === -1) continue;
    if (piv !== rank) {
      [M[piv], M[rank]] = [M[rank], M[piv]];
      steps.push(step('نبادل سطرين للحصول على معامل غير منعدم:', 'On échange deux lignes pour obtenir un pivot non nul :', `${label(rank)}\\leftrightarrow ${label(piv)}`));
    }
    for (let r = 0; r < n; r++) {
      if (r === rank || M[r][col].isZero()) continue;
      const factor = M[r][col].div(M[rank][col]);
      M[r] = M[r].map((v, j) => v.sub(factor.mul(M[rank][j])));
      steps.push(
        step(
          `نحذف $${VARS[col]}$ من السطر ${r + 1}:`,
          `On élimine $${VARS[col]}$ de la ligne ${r + 1} :`,
          `${label(r)}\\leftarrow ${label(r)}-${paren(factor)}\\,${label(rank)}\\quad\\Rightarrow\\quad ${equationTex(M[r].slice(0, n), M[r][n], n)}`,
        ),
      );
    }
    pivotCols.push(col);
    rank++;
  }

  for (let r = rank; r < n; r++) {
    if (!M[r][n].isZero()) {
      steps.push(step('نحصل على مساواة مستحيلة ($0$ يساوي عدداً غير منعدم): ليس للنظمة حل.', 'On obtient une égalité impossible ($0$ égal à un nombre non nul) : le système n’a pas de solution.', 'S=\\varnothing'));
      return { kind: 'none', steps };
    }
  }
  if (rank < n) {
    steps.push(step('إحدى المعادلات أصبحت $0=0$: للنظمة ما لا نهاية من الحلول.', 'Une équation devient $0=0$ : le système admet une infinité de solutions.'));
    return { kind: 'infinite', steps };
  }
  const solution = pivotCols.map((col, i) => M[i][n].div(M[i][col]));
  const ordered: Rational[] = Array(n);
  pivotCols.forEach((col, i) => (ordered[col] = solution[i]));
  steps.push(step('نقسم كل سطر على معامله الرئيسي:', 'On divise chaque ligne par son pivot :', ordered.map((v, j) => `${VARS[j]}=${v.toTex()}`).join(',\\quad ')));
  steps.push(step('مجموعة الحلول:', 'Ensemble des solutions :', `S=\\left\\{\\left(${ordered.map((v) => v.toTex()).join(';\\,')}\\right)\\right\\}`));
  return { kind: 'unique', solution: ordered, steps };
}
