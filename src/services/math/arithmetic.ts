import { formatNumber, numberTex, step, type Step } from './engine';
import { MathError, R, Rational, gcd } from './rational';

/* ====================== Fractions ====================== */

export type FractionOp = '+' | '-' | '×' | '÷';

function parseInt32(raw: string, ar: string, fr: string): number {
  const s = raw.trim();
  if (!/^[+-]?\d{1,12}$/.test(s)) throw new MathError(`${ar}: أدخل عدداً صحيحاً.`, `${fr} : saisissez un entier.`);
  return Number(s);
}

/** Fraction telle que saisie (non simplifiée), pour détailler les étapes. */
export interface RawFraction {
  num: number;
  den: number;
}

export function readFraction(num: string, den: string, which: 1 | 2): RawFraction {
  const n = parseInt32(num, `بسط الكسر ${which}`, `Numérateur de la fraction ${which}`);
  const d = parseInt32(den, `مقام الكسر ${which}`, `Dénominateur de la fraction ${which}`);
  if (d === 0) throw new MathError(`مقام الكسر ${which} لا يمكن أن يكون صفراً.`, `Le dénominateur de la fraction ${which} ne peut pas être nul.`);
  return { num: n, den: d };
}

const ft = (n: number, d: number) => {
  const neg = (n < 0) !== (d < 0) && n !== 0;
  return `${neg ? '-' : ''}\\dfrac{${Math.abs(n)}}{${Math.abs(d)}}`;
};

export function fractionSteps(a: RawFraction, b: RawFraction, op: FractionOp): { result: Rational; steps: Step[] } {
  const steps: Step[] = [];
  const A = R(a.num, a.den);
  const B = R(b.num, b.den);
  const opTex = { '+': '+', '-': '-', '×': '\\times', '÷': '\\div' }[op];
  steps.push(step('العملية المطلوبة:', 'Opération demandée :', `${ft(a.num, a.den)}${opTex}${ft(b.num, b.den)}`));

  let rawNum: number;
  let rawDen: number;
  if (op === '+' || op === '-') {
    const common = Math.abs((a.den / gcd(a.den, b.den)) * b.den);
    const ka = common / a.den;
    const kb = common / b.den;
    const na = a.num * ka;
    const nb = b.num * kb;
    steps.push(
      step(
        `نوحّد المقامات: المقام المشترك هو $${common}$ (المضاعف المشترك الأصغر للمقامين).`,
        `On réduit au même dénominateur : le dénominateur commun est $${common}$ (PPCM des dénominateurs).`,
        `${ft(a.num, a.den)}=${ft(na, common)}\\qquad ${ft(b.num, b.den)}=${ft(nb, common)}`,
      ),
    );
    rawNum = op === '+' ? na + nb : na - nb;
    rawDen = common;
    steps.push(step(`${op === '+' ? 'نجمع' : 'نطرح'} البسطين ونحتفظ بالمقام المشترك:`, `On ${op === '+' ? 'additionne' : 'soustrait'} les numérateurs et on garde le dénominateur commun :`, `\\dfrac{${na}${op}${paren(nb)}}{${common}}=${ft(rawNum, rawDen)}`));
  } else if (op === '×') {
    rawNum = a.num * b.num;
    rawDen = a.den * b.den;
    steps.push(step('نضرب البسطين فيما بينهما والمقامين فيما بينهما:', 'On multiplie les numérateurs entre eux et les dénominateurs entre eux :', `\\dfrac{${a.num}\\times${paren(b.num)}}{${a.den}\\times${paren(b.den)}}=${ft(rawNum, rawDen)}`));
  } else {
    if (b.num === 0) throw new MathError('لا يمكن القسمة على كسر منعدم.', 'Division par une fraction nulle impossible.');
    steps.push(step('القسمة على كسر هي الضرب في مقلوبه:', 'Diviser par une fraction revient à multiplier par son inverse :', `${ft(a.num, a.den)}\\times${ft(b.den, b.num)}`));
    rawNum = a.num * b.den;
    rawDen = a.den * b.num;
    steps.push(step('نضرب البسطين والمقامين:', 'On multiplie numérateurs et dénominateurs :', ft(rawNum, rawDen)));
  }
  if (!Number.isSafeInteger(rawNum) || !Number.isSafeInteger(rawDen)) {
    throw new MathError('الأعداد كبيرة جداً.', 'Nombres trop grands.');
  }
  const result = op === '+' ? A.add(B) : op === '-' ? A.sub(B) : op === '×' ? A.mul(B) : A.div(B);
  const g = gcd(rawNum, rawDen);
  if (g > 1) {
    steps.push(step(`نختزل بالقسمة على $${g}$ (القاسم المشترك الأكبر للبسط والمقام):`, `On simplifie en divisant par $${g}$ (PGCD du numérateur et du dénominateur) :`, `${ft(rawNum, rawDen)}=${result.toTex()}`));
  } else {
    steps.push(step('الكسر غير قابل للاختزال.', 'La fraction est irréductible.', result.toTex()));
  }
  if (!result.isInteger() && Math.abs(result.num) > result.den) {
    const whole = Math.trunc(result.num / result.den);
    const rest = Math.abs(result.num % result.den);
    steps.push(step('الكتابة على شكل عدد كسري:', 'Écriture en nombre fractionnaire :', `${result.toTex()}=${whole}${whole < 0 ? '-' : '+'}\\dfrac{${rest}}{${result.den}}`));
  }
  steps.push(step('القيمة العشرية:', 'Valeur décimale :', `\\approx ${numberTex(result.valueOf(), 8)}`));
  return { result, steps };
}

