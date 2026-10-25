import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-droites-plan';

export const droitesPlan: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'lines',
    title: { ar: 'المستقيمات في المستوى', fr: 'Droites dans le plan' },
    summary: {
      ar: 'المستقيم والنقط المستقيمية، الأوضاع النسبية لمستقيمين، نصف المستقيم والقطعة، المنتصف والواسط والمسافة.',
      fr: 'Droite et points alignés, positions de deux droites, demi-droite et segment, milieu, médiatrice et distances.',
    },
    objectives: [
      { ar: 'استعمال المفردات: مستقيم، نصف مستقيم، قطعة، متوازيان، متعامدان.', fr: 'Utiliser le vocabulaire : droite, demi-droite, segment, parallèles, perpendiculaires.' },
      { ar: 'التعرف على مستقيمين متوازيين أو متعامدين وإنشاؤهما.', fr: 'Reconnaître et construire des droites parallèles ou perpendiculaires.' },
      { ar: 'إنشاء منتصف قطعة وواسطها.', fr: 'Construire le milieu et la médiatrice d’un segment.' },
      { ar: 'تحديد مسافة نقطة عن مستقيم.', fr: 'Déterminer la distance d’un point à une droite.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['droite', 'segment', 'demi-droite', 'parallèles', 'perpendiculaires', 'alignés', 'milieu', 'médiatrice', 'مستقيم', 'قطعة', 'متوازيان', 'متعامدان', 'منتصف', 'واسط'],
    sections: [
      {
        id: 'droite',
        title: { ar: 'المستقيم والنقط المستقيمية', fr: 'La droite et les points alignés' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'المستقيم غير محدود. إذا كانت $A$ و $B$ نقطتين مختلفتين، فإنه يوجد **مستقيم وحيد** يمر منهما، نرمز له بـ $(AB)$ أو $(BA)$. ومن نقطة واحدة تمر ما لا نهاية من المستقيمات.',
              fr: 'Une droite est illimitée. Par deux points distincts $A$ et $B$ passe une **unique droite**, notée $(AB)$ ou $(BA)$. Par un seul point passent une infinité de droites.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'نقط مستقيمية', fr: 'Points alignés' },
            content: {
              ar: 'نقول إن نقطاً (ثلاث على الأقل) **مستقيمية** إذا كانت تنتمي إلى نفس المستقيم. نكتب $E\\in(AB)$ إذا كانت $E$ تنتمي إلى $(AB)$، و $E\\notin(AB)$ إذا لم تكن تنتمي إليه.',
              fr: 'Des points (au moins trois) sont **alignés** s’ils appartiennent à une même droite. On note $E\\in(AB)$ si $E$ appartient à $(AB)$, et $E\\notin(AB)$ sinon.',
            },
          },
        ],
      },
      {
        id: 'positions',
        title: { ar: 'الأوضاع النسبية لمستقيمين', fr: 'Positions de deux droites' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'متقاطعان', fr: 'Sécantes' },
            content: {
              ar: 'يكون مستقيمان **متقاطعين** إذا تقاطعا في نقطة واحدة تسمى نقطة تقاطعهما.',
              fr: 'Deux droites sont **sécantes** si elles se coupent en un seul point, appelé point d’intersection.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'متوازيان ومنطبقان', fr: 'Parallèles et confondues' },
            content: {
              ar: 'يكون مستقيمان **متوازيين** إذا لم يكونا متقاطعين، ونكتب $(\\Delta)\\parallel(D)$. ويكونان **منطبقين** إذا كانت لهما نقطتان مشتركتان على الأقل؛ المستقيمان المنطبقان متوازيان أيضاً.',
              fr: 'Deux droites sont **parallèles** si elles ne sont pas sécantes ; on note $(\\Delta)\\parallel(D)$. Elles sont **confondues** si elles ont au moins deux points communs ; deux droites confondues sont aussi parallèles.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'متعامدان', fr: 'Perpendiculaires' },
            content: {
              ar: 'يكون مستقيمان **متعامدين** إذا تقاطعا مكونين زاوية قائمة، ونكتب $(AB)\\perp(CD)$.',
              fr: 'Deux droites sont **perpendiculaires** si elles se coupent en formant un angle droit ; on note $(AB)\\perp(CD)$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• إذا كان مستقيمان موازيين لنفس المستقيم فإنهما متوازيان.\n\n• إذا كان مستقيمان عموديين على نفس المستقيم فإنهما متوازيان.\n\n• إذا كان مستقيمان متوازيين، فكل مستقيم عمودي على أحدهما عمودي على الآخر.',
              fr: '• Deux droites parallèles à une même droite sont parallèles entre elles.\n\n• Deux droites perpendiculaires à une même droite sont parallèles entre elles.\n\n• Si deux droites sont parallèles, toute perpendiculaire à l’une est perpendiculaire à l’autre.',
            },
          },
          {
            kind: 'geometry',
            x: [-4.5, 4.5],
            y: [-2.5, 3],
            segments: [
              { from: [-4.2, 1.5], to: [4.2, 1.5] },
              { from: [-4.2, -1], to: [4.2, -1] },
              { from: [0, -2.3], to: [0, 2.8] },
            ],
            rightAngles: [
              { at: [0, 1.5], u: [1, 0], v: [0, 1] },
              { at: [0, -1], u: [1, 0], v: [0, 1] },
            ],
            points: [
              { x: -3.5, y: 1.5, label: 'A' },
              { x: 3.5, y: 1.5, label: 'B' },
              { x: -3.5, y: -1, label: 'E' },
              { x: 3.5, y: -1, label: 'F' },
              { x: 0, y: 2.6, label: 'C' },
              { x: 0, y: 1.5, label: 'D' },
            ],
            caption: {
              ar: '$(AB)\\perp(CD)$ و $(EF)\\perp(CD)$، إذن $(AB)\\parallel(EF)$.',
              fr: '$(AB)\\perp(CD)$ et $(EF)\\perp(CD)$, donc $(AB)\\parallel(EF)$.',
            },
          },
        ],
      },
      {
        id: 'segment',
        title: { ar: 'نصف المستقيم والقطعة', fr: 'Demi-droite et segment' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• **نصف المستقيم** $[AB)$ جزء من مستقيم محدود من جهة واحدة بنقطة $A$ تسمى أصله.\n\n• **القطعة** $[AB]$ جزء من مستقيم محدود من الجهتين بالنقطتين $A$ و $B$.',
              fr: '• La **demi-droite** $[AB)$ est une partie de droite limitée d’un seul côté par le point $A$, son origine.\n\n• Le **segment** $[AB]$ est une partie de droite limitée des deux côtés par les points $A$ et $B$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'منتصف قطعة', fr: 'Milieu d’un segment' },
            content: {
              ar: 'منتصف القطعة $[AB]$ هو النقطة $I$ التي تنتمي إلى $[AB]$ وتحقق $IA=IB$.',
              fr: 'Le milieu du segment $[AB]$ est le point $I$ qui appartient à $[AB]$ et tel que $IA=IB$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'واسط قطعة', fr: 'Médiatrice d’un segment' },
            content: {
              ar: 'واسط قطعة هو المستقيم الذي يمر من منتصفها ويكون عمودياً على حاملها.',
              fr: 'La médiatrice d’un segment est la droite qui passe par son milieu et qui est perpendiculaire à son support.',
            },
          },
          {
            kind: 'geometry',
            x: [-4, 4],
            y: [-2, 2.5],
            segments: [
              { from: [-3, 0], to: [3, 0] },
              { from: [0, -1.8], to: [0, 2.2] },
            ],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: -3, y: 0, label: 'A' },
              { x: 0, y: 0, label: 'I' },
              { x: 3, y: 0, label: 'B' },
            ],
            caption: { ar: '$I$ منتصف $[AB]$، والمستقيم العمودي في $I$ هو واسط $[AB]$.', fr: '$I$ est le milieu de $[AB]$ ; la perpendiculaire en $I$ est la médiatrice de $[AB]$.' },
          },
        ],
      },
      {
        id: 'distances',
        title: { ar: 'المسافات', fr: 'Distances' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• **مسافة نقطة $A$ عن مستقيم $(D)$** هي المسافة $AH$ حيث $H$ المسقط العمودي لـ $A$ على $(D)$.\n\n• **المسافة بين مستقيمين متوازيين** $(D)$ و $(D\')$ هي المسافة بين نقطة $A$ من $(D)$ ومسقطها العمودي $A\'$ على $(D\')$.',
              fr: '• La **distance d’un point $A$ à une droite $(D)$** est la distance $AH$, où $H$ est le projeté orthogonal de $A$ sur $(D)$.\n\n• La **distance entre deux parallèles** $(D)$ et $(D\')$ est la distance entre un point $A$ de $(D)$ et son projeté orthogonal $A\'$ sur $(D\')$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'من نقطتين مختلفتين يمر مستقيم وحيد.', fr: 'Par deux points distincts passe une unique droite.' },
      { ar: 'عموديان على نفس المستقيم ← متوازيان.', fr: 'Perpendiculaires à une même droite → parallèles.' },
      { ar: 'متوازيان وعمودي على أحدهما ← عمودي على الآخر.', fr: 'Parallèles et perpendiculaire à l’une → perpendiculaire à l’autre.' },
      { ar: 'المنتصف $I$: $I\\in[AB]$ و $IA=IB$ ؛ الواسط عمودي على القطعة في منتصفها.', fr: 'Milieu $I$ : $I\\in[AB]$ et $IA=IB$ ; la médiatrice est perpendiculaire au segment en son milieu.' },
    ],
  },
  exercises: [
    {
      id: '1ac-droites-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'عدد المستقيمات', fr: 'Nombre de droites' },
      statement: { ar: 'كم مستقيماً يمر من نقطتين مختلفتين $E$ و $F$؟', fr: 'Combien de droites passent par deux points distincts $E$ et $F$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'مستقيم واحد', fr: 'Une seule' }, { ar: 'مستقيمان', fr: 'Deux' }, { ar: 'ما لا نهاية', fr: 'Une infinité' }],
        correct: 0,
      },
      hints: [{ ar: 'من نقطة واحدة تمر ما لا نهاية من المستقيمات، لكن ماذا عن نقطتين؟', fr: 'Par un point passent une infinité de droites ; et par deux points ?' }],
      solution: [{ ar: 'من نقطتين مختلفتين يمر مستقيم وحيد هو $(EF)$.', fr: 'Par deux points distincts passe une unique droite : $(EF)$.' }],
    },
    {
      id: '1ac-droites-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'استنتاج التوازي', fr: 'Déduire un parallélisme' },
      statement: { ar: 'نعلم أن $(AB)\\perp(CD)$ و $(EF)\\perp(CD)$. ماذا نستنتج؟', fr: 'On sait que $(AB)\\perp(CD)$ et $(EF)\\perp(CD)$. Que peut-on déduire ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$(AB)\\parallel(EF)$', fr: '$(AB)\\parallel(EF)$' },
          { ar: '$(AB)\\perp(EF)$', fr: '$(AB)\\perp(EF)$' },
          { ar: '$(AB)\\parallel(CD)$', fr: '$(AB)\\parallel(CD)$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'مستقيمان عموديان على نفس المستقيم…', fr: 'Deux droites perpendiculaires à une même droite…' }],
      solution: [{ ar: '$(AB)$ و $(EF)$ عموديان على نفس المستقيم $(CD)$، إذن $(AB)\\parallel(EF)$.', fr: '$(AB)$ et $(EF)$ sont perpendiculaires à la même droite $(CD)$, donc $(AB)\\parallel(EF)$.' }],
    },
    {
      id: '1ac-droites-03',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منتصف قطعة', fr: 'Milieu d’un segment' },
      statement: { ar: '$EF=5\\,\\text{cm}$ و $I$ منتصف $[EF]$. احسب $IE$ بـ cm.', fr: '$EF=5\\,\\text{cm}$ et $I$ est le milieu de $[EF]$. Calculer $IE$ en cm.' },
      question: { type: 'numeric', answer: 2.5, tolerance: 1e-9, unit: 'cm' },
      hints: [{ ar: 'المنتصف يقسم القطعة إلى قطعتين متقايستين.', fr: 'Le milieu partage le segment en deux segments de même longueur.' }],
      solution: [{ ar: '$IE=\\dfrac{EF}2=\\dfrac52=2{,}5\\,\\text{cm}$.', fr: '$IE=\\dfrac{EF}2=\\dfrac52=2{,}5\\,\\text{cm}$.' }],
    },
    {
      id: '1ac-droites-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'نقطة مماثلة', fr: 'Construire un point' },
      statement: { ar: '$AB=3\\,\\text{cm}$. ننشئ النقطة $J$ بحيث تكون $A$ منتصف $[JB]$. احسب $JB$ بـ cm.', fr: '$AB=3\\,\\text{cm}$. On construit $J$ tel que $A$ soit le milieu de $[JB]$. Calculer $JB$ en cm.' },
      question: { type: 'numeric', answer: 6, unit: 'cm' },
      hints: [{ ar: '$A$ منتصف $[JB]$ يعني $AJ=AB$.', fr: '$A$ milieu de $[JB]$ signifie $AJ=AB$.' }],
      solution: [
        { ar: '$AJ=AB=3\\,\\text{cm}$ و $A\\in[JB]$.', fr: '$AJ=AB=3\\,\\text{cm}$ et $A\\in[JB]$.' },
        { ar: '$JB=JA+AB=3+3=6\\,\\text{cm}$.', fr: '$JB=JA+AB=3+3=6\\,\\text{cm}$.' },
      ],
    },
  ],
};
