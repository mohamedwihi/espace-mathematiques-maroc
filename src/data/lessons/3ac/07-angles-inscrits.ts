import type { LessonModule } from '@/types';

const lessonId = '3ac-angles-inscrits';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

const P = (deg: number, r = 3): [number, number] => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const A = P(210);
const B = P(330);
const M = P(100);

export const anglesInscrits: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'inscribed-angles',
    title: { ar: 'الزاوية المحيطية والزاوية المركزية', fr: 'Angle inscrit et angle au centre' },
    summary: {
      ar: 'تعريف الزاوية المركزية والزاوية المحيطية، الزاويتان المحيطيتان اللتان تحصران نفس القوس، والعلاقة بين الزاوية المحيطية والزاوية المركزية.',
      fr: 'Définitions de l’angle au centre et de l’angle inscrit, angles inscrits interceptant le même arc, relation entre angle inscrit et angle au centre.',
    },
    objectives: [
      { ar: 'التعرف على الزاوية المركزية والزاوية المحيطية.', fr: 'Reconnaître un angle au centre et un angle inscrit.' },
      { ar: 'مقارنة زاويتين محيطيتين تحصران نفس القوس.', fr: 'Comparer deux angles inscrits interceptant le même arc.' },
      { ar: 'استعمال العلاقة: الزاوية المركزية ضعف الزاوية المحيطية.', fr: 'Utiliser : l’angle au centre est le double de l’angle inscrit.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    keywords: ['angle inscrit', 'angle au centre', 'arc', 'cercle', 'زاوية محيطية', 'زاوية مركزية', 'قوس'],
    sections: [
      {
        id: 'definitions',
        title: { ar: 'تعاريف', fr: 'Définitions' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• **الزاوية المركزية** زاوية رأسها مركز الدائرة.\n\n• **الزاوية المحيطية** زاوية رأسها نقطة من الدائرة وضلعاها يقطعان الدائرة.\n\nنقول إن الزاوية «تحصر» القوس المحدود بنقطتي تقاطع ضلعيها مع الدائرة.',
              fr: '• Un **angle au centre** est un angle dont le sommet est le centre du cercle.\n\n• Un **angle inscrit** est un angle dont le sommet est sur le cercle et dont les côtés coupent le cercle.\n\nL’angle « intercepte » l’arc limité par les points où ses côtés coupent le cercle.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.6, 3.6],
            y: [-3.4, 3.6],
            polygons: [{ points: circle(0, 0, 3), color: 'brand' }],
            segments: [
              { from: [0, 0], to: A },
              { from: [0, 0], to: B },
              { from: M, to: A, dashed: true },
              { from: M, to: B, dashed: true },
            ],
            points: [
              { x: 0, y: 0, label: 'O' },
              { x: A[0], y: A[1], label: 'A' },
              { x: B[0], y: B[1], label: 'B' },
              { x: M[0], y: M[1], label: 'M' },
            ],
            caption: { ar: '$A\\hat OB$ زاوية مركزية و $A\\hat MB$ زاوية محيطية تحصران نفس القوس: $A\\hat OB=2\\,A\\hat MB$.', fr: '$A\\hat OB$ (au centre) et $A\\hat MB$ (inscrit) interceptent le même arc : $A\\hat OB=2\\,A\\hat MB$.' },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'خاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'نفس القوس', fr: 'Même arc' },
            content: {
              ar: 'في دائرة، إذا حصرت زاويتان محيطيتان نفس القوس فإن لهما نفس القياس.',
              fr: 'Dans un cercle, deux angles inscrits qui interceptent le même arc ont la même mesure.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الزاوية المركزية', fr: 'Angle au centre' },
            content: {
              ar: 'إذا حصرت زاوية محيطية وزاوية مركزية نفس القوس، فإن قياس الزاوية المركزية يساوي ضعف قياس الزاوية المحيطية.',
              fr: 'Si un angle inscrit et un angle au centre interceptent le même arc, la mesure de l’angle au centre est le double de celle de l’angle inscrit.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'الزاوية بين وتر والمماس في أحد طرفيه تعتبر أيضاً زاوية محيطية تحصر القوس المحدود بالوتر.',
              fr: 'L’angle formé par une corde et la tangente en l’une de ses extrémités est aussi un angle inscrit interceptant l’arc de la corde.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$A\\hat OB=150^\\circ$ و $M$ نقطة من القوس الكبير $AB$. احسب $A\\hat MB$.', fr: '$A\\hat OB=150^\\circ$ et $M$ est sur le grand arc $AB$. Calculer $A\\hat MB$.' },
            steps: [{ ar: '$A\\hat MB=\\dfrac{150^\\circ}2=75^\\circ$.', fr: '$A\\hat MB=\\dfrac{150^\\circ}2=75^\\circ$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: 'زاويتان محيطيتان تحصران نفس القوس ← متقايستان.', fr: 'Deux angles inscrits interceptant le même arc → égaux.' },
      { ar: 'الزاوية المركزية = ضعف الزاوية المحيطية المرتبطة بها.', fr: 'Angle au centre = double de l’angle inscrit associé.' },
    ],
  },
  exercises: [
    {
      id: '3ac-ins-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'من المحيطية إلى المركزية', fr: 'De l’inscrit au centre' },
      statement: { ar: 'زاوية محيطية $B\\hat AC=65^\\circ$ تحصر القوس $BC$ لدائرة مركزها $O$. احسب $B\\hat OC$.', fr: 'L’angle inscrit $B\\hat AC=65^\\circ$ intercepte l’arc $BC$ d’un cercle de centre $O$. Calculer $B\\hat OC$.' },
      question: { type: 'numeric', answer: 130, unit: '°' },
      hints: [{ ar: 'الزاوية المركزية ضعف المحيطية.', fr: 'L’angle au centre est le double de l’angle inscrit.' }],
      solution: [{ ar: '$B\\hat OC=2\\times65^\\circ=130^\\circ$.', fr: '$B\\hat OC=2\\times65^\\circ=130^\\circ$.' }],
    },
    {
      id: '3ac-ins-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'نفس القوس', fr: 'Même arc' },
      statement: { ar: '$M$ و $N$ نقطتان من نفس القوس $AB$ مع $A\\hat MB=38^\\circ$. احسب $A\\hat NB$.', fr: '$M$ et $N$ sont sur le même arc $AB$, avec $A\\hat MB=38^\\circ$. Calculer $A\\hat NB$.' },
      question: { type: 'numeric', answer: 38, unit: '°' },
      hints: [{ ar: 'زاويتان محيطيتان تحصران نفس القوس.', fr: 'Deux angles inscrits interceptent le même arc.' }],
      solution: [{ ar: '$A\\hat NB=A\\hat MB=38^\\circ$.', fr: '$A\\hat NB=A\\hat MB=38^\\circ$.' }],
    },
    {
      id: '3ac-ins-03',
      lessonId,
      levelId: '3ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'نقطة مقابلة قطرياً', fr: 'Point diamétralement opposé' },
      statement: {
        ar: '$A$ و $B$ و $C$ نقط من دائرة مع $B\\hat AC=65^\\circ$، و $M$ النقطة المقابلة قطرياً لـ $C$ (وتوجد على نفس القوس مع $A$). احسب $B\\hat AM$.',
        fr: '$A$, $B$, $C$ sont sur un cercle avec $B\\hat AC=65^\\circ$ ; $M$ est le point diamétralement opposé à $C$ (du même côté que $A$). Calculer $B\\hat AM$.',
      },
      question: { type: 'numeric', answer: 25, unit: '°' },
      hints: [
        { ar: '$B\\hat MC=B\\hat AC$ (نفس القوس).', fr: '$B\\hat MC=B\\hat AC$ (même arc).' },
        { ar: 'المثلث $MBC$ قائم في $B$ لأن $[MC]$ قطر.', fr: 'Le triangle $MBC$ est rectangle en $B$ car $[MC]$ est un diamètre.' },
      ],
      solution: [
        { ar: '$B\\hat MC=65^\\circ$ و $M\\hat BC=90^\\circ$ إذن $B\\hat CM=25^\\circ$.', fr: '$B\\hat MC=65^\\circ$ et $M\\hat BC=90^\\circ$ donc $B\\hat CM=25^\\circ$.' },
        { ar: '$B\\hat AM$ و $B\\hat CM$ تحصران القوس $BM$، إذن $B\\hat AM=25^\\circ$.', fr: '$B\\hat AM$ et $B\\hat CM$ interceptent l’arc $BM$, donc $B\\hat AM=25^\\circ$.' },
      ],
    },
    {
      id: '3ac-ins-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'طول وتر', fr: 'Longueur d’une corde' },
      statement: {
        ar: 'دائرة شعاعها $3$ محيطة بالمثلث $ABF$ مع $B\\hat AF=40^\\circ$. نقبل أن $BF=6\\sin40^\\circ$ و $\\sin40^\\circ\\approx0{,}65$. احسب قيمة مقربة لـ $BF$.',
        fr: 'Un cercle de rayon $3$ est circonscrit au triangle $ABF$ avec $B\\hat AF=40^\\circ$. On admet que $BF=6\\sin40^\\circ$ et $\\sin40^\\circ\\approx0{,}65$. Donner une valeur approchée de $BF$.',
      },
      question: { type: 'numeric', answer: 3.9, tolerance: 0.01 },
      hints: [{ ar: '$6\\times0{,}65$.', fr: '$6\\times0{,}65$.' }],
      solution: [
        { ar: 'نأخذ $H$ مقابلة $F$ قطرياً: $B\\hat HF=B\\hat AF=40^\\circ$ والمثلث $BHF$ قائم في $B$ ووتره $HF=6$.', fr: 'Avec $H$ diamétralement opposé à $F$ : $B\\hat HF=B\\hat AF=40^\\circ$ et $BHF$ est rectangle en $B$, d’hypoténuse $HF=6$.' },
        { ar: '$BF=6\\sin40^\\circ\\approx6\\times0{,}65=3{,}9$.', fr: '$BF=6\\sin40^\\circ\\approx6\\times0{,}65=3{,}9$.' },
      ],
    },
  ],
};
