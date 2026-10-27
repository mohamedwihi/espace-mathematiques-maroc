import type { LessonModule } from '@/types';

const lessonId = '3ac-trigonometrie';

export const trigonometrie: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'trigo',
    title: { ar: 'الحساب المثلثي', fr: 'Trigonométrie' },
    summary: {
      ar: 'جيب تمام وجيب وظل زاوية حادة، العلاقتان $\\cos^2x+\\sin^2x=1$ و $\\tan x=\\frac{\\sin x}{\\cos x}$، الزاويتان المتتامتان والزوايا الخاصة.',
      fr: 'Cosinus, sinus et tangente d’un angle aigu, relations $\\cos^2x+\\sin^2x=1$ et $\\tan x=\\frac{\\sin x}{\\cos x}$, angles complémentaires et angles particuliers.',
    },
    objectives: [
      { ar: 'حساب جيب تمام وجيب وظل زاوية حادة في مثلث قائم.', fr: 'Calculer cos, sin et tan d’un angle aigu dans un triangle rectangle.' },
      { ar: 'استعمال العلاقات المثلثية.', fr: 'Utiliser les relations trigonométriques.' },
      { ar: 'استعمال خاصيات الزاويتين المتتامتين.', fr: 'Utiliser les propriétés des angles complémentaires.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['cosinus', 'sinus', 'tangente', 'angle aigu', 'complémentaire', 'جيب تمام', 'جيب', 'ظل', 'متتامتان'],
    sections: [
      {
        id: 'definitions',
        title: { ar: 'التعاريف', fr: 'Définitions' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'في مثلث $ABC$ قائم الزاوية في $A$:\n\n• $\\cos\\hat B=\\dfrac{\\text{المجاور}}{\\text{الوتر}}=\\dfrac{AB}{BC}$\n\n• $\\sin\\hat B=\\dfrac{\\text{المقابل}}{\\text{الوتر}}=\\dfrac{AC}{BC}$\n\n• $\\tan\\hat B=\\dfrac{\\text{المقابل}}{\\text{المجاور}}=\\dfrac{AC}{AB}$',
              fr: 'Dans un triangle $ABC$ rectangle en $A$ :\n\n• $\\cos\\hat B=\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}=\\dfrac{AB}{BC}$\n\n• $\\sin\\hat B=\\dfrac{\\text{opposé}}{\\text{hypoténuse}}=\\dfrac{AC}{BC}$\n\n• $\\tan\\hat B=\\dfrac{\\text{opposé}}{\\text{adjacent}}=\\dfrac{AC}{AB}$',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'لكل زاوية حادة $x$: $0<\\cos x<1$ و $0<\\sin x<1$ و $\\tan x>0$. هذه النسب بدون وحدة.',
              fr: 'Pour tout angle aigu $x$ : $0<\\cos x<1$, $0<\\sin x<1$ et $\\tan x>0$. Ces rapports n’ont pas d’unité.',
            },
          },
        ],
      },
      {
        id: 'relations',
        title: { ar: 'العلاقات المثلثية', fr: 'Relations trigonométriques' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل زاوية حادة $x$: $\\cos^2x+\\sin^2x=1$ و $\\tan x=\\dfrac{\\sin x}{\\cos x}$.',
              fr: 'Pour tout angle aigu $x$ : $\\cos^2x+\\sin^2x=1$ et $\\tan x=\\dfrac{\\sin x}{\\cos x}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$\\cos x=0{,}8$. احسب $\\sin x$ و $\\tan x$.', fr: '$\\cos x=0{,}8$. Calculer $\\sin x$ et $\\tan x$.' },
            steps: [
              { ar: '$\\sin^2x=1-0{,}64=0{,}36$ و $\\sin x>0$ إذن $\\sin x=0{,}6$.', fr: '$\\sin^2x=1-0{,}64=0{,}36$ et $\\sin x>0$ donc $\\sin x=0{,}6$.' },
              { ar: '$\\tan x=\\dfrac{0{,}6}{0{,}8}=0{,}75$.', fr: '$\\tan x=\\dfrac{0{,}6}{0{,}8}=0{,}75$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'زاويتان متتامتان', fr: 'Angles complémentaires' },
            content: {
              ar: 'إذا كان $a+b=90^\\circ$ فإن $\\cos a=\\sin b$ و $\\sin a=\\cos b$ و $\\tan a=\\dfrac1{\\tan b}$.',
              fr: 'Si $a+b=90^\\circ$ alors $\\cos a=\\sin b$, $\\sin a=\\cos b$ et $\\tan a=\\dfrac1{\\tan b}$.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: '$\\sin30^\\circ=\\cos60^\\circ=\\dfrac12$ ؛ $\\cos30^\\circ=\\sin60^\\circ=\\dfrac{\\sqrt3}2$.', fr: '$\\sin30^\\circ=\\cos60^\\circ=\\dfrac12$ ; $\\cos30^\\circ=\\sin60^\\circ=\\dfrac{\\sqrt3}2$.' },
              { ar: '$\\sin45^\\circ=\\cos45^\\circ=\\dfrac{\\sqrt2}2$ ؛ $\\tan45^\\circ=1$.', fr: '$\\sin45^\\circ=\\cos45^\\circ=\\dfrac{\\sqrt2}2$ ; $\\tan45^\\circ=1$.' },
              { ar: '$\\tan30^\\circ=\\dfrac{\\sqrt3}3$ ؛ $\\tan60^\\circ=\\sqrt3$.', fr: '$\\tan30^\\circ=\\dfrac{\\sqrt3}3$ ; $\\tan60^\\circ=\\sqrt3$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'cos = مجاور/وتر، sin = مقابل/وتر، tan = مقابل/مجاور.', fr: 'cos = adjacent/hypoténuse, sin = opposé/hypoténuse, tan = opposé/adjacent.' },
      { ar: '$\\cos^2x+\\sin^2x=1$.', fr: '$\\cos^2x+\\sin^2x=1$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-tri-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'جيب زاوية', fr: 'Sinus d’un angle' },
      statement: { ar: '$ABC$ قائم في $A$ مع $AB=3$ و $AC=4$ و $BC=5$. احسب $\\sin\\hat B$.', fr: '$ABC$ est rectangle en $A$ avec $AB=3$, $AC=4$, $BC=5$. Calculer $\\sin\\hat B$.' },
      question: { type: 'numeric', answer: 0.8, tolerance: 1e-9 },
      hints: [{ ar: 'المقابل لـ $\\hat B$ هو $AC$.', fr: 'Le côté opposé à $\\hat B$ est $AC$.' }],
      solution: [{ ar: '$\\sin\\hat B=\\dfrac{AC}{BC}=\\dfrac45=0{,}8$.', fr: '$\\sin\\hat B=\\dfrac{AC}{BC}=\\dfrac45=0{,}8$.' }],
    },
    {
      id: '3ac-tri-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'من cos إلى tan', fr: 'Du cosinus à la tangente' },
      statement: { ar: '$x$ زاوية حادة بحيث $\\cos x=\\dfrac35$. احسب $\\tan x$.', fr: '$x$ est un angle aigu tel que $\\cos x=\\dfrac35$. Calculer $\\tan x$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac43$', fr: '$\\dfrac43$' }, { ar: '$\\dfrac34$', fr: '$\\dfrac34$' }, { ar: '$\\dfrac45$', fr: '$\\dfrac45$' }, { ar: '$\\dfrac53$', fr: '$\\dfrac53$' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب $\\sin x$ أولاً.', fr: 'Calcule d’abord $\\sin x$.' }],
      solution: [
        { ar: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ إذن $\\sin x=\\dfrac45$.', fr: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ donc $\\sin x=\\dfrac45$.' },
        { ar: '$\\tan x=\\dfrac{4/5}{3/5}=\\dfrac43$.', fr: '$\\tan x=\\dfrac{4/5}{3/5}=\\dfrac43$.' },
      ],
    },
    {
      id: '3ac-tri-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'زوايا متتامة', fr: 'Angles complémentaires' },
      statement: { ar: 'احسب $D=\\cos^215^\\circ+\\cos^275^\\circ-2\\tan35^\\circ\\times\\tan55^\\circ$.', fr: 'Calculer $D=\\cos^215^\\circ+\\cos^275^\\circ-2\\tan35^\\circ\\times\\tan55^\\circ$.' },
      question: { type: 'numeric', answer: -1 },
      hints: [{ ar: '$\\cos75^\\circ=\\sin15^\\circ$ و $\\tan35^\\circ\\times\\tan55^\\circ=1$.', fr: '$\\cos75^\\circ=\\sin15^\\circ$ et $\\tan35^\\circ\\times\\tan55^\\circ=1$.' }],
      solution: [{ ar: '$D=\\cos^215^\\circ+\\sin^215^\\circ-2\\times1=1-2=-1$.', fr: '$D=\\cos^215^\\circ+\\sin^215^\\circ-2\\times1=1-2=-1$.' }],
    },
    {
      id: '3ac-tri-04',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'إيجاد زاوية', fr: 'Trouver un angle' },
      statement: { ar: '$x$ زاوية حادة بحيث $\\sin x=\\cos75^\\circ$. أوجد $x$ بالدرجات.', fr: '$x$ est un angle aigu tel que $\\sin x=\\cos75^\\circ$. Trouver $x$ en degrés.' },
      question: { type: 'numeric', answer: 15, unit: '°' },
      hints: [{ ar: 'زاويتان متتامتان.', fr: 'Deux angles complémentaires.' }],
      solution: [{ ar: '$\\sin x=\\cos75^\\circ=\\sin(90^\\circ-75^\\circ)$ إذن $x=15^\\circ$.', fr: '$\\sin x=\\cos75^\\circ=\\sin(90^\\circ-75^\\circ)$ donc $x=15^\\circ$.' }],
    },
  ],
};
