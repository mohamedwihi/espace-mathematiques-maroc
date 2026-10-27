import type { LessonModule } from '@/types';

const lessonId = '3ac-fonctions-lineaires-affines';

export const fonctions: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'functions',
    title: { ar: 'الدالة الخطية والدالة التآلفية', fr: 'Fonctions linéaires et affines' },
    summary: {
      ar: 'الدالة الخطية $f(x)=ax$ ومعاملها، الدالة التآلفية $f(x)=ax+b$، الصورة والسابق، والتمثيل المبياني.',
      fr: 'Fonction linéaire $f(x)=ax$ et son coefficient, fonction affine $f(x)=ax+b$, image et antécédent, représentation graphique.',
    },
    objectives: [
      { ar: 'حساب صورة وسابق عدد.', fr: 'Calculer une image et un antécédent.' },
      { ar: 'تحديد دالة خطية أو تآلفية انطلاقاً من معطيات.', fr: 'Déterminer une fonction linéaire ou affine à partir de données.' },
      { ar: 'تمثيل دالة خطية أو تآلفية مبيانياً.', fr: 'Représenter graphiquement une fonction linéaire ou affine.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    keywords: ['fonction linéaire', 'fonction affine', 'coefficient', 'image', 'antécédent', 'دالة خطية', 'دالة تآلفية', 'صورة', 'سابق'],
    sections: [
      {
        id: 'lineaire',
        title: { ar: 'الدالة الخطية', fr: 'Fonction linéaire' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الدالة الخطية ذات المعامل $a$ هي $f:x\\mapsto ax$. إذا كان $x\\neq0$ فإن $a=\\dfrac{f(x)}x$. تمثيلها المبياني مستقيم يمر من أصل المعلم.',
              fr: 'La fonction linéaire de coefficient $a$ est $f:x\\mapsto ax$. Pour $x\\neq0$ : $a=\\dfrac{f(x)}x$. Sa représentation graphique est une droite passant par l’origine.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'الدالة الخطية تمثل وضعية تناسبية. مثال: زيادة $20\\%$ تمثلها الدالة $x\\mapsto1{,}2x$.',
              fr: 'Une fonction linéaire traduit une situation de proportionnalité. Exemple : une hausse de $20\\%$ correspond à $x\\mapsto1{,}2x$.',
            },
          },
        ],
      },
      {
        id: 'affine',
        title: { ar: 'الدالة التآلفية', fr: 'Fonction affine' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الدالة التآلفية هي $f:x\\mapsto ax+b$. تمثيلها مستقيم ميله $a$ وأرتوبه عند الأصل $b$. لكل $x_1\\neq x_2$: $a=\\dfrac{f(x_1)-f(x_2)}{x_1-x_2}$.',
              fr: 'Une fonction affine est $f:x\\mapsto ax+b$. Sa représentation est une droite de coefficient directeur $a$ et d’ordonnée à l’origine $b$. Pour $x_1\\neq x_2$ : $a=\\dfrac{f(x_1)-f(x_2)}{x_1-x_2}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد الدالة التآلفية $f$ بحيث $f(1)=3$ و $f(4)=9$.', fr: 'Déterminer la fonction affine $f$ telle que $f(1)=3$ et $f(4)=9$.' },
            steps: [
              { ar: '$a=\\dfrac{9-3}{4-1}=2$ إذن $f(x)=2x+b$.', fr: '$a=\\dfrac{9-3}{4-1}=2$ donc $f(x)=2x+b$.' },
              { ar: '$f(1)=2+b=3$ ومنه $b=1$: $f(x)=2x+1$.', fr: '$f(1)=2+b=3$ d’où $b=1$ : $f(x)=2x+1$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => 2 * x + 1, label: 'f(x)=2x+1', color: 'brand' },
              { fn: (x: number) => 0.5 * x, label: 'g(x)=0{,}5x', color: 'saffron' },
            ],
            points: [
              { x: 1, y: 3 },
              { x: 4, y: 9 },
            ],
            x: [-3, 6],
            y: [-4, 10],
            caption: { ar: '$f$ تآلفية و $g$ خطية (تمر من الأصل).', fr: '$f$ est affine, $g$ est linéaire (passe par l’origine).' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'خطية: $f(x)=ax$، مستقيم يمر من الأصل.', fr: 'Linéaire : $f(x)=ax$, droite passant par l’origine.' },
      { ar: 'تآلفية: $f(x)=ax+b$.', fr: 'Affine : $f(x)=ax+b$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-fon-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'معامل دالة خطية', fr: 'Coefficient d’une fonction linéaire' },
      statement: { ar: '$f$ دالة خطية بحيث $f(3)=12$. ما معاملها؟', fr: '$f$ est linéaire avec $f(3)=12$. Quel est son coefficient ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$a=\\dfrac{f(3)}3$.', fr: '$a=\\dfrac{f(3)}3$.' }],
      solution: [{ ar: '$a=\\dfrac{12}3=4$ إذن $f(x)=4x$.', fr: '$a=\\dfrac{12}3=4$ donc $f(x)=4x$.' }],
    },
    {
      id: '3ac-fon-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'صورة عدد', fr: 'Image d’un nombre' },
      statement: { ar: '$f(x)=-2x+5$. احسب صورة $3$.', fr: '$f(x)=-2x+5$. Calculer l’image de $3$.' },
      question: { type: 'numeric', answer: -1 },
      hints: [{ ar: '$f(3)=-6+5$.', fr: '$f(3)=-6+5$.' }],
      solution: [{ ar: '$f(3)=-1$.', fr: '$f(3)=-1$.' }],
    },
    {
      id: '3ac-fon-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'سابق عدد', fr: 'Antécédent' },
      statement: { ar: '$f(x)=2x+1$. ما سابق $9$؟', fr: '$f(x)=2x+1$. Quel est l’antécédent de $9$ ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: 'حل $2x+1=9$.', fr: 'Résoudre $2x+1=9$.' }],
      solution: [{ ar: '$2x=8$ إذن $x=4$.', fr: '$2x=8$ donc $x=4$.' }],
    },
    {
      id: '3ac-fon-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'تخفيض', fr: 'Une remise' },
      statement: { ar: 'تخفيض بنسبة $15\\%$ على ثمن $x$. أي دالة تعطي الثمن الجديد؟', fr: 'Une remise de $15\\%$ sur un prix $x$. Quelle fonction donne le nouveau prix ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$x\\mapsto0{,}85x$', fr: '$x\\mapsto0{,}85x$' }, { ar: '$x\\mapsto0{,}15x$', fr: '$x\\mapsto0{,}15x$' }, { ar: '$x\\mapsto x-15$', fr: '$x\\mapsto x-15$' }, { ar: '$x\\mapsto1{,}15x$', fr: '$x\\mapsto1{,}15x$' }],
        correct: 0,
      },
      hints: [{ ar: '$x-0{,}15x$.', fr: '$x-0{,}15x$.' }],
      solution: [{ ar: '$x-0{,}15x=0{,}85x$: دالة خطية معاملها $0{,}85$.', fr: '$x-0{,}15x=0{,}85x$ : fonction linéaire de coefficient $0{,}85$.' }],
    },
  ],
};
