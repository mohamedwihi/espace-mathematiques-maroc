import type { LessonModule } from '@/types';

const lessonId = 'tc-droite-plan';

export const droite: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'line',
    title: { ar: 'المستقيم في المستوى', fr: 'La droite dans le plan' },
    summary: {
      ar: 'المحددة وشرط استقامية متجهتين، المتجهة الموجهة، التمثيل البارامتري، المعادلة الديكارتية والمختصرة، والأوضاع النسبية لمستقيمين.',
      fr: 'Déterminant et colinéarité, vecteur directeur, représentation paramétrique, équation cartésienne et réduite, positions relatives de deux droites.',
    },
    objectives: [
      { ar: 'استعمال المحددة لدراسة استقامية متجهتين.', fr: 'Utiliser le déterminant pour étudier la colinéarité.' },
      { ar: 'تحديد تمثيل بارامتري ومعادلة ديكارتية لمستقيم.', fr: 'Déterminer une représentation paramétrique et une équation cartésienne.' },
      { ar: 'دراسة الوضع النسبي لمستقيمين.', fr: 'Étudier la position relative de deux droites.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['droite', 'déterminant', 'vecteur directeur', 'équation cartésienne', 'paramétrique', 'مستقيم', 'محددة', 'متجهة موجهة', 'معادلة ديكارتية'],
    sections: [
      {
        id: 'determinant',
        title: { ar: 'المحددة', fr: 'Déterminant' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'في أساس $(\\vec i,\\vec j)$، محددة $\\vec u(x;y)$ و $\\vec v(x\';y\')$ هي $\\det(\\vec u,\\vec v)=xy\'-x\'y$. تكون $\\vec u$ و $\\vec v$ مستقيميتين إذا وفقط إذا كان $\\det(\\vec u,\\vec v)=0$.',
              fr: 'Dans une base $(\\vec i,\\vec j)$, le déterminant de $\\vec u(x;y)$ et $\\vec v(x\';y\')$ est $\\det(\\vec u,\\vec v)=xy\'-x\'y$. $\\vec u$ et $\\vec v$ sont colinéaires si et seulement si $\\det(\\vec u,\\vec v)=0$.',
            },
          },
        ],
      },
      {
        id: 'equations',
        title: { ar: 'معادلات مستقيم', fr: 'Équations d’une droite' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'ليكن $(D)$ المستقيم المار من $A(x_A;y_A)$ والموجه بـ $\\vec u(\\alpha;\\beta)$:\n\n• **تمثيل بارامتري**: $\\begin{cases}x=x_A+\\alpha t\\\\y=y_A+\\beta t\\end{cases}$ ($t\\in\\mathbb R$).\n\n• **معادلة ديكارتية**: $M(x;y)\\in(D)\\iff\\det(\\overrightarrow{AM},\\vec u)=0$، وتكتب $ax+by+c=0$. عكسياً، المستقيم $ax+by+c=0$ موجه بـ $\\vec u(-b;a)$.\n\n• إذا كان $b\\neq0$: **المعادلة المختصرة** $y=mx+p$ مع $m=-\\dfrac ab$.',
              fr: 'Soit $(D)$ la droite passant par $A(x_A;y_A)$ et dirigée par $\\vec u(\\alpha;\\beta)$ :\n\n• **Représentation paramétrique** : $\\begin{cases}x=x_A+\\alpha t\\\\y=y_A+\\beta t\\end{cases}$ ($t\\in\\mathbb R$).\n\n• **Équation cartésienne** : $M(x;y)\\in(D)\\iff\\det(\\overrightarrow{AM},\\vec u)=0$, qui s’écrit $ax+by+c=0$. Réciproquement, la droite $ax+by+c=0$ est dirigée par $\\vec u(-b;a)$.\n\n• Si $b\\neq0$ : **équation réduite** $y=mx+p$ avec $m=-\\dfrac ab$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد معادلة ديكارتية للمستقيم المار من $A(1;2)$ والموجه بـ $\\vec u(1;3)$.', fr: 'Équation cartésienne de la droite passant par $A(1;2)$, dirigée par $\\vec u(1;3)$.' },
            steps: [
              { ar: '$\\det(\\overrightarrow{AM},\\vec u)=3(x-1)-1\\times(y-2)=0$.', fr: '$\\det(\\overrightarrow{AM},\\vec u)=3(x-1)-1\\times(y-2)=0$.' },
              { ar: '$3x-y-1=0$.', fr: '$3x-y-1=0$.' },
            ],
          },
        ],
      },
      {
        id: 'positions',
        title: { ar: 'الأوضاع النسبية', fr: 'Positions relatives' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'ليكن $(D):ax+by+c=0$ و $(D\'):a\'x+b\'y+c\'=0$. المستقيمان متوازيان إذا وفقط إذا كان $ab\'-a\'b=0$؛ وإلا فهما متقاطعان، ونقطة التقاطع هي حل النظمة المكونة من المعادلتين.',
              fr: 'Soient $(D):ax+by+c=0$ et $(D\'):a\'x+b\'y+c\'=0$. Elles sont parallèles si et seulement si $ab\'-a\'b=0$ ; sinon elles sont sécantes, et leur point d’intersection est la solution du système formé par les deux équations.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\det(\\vec u,\\vec v)=xy\'-x\'y$.', fr: '$\\det(\\vec u,\\vec v)=xy\'-x\'y$.' },
      { ar: '$ax+by+c=0$ موجه بـ $(-b;a)$.', fr: '$ax+by+c=0$ est dirigée par $(-b;a)$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-dro-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'استقامية متجهتين', fr: 'Colinéarité' },
      statement: { ar: 'هل $\\vec u(2;3)$ و $\\vec v(4;6)$ مستقيميتان؟', fr: '$\\vec u(2;3)$ et $\\vec v(4;6)$ sont-ils colinéaires ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'احسب $2\\times6-4\\times3$.', fr: 'Calcule $2\\times6-4\\times3$.' }],
      solution: [{ ar: '$\\det=12-12=0$ إذن المتجهتان مستقيميتان.', fr: '$\\det=12-12=0$ donc les vecteurs sont colinéaires.' }],
    },
    {
      id: 'tc-dro-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'متجهة موجهة', fr: 'Vecteur directeur' },
      statement: { ar: 'ما متجهة موجهة للمستقيم $2x-3y+1=0$؟', fr: 'Quel est un vecteur directeur de la droite $2x-3y+1=0$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(3;2)$', fr: '$(3;2)$' }, { ar: '$(2;-3)$', fr: '$(2;-3)$' }, { ar: '$(-3;2)$', fr: '$(-3;2)$' }, { ar: '$(2;3)$', fr: '$(2;3)$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\vec u(-b;a)$ مع $a=2$ و $b=-3$.', fr: '$\\vec u(-b;a)$ avec $a=2$, $b=-3$.' }],
      solution: [{ ar: '$\\vec u(3;2)$.', fr: '$\\vec u(3;2)$.' }],
    },
    {
      id: 'tc-dro-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'نقطة تقاطع', fr: 'Point d’intersection' },
      statement: { ar: 'المستقيمان $x+y-5=0$ و $x-y-1=0$ يتقاطعان في $M(x;y)$. ما قيمة $x$؟', fr: 'Les droites $x+y-5=0$ et $x-y-1=0$ se coupent en $M(x;y)$. Que vaut $x$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: 'اجمع المعادلتين.', fr: 'Additionne les deux équations.' }],
      solution: [{ ar: '$2x-6=0$ إذن $x=3$ و $y=2$.', fr: '$2x-6=0$ donc $x=3$ et $y=2$.' }],
    },
    {
      id: 'tc-dro-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مستقيمان متوازيان', fr: 'Droites parallèles' },
      statement: { ar: 'ما قيمة $m$ التي تجعل المستقيمين $2x+my-1=0$ و $4x+6y+3=0$ متوازيين؟', fr: 'Pour quelle valeur de $m$ les droites $2x+my-1=0$ et $4x+6y+3=0$ sont-elles parallèles ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$2\\times6-4m=0$.', fr: '$2\\times6-4m=0$.' }],
      solution: [{ ar: '$12-4m=0$ إذن $m=3$.', fr: '$12-4m=0$ donc $m=3$.' }],
    },
  ],
};
