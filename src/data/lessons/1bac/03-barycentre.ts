import type { LessonModule } from '@/types';

const lessonId = '1bac-barycentre';

export const barycentre: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'barycentre',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'المرجح في المستوى', fr: 'Le barycentre dans le plan' },
    summary: {
      ar: 'مرجح نقطتين ومرجح ثلاث نقط، الخاصية المميزة، التجميعية، وإحداثيات المرجح.',
      fr: 'Barycentre de deux puis de trois points, propriété caractéristique, associativité et coordonnées du barycentre.',
    },
    objectives: [
      { ar: 'إنشاء مرجح نقطتين أو ثلاث نقط.', fr: 'Construire le barycentre de deux ou trois points.' },
      { ar: 'استعمال التجميعية والإحداثيات.', fr: 'Utiliser l’associativité et les coordonnées.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['barycentre', 'points pondérés', 'associativité', 'مرجح', 'نقط متزنة', 'تجميعية'],
    sections: [
      {
        id: 'deux-points',
        title: { ar: 'مرجح نقطتين', fr: 'Barycentre de deux points' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $\\alpha+\\beta\\neq0$. توجد نقطة وحيدة $G$ حيث $\\alpha\\overrightarrow{GA}+\\beta\\overrightarrow{GB}=\\vec0$، تسمى **مرجح** النظمة $\\{(A;\\alpha),(B;\\beta)\\}$.',
              fr: 'Soit $\\alpha+\\beta\\neq0$. Il existe un unique point $G$ tel que $\\alpha\\overrightarrow{GA}+\\beta\\overrightarrow{GB}=\\vec0$ : c’est le **barycentre** de $\\{(A;\\alpha),(B;\\beta)\\}$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• $\\overrightarrow{AG}=\\dfrac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}$، إذن $G\\in(AB)$.\n\n• **الخاصية المميزة**: لكل نقطة $M$: $\\alpha\\overrightarrow{MA}+\\beta\\overrightarrow{MB}=(\\alpha+\\beta)\\overrightarrow{MG}$.\n\n• إذا كان $\\alpha=\\beta$ فإن $G$ منتصف $[AB]$ (ونسميه **المركز**).',
              fr: '• $\\overrightarrow{AG}=\\dfrac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}$, donc $G\\in(AB)$.\n\n• **Propriété caractéristique** : pour tout point $M$, $\\alpha\\overrightarrow{MA}+\\beta\\overrightarrow{MB}=(\\alpha+\\beta)\\overrightarrow{MG}$.\n\n• Si $\\alpha=\\beta$, $G$ est le milieu de $[AB]$ (on parle d’**isobarycentre**).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'أنشئ مرجح $\\{(A;1),(B;3)\\}$.', fr: 'Construire le barycentre de $\\{(A;1),(B;3)\\}$.' },
            steps: [{ ar: '$\\overrightarrow{AG}=\\dfrac34\\overrightarrow{AB}$.', fr: '$\\overrightarrow{AG}=\\dfrac34\\overrightarrow{AB}$.' }],
          },
        ],
      },
      {
        id: 'trois-points',
        title: { ar: 'مرجح ثلاث نقط', fr: 'Barycentre de trois points' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'إذا كان $\\alpha+\\beta+\\gamma\\neq0$، فمرجح $\\{(A;\\alpha),(B;\\beta),(C;\\gamma)\\}$ هو النقطة الوحيدة $G$ حيث $\\alpha\\overrightarrow{GA}+\\beta\\overrightarrow{GB}+\\gamma\\overrightarrow{GC}=\\vec0$.',
              fr: 'Si $\\alpha+\\beta+\\gamma\\neq0$, le barycentre de $\\{(A;\\alpha),(B;\\beta),(C;\\gamma)\\}$ est l’unique point $G$ tel que $\\alpha\\overrightarrow{GA}+\\beta\\overrightarrow{GB}+\\gamma\\overrightarrow{GC}=\\vec0$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'التجميعية والإحداثيات', fr: 'Associativité et coordonnées' },
            content: {
              ar: '• إذا كان $H$ مرجح $\\{(A;\\alpha),(B;\\beta)\\}$ مع $\\alpha+\\beta\\neq0$، فإن $G$ مرجح $\\{(H;\\alpha+\\beta),(C;\\gamma)\\}$.\n\n• $x_G=\\dfrac{\\alpha x_A+\\beta x_B+\\gamma x_C}{\\alpha+\\beta+\\gamma}$ و $y_G=\\dfrac{\\alpha y_A+\\beta y_B+\\gamma y_C}{\\alpha+\\beta+\\gamma}$.\n\n• مركز ثقل مثلث هو مرجح رؤوسه بنفس المعامل.',
              fr: '• Si $H$ est le barycentre de $\\{(A;\\alpha),(B;\\beta)\\}$ avec $\\alpha+\\beta\\neq0$, alors $G$ est le barycentre de $\\{(H;\\alpha+\\beta),(C;\\gamma)\\}$.\n\n• $x_G=\\dfrac{\\alpha x_A+\\beta x_B+\\gamma x_C}{\\alpha+\\beta+\\gamma}$ et $y_G=\\dfrac{\\alpha y_A+\\beta y_B+\\gamma y_C}{\\alpha+\\beta+\\gamma}$.\n\n• Le centre de gravité d’un triangle est l’isobarycentre de ses sommets.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\overrightarrow{AG}=\\dfrac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}$.', fr: '$\\overrightarrow{AG}=\\dfrac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}$.' },
      { ar: 'إحداثيات المرجح = متوسط مرجح للإحداثيات.', fr: 'Coordonnées du barycentre = moyenne pondérée des coordonnées.' },
    ],
  },
  exercises: [
    {
      id: '1bac-bar-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'موقع المرجح', fr: 'Position du barycentre' },
      statement: { ar: '$G$ مرجح $\\{(A;2),(B;3)\\}$ و $AB=10$. احسب $AG$.', fr: '$G$ est le barycentre de $\\{(A;2),(B;3)\\}$ et $AB=10$. Calculer $AG$.' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: '$AG=\\dfrac35AB$.', fr: '$AG=\\dfrac35AB$.' }],
      solution: [{ ar: '$AG=\\dfrac35\\times10=6$.', fr: '$AG=\\dfrac35\\times10=6$.' }],
    },
    {
      id: '1bac-bar-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'إحداثيات', fr: 'Coordonnées' },
      statement: { ar: '$A(1;2)$ و $B(4;5)$. ما أفصول مرجح $\\{(A;2),(B;1)\\}$؟', fr: '$A(1;2)$ et $B(4;5)$. Quelle est l’abscisse du barycentre de $\\{(A;2),(B;1)\\}$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$\\dfrac{2\\times1+1\\times4}{3}$.', fr: '$\\dfrac{2\\times1+1\\times4}{3}$.' }],
      solution: [{ ar: '$x_G=\\dfrac{6}{3}=2$.', fr: '$x_G=\\dfrac{6}{3}=2$.' }],
    },
    {
      id: '1bac-bar-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'وجود المرجح', fr: 'Existence' },
      statement: { ar: 'لأي قيمة لـ $m$ لا يوجد مرجح $\\{(A;m),(B;4)\\}$؟', fr: 'Pour quelle valeur de $m$ le barycentre de $\\{(A;m),(B;4)\\}$ n’existe-t-il pas ?' },
      question: { type: 'numeric', answer: -4 },
      hints: [{ ar: 'مجموع المعاملات منعدم.', fr: 'Somme des coefficients nulle.' }],
      solution: [{ ar: '$m+4=0$ إذن $m=-4$.', fr: '$m+4=0$ donc $m=-4$.' }],
    },
    {
      id: '1bac-bar-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مركز الثقل', fr: 'Centre de gravité' },
      statement: { ar: '$A(0;0)$ و $B(6;0)$ و $C(0;9)$. ما أرتوب مركز ثقل المثلث $ABC$؟', fr: '$A(0;0)$, $B(6;0)$, $C(0;9)$. Quelle est l’ordonnée du centre de gravité de $ABC$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\dfrac{0+0+9}3$.', fr: '$\\dfrac{0+0+9}3$.' }],
      solution: [{ ar: '$y_G=3$.', fr: '$y_G=3$.' }],
    },
  ],
};
