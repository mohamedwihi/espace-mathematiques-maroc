import type { LessonModule } from '@/types';

const lessonId = '2bac-suites';

export const suites: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'sequences',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'المتتاليات العددية', fr: 'Suites numériques' },
    summary: {
      ar: 'نهاية متتالية، المتتاليات المتقاربة، مصاديق التقارب (الرتابة والتحديد)، نهاية $q^n$، والمتتاليات من الشكل $u_{n+1}=f(u_n)$.',
      fr: 'Limite d’une suite, suites convergentes, critères de convergence (monotonie et bornes), limite de $q^n$, suites $u_{n+1}=f(u_n)$.',
    },
    objectives: [
      { ar: 'حساب نهاية متتالية.', fr: 'Calculer la limite d’une suite.' },
      { ar: 'إثبات تقارب متتالية رتيبة ومحدودة.', fr: 'Montrer qu’une suite monotone bornée converge.' },
      { ar: 'دراسة متتالية ترجعية.', fr: 'Étudier une suite récurrente.' },
    ],
    durationMinutes: 50,
    reviewed: false,
    keywords: ['suite', 'convergente', 'limite', 'récurrente', 'monotone', 'متتالية', 'متقاربة', 'نهاية', 'ترجعية'],
    sections: [
      {
        id: 'limites',
        title: { ar: 'نهاية متتالية', fr: 'Limite d’une suite' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• نهاية $q^n$: إذا كان $q>1$ فهي $+\\infty$؛ إذا كان $-1<q<1$ فهي $0$؛ إذا كان $q=1$ فهي $1$؛ وإذا كان $q\\le-1$ فليس لها نهاية.\n\n• $\\lim n^p=+\\infty$ و $\\lim\\dfrac1{n^p}=0$ ($p\\in\\mathbb N^*$).\n\n• إذا كان $|u_n-\\ell|\\le v_n$ و $\\lim v_n=0$ فإن $\\lim u_n=\\ell$.',
              fr: '• Limite de $q^n$ : $+\\infty$ si $q>1$ ; $0$ si $-1<q<1$ ; $1$ si $q=1$ ; pas de limite si $q\\le-1$.\n\n• $\\lim n^p=+\\infty$ et $\\lim\\dfrac1{n^p}=0$ ($p\\in\\mathbb N^*$).\n\n• Si $|u_n-\\ell|\\le v_n$ et $\\lim v_n=0$, alors $\\lim u_n=\\ell$.',
            },
          },
          {
            kind: 'theorem',
            content: {
              ar: 'كل متتالية تزايدية ومكبورة متقاربة، وكل متتالية تناقصية ومصغورة متقاربة.',
              fr: 'Toute suite croissante et majorée converge ; toute suite décroissante et minorée converge.',
            },
          },
        ],
      },
      {
        id: 'recurrentes',
        title: { ar: 'المتتاليات $u_{n+1}=f(u_n)$', fr: 'Suites $u_{n+1}=f(u_n)$' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'إذا كانت $f$ متصلة على مجال $I$ و $f(I)\\subset I$ و $u_0\\in I$، وكانت $(u_n)$ متقاربة نحو $\\ell\\in I$، فإن $\\ell$ حل للمعادلة $f(x)=x$.',
              fr: 'Si $f$ est continue sur un intervalle $I$, $f(I)\\subset I$, $u_0\\in I$, et si $(u_n)$ converge vers $\\ell\\in I$, alors $\\ell$ est solution de $f(x)=x$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$u_0=0$ و $u_{n+1}=\\sqrt{u_n+2}$. حدد نهاية $(u_n)$ علماً أنها متقاربة و $u_n\\in[0;2]$.', fr: '$u_0=0$ et $u_{n+1}=\\sqrt{u_n+2}$. Déterminer la limite de $(u_n)$ sachant qu’elle converge et $u_n\\in[0;2]$.' },
            steps: [
              { ar: '$\\ell=\\sqrt{\\ell+2}\\iff\\ell^2-\\ell-2=0$ مع $\\ell\\ge0$.', fr: '$\\ell=\\sqrt{\\ell+2}\\iff\\ell^2-\\ell-2=0$ avec $\\ell\\ge0$.' },
              { ar: '$(\\ell-2)(\\ell+1)=0$ إذن $\\ell=2$.', fr: '$(\\ell-2)(\\ell+1)=0$ donc $\\ell=2$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.sqrt(x + 2), label: 'y=\\sqrt{x+2}', color: 'brand', domain: [-2, 3] },
              { fn: (x: number) => x, label: 'y=x', color: 'saffron' },
            ],
            points: [
              { x: 0, y: 0, label: 'u_0' },
              { x: Math.SQRT2, y: 0, label: 'u_1' },
              { x: 2, y: 2, label: 'ℓ' },
            ],
            lines: [
              { from: [0, 0], to: [0, Math.SQRT2], dashed: true },
              { from: [0, Math.SQRT2], to: [Math.SQRT2, Math.SQRT2], dashed: true },
              { from: [Math.SQRT2, Math.SQRT2], to: [Math.SQRT2, Math.sqrt(Math.SQRT2 + 2)], dashed: true },
            ],
            x: [-0.5, 3],
            y: [-0.5, 3],
            caption: { ar: 'تمثيل الحدود الأولى: المتتالية تتقارب نحو نقطة تقاطع المنحنى مع $y=x$.', fr: 'Représentation des premiers termes : la suite converge vers l’intersection de la courbe avec $y=x$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'رتيبة ومحدودة ⟹ متقاربة.', fr: 'Monotone et bornée ⟹ convergente.' },
      { ar: 'نهاية $u_{n+1}=f(u_n)$ تحقق $f(\\ell)=\\ell$.', fr: 'La limite de $u_{n+1}=f(u_n)$ vérifie $f(\\ell)=\\ell$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-sui-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'نهاية $q^n$', fr: 'Limite de $q^n$' },
      statement: { ar: 'ما $\\lim\\limits_{n\\to+\\infty}5\\left(\\dfrac23\\right)^n+1$؟', fr: 'Que vaut $\\lim\\limits_{n\\to+\\infty}5\\left(\\dfrac23\\right)^n+1$ ?' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$-1<\\dfrac23<1$.', fr: '$-1<\\dfrac23<1$.' }],
      solution: [{ ar: '$\\left(\\dfrac23\\right)^n\\to0$، إذن النهاية $1$.', fr: '$\\left(\\dfrac23\\right)^n\\to0$, donc la limite vaut $1$.' }],
    },
    {
      id: '2bac-sui-02',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'متتالية جذرية', fr: 'Suite rationnelle' },
      statement: { ar: 'احسب $\\lim\\dfrac{3n+2}{n+5}$.', fr: 'Calculer $\\lim\\dfrac{3n+2}{n+5}$.' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\dfrac{3n}{n}$.', fr: '$\\dfrac{3n}{n}$.' }],
      solution: [{ ar: 'النهاية $3$.', fr: 'La limite vaut $3$.' }],
    },
    {
      id: '2bac-sui-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'متتالية ترجعية', fr: 'Suite récurrente' },
      statement: { ar: '$u_{n+1}=\\dfrac12u_n+3$ متقاربة. ما نهايتها؟', fr: '$u_{n+1}=\\dfrac12u_n+3$ converge. Quelle est sa limite ?' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: '$\\ell=\\dfrac12\\ell+3$.', fr: '$\\ell=\\dfrac12\\ell+3$.' }],
      solution: [{ ar: '$\\dfrac12\\ell=3$ إذن $\\ell=6$.', fr: '$\\dfrac12\\ell=3$ donc $\\ell=6$.' }],
    },
    {
      id: '2bac-sui-04',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مصداق التقارب', fr: 'Critère de convergence' },
      statement: { ar: '$(u_n)$ تناقصية و $u_n\\ge1$ لكل $n$. ماذا نستنتج؟', fr: '$(u_n)$ est décroissante et $u_n\\ge1$ pour tout $n$. Que peut-on conclure ?' },
      question: { type: 'mcq', options: [{ ar: '$(u_n)$ متقاربة', fr: '$(u_n)$ converge' }, { ar: '$\\lim u_n=1$ بالضرورة', fr: '$\\lim u_n=1$ nécessairement' }, { ar: '$\\lim u_n=-\\infty$', fr: '$\\lim u_n=-\\infty$' }], correct: 0 },
      hints: [{ ar: 'تناقصية ومصغورة.', fr: 'Décroissante et minorée.' }],
      solution: [{ ar: '$(u_n)$ متقاربة ونهايتها $\\ge1$، وليست بالضرورة $1$.', fr: '$(u_n)$ converge vers une limite $\\ge1$, pas forcément $1$.' }],
    },
  ],
};
