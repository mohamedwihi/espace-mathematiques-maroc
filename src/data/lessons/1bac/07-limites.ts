import type { LessonModule } from '@/types';

const lessonId = '1bac-limites';

export const limites: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'limits',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'نهاية دالة عددية', fr: 'Limite d’une fonction numérique' },
    summary: {
      ar: 'النهايات الاعتيادية، العمليات على النهايات، الأشكال غير المحددة، نهايات الحدوديات والدوال الجذرية، النهايات والترتيب، والنهايات المثلثية.',
      fr: 'Limites usuelles, opérations, formes indéterminées, limites des polynômes et fonctions rationnelles, limites et ordre, limites trigonométriques.',
    },
    objectives: [
      { ar: 'حساب نهاية حدودية أو دالة جذرية.', fr: 'Calculer la limite d’un polynôme ou d’une fonction rationnelle.' },
      { ar: 'إزالة شكل غير محدد.', fr: 'Lever une forme indéterminée.' },
      { ar: 'استعمال النهايات والترتيب.', fr: 'Utiliser les théorèmes de comparaison.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['limite', 'forme indéterminée', 'asymptote', 'comparaison', 'نهاية', 'شكل غير محدد', 'مقارب'],
    sections: [
      {
        id: 'usuelles',
        title: { ar: 'النهايات الاعتيادية والعمليات', fr: 'Limites usuelles et opérations' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• $\\lim\\limits_{x\\to+\\infty}x^n=+\\infty$ ؛ $\\lim\\limits_{x\\to+\\infty}\\sqrt x=+\\infty$ ؛ $\\lim\\limits_{x\\to\\pm\\infty}\\dfrac1{x^n}=0$.\n\n• $\\lim\\limits_{x\\to0^+}\\dfrac1x=+\\infty$ و $\\lim\\limits_{x\\to0^-}\\dfrac1x=-\\infty$.\n\n• الأشكال غير المحددة: $+\\infty-\\infty$ ؛ $0\\times\\infty$ ؛ $\\dfrac\\infty\\infty$ ؛ $\\dfrac00$.',
              fr: '• $\\lim\\limits_{x\\to+\\infty}x^n=+\\infty$ ; $\\lim\\limits_{x\\to+\\infty}\\sqrt x=+\\infty$ ; $\\lim\\limits_{x\\to\\pm\\infty}\\dfrac1{x^n}=0$.\n\n• $\\lim\\limits_{x\\to0^+}\\dfrac1x=+\\infty$ et $\\lim\\limits_{x\\to0^-}\\dfrac1x=-\\infty$.\n\n• Formes indéterminées : $+\\infty-\\infty$ ; $0\\times\\infty$ ; $\\dfrac\\infty\\infty$ ; $\\dfrac00$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'عند اللانهاية', fr: 'En l’infini' },
            content: {
              ar: 'نهاية حدودية عند $\\pm\\infty$ هي نهاية حدها الأعلى درجة، ونهاية دالة جذرية هي نهاية خارج حديها الأعلى درجة.',
              fr: 'La limite d’un polynôme en $\\pm\\infty$ est celle de son terme de plus haut degré ; celle d’une fonction rationnelle est celle du quotient des termes de plus haut degré.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\lim\\limits_{x\\to+\\infty}\\dfrac{3x^2-x+1}{x^2+5}$ و $\\lim\\limits_{x\\to2}\\dfrac{x^2-4}{x-2}$.', fr: 'Calculer $\\lim\\limits_{x\\to+\\infty}\\dfrac{3x^2-x+1}{x^2+5}$ et $\\lim\\limits_{x\\to2}\\dfrac{x^2-4}{x-2}$.' },
            steps: [
              { ar: '$\\lim\\dfrac{3x^2}{x^2}=3$.', fr: '$\\lim\\dfrac{3x^2}{x^2}=3$.' },
              { ar: 'شكل $\\dfrac00$: $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to4$.', fr: 'Forme $\\dfrac00$ : $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to4$.' },
            ],
          },
        ],
      },
      {
        id: 'ordre',
        title: { ar: 'النهايات والترتيب والنهايات المثلثية', fr: 'Limites et ordre, limites trigonométriques' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: '• إذا كان $u(x)\\le f(x)\\le v(x)$ بجوار $a$ و $\\lim u=\\lim v=\\ell$ فإن $\\lim f=\\ell$.\n\n• إذا كان $f(x)\\ge u(x)$ و $\\lim u=+\\infty$ فإن $\\lim f=+\\infty$.\n\n• $\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x=1$ ؛ $\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}{x^2}=\\dfrac12$ ؛ $\\lim\\limits_{x\\to0}\\dfrac{\\tan x}x=1$.',
              fr: '• Si $u(x)\\le f(x)\\le v(x)$ au voisinage de $a$ et $\\lim u=\\lim v=\\ell$, alors $\\lim f=\\ell$.\n\n• Si $f(x)\\ge u(x)$ et $\\lim u=+\\infty$, alors $\\lim f=+\\infty$.\n\n• $\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x=1$ ; $\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}{x^2}=\\dfrac12$ ; $\\lim\\limits_{x\\to0}\\dfrac{\\tan x}x=1$.',
            },
          },
          {
            kind: 'graph',
            functions: [{ fn: (x: number) => (Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x), label: 'y=\\frac{\\sin x}{x}', color: 'brand' }],
            points: [{ x: 0, y: 1, label: '(0;1)' }],
            x: [-10, 10],
            y: [-0.5, 1.5],
            caption: { ar: 'عندما يؤول $x$ إلى $0$، يؤول $\\dfrac{\\sin x}x$ إلى $1$.', fr: 'Quand $x$ tend vers $0$, $\\dfrac{\\sin x}x$ tend vers $1$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'عند $\\pm\\infty$: الحد الأعلى درجة.', fr: 'En $\\pm\\infty$ : terme de plus haut degré.' },
      { ar: '$\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x=1$.', fr: '$\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x=1$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-lim-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'دالة جذرية', fr: 'Fonction rationnelle' },
      statement: { ar: 'احسب $\\lim\\limits_{x\\to+\\infty}\\dfrac{4x^3-x}{2x^3+7}$.', fr: 'Calculer $\\lim\\limits_{x\\to+\\infty}\\dfrac{4x^3-x}{2x^3+7}$.' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$\\dfrac{4x^3}{2x^3}$.', fr: '$\\dfrac{4x^3}{2x^3}$.' }],
      solution: [{ ar: 'النهاية $2$.', fr: 'La limite vaut $2$.' }],
    },
    {
      id: '1bac-lim-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'شكل $\\frac00$', fr: 'Forme $\\frac00$' },
      statement: { ar: 'احسب $\\lim\\limits_{x\\to3}\\dfrac{x^2-9}{x-3}$.', fr: 'Calculer $\\lim\\limits_{x\\to3}\\dfrac{x^2-9}{x-3}$.' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: 'عمّل البسط.', fr: 'Factoriser le numérateur.' }],
      solution: [{ ar: '$x+3\\to6$.', fr: '$x+3\\to6$.' }],
    },
    {
      id: '1bac-lim-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'نهاية مثلثية', fr: 'Limite trigonométrique' },
      statement: { ar: 'احسب $\\lim\\limits_{x\\to0}\\dfrac{\\sin3x}{x}$.', fr: 'Calculer $\\lim\\limits_{x\\to0}\\dfrac{\\sin3x}{x}$.' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\dfrac{\\sin3x}x=3\\times\\dfrac{\\sin3x}{3x}$.', fr: '$\\dfrac{\\sin3x}x=3\\times\\dfrac{\\sin3x}{3x}$.' }],
      solution: [{ ar: 'النهاية $3\\times1=3$.', fr: 'La limite vaut $3\\times1=3$.' }],
    },
    {
      id: '1bac-lim-04',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'حدودية', fr: 'Polynôme' },
      statement: { ar: 'ما $\\lim\\limits_{x\\to-\\infty}(x^3-5x^2+2)$؟', fr: 'Que vaut $\\lim\\limits_{x\\to-\\infty}(x^3-5x^2+2)$ ?' },
      question: { type: 'mcq', options: [{ ar: '$-\\infty$', fr: '$-\\infty$' }, { ar: '$+\\infty$', fr: '$+\\infty$' }, { ar: '$2$', fr: '$2$' }, { ar: '$0$', fr: '$0$' }], correct: 0 },
      hints: [{ ar: 'نهاية $x^3$.', fr: 'Limite de $x^3$.' }],
      solution: [{ ar: '$\\lim\\limits_{x\\to-\\infty}x^3=-\\infty$.', fr: '$\\lim\\limits_{x\\to-\\infty}x^3=-\\infty$.' }],
    },
  ],
};
