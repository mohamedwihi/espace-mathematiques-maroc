import type { LessonModule } from '@/types';

const lessonId = '2bac-logarithmes';

export const logarithmes: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'log',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste', 'eco'],
    title: { ar: 'الدوال اللوغاريتمية', fr: 'Les fonctions logarithmes' },
    summary: {
      ar: 'دالة اللوغاريتم النبيري: التعريف، الخاصيات الجبرية، النهايات الأساسية، الدراسة والمنحنى، المشتقة $\\dfrac{u\'}{u}$، واللوغاريتم للأساس $a$.',
      fr: 'Logarithme népérien : définition, propriétés algébriques, limites de référence, étude et courbe, dérivée $\\dfrac{u\'}{u}$, logarithme de base $a$.',
    },
    objectives: [
      { ar: 'استعمال الخاصيات الجبرية للوغاريتم.', fr: 'Utiliser les propriétés algébriques du logarithme.' },
      { ar: 'حل معادلات ومتراجحات لوغاريتمية.', fr: 'Résoudre des équations et inéquations avec $\\ln$.' },
      { ar: 'حساب نهايات ومشتقات تتضمن $\\ln$.', fr: 'Calculer des limites et des dérivées avec $\\ln$.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    featured: true,
    keywords: ['logarithme', 'ln', 'népérien', 'log', 'لوغاريتم', 'نبيري'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'التعريف والخاصيات', fr: 'Définition et propriétés' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'دالة **اللوغاريتم النبيري** $\\ln$ هي الدالة الأصلية للدالة $x\\mapsto\\dfrac1x$ على $]0;+\\infty[$ التي تنعدم في $1$. إذن $\\ln1=0$ و $(\\ln x)\'=\\dfrac1x$، والعدد $e\\approx2{,}718$ يحقق $\\ln e=1$.',
              fr: 'Le **logarithme népérien** $\\ln$ est la primitive de $x\\mapsto\\dfrac1x$ sur $]0;+\\infty[$ qui s’annule en $1$. Ainsi $\\ln1=0$, $(\\ln x)\'=\\dfrac1x$, et le nombre $e\\approx2{,}718$ vérifie $\\ln e=1$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'لكل $a>0$ و $b>0$ و $r\\in\\mathbb Q$:\n\n$\\ln(ab)=\\ln a+\\ln b$ ؛ $\\ln\\dfrac ab=\\ln a-\\ln b$ ؛ $\\ln\\dfrac1a=-\\ln a$ ؛ $\\ln a^r=r\\ln a$.\n\n$\\ln a=\\ln b\\iff a=b$ ؛ $\\ln a<\\ln b\\iff a<b$.',
              fr: 'Pour $a>0$, $b>0$ et $r\\in\\mathbb Q$ :\n\n$\\ln(ab)=\\ln a+\\ln b$ ; $\\ln\\dfrac ab=\\ln a-\\ln b$ ; $\\ln\\dfrac1a=-\\ln a$ ; $\\ln a^r=r\\ln a$.\n\n$\\ln a=\\ln b\\iff a=b$ ; $\\ln a<\\ln b\\iff a<b$.',
            },
          },
        ],
      },
      {
        id: 'etude',
        title: { ar: 'النهايات والدراسة', fr: 'Limites et étude' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '$\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ ؛ $\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$ ؛ $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}x=0$ ؛ $\\lim\\limits_{x\\to0^+}x\\ln x=0$ ؛ $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}x=1$.',
              fr: '$\\lim\\limits_{x\\to0^+}\\ln x=-\\infty$ ; $\\lim\\limits_{x\\to+\\infty}\\ln x=+\\infty$ ; $\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln x}x=0$ ; $\\lim\\limits_{x\\to0^+}x\\ln x=0$ ; $\\lim\\limits_{x\\to0}\\dfrac{\\ln(1+x)}x=1$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المشتقة والأساس $a$', fr: 'Dérivée et base $a$' },
            content: {
              ar: '• إذا كانت $u$ قابلة للاشتقاق ولا تنعدم: $(\\ln|u|)\'=\\dfrac{u\'}{u}$، إذن $\\dfrac{u\'}u$ لها الدالة الأصلية $\\ln|u|$.\n\n• $\\log_a x=\\dfrac{\\ln x}{\\ln a}$ ($a>0$، $a\\neq1$)؛ و $\\log x=\\log_{10}x$.',
              fr: '• Si $u$ est dérivable et ne s’annule pas : $(\\ln|u|)\'=\\dfrac{u\'}{u}$ ; donc $\\dfrac{u\'}u$ a pour primitive $\\ln|u|$.\n\n• $\\log_a x=\\dfrac{\\ln x}{\\ln a}$ ($a>0$, $a\\neq1$) ; et $\\log x=\\log_{10}x$.',
            },
          },
          {
            kind: 'graph',
            functions: [{ fn: (x: number) => Math.log(x), label: 'y=\\ln x', color: 'brand', domain: [0.02, 8] }],
            points: [{ x: 1, y: 0, label: '(1;0)' }, { x: Math.E, y: 1, label: '(e;1)' }],
            x: [-0.5, 8],
            y: [-3, 2.5],
            caption: { ar: '$\\ln$ تزايدية قطعاً، ومحور الأراتيب مقارب عمودي، وفرع شلجمي في اتجاه محور الأفاصيل.', fr: '$\\ln$ est strictement croissante ; l’axe des ordonnées est asymptote verticale ; branche parabolique de direction $(Ox)$.' },
          },
          {
            kind: 'example',
            statement: { ar: 'حل في $\\mathbb R$: $\\ln(x-1)+\\ln(x+1)=\\ln3$.', fr: 'Résoudre dans $\\mathbb R$ : $\\ln(x-1)+\\ln(x+1)=\\ln3$.' },
            steps: [
              { ar: 'الشرط: $x>1$. المعادلة تكافئ $x^2-1=3$.', fr: 'Condition : $x>1$. L’équation équivaut à $x^2-1=3$.' },
              { ar: '$x=2$ أو $x=-2$، ومع الشرط: $S=\\{2\\}$.', fr: '$x=2$ ou $x=-2$ ; avec la condition : $S=\\{2\\}$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\ln(ab)=\\ln a+\\ln b$ و $\\ln a^r=r\\ln a$.', fr: '$\\ln(ab)=\\ln a+\\ln b$ et $\\ln a^r=r\\ln a$.' },
      { ar: '$\\dfrac{\\ln x}x\\to0$ عند $+\\infty$.', fr: '$\\dfrac{\\ln x}x\\to0$ en $+\\infty$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-ln-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'تبسيط', fr: 'Simplification' },
      statement: { ar: 'بسّط $\\ln8-\\ln2$ على شكل $k\\ln2$. ما قيمة $k$؟', fr: 'Écrire $\\ln8-\\ln2$ sous la forme $k\\ln2$. Que vaut $k$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$\\ln\\dfrac82=\\ln4$.', fr: '$\\ln\\dfrac82=\\ln4$.' }],
      solution: [{ ar: '$\\ln4=2\\ln2$، إذن $k=2$.', fr: '$\\ln4=2\\ln2$, donc $k=2$.' }],
    },
    {
      id: '2bac-ln-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'معادلة', fr: 'Équation' },
      statement: { ar: 'حل المعادلة $\\ln(2x-1)=0$.', fr: 'Résoudre $\\ln(2x-1)=0$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$2x-1=1$.', fr: '$2x-1=1$.' }],
      solution: [{ ar: '$x=1$ (ويحقق $2x-1>0$).', fr: '$x=1$ (et $2x-1>0$).' }],
    },
    {
      id: '2bac-ln-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مشتقة', fr: 'Dérivée' },
      statement: { ar: '$f(x)=\\ln(x^2+3)$. احسب $f\'(1)$.', fr: '$f(x)=\\ln(x^2+3)$. Calculer $f\'(1)$.' },
      question: { type: 'numeric', answer: 0.5, tolerance: 1e-6 },
      hints: [{ ar: '$f\'(x)=\\dfrac{2x}{x^2+3}$.', fr: '$f\'(x)=\\dfrac{2x}{x^2+3}$.' }],
      solution: [{ ar: '$f\'(1)=\\dfrac24=\\dfrac12$.', fr: '$f\'(1)=\\dfrac24=\\dfrac12$.' }],
    },
    {
      id: '2bac-ln-04',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'نهاية', fr: 'Limite' },
      statement: { ar: 'ما $\\lim\\limits_{x\\to+\\infty}(x-\\ln x)$؟', fr: 'Que vaut $\\lim\\limits_{x\\to+\\infty}(x-\\ln x)$ ?' },
      question: { type: 'mcq', options: [{ ar: '$+\\infty$', fr: '$+\\infty$' }, { ar: '$0$', fr: '$0$' }, { ar: '$-\\infty$', fr: '$-\\infty$' }, { ar: '$1$', fr: '$1$' }], correct: 0 },
      hints: [{ ar: '$x\\left(1-\\dfrac{\\ln x}x\\right)$.', fr: '$x\\left(1-\\dfrac{\\ln x}x\\right)$.' }],
      solution: [{ ar: '$\\dfrac{\\ln x}x\\to0$ إذن النهاية $+\\infty$.', fr: '$\\dfrac{\\ln x}x\\to0$ donc la limite vaut $+\\infty$.' }],
    },
  ],
};
