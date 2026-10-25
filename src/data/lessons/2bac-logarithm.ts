import type { Lesson } from '@/types';

export const lesson2bacLogarithm: Lesson = {
  id: '2bac-logarithm',
  levelId: '2bac',
  unitId: 'log',
  streams: ['sm', 'pc', 'svt', 'sa', 'ste', 'eco'],
  title: { ar: 'دالة اللوغاريتم النيبيري', fr: 'La fonction logarithme népérien' },
  summary: {
    ar: 'تعريف الدالة $\\ln$، خاصياتها الجبرية، نهاياتها، مشتقتها، وحل معادلات ومتراجحات.',
    fr: 'Définition de $\\ln$, propriétés algébriques, limites, dérivée, et résolution d’équations et d’inéquations.',
  },
  objectives: [
    { ar: 'معرفة تعريف الدالة $\\ln$ ومجموعة تعريفها.', fr: 'Connaître la définition de $\\ln$ et son ensemble de définition.' },
    { ar: 'استعمال الخاصيات الجبرية لتبسيط تعابير.', fr: 'Utiliser les propriétés algébriques pour simplifier.' },
    { ar: 'معرفة النهايات الأساسية.', fr: 'Connaître les limites de référence.' },
    { ar: 'حل معادلات ومتراجحات تتضمن $\\ln$.', fr: 'Résoudre des équations et inéquations avec $\\ln$.' },
  ],
  durationMinutes: 60,
  reviewed: false,
  featured: true,
  keywords: ['logarithme', 'ln', 'népérien', 'limite', 'لوغاريتم', 'نيبيري'],
  sections: [
    {
      id: 'definition',
      title: { ar: 'تعريف وخاصيات أولية', fr: 'Définition et premières propriétés' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'دالة **اللوغاريتم النيبيري**، ويرمز لها بـ $\\ln$، هي الدالة الأصلية للدالة $x\\mapsto\\dfrac1x$ على $]0;+\\infty[$ والتي تنعدم في $1$.',
            fr: 'La fonction **logarithme népérien**, notée $\\ln$, est la primitive de $x\\mapsto\\dfrac1x$ sur $]0;+\\infty[$ qui s’annule en $1$.',
          },
        },
        { kind: 'formula', tex: "D_{\\ln}=]0;+\\infty[\\qquad \\ln1=0\\qquad \\ln e=1\\qquad (\\ln x)'=\\frac1x" },
        {
          kind: 'property',
          content: {
            ar: 'الدالة $\\ln$ تزايدية قطعاً على $]0;+\\infty[$. لكل $a>0$ و $b>0$: $\\ln a=\\ln b\\iff a=b$ و $\\ln a<\\ln b\\iff a<b$.',
            fr: 'La fonction $\\ln$ est strictement croissante sur $]0;+\\infty[$. Pour $a>0$ et $b>0$ : $\\ln a=\\ln b\\iff a=b$ et $\\ln a<\\ln b\\iff a<b$.',
          },
        },
        {
          kind: 'graph',
          x: [-0.5, 8],
          y: [-3, 3],
          functions: [{ fn: (x) => Math.log(x), label: 'y=\\ln x', color: 'brand', domain: [0.02, 8] }],
          points: [
            { x: 1, y: 0, label: '(1;0)' },
            { x: Math.E, y: 1, label: '(e;1)' },
          ],
          caption: {
            ar: 'منحنى الدالة $\\ln$: محور الأراتيب مقارب عمودي.',
            fr: 'Courbe de $\\ln$ : l’axe des ordonnées est asymptote verticale.',
          },
        },
      ],
    },
    {
      id: 'algebra',
      title: { ar: 'الخاصيات الجبرية', fr: 'Propriétés algébriques' },
      blocks: [
        {
          kind: 'property',
          content: {
            ar: 'لكل $a>0$ و $b>0$ ولكل $n\\in\\mathbb{Z}$:',
            fr: 'Pour tous $a>0$, $b>0$ et tout $n\\in\\mathbb{Z}$ :',
          },
        },
        {
          kind: 'formula',
          tex: '\\ln(ab)=\\ln a+\\ln b\\qquad \\ln\\frac ab=\\ln a-\\ln b\\qquad \\ln\\frac1b=-\\ln b',
        },
        { kind: 'formula', tex: '\\ln(a^n)=n\\ln a\\qquad \\ln\\sqrt a=\\frac12\\ln a' },
        {
          kind: 'example',
          statement: { ar: 'بسّط $A=\\ln8-2\\ln2+\\ln\\dfrac14$.', fr: 'Simplifier $A=\\ln8-2\\ln2+\\ln\\dfrac14$.' },
          steps: [
            { ar: '$\\ln8=\\ln(2^3)=3\\ln2$ و $\\ln\\dfrac14=-\\ln4=-2\\ln2$.', fr: '$\\ln8=\\ln(2^3)=3\\ln2$ et $\\ln\\dfrac14=-\\ln4=-2\\ln2$.' },
            { ar: '$A=3\\ln2-2\\ln2-2\\ln2=-\\ln2$.', fr: '$A=3\\ln2-2\\ln2-2\\ln2=-\\ln2$.' },
          ],
        },
      ],
    },
    {
      id: 'limits',
      title: { ar: 'النهايات الأساسية', fr: 'Limites de référence' },
      blocks: [
        { kind: 'formula', tex: '\\lim_{x\\to+\\infty}\\ln x=+\\infty\\qquad \\lim_{x\\to0^+}\\ln x=-\\infty' },
        { kind: 'formula', tex: '\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0\\qquad \\lim_{x\\to0^+}x\\ln x=0\\qquad \\lim_{x\\to0}\\frac{\\ln(1+x)}{x}=1' },
        {
          kind: 'property',
          title: { ar: 'مشتقة $\\ln u$', fr: 'Dérivée de $\\ln u$' },
          content: {
            ar: 'إذا كانت $u$ قابلة للاشتقاق وموجبة قطعاً على مجال $I$، فإن $(\\ln u)\'=\\dfrac{u\'}{u}$ على $I$.',
            fr: 'Si $u$ est dérivable et strictement positive sur $I$, alors $(\\ln u)\'=\\dfrac{u\'}{u}$ sur $I$.',
          },
        },
      ],
    },
    {
      id: 'equations',
      title: { ar: 'معادلات ومتراجحات', fr: 'Équations et inéquations' },
      blocks: [
        {
          kind: 'method',
          content: {
            ar: 'نحدد أولاً **مجموعة تعريف** المعادلة (كل ما بداخل $\\ln$ يجب أن يكون موجباً قطعاً)، ثم نستعمل $\\ln a=\\ln b\\iff a=b$، ونتحقق من انتماء الحلول إلى مجموعة التعريف.',
            fr: 'On détermine d’abord le **domaine de validité** (tout ce qui est dans un $\\ln$ doit être strictement positif), puis on utilise $\\ln a=\\ln b\\iff a=b$ et on vérifie que les solutions appartiennent au domaine.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'حل في $\\mathbb{R}$: $\\ln(2x-1)=\\ln(x+3)$.', fr: 'Résoudre dans $\\mathbb{R}$ : $\\ln(2x-1)=\\ln(x+3)$.' },
          steps: [
            { ar: 'الشرط: $2x-1>0$ و $x+3>0$، أي $x>\\dfrac12$.', fr: 'Condition : $2x-1>0$ et $x+3>0$, soit $x>\\dfrac12$.' },
            { ar: '$2x-1=x+3$ ومنه $x=4$.', fr: '$2x-1=x+3$ d’où $x=4$.' },
            { ar: '$4>\\dfrac12$، إذن $S=\\{4\\}$.', fr: '$4>\\dfrac12$, donc $S=\\{4\\}$.' },
          ],
        },
        {
          kind: 'example',
          statement: { ar: 'حل المتراجحة $\\ln x<1$.', fr: 'Résoudre $\\ln x<1$.' },
          steps: [
            { ar: 'الشرط: $x>0$.', fr: 'Condition : $x>0$.' },
            { ar: '$\\ln x<\\ln e\\iff x<e$ لأن $\\ln$ تزايدية قطعاً.', fr: '$\\ln x<\\ln e\\iff x<e$ car $\\ln$ est strictement croissante.' },
            { ar: '$S=]0;e[$.', fr: '$S=]0;e[$.' },
          ],
        },
        {
          kind: 'remark',
          title: { ar: 'اللوغاريتم العشري', fr: 'Logarithme décimal' },
          content: {
            ar: 'اللوغاريتم العشري معرف بـ $\\log x=\\dfrac{\\ln x}{\\ln10}$، ويحقق $\\log10^n=n$.',
            fr: 'Le logarithme décimal est défini par $\\log x=\\dfrac{\\ln x}{\\ln10}$ et vérifie $\\log10^n=n$.',
          },
        },
      ],
    },
  ],
  recap: [
    { ar: "$\\ln$ معرفة على $]0;+\\infty[$، $\\ln1=0$، $\\ln e=1$، $(\\ln x)'=\\frac1x$.", fr: "$\\ln$ est définie sur $]0;+\\infty[$, $\\ln1=0$, $\\ln e=1$, $(\\ln x)'=\\frac1x$." },
    { ar: '$\\ln(ab)=\\ln a+\\ln b$ و $\\ln(a^n)=n\\ln a$.', fr: '$\\ln(ab)=\\ln a+\\ln b$ et $\\ln(a^n)=n\\ln a$.' },
    { ar: '$\\lim_{+\\infty}\\frac{\\ln x}{x}=0$ و $\\lim_{0^+}x\\ln x=0$.', fr: '$\\lim_{+\\infty}\\frac{\\ln x}{x}=0$ et $\\lim_{0^+}x\\ln x=0$.' },
    { ar: "$(\\ln u)'=\\frac{u'}{u}$ مع $u>0$.", fr: "$(\\ln u)'=\\frac{u'}{u}$ avec $u>0$." },
    { ar: 'ابدأ دائماً بتحديد مجموعة التعريف.', fr: 'Toujours commencer par le domaine de validité.' },
  ],
};
