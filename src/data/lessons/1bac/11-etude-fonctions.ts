import type { LessonModule } from '@/types';

const lessonId = '1bac-etude-fonctions';

export const etudeFonctions: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'study',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'دراسة الدوال العددية', fr: 'Étude des fonctions' },
    summary: {
      ar: 'القيم القصوى، التقعر ونقط الانعطاف، المقاربات (عمودية وأفقية ومائلة)، محور ومركز تماثل، وخطوات دراسة دالة.',
      fr: 'Extremums, concavité et points d’inflexion, asymptotes (verticale, horizontale, oblique), axe et centre de symétrie, plan d’étude d’une fonction.',
    },
    objectives: [
      { ar: 'تحديد القيم القصوى لدالة.', fr: 'Déterminer les extremums d’une fonction.' },
      { ar: 'دراسة الفروع اللانهائية.', fr: 'Étudier les branches infinies.' },
      { ar: 'إنشاء منحنى دالة.', fr: 'Tracer la courbe d’une fonction.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['étude de fonction', 'asymptote', 'extremum', 'inflexion', 'symétrie', 'دراسة دالة', 'مقارب', 'قيمة قصوى', 'انعطاف'],
    sections: [
      {
        id: 'extremums',
        title: { ar: 'القيم القصوى والتقعر', fr: 'Extremums et concavité' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا انعدمت $f\'$ في $a$ مغيرة إشارتها، فإن $f(a)$ قيمة قصوى محلية.\n\n• إذا كان $f\'\'\\ge0$ على $I$ فإن $C_f$ محدب (تقعره نحو الأراتيب الموجبة)، وإذا كان $f\'\'\\le0$ فهو مقعر.\n\n• إذا انعدمت $f\'\'$ في $a$ مغيرة إشارتها، فالنقطة $(a;f(a))$ **نقطة انعطاف**.',
              fr: '• Si $f\'$ s’annule en $a$ en changeant de signe, $f(a)$ est un extremum local.\n\n• Si $f\'\'\\ge0$ sur $I$, $C_f$ est convexe (tourne sa concavité vers les $y$ positifs) ; si $f\'\'\\le0$, elle est concave.\n\n• Si $f\'\'$ s’annule en $a$ en changeant de signe, $(a;f(a))$ est un **point d’inflexion**.',
            },
          },
        ],
      },
      {
        id: 'asymptotes',
        title: { ar: 'الفروع اللانهائية والتماثل', fr: 'Branches infinies et symétrie' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '$\\lim\\limits_{x\\to a}f(x)=\\pm\\infty$: المستقيم $x=a$ **مقارب عمودي**.', fr: '$\\lim\\limits_{x\\to a}f(x)=\\pm\\infty$ : la droite $x=a$ est **asymptote verticale**.' },
              { ar: '$\\lim\\limits_{x\\to\\pm\\infty}f(x)=b$: المستقيم $y=b$ **مقارب أفقي**.', fr: '$\\lim\\limits_{x\\to\\pm\\infty}f(x)=b$ : la droite $y=b$ est **asymptote horizontale**.' },
              { ar: '$\\lim\\limits_{x\\to\\pm\\infty}[f(x)-(ax+b)]=0$: المستقيم $y=ax+b$ **مقارب مائل**.', fr: '$\\lim\\limits_{x\\to\\pm\\infty}[f(x)-(ax+b)]=0$ : la droite $y=ax+b$ est **asymptote oblique**.' },
              { ar: '$x=a$ محور تماثل ⟺ $f(2a-x)=f(x)$؛ $\\Omega(a;b)$ مركز تماثل ⟺ $f(2a-x)+f(x)=2b$.', fr: '$x=a$ axe de symétrie ⟺ $f(2a-x)=f(x)$ ; $\\Omega(a;b)$ centre de symétrie ⟺ $f(2a-x)+f(x)=2b$.' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'ادرس $f(x)=x+1+\\dfrac{1}{x}$ على $\\mathbb R^*$.', fr: 'Étudier $f(x)=x+1+\\dfrac{1}{x}$ sur $\\mathbb R^*$.' },
            steps: [
              { ar: '$f\'(x)=1-\\dfrac1{x^2}=\\dfrac{(x-1)(x+1)}{x^2}$: قيمة قصوى محلية $f(-1)=-1$ (قصوى) و $f(1)=3$ (دنيا).', fr: '$f\'(x)=1-\\dfrac1{x^2}=\\dfrac{(x-1)(x+1)}{x^2}$ : maximum local $f(-1)=-1$ et minimum local $f(1)=3$.' },
              { ar: '$x=0$ مقارب عمودي، و $y=x+1$ مقارب مائل لأن $f(x)-(x+1)=\\dfrac1x\\to0$.', fr: '$x=0$ est asymptote verticale, et $y=x+1$ asymptote oblique car $f(x)-(x+1)=\\dfrac1x\\to0$.' },
              { ar: '$\\Omega(0;1)$ مركز تماثل لأن $f(-x)+f(x)=2$.', fr: '$\\Omega(0;1)$ est centre de symétrie car $f(-x)+f(x)=2$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => x + 1 + 1 / x, label: 'f(x)=x+1+\\frac1x', color: 'brand', domain: [0.12, 6] },
              { fn: (x: number) => x + 1 + 1 / x, label: '', color: 'brand', domain: [-6, -0.12] },
              { fn: (x: number) => x + 1, label: 'y=x+1', color: 'saffron' },
            ],
            points: [{ x: 1, y: 3, label: '(1;3)' }, { x: -1, y: -1, label: '(-1;-1)' }],
            x: [-6, 6],
            y: [-7, 9],
            caption: { ar: 'المنحنى ومقاربه المائل $y=x+1$.', fr: 'La courbe et son asymptote oblique $y=x+1$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'مقارب مائل: $f(x)-(ax+b)\\to0$.', fr: 'Asymptote oblique : $f(x)-(ax+b)\\to0$.' },
      { ar: 'نقطة انعطاف: $f\'\'$ تنعدم وتغير إشارتها.', fr: 'Point d’inflexion : $f\'\'$ s’annule en changeant de signe.' },
    ],
  },
  exercises: [
    {
      id: '1bac-etu-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مقارب أفقي', fr: 'Asymptote horizontale' },
      statement: { ar: 'ما المقارب الأفقي لمنحنى $f(x)=\\dfrac{3x-1}{x+2}$ عند $+\\infty$؟', fr: 'Quelle est l’asymptote horizontale de $f(x)=\\dfrac{3x-1}{x+2}$ en $+\\infty$ ?' },
      question: { type: 'mcq', options: [{ ar: '$y=3$', fr: '$y=3$' }, { ar: '$y=-\\dfrac12$', fr: '$y=-\\dfrac12$' }, { ar: '$x=-2$', fr: '$x=-2$' }, { ar: '$y=0$', fr: '$y=0$' }], correct: 0 },
      hints: [{ ar: '$\\lim\\dfrac{3x}{x}$.', fr: '$\\lim\\dfrac{3x}{x}$.' }],
      solution: [{ ar: '$\\lim\\limits_{x\\to+\\infty}f(x)=3$: المقارب $y=3$.', fr: '$\\lim\\limits_{x\\to+\\infty}f(x)=3$ : asymptote $y=3$.' }],
    },
    {
      id: '1bac-etu-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'قيمة قصوى', fr: 'Extremum' },
      statement: { ar: 'ما القيمة القصوى المحلية للدالة $f(x)=x^3-3x$ عند $x=-1$؟', fr: 'Quel est le maximum local de $f(x)=x^3-3x$ en $x=-1$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$f\'(x)=3(x-1)(x+1)$.', fr: '$f\'(x)=3(x-1)(x+1)$.' }],
      solution: [{ ar: '$f(-1)=-1+3=2$.', fr: '$f(-1)=-1+3=2$.' }],
    },
    {
      id: '1bac-etu-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'نقطة انعطاف', fr: 'Point d’inflexion' },
      statement: { ar: 'ما أفصول نقطة انعطاف منحنى $f(x)=x^3-6x^2+1$؟', fr: 'Quelle est l’abscisse du point d’inflexion de $f(x)=x^3-6x^2+1$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$f\'\'(x)=6x-12$.', fr: '$f\'\'(x)=6x-12$.' }],
      solution: [{ ar: '$f\'\'$ تنعدم وتغير إشارتها في $x=2$.', fr: '$f\'\'$ s’annule en changeant de signe en $x=2$.' }],
    },
    {
      id: '1bac-etu-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مقارب مائل', fr: 'Asymptote oblique' },
      statement: { ar: 'ما المقارب المائل لمنحنى $f(x)=2x-3+\\dfrac{5}{x^2+1}$ عند $+\\infty$؟', fr: 'Quelle est l’asymptote oblique de $f(x)=2x-3+\\dfrac{5}{x^2+1}$ en $+\\infty$ ?' },
      question: { type: 'mcq', options: [{ ar: '$y=2x-3$', fr: '$y=2x-3$' }, { ar: '$y=2x+2$', fr: '$y=2x+2$' }, { ar: '$y=2x$', fr: '$y=2x$' }], correct: 0 },
      hints: [{ ar: '$\\dfrac5{x^2+1}\\to0$.', fr: '$\\dfrac5{x^2+1}\\to0$.' }],
      solution: [{ ar: '$f(x)-(2x-3)\\to0$: المقارب $y=2x-3$.', fr: '$f(x)-(2x-3)\\to0$ : asymptote $y=2x-3$.' }],
    },
  ],
};
