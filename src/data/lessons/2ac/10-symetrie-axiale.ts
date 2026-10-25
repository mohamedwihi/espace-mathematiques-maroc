import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-symetrie-axiale';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const symetrieAxiale: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'axial-symmetry',
    title: { ar: 'التماثل المحوري', fr: 'Symétrie axiale' },
    summary: {
      ar: 'مماثل نقطة وقطعة ومستقيم ونصف مستقيم وزاوية ودائرة بالنسبة لمستقيم، وخاصيات الحفاظ.',
      fr: 'Symétrique d’un point, d’un segment, d’une droite, d’une demi-droite, d’un angle et d’un cercle par rapport à une droite, et propriétés de conservation.',
    },
    objectives: [
      { ar: 'إنشاء مماثل شكل بالنسبة لمستقيم.', fr: 'Construire le symétrique d’une figure par rapport à une droite.' },
      { ar: 'استعمال خاصيات التماثل المحوري في البرهنة.', fr: 'Utiliser les propriétés de la symétrie axiale dans une démonstration.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['symétrie axiale', 'axe', 'médiatrice', 'symétrique', 'conservation', 'تماثل محوري', 'محور', 'واسط', 'مماثل'],
    sections: [
      {
        id: 'point',
        title: { ar: 'مماثل نقطة', fr: 'Symétrique d’un point' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'مماثل نقطة $M$ بالنسبة لمستقيم $(\\Delta)$ هو النقطة $M\'$ بحيث يكون $(\\Delta)$ واسط القطعة $[MM\']$.\n\nإذا كانت $M\\in(\\Delta)$ فمماثلها هو $M$ نفسها.',
              fr: 'Le symétrique d’un point $M$ par rapport à une droite $(\\Delta)$ est le point $M\'$ tel que $(\\Delta)$ soit la médiatrice de $[MM\']$.\n\nSi $M\\in(\\Delta)$, son symétrique est $M$ lui-même.',
            },
          },
          {
            kind: 'geometry',
            x: [-4, 4],
            y: [-3, 3],
            segments: [
              { from: [0, -2.8], to: [0, 2.8] },
              { from: [-2.5, 1], to: [2.5, 1], dashed: true },
              { from: [-3, -1.2], to: [-1.4, -2.4] },
              { from: [3, -1.2], to: [1.4, -2.4] },
            ],
            rightAngles: [{ at: [0, 1], u: [1, 0], v: [0, 1] }],
            points: [
              { x: -2.5, y: 1, label: 'M' },
              { x: 2.5, y: 1, label: "M'" },
              { x: -3, y: -1.2, label: 'A' },
              { x: -1.4, y: -2.4, label: 'B' },
              { x: 3, y: -1.2, label: "A'" },
              { x: 1.4, y: -2.4, label: "B'" },
            ],
            caption: { ar: '$(\\Delta)$ هو المحور العمودي: $M\'$ مماثلة $M$، و $[A\'B\']$ مماثلة $[AB]$.', fr: '$(\\Delta)$ est l’axe vertical : $M\'$ est le symétrique de $M$ et $[A\'B\']$ celui de $[AB]$.' },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'خاصيات التماثل المحوري', fr: 'Propriétés de la symétrie axiale' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'القطعة', fr: 'Segment' },
            content: {
              ar: 'مماثل قطعة هو قطعة لها نفس الطول: **التماثل المحوري يحافظ على المسافات**.',
              fr: 'Le symétrique d’un segment est un segment de même longueur : **la symétrie axiale conserve les distances**.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المستقيم ونصف المستقيم', fr: 'Droite et demi-droite' },
            content: {
              ar: '• مماثل مستقيم $(D)$ مستقيم $(D\')$: إذا كان $(D)\\parallel(\\Delta)$ فإن $(D\')\\parallel(\\Delta)$؛ وإذا قطع $(D)$ المحور في $O$ فإن $(D\')$ يقطعه في $O$ أيضاً.\n\n• مماثل نصف مستقيم هو نصف مستقيم.\n\n• **التماثل المحوري يحافظ على استقامية النقط.**',
              fr: '• Le symétrique d’une droite $(D)$ est une droite $(D\')$ : si $(D)\\parallel(\\Delta)$ alors $(D\')\\parallel(\\Delta)$ ; si $(D)$ coupe l’axe en $O$, $(D\')$ le coupe aussi en $O$.\n\n• Le symétrique d’une demi-droite est une demi-droite.\n\n• **La symétrie axiale conserve l’alignement.**',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الزاوية والدائرة', fr: 'Angle et cercle' },
            content: {
              ar: '• مماثل زاوية زاوية لها نفس القياس: **التماثل المحوري يحافظ على قياسات الزوايا**.\n\n• مماثل دائرة مركزها $O$ وشعاعها $r$ هو الدائرة التي مركزها $O\'$ (مماثل $O$) ولها نفس الشعاع $r$.',
              fr: '• Le symétrique d’un angle est un angle de même mesure : **la symétrie axiale conserve les angles**.\n\n• Le symétrique d’un cercle de centre $O$ et de rayon $r$ est le cercle de centre $O\'$ (symétrique de $O$) et de même rayon $r$.',
            },
          },
          {
            kind: 'geometry',
            x: [-4.5, 4.5],
            y: [-2.2, 2.2],
            polygons: [
              { points: circle(-2.6, 0, 1.2), color: 'brand' },
              { points: circle(2.6, 0, 1.2), color: 'saffron' },
            ],
            segments: [
              { from: [0, -2], to: [0, 2] },
              { from: [-2.6, 0], to: [2.6, 0], dashed: true },
            ],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: -2.6, y: 0, label: 'O' },
              { x: 2.6, y: 0, label: "O'" },
            ],
            caption: { ar: 'الدائرة ومماثلتها لهما نفس الشعاع.', fr: 'Le cercle et son symétrique ont le même rayon.' },
          },
          {
            kind: 'example',
            statement: {
              ar: '$ABC$ مثلث متساوي الساقين في $A$، و $A\'$ و $B\'$ و $C\'$ مماثلات رؤوسه بالنسبة لمستقيم $(\\Delta)$. ما طبيعة $A\'B\'C\'$؟',
              fr: '$ABC$ est isocèle en $A$ ; $A\'$, $B\'$, $C\'$ sont les symétriques de ses sommets par rapport à $(\\Delta)$. Nature de $A\'B\'C\'$ ?',
            },
            steps: [
              { ar: 'التماثل يحافظ على المسافات: $A\'B\'=AB$ و $A\'C\'=AC$.', fr: 'La symétrie conserve les distances : $A\'B\'=AB$ et $A\'C\'=AC$.' },
              { ar: 'بما أن $AB=AC$ فإن $A\'B\'=A\'C\'$: المثلث $A\'B\'C\'$ متساوي الساقين في $A\'$.', fr: 'Comme $AB=AC$, on a $A\'B\'=A\'C\'$ : $A\'B\'C\'$ est isocèle en $A\'$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$(\\Delta)$ واسط $[MM\']$.', fr: '$(\\Delta)$ est la médiatrice de $[MM\']$.' },
      { ar: 'التماثل المحوري يحافظ على المسافات والاستقامية وقياسات الزوايا.', fr: 'La symétrie axiale conserve les distances, l’alignement et les angles.' },
      { ar: 'مماثل دائرة دائرة لها نفس الشعاع.', fr: 'Le symétrique d’un cercle est un cercle de même rayon.' },
    ],
  },
  exercises: [
    {
      id: '2ac-sym-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'نقطة على المحور', fr: 'Point sur l’axe' },
      statement: { ar: 'النقطة $M$ تنتمي إلى المحور $(\\Delta)$. ما مماثلها بالنسبة لـ $(\\Delta)$؟', fr: 'Le point $M$ appartient à l’axe $(\\Delta)$. Quel est son symétrique par rapport à $(\\Delta)$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$M$ نفسها', fr: '$M$ lui-même' }, { ar: 'غير موجود', fr: 'Il n’existe pas' }, { ar: 'نقطة على مستقيم عمودي', fr: 'Un point sur une perpendiculaire' }],
        correct: 0,
      },
      hints: [{ ar: 'المسافة من $M$ إلى المحور منعدمة.', fr: 'La distance de $M$ à l’axe est nulle.' }],
      solution: [{ ar: 'كل نقطة من المحور هي مماثلة نفسها.', fr: 'Tout point de l’axe est son propre symétrique.' }],
    },
    {
      id: '2ac-sym-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'شعاع الدائرة المماثلة', fr: 'Rayon du cercle symétrique' },
      statement: {
        ar: 'دائرة $(C)$ شعاعها $3\\,\\text{cm}$ ومستقيم $(D)$ يبعد عن مركزها بـ $5\\,\\text{cm}$. ما شعاع $(C\')$ مماثلة $(C)$ بالنسبة لـ $(D)$؟',
        fr: 'Un cercle $(C)$ de rayon $3\\,\\text{cm}$ et une droite $(D)$ à $5\\,\\text{cm}$ de son centre. Quel est le rayon de $(C\')$, symétrique de $(C)$ par rapport à $(D)$ ?',
      },
      question: { type: 'numeric', answer: 3, unit: 'cm' },
      hints: [{ ar: 'التماثل يحافظ على المسافات.', fr: 'La symétrie conserve les distances.' }],
      solution: [{ ar: 'مماثل دائرة دائرة لها نفس الشعاع: $3\\,\\text{cm}$.', fr: 'Le symétrique d’un cercle a le même rayon : $3\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-sym-03',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'زاوية مماثلة', fr: 'Angle symétrique' },
      statement: { ar: 'قياس الزاوية $M\\hat NP$ هو $40^\\circ$. ما قياس مماثلتها $M\'\\hat N\'P\'$ بالدرجات؟', fr: 'L’angle $M\\hat NP$ mesure $40^\\circ$. Quelle est la mesure (en degrés) de son symétrique $M\'\\hat N\'P\'$ ?' },
      question: { type: 'numeric', answer: 40, unit: '°' },
      hints: [{ ar: 'التماثل المحوري يحافظ على قياسات الزوايا.', fr: 'La symétrie axiale conserve les angles.' }],
      solution: [{ ar: '$M\'\\hat N\'P\'=M\\hat NP=40^\\circ$.', fr: '$M\'\\hat N\'P\'=M\\hat NP=40^\\circ$.' }],
    },
    {
      id: '2ac-sym-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلث قائم ومتساوي الساقين', fr: 'Triangle rectangle isocèle' },
      statement: {
        ar: '$ABC$ مثلث قائم الزاوية ومتساوي الساقين في $A$، و $A\'$ مماثلة $A$ بالنسبة لـ $(BC)$. ما طبيعة الرباعي $ABA\'C$؟',
        fr: '$ABC$ est rectangle isocèle en $A$ et $A\'$ est le symétrique de $A$ par rapport à $(BC)$. Quelle est la nature du quadrilatère $ABA\'C$ ?',
      },
      question: {
        type: 'mcq',
        options: [{ ar: 'مربع', fr: 'Un carré' }, { ar: 'مستطيل غير مربع', fr: 'Un rectangle non carré' }, { ar: 'معين غير مربع', fr: 'Un losange non carré' }, { ar: 'شبه منحرف', fr: 'Un trapèze' }],
        correct: 0,
      },
      hints: [{ ar: 'التماثل يحافظ على الأطوال والزوايا: $A\'B=AB$ و $B\\hat A\'C=90^\\circ$.', fr: 'La symétrie conserve longueurs et angles : $A\'B=AB$ et $B\\hat A\'C=90^\\circ$.' }],
      solution: [
        { ar: '$A\'B=AB$ و $A\'C=AC$ و $AB=AC$: الأضلاع الأربعة متساوية (معين).', fr: '$A\'B=AB$, $A\'C=AC$ et $AB=AC$ : les quatre côtés sont égaux (losange).' },
        { ar: 'وزاويته $B\\hat AC=90^\\circ$: إذن $ABA\'C$ مربع.', fr: 'Et il a un angle droit $B\\hat AC=90^\\circ$ : $ABA\'C$ est un carré.' },
      ],
    },
    {
      id: '2ac-sym-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'منتصف قطعة', fr: 'Milieu d’un segment' },
      statement: {
        ar: '$I$ منتصف $[MN]$، و $M\'$ و $N\'$ و $I\'$ مماثلاتها بالنسبة لـ $(D)$. هل $I\'$ منتصف $[M\'N\']$؟',
        fr: '$I$ est le milieu de $[MN]$ ; $M\'$, $N\'$, $I\'$ sont leurs symétriques par rapport à $(D)$. $I\'$ est-il le milieu de $[M\'N\']$ ?',
      },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'الحفاظ على الاستقامية وعلى المسافات.', fr: 'Conservation de l’alignement et des distances.' }],
      solution: [
        { ar: '$M$ و $I$ و $N$ مستقيمية إذن $M\'$ و $I\'$ و $N\'$ مستقيمية.', fr: '$M$, $I$, $N$ sont alignés donc $M\'$, $I\'$, $N\'$ aussi.' },
        { ar: '$I\'M\'=IM=IN=I\'N\'$، إذن $I\'$ منتصف $[M\'N\']$.', fr: '$I\'M\'=IM=IN=I\'N\'$, donc $I\'$ est le milieu de $[M\'N\']$.' },
      ],
    },
  ],
};
