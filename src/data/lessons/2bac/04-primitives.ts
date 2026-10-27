import type { LessonModule } from '@/types';

const lessonId = '2bac-primitives';

export const primitives: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'primitives',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'الدوال الأصلية', fr: 'Fonctions primitives' },
    summary: {
      ar: 'تعريف الدالة الأصلية، مجموعة الدوال الأصلية، الدالة الأصلية التي تأخذ قيمة معينة، وجدول الدوال الأصلية الاعتيادية.',
      fr: 'Définition d’une primitive, ensemble des primitives, primitive prenant une valeur donnée, tableau des primitives usuelles.',
    },
    objectives: [
      { ar: 'تحديد دالة أصلية باستعمال الجدول.', fr: 'Déterminer une primitive à l’aide du tableau.' },
      { ar: 'تحديد الدالة الأصلية التي تحقق شرطاً.', fr: 'Déterminer la primitive vérifiant une condition.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['primitive', 'dérivée', 'constante', 'دالة أصلية', 'ثابتة'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف وخاصيات', fr: 'Définition et propriétés' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'نقول إن $F$ **دالة أصلية** لـ $f$ على مجال $I$ إذا كانت $F$ قابلة للاشتقاق على $I$ و $F\'(x)=f(x)$ لكل $x\\in I$.',
              fr: '$F$ est une **primitive** de $f$ sur un intervalle $I$ si $F$ est dérivable sur $I$ et $F\'(x)=f(x)$ pour tout $x\\in I$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• كل دالة متصلة على مجال تقبل دالة أصلية عليه.\n\n• إذا كانت $F$ دالة أصلية لـ $f$، فإن الدوال الأصلية لـ $f$ هي $x\\mapsto F(x)+c$ ($c\\in\\mathbb R$).\n\n• لكل $x_0\\in I$ و $y_0\\in\\mathbb R$، توجد دالة أصلية وحيدة $F$ حيث $F(x_0)=y_0$.',
              fr: '• Toute fonction continue sur un intervalle y admet une primitive.\n\n• Si $F$ est une primitive de $f$, les primitives de $f$ sont les $x\\mapsto F(x)+c$ ($c\\in\\mathbb R$).\n\n• Pour $x_0\\in I$ et $y_0\\in\\mathbb R$, il existe une unique primitive $F$ telle que $F(x_0)=y_0$.',
            },
          },
        ],
      },
      {
        id: 'tableau',
        title: { ar: 'الدوال الأصلية الاعتيادية', fr: 'Primitives usuelles' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '$x^n\\ \\to\\ \\dfrac{x^{n+1}}{n+1}$ ($n\\neq-1$)', fr: '$x^n\\ \\to\\ \\dfrac{x^{n+1}}{n+1}$ ($n\\neq-1$)' },
              { ar: '$u\'u^n\\ \\to\\ \\dfrac{u^{n+1}}{n+1}$ ؛ $\\dfrac{u\'}{u^2}\\ \\to\\ -\\dfrac1u$ ؛ $\\dfrac{u\'}{\\sqrt u}\\ \\to\\ 2\\sqrt u$', fr: '$u\'u^n\\ \\to\\ \\dfrac{u^{n+1}}{n+1}$ ; $\\dfrac{u\'}{u^2}\\ \\to\\ -\\dfrac1u$ ; $\\dfrac{u\'}{\\sqrt u}\\ \\to\\ 2\\sqrt u$' },
              { ar: '$\\cos(ax+b)\\ \\to\\ \\dfrac1a\\sin(ax+b)$ ؛ $\\sin(ax+b)\\ \\to\\ -\\dfrac1a\\cos(ax+b)$', fr: '$\\cos(ax+b)\\ \\to\\ \\dfrac1a\\sin(ax+b)$ ; $\\sin(ax+b)\\ \\to\\ -\\dfrac1a\\cos(ax+b)$' },
              { ar: '$1+\\tan^2x\\ \\to\\ \\tan x$', fr: '$1+\\tan^2x\\ \\to\\ \\tan x$' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'حدد الدالة الأصلية $F$ لـ $f(x)=3x^2-4x+1$ التي تحقق $F(1)=2$.', fr: 'Déterminer la primitive $F$ de $f(x)=3x^2-4x+1$ telle que $F(1)=2$.' },
            steps: [
              { ar: '$F(x)=x^3-2x^2+x+c$.', fr: '$F(x)=x^3-2x^2+x+c$.' },
              { ar: '$F(1)=0+c=2$ إذن $F(x)=x^3-2x^2+x+2$.', fr: '$F(1)=0+c=2$ donc $F(x)=x^3-2x^2+x+2$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$F\'=f$؛ الدوال الأصلية تختلف بثابتة.', fr: '$F\'=f$ ; les primitives diffèrent d’une constante.' },
    ],
  },
  exercises: [
    {
      id: '2bac-pri-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'دالة أصلية', fr: 'Primitive' },
      statement: { ar: 'ما دالة أصلية لـ $f(x)=4x^3$؟', fr: 'Quelle est une primitive de $f(x)=4x^3$ ?' },
      question: { type: 'mcq', options: [{ ar: '$x^4$', fr: '$x^4$' }, { ar: '$12x^2$', fr: '$12x^2$' }, { ar: '$4x^4$', fr: '$4x^4$' }], correct: 0 },
      hints: [{ ar: '$(x^4)\'=4x^3$.', fr: '$(x^4)\'=4x^3$.' }],
      solution: [{ ar: '$F(x)=x^4$.', fr: '$F(x)=x^4$.' }],
    },
    {
      id: '2bac-pri-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'شرط', fr: 'Condition initiale' },
      statement: { ar: '$F$ الدالة الأصلية لـ $f(x)=2x+3$ حيث $F(0)=5$. احسب $F(2)$.', fr: '$F$ est la primitive de $f(x)=2x+3$ telle que $F(0)=5$. Calculer $F(2)$.' },
      question: { type: 'numeric', answer: 15 },
      hints: [{ ar: '$F(x)=x^2+3x+5$.', fr: '$F(x)=x^2+3x+5$.' }],
      solution: [{ ar: '$F(2)=4+6+5=15$.', fr: '$F(2)=4+6+5=15$.' }],
    },
    {
      id: '2bac-pri-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'شكل $u\'u^n$', fr: 'Forme $u\'u^n$' },
      statement: { ar: 'ما دالة أصلية لـ $f(x)=2x(x^2+1)^3$؟', fr: 'Quelle est une primitive de $f(x)=2x(x^2+1)^3$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\dfrac{(x^2+1)^4}{4}$', fr: '$\\dfrac{(x^2+1)^4}{4}$' }, { ar: '$(x^2+1)^4$', fr: '$(x^2+1)^4$' }, { ar: '$\\dfrac{x^2(x^2+1)^4}{4}$', fr: '$\\dfrac{x^2(x^2+1)^4}{4}$' }], correct: 0 },
      hints: [{ ar: '$u=x^2+1$ و $u\'=2x$.', fr: '$u=x^2+1$ et $u\'=2x$.' }],
      solution: [{ ar: '$\\dfrac{u^4}{4}=\\dfrac{(x^2+1)^4}{4}$.', fr: '$\\dfrac{u^4}{4}=\\dfrac{(x^2+1)^4}{4}$.' }],
    },
    {
      id: '2bac-pri-04',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'دالة مثلثية', fr: 'Fonction trigonométrique' },
      statement: { ar: 'ما دالة أصلية لـ $f(x)=\\cos(2x)$؟', fr: 'Quelle est une primitive de $f(x)=\\cos(2x)$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\dfrac12\\sin2x$', fr: '$\\dfrac12\\sin2x$' }, { ar: '$2\\sin2x$', fr: '$2\\sin2x$' }, { ar: '$-\\dfrac12\\sin2x$', fr: '$-\\dfrac12\\sin2x$' }], correct: 0 },
      hints: [{ ar: '$\\dfrac1a\\sin(ax+b)$.', fr: '$\\dfrac1a\\sin(ax+b)$.' }],
      solution: [{ ar: '$F(x)=\\dfrac12\\sin2x$.', fr: '$F(x)=\\dfrac12\\sin2x$.' }],
    },
  ],
};
