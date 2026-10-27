import type { LessonModule } from '@/types';

const lessonId = 'tc-trigonometrie-2';

export const trigonometrie2: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'trigo2',
    title: { ar: 'الحساب المثلثي (الجزء 2)', fr: 'Calcul trigonométrique (partie 2)' },
    summary: {
      ar: 'ظل عدد حقيقي، والمعادلات المثلثية الأساسية $\\cos x=\\cos a$ و $\\sin x=\\sin a$ و $\\tan x=\\tan a$.',
      fr: 'Tangente d’un réel et équations trigonométriques de base $\\cos x=\\cos a$, $\\sin x=\\sin a$, $\\tan x=\\tan a$.',
    },
    objectives: [
      { ar: 'حساب ظل عدد حقيقي.', fr: 'Calculer la tangente d’un réel.' },
      { ar: 'حل معادلات مثلثية أساسية وتمثيل حلولها على الدائرة.', fr: 'Résoudre des équations trigonométriques et représenter leurs solutions.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['tangente', 'équation trigonométrique', 'cos x = cos a', 'ظل', 'معادلة مثلثية'],
    sections: [
      {
        id: 'tangente',
        title: { ar: 'الظل', fr: 'La tangente' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'لكل $x\\neq\\dfrac\\pi2+k\\pi$: $\\tan x=\\dfrac{\\sin x}{\\cos x}$. ولدينا $\\tan(x+\\pi)=\\tan x$ و $\\tan(-x)=-\\tan x$ و $1+\\tan^2x=\\dfrac1{\\cos^2x}$.',
              fr: 'Pour $x\\neq\\dfrac\\pi2+k\\pi$ : $\\tan x=\\dfrac{\\sin x}{\\cos x}$. On a $\\tan(x+\\pi)=\\tan x$, $\\tan(-x)=-\\tan x$ et $1+\\tan^2x=\\dfrac1{\\cos^2x}$.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: '$\\tan0=0$ ؛ $\\tan\\dfrac\\pi6=\\dfrac{\\sqrt3}3$ ؛ $\\tan\\dfrac\\pi4=1$ ؛ $\\tan\\dfrac\\pi3=\\sqrt3$.', fr: '$\\tan0=0$ ; $\\tan\\dfrac\\pi6=\\dfrac{\\sqrt3}3$ ; $\\tan\\dfrac\\pi4=1$ ; $\\tan\\dfrac\\pi3=\\sqrt3$.' },
            ],
          },
        ],
      },
      {
        id: 'equations',
        title: { ar: 'المعادلات المثلثية', fr: 'Équations trigonométriques' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل $k\\in\\mathbb Z$:\n\n• $\\cos x=\\cos a\\iff x=a+2k\\pi$ أو $x=-a+2k\\pi$.\n\n• $\\sin x=\\sin a\\iff x=a+2k\\pi$ أو $x=\\pi-a+2k\\pi$.\n\n• $\\tan x=\\tan a\\iff x=a+k\\pi$.',
              fr: 'Pour $k\\in\\mathbb Z$ :\n\n• $\\cos x=\\cos a\\iff x=a+2k\\pi$ ou $x=-a+2k\\pi$.\n\n• $\\sin x=\\sin a\\iff x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$.\n\n• $\\tan x=\\tan a\\iff x=a+k\\pi$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $\\cos x=\\dfrac12$ في $[0;2\\pi[$.', fr: 'Résoudre $\\cos x=\\dfrac12$ dans $[0;2\\pi[$.' },
            steps: [
              { ar: '$\\cos x=\\cos\\dfrac\\pi3\\iff x=\\dfrac\\pi3+2k\\pi$ أو $x=-\\dfrac\\pi3+2k\\pi$.', fr: '$\\cos x=\\cos\\dfrac\\pi3\\iff x=\\dfrac\\pi3+2k\\pi$ ou $x=-\\dfrac\\pi3+2k\\pi$.' },
              { ar: 'في $[0;2\\pi[$: $S=\\left\\{\\dfrac\\pi3;\\dfrac{5\\pi}3\\right\\}$.', fr: 'Dans $[0;2\\pi[$ : $S=\\left\\{\\dfrac\\pi3;\\dfrac{5\\pi}3\\right\\}$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.cos(x), label: '\\cos x', color: 'brand' },
              { fn: () => 0.5, label: 'y=\\tfrac12', color: 'saffron' },
            ],
            points: [
              { x: Math.PI / 3, y: 0.5 },
              { x: (5 * Math.PI) / 3, y: 0.5 },
            ],
            x: [-0.5, 6.8],
            y: [-1.5, 1.5],
            caption: { ar: 'الحلان في $[0;2\\pi[$ هما أفصولا نقطتي التقاطع.', fr: 'Les deux solutions dans $[0;2\\pi[$ sont les abscisses des points d’intersection.' },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\cos x=\\cos a$: $x=\\pm a+2k\\pi$.', fr: '$\\cos x=\\cos a$ : $x=\\pm a+2k\\pi$.' },
      { ar: '$\\sin x=\\sin a$: $x=a+2k\\pi$ أو $\\pi-a+2k\\pi$.', fr: '$\\sin x=\\sin a$ : $x=a+2k\\pi$ ou $\\pi-a+2k\\pi$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-tr2-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'ظل', fr: 'Tangente' },
      statement: { ar: 'احسب $\\tan\\dfrac{5\\pi}4$.', fr: 'Calculer $\\tan\\dfrac{5\\pi}4$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$\\dfrac{5\\pi}4=\\dfrac\\pi4+\\pi$.', fr: '$\\dfrac{5\\pi}4=\\dfrac\\pi4+\\pi$.' }],
      solution: [{ ar: '$\\tan\\left(\\dfrac\\pi4+\\pi\\right)=\\tan\\dfrac\\pi4=1$.', fr: '$\\tan\\left(\\dfrac\\pi4+\\pi\\right)=\\tan\\dfrac\\pi4=1$.' }],
    },
    {
      id: 'tc-tr2-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'عدد الحلول', fr: 'Nombre de solutions' },
      statement: { ar: 'كم حلاً للمعادلة $\\sin x=0$ في $[0;2\\pi[$؟', fr: 'Combien de solutions a $\\sin x=0$ dans $[0;2\\pi[$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$x=k\\pi$.', fr: '$x=k\\pi$.' }],
      solution: [{ ar: 'الحلان $0$ و $\\pi$.', fr: 'Les solutions sont $0$ et $\\pi$.' }],
    },
    {
      id: 'tc-tr2-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'معادلة بالجيب', fr: 'Équation en sinus' },
      statement: { ar: 'ما حلول $\\sin x=\\dfrac{\\sqrt2}2$ في $[0;2\\pi[$؟', fr: 'Quelles sont les solutions de $\\sin x=\\dfrac{\\sqrt2}2$ dans $[0;2\\pi[$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac\\pi4$ و $\\dfrac{3\\pi}4$', fr: '$\\dfrac\\pi4$ et $\\dfrac{3\\pi}4$' }, { ar: '$\\dfrac\\pi4$ و $\\dfrac{7\\pi}4$', fr: '$\\dfrac\\pi4$ et $\\dfrac{7\\pi}4$' }, { ar: '$\\dfrac\\pi4$ فقط', fr: '$\\dfrac\\pi4$ seulement' }, { ar: '$\\dfrac{3\\pi}4$ و $\\dfrac{5\\pi}4$', fr: '$\\dfrac{3\\pi}4$ et $\\dfrac{5\\pi}4$' }],
        correct: 0,
      },
      hints: [{ ar: '$x=\\dfrac\\pi4$ أو $x=\\pi-\\dfrac\\pi4$.', fr: '$x=\\dfrac\\pi4$ ou $x=\\pi-\\dfrac\\pi4$.' }],
      solution: [{ ar: '$S=\\left\\{\\dfrac\\pi4;\\dfrac{3\\pi}4\\right\\}$.', fr: '$S=\\left\\{\\dfrac\\pi4;\\dfrac{3\\pi}4\\right\\}$.' }],
    },
    {
      id: 'tc-tr2-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'معادلة بالظل', fr: 'Équation en tangente' },
      statement: { ar: 'ما الحلول العامة للمعادلة $\\tan x=\\sqrt3$؟', fr: 'Quelles sont les solutions générales de $\\tan x=\\sqrt3$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$x=\\dfrac\\pi3+k\\pi$', fr: '$x=\\dfrac\\pi3+k\\pi$' }, { ar: '$x=\\dfrac\\pi3+2k\\pi$', fr: '$x=\\dfrac\\pi3+2k\\pi$' }, { ar: '$x=\\dfrac\\pi6+k\\pi$', fr: '$x=\\dfrac\\pi6+k\\pi$' }, { ar: '$x=\\pm\\dfrac\\pi3+2k\\pi$', fr: '$x=\\pm\\dfrac\\pi3+2k\\pi$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\tan\\dfrac\\pi3=\\sqrt3$.', fr: '$\\tan\\dfrac\\pi3=\\sqrt3$.' }],
      solution: [{ ar: '$\\tan x=\\tan\\dfrac\\pi3\\iff x=\\dfrac\\pi3+k\\pi$ ($k\\in\\mathbb Z$).', fr: '$\\tan x=\\tan\\dfrac\\pi3\\iff x=\\dfrac\\pi3+k\\pi$ ($k\\in\\mathbb Z$).' }],
    },
  ],
};