function paren(n: number) {
  return n < 0 ? `(${n})` : `${n}`;
}

/* ====================== PGCD / PPCM ====================== */

export function parseIntegerList(raw: string): number[] {
  const parts = raw.split(/[\s,;،]+/).filter(Boolean);
  if (parts.length < 2) throw new MathError('أدخل عددين على الأقل.', 'Saisissez au moins deux nombres.');
  if (parts.length > 8) throw new MathError('ثمانية أعداد على الأكثر.', 'Huit nombres au maximum.');
  return parts.map((p) => {
    if (!/^\d{1,12}$/.test(p)) throw new MathError(`«${p}» ليس عدداً صحيحاً طبيعياً.`, `« ${p} » n'est pas un entier naturel.`);
    const n = Number(p);
    if (n === 0) throw new MathError('الأعداد يجب أن تكون غير منعدمة.', 'Les nombres doivent être non nuls.');
    return n;
  });
}

export function primeFactors(n: number): Map<number, number> {
  const out = new Map<number, number>();
  let m = n;
  for (let p = 2; p * p <= m; p += p === 2 ? 1 : 2) {
    while (m % p === 0) {
      out.set(p, (out.get(p) ?? 0) + 1);
      m /= p;
    }
  }
  if (m > 1) out.set(m, (out.get(m) ?? 0) + 1);
  return out;
}

export function factorsTex(f: Map<number, number>): string {
  if (f.size === 0) return '1';
  return [...f.entries()].map(([p, e]) => (e === 1 ? `${p}` : `${p}^{${e}}`)).join('\\times');
}

