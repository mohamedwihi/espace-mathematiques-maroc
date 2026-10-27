import type { LessonModule } from '@/types';

const lessonId = '2bac-derivabilite-etude';

export const derivabiliteEtude: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'derivation',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'الاشتقاق ودراسة الدوال', fr: 'Dérivabilité et étude des fonctions' },
    summary: {
      ar: 'الاشتقاق على اليمين وعلى اليسار، نصف المماس، مشتقة المركب والدالة العكسية، والفروع اللانهائية (الاتجاهات المقاربة).',
      fr: 'Dérivabilité à droite et à gauche, demi-tangente, dérivée d’une composée et d’une réciproque, branches infinies (directions asymptotiques).',
    },
    objectives: [
      { ar: 'دراسة قابلية الاشتقاق على اليمين وعلى اليسار وتأويلها.', fr: 'Étudier la dérivabilité à droite et à gauche et l’interpréter.' },
      { ar: 'حساب مشتقة دالة مركبة أو عكسية.', fr: 'Dériver une composée ou une réciproque.' },
      { ar: 'دراسة الفروع اللانهائية.', fr: 'Étudier les branches infinies.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['dérivabilité', 'demi-tangente', 'réciproque', 'branche parabolique', 'اشتقاق', 'نصف مماس', 'فرع شلجمي'],
    sections: [
      {
        id: 'derivabilite',
        title: { ar: 'قابلية الاشتقاق', fr: 'Dérivabilité' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '$f$ قابلة للاشتقاق على اليمين في $a$ إذا كانت $\\lim\\limits_{x\\to a^+}\\dfrac{f(x)-f(a)}{x-a}=\\ell$ منتهية؛ يقبل $C_f$ نصف مماس معامله الموجه $\\ell$. إذا كانت هذه النهاية $\\pm\\infty$، يقبل $C_f$ نصف مماس **عمودياً**.',
              fr: '$f$ est dérivable à droite en $a$ si $\\lim\\limits_{x\\to a^+}\\dfrac{f(x)-f(a)}{x-a}=\\ell$ est finie ; $C_f$ admet une demi-tangente de pente $\\ell$. Si la limite vaut $\\pm\\infty$, $C_f$ admet une demi-tangente **verticale**.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• $(v\\circ u)\'(x)=u\'(x)\\times v\'(u(x))$.\n\n• إذا كانت $f$ قابلة للاشتقاق في $a$ و $f\'(a)\\neq0$، فإن $f^{-1}$ قابلة للاشتقاق في $b=f(a)$ و $(f^{-1})\'(b)=\\dfrac1{f\'(a)}$.\n\n• $(\\sqrt[n]u)\'=\\dfrac{u\'}{n\\sqrt[n]{u^{n-1}}}$.',
              fr: '• $(v\\circ u)\'(x)=u\'(x)\\times v\'(u(x))$.\n\n• Si $f$ est dérivable en $a$ et $f\'(a)\\neq0$, alors $f^{-1}$ est dérivable en $b=f(a)$ et $(f^{-1})\'(b)=\\dfrac1{f\'(a)}$.\n\n• $(\\sqrt[n]u)\'=\\dfrac{u\'}{n\\sqrt[n]{u^{n-1}}}$.',
            },
          },
        ],
      },
      {
        id: 'branches',
        title: { ar: 'الفروع اللانهائية', fr: 'Branches infinies' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'إذا كان $\\lim\\limits_{x\\to+\\infty}f(x)=\\pm\\infty$، نحسب $\\lim\\dfrac{f(x)}x$:\n\n• $\\pm\\infty$: فرع شلجمي في اتجاه محور الأراتيب.\n\n• $0$: فرع شلجمي في اتجاه محور الأفاصيل.\n\n• $a\\neq0$: نحسب $\\lim(f(x)-ax)$؛ إذا كانت $b$ منتهية فالمستقيم $y=ax+b$ مقارب مائل، وإذا كانت $\\pm\\infty$ ففرع شلجمي في اتجاه المستقيم $y=ax$.',
              fr: 'Si $\\lim\\limits_{x\\to+\\infty}f(x)=\\pm\\infty$, on calcule $\\lim\\dfrac{f(x)}x$ :\n\n• $\\pm\\infty$ : branche parabolique de direction l’axe des ordonnées ;\n\n• $0$ : branche parabolique de direction l’axe des abscisses ;\n\n• $a\\neq0$ : on calcule $\\lim(f(x)-ax)$ ; si elle vaut $b$ finie, $y=ax+b$ est asymptote oblique ; si elle vaut $\\pm\\infty$, branche parabolique de direction $y=ax$.',
            },
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.sqrt(x), label: 'y=\\sqrt x', color: 'brand', domain: [0, 9] },
              { fn: (x: number) => x * x / 4, label: 'y=\\frac{x^2}{4}', color: 'saffron', domain: [0, 6] },
            ],
            x: [-0.5, 9],
            y: [-0.5, 9],
            caption: {
              ar: '$\\sqrt x$: نصف مماس عمودي في $0$ وفرع شلجمي في اتجاه محور الأفاصيل؛ $\\dfrac{x^2}4$: فرع شلجمي في اتجاه محور الأراتيب.',
              fr: '$\\sqrt x$ : demi-tangente verticale en $0$ et branche parabolique de direction $(Ox)$ ; $\\dfrac{x^2}4$ : branche parabolique de direction $(Oy)$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$(f^{-1})\'(f(a))=\\dfrac1{f\'(a)}$.', fr: '$(f^{-1})\'(f(a))=\\dfrac1{f\'(a)}$.' },
      { ar: 'الفروع اللانهائية: ندرس $\\dfrac{f(x)}x$ ثم $f(x)-ax$.', fr: 'Branches infinies : étudier $\\dfrac{f(x)}x$ puis $f(x)-ax$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-der-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مشتقة مركب', fr: 'Dérivée d’une composée' },
      statement: { ar: '$f(x)=(2x+1)^5$. احسب $f\'(0)$.', fr: '$f(x)=(2x+1)^5$. Calculer $f\'(0)$.' },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: '$f\'(x)=10(2x+1)^4$.', fr: '$f\'(x)=10(2x+1)^4$.' }],
      solution: [{ ar: '$f\'(0)=10$.', fr: '$f\'(0)=10$.' }],
    },
    {
      id: '2bac-der-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مشتقة العكسية', fr: 'Dérivée de la réciproque' },
      statement: { ar: '$f(x)=x^3+x$ و $f(1)=2$. احسب $(f^{-1})\'(2)$.', fr: '$f(x)=x^3+x$ et $f(1)=2$. Calculer $(f^{-1})\'(2)$.' },
      question: { type: 'numeric', answer: 0.25, tolerance: 1e-6 },
      hints: [{ ar: '$f\'(1)=4$.', fr: '$f\'(1)=4$.' }],
      solution: [{ ar: '$(f^{-1})\'(2)=\\dfrac1{f\'(1)}=\\dfrac14$.', fr: '$(f^{-1})\'(2)=\\dfrac1{f\'(1)}=\\dfrac14$.' }],
    },
    {
      id: '2bac-der-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'فرع لانهائي', fr: 'Branche infinie' },
      statement: { ar: 'ما طبيعة الفرع اللانهائي لمنحنى $f(x)=x+\\sqrt x$ بجوار $+\\infty$؟', fr: 'Quelle est la nature de la branche infinie de $f(x)=x+\\sqrt x$ en $+\\infty$ ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: 'فرع شلجمي في اتجاه $y=x$', fr: 'Branche parabolique de direction $y=x$' },
          { ar: 'مقارب مائل $y=x$', fr: 'Asymptote oblique $y=x$' },
          { ar: 'فرع شلجمي في اتجاه محور الأراتيب', fr: 'Branche parabolique de direction $(Oy)$' },
        ],
        correct: 0,
      },
      hints: [{ ar: '$\\dfrac{f(x)}x\\to1$ و $f(x)-x=\\sqrt x$.', fr: '$\\dfrac{f(x)}x\\to1$ et $f(x)-x=\\sqrt x$.' }],
      solution: [{ ar: '$f(x)-x\\to+\\infty$: فرع شلجمي في اتجاه $y=x$.', fr: '$f(x)-x\\to+\\infty$ : branche parabolique de direction $y=x$.' }],
    },
    {
      id: '2bac-der-04',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'نصف مماس', fr: 'Demi-tangente' },
      statement: { ar: 'ما طبيعة نصف المماس لمنحنى $f(x)=\\sqrt{x}$ في $0$؟', fr: 'Quelle est la demi-tangente à la courbe de $f(x)=\\sqrt{x}$ en $0$ ?' },
      question: { type: 'mcq', options: [{ ar: 'عمودي', fr: 'Verticale' }, { ar: 'أفقي', fr: 'Horizontale' }, { ar: 'معامله الموجه $1$', fr: 'De pente $1$' }], correct: 0 },
      hints: [{ ar: '$\\dfrac{\\sqrt x}{x}=\\dfrac1{\\sqrt x}\\to+\\infty$.', fr: '$\\dfrac{\\sqrt x}{x}=\\dfrac1{\\sqrt x}\\to+\\infty$.' }],
      solution: [{ ar: 'النهاية $+\\infty$: نصف مماس عمودي.', fr: 'Limite $+\\infty$ : demi-tangente verticale.' }],
    },
  ],
};
