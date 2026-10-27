import type { LessonModule } from '@/types';

const lessonId = '1bac-suites';

export const suites: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'sequences',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'المتتاليات العددية', fr: 'Suites numériques' },
    summary: {
      ar: 'المتتالية المكبورة والمصغورة، رتابة متتالية، المتتاليات الحسابية والهندسية: الحد العام ومجموع حدود متتابعة.',
      fr: 'Suite majorée, minorée, monotonie, suites arithmétiques et géométriques : terme général et somme de termes consécutifs.',
    },
    objectives: [
      { ar: 'دراسة رتابة متتالية.', fr: 'Étudier la monotonie d’une suite.' },
      { ar: 'التعرف على متتالية حسابية أو هندسية.', fr: 'Reconnaître une suite arithmétique ou géométrique.' },
      { ar: 'حساب مجموع حدود متتابعة.', fr: 'Calculer une somme de termes consécutifs.' },
    ],
    durationMinutes: 50,
    reviewed: false,
    keywords: ['suite', 'arithmétique', 'géométrique', 'raison', 'somme', 'monotonie', 'متتالية', 'حسابية', 'هندسية', 'أساس'],
    sections: [
      {
        id: 'generalites',
        title: { ar: 'عموميات', fr: 'Généralités' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• $(u_n)$ **تزايدية** إذا كان $u_{n+1}-u_n\\ge0$ لكل $n$، و**تناقصية** إذا كان $u_{n+1}-u_n\\le0$.\n\n• $(u_n)$ **مكبورة** إذا وجد $M$ حيث $u_n\\le M$ لكل $n$، و**مصغورة** إذا وجد $m$ حيث $u_n\\ge m$.\n\n• يمكن تعريف متتالية بصيغة صريحة $u_n=f(n)$ أو بعلاقة ترجعية $u_{n+1}=f(u_n)$.',
              fr: '• $(u_n)$ est **croissante** si $u_{n+1}-u_n\\ge0$ pour tout $n$, **décroissante** si $u_{n+1}-u_n\\le0$.\n\n• $(u_n)$ est **majorée** s’il existe $M$ tel que $u_n\\le M$ pour tout $n$, **minorée** s’il existe $m$ tel que $u_n\\ge m$.\n\n• Une suite peut être définie explicitement $u_n=f(n)$ ou par récurrence $u_{n+1}=f(u_n)$.',
            },
          },
        ],
      },
      {
        id: 'arithmetique',
        title: { ar: 'المتتالية الحسابية', fr: 'Suite arithmétique' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'أساسها $r$', fr: 'De raison $r$' },
            content: {
              ar: '$u_{n+1}=u_n+r$ ؛ $u_n=u_p+(n-p)r$ ؛ $u_p+\\dots+u_n=\\dfrac{(n-p+1)(u_p+u_n)}{2}$.',
              fr: '$u_{n+1}=u_n+r$ ; $u_n=u_p+(n-p)r$ ; $u_p+\\dots+u_n=\\dfrac{(n-p+1)(u_p+u_n)}{2}$.',
            },
          },
        ],
      },
      {
        id: 'geometrique',
        title: { ar: 'المتتالية الهندسية', fr: 'Suite géométrique' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'أساسها $q\\neq1$', fr: 'De raison $q\\neq1$' },
            content: {
              ar: '$u_{n+1}=q\\,u_n$ ؛ $u_n=u_p\\,q^{n-p}$ ؛ $u_p+\\dots+u_n=u_p\\times\\dfrac{1-q^{n-p+1}}{1-q}$.',
              fr: '$u_{n+1}=q\\,u_n$ ; $u_n=u_p\\,q^{n-p}$ ; $u_p+\\dots+u_n=u_p\\times\\dfrac{1-q^{n-p+1}}{1-q}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$u_0=3$ و $q=2$. احسب $u_4$ و $S=u_0+\\dots+u_4$.', fr: '$u_0=3$ et $q=2$. Calculer $u_4$ et $S=u_0+\\dots+u_4$.' },
            steps: [
              { ar: '$u_4=3\\times2^4=48$.', fr: '$u_4=3\\times2^4=48$.' },
              { ar: '$S=3\\times\\dfrac{1-2^5}{1-2}=3\\times31=93$.', fr: '$S=3\\times\\dfrac{1-2^5}{1-2}=3\\times31=93$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [],
            points: [0, 1, 2, 3, 4, 5].map((n) => ({ x: n, y: 8 * 0.5 ** n })),
            x: [-0.5, 6],
            y: [-0.5, 9],
            caption: { ar: 'حدود المتتالية الهندسية $u_n=8\\times\\left(\\dfrac12\\right)^n$: متتالية تناقصية.', fr: 'Termes de la suite géométrique $u_n=8\\times\\left(\\dfrac12\\right)^n$ : suite décroissante.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'حسابية: $u_n=u_0+nr$؛ هندسية: $u_n=u_0q^n$.', fr: 'Arithmétique : $u_n=u_0+nr$ ; géométrique : $u_n=u_0q^n$.' },
      { ar: 'الرتابة: ندرس إشارة $u_{n+1}-u_n$.', fr: 'Monotonie : signe de $u_{n+1}-u_n$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-sui-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'حد عام حسابي', fr: 'Terme d’une suite arithmétique' },
      statement: { ar: '$(u_n)$ حسابية حيث $u_0=5$ و $r=3$. احسب $u_{10}$.', fr: '$(u_n)$ arithmétique avec $u_0=5$ et $r=3$. Calculer $u_{10}$.' },
      question: { type: 'numeric', answer: 35 },
      hints: [{ ar: '$u_n=u_0+nr$.', fr: '$u_n=u_0+nr$.' }],
      solution: [{ ar: '$u_{10}=5+30=35$.', fr: '$u_{10}=5+30=35$.' }],
    },
    {
      id: '1bac-sui-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'حد عام هندسي', fr: 'Terme d’une suite géométrique' },
      statement: { ar: '$(v_n)$ هندسية حيث $v_1=2$ و $q=3$. احسب $v_4$.', fr: '$(v_n)$ géométrique avec $v_1=2$ et $q=3$. Calculer $v_4$.' },
      question: { type: 'numeric', answer: 54 },
      hints: [{ ar: '$v_4=v_1q^3$.', fr: '$v_4=v_1q^3$.' }],
      solution: [{ ar: '$v_4=2\\times27=54$.', fr: '$v_4=2\\times27=54$.' }],
    },
    {
      id: '1bac-sui-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'مجموع', fr: 'Somme' },
      statement: { ar: 'احسب $S=1+3+5+\\dots+19$.', fr: 'Calculer $S=1+3+5+\\dots+19$.' },
      question: { type: 'numeric', answer: 100 },
      hints: [{ ar: 'متتالية حسابية من $10$ حدود.', fr: 'Suite arithmétique de $10$ termes.' }],
      solution: [{ ar: '$S=\\dfrac{10\\times(1+19)}2=100$.', fr: '$S=\\dfrac{10\\times(1+19)}2=100$.' }],
    },
    {
      id: '1bac-sui-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'رتابة', fr: 'Monotonie' },
      statement: { ar: 'ما رتابة المتتالية $u_n=\\dfrac{n}{n+1}$؟', fr: 'Quelle est la monotonie de $u_n=\\dfrac{n}{n+1}$ ?' },
      question: { type: 'mcq', options: [{ ar: 'تزايدية', fr: 'Croissante' }, { ar: 'تناقصية', fr: 'Décroissante' }, { ar: 'ثابتة', fr: 'Constante' }], correct: 0 },
      hints: [{ ar: '$u_{n+1}-u_n=\\dfrac{1}{(n+1)(n+2)}$.', fr: '$u_{n+1}-u_n=\\dfrac{1}{(n+1)(n+2)}$.' }],
      solution: [{ ar: '$u_{n+1}-u_n>0$، إذن $(u_n)$ تزايدية.', fr: '$u_{n+1}-u_n>0$, donc $(u_n)$ est croissante.' }],
    },
  ],
};
