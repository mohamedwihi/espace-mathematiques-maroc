import type { LessonModule } from '@/types';

const lessonId = '1bac-rotation';

const rot = ([x, y]: [number, number], t: number): [number, number] => [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
const tri: [number, number][] = [[1, 0.5], [3, 0.5], [2, 2]];

export const rotation: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'rotation',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'الدوران في المستوى', fr: 'La rotation dans le plan' },
    summary: {
      ar: 'تعريف الدوران، الصيغة باستعمال الزوايا الموجهة، خاصيات الدوران وصور الأشكال الاعتيادية.',
      fr: 'Définition de la rotation, caractérisation par les angles orientés, propriétés et images des figures usuelles.',
    },
    objectives: [
      { ar: 'إنشاء صورة نقطة أو شكل بدوران.', fr: 'Construire l’image d’un point ou d’une figure par une rotation.' },
      { ar: 'استعمال خاصيات الدوران في البرهنة.', fr: 'Utiliser les propriétés de la rotation dans une démonstration.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['rotation', 'angle orienté', 'isométrie', 'دوران', 'زاوية موجهة', 'تقايس'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف', fr: 'Définition' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $\\Omega$ نقطة و $\\alpha$ عدداً حقيقياً. **الدوران** $R$ الذي مركزه $\\Omega$ وزاويته $\\alpha$ يحول $\\Omega$ إلى نفسها، ويحول كل نقطة $M\\neq\\Omega$ إلى $M\'$ حيث:\n\n$\\Omega M\'=\\Omega M$ و $(\\overrightarrow{\\Omega M},\\overrightarrow{\\Omega M\'})\\equiv\\alpha\\ [2\\pi]$.',
              fr: 'Soit $\\Omega$ un point et $\\alpha$ un réel. La **rotation** $R$ de centre $\\Omega$ et d’angle $\\alpha$ laisse $\\Omega$ invariant et transforme tout point $M\\neq\\Omega$ en $M\'$ tel que :\n\n$\\Omega M\'=\\Omega M$ et $(\\overrightarrow{\\Omega M},\\overrightarrow{\\Omega M\'})\\equiv\\alpha\\ [2\\pi]$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'الدوران ذو الزاوية $\\pi$ هو التماثل المركزي الذي مركزه $\\Omega$، والدوران ذو الزاوية $0$ هو التطبيق المطابق.',
              fr: 'La rotation d’angle $\\pi$ est la symétrie centrale de centre $\\Omega$ ; celle d’angle $0$ est l’identité.',
            },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'الخاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كان $R(A)=A\'$ و $R(B)=B\'$ فإن $A\'B\'=AB$ و $(\\overrightarrow{AB},\\overrightarrow{A\'B\'})\\equiv\\alpha\\ [2\\pi]$.\n\n• الدوران يحافظ على المسافات والزوايا الموجهة والاستقامية والتوازي والتعامد والمنتصف.\n\n• صورة مستقيم مستقيم، وصورة دائرة مركزها $O$ وشعاعها $r$ دائرة مركزها $R(O)$ وشعاعها $r$.',
              fr: '• Si $R(A)=A\'$ et $R(B)=B\'$ alors $A\'B\'=AB$ et $(\\overrightarrow{AB},\\overrightarrow{A\'B\'})\\equiv\\alpha\\ [2\\pi]$.\n\n• La rotation conserve les distances, les angles orientés, l’alignement, le parallélisme, l’orthogonalité et le milieu.\n\n• L’image d’une droite est une droite ; l’image du cercle de centre $O$ et de rayon $r$ est le cercle de centre $R(O)$ et de même rayon.',
            },
          },
          {
            kind: 'geometry',
            polygons: [
              { points: tri, color: 'brand' },
              { points: tri.map((p) => rot(p, Math.PI / 2)), color: 'saffron' },
            ],
            segments: [{ from: [0, 0], to: [2, 2], dashed: true }, { from: [0, 0], to: rot([2, 2], Math.PI / 2), dashed: true }],
            points: [{ x: 0, y: 0, label: 'Ω' }, { x: 2, y: 2, label: 'C' }, { x: -2, y: 2, label: "C'" }],
            x: [-3, 4],
            y: [-1, 4],
            caption: { ar: 'صورة مثلث بالدوران الذي مركزه $\\Omega$ وزاويته $\\dfrac\\pi2$.', fr: 'Image d’un triangle par la rotation de centre $\\Omega$ et d’angle $\\dfrac\\pi2$.' },
          },
          {
            kind: 'example',
            statement: { ar: '$ABC$ مثلث متساوي الأضلاع مباشر. ما الدوران الذي مركزه $A$ ويحول $B$ إلى $C$؟', fr: '$ABC$ est équilatéral direct. Quelle rotation de centre $A$ transforme $B$ en $C$ ?' },
            steps: [{ ar: '$AC=AB$ و $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\dfrac\\pi3$: إنه الدوران الذي مركزه $A$ وزاويته $\\dfrac\\pi3$.', fr: '$AC=AB$ et $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\dfrac\\pi3$ : c’est la rotation de centre $A$ et d’angle $\\dfrac\\pi3$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\Omega M\'=\\Omega M$ و $(\\overrightarrow{\\Omega M},\\overrightarrow{\\Omega M\'})\\equiv\\alpha$.', fr: '$\\Omega M\'=\\Omega M$ et $(\\overrightarrow{\\Omega M},\\overrightarrow{\\Omega M\'})\\equiv\\alpha$.' },
      { ar: 'الدوران تقايس: يحافظ على المسافات.', fr: 'La rotation est une isométrie.' },
    ],
  },
  exercises: [
    {
      id: '1bac-rot-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مسافة', fr: 'Distance' },
      statement: { ar: 'دوران يحول $A$ إلى $A\'$ و $B$ إلى $B\'$، و $AB=7$. احسب $A\'B\'$.', fr: 'Une rotation transforme $A$ en $A\'$ et $B$ en $B\'$, avec $AB=7$. Calculer $A\'B\'$.' },
      question: { type: 'numeric', answer: 7 },
      hints: [{ ar: 'الدوران يحافظ على المسافات.', fr: 'La rotation conserve les distances.' }],
      solution: [{ ar: '$A\'B\'=AB=7$.', fr: '$A\'B\'=AB=7$.' }],
    },
    {
      id: '1bac-rot-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حالة خاصة', fr: 'Cas particulier' },
      statement: { ar: 'ما الدوران ذو الزاوية $\\pi$؟', fr: 'Qu’est-ce que la rotation d’angle $\\pi$ ?' },
      question: { type: 'mcq', options: [{ ar: 'تماثل مركزي', fr: 'Une symétrie centrale' }, { ar: 'تماثل محوري', fr: 'Une symétrie axiale' }, { ar: 'إزاحة', fr: 'Une translation' }], correct: 0 },
      hints: [{ ar: '$\\Omega$ منتصف $[MM\']$.', fr: '$\\Omega$ est le milieu de $[MM\']$.' }],
      solution: [{ ar: 'إنه التماثل المركزي الذي مركزه $\\Omega$.', fr: 'C’est la symétrie centrale de centre $\\Omega$.' }],
    },
    {
      id: '1bac-rot-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'زاوية الدوران', fr: 'Angle de la rotation' },
      statement: { ar: '$ABCD$ مربع مباشر مركزه $O$. ما زاوية الدوران الذي مركزه $O$ ويحول $A$ إلى $B$ (بالراديان، في $]-\\pi;\\pi]$)؟', fr: '$ABCD$ est un carré direct de centre $O$. Quel est l’angle (en radians, dans $]-\\pi;\\pi]$) de la rotation de centre $O$ qui transforme $A$ en $B$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\dfrac\\pi2$', fr: '$\\dfrac\\pi2$' }, { ar: '$\\pi$', fr: '$\\pi$' }, { ar: '$\\dfrac\\pi4$', fr: '$\\dfrac\\pi4$' }, { ar: '$-\\dfrac\\pi2$', fr: '$-\\dfrac\\pi2$' }], correct: 0 },
      hints: [{ ar: 'قطرا المربع متعامدان.', fr: 'Les diagonales du carré sont perpendiculaires.' }],
      solution: [{ ar: '$OA=OB$ و $(\\overrightarrow{OA},\\overrightarrow{OB})\\equiv\\dfrac\\pi2$.', fr: '$OA=OB$ et $(\\overrightarrow{OA},\\overrightarrow{OB})\\equiv\\dfrac\\pi2$.' }],
    },
    {
      id: '1bac-rot-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'صورة دائرة', fr: 'Image d’un cercle' },
      statement: { ar: 'ما شعاع صورة دائرة شعاعها $5$ بدوران زاويته $\\dfrac\\pi3$؟', fr: 'Quel est le rayon de l’image d’un cercle de rayon $5$ par une rotation d’angle $\\dfrac\\pi3$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: 'نفس الشعاع.', fr: 'Même rayon.' }],
      solution: [{ ar: 'الشعاع $5$.', fr: 'Le rayon vaut $5$.' }],
    },
  ],
};
