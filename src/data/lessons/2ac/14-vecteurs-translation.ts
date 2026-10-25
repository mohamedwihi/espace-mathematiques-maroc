import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-vecteurs-translation';

/** Flèche (segment + pointe) pour représenter un vecteur dans les figures. */
const arrow = (from: [number, number], to: [number, number]) => {
  const [dx, dy] = [to[0] - from[0], to[1] - from[1]];
  const len = Math.hypot(dx, dy);
  const [ux, uy] = [dx / len, dy / len];
  const s = 0.3;
  const back: [number, number] = [to[0] - s * ux, to[1] - s * uy];
  return [
    { from, to },
    { from: to, to: [back[0] - 0.5 * s * uy, back[1] + 0.5 * s * ux] as [number, number] },
    { from: to, to: [back[0] + 0.5 * s * uy, back[1] - 0.5 * s * ux] as [number, number] },
  ];
};

export const vecteursTranslation: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'vectors',
    title: { ar: 'المتجهات والإزاحة', fr: 'Vecteurs et translation' },
    summary: {
      ar: 'عناصر متجهة (الاتجاه والمنحى والمنظم)، المتجهة المنعدمة والمقابلة، تساوي متجهتين، المجموع وعلاقة شال، والإزاحة.',
      fr: 'Éléments d’un vecteur (direction, sens, norme), vecteur nul et opposé, égalité de vecteurs, somme et relation de Chasles, translation.',
    },
    objectives: [
      { ar: 'تحديد عناصر متجهة.', fr: 'Déterminer les éléments d’un vecteur.' },
      { ar: 'ربط تساوي متجهتين بمتوازي الأضلاع.', fr: 'Relier l’égalité de deux vecteurs au parallélogramme.' },
      { ar: 'استعمال علاقة شال.', fr: 'Utiliser la relation de Chasles.' },
      { ar: 'إنشاء صورة نقطة بإزاحة.', fr: 'Construire l’image d’un point par une translation.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['vecteur', 'direction', 'sens', 'norme', 'Chasles', 'translation', 'parallélogramme', 'متجهة', 'اتجاه', 'منحى', 'منظم', 'علاقة شال', 'إزاحة'],
    sections: [
      {
        id: 'vecteur',
        title: { ar: 'المتجهة', fr: 'Le vecteur' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'لتكن $A$ و $B$ نقطتين مختلفتين. الزوج $(A;B)$ يحدد **متجهة** نرمز لها بـ $\\overrightarrow{AB}$، عناصرها:\n\n• **الاتجاه**: المستقيم $(AB)$.\n\n• **المنحى**: من $A$ نحو $B$.\n\n• **المنظم**: المسافة $AB$.\n\n$A$ أصل المتجهة و $B$ طرفها.',
              fr: 'Soient $A$ et $B$ deux points distincts. Le couple $(A;B)$ définit un **vecteur** noté $\\overrightarrow{AB}$, dont les éléments sont :\n\n• la **direction** : la droite $(AB)$ ;\n\n• le **sens** : de $A$ vers $B$ ;\n\n• la **norme** : la distance $AB$.\n\n$A$ est l’origine et $B$ l’extrémité.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'المتجهة المنعدمة والمتجهة المقابلة', fr: 'Vecteur nul et vecteur opposé' },
            content: {
              ar: '• $\\overrightarrow{AA}=\\vec0$: المتجهة المنعدمة، منظمها $0$. إذا كان $\\overrightarrow{AB}=\\vec0$ فإن $A=B$.\n\n• $\\overrightarrow{AB}+\\overrightarrow{BA}=\\vec0$: المتجهة $\\overrightarrow{BA}$ مقابلة $\\overrightarrow{AB}$، ونكتب $\\overrightarrow{BA}=-\\overrightarrow{AB}$.',
              fr: '• $\\overrightarrow{AA}=\\vec0$ : le vecteur nul, de norme $0$. Si $\\overrightarrow{AB}=\\vec0$ alors $A=B$.\n\n• $\\overrightarrow{AB}+\\overrightarrow{BA}=\\vec0$ : $\\overrightarrow{BA}$ est l’opposé de $\\overrightarrow{AB}$ ; on écrit $\\overrightarrow{BA}=-\\overrightarrow{AB}$.',
            },
          },
        ],
      },
      {
        id: 'egalite',
        title: { ar: 'تساوي متجهتين', fr: 'Égalité de deux vecteurs' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'تكون متجهتان متساويتين إذا كان لهما نفس الاتجاه ونفس المنحى ونفس المنظم.',
              fr: 'Deux vecteurs sont égaux s’ils ont même direction, même sens et même norme.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '$\\overrightarrow{AB}=\\overrightarrow{DC}$ يعني أن $ABCD$ متوازي الأضلاع (قد يكون مفلطحاً إذا كانت النقط مستقيمية).',
              fr: '$\\overrightarrow{AB}=\\overrightarrow{DC}$ signifie que $ABCD$ est un parallélogramme (éventuellement aplati si les points sont alignés).',
            },
          },
          {
            kind: 'geometry',
            x: [-3.6, 3.8],
            y: [-1.6, 2.2],
            polygons: [{ points: [[-3, -1], [1, -1], [3, 1.5], [-1, 1.5]], color: 'brand' }],
            segments: [...arrow([-3, -1], [1, -1]), ...arrow([-1, 1.5], [3, 1.5])],
            points: [
              { x: -3, y: -1, label: 'A' },
              { x: 1, y: -1, label: 'B' },
              { x: 3, y: 1.5, label: 'C' },
              { x: -1, y: 1.5, label: 'D' },
            ],
            caption: { ar: '$ABCD$ متوازي الأضلاع: $\\overrightarrow{AB}=\\overrightarrow{DC}$.', fr: '$ABCD$ est un parallélogramme : $\\overrightarrow{AB}=\\overrightarrow{DC}$.' },
          },
          {
            kind: 'property',
            title: { ar: 'المتجهة ومنتصف قطعة', fr: 'Vecteur et milieu' },
            content: {
              ar: '$I$ منتصف $[EF]$ يعني $\\overrightarrow{EI}=\\overrightarrow{IF}$.',
              fr: '$I$ est le milieu de $[EF]$ signifie $\\overrightarrow{EI}=\\overrightarrow{IF}$.',
            },
          },
        ],
      },
      {
        id: 'somme',
        title: { ar: 'مجموع متجهتين وعلاقة شال', fr: 'Somme de vecteurs et relation de Chasles' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'قاعدة متوازي الأضلاع', fr: 'Règle du parallélogramme' },
            content: {
              ar: 'إذا كان $ABCD$ متوازي الأضلاع فإن $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$.',
              fr: 'Si $ABCD$ est un parallélogramme, alors $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'علاقة شال', fr: 'Relation de Chasles' },
            content: {
              ar: 'لكل نقط $A$ و $B$ و $C$ من المستوى: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.',
              fr: 'Pour tous points $A$, $B$, $C$ du plan : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'بسّط $\\overrightarrow{AB}+\\overrightarrow{CA}+\\overrightarrow{BC}$.', fr: 'Simplifier $\\overrightarrow{AB}+\\overrightarrow{CA}+\\overrightarrow{BC}$.' },
            steps: [
              { ar: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{CB}+\\overrightarrow{BC}=\\overrightarrow{CC}=\\vec0$.', fr: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{CB}+\\overrightarrow{BC}=\\overrightarrow{CC}=\\vec0$.' },
            ],
          },
        ],
      },
      {
        id: 'translation',
        title: { ar: 'الإزاحة', fr: 'La translation' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'لتكن $\\overrightarrow{AB}$ متجهة غير منعدمة. النقطة $M\'$ صورة $M$ بالإزاحة ذات المتجهة $\\overrightarrow{AB}$ (التي تحول $A$ إلى $B$) يعني أن $\\overrightarrow{MM\'}=\\overrightarrow{AB}$، أي أن $ABM\'M$ متوازي الأضلاع.',
              fr: 'Soit $\\overrightarrow{AB}$ un vecteur non nul. $M\'$ est l’image de $M$ par la translation de vecteur $\\overrightarrow{AB}$ (qui transforme $A$ en $B$) signifie que $\\overrightarrow{MM\'}=\\overrightarrow{AB}$, c’est-à-dire que $ABM\'M$ est un parallélogramme.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• إذا كانت $M\\in(AB)$ فإن $M\'\\in(AB)$ و $MM\'=AB$.\n\n• إذا كانت $M\\notin(AB)$ فإن $M\'$ الرأس الرابع لمتوازي الأضلاع $ABM\'M$.',
              fr: '• Si $M\\in(AB)$, alors $M\'\\in(AB)$ et $MM\'=AB$.\n\n• Si $M\\notin(AB)$, alors $M\'$ est le quatrième sommet du parallélogramme $ABM\'M$.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.4, 3.8],
            y: [-1.4, 2.6],
            segments: [
              ...arrow([-3, -1], [0, -0.2]),
              ...arrow([-1.5, 1.6], [1.5, 2.4]),
              { from: [-3, -1], to: [-1.5, 1.6], dashed: true },
              { from: [0, -0.2], to: [1.5, 2.4], dashed: true },
            ],
            points: [
              { x: -3, y: -1, label: 'A' },
              { x: 0, y: -0.2, label: 'B' },
              { x: -1.5, y: 1.6, label: 'M' },
              { x: 1.5, y: 2.4, label: "M'" },
            ],
            caption: { ar: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$: $ABM\'M$ متوازي الأضلاع.', fr: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$ : $ABM\'M$ est un parallélogramme.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'المتجهة: اتجاه ومنحى ومنظم.', fr: 'Un vecteur : direction, sens et norme.' },
      { ar: '$\\overrightarrow{AB}=\\overrightarrow{DC}\\iff ABCD$ متوازي الأضلاع.', fr: '$\\overrightarrow{AB}=\\overrightarrow{DC}\\iff ABCD$ est un parallélogramme.' },
      { ar: 'علاقة شال: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.', fr: 'Chasles : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.' },
      { ar: 'الإزاحة: $\\overrightarrow{MM\'}=\\overrightarrow{AB}$.', fr: 'Translation : $\\overrightarrow{MM\'}=\\overrightarrow{AB}$.' },
    ],
  },
  exercises: [
    {
      id: '2ac-vec-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منظم متجهة', fr: 'Norme d’un vecteur' },
      statement: { ar: 'على مستقيم مدرج، $I$ أفصولها $4$ و $J$ أفصولها $12$. ما منظم $\\overrightarrow{IJ}$؟', fr: 'Sur une droite graduée, $I$ a pour abscisse $4$ et $J$ pour abscisse $12$. Quelle est la norme de $\\overrightarrow{IJ}$ ?' },
      question: { type: 'numeric', answer: 8 },
      hints: [{ ar: 'المنظم هو المسافة $IJ$.', fr: 'La norme est la distance $IJ$.' }],
      solution: [{ ar: '$IJ=12-4=8$.', fr: '$IJ=12-4=8$.' }],
    },
    {
      id: '2ac-vec-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'طبيعة رباعي', fr: 'Nature d’un quadrilatère' },
      statement: { ar: '$EFG$ مثلث و $H$ نقطة بحيث $\\overrightarrow{EH}=\\overrightarrow{FG}$. ما طبيعة الرباعي $EHGF$؟', fr: '$EFG$ est un triangle et $H$ tel que $\\overrightarrow{EH}=\\overrightarrow{FG}$. Quelle est la nature de $EHGF$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'متوازي الأضلاع', fr: 'Un parallélogramme' }, { ar: 'مستطيل دائماً', fr: 'Toujours un rectangle' }, { ar: 'شبه منحرف غير متوازي الأضلاع', fr: 'Un trapèze non parallélogramme' }],
        correct: 0,
      },
      hints: [{ ar: '$\\overrightarrow{AB}=\\overrightarrow{DC}$ يعني $ABCD$ متوازي الأضلاع.', fr: '$\\overrightarrow{AB}=\\overrightarrow{DC}$ signifie que $ABCD$ est un parallélogramme.' }],
      solution: [{ ar: '$\\overrightarrow{EH}=\\overrightarrow{FG}$ إذن $EHGF$ متوازي الأضلاع.', fr: '$\\overrightarrow{EH}=\\overrightarrow{FG}$ donc $EHGF$ est un parallélogramme.' }],
    },
    {
      id: '2ac-vec-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'علاقة شال', fr: 'Relation de Chasles' },
      statement: { ar: 'بسّط $\\overrightarrow{AB}+\\overrightarrow{CA}-\\overrightarrow{CB}-\\overrightarrow{BD}$.', fr: 'Simplifier $\\overrightarrow{AB}+\\overrightarrow{CA}-\\overrightarrow{CB}-\\overrightarrow{BD}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\overrightarrow{DB}$', fr: '$\\overrightarrow{DB}$' }, { ar: '$\\overrightarrow{BD}$', fr: '$\\overrightarrow{BD}$' }, { ar: '$\\vec0$', fr: '$\\vec0$' }, { ar: '$\\overrightarrow{AD}$', fr: '$\\overrightarrow{AD}$' }],
        correct: 0,
      },
      hints: [{ ar: '$-\\overrightarrow{CB}=\\overrightarrow{BC}$ و $-\\overrightarrow{BD}=\\overrightarrow{DB}$.', fr: '$-\\overrightarrow{CB}=\\overrightarrow{BC}$ et $-\\overrightarrow{BD}=\\overrightarrow{DB}$.' }],
      solution: [{ ar: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{DB}=\\vec0+\\overrightarrow{DB}=\\overrightarrow{DB}$.', fr: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{DB}=\\vec0+\\overrightarrow{DB}=\\overrightarrow{DB}$.' }],
    },
    {
      id: '2ac-vec-04',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'تبسيط طويل', fr: 'Une simplification plus longue' },
      statement: { ar: 'بسّط $\\overrightarrow{BC}-\\overrightarrow{AC}-\\overrightarrow{BD}-\\overrightarrow{AB}-\\overrightarrow{BA}-\\overrightarrow{DB}$.', fr: 'Simplifier $\\overrightarrow{BC}-\\overrightarrow{AC}-\\overrightarrow{BD}-\\overrightarrow{AB}-\\overrightarrow{BA}-\\overrightarrow{DB}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\overrightarrow{BA}$', fr: '$\\overrightarrow{BA}$' }, { ar: '$\\overrightarrow{AB}$', fr: '$\\overrightarrow{AB}$' }, { ar: '$\\vec0$', fr: '$\\vec0$' }, { ar: '$\\overrightarrow{BD}$', fr: '$\\overrightarrow{BD}$' }],
        correct: 0,
      },
      hints: [{ ar: 'حوّل كل طرح إلى جمع المقابل.', fr: 'Transforme chaque soustraction en addition de l’opposé.' }],
      solution: [
        { ar: '$=\\overrightarrow{BC}+\\overrightarrow{CA}+\\overrightarrow{DB}+\\overrightarrow{BA}+\\overrightarrow{AB}+\\overrightarrow{BD}$.', fr: '$=\\overrightarrow{BC}+\\overrightarrow{CA}+\\overrightarrow{DB}+\\overrightarrow{BA}+\\overrightarrow{AB}+\\overrightarrow{BD}$.' },
        { ar: '$\\overrightarrow{BA}+\\overrightarrow{AB}=\\vec0$ و $\\overrightarrow{DB}+\\overrightarrow{BD}=\\vec0$، و $\\overrightarrow{BC}+\\overrightarrow{CA}=\\overrightarrow{BA}$.', fr: '$\\overrightarrow{BA}+\\overrightarrow{AB}=\\vec0$, $\\overrightarrow{DB}+\\overrightarrow{BD}=\\vec0$ et $\\overrightarrow{BC}+\\overrightarrow{CA}=\\overrightarrow{BA}$.' },
      ],
    },
    {
      id: '2ac-vec-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'إزاحة على مستقيم', fr: 'Translation sur une droite' },
      statement: { ar: '$AB=5\\,\\text{cm}$ و $M\\in(AB)$، و $M\'$ صورة $M$ بالإزاحة ذات المتجهة $\\overrightarrow{AB}$. احسب $MM\'$.', fr: '$AB=5\\,\\text{cm}$, $M\\in(AB)$ et $M\'$ est l’image de $M$ par la translation de vecteur $\\overrightarrow{AB}$. Calculer $MM\'$.' },
      question: { type: 'numeric', answer: 5, unit: 'cm' },
      hints: [{ ar: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$.', fr: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$.' }],
      solution: [{ ar: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$ إذن $MM\'=AB=5\\,\\text{cm}$.', fr: '$\\overrightarrow{MM\'}=\\overrightarrow{AB}$ donc $MM\'=AB=5\\,\\text{cm}$.' }],
    },
  ],
};
