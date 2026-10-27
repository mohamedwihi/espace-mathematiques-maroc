import type { LessonModule } from '@/types';

const lessonId = '3ac-repere';

export const repere: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'analytic',
    title: { ar: 'المعلم في المستوى', fr: 'Repère du plan' },
    summary: {
      ar: 'إحداثيات نقطة ومتجهة، إحداثيتا منتصف قطعة، تساوي متجهتين والمسافة بين نقطتين في معلم متعامد ممنظم.',
      fr: 'Coordonnées d’un point et d’un vecteur, milieu d’un segment, égalité de vecteurs et distance dans un repère orthonormé.',
    },
    objectives: [
      { ar: 'حساب إحداثيتي متجهة ومنتصف قطعة.', fr: 'Calculer les coordonnées d’un vecteur et d’un milieu.' },
      { ar: 'حساب المسافة بين نقطتين.', fr: 'Calculer la distance entre deux points.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    keywords: ['repère', 'coordonnées', 'milieu', 'distance', 'vecteur', 'معلم', 'إحداثيات', 'منتصف', 'مسافة'],
    sections: [
      {
        id: 'coordonnees',
        title: { ar: 'الإحداثيات', fr: 'Coordonnées' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لتكن $A(x_A;y_A)$ و $B(x_B;y_B)$:\n\n• $\\overrightarrow{AB}(x_B-x_A\\,;\\,y_B-y_A)$\n\n• منتصف $[AB]$ هو $I\\left(\\dfrac{x_A+x_B}2;\\dfrac{y_A+y_B}2\\right)$\n\n• $\\vec u(x;y)=\\vec v(x\';y\')\\iff x=x\'$ و $y=y\'$',
              fr: 'Soient $A(x_A;y_A)$ et $B(x_B;y_B)$ :\n\n• $\\overrightarrow{AB}(x_B-x_A\\,;\\,y_B-y_A)$\n\n• le milieu de $[AB]$ est $I\\left(\\dfrac{x_A+x_B}2;\\dfrac{y_A+y_B}2\\right)$\n\n• $\\vec u(x;y)=\\vec v(x\';y\')\\iff x=x\'$ et $y=y\'$',
            },
          },
          {
            kind: 'graph',
            functions: [],
            points: [
              { x: 1, y: 2, label: 'A' },
              { x: 4, y: 6, label: 'B' },
              { x: 2.5, y: 4, label: 'I' },
            ],
            lines: [{ from: [1, 2], to: [4, 6] }],
            x: [-1, 7],
            y: [-1, 7],
            caption: { ar: '$A(1;2)$ و $B(4;6)$: $\\overrightarrow{AB}(3;4)$ ومنتصف $[AB]$ هو $I(2{,}5;4)$.', fr: '$A(1;2)$ et $B(4;6)$ : $\\overrightarrow{AB}(3;4)$, milieu $I(2{,}5;4)$.' },
          },
        ],
      },
      {
        id: 'distance',
        title: { ar: 'المسافة', fr: 'Distance' },
        blocks: [
          {
            kind: 'formula',
            tex: 'AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}',
            caption: { ar: 'في معلم متعامد ممنظم.', fr: 'Dans un repère orthonormé.' },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $AB$ حيث $A(1;2)$ و $B(4;6)$.', fr: 'Calculer $AB$ avec $A(1;2)$ et $B(4;6)$.' },
            steps: [{ ar: '$AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.', fr: '$AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\overrightarrow{AB}$ = (النهاية − البداية).', fr: '$\\overrightarrow{AB}$ = (extrémité − origine).' },
      { ar: 'المنتصف = نصف مجموع الإحداثيات.', fr: 'Milieu = demi-somme des coordonnées.' },
    ],
  },
  exercises: [
    {
      id: '3ac-rep-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'إحداثيتا متجهة', fr: 'Coordonnées d’un vecteur' },
      statement: { ar: '$A(2;-1)$ و $B(5;3)$. ما إحداثيتا $\\overrightarrow{AB}$؟', fr: '$A(2;-1)$ et $B(5;3)$. Quelles sont les coordonnées de $\\overrightarrow{AB}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(3;4)$', fr: '$(3;4)$' }, { ar: '$(3;2)$', fr: '$(3;2)$' }, { ar: '$(-3;-4)$', fr: '$(-3;-4)$' }, { ar: '$(7;2)$', fr: '$(7;2)$' }],
        correct: 0,
      },
      hints: [{ ar: '$(x_B-x_A;y_B-y_A)$.', fr: '$(x_B-x_A;y_B-y_A)$.' }],
      solution: [{ ar: '$\\overrightarrow{AB}(5-2;3-(-1))=(3;4)$.', fr: '$\\overrightarrow{AB}(5-2;3-(-1))=(3;4)$.' }],
    },
    {
      id: '3ac-rep-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منتصف قطعة', fr: 'Milieu' },
      statement: { ar: 'ما منتصف $[AB]$ حيث $A(-2;3)$ و $B(4;-1)$؟', fr: 'Quel est le milieu de $[AB]$ avec $A(-2;3)$ et $B(4;-1)$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(1;1)$', fr: '$(1;1)$' }, { ar: '$(2;2)$', fr: '$(2;2)$' }, { ar: '$(3;-2)$', fr: '$(3;-2)$' }, { ar: '$(1;2)$', fr: '$(1;2)$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\left(\\dfrac{-2+4}2;\\dfrac{3-1}2\\right)$.', fr: '$\\left(\\dfrac{-2+4}2;\\dfrac{3-1}2\\right)$.' }],
      solution: [{ ar: '$I(1;1)$.', fr: '$I(1;1)$.' }],
    },
    {
      id: '3ac-rep-03',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مسافة', fr: 'Distance' },
      statement: { ar: 'احسب المسافة $OM$ حيث $O(0;0)$ و $M(-6;8)$.', fr: 'Calculer $OM$ avec $O(0;0)$ et $M(-6;8)$.' },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: '$\\sqrt{36+64}$.', fr: '$\\sqrt{36+64}$.' }],
      solution: [{ ar: '$OM=\\sqrt{100}=10$.', fr: '$OM=\\sqrt{100}=10$.' }],
    },
    {
      id: '3ac-rep-04',
      lessonId,
      levelId: '3ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'الرأس الرابع', fr: 'Le quatrième sommet' },
      statement: { ar: '$A(0;0)$ و $B(3;1)$ و $C(5;4)$. ما إحداثيتا $D$ بحيث يكون $ABCD$ متوازي الأضلاع؟', fr: '$A(0;0)$, $B(3;1)$, $C(5;4)$. Quelles sont les coordonnées de $D$ telles que $ABCD$ soit un parallélogramme ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(2;3)$', fr: '$(2;3)$' }, { ar: '$(8;5)$', fr: '$(8;5)$' }, { ar: '$(-2;-3)$', fr: '$(-2;-3)$' }, { ar: '$(3;2)$', fr: '$(3;2)$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\overrightarrow{AD}=\\overrightarrow{BC}$.', fr: '$\\overrightarrow{AD}=\\overrightarrow{BC}$.' }],
      solution: [{ ar: '$\\overrightarrow{BC}(2;3)$ إذن $D(0+2;0+3)=(2;3)$.', fr: '$\\overrightarrow{BC}(2;3)$ donc $D(0+2;0+3)=(2;3)$.' }],
    },
  ],
};
