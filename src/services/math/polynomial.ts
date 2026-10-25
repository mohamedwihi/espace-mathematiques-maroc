import type { MathNode } from 'mathjs';
import { MathError, R, Rational, gcd, lcm } from './rational';

/** Polynôme à coefficients rationnels : coeffs[k] est le coefficient de x^k. */
export type Poly = Rational[];

const MAX_DEGREE = 12;

const notPolynomial = () =>
  new MathError(
    'التعبير ليس حدودية بمعاملات جذرية (لا تستعمل الدوال ولا القسمة على x).',
    "L'expression n'est pas un polynôme à coefficients rationnels (pas de fonctions ni de division par x).",
  );

export function trim(p: Poly): Poly {
  const out = [...p];
  while (out.length > 1 && out[out.length - 1].isZero()) out.pop();
  return out.length ? out : [R(0)];
}

export const degree = (p: Poly) => trim(p).length - 1;

export function add(p: Poly, q: Poly): Poly {
  const n = Math.max(p.length, q.length);
  return trim(Array.from({ length: n }, (_, i) => (p[i] ?? R(0)).add(q[i] ?? R(0))));
}

export function scale(p: Poly, k: Rational): Poly {
  return trim(p.map((c) => c.mul(k)));
}

export function mul(p: Poly, q: Poly): Poly {
  const out: Rational[] = Array.from({ length: p.length + q.length - 1 }, () => R(0));
  p.forEach((a, i) => q.forEach((b, j) => (out[i + j] = out[i + j].add(a.mul(b)))));
  if (out.length - 1 > MAX_DEGREE) {
    throw new MathError(`الدرجة أكبر من ${MAX_DEGREE}.`, `Degré supérieur à ${MAX_DEGREE}.`);
  }
  return trim(out);
}

/** Construit le polynôme à partir de l'arbre syntaxique (variable x par défaut). */
export function polyFromNode(node: MathNode, variable = 'x'): Poly {
  const n = node as unknown as {
    type: string;
    value?: number;
    name?: string;
    fn?: string;
    args?: MathNode[];
    content?: MathNode;
  };
  switch (n.type) {
    case 'ConstantNode':
      return [Rational.fromNumber(n.value as number)];
    case 'SymbolNode':
      if (n.name === variable) return [R(0), R(1)];
      throw notPolynomial();
    case 'ParenthesisNode':
      return polyFromNode(n.content as MathNode, variable);
    case 'OperatorNode': {
      const args = (n.args ?? []).map((a) => a);
      switch (n.fn) {
        case 'unaryPlus':
          return polyFromNode(args[0], variable);
        case 'unaryMinus':
          return scale(polyFromNode(args[0], variable), R(-1));
        case 'add':
          return add(polyFromNode(args[0], variable), polyFromNode(args[1], variable));
        case 'subtract':
          return add(polyFromNode(args[0], variable), scale(polyFromNode(args[1], variable), R(-1)));
        case 'multiply':
          return args.map((a) => polyFromNode(a, variable)).reduce((acc, p) => mul(acc, p));
        case 'divide': {
          const den = polyFromNode(args[1], variable);
          if (degree(den) !== 0) throw notPolynomial();
          if (den[0].isZero()) throw new MathError('القسمة على صفر غير ممكنة.', 'Division par zéro impossible.');
          return scale(polyFromNode(args[0], variable), R(1).div(den[0]));
        }
        case 'pow': {
          const exp = polyFromNode(args[1], variable);
          if (degree(exp) !== 0 || !exp[0].isInteger() || exp[0].num < 0 || exp[0].num > MAX_DEGREE) throw notPolynomial();
          const base = polyFromNode(args[0], variable);
          let out: Poly = [R(1)];
          for (let i = 0; i < exp[0].num; i++) out = mul(out, base);
          return out;
        }
        default:
          throw notPolynomial();
      }
    }
    default:
      throw notPolynomial();
  }
}

export function evalPoly(p: Poly, x: Rational): Rational {
  return [...p].reverse().reduce((acc, c) => acc.mul(x).add(c), R(0));
}

/** Division synthétique (Horner) par (x - r). Renvoie le quotient et le reste. */
export function horner(p: Poly, r: Rational): { quotient: Poly; remainder: Rational; row: Rational[] } {
  const desc = [...trim(p)].reverse();
  const row: Rational[] = [];
  let acc = R(0);
  for (const c of desc) {
    acc = acc.mul(r).add(c);
    row.push(acc);
  }
  const remainder = row.pop() as Rational;
  return { quotient: trim([...row].reverse()), remainder, row: [...row, remainder] };
}

/** Polynôme à coefficients entiers proportionnel à p (multiplié par le PPCM des dénominateurs, divisé par le PGCD). */
export function toIntegerPoly(p: Poly): { ints: number[]; factor: Rational } {
  const L = p.reduce((acc, c) => lcm(acc, c.den), 1);
  let ints = p.map((c) => (c.num * L) / c.den);
  const G = ints.reduce((acc, c) => gcd(acc, c), 0) || 1;
  ints = ints.map((c) => c / G);
  // p = (G / L) × ints
  return { ints, factor: R(G, L) };
}

function divisors(n: number): number[] {
  n = Math.abs(n);
  if (n > 1e9) throw new MathError('المعاملات كبيرة جداً لهذه الأداة.', 'Coefficients trop grands pour cet outil.');
  const out: number[] = [];
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      out.push(d);
      if (d * d !== n) out.push(n / d);
    }
  }
  return out.sort((a, b) => a - b);
}

/** Racines rationnelles candidates ±p/q (théorème des racines rationnelles). */
export function rationalRootCandidates(ints: number[]): Rational[] {
  const a0 = ints[0];
  const an = ints[ints.length - 1];
  if (a0 === 0) return [R(0)];
  const seen = new Set<string>();
  const out: Rational[] = [];
  for (const p of divisors(a0)) {
    for (const q of divisors(an)) {
      for (const s of [1, -1]) {
        const r = R(s * p, q);
        const key = r.toString();
        if (!seen.has(key)) {
          seen.add(key);
          out.push(r);
        }
      }
    }
  }
  return out.sort((a, b) => a.valueOf() - b.valueOf());
}

/* ---------- Écriture LaTeX ---------- */

function coefTex(c: Rational, isFirst: boolean, hasVar: boolean): string {
  const neg = c.sign() < 0;
  const abs = neg ? c.neg() : c;
  let body: string;
  if (hasVar && abs.equals(R(1))) body = '';
  else body = abs.den === 1 ? `${abs.num}` : `\\frac{${abs.num}}{${abs.den}}`;
  if (isFirst) return (neg ? '-' : '') + body;
  return (neg ? ' - ' : ' + ') + body;
}

export function polyToTex(p: Poly, variable = 'x'): string {
  const q = trim(p);
  let out = '';
  for (let k = q.length - 1; k >= 0; k--) {
    const c = q[k];
    if (c.isZero()) continue;
    const v = k === 0 ? '' : k === 1 ? variable : `${variable}^{${k}}`;
    out += coefTex(c, out === '', k > 0) + v;
  }
  return out || '0';
}

/** Facteur (x - r) en LaTeX, écrit proprement selon le signe de r. */
export function linearFactorTex(r: Rational, variable = 'x'): string {
  if (r.isZero()) return variable;
  const abs = r.sign() < 0 ? r.neg() : r;
  const v = abs.den === 1 ? `${abs.num}` : `\\frac{${abs.num}}{${abs.den}}`;
  return `\\left(${variable}${r.sign() < 0 ? '+' : '-'}${v}\\right)`;
}
