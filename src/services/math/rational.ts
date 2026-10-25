/**
 * Fractions exactes (numérateur/dénominateur entiers), utilisées pour les calculs
 * où l'élève attend un résultat exact : fractions, systèmes, coefficients de polynômes.
 */
export class MathError extends Error {
  constructor(
    public readonly ar: string,
    public readonly fr: string,
  ) {
    super(fr);
    this.name = 'MathError';
  }
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

export function lcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a / gcd(a, b)) * b);
}

function assertSafe(n: number) {
  if (!Number.isSafeInteger(n)) {
    throw new MathError('الأعداد كبيرة جداً لإجراء حساب مضبوط.', 'Nombres trop grands pour un calcul exact.');
  }
}

export class Rational {
  readonly num: number;
  readonly den: number;

  constructor(num: number, den = 1) {
    if (den === 0) throw new MathError('القسمة على صفر غير ممكنة.', 'Division par zéro impossible.');
    assertSafe(num);
    assertSafe(den);
    const g = gcd(num, den) || 1;
    const sign = den < 0 ? -1 : 1;
    this.num = (sign * num) / g || 0;
    this.den = (sign * den) / g;
  }

  /** Convertit un nombre décimal fini (ex. 0.75) en fraction exacte. */
  static fromNumber(x: number, maxDen = 1e9): Rational {
    if (!Number.isFinite(x)) throw new MathError('عدد غير صالح.', 'Nombre invalide.');
    if (Number.isInteger(x)) return new Rational(x, 1);
    const str = x.toString();
    if (!str.includes('e')) {
      const decimals = str.split('.')[1]?.length ?? 0;
      if (decimals <= 9) {
        const den = 10 ** decimals;
        return new Rational(Math.round(x * den), den);
      }
    }
    // Fractions continues pour les décimaux non finis (ex. 1/3 calculé en flottant)
    let [h0, h1, k0, k1] = [0, 1, 1, 0];
    let v = x;
    for (let i = 0; i < 40; i++) {
      const a = Math.floor(v);
      [h0, h1] = [h1, a * h1 + h0];
      [k0, k1] = [k1, a * k1 + k0];
      if (k1 > maxDen) {
        [h1, k1] = [h0, k0];
        break;
      }
      if (Math.abs(x - h1 / k1) < 1e-12) break;
      v = 1 / (v - a);
      if (!Number.isFinite(v)) break;
    }
    return new Rational(h1, k1);
  }

  add(o: Rational) {
    return new Rational(this.num * o.den + o.num * this.den, this.den * o.den);
  }
  sub(o: Rational) {
    return new Rational(this.num * o.den - o.num * this.den, this.den * o.den);
  }
  mul(o: Rational) {
    return new Rational(this.num * o.num, this.den * o.den);
  }
  div(o: Rational) {
    if (o.num === 0) throw new MathError('القسمة على صفر غير ممكنة.', 'Division par zéro impossible.');
    return new Rational(this.num * o.den, this.den * o.num);
  }
  neg() {
    return new Rational(-this.num, this.den);
  }
  isZero() {
    return this.num === 0;
  }
  isInteger() {
    return this.den === 1;
  }
  equals(o: Rational) {
    return this.num === o.num && this.den === o.den;
  }
  sign() {
    return Math.sign(this.num);
  }
  valueOf() {
    return this.num / this.den;
  }
  toString() {
    return this.den === 1 ? `${this.num}` : `${this.num}/${this.den}`;
  }
  toTex(): string {
    if (this.den === 1) return `${this.num}`;
    const sign = this.num < 0 ? '-' : '';
    return `${sign}\\dfrac{${Math.abs(this.num)}}{${this.den}}`;
  }
}

export const R = (n: number, d = 1) => new Rational(n, d);
