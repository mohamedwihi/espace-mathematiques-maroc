import type { LessonModule } from '@/types';

const lessonId = '2bac-exponentielles';

export const exponentielles: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'exp',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste', 'eco'],
    title: { ar: 'الدوال الأسية', fr: 'Les fonctions exponentielles' },
    summary: {
      ar: 'الدالة الأسية النبيرية كعكسية لـ $\\ln$، خاصياتها الجبرية، النهايات الأساسية، المشتقة $(e^u)\'=u\'e^u$، والدالة الأسية للأساس $a$.',
      fr: 'Exponentielle népérienne comme réciproque de $\\ln$, propriétés algébriques, limites de référence, dérivée $(e^u)\'=u\'e^u$, exponentielle de base $a$.',
    },
    objectives: [
      { ar: 'استعمال الخاصيات الجبرية للدالة الأسية.', fr: 'Utiliser les propriétés algébriques de l’exponentielle.' },
      { ar: 'حل معادلات ومتراجحات أسية.', fr: 'Résoudre des équations et inéquations exponentielles.' },
      { ar: 'حساب نهايات ومشتقات تتضمن $e^x$.', fr: 'Calculer des limites et dérivées avec $e^x$.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    featured: true,
    keywords: ['exponentielle', 'exp', 'e^x', 'دالة أسية', 'أسي'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'التعريف والخاصيات', fr: 'Définition et propriétés' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الدالة **الأسية النبيرية** $\\exp$ هي الدالة العكسية لـ $\\ln$، معرفة على $\\mathbb R$ بـ $e^x=y\\iff x=\\ln y$ ($y>0$). إذن $e^x>0$ و $\\ln(e^x)=x$ و $e^{\\ln y}=y$.',
              fr: 'L’**exponentielle népérienne** $\\exp$ est la réciproque de $\\ln$, définie sur $\\mathbb R$ par $e^x=y\\iff x=\\ln y$ ($y>0$). Ainsi $e^x>0$, $\\ln(e^x)=x$ et $e^{\\ln y}=y$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '$e^{a+b}=e^ae^b$ ؛ $e^{a-b}=\\dfrac{e^a}{e^b}$ ؛ $e^{-a}=\\dfrac1{e^a}$ ؛ $(e^a)^r=e^{ra}$ ؛ $e^a=e^b\\iff a=b$ ؛ $e^a<e^b\\iff a<b$.',
              fr: '$e^{a+b}=e^ae^b$ ; $e^{a-b}=\\dfrac{e^a}{e^b}$ ; $e^{-a}=\\dfrac1{e^a}$ ; $(e^a)^r=e^{ra}$ ; $e^a=e^b\\iff a=b$ ; $e^a<e^b\\iff a<b$.',
            },
          },
        ],
      },
      {
        id: 'etude',
        title: { ar: 'النهايات والمشتقة', fr: 'Limites et dérivée' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '$\\lim\\limits_{x\\to-\\infty}e^x=0$ ؛ $\\lim\\limits_{x\\to+\\infty}e^x=+\\infty$ ؛ $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}x=+\\infty$ ؛ $\\lim\\limits_{x\\to-\\infty}xe^x=0$ ؛ $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}x=1$.\n\n$(e^x)\'=e^x$ و $(e^{u})\'=u\'e^{u}$؛ إذن الدالة الأصلية لـ $u\'e^u$ هي $e^u$.\n\nلكل $a>0$: $a^x=e^{x\\ln a}$.',
              fr: '$\\lim\\limits_{x\\to-\\infty}e^x=0$ ; $\\lim\\limits_{x\\to+\\infty}e^x=+\\infty$ ; $\\lim\\limits_{x\\to+\\infty}\\dfrac{e^x}x=+\\infty$ ; $\\lim\\limits_{x\\to-\\infty}xe^x=0$ ; $\\lim\\limits_{x\\to0}\\dfrac{e^x-1}x=1$.\n\n$(e^x)\'=e^x$ et $(e^{u})\'=u\'e^{u}$ ; donc $u\'e^u$ a pour primitive $e^u$.\n\nPour $a>0$ : $a^x=e^{x\\ln a}$.',
            },
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.exp(x), label: 'y=e^x', color: 'brand', domain: [-5, 2.1] },
              { fn: (x: number) => Math.log(x), label: 'y=\\ln x', color: 'saffron', domain: [0.01, 8] },
              { fn: (x: number) => x, label: 'y=x', color: 'ink' },
            ],
            points: [{ x: 0, y: 1, label: '(0;1)' }, { x: 1, y: 0, label: '(1;0)' }],
            x: [-5, 8],
            y: [-4, 8],
            caption: { ar: 'منحنيا $e^x$ و $\\ln x$ متماثلان بالنسبة للمستقيم $y=x$.', fr: 'Les courbes de $e^x$ et $\\ln x$ sont symétriques par rapport à $y=x$.' },
          },
          {
            kind: 'example',
            statement: { ar: 'حل في $\\mathbb R$: $e^{2x}-3e^x+2=0$.', fr: 'Résoudre dans $\\mathbb R$ : $e^{2x}-3e^x+2=0$.' },
            steps: [
              { ar: 'نضع $X=e^x>0$: $X^2-3X+2=0$، إذن $X=1$ أو $X=2$.', fr: 'On pose $X=e^x>0$ : $X^2-3X+2=0$, donc $X=1$ ou $X=2$.' },
              { ar: '$x=0$ أو $x=\\ln2$.', fr: '$x=0$ ou $x=\\ln2$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$e^{a+b}=e^ae^b$ و $(e^u)\'=u\'e^u$.', fr: '$e^{a+b}=e^ae^b$ et $(e^u)\'=u\'e^u$.' },
      { ar: '$\\dfrac{e^x}x\\to+\\infty$ عند $+\\infty$.', fr: '$\\dfrac{e^x}x\\to+\\infty$ en $+\\infty$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-exp-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'معادلة', fr: 'Équation' },
      statement: { ar: 'حل $e^{x-3}=1$.', fr: 'Résoudre $e^{x-3}=1$.' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$e^{x-3}=e^0$.', fr: '$e^{x-3}=e^0$.' }],
      solution: [{ ar: '$x-3=0$ إذن $x=3$.', fr: '$x-3=0$ donc $x=3$.' }],
    },
    {
      id: '2bac-exp-02',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'تبسيط', fr: 'Simplification' },
      statement: { ar: 'بسّط $e^{\\ln5}+\\ln(e^2)$.', fr: 'Simplifier $e^{\\ln5}+\\ln(e^2)$.' },
      question: { type: 'numeric', answer: 7 },
      hints: [{ ar: '$e^{\\ln5}=5$ و $\\ln e^2=2$.', fr: '$e^{\\ln5}=5$ et $\\ln e^2=2$.' }],
      solution: [{ ar: '$5+2=7$.', fr: '$5+2=7$.' }],
    },
    {
      id: '2bac-exp-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مشتقة', fr: 'Dérivée' },
      statement: { ar: '$f(x)=xe^{x}$. احسب $f\'(0)$.', fr: '$f(x)=xe^{x}$. Calculer $f\'(0)$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$f\'(x)=(x+1)e^x$.', fr: '$f\'(x)=(x+1)e^x$.' }],
      solution: [{ ar: '$f\'(0)=1$.', fr: '$f\'(0)=1$.' }],
    },
    {
      id: '2bac-exp-04',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'نهاية', fr: 'Limite' },
      statement: { ar: 'ما $\\lim\\limits_{x\\to+\\infty}(x+1)e^{-x}$؟', fr: 'Que vaut $\\lim\\limits_{x\\to+\\infty}(x+1)e^{-x}$ ?' },
      question: { type: 'numeric', answer: 0 },
      hints: [{ ar: '$\\dfrac{x+1}{e^x}$.', fr: '$\\dfrac{x+1}{e^x}$.' }],
      solution: [{ ar: '$\\dfrac{x}{e^x}\\to0$ و $\\dfrac1{e^x}\\to0$ إذن النهاية $0$.', fr: '$\\dfrac{x}{e^x}\\to0$ et $\\dfrac1{e^x}\\to0$ donc la limite vaut $0$.' }],
    },
  ],
};
