import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-triangle-rectangle-cercle';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const triangleRectangleCercle: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'right-triangle',
    title: { ar: 'المثلث القائم الزاوية والدائرة', fr: 'Triangle rectangle et cercle' },
    summary: {
      ar: 'منتصف الوتر والدائرة المحيطة بمثلث قائم، مبرهنة فيثاغورس، الجذر المربع وجيب تمام زاوية حادة.',
      fr: 'Milieu de l’hypoténuse et cercle circonscrit d’un triangle rectangle, théorème de Pythagore, racine carrée et cosinus d’un angle aigu.',
    },
    objectives: [
      { ar: 'معرفة الخاصية المميزة للمثلث القائم المحاط بنصف دائرة.', fr: 'Connaître la propriété caractéristique du triangle rectangle inscrit dans un demi-cercle.' },
      { ar: 'استعمال مبرهنة فيثاغورس لحساب طول.', fr: 'Utiliser le théorème de Pythagore pour calculer une longueur.' },
      { ar: 'التعرف على الجذر المربع لعدد موجب.', fr: 'Découvrir la racine carrée d’un nombre positif.' },
      { ar: 'معرفة جيب تمام زاوية حادة واستعماله.', fr: 'Connaître et utiliser le cosinus d’un angle aigu.' },
    ],
    durationMinutes: 45,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['triangle rectangle', 'hypoténuse', 'cercle circonscrit', 'Pythagore', 'racine carrée', 'cosinus', 'مثلث قائم', 'وتر', 'فيثاغورس', 'جذر مربع', 'جيب تمام'],
    sections: [
      {
        id: 'milieu',
        title: { ar: 'منتصف الوتر', fr: 'Milieu de l’hypoténuse' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'الخاصية المباشرة', fr: 'Propriété directe' },
            content: {
              ar: 'إذا كان مثلث قائم الزاوية، فإن منتصف وتره على نفس المسافة من رؤوسه الثلاثة. إذا كان $ABC$ قائماً في $B$ و $M$ منتصف $[AC]$: $MA=MB=MC=\\dfrac{AC}2$.',
              fr: 'Si un triangle est rectangle, le milieu de son hypoténuse est équidistant de ses trois sommets. Si $ABC$ est rectangle en $B$ et $M$ le milieu de $[AC]$ : $MA=MB=MC=\\dfrac{AC}2$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية العكسية', fr: 'Propriété réciproque' },
            content: {
              ar: 'إذا كان منتصف أحد أضلاع مثلث على نفس المسافة من رؤوسه الثلاثة، فإن المثلث قائم الزاوية في الرأس المقابل لهذا الضلع.',
              fr: 'Si, dans un triangle, le milieu d’un côté est équidistant des trois sommets, alors ce triangle est rectangle au sommet opposé à ce côté.',
            },
          },
        ],
      },
      {
        id: 'cercle',
        title: { ar: 'المثلث القائم والدائرة', fr: 'Triangle rectangle et cercle' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كان مثلث قائم الزاوية، فإن دائرته المحيطة مركزها منتصف الوتر وشعاعها نصف الوتر.\n\n• **عكسياً**: إذا كان مثلث محاطاً بدائرة قطرها أحد أضلاعه، فإنه قائم الزاوية في الرأس المقابل لهذا الضلع.',
              fr: '• Si un triangle est rectangle, son cercle circonscrit a pour centre le milieu de l’hypoténuse et pour rayon la moitié de l’hypoténuse.\n\n• **Réciproquement** : si un triangle est inscrit dans un cercle ayant pour diamètre l’un de ses côtés, il est rectangle au sommet opposé à ce côté.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.6, 3.6],
            y: [-3.3, 3.3],
            polygons: [
              { points: circle(0, 0, 3), color: 'saffron' },
              { points: [[-3, 0], [3, 0], [1.5, 2.598]], color: 'brand' },
            ],
            rightAngles: [{ at: [1.5, 2.598], u: [-0.866, -0.5], v: [0.5, -0.866] }],
            points: [
              { x: -3, y: 0, label: 'A' },
              { x: 3, y: 0, label: 'B' },
              { x: 1.5, y: 2.598, label: 'C' },
              { x: 0, y: 0, label: 'O' },
            ],
            caption: { ar: '$[AB]$ قطر للدائرة إذن المثلث $ABC$ قائم في $C$.', fr: '$[AB]$ est un diamètre, donc $ABC$ est rectangle en $C$.' },
          },
        ],
      },
      {
        id: 'pythagore',
        title: { ar: 'مبرهنة فيثاغورس', fr: 'Théorème de Pythagore' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'إذا كان مثلث قائم الزاوية، فإن مربع طول الوتر يساوي مجموع مربعي طولي الضلعين الآخرين: إذا كان $ABC$ قائماً في $A$ فإن $BC^2=AB^2+AC^2$.',
              fr: 'Si un triangle est rectangle, le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés : si $ABC$ est rectangle en $A$, alors $BC^2=AB^2+AC^2$.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.8, 4.8],
            y: [-0.8, 3.6],
            polygons: [{ points: [[0, 0], [0, 3], [4, 0]], color: 'brand' }],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: 0, y: 0, label: 'I' },
              { x: 0, y: 3, label: 'J' },
              { x: 4, y: 0, label: 'K' },
            ],
            caption: { ar: '$IJ=3$ و $IK=4$ ومنه $JK=5$.', fr: '$IJ=3$, $IK=4$, d’où $JK=5$.' },
          },
          {
            kind: 'example',
            statement: { ar: '$IJK$ قائم في $I$ مع $IJ=3\\,\\text{cm}$ و $IK=4\\,\\text{cm}$. احسب $JK$.', fr: '$IJK$ est rectangle en $I$, $IJ=3\\,\\text{cm}$, $IK=4\\,\\text{cm}$. Calculer $JK$.' },
            steps: [
              { ar: 'حسب مبرهنة فيثاغورس: $JK^2=IJ^2+IK^2=9+16=25$.', fr: 'D’après le théorème de Pythagore : $JK^2=IJ^2+IK^2=9+16=25$.' },
              { ar: '$JK=5\\,\\text{cm}$. ملاحظة: الوتر أطول أضلاع المثلث القائم.', fr: '$JK=5\\,\\text{cm}$. Remarque : l’hypoténuse est le plus long côté.' },
            ],
          },
        ],
      },
      {
        id: 'racine',
        title: { ar: 'الجذر المربع', fr: 'Racine carrée' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الجذر المربع لعدد موجب $a$ هو العدد الموجب الذي مربعه $a$، ونرمز له بـ $\\sqrt a$. مثال: $14^2=196$ إذن $\\sqrt{196}=14$.\n\nلكل عدد موجب $a$: $(\\sqrt a)^2=a$ و $\\sqrt{a^2}=a$.',
              fr: 'La racine carrée d’un nombre positif $a$ est le nombre positif dont le carré vaut $a$ ; on la note $\\sqrt a$. Exemple : $14^2=196$ donc $\\sqrt{196}=14$.\n\nPour tout nombre positif $a$ : $(\\sqrt a)^2=a$ et $\\sqrt{a^2}=a$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'في مثلث قائم ومتساوي الساقين ضلعاه $1$، الوتر $\\sqrt2\\approx1{,}414$. العدد $\\sqrt2$ ليس عدداً جذرياً: إنه عدد **لاجذري**.',
              fr: 'Dans un triangle rectangle isocèle de côtés $1$, l’hypoténuse vaut $\\sqrt2\\approx1{,}414$. Le nombre $\\sqrt2$ n’est pas rationnel : il est **irrationnel**.',
            },
          },
        ],
      },
      {
        id: 'cosinus',
        title: { ar: 'جيب تمام زاوية حادة', fr: 'Cosinus d’un angle aigu' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'في مثلث قائم الزاوية، جيب تمام زاوية حادة هو خارج طول الضلع المجاور لها على طول الوتر: $\\cos x=\\dfrac{\\text{الضلع المجاور}}{\\text{الوتر}}$.',
              fr: 'Dans un triangle rectangle, le cosinus d’un angle aigu est le quotient de la longueur du côté adjacent par celle de l’hypoténuse : $\\cos x=\\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$EFG$ قائم في $G$.', fr: '$EFG$ est rectangle en $G$.' },
            steps: [
              { ar: '$\\cos\\hat E=\\dfrac{EG}{EF}$ و $\\cos\\hat F=\\dfrac{FG}{EF}$، ومنه $EG=EF\\times\\cos\\hat E$.', fr: '$\\cos\\hat E=\\dfrac{EG}{EF}$ et $\\cos\\hat F=\\dfrac{FG}{EF}$, d’où $EG=EF\\times\\cos\\hat E$.' },
            ],
          },
          {
            kind: 'remark',
            content: {
              ar: 'لكل زاوية حادة قياسها $x$: $0<\\cos x<1$. جيب التمام عدد بدون وحدة. نستعمل الآلة الحاسبة (بالدرجات) لإيجاد $\\cos x$ أو $x$.',
              fr: 'Pour tout angle aigu de mesure $x$ : $0<\\cos x<1$. Le cosinus n’a pas d’unité. On utilise la calculatrice (en degrés) pour trouver $\\cos x$ ou $x$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'في مثلث قائم، منتصف الوتر مركز الدائرة المحيطة.', fr: 'Dans un triangle rectangle, le milieu de l’hypoténuse est le centre du cercle circonscrit.' },
      { ar: 'فيثاغورس: $BC^2=AB^2+AC^2$ (قائم في $A$).', fr: 'Pythagore : $BC^2=AB^2+AC^2$ (rectangle en $A$).' },
      { ar: '$\\cos x=\\dfrac{\\text{المجاور}}{\\text{الوتر}}$ و $0<\\cos x<1$.', fr: '$\\cos x=\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$ et $0<\\cos x<1$.' },
    ],
  },
  exercises: [
    {
      id: '2ac-trc-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منتصف الوتر', fr: 'Milieu de l’hypoténuse' },
      statement: { ar: '$IJK$ قائم في $I$ مع $JK=6\\,\\text{cm}$، و $O$ منتصف $[JK]$. احسب $IO$.', fr: '$IJK$ est rectangle en $I$ avec $JK=6\\,\\text{cm}$ ; $O$ est le milieu de $[JK]$. Calculer $IO$.' },
      question: { type: 'numeric', answer: 3, unit: 'cm' },
      hints: [{ ar: '$IO=\\dfrac{JK}2$.', fr: '$IO=\\dfrac{JK}2$.' }],
      solution: [{ ar: '$IO=OJ=OK=\\dfrac62=3\\,\\text{cm}$.', fr: '$IO=OJ=OK=\\dfrac62=3\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-trc-02',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'زاوية في نصف دائرة', fr: 'Angle dans un demi-cercle' },
      statement: { ar: '$[AB]$ قطر لدائرة و $C$ نقطة منها، مع $A\\hat BC=38{,}7^\\circ$. احسب $B\\hat AC$ بالدرجات.', fr: '$[AB]$ est un diamètre d’un cercle et $C$ un point de ce cercle, avec $A\\hat BC=38{,}7^\\circ$. Calculer $B\\hat AC$ en degrés.' },
      question: { type: 'numeric', answer: 51.3, tolerance: 1e-6, unit: '°' },
      hints: [{ ar: 'المثلث $ABC$ قائم في $C$.', fr: 'Le triangle $ABC$ est rectangle en $C$.' }],
      solution: [{ ar: '$B\\hat AC=180-90-38{,}7=51{,}3^\\circ$.', fr: '$B\\hat AC=180-90-38{,}7=51{,}3^\\circ$.' }],
    },
    {
      id: '2ac-trc-03',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حساب الوتر', fr: 'Calcul de l’hypoténuse' },
      statement: { ar: '$ABC$ قائم في $C$ مع $CB=6$ و $CA=8$. احسب $AB$.', fr: '$ABC$ est rectangle en $C$ avec $CB=6$ et $CA=8$. Calculer $AB$.' },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: '$AB^2=CB^2+CA^2$.', fr: '$AB^2=CB^2+CA^2$.' }],
      solution: [{ ar: '$AB^2=36+64=100$ ومنه $AB=10$.', fr: '$AB^2=36+64=100$ donc $AB=10$.' }],
    },
    {
      id: '2ac-trc-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'حساب ضلع قائم', fr: 'Calcul d’un côté de l’angle droit' },
      statement: { ar: '$ABC$ قائم في $A$ مع $BC=2{,}5$ و $AC=1{,}5$. احسب $AB$.', fr: '$ABC$ est rectangle en $A$ avec $BC=2{,}5$ et $AC=1{,}5$. Calculer $AB$.' },
      question: { type: 'numeric', answer: 2, tolerance: 1e-9 },
      hints: [{ ar: '$AB^2=BC^2-AC^2$.', fr: '$AB^2=BC^2-AC^2$.' }],
      solution: [{ ar: '$AB^2=6{,}25-2{,}25=4$ ومنه $AB=2$.', fr: '$AB^2=6{,}25-2{,}25=4$ donc $AB=2$.' }],
    },
    {
      id: '2ac-trc-05',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'جذور مربعة', fr: 'Racines carrées' },
      statement: { ar: 'احسب $\\dfrac{\\sqrt{81}}{\\sqrt{64}}$ (الكتابة العشرية).', fr: 'Calculer $\\dfrac{\\sqrt{81}}{\\sqrt{64}}$ (écriture décimale).' },
      question: { type: 'numeric', answer: 1.125, tolerance: 1e-9 },
      hints: [{ ar: '$\\sqrt{81}=9$ و $\\sqrt{64}=8$.', fr: '$\\sqrt{81}=9$ et $\\sqrt{64}=8$.' }],
      solution: [{ ar: '$\\dfrac98=1{,}125$.', fr: '$\\dfrac98=1{,}125$.' }],
    },
    {
      id: '2ac-trc-06',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'جيب التمام', fr: 'Cosinus' },
      statement: { ar: '$IJK$ قائم في $I$ مع $IJ=6$ و $IK=8$. احسب $\\cos\\hat J$.', fr: '$IJK$ est rectangle en $I$ avec $IJ=6$ et $IK=8$. Calculer $\\cos\\hat J$.' },
      question: { type: 'numeric', answer: 0.6, tolerance: 1e-9 },
      hints: [{ ar: 'احسب الوتر $JK$ أولاً.', fr: 'Calcule d’abord l’hypoténuse $JK$.' }],
      solution: [
        { ar: '$JK^2=36+64=100$ ومنه $JK=10$.', fr: '$JK^2=36+64=100$ donc $JK=10$.' },
        { ar: '$\\cos\\hat J=\\dfrac{IJ}{JK}=\\dfrac6{10}=0{,}6$.', fr: '$\\cos\\hat J=\\dfrac{IJ}{JK}=\\dfrac6{10}=0{,}6$.' },
      ],
    },
    {
      id: '2ac-trc-07',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'قياس زاوية', fr: 'Mesure d’un angle' },
      statement: { ar: '$ABC$ قائم في $B$ مع $AB=4{,}8$ و $AC=6{,}9$. احسب $B\\hat AC$ بالدرجات (إلى $0{,}1$).', fr: '$ABC$ est rectangle en $B$ avec $AB=4{,}8$ et $AC=6{,}9$. Calculer $B\\hat AC$ en degrés (au dixième).' },
      question: { type: 'numeric', answer: 45.9, tolerance: 0.1, unit: '°' },
      hints: [{ ar: '$\\cos B\\hat AC=\\dfrac{AB}{AC}$ ثم استعمل الآلة الحاسبة.', fr: '$\\cos B\\hat AC=\\dfrac{AB}{AC}$ puis utilise la calculatrice.' }],
      solution: [
        { ar: '$\\cos B\\hat AC=\\dfrac{4{,}8}{6{,}9}\\approx0{,}696$.', fr: '$\\cos B\\hat AC=\\dfrac{4{,}8}{6{,}9}\\approx0{,}696$.' },
        { ar: 'بالآلة الحاسبة: $B\\hat AC\\approx45{,}9^\\circ$.', fr: 'À la calculatrice : $B\\hat AC\\approx45{,}9^\\circ$.' },
      ],
    },
  ],
};
