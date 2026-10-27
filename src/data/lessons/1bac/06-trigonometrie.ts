import type { LessonModule } from '@/types';

const lessonId = '1bac-trigonometrie';

export const trigonometrie: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'trigo',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'الحساب المثلثي', fr: 'Calcul trigonométrique' },
    summary: {
      ar: 'صيغ الجمع، صيغ ضعف الزاوية، تحويل $a\\cos x+b\\sin x$، والمعادلات المثلثية.',
      fr: 'Formules d’addition, de duplication, transformation de $a\\cos x+b\\sin x$ et équations trigonométriques.',
    },
    objectives: [
      { ar: 'استعمال صيغ الجمع وضعف الزاوية.', fr: 'Utiliser les formules d’addition et de duplication.' },
      { ar: 'كتابة $a\\cos x+b\\sin x$ على شكل $r\\cos(x-\\varphi)$.', fr: 'Écrire $a\\cos x+b\\sin x$ sous la forme $r\\cos(x-\\varphi)$.' },
      { ar: 'حل معادلات مثلثية.', fr: 'Résoudre des équations trigonométriques.' },
    ],
    durationMinutes: 50,
    reviewed: false,
    keywords: ['trigonométrie', 'addition', 'duplication', 'équation', 'cos', 'sin', 'حساب مثلثي', 'صيغ الجمع', 'معادلة'],
    sections: [
      {
        id: 'formules',
        title: { ar: 'صيغ التحويل', fr: 'Formules de transformation' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'صيغ الجمع', fr: 'Formules d’addition' },
            content: {
              ar: '$\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b$\n\n$\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b$',
              fr: '$\\cos(a\\pm b)=\\cos a\\cos b\\mp\\sin a\\sin b$\n\n$\\sin(a\\pm b)=\\sin a\\cos b\\pm\\cos a\\sin b$',
            },
          },
          {
            kind: 'property',
            title: { ar: 'ضعف الزاوية', fr: 'Duplication' },
            content: {
              ar: '$\\sin2a=2\\sin a\\cos a$ ؛ $\\cos2a=\\cos^2a-\\sin^2a=2\\cos^2a-1=1-2\\sin^2a$.',
              fr: '$\\sin2a=2\\sin a\\cos a$ ; $\\cos2a=\\cos^2a-\\sin^2a=2\\cos^2a-1=1-2\\sin^2a$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\cos\\dfrac{\\pi}{12}$.', fr: 'Calculer $\\cos\\dfrac{\\pi}{12}$.' },
            steps: [{ ar: '$\\cos\\left(\\dfrac\\pi3-\\dfrac\\pi4\\right)=\\dfrac12\\cdot\\dfrac{\\sqrt2}2+\\dfrac{\\sqrt3}2\\cdot\\dfrac{\\sqrt2}2=\\dfrac{\\sqrt2+\\sqrt6}4$.', fr: '$\\cos\\left(\\dfrac\\pi3-\\dfrac\\pi4\\right)=\\dfrac12\\cdot\\dfrac{\\sqrt2}2+\\dfrac{\\sqrt3}2\\cdot\\dfrac{\\sqrt2}2=\\dfrac{\\sqrt2+\\sqrt6}4$.' }],
          },
          {
            kind: 'property',
            title: { ar: 'تحويل $a\\cos x+b\\sin x$', fr: 'Transformation de $a\\cos x+b\\sin x$' },
            content: {
              ar: 'مع $r=\\sqrt{a^2+b^2}$: $a\\cos x+b\\sin x=r\\cos(x-\\varphi)$ حيث $\\cos\\varphi=\\dfrac ar$ و $\\sin\\varphi=\\dfrac br$.',
              fr: 'Avec $r=\\sqrt{a^2+b^2}$ : $a\\cos x+b\\sin x=r\\cos(x-\\varphi)$ où $\\cos\\varphi=\\dfrac ar$ et $\\sin\\varphi=\\dfrac br$.',
            },
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
              ar: '• $\\cos x=\\cos a\\iff x=a+2k\\pi$ أو $x=-a+2k\\pi$.\n\n• $\\sin x=\\sin a\\iff x=a+2k\\pi$ أو $x=\\pi-a+2k\\pi$.\n\n• $\\tan x=\\tan a\\iff x=a+k\\pi$ ($k\\in\\mathbb Z$).',
              fr: '• $\\cos x=\\cos a\\iff x=a+2k\\pi$ ou $x=-a+2k\\pi$.\n\n• $\\sin x=\\sin a\\iff x=a+2k\\pi$ ou $x=\\pi-a+2k\\pi$.\n\n• $\\tan x=\\tan a\\iff x=a+k\\pi$ ($k\\in\\mathbb Z$).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل في $\\mathbb R$: $\\cos x+\\sqrt3\\sin x=1$.', fr: 'Résoudre dans $\\mathbb R$ : $\\cos x+\\sqrt3\\sin x=1$.' },
            steps: [
              { ar: '$r=2$ و $\\varphi=\\dfrac\\pi3$: المعادلة تصبح $\\cos\\left(x-\\dfrac\\pi3\\right)=\\dfrac12$.', fr: '$r=2$ et $\\varphi=\\dfrac\\pi3$ : l’équation devient $\\cos\\left(x-\\dfrac\\pi3\\right)=\\dfrac12$.' },
              { ar: '$x-\\dfrac\\pi3=\\pm\\dfrac\\pi3+2k\\pi$، إذن $x=\\dfrac{2\\pi}3+2k\\pi$ أو $x=2k\\pi$.', fr: '$x-\\dfrac\\pi3=\\pm\\dfrac\\pi3+2k\\pi$, donc $x=\\dfrac{2\\pi}3+2k\\pi$ ou $x=2k\\pi$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.cos(x) + Math.sqrt(3) * Math.sin(x), label: 'y=\\cos x+\\sqrt3\\sin x', color: 'brand' },
              { fn: () => 1, label: 'y=1', color: 'saffron' },
            ],
            points: [{ x: 0, y: 1 }, { x: (2 * Math.PI) / 3, y: 1 }],
            x: [-1, 7],
            y: [-2.5, 2.5],
            caption: { ar: 'حلول المعادلة في $[0;2\\pi[$: $0$ و $\\dfrac{2\\pi}3$.', fr: 'Solutions dans $[0;2\\pi[$ : $0$ et $\\dfrac{2\\pi}3$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\cos2a=2\\cos^2a-1$ و $\\sin2a=2\\sin a\\cos a$.', fr: '$\\cos2a=2\\cos^2a-1$ et $\\sin2a=2\\sin a\\cos a$.' },
      { ar: '$a\\cos x+b\\sin x=\\sqrt{a^2+b^2}\\cos(x-\\varphi)$.', fr: '$a\\cos x+b\\sin x=\\sqrt{a^2+b^2}\\cos(x-\\varphi)$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-tri-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'ضعف الزاوية', fr: 'Duplication' },
      statement: { ar: '$\\sin a=0{,}6$ و $\\cos a=0{,}8$. احسب $\\sin2a$.', fr: '$\\sin a=0{,}6$ et $\\cos a=0{,}8$. Calculer $\\sin2a$.' },
      question: { type: 'numeric', answer: 0.96, tolerance: 1e-6 },
      hints: [{ ar: '$2\\sin a\\cos a$.', fr: '$2\\sin a\\cos a$.' }],
      solution: [{ ar: '$2\\times0{,}6\\times0{,}8=0{,}96$.', fr: '$2\\times0{,}6\\times0{,}8=0{,}96$.' }],
    },
    {
      id: '1bac-tri-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'تبسيط', fr: 'Simplification' },
      statement: { ar: 'بسّط $2\\cos^2\\dfrac{\\pi}{8}-1$.', fr: 'Simplifier $2\\cos^2\\dfrac{\\pi}{8}-1$.' },
      question: { type: 'mcq', options: [{ ar: '$\\dfrac{\\sqrt2}2$', fr: '$\\dfrac{\\sqrt2}2$' }, { ar: '$\\dfrac12$', fr: '$\\dfrac12$' }, { ar: '$\\dfrac{\\sqrt3}2$', fr: '$\\dfrac{\\sqrt3}2$' }, { ar: '$1$', fr: '$1$' }], correct: 0 },
      hints: [{ ar: '$2\\cos^2a-1=\\cos2a$.', fr: '$2\\cos^2a-1=\\cos2a$.' }],
      solution: [{ ar: '$\\cos\\dfrac\\pi4=\\dfrac{\\sqrt2}2$.', fr: '$\\cos\\dfrac\\pi4=\\dfrac{\\sqrt2}2$.' }],
    },
    {
      id: '1bac-tri-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'شعاع $r$', fr: 'Amplitude $r$' },
      statement: { ar: 'نكتب $3\\cos x+4\\sin x=r\\cos(x-\\varphi)$ مع $r>0$. احسب $r$.', fr: 'On écrit $3\\cos x+4\\sin x=r\\cos(x-\\varphi)$ avec $r>0$. Calculer $r$.' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$r=\\sqrt{a^2+b^2}$.', fr: '$r=\\sqrt{a^2+b^2}$.' }],
      solution: [{ ar: '$r=\\sqrt{9+16}=5$.', fr: '$r=\\sqrt{9+16}=5$.' }],
    },
    {
      id: '1bac-tri-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'عدد الحلول', fr: 'Nombre de solutions' },
      statement: { ar: 'كم عدد حلول المعادلة $\\sin x=\\dfrac12$ في المجال $[0;2\\pi[$؟', fr: 'Combien de solutions l’équation $\\sin x=\\dfrac12$ a-t-elle dans $[0;2\\pi[$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$x=\\dfrac\\pi6$ أو $x=\\pi-\\dfrac\\pi6$.', fr: '$x=\\dfrac\\pi6$ ou $x=\\pi-\\dfrac\\pi6$.' }],
      solution: [{ ar: 'الحلان $\\dfrac\\pi6$ و $\\dfrac{5\\pi}6$.', fr: 'Les solutions sont $\\dfrac\\pi6$ et $\\dfrac{5\\pi}6$.' }],
    },
  ],
};