export function gcdLcm(nums: number[]): { pgcd: number; ppcm: number; steps: Step[] } {
  const steps: Step[] = [];
  // Euclide sur les deux premiers nombres (puis itératif)
  let g = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let [a, b] = [Math.max(g, nums[i]), Math.min(g, nums[i])];
    const lines: string[] = [];
    while (b !== 0) {
      const q = Math.floor(a / b);
      const r = a % b;
      lines.push(`${a}=${b}\\times${q}+${r}`);
      [a, b] = [b, r];
    }
    steps.push(
      step(
        `خوارزمية أقليدس لـ $${Math.max(g, nums[i])}$ و $${Math.min(g, nums[i])}$: آخر باقٍ غير منعدم هو القاسم المشترك الأكبر.`,
        `Algorithme d'Euclide pour $${Math.max(g, nums[i])}$ et $${Math.min(g, nums[i])}$ : le dernier reste non nul est le PGCD.`,
        `\\begin{aligned}${lines.join('\\\\')}\\end{aligned}`,
      ),
    );
    g = a;
  }

  const factorizations = nums.map((n) => primeFactors(n));
  steps.push(
    step(
      'التفكيك إلى جداء عوامل أولية:',
      'Décomposition en produit de facteurs premiers :',
      nums.map((n, i) => `${n}=${factorsTex(factorizations[i])}`).join('\\qquad '),
    ),
  );

  const lcmMap = new Map<number, number>();
  factorizations.forEach((f) => f.forEach((e, p) => lcmMap.set(p, Math.max(lcmMap.get(p) ?? 0, e))));
  const gcdMap = new Map<number, number>();
  [...factorizations[0].keys()].forEach((p) => {
    const e = Math.min(...factorizations.map((f) => f.get(p) ?? 0));
    if (e > 0) gcdMap.set(p, e);
  });
  let ppcm = 1;
  lcmMap.forEach((e, p) => (ppcm *= p ** e));
  if (!Number.isSafeInteger(ppcm)) throw new MathError('المضاعف المشترك الأصغر كبير جداً.', 'PPCM trop grand.');

  steps.push(step('القاسم المشترك الأكبر: جداء العوامل المشتركة بأصغر أس.', 'PGCD : produit des facteurs communs avec le plus petit exposant.', `\\text{PGCD}=${factorsTex(gcdMap)}=${g}`));
  steps.push(step('المضاعف المشترك الأصغر: جداء كل العوامل بأكبر أس.', 'PPCM : produit de tous les facteurs avec le plus grand exposant.', `\\text{PPCM}=${factorsTex(lcmMap)}=${ppcm}`));
  if (nums.length === 2) {
    steps.push(step('تحقق: $a\\times b=\\text{PGCD}\\times\\text{PPCM}$.', 'Vérification : $a\\times b=\\text{PGCD}\\times\\text{PPCM}$.', `${nums[0]}\\times${nums[1]}=${g}\\times${ppcm}=${nums[0] * nums[1]}`));
  }
  if (g === 1) steps.push(step('القاسم المشترك الأكبر يساوي 1: الأعداد أولية فيما بينها.', 'Le PGCD vaut 1 : les nombres sont premiers entre eux.'));
  return { pgcd: g, ppcm, steps };
}

/* ====================== Puissances, racines, logarithmes ====================== */

export type PowerMode = 'power' | 'root' | 'log' | 'ln' | 'exp';

export function nthRootSimplify(a: number, n: number): { k: number; m: number } {
  let k = 1;
  let m = a;
  for (let d = 2; d ** n <= m; d++) {
    while (m % d ** n === 0) {
      m /= d ** n;
      k *= d;
    }
  }
  return { k, m };
}

