import { numberTex, step, type Step } from './engine';
import { MathError } from './rational';

export function parseNumberList(raw: string, label: { ar: string; fr: string }): number[] {
  // Séparateurs : espaces, virgules, points-virgules. Les décimaux s'écrivent avec un point (12.5).
  const parts = raw
    .split(/[\s;،,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.map((p) => {
    const v = Number(p);
    if (!Number.isFinite(v)) throw new MathError(`«${p}» في ${label.ar} ليس عدداً.`, `« ${p} » dans ${label.fr} n'est pas un nombre.`);
    return v;
  });
}

export interface StatsResult {
  rows: { value: number; freq: number; cumul: number }[];
  N: number;
  sum: number;
  mean: number;
  median: number;
  modes: number[];
  min: number;
  max: number;
  range: number;
  variance: number;
  std: number;
  q1: number;
  q3: number;
  steps: Step[];
}

/**
 * Statistiques d'une série discrète (valeurs + effectifs facultatifs).
 * Variance « population » : V = (1/N)·Σ nᵢ(xᵢ - x̄)², comme dans le programme du secondaire.
 * Quartiles : Q1 (resp. Q3) = plus petite valeur dont l'effectif cumulé atteint N/4 (resp. 3N/4).
 */
export function describe(valuesRaw: string, freqRaw: string): StatsResult {
  const values = parseNumberList(valuesRaw, { ar: 'القيم', fr: 'les valeurs' });
  if (values.length === 0) throw new MathError('أدخل قيمة واحدة على الأقل.', 'Saisissez au moins une valeur.');
  if (values.length > 500) throw new MathError('500 قيمة على الأكثر.', '500 valeurs au maximum.');
  let freqs: number[];
  if (freqRaw.trim()) {
    freqs = parseNumberList(freqRaw, { ar: 'الحصيصات', fr: 'les effectifs' });
    if (freqs.length !== values.length) {
      throw new MathError('عدد الحصيصات يجب أن يساوي عدد القيم.', "Le nombre d'effectifs doit être égal au nombre de valeurs.");
    }
    if (freqs.some((f) => !Number.isInteger(f) || f < 0)) {
      throw new MathError('الحصيصات أعداد صحيحة طبيعية.', 'Les effectifs sont des entiers naturels.');
    }
  } else {
    freqs = values.map(() => 1);
  }

  // Regroupement des valeurs identiques et tri
  const map = new Map<number, number>();
  values.forEach((v, i) => map.set(v, (map.get(v) ?? 0) + freqs[i]));
  const sorted = [...map.entries()].filter(([, f]) => f > 0).sort((a, b) => a[0] - b[0]);
  const N = sorted.reduce((s, [, f]) => s + f, 0);
  if (N === 0) throw new MathError('الحصيص الإجمالي منعدم.', "L'effectif total est nul.");

  let cumul = 0;
  const rows = sorted.map(([value, freq]) => {
    cumul += freq;
    return { value, freq, cumul };
  });

  const sum = rows.reduce((s, r) => s + r.value * r.freq, 0);
  const mean = sum / N;
  const variance = rows.reduce((s, r) => s + r.freq * (r.value - mean) ** 2, 0) / N;
  const std = Math.sqrt(variance);

  const valueAtRank = (k: number) => rows.find((r) => r.cumul >= k)!.value;
  const median = N % 2 === 1 ? valueAtRank((N + 1) / 2) : (valueAtRank(N / 2) + valueAtRank(N / 2 + 1)) / 2;
  const q1 = valueAtRank(Math.ceil(N / 4));
  const q3 = valueAtRank(Math.ceil((3 * N) / 4));
  const maxFreq = Math.max(...rows.map((r) => r.freq));
  const modes = rows.filter((r) => r.freq === maxFreq).map((r) => r.value);
  const min = rows[0].value;
  const max = rows[rows.length - 1].value;
  const f = (x: number) => numberTex(x, 8);

  const steps: Step[] = [
    step('الحصيص الإجمالي:', 'Effectif total :', `N=\\sum n_i=${N}`),
    step('المعدل الحسابي:', 'Moyenne arithmétique :', `\\bar x=\\dfrac{\\sum n_ix_i}{N}=\\dfrac{${f(sum)}}{${N}}=${f(mean)}`),
    step(
      N % 2 === 1 ? `$N$ فردي: الوسيط هو القيمة ذات الرتبة $\\frac{N+1}{2}=${(N + 1) / 2}$.` : `$N$ زوجي: الوسيط هو معدل القيمتين ذواتي الرتبتين $${N / 2}$ و $${N / 2 + 1}$.`,
      N % 2 === 1 ? `$N$ impair : la médiane est la valeur de rang $\\frac{N+1}{2}=${(N + 1) / 2}$.` : `$N$ pair : la médiane est la moyenne des valeurs de rangs $${N / 2}$ et $${N / 2 + 1}$.`,
      `Me=${f(median)}`,
    ),
    step('المغايرة والانحراف المعياري:', 'Variance et écart-type :', `V=\\dfrac{\\sum n_i(x_i-\\bar x)^2}{N}=${f(variance)}\\qquad \\sigma=\\sqrt V=${f(std)}`),
    step('الربيعان (أصغر قيمة يتجاوز حصيصها المتراكم $\\frac N4$ ثم $\\frac{3N}4$):', 'Quartiles (plus petite valeur dont l’effectif cumulé atteint $\\frac N4$ puis $\\frac{3N}4$) :', `Q_1=${f(q1)}\\qquad Q_3=${f(q3)}`),
  ];

  return { rows, N, sum, mean, median, modes, min, max, range: max - min, variance, std, q1, q3, steps };
}

/* ---------- Dénombrement (calcul exact avec BigInt) ---------- */

function checkNK(n: number, k: number) {
  if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0) {
    throw new MathError('n و k أعداد صحيحة طبيعية.', 'n et k sont des entiers naturels.');
  }
  if (k > n) throw new MathError('يجب أن يكون $k\\le n$.', 'Il faut $k\\le n$.');
  if (n > 1000) throw new MathError('n كبير جداً (1000 على الأكثر).', 'n trop grand (1000 maximum).');
}

export function factorialBig(n: number): bigint {
  let r = 1n;
  for (let i = 2n; i <= BigInt(n); i++) r *= i;
  return r;
}

export function arrangements(n: number, k: number): bigint {
  checkNK(n, k);
  let r = 1n;
  for (let i = 0; i < k; i++) r *= BigInt(n - i);
  return r;
}

export function combinations(n: number, k: number): bigint {
  checkNK(n, k);
  const kk = Math.min(k, n - k);
  let r = 1n;
  for (let i = 1; i <= kk; i++) r = (r * BigInt(n - kk + i)) / BigInt(i);
  return r;
}

export function counting(n: number, k: number): { factorial: bigint; arrangements: bigint; combinations: bigint; steps: Step[] } {
  checkNK(n, k);
  const fact = factorialBig(n);
  const A = arrangements(n, k);
  const Cnk = combinations(n, k);
  const short = (b: bigint) => {
    const s = b.toString();
    return s.length > 30 ? `${s.slice(0, 12)}\\ldots(${s.length}\\ \\text{chiffres})` : s;
  };
  return {
    factorial: fact,
    arrangements: A,
    combinations: Cnk,
    steps: [
      step('عاملي $n$ (عدد ترتيبات $n$ عنصراً):', 'Factorielle de $n$ (nombre de permutations de $n$ éléments) :', `${n}!=${short(fact)}`),
      step('عدد الترتيبات (بدون تكرار، مع مراعاة الترتيب):', "Nombre d'arrangements (sans répétition, ordre pris en compte) :", `A_{${n}}^{${k}}=\\dfrac{${n}!}{(${n}-${k})!}=${short(A)}`),
      step('عدد التأليفات (بدون مراعاة الترتيب):', 'Nombre de combinaisons (ordre non pris en compte) :', `C_{${n}}^{${k}}=\\dfrac{${n}!}{${k}!\\,(${n}-${k})!}=${short(Cnk)}`),
    ],
  };
}

export function binomial(n: number, k: number, p: number): { prob: number; mean: number; variance: number; steps: Step[] } {
  checkNK(n, k);
  if (!(p >= 0 && p <= 1)) throw new MathError('الاحتمال $p$ يجب أن يكون بين 0 و 1.', 'La probabilité $p$ doit être comprise entre 0 et 1.');
  if (n > 300) throw new MathError('n كبير جداً لهذا الحساب (300 على الأكثر).', 'n trop grand pour ce calcul (300 maximum).');
  const c = Number(combinations(n, k));
  const prob = c * p ** k * (1 - p) ** (n - k);
  const f = (x: number) => numberTex(x, 8);
  return {
    prob,
    mean: n * p,
    variance: n * p * (1 - p),
    steps: [
      step('قانون حداني بارامتراه $n$ و $p$:', 'Loi binomiale de paramètres $n$ et $p$ :', `P(X=k)=C_n^k\\,p^k(1-p)^{n-k}`),
      step('نعوض:', 'On remplace :', `P(X=${k})=C_{${n}}^{${k}}\\times${f(p)}^{${k}}\\times${f(1 - p)}^{${n - k}}=${f(c)}\\times${f(p ** k)}\\times${f((1 - p) ** (n - k))}\\approx${f(prob)}`),
      step('الأمل الرياضي والمغايرة:', 'Espérance et variance :', `E(X)=np=${f(n * p)}\\qquad V(X)=np(1-p)=${f(n * p * (1 - p))}`),
    ],
  };
}
