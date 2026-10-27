import type { LessonModule } from '@/types';

const lessonId = '2bac-equations-differentielles';

export const equationsDifferentielles: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'diffeq',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'المعادلات التفاضلية', fr: 'Équations différentielles' },
    summary: {
      ar: 'المعادلات $y\'=ay+b$ والمعادلات من الرتبة الثانية $y\'\'+ay\'+by=0$ ذات المعاملات الثابتة، والحل الذي يحقق شروطاً بدئية.',
      fr: 'Équations $y\'=ay+b$ et équations du second ordre $y\'\'+ay\'+by=0$ à coefficients constants, solution vérifiant des conditions initiales.',
    },
    objectives: [
      { ar: 'حل معادلة من الشكل $y\'=ay+b$.', fr: 'Résoudre une équation $y\'=ay+b$.' },
      { ar: 'حل معادلة $y\'\'+ay\'+by=0$ باستعمال المعادلة المميزة.', fr: 'Résoudre $y\'\'+ay\'+by=0$ grâce à l’équation caractéristique.' },
    ],
    durationMinutes: 45,
    reviewed: false,
    keywords: ['équation différentielle', 'équation caractéristique', 'condition initiale', 'معادلة تفاضلية', 'معادلة مميزة', 'شرط بدئي'],
    sections: [
      {
        id: 'premier-ordre',
        title: { ar: 'المعادلة $y\'=ay+b$', fr: 'L’équation $y\'=ay+b$' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'مع $a\\neq0$، حلول المعادلة $y\'=ay+b$ هي الدوال $y(x)=Ce^{ax}-\\dfrac ba$ حيث $C\\in\\mathbb R$. ولكل شرط بدئي $y(x_0)=y_0$ يوجد حل وحيد.',
              fr: 'Avec $a\\neq0$, les solutions de $y\'=ay+b$ sont les fonctions $y(x)=Ce^{ax}-\\dfrac ba$, $C\\in\\mathbb R$. Pour une condition initiale $y(x_0)=y_0$, la solution est unique.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $y\'=-2y+4$ مع $y(0)=5$.', fr: 'Résoudre $y\'=-2y+4$ avec $y(0)=5$.' },
            steps: [
              { ar: '$y(x)=Ce^{-2x}+2$.', fr: '$y(x)=Ce^{-2x}+2$.' },
              { ar: '$y(0)=C+2=5$ إذن $y(x)=3e^{-2x}+2$.', fr: '$y(0)=C+2=5$ donc $y(x)=3e^{-2x}+2$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => 3 * Math.exp(-2 * x) + 2, label: 'y=3e^{-2x}+2', color: 'brand' },
              { fn: () => 2, label: 'y=2', color: 'saffron' },
            ],
            points: [{ x: 0, y: 5, label: '(0;5)' }],
            x: [-0.5, 4],
            y: [-0.5, 6],
            caption: { ar: 'الحل يؤول إلى القيمة $2$ (نظام دائم، كما في تفريغ مكثف).', fr: 'La solution tend vers $2$ (régime permanent, comme pour la décharge d’un condensateur).' },
          },
        ],
      },
      {
        id: 'second-ordre',
        title: { ar: 'المعادلة $y\'\'+ay\'+by=0$', fr: 'L’équation $y\'\'+ay\'+by=0$' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'نعتبر المعادلة المميزة $r^2+ar+b=0$ ومميزها $\\Delta$:\n\n• $\\Delta>0$ (جذران $r_1$ و $r_2$): $y=\\alpha e^{r_1x}+\\beta e^{r_2x}$.\n\n• $\\Delta=0$ (جذر مزدوج $r$): $y=(\\alpha x+\\beta)e^{rx}$.\n\n• $\\Delta<0$ (جذران $p\\pm iq$): $y=e^{px}(\\alpha\\cos qx+\\beta\\sin qx)$.',
              fr: 'On considère l’équation caractéristique $r^2+ar+b=0$ de discriminant $\\Delta$ :\n\n• $\\Delta>0$ (racines $r_1$, $r_2$) : $y=\\alpha e^{r_1x}+\\beta e^{r_2x}$ ;\n\n• $\\Delta=0$ (racine double $r$) : $y=(\\alpha x+\\beta)e^{rx}$ ;\n\n• $\\Delta<0$ (racines $p\\pm iq$) : $y=e^{px}(\\alpha\\cos qx+\\beta\\sin qx)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $y\'\'+4y=0$.', fr: 'Résoudre $y\'\'+4y=0$.' },
            steps: [{ ar: '$r^2+4=0$: $r=\\pm2i$، إذن $y=\\alpha\\cos2x+\\beta\\sin2x$.', fr: '$r^2+4=0$ : $r=\\pm2i$, donc $y=\\alpha\\cos2x+\\beta\\sin2x$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: '$y\'=ay+b$: $y=Ce^{ax}-\\dfrac ba$.', fr: '$y\'=ay+b$ : $y=Ce^{ax}-\\dfrac ba$.' },
      { ar: 'الرتبة الثانية: حسب إشارة مميز المعادلة المميزة.', fr: 'Second ordre : selon le signe du discriminant de l’équation caractéristique.' },
    ],
  },
  exercises: [
    {
      id: '2bac-edo-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'شرط بدئي', fr: 'Condition initiale' },
      statement: { ar: 'حل $y\'=3y$ يحقق $y(0)=2$. احسب $y(\\ln2)$.', fr: 'La solution de $y\'=3y$ telle que $y(0)=2$. Calculer $y(\\ln2)$.' },
      question: { type: 'numeric', answer: 16 },
      hints: [{ ar: '$y=2e^{3x}$.', fr: '$y=2e^{3x}$.' }],
      solution: [{ ar: '$y(\\ln2)=2e^{3\\ln2}=2\\times8=16$.', fr: '$y(\\ln2)=2e^{3\\ln2}=2\\times8=16$.' }],
    },
    {
      id: '2bac-edo-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'حل ثابت', fr: 'Solution constante' },
      statement: { ar: 'ما الحل الثابت للمعادلة $y\'=-5y+10$؟', fr: 'Quelle est la solution constante de $y\'=-5y+10$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$y\'=0$.', fr: '$y\'=0$.' }],
      solution: [{ ar: '$-5y+10=0$ إذن $y=2$.', fr: '$-5y+10=0$ donc $y=2$.' }],
    },
    {
      id: '2bac-edo-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'رتبة ثانية', fr: 'Second ordre' },
      statement: { ar: 'ما الحل العام لـ $y\'\'-3y\'+2y=0$؟', fr: 'Quelle est la solution générale de $y\'\'-3y\'+2y=0$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\alpha e^{x}+\\beta e^{2x}$', fr: '$\\alpha e^{x}+\\beta e^{2x}$' }, { ar: '$\\alpha e^{-x}+\\beta e^{-2x}$', fr: '$\\alpha e^{-x}+\\beta e^{-2x}$' }, { ar: '$(\\alpha x+\\beta)e^{x}$', fr: '$(\\alpha x+\\beta)e^{x}$' }],
        correct: 0,
      },
      hints: [{ ar: '$r^2-3r+2=(r-1)(r-2)$.', fr: '$r^2-3r+2=(r-1)(r-2)$.' }],
      solution: [{ ar: 'الجذران $1$ و $2$: $y=\\alpha e^x+\\beta e^{2x}$.', fr: 'Racines $1$ et $2$ : $y=\\alpha e^x+\\beta e^{2x}$.' }],
    },
    {
      id: '2bac-edo-04',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'جذر مزدوج', fr: 'Racine double' },
      statement: { ar: 'ما الحل العام لـ $y\'\'+2y\'+y=0$؟', fr: 'Quelle est la solution générale de $y\'\'+2y\'+y=0$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(\\alpha x+\\beta)e^{-x}$', fr: '$(\\alpha x+\\beta)e^{-x}$' }, { ar: '$(\\alpha x+\\beta)e^{x}$', fr: '$(\\alpha x+\\beta)e^{x}$' }, { ar: '$\\alpha\\cos x+\\beta\\sin x$', fr: '$\\alpha\\cos x+\\beta\\sin x$' }],
        correct: 0,
      },
      hints: [{ ar: '$(r+1)^2=0$.', fr: '$(r+1)^2=0$.' }],
      solution: [{ ar: 'جذر مزدوج $-1$: $y=(\\alpha x+\\beta)e^{-x}$.', fr: 'Racine double $-1$ : $y=(\\alpha x+\\beta)e^{-x}$.' }],
    },
  ],
};