export function powersCompute(mode: PowerMode, x: number, y: number): { value: number; steps: Step[] } {
  const steps: Step[] = [];
  switch (mode) {
    case 'power': {
      if (x === 0 && y <= 0) throw new MathError('$0$ مرفوع لأس سالب أو منعدم غير معرف.', '$0$ à une puissance négative ou nulle n’est pas défini.');
      if (x < 0 && !Number.isInteger(y)) throw new MathError('قوة عدد سالب بأس غير صحيح غير معرفة في $\\mathbb{R}$.', "Puissance non entière d'un nombre négatif : non définie dans $\\mathbb{R}$.");
      const value = x ** y;
      const base = x < 0 ? `(${x})` : `${x}`;
      if (Number.isInteger(y) && Math.abs(y) >= 2 && Math.abs(y) <= 8) {
        const prod = Array(Math.abs(y)).fill(base).join('\\times');
        steps.push(step('تعريف القوة:', 'Définition de la puissance :', y > 0 ? `${base}^{${y}}=${prod}` : `${base}^{${y}}=\\dfrac{1}{${base}^{${-y}}}=\\dfrac{1}{${prod}}`));
      } else if (y === 0) {
        steps.push(step('لكل عدد غير منعدم $a$: $a^0=1$.', 'Pour tout nombre non nul $a$ : $a^0=1$.'));
      } else if (!Number.isInteger(y)) {
        steps.push(step('أس غير صحيح: $a^{y}=e^{y\\ln a}$ (مع $a>0$).', 'Exposant non entier : $a^{y}=e^{y\\ln a}$ (avec $a>0$).'));
      }
      if (x < 0 && Number.isInteger(y)) {
        steps.push(step(y % 2 === 0 ? 'الأس زوجي: النتيجة موجبة.' : 'الأس فردي: النتيجة سالبة.', y % 2 === 0 ? 'Exposant pair : résultat positif.' : 'Exposant impair : résultat négatif.'));
      }
      if (Number.isInteger(x) && Number.isInteger(y) && y < 0 && Number.isSafeInteger(x ** -y)) {
        steps.push(step('القيمة المضبوطة:', 'Valeur exacte :', `${base}^{${y}}=${R(1, x ** -y).toTex()}`));
      }
      steps.push(step('النتيجة:', 'Résultat :', `${base}^{${y}}=${numberTex(value)}`));
      return { value, steps };
    }
    case 'root': {
      const n = y;
      if (!Number.isInteger(n) || n < 2 || n > 20) throw new MathError('الرتبة يجب أن تكون عدداً صحيحاً بين 2 و 20.', "L'indice doit être un entier entre 2 et 20.");
      if (x < 0 && n % 2 === 0) throw new MathError('الجذر من رتبة زوجية لعدد سالب غير معرف في $\\mathbb{R}$.', 'Racine d’indice pair d’un nombre négatif : non définie dans $\\mathbb{R}$.');
      const value = Math.sign(x) * Math.abs(x) ** (1 / n);
      const rootTex = n === 2 ? `\\sqrt{${x}}` : `\\sqrt[${n}]{${x}}`;
      steps.push(step(`الجذر من الرتبة ${n} هو العدد الذي قوته ${n} تساوي $${x}$.`, `La racine ${n}-ième est le nombre dont la puissance ${n} vaut $${x}$.`, `\\left(${rootTex}\\right)^{${n}}=${x}`));
      if (Number.isSafeInteger(x) && Math.abs(x) <= 1e9) {
        const { k, m } = nthRootSimplify(Math.abs(x), n);
        const sign = x < 0 ? '-' : '';
        if (k > 1) {
          const rest = m === 1 ? '' : n === 2 ? `\\sqrt{${m}}` : `\\sqrt[${n}]{${m}}`;
          steps.push(step(`نستخرج القوى من الرتبة ${n}:`, `On extrait les puissances ${n}-ièmes :`, `${rootTex}=${n === 2 ? `\\sqrt{${k}^{2}\\times${m}}` : `\\sqrt[${n}]{${k}^{${n}}\\times${m}}`}=${sign}${k}${rest}`));
        } else if (m !== 1) {
          steps.push(step('لا يمكن تبسيط هذا الجذر أكثر.', 'Cette racine ne peut pas être simplifiée davantage.'));
        }
      }
      steps.push(step('النتيجة:', 'Résultat :', `${rootTex}\\approx${numberTex(value)}`));
      return { value, steps };
    }
    case 'log': {
      const b = y;
      if (x <= 0) throw new MathError('اللوغاريتم معرف فقط للأعداد الموجبة قطعاً.', 'Le logarithme n’est défini que pour les nombres strictement positifs.');
      if (b <= 0 || b === 1) throw new MathError('الأساس يجب أن يكون موجباً قطعاً ومخالفاً لـ 1.', 'La base doit être strictement positive et différente de 1.');
      const value = Math.log(x) / Math.log(b);
      steps.push(step('صيغة تغيير الأساس:', 'Formule de changement de base :', `\\log_{${b}}(${x})=\\dfrac{\\ln ${x}}{\\ln ${b}}`));
      const k = Math.round(value);
      if (Math.abs(value - k) < 1e-12 && Math.abs(b ** k - x) < 1e-9 * Math.max(1, x)) {
        steps.push(step(`لأن $${b}^{${k}}=${x}$:`, `Car $${b}^{${k}}=${x}$ :`, `\\log_{${b}}(${x})=${k}`));
      }
      steps.push(step('النتيجة:', 'Résultat :', `\\log_{${b}}(${x})\\approx${numberTex(value)}`));
      return { value, steps };
    }
    case 'ln': {
      if (x <= 0) throw new MathError('$\\ln x$ معرف فقط من أجل $x>0$.', '$\\ln x$ n’est défini que pour $x>0$.');
      const value = Math.log(x);
      if (x === 1) steps.push(step('$\\ln 1=0$.', '$\\ln 1=0$.'));
      steps.push(step('اللوغاريتم النيبيري (الأساس $e\\approx2{,}71828$):', 'Logarithme népérien (base $e\\approx2{,}71828$) :', `\\ln(${x})\\approx${numberTex(value)}`));
      return { value, steps };
    }
    case 'exp': {
      const value = Math.exp(x);
      if (!Number.isFinite(value)) throw new MathError('النتيجة كبيرة جداً.', 'Résultat trop grand.');
      steps.push(step('الدالة الأسية: $\\exp(x)=e^x$ و $\\ln(e^x)=x$.', 'Exponentielle : $\\exp(x)=e^x$ et $\\ln(e^x)=x$.', `e^{${x}}\\approx${numberTex(value)}`));
      return { value, steps };
    }
  }
}

