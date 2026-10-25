import type { Localized } from '@/types';
import { numberTex } from './engine';
import { MathError } from './rational';

export type Measure = 'area' | 'perimeter' | 'volume' | 'lateralArea' | 'totalArea';

export interface ShapeParam {
  id: string;
  label: Localized;
  symbol: string;
}

export interface ShapeResult {
  measure: Measure;
  formula: string;
  substituted: string;
  value: number;
  /** Dimension de l'unité : 1 (longueur), 2 (aire), 3 (volume) */
  power: 1 | 2 | 3;
}

export interface Shape {
  id: string;
  kind: 'plane' | 'solid';
  name: Localized;
  params: ShapeParam[];
  compute: (v: Record<string, number>) => ShapeResult[];
}

const p = (id: string, symbol: string, ar: string, fr: string): ShapeParam => ({ id, symbol, label: { ar, fr } });
const n = (x: number) => numberTex(x, 8);
const PI = '\\pi';

export const shapes: Shape[] = [
  {
    id: 'square',
    kind: 'plane',
    name: { ar: 'مربع', fr: 'Carré' },
    params: [p('a', 'a', 'طول الضلع', 'Côté')],
    compute: ({ a }) => [
      { measure: 'area', formula: 'S=a^2', substituted: `${n(a)}^2`, value: a * a, power: 2 },
      { measure: 'perimeter', formula: 'P=4a', substituted: `4\\times${n(a)}`, value: 4 * a, power: 1 },
    ],
  },
  {
    id: 'rectangle',
    kind: 'plane',
    name: { ar: 'مستطيل', fr: 'Rectangle' },
    params: [p('L', 'L', 'الطول', 'Longueur'), p('l', 'l', 'العرض', 'Largeur')],
    compute: ({ L, l }) => [
      { measure: 'area', formula: 'S=L\\times l', substituted: `${n(L)}\\times${n(l)}`, value: L * l, power: 2 },
      { measure: 'perimeter', formula: 'P=2(L+l)', substituted: `2\\times(${n(L)}+${n(l)})`, value: 2 * (L + l), power: 1 },
    ],
  },
  {
    id: 'triangle',
    kind: 'plane',
    name: { ar: 'مثلث (القاعدة والارتفاع)', fr: 'Triangle (base et hauteur)' },
    params: [p('b', 'b', 'القاعدة', 'Base'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ b, h }) => [
      { measure: 'area', formula: 'S=\\dfrac{b\\times h}{2}', substituted: `\\dfrac{${n(b)}\\times${n(h)}}{2}`, value: (b * h) / 2, power: 2 },
    ],
  },
  {
    id: 'triangle-sides',
    kind: 'plane',
    name: { ar: 'مثلث (الأضلاع الثلاثة)', fr: 'Triangle (trois côtés)' },
    params: [p('a', 'a', 'الضلع a', 'Côté a'), p('b', 'b', 'الضلع b', 'Côté b'), p('c', 'c', 'الضلع c', 'Côté c')],
    compute: ({ a, b, c }) => {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new MathError('هذه الأطوال لا تحقق المتفاوتة المثلثية: المثلث غير موجود.', "Ces longueurs ne vérifient pas l'inégalité triangulaire : le triangle n'existe pas.");
      }
      const s = (a + b + c) / 2;
      const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      return [
        { measure: 'perimeter', formula: 'P=a+b+c', substituted: `${n(a)}+${n(b)}+${n(c)}`, value: a + b + c, power: 1 },
        { measure: 'area', formula: 'S=\\sqrt{s(s-a)(s-b)(s-c)},\\ s=\\frac{a+b+c}{2}', substituted: `s=${n(s)},\\ S=\\sqrt{${n(s)}\\times${n(s - a)}\\times${n(s - b)}\\times${n(s - c)}}`, value: area, power: 2 },
      ];
    },
  },
  {
    id: 'circle',
    kind: 'plane',
    name: { ar: 'دائرة / قرص', fr: 'Cercle / disque' },
    params: [p('r', 'r', 'الشعاع', 'Rayon')],
    compute: ({ r }) => [
      { measure: 'area', formula: `S=${PI} r^2`, substituted: `${PI}\\times${n(r)}^2`, value: Math.PI * r * r, power: 2 },
      { measure: 'perimeter', formula: `P=2${PI} r`, substituted: `2\\times${PI}\\times${n(r)}`, value: 2 * Math.PI * r, power: 1 },
    ],
  },
  {
    id: 'parallelogram',
    kind: 'plane',
    name: { ar: 'متوازي الأضلاع', fr: 'Parallélogramme' },
    params: [p('b', 'b', 'القاعدة', 'Base'), p('h', 'h', 'الارتفاع', 'Hauteur'), p('c', 'c', 'الضلع الآخر', 'Autre côté')],
    compute: ({ b, h, c }) => {
      if (h > c) throw new MathError('الارتفاع لا يمكن أن يكون أكبر من الضلع الآخر.', "La hauteur ne peut pas dépasser l'autre côté.");
      return [
        { measure: 'area', formula: 'S=b\\times h', substituted: `${n(b)}\\times${n(h)}`, value: b * h, power: 2 },
        { measure: 'perimeter', formula: 'P=2(b+c)', substituted: `2\\times(${n(b)}+${n(c)})`, value: 2 * (b + c), power: 1 },
      ];
    },
  },
  {
    id: 'rhombus',
    kind: 'plane',
    name: { ar: 'معين', fr: 'Losange' },
    params: [p('D', 'D', 'القطر الكبير', 'Grande diagonale'), p('d', 'd', 'القطر الصغير', 'Petite diagonale')],
    compute: ({ D, d }) => {
      const side = Math.sqrt((D / 2) ** 2 + (d / 2) ** 2);
      return [
        { measure: 'area', formula: 'S=\\dfrac{D\\times d}{2}', substituted: `\\dfrac{${n(D)}\\times${n(d)}}{2}`, value: (D * d) / 2, power: 2 },
        { measure: 'perimeter', formula: 'P=4\\sqrt{\\left(\\tfrac D2\\right)^2+\\left(\\tfrac d2\\right)^2}', substituted: `4\\times${n(side)}`, value: 4 * side, power: 1 },
      ];
    },
  },
  {
    id: 'trapezoid',
    kind: 'plane',
    name: { ar: 'شبه منحرف', fr: 'Trapèze' },
    params: [p('B', 'B', 'القاعدة الكبرى', 'Grande base'), p('b', 'b', 'القاعدة الصغرى', 'Petite base'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ B, b, h }) => [
      { measure: 'area', formula: 'S=\\dfrac{(B+b)\\times h}{2}', substituted: `\\dfrac{(${n(B)}+${n(b)})\\times${n(h)}}{2}`, value: ((B + b) * h) / 2, power: 2 },
    ],
  },
  {
    id: 'cube',
    kind: 'solid',
    name: { ar: 'مكعب', fr: 'Cube' },
    params: [p('a', 'a', 'طول الحرف', 'Arête')],
    compute: ({ a }) => [
      { measure: 'volume', formula: 'V=a^3', substituted: `${n(a)}^3`, value: a ** 3, power: 3 },
      { measure: 'totalArea', formula: 'S=6a^2', substituted: `6\\times${n(a)}^2`, value: 6 * a * a, power: 2 },
    ],
  },
  {
    id: 'cuboid',
    kind: 'solid',
    name: { ar: 'متوازي المستطيلات', fr: 'Pavé droit' },
    params: [p('L', 'L', 'الطول', 'Longueur'), p('l', 'l', 'العرض', 'Largeur'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ L, l, h }) => [
      { measure: 'volume', formula: 'V=L\\times l\\times h', substituted: `${n(L)}\\times${n(l)}\\times${n(h)}`, value: L * l * h, power: 3 },
      { measure: 'lateralArea', formula: 'S_L=2(L+l)h', substituted: `2\\times(${n(L)}+${n(l)})\\times${n(h)}`, value: 2 * (L + l) * h, power: 2 },
      { measure: 'totalArea', formula: 'S=2(Ll+Lh+lh)', substituted: `2\\times(${n(L * l)}+${n(L * h)}+${n(l * h)})`, value: 2 * (L * l + L * h + l * h), power: 2 },
    ],
  },
  {
    id: 'cylinder',
    kind: 'solid',
    name: { ar: 'أسطوانة', fr: 'Cylindre' },
    params: [p('r', 'r', 'شعاع القاعدة', 'Rayon de la base'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ r, h }) => [
      { measure: 'volume', formula: `V=${PI} r^2h`, substituted: `${PI}\\times${n(r)}^2\\times${n(h)}`, value: Math.PI * r * r * h, power: 3 },
      { measure: 'lateralArea', formula: `S_L=2${PI} rh`, substituted: `2\\times${PI}\\times${n(r)}\\times${n(h)}`, value: 2 * Math.PI * r * h, power: 2 },
      { measure: 'totalArea', formula: `S=2${PI} r(r+h)`, substituted: `2\\times${PI}\\times${n(r)}\\times(${n(r)}+${n(h)})`, value: 2 * Math.PI * r * (r + h), power: 2 },
    ],
  },
  {
    id: 'cone',
    kind: 'solid',
    name: { ar: 'مخروط دوراني', fr: 'Cône de révolution' },
    params: [p('r', 'r', 'شعاع القاعدة', 'Rayon de la base'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ r, h }) => {
      const g = Math.sqrt(r * r + h * h);
      return [
        { measure: 'volume', formula: `V=\\dfrac{${PI} r^2h}{3}`, substituted: `\\dfrac{${PI}\\times${n(r)}^2\\times${n(h)}}{3}`, value: (Math.PI * r * r * h) / 3, power: 3 },
        { measure: 'lateralArea', formula: `S_L=${PI} rg,\\ g=\\sqrt{r^2+h^2}`, substituted: `g=${n(g)},\\ ${PI}\\times${n(r)}\\times${n(g)}`, value: Math.PI * r * g, power: 2 },
        { measure: 'totalArea', formula: `S=${PI} r(r+g)`, substituted: `${PI}\\times${n(r)}\\times(${n(r)}+${n(g)})`, value: Math.PI * r * (r + g), power: 2 },
      ];
    },
  },
  {
    id: 'sphere',
    kind: 'solid',
    name: { ar: 'فلكة', fr: 'Boule / sphère' },
    params: [p('r', 'r', 'الشعاع', 'Rayon')],
    compute: ({ r }) => [
      { measure: 'volume', formula: `V=\\dfrac43${PI} r^3`, substituted: `\\dfrac43\\times${PI}\\times${n(r)}^3`, value: (4 / 3) * Math.PI * r ** 3, power: 3 },
      { measure: 'totalArea', formula: `S=4${PI} r^2`, substituted: `4\\times${PI}\\times${n(r)}^2`, value: 4 * Math.PI * r * r, power: 2 },
    ],
  },
  {
    id: 'pyramid',
    kind: 'solid',
    name: { ar: 'هرم قاعدته مربع', fr: 'Pyramide à base carrée' },
    params: [p('a', 'a', 'ضلع القاعدة', 'Côté de la base'), p('h', 'h', 'الارتفاع', 'Hauteur')],
    compute: ({ a, h }) => [
      { measure: 'volume', formula: 'V=\\dfrac{a^2h}{3}', substituted: `\\dfrac{${n(a)}^2\\times${n(h)}}{3}`, value: (a * a * h) / 3, power: 3 },
    ],
  },
];

export function computeShape(shape: Shape, raw: Record<string, string>): ShapeResult[] {
  const values: Record<string, number> = {};
  for (const param of shape.params) {
    const s = (raw[param.id] ?? '').trim().replace(',', '.');
    const v = Number(s);
    if (s === '' || !Number.isFinite(v)) {
      throw new MathError(`أدخل قيمة عددية لـ ${param.label.ar}.`, `Saisissez une valeur numérique pour : ${param.label.fr}.`);
    }
    if (v <= 0) throw new MathError(`${param.label.ar} يجب أن يكون موجباً قطعاً.`, `${param.label.fr} doit être strictement positif.`);
    values[param.id] = v;
  }
  return shape.compute(values);
}
