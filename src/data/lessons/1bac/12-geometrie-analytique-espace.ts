import type { LessonModule } from '@/types';

const lessonId = '1bac-geometrie-analytique-espace';

export const geometrieAnalytiqueEspace: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'space-analytic',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'الهندسة التحليلية في الفضاء', fr: 'Géométrie analytique de l’espace' },
    summary: {
      ar: 'المعلم في الفضاء، الإحداثيات، المحددة واستقامية متجهتين، التمثيل البارامتري لمستقيم، والتمثيل البارامتري والمعادلة الديكارتية لمستوى.',
      fr: 'Repère de l’espace, coordonnées, déterminant et colinéarité, représentation paramétrique d’une droite, représentation paramétrique et équation cartésienne d’un plan.',
    },
    objectives: [
      { ar: 'حساب إحداثيات متجهة ومنتصف.', fr: 'Calculer les coordonnées d’un vecteur et d’un milieu.' },
      { ar: 'كتابة تمثيل بارامتري لمستقيم.', fr: 'Écrire une représentation paramétrique d’une droite.' },
      { ar: 'تحديد معادلة ديكارتية لمستوى.', fr: 'Déterminer une équation cartésienne d’un plan.' },
    ],
    durationMinutes: 50,
    reviewed: false,
    keywords: ['espace', 'repère', 'représentation paramétrique', 'équation cartésienne', 'plan', 'فضاء', 'معلم', 'تمثيل بارامتري', 'معادلة ديكارتية'],
    sections: [
      {
        id: 'coordonnees',
        title: { ar: 'الإحداثيات', fr: 'Coordonnées' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في معلم $(O,\\vec i,\\vec j,\\vec k)$ مع $A(x_A;y_A;z_A)$ و $B(x_B;y_B;z_B)$:\n\n• $\\overrightarrow{AB}(x_B-x_A;\\ y_B-y_A;\\ z_B-z_A)$.\n\n• منتصف $[AB]$: $I\\left(\\dfrac{x_A+x_B}2;\\dfrac{y_A+y_B}2;\\dfrac{z_A+z_B}2\\right)$.\n\n• $\\vec u(a;b;c)$ و $\\vec v(a\';b\';c\')$ مستقيميتان ⟺ المحددات $\\begin{vmatrix}a&a\'\\\\b&b\'\\end{vmatrix}$ و $\\begin{vmatrix}a&a\'\\\\c&c\'\\end{vmatrix}$ و $\\begin{vmatrix}b&b\'\\\\c&c\'\\end{vmatrix}$ كلها منعدمة.',
              fr: 'Dans un repère $(O,\\vec i,\\vec j,\\vec k)$ avec $A(x_A;y_A;z_A)$ et $B(x_B;y_B;z_B)$ :\n\n• $\\overrightarrow{AB}(x_B-x_A;\\ y_B-y_A;\\ z_B-z_A)$.\n\n• Milieu de $[AB]$ : $I\\left(\\dfrac{x_A+x_B}2;\\dfrac{y_A+y_B}2;\\dfrac{z_A+z_B}2\\right)$.\n\n• $\\vec u(a;b;c)$ et $\\vec v(a\';b\';c\')$ sont colinéaires ⟺ les déterminants $\\begin{vmatrix}a&a\'\\\\b&b\'\\end{vmatrix}$, $\\begin{vmatrix}a&a\'\\\\c&c\'\\end{vmatrix}$, $\\begin{vmatrix}b&b\'\\\\c&c\'\\end{vmatrix}$ sont tous nuls.',
            },
          },
        ],
      },
      {
        id: 'droites-plans',
        title: { ar: 'المستقيم والمستوى', fr: 'Droites et plans' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'تمثيل بارامتري لمستقيم', fr: 'Représentation paramétrique d’une droite' },
            content: {
              ar: 'المستقيم المار من $A(x_0;y_0;z_0)$ والموجه بـ $\\vec u(a;b;c)$: $\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}$ ($t\\in\\mathbb R$).',
              fr: 'La droite passant par $A(x_0;y_0;z_0)$ et dirigée par $\\vec u(a;b;c)$ : $\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0+ct\\end{cases}$ ($t\\in\\mathbb R$).',
            },
          },
          {
            kind: 'property',
            title: { ar: 'معادلة ديكارتية لمستوى', fr: 'Équation cartésienne d’un plan' },
            content: {
              ar: 'كل مستوى له معادلة من الشكل $ax+by+cz+d=0$ مع $(a;b;c)\\neq(0;0;0)$. نحصل عليها بإقصاء البارامترين من تمثيل بارامتري، أو بانعدام المحددة $\\det(\\overrightarrow{AM},\\vec u,\\vec v)=0$.',
              fr: 'Tout plan admet une équation de la forme $ax+by+cz+d=0$ avec $(a;b;c)\\neq(0;0;0)$. On l’obtient en éliminant les paramètres d’une représentation paramétrique, ou par $\\det(\\overrightarrow{AM},\\vec u,\\vec v)=0$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد معادلة المستوى المار من $A(1;0;0)$ و $B(0;2;0)$ و $C(0;0;3)$.', fr: 'Déterminer une équation du plan passant par $A(1;0;0)$, $B(0;2;0)$ et $C(0;0;3)$.' },
            steps: [
              { ar: 'نبحث عن $ax+by+cz=d$: $a=d$ و $2b=d$ و $3c=d$.', fr: 'On cherche $ax+by+cz=d$ : $a=d$, $2b=d$, $3c=d$.' },
              { ar: 'مع $d=6$: $6x+3y+2z-6=0$.', fr: 'Avec $d=6$ : $6x+3y+2z-6=0$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'مستقيم: $M=A+t\\vec u$.', fr: 'Droite : $M=A+t\\vec u$.' },
      { ar: 'مستوى: $ax+by+cz+d=0$.', fr: 'Plan : $ax+by+cz+d=0$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-gae-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منتصف', fr: 'Milieu' },
      statement: { ar: '$A(2;-1;4)$ و $B(0;3;6)$. ما الإحداثية $z$ لمنتصف $[AB]$؟', fr: '$A(2;-1;4)$ et $B(0;3;6)$. Quelle est la cote $z$ du milieu de $[AB]$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\dfrac{4+6}2$.', fr: '$\\dfrac{4+6}2$.' }],
      solution: [{ ar: '$z_I=5$.', fr: '$z_I=5$.' }],
    },
    {
      id: '1bac-gae-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'انتماء إلى مستوى', fr: 'Appartenance à un plan' },
      statement: { ar: 'لأي قيمة لـ $m$ تنتمي النقطة $M(1;m;2)$ إلى المستوى $2x-y+3z-5=0$؟', fr: 'Pour quelle valeur de $m$ le point $M(1;m;2)$ appartient-il au plan $2x-y+3z-5=0$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$2-m+6-5=0$.', fr: '$2-m+6-5=0$.' }],
      solution: [{ ar: '$3-m=0$ إذن $m=3$.', fr: '$3-m=0$ donc $m=3$.' }],
    },
    {
      id: '1bac-gae-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'تمثيل بارامتري', fr: 'Représentation paramétrique' },
      statement: { ar: 'المستقيم $\\begin{cases}x=1+2t\\\\y=-t\\\\z=3+t\\end{cases}$. ما الإحداثية $x$ لنقطته ذات الإحداثية $z=5$؟', fr: 'La droite $\\begin{cases}x=1+2t\\\\y=-t\\\\z=3+t\\end{cases}$. Quelle est l’abscisse de son point de cote $z=5$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$t=2$.', fr: '$t=2$.' }],
      solution: [{ ar: '$t=2$ إذن $x=1+4=5$.', fr: '$t=2$ donc $x=1+4=5$.' }],
    },
    {
      id: '1bac-gae-04',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'استقامية', fr: 'Colinéarité' },
      statement: { ar: 'ما قيمة $k$ التي تجعل $\\vec u(1;2;-1)$ و $\\vec v(3;6;k)$ مستقيميتين؟', fr: 'Pour quelle valeur de $k$ les vecteurs $\\vec u(1;2;-1)$ et $\\vec v(3;6;k)$ sont-ils colinéaires ?' },
      question: { type: 'numeric', answer: -3 },
      hints: [{ ar: '$\\vec v=3\\vec u$.', fr: '$\\vec v=3\\vec u$.' }],
      solution: [{ ar: '$k=3\\times(-1)=-3$.', fr: '$k=3\\times(-1)=-3$.' }],
    },
  ],
};