/* ====================== Pourcentages et proportionnalité ====================== */

export type PercentMode = 'percentOf' | 'whatPercent' | 'increase' | 'decrease' | 'evolution' | 'fourth';

export function percentCompute(mode: PercentMode, a: number, b: number, c = 0): { value: number; unit: '' | '%'; steps: Step[] } {
  const f = (x: number) => numberTex(x, 10);
  const steps: Step[] = [];
  switch (mode) {
    case 'percentOf': {
      const v = (a * b) / 100;
      steps.push(step(`$${f(a)}\\%$ من $${f(b)}$:`, `$${f(a)}\\%$ de $${f(b)}$ :`, `\\dfrac{${f(a)}}{100}\\times${f(b)}=${f(v)}`));
      return { value: v, unit: '', steps };
    }
    case 'whatPercent': {
      if (b === 0) throw new MathError('القيمة المرجعية لا يمكن أن تكون صفراً.', 'La valeur de référence ne peut pas être nulle.');
      const v = (a / b) * 100;
      steps.push(step(`النسبة المئوية التي يمثلها $${f(a)}$ من $${f(b)}$:`, `Pourcentage que représente $${f(a)}$ par rapport à $${f(b)}$ :`, `\\dfrac{${f(a)}}{${f(b)}}\\times100=${f(v)}\\%`));
      return { value: v, unit: '%', steps };
    }
    case 'increase':
    case 'decrease': {
      const k = mode === 'increase' ? 1 + b / 100 : 1 - b / 100;
      const v = a * k;
      steps.push(step(mode === 'increase' ? `زيادة بـ $${f(b)}\\%$ تعني الضرب في $1+\\dfrac{${f(b)}}{100}$:` : `تخفيض بـ $${f(b)}\\%$ يعني الضرب في $1-\\dfrac{${f(b)}}{100}$:`, mode === 'increase' ? `Augmenter de $${f(b)}\\%$ revient à multiplier par $1+\\dfrac{${f(b)}}{100}$ :` : `Diminuer de $${f(b)}\\%$ revient à multiplier par $1-\\dfrac{${f(b)}}{100}$ :`, `\\text{CM}=${f(k)}`));
      steps.push(step('القيمة النهائية:', 'Valeur finale :', `${f(a)}\\times${f(k)}=${f(v)}`));
      return { value: v, unit: '', steps };
    }
    case 'evolution': {
      if (a === 0) throw new MathError('القيمة الأولية لا يمكن أن تكون صفراً.', 'La valeur initiale ne peut pas être nulle.');
      const v = ((b - a) / a) * 100;
      steps.push(step('نسبة التطور:', "Taux d'évolution :", `t=\\dfrac{V_f-V_i}{V_i}\\times100=\\dfrac{${f(b)}-${f(a)}}{${f(a)}}\\times100=${f(v)}\\%`));
      steps.push(step(v >= 0 ? 'النسبة موجبة: زيادة.' : 'النسبة سالبة: انخفاض.', v >= 0 ? 'Taux positif : hausse.' : 'Taux négatif : baisse.'));
      return { value: v, unit: '%', steps };
    }
    case 'fourth': {
      if (a === 0) throw new MathError('العدد $a$ لا يمكن أن يكون صفراً.', 'Le nombre $a$ ne peut pas être nul.');
      const v = (b * c) / a;
      steps.push(step('جدول التناسب $\\dfrac{a}{b}=\\dfrac{c}{x}$، نستعمل الجداء المتقاطع:', 'Tableau de proportionnalité $\\dfrac{a}{b}=\\dfrac{c}{x}$, on utilise le produit en croix :', `x=\\dfrac{b\\times c}{a}=\\dfrac{${f(b)}\\times${f(c)}}{${f(a)}}=${f(v)}`));
      return { value: v, unit: '', steps };
    }
  }
}

export { formatNumber };
