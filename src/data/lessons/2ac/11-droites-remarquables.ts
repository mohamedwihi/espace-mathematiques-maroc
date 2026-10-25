import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-droites-remarquables';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const droitesRemarquables: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'remarkable-lines',
    title: { ar: 'المستقيمات الهامة في مثلث', fr: 'Les droites remarquables dans un triangle' },
    summary: {
      ar: 'الواسطات ومركز الدائرة المحيطة، المنصفات ومركز الدائرة المحاطة، الارتفاعات والمركز القائم، المتوسطات ومركز الثقل.',
      fr: 'Médiatrices et cercle circonscrit, bissectrices et cercle inscrit, hauteurs et orthocentre, médianes et centre de gravité.',
    },
    objectives: [
      { ar: 'إنشاء الواسطات والمنصفات والارتفاعات والمتوسطات لمثلث.', fr: 'Construire médiatrices, bissectrices, hauteurs et médianes d’un triangle.' },
      { ar: 'معرفة أنها مستقيمات متلاقية.', fr: 'Savoir qu’elles sont concourantes.' },
      { ar: 'استعمال خاصية مركز الثقل.', fr: 'Utiliser la propriété du centre de gravité.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['médiatrice', 'bissectrice', 'hauteur', 'médiane', 'orthocentre', 'centre de gravité', 'cercle circonscrit', 'cercle inscrit', 'واسط', 'منصف', 'ارتفاع', 'متوسط', 'مركز الثقل', 'المركز القائم'],
    sections: [
      {
        id: 'mediatrices',
        title: { ar: 'الواسطات والدائرة المحيطة', fr: 'Médiatrices et cercle circonscrit' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'واسط مثلث هو واسط أحد أضلاعه. الواسطات الثلاثة متلاقية في نقطة هي **مركز الدائرة المحيطة** بالمثلث (يكفي إنشاء واسطين).',
              fr: 'Une médiatrice d’un triangle est la médiatrice de l’un de ses côtés. Les trois médiatrices sont concourantes en un point : le **centre du cercle circonscrit** (deux médiatrices suffisent).',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: '• إذا كانت جميع زوايا المثلث حادة، فالمركز داخل المثلث.\n\n• إذا كان المثلث قائماً، فالمركز منتصف الوتر.\n\n• إذا كانت للمثلث زاوية منفرجة، فالمركز خارج المثلث.',
              fr: '• Si tous les angles du triangle sont aigus, le centre est à l’intérieur.\n\n• Si le triangle est rectangle, le centre est le milieu de l’hypoténuse.\n\n• Si le triangle a un angle obtus, le centre est à l’extérieur.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.8, 3.8],
            y: [-3.5, 3.5],
            polygons: [
              { points: [[-3, -1], [3, -1], [1, 3]], color: 'brand' },
              { points: circle(0, 0, Math.sqrt(10)), color: 'saffron' },
            ],
            segments: [
              { from: [0, -3.4], to: [0, 3.4], dashed: true },
              { from: [-2.4, 2.4], to: [2.4, -2.4], dashed: true },
            ],
            points: [
              { x: -3, y: -1, label: 'A' },
              { x: 3, y: -1, label: 'B' },
              { x: 1, y: 3, label: 'C' },
              { x: 0, y: 0, label: 'O' },
            ],
            caption: { ar: 'واسطا $[AB]$ و $[AC]$ يتقاطعان في $O$ مركز الدائرة المحيطة.', fr: 'Les médiatrices de $[AB]$ et $[AC]$ se coupent en $O$, centre du cercle circonscrit.' },
          },
        ],
      },
      {
        id: 'bissectrices',
        title: { ar: 'المنصفات والدائرة المحاطة', fr: 'Bissectrices et cercle inscrit' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'منصف مثلث هو منصف إحدى زواياه. المنصفات الثلاثة متلاقية في **مركز الدائرة المحاطة** بالمثلث، وهو دائماً داخل المثلث.',
              fr: 'Une bissectrice d’un triangle est la bissectrice de l’un de ses angles. Les trois bissectrices sont concourantes au **centre du cercle inscrit**, toujours à l’intérieur du triangle.',
            },
          },
        ],
      },
      {
        id: 'hauteurs',
        title: { ar: 'الارتفاعات والمركز القائم', fr: 'Hauteurs et orthocentre' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'ارتفاع مثلث هو المستقيم المار من رأس والعمودي على حامل الضلع المقابل. الارتفاعات الثلاثة متلاقية في نقطة تسمى **المركز القائم** للمثلث. إذا كانت للمثلث زاوية منفرجة، فالمركز القائم خارج المثلث.',
              fr: 'Une hauteur d’un triangle est la droite passant par un sommet et perpendiculaire au support du côté opposé. Les trois hauteurs sont concourantes en l’**orthocentre**. Si le triangle a un angle obtus, l’orthocentre est à l’extérieur.',
            },
          },
        ],
      },
      {
        id: 'medianes',
        title: { ar: 'المتوسطات ومركز الثقل', fr: 'Médianes et centre de gravité' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'متوسط مثلث هو المستقيم المار من رأس ومن منتصف الضلع المقابل. المتوسطات الثلاثة متلاقية في **مركز ثقل** المثلث.',
              fr: 'Une médiane d’un triangle est la droite passant par un sommet et le milieu du côté opposé. Les trois médianes sont concourantes au **centre de gravité**.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'إذا كان $G$ مركز ثقل المثلث $ABC$ و $M$ منتصف $[BC]$ فإن: $AG=\\dfrac23AM$ و $GM=\\dfrac13AM$ و $AG=2GM$.',
              fr: 'Si $G$ est le centre de gravité de $ABC$ et $M$ le milieu de $[BC]$, alors : $AG=\\dfrac23AM$, $GM=\\dfrac13AM$ et $AG=2GM$.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.6, 4.6],
            y: [-1.8, 3.6],
            polygons: [{ points: [[0, 3], [-3, -1], [4, -1]], color: 'brand' }],
            segments: [
              { from: [0, 3], to: [0.5, -1], dashed: true },
              { from: [-3, -1], to: [2, 1], dashed: true },
            ],
            points: [
              { x: 0, y: 3, label: 'A' },
              { x: -3, y: -1, label: 'B' },
              { x: 4, y: -1, label: 'C' },
              { x: 0.5, y: -1, label: 'M' },
              { x: 2, y: 1, label: "M'" },
              { x: 1 / 3, y: 1 / 3, label: 'G' },
            ],
            caption: { ar: 'المتوسطان $(AM)$ و $(BM\')$ يتقاطعان في مركز الثقل $G$.', fr: 'Les médianes $(AM)$ et $(BM\')$ se coupent au centre de gravité $G$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'الواسطات ← مركز الدائرة المحيطة؛ المنصفات ← مركز الدائرة المحاطة.', fr: 'Médiatrices → centre du cercle circonscrit ; bissectrices → centre du cercle inscrit.' },
      { ar: 'الارتفاعات ← المركز القائم؛ المتوسطات ← مركز الثقل.', fr: 'Hauteurs → orthocentre ; médianes → centre de gravité.' },
      { ar: '$AG=\\dfrac23AM$.', fr: '$AG=\\dfrac23AM$.' },
    ],
  },
  exercises: [
    {
      id: '2ac-drr-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مركز الدائرة المحيطة', fr: 'Centre du cercle circonscrit' },
      statement: { ar: 'مركز الدائرة المحيطة بمثلث هو نقطة تلاقي…', fr: 'Le centre du cercle circonscrit à un triangle est le point de concours des…' },
      question: {
        type: 'mcq',
        options: [{ ar: 'الواسطات', fr: 'médiatrices' }, { ar: 'المنصفات', fr: 'bissectrices' }, { ar: 'الارتفاعات', fr: 'hauteurs' }, { ar: 'المتوسطات', fr: 'médianes' }],
        correct: 0,
      },
      hints: [{ ar: 'المركز على نفس المسافة من الرؤوس الثلاثة.', fr: 'Le centre est équidistant des trois sommets.' }],
      solution: [{ ar: 'كل نقطة من واسط قطعة على نفس المسافة من طرفيها، إذن المركز نقطة تلاقي الواسطات.', fr: 'Un point de la médiatrice est équidistant des extrémités : le centre est le point de concours des médiatrices.' }],
    },
    {
      id: '2ac-drr-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مركز الثقل', fr: 'Centre de gravité' },
      statement: { ar: '$G$ مركز ثقل المثلث $ABC$ و $M$ منتصف $[BC]$ مع $AM=9\\,\\text{cm}$. احسب $AG$.', fr: '$G$ est le centre de gravité de $ABC$, $M$ le milieu de $[BC]$ et $AM=9\\,\\text{cm}$. Calculer $AG$.' },
      question: { type: 'numeric', answer: 6, unit: 'cm' },
      hints: [{ ar: '$AG=\\dfrac23AM$.', fr: '$AG=\\dfrac23AM$.' }],
      solution: [{ ar: '$AG=\\dfrac23\\times9=6\\,\\text{cm}$.', fr: '$AG=\\dfrac23\\times9=6\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-drr-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'المسافة GM', fr: 'La distance GM' },
      statement: { ar: '$G$ مركز ثقل $ABC$ و $M$ منتصف $[BC]$ مع $AG=8\\,\\text{cm}$. احسب $GM$.', fr: '$G$ est le centre de gravité de $ABC$, $M$ le milieu de $[BC]$ et $AG=8\\,\\text{cm}$. Calculer $GM$.' },
      question: { type: 'numeric', answer: 4, unit: 'cm' },
      hints: [{ ar: '$AG=2GM$.', fr: '$AG=2GM$.' }],
      solution: [{ ar: '$GM=\\dfrac{AG}2=4\\,\\text{cm}$.', fr: '$GM=\\dfrac{AG}2=4\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-drr-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلث قائم', fr: 'Triangle rectangle' },
      statement: { ar: 'مثلث قائم الزاوية طول وتره $10\\,\\text{cm}$. ما شعاع دائرته المحيطة؟', fr: 'Un triangle rectangle a une hypoténuse de $10\\,\\text{cm}$. Quel est le rayon de son cercle circonscrit ?' },
      question: { type: 'numeric', answer: 5, unit: 'cm' },
      hints: [{ ar: 'المركز هو منتصف الوتر.', fr: 'Le centre est le milieu de l’hypoténuse.' }],
      solution: [{ ar: 'الشعاع نصف الوتر: $\\dfrac{10}2=5\\,\\text{cm}$.', fr: 'Le rayon est la moitié de l’hypoténuse : $\\dfrac{10}2=5\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-drr-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'موضع المركز القائم', fr: 'Position de l’orthocentre' },
      statement: { ar: '$ABC$ مثلث بحيث $AB=6$ و $AC=2$ و $BC=7$. أين يوجد مركزه القائم؟', fr: '$ABC$ est un triangle avec $AB=6$, $AC=2$ et $BC=7$. Où se trouve son orthocentre ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'خارج المثلث', fr: 'À l’extérieur du triangle' }, { ar: 'داخل المثلث', fr: 'À l’intérieur du triangle' }, { ar: 'على أحد الأضلاع', fr: 'Sur un côté' }],
        correct: 0,
      },
      hints: [{ ar: 'قارن $BC^2$ و $AB^2+AC^2$.', fr: 'Compare $BC^2$ et $AB^2+AC^2$.' }],
      solution: [
        { ar: '$BC^2=49>AB^2+AC^2=40$، إذن الزاوية $\\hat A$ منفرجة.', fr: '$BC^2=49>AB^2+AC^2=40$, donc l’angle $\\hat A$ est obtus.' },
        { ar: 'في مثلث له زاوية منفرجة، يوجد المركز القائم خارج المثلث.', fr: 'Dans un triangle ayant un angle obtus, l’orthocentre est à l’extérieur.' },
      ],
    },
  ],
};
