import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-triangle-paralleles';

export const triangleParalleles: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'triangle-parallels',
    title: { ar: 'المثلث والمستقيمات المتوازية', fr: 'Triangle et parallèles' },
    summary: {
      ar: 'مبرهنة المنتصفين ومبرهنتها العكسية، طول القطعة الواصلة بين منتصفين، خاصية النسب الثلاث وتقسيم قطعة إلى أجزاء متقايسة.',
      fr: 'Théorème des milieux et sa réciproque, longueur du segment des milieux, propriété des trois rapports égaux et division d’un segment en parts égales.',
    },
    objectives: [
      { ar: 'معرفة واستعمال مبرهنة المنتصفين.', fr: 'Connaître et utiliser le théorème des milieux.' },
      { ar: 'استعمال خاصية النسب الثلاث.', fr: 'Utiliser la propriété des trois rapports égaux.' },
      { ar: 'تقسيم قطعة إلى أجزاء متقايسة.', fr: 'Diviser un segment en parts égales.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['milieux', 'théorème des milieux', 'parallèle', 'rapports', 'proportionnalité', 'diviser un segment', 'منتصف', 'مبرهنة المنتصفين', 'توازي', 'نسب'],
    sections: [
      {
        id: 'milieux',
        title: { ar: 'مبرهنة المنتصفين', fr: 'Théorème des milieux' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'الخاصية 1 (المبرهنة المباشرة)', fr: 'Propriété 1 (théorème direct)' },
            content: {
              ar: 'في مثلث، المستقيم المار من منتصفي ضلعين يوازي حامل الضلع الثالث.',
              fr: 'Dans un triangle, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.6, 3.6],
            y: [-0.6, 4.6],
            polygons: [{ points: [[0, 4], [-3, 0], [3, 0]], color: 'brand' }],
            segments: [{ from: [-1.5, 2], to: [1.5, 2] }],
            points: [
              { x: 0, y: 4, label: 'A' },
              { x: -3, y: 0, label: 'B' },
              { x: 3, y: 0, label: 'C' },
              { x: -1.5, y: 2, label: 'I' },
              { x: 1.5, y: 2, label: 'J' },
            ],
            caption: { ar: '$I$ و $J$ منتصفا $[AB]$ و $[AC]$: $(IJ)\\parallel(BC)$ و $IJ=\\dfrac{BC}2$.', fr: '$I$ et $J$ milieux de $[AB]$ et $[AC]$ : $(IJ)\\parallel(BC)$ et $IJ=\\dfrac{BC}2$.' },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية 2 (المبرهنة العكسية)', fr: 'Propriété 2 (réciproque)' },
            content: {
              ar: 'في مثلث، المستقيم المار من منتصف ضلع والموازي لضلع ثانٍ يمر من منتصف الضلع الثالث.',
              fr: 'Dans un triangle, la droite qui passe par le milieu d’un côté et qui est parallèle à un deuxième côté passe par le milieu du troisième côté.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية 3', fr: 'Propriété 3' },
            content: {
              ar: 'في مثلث، طول القطعة الواصلة بين منتصفي ضلعين يساوي نصف طول الضلع الثالث.',
              fr: 'Dans un triangle, la longueur du segment joignant les milieux de deux côtés est égale à la moitié de celle du troisième côté.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$ADE$ مثلث، $DE=6\\,\\text{cm}$، و $B$ و $C$ منتصفا $[AD]$ و $[AE]$. احسب $BC$.', fr: '$ADE$ est un triangle, $DE=6\\,\\text{cm}$ ; $B$ et $C$ sont les milieux de $[AD]$ et $[AE]$. Calculer $BC$.' },
            steps: [{ ar: '$BC=\\dfrac{DE}2=3\\,\\text{cm}$.', fr: '$BC=\\dfrac{DE}2=3\\,\\text{cm}$.' }],
          },
        ],
      },
      {
        id: 'rapports',
        title: { ar: 'خاصية النسب الثلاث', fr: 'Propriété des trois rapports égaux' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في مثلث $ABC$، إذا كانت $I\\in[AB]$ و $J\\in[AC]$ و $(IJ)\\parallel(BC)$ فإن: $\\dfrac{AI}{AB}=\\dfrac{AJ}{AC}=\\dfrac{IJ}{BC}$.',
              fr: 'Dans un triangle $ABC$, si $I\\in[AB]$, $J\\in[AC]$ et $(IJ)\\parallel(BC)$, alors : $\\dfrac{AI}{AB}=\\dfrac{AJ}{AC}=\\dfrac{IJ}{BC}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$(MN)\\parallel(BC)$ مع $M\\in[AB]$ و $N\\in[AC]$، و $AB=4$ و $BC=5$ و $MN=2$ (بالـ cm). احسب $AM$.', fr: '$(MN)\\parallel(BC)$ avec $M\\in[AB]$, $N\\in[AC]$, $AB=4$, $BC=5$ et $MN=2$ (en cm). Calculer $AM$.' },
            steps: [
              { ar: '$\\dfrac{AM}{AB}=\\dfrac{MN}{BC}$ إذن $AM=\\dfrac{MN}{BC}\\times AB=\\dfrac25\\times4=1{,}6\\,\\text{cm}$.', fr: '$\\dfrac{AM}{AB}=\\dfrac{MN}{BC}$ donc $AM=\\dfrac{MN}{BC}\\times AB=\\dfrac25\\times4=1{,}6\\,\\text{cm}$.' },
            ],
          },
        ],
      },
      {
        id: 'division',
        title: { ar: 'تقسيم قطعة إلى أجزاء متقايسة', fr: 'Division d’un segment en parts égales' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'لتقسيم $[AB]$ إلى $n$ أجزاء متقايسة:\n\n1. نرسم نصف مستقيم $[Ax)$ ونحدد عليه $n$ أجزاء متقايسة بالبركار؛ آخر نقطة هي $C$.\n\n2. نرسم $(BC)$.\n\n3. من كل نقطة تقسيم نرسم موازياً لـ $(BC)$؛ هذه الموازيات تقسم $[AB]$ إلى $n$ أجزاء متقايسة.',
              fr: 'Pour diviser $[AB]$ en $n$ parts égales :\n\n1. On trace une demi-droite $[Ax)$ et on y reporte au compas $n$ longueurs égales ; le dernier point est $C$.\n\n2. On trace $(BC)$.\n\n3. Par chaque point de division, on trace la parallèle à $(BC)$ : ces parallèles partagent $[AB]$ en $n$ parts égales.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'منتصفا ضلعين ← مستقيم موازٍ للضلع الثالث وطول يساوي نصفه.', fr: 'Milieux de deux côtés → droite parallèle au troisième côté, de longueur moitié.' },
      { ar: 'منتصف ضلع + موازٍ لضلع ثانٍ ← منتصف الضلع الثالث.', fr: 'Milieu d’un côté + parallèle à un deuxième côté → milieu du troisième.' },
      { ar: '$\\dfrac{AI}{AB}=\\dfrac{AJ}{AC}=\\dfrac{IJ}{BC}$.', fr: '$\\dfrac{AI}{AB}=\\dfrac{AJ}{AC}=\\dfrac{IJ}{BC}$.' },
    ],
  },
  exercises: [
    {
      id: '2ac-tp-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'القطعة الواصلة بين المنتصفين', fr: 'Segment des milieux' },
      statement: { ar: 'في مثلث $ABC$، $BC=11\\,\\text{cm}$، و $I$ و $J$ منتصفا $[AB]$ و $[AC]$. احسب $IJ$.', fr: 'Dans un triangle $ABC$, $BC=11\\,\\text{cm}$ ; $I$ et $J$ sont les milieux de $[AB]$ et $[AC]$. Calculer $IJ$.' },
      question: { type: 'numeric', answer: 5.5, tolerance: 1e-9, unit: 'cm' },
      hints: [{ ar: '$IJ=\\dfrac{BC}2$.', fr: '$IJ=\\dfrac{BC}2$.' }],
      solution: [{ ar: '$IJ=\\dfrac{11}2=5{,}5\\,\\text{cm}$.', fr: '$IJ=\\dfrac{11}2=5{,}5\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-tp-02',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'حساب AJ', fr: 'Calcul de AJ' },
      statement: {
        ar: '$ABC$ مثلث مع $AB=5$ و $AC=7$ و $BC=8$ (بالـ cm). $I\\in[AB]$ و $J\\in[AC]$ و $(IJ)\\parallel(BC)$ و $AI=2$. احسب $AJ$.',
        fr: '$ABC$ est un triangle avec $AB=5$, $AC=7$, $BC=8$ (en cm). $I\\in[AB]$, $J\\in[AC]$, $(IJ)\\parallel(BC)$ et $AI=2$. Calculer $AJ$.',
      },
      question: { type: 'numeric', answer: 2.8, tolerance: 1e-9, unit: 'cm' },
      hints: [{ ar: '$\\dfrac{AJ}{AC}=\\dfrac{AI}{AB}$.', fr: '$\\dfrac{AJ}{AC}=\\dfrac{AI}{AB}$.' }],
      solution: [{ ar: '$AJ=\\dfrac{AI}{AB}\\times AC=\\dfrac25\\times7=2{,}8\\,\\text{cm}$.', fr: '$AJ=\\dfrac{AI}{AB}\\times AC=\\dfrac25\\times7=2{,}8\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-tp-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'حساب IJ', fr: 'Calcul de IJ' },
      statement: { ar: 'في نفس الشكل السابق ($AB=5$ و $BC=8$ و $AI=2$)، احسب $IJ$.', fr: 'Même figure ($AB=5$, $BC=8$, $AI=2$) : calculer $IJ$.' },
      question: { type: 'numeric', answer: 3.2, tolerance: 1e-9, unit: 'cm' },
      hints: [{ ar: '$\\dfrac{IJ}{BC}=\\dfrac{AI}{AB}$.', fr: '$\\dfrac{IJ}{BC}=\\dfrac{AI}{AB}$.' }],
      solution: [{ ar: '$IJ=\\dfrac25\\times8=3{,}2\\,\\text{cm}$.', fr: '$IJ=\\dfrac25\\times8=3{,}2\\,\\text{cm}$.' }],
    },
    {
      id: '2ac-tp-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'طبيعة رباعي', fr: 'Nature d’un quadrilatère' },
      statement: {
        ar: '$EFG$ مثلث و $I$ منتصف $[EF]$. الموازي لـ $(FG)$ المار من $I$ يقطع $[EG]$ في $J$، والموازي لـ $(EF)$ المار من $J$ يقطع $[FG]$ في $K$. ما طبيعة $IJKF$؟',
        fr: '$EFG$ est un triangle, $I$ le milieu de $[EF]$. La parallèle à $(FG)$ par $I$ coupe $[EG]$ en $J$ ; la parallèle à $(EF)$ par $J$ coupe $[FG]$ en $K$. Nature de $IJKF$ ?',
      },
      question: {
        type: 'mcq',
        options: [{ ar: 'متوازي الأضلاع', fr: 'Un parallélogramme' }, { ar: 'شبه منحرف غير متوازي الأضلاع', fr: 'Un trapèze non parallélogramme' }, { ar: 'مربع دائماً', fr: 'Toujours un carré' }],
        correct: 0,
      },
      hints: [{ ar: 'ضلعاه المتقابلان متوازيان مثنى مثنى.', fr: 'Ses côtés opposés sont parallèles deux à deux.' }],
      solution: [
        { ar: '$(IJ)\\parallel(FK)$ و $(JK)\\parallel(IF)$.', fr: '$(IJ)\\parallel(FK)$ et $(JK)\\parallel(IF)$.' },
        { ar: 'إذن $IJKF$ متوازي الأضلاع (و $J$ و $K$ منتصفان حسب المبرهنة العكسية).', fr: 'Donc $IJKF$ est un parallélogramme (et $J$, $K$ sont des milieux par la réciproque).' },
      ],
    },
    {
      id: '2ac-tp-05',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'تقسيم قطعة', fr: 'Diviser un segment' },
      statement: { ar: 'نقسم قطعة $[AB]$ طولها $9\\,\\text{cm}$ إلى $4$ أجزاء متقايسة. ما طول كل جزء؟', fr: 'On divise un segment $[AB]$ de $9\\,\\text{cm}$ en $4$ parts égales. Quelle est la longueur de chaque part ?' },
      question: { type: 'numeric', answer: 2.25, tolerance: 1e-9, unit: 'cm' },
      hints: [{ ar: '$9\\div4$.', fr: '$9\\div4$.' }],
      solution: [{ ar: '$\\dfrac94=2{,}25\\,\\text{cm}$.', fr: '$\\dfrac94=2{,}25\\,\\text{cm}$.' }],
    },
  ],
};
