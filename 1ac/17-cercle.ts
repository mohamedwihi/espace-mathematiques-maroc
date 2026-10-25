import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-cercle';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const cercle: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'circle',
    title: { ar: 'الدائرة', fr: 'Le cercle' },
    summary: {
      ar: 'تعريف الدائرة ومفرداتها (شعاع، قطر، وتر، قوس)، المماس لدائرة، وخاصيتان: الواسط والمثلث المحاط بنصف دائرة.',
      fr: 'Définition et vocabulaire du cercle (rayon, diamètre, corde, arc), tangente, et deux propriétés : médiatrice d’une corde et triangle inscrit dans un demi-cercle.',
    },
    objectives: [
      { ar: 'التعرف على المركز والوتر والقطر.', fr: 'Identifier le centre, une corde et un diamètre.' },
      { ar: 'التعرف على المماس لدائرة وإنشاؤه.', fr: 'Reconnaître et construire la tangente à un cercle en un point.' },
      { ar: 'إنجاز إنشاءات هندسية وتعليلها.', fr: 'Réaliser des constructions géométriques et les justifier.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['cercle', 'rayon', 'diamètre', 'corde', 'arc', 'tangente', 'centre', 'دائرة', 'شعاع', 'قطر', 'وتر', 'مماس'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'الدائرة', fr: 'Le cercle' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الدائرة $(C)$ التي مركزها $O$ وشعاعها $r$ هي مجموعة النقط التي تبعد عن $O$ بالمسافة $r$: إذا كانت $M\\in(C)$ فإن $OM=r$، وإذا كان $OM=r$ فإن $M\\in(C)$.',
              fr: 'Le cercle $(C)$ de centre $O$ et de rayon $r$ est l’ensemble des points situés à la distance $r$ de $O$ : si $M\\in(C)$ alors $OM=r$, et si $OM=r$ alors $M\\in(C)$.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: '**الشعاع**: قطعة تصل المركز بنقطة من الدائرة، مثل $[OA]$.', fr: '**Rayon** : segment joignant le centre à un point du cercle, comme $[OA]$.' },
              { ar: '**الوتر**: قطعة طرفاها نقطتان من الدائرة، مثل $[EF]$.', fr: '**Corde** : segment dont les extrémités sont sur le cercle, comme $[EF]$.' },
              { ar: '**القطر**: وتر يمر من المركز، مثل $[CD]$؛ طوله $2r$.', fr: '**Diamètre** : corde passant par le centre, comme $[CD]$ ; sa longueur est $2r$.' },
              { ar: '**القوس** $\\overset{\\frown}{EF}$: جزء من الدائرة محدود بنقطتين.', fr: '**Arc** $\\overset{\\frown}{EF}$ : partie du cercle limitée par deux points.' },
            ],
          },
          {
            kind: 'geometry',
            x: [-3.6, 3.6],
            y: [-3.2, 3.2],
            polygons: [{ points: circle(0, 0, 2.6), color: 'brand' }],
            segments: [
              { from: [0, 0], to: [1.3, 2.25] },
              { from: [-2.6, 0], to: [2.6, 0] },
              { from: [-1.6, -2.05], to: [2.2, -1.385] },
            ],
            points: [
              { x: 0, y: 0, label: 'O' },
              { x: 1.3, y: 2.25, label: 'A' },
              { x: -2.6, y: 0, label: 'C' },
              { x: 2.6, y: 0, label: 'D' },
              { x: -1.6, y: -2.05, label: 'E' },
              { x: 2.2, y: -1.385, label: 'F' },
            ],
            caption: { ar: '$[OA]$ شعاع، $[CD]$ قطر، $[EF]$ وتر.', fr: '$[OA]$ rayon, $[CD]$ diamètre, $[EF]$ corde.' },
          },
        ],
      },
      {
        id: 'tangente',
        title: { ar: 'المماس لدائرة', fr: 'Tangente à un cercle' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'نقول إن مستقيماً **مماس** لدائرة إذا كانت له معها **نقطة مشتركة وحيدة**.',
              fr: 'Une droite est **tangente** à un cercle si elle a **un unique point commun** avec ce cercle.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• إذا كان مستقيم مماساً للدائرة التي مركزها $O$ في النقطة $A$، فإنه عمودي على الشعاع $[OA]$ في $A$.\n\n• **عكسياً**: إذا كان مستقيم عمودياً في $A$ على الشعاع $[OA]$ فإنه مماس للدائرة في $A$.',
              fr: '• Si une droite est tangente en $A$ au cercle de centre $O$, elle est perpendiculaire en $A$ au rayon $[OA]$.\n\n• **Réciproquement** : une droite perpendiculaire en $A$ au rayon $[OA]$ est tangente au cercle en $A$.',
            },
          },
          {
            kind: 'geometry',
            x: [-3.2, 4.4],
            y: [-3, 3.6],
            polygons: [{ points: circle(0, 0, 2.2), color: 'brand' }],
            segments: [
              { from: [0, 0], to: [1.556, 1.556], dashed: true },
              { from: [-0.2, 3.3], to: [3.3, -0.2] },
            ],
            rightAngles: [{ at: [1.556, 1.556], u: [-0.707, -0.707], v: [0.707, -0.707] }],
            points: [
              { x: 0, y: 0, label: 'O' },
              { x: 1.556, y: 1.556, label: 'A' },
            ],
            caption: { ar: 'المماس في $A$ عمودي على الشعاع $[OA]$.', fr: 'La tangente en $A$ est perpendiculaire au rayon $[OA]$.' },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'خاصيتان', fr: 'Deux propriétés' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'واسط وتر', fr: 'Médiatrice d’une corde' },
            content: {
              ar: 'كل مستقيم يمر من مركز دائرة ويكون عمودياً على وتر فيها هو واسط هذا الوتر.',
              fr: 'Toute droite qui passe par le centre d’un cercle et qui est perpendiculaire à une corde est la médiatrice de cette corde.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'البرهان', fr: 'Démonstration' },
            statement: { ar: '$[AB]$ وتر في دائرة مركزها $O$، و $(D)$ يمر من $O$ وعمودي على $(AB)$.', fr: '$[AB]$ est une corde du cercle de centre $O$ et $(D)$ passe par $O$, perpendiculaire à $(AB)$.' },
            steps: [
              { ar: '$[OA]$ و $[OB]$ شعاعان، إذن $OA=OB$: النقطة $O$ متساوية المسافة عن طرفي $[AB]$، فهي على واسطه.', fr: '$[OA]$ et $[OB]$ sont des rayons, donc $OA=OB$ : $O$ est équidistant des extrémités de $[AB]$, il est sur sa médiatrice.' },
              { ar: 'الواسط هو المستقيم العمودي على $(AB)$ والمار من $O$، وهو $(D)$.', fr: 'La médiatrice est la perpendiculaire à $(AB)$ passant par $O$ : c’est $(D)$.' },
            ],
          },
          {
            kind: 'theorem',
            title: { ar: 'مثلث أحد أضلاعه قطر', fr: 'Triangle dont un côté est un diamètre' },
            content: {
              ar: 'كل مثلث محاط بدائرة ويكون أحد أضلاعه قطراً لها هو مثلث **قائم** في الرأس المقابل لهذا القطر.',
              fr: 'Tout triangle inscrit dans un cercle et dont un côté est un diamètre de ce cercle est **rectangle** au sommet opposé à ce diamètre.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'البرهان', fr: 'Démonstration' },
            statement: { ar: '$[AB]$ قطر في دائرة مركزها $O$، و $C$ نقطة من الدائرة.', fr: '$[AB]$ est un diamètre du cercle de centre $O$ et $C$ un point du cercle.' },
            steps: [
              { ar: '$OA=OB=OC$، إذن المثلثان $OAC$ و $OBC$ متساويا الساقين في $O$: $O\\widehat{A}C=O\\widehat{C}A$ و $O\\widehat{B}C=O\\widehat{C}B$.', fr: '$OA=OB=OC$, donc $OAC$ et $OBC$ sont isocèles en $O$ : $O\\widehat{A}C=O\\widehat{C}A$ et $O\\widehat{B}C=O\\widehat{C}B$.' },
              { ar: 'في المثلث $ABC$: $\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ$، أي $2\\,O\\widehat{C}A+2\\,O\\widehat{C}B=180^\\circ$.', fr: 'Dans $ABC$ : $\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ$, soit $2\\,O\\widehat{C}A+2\\,O\\widehat{C}B=180^\\circ$.' },
              { ar: 'إذن $A\\widehat{C}B=O\\widehat{C}A+O\\widehat{C}B=90^\\circ$: المثلث قائم في $C$.', fr: 'Donc $A\\widehat{C}B=O\\widehat{C}A+O\\widehat{C}B=90^\\circ$ : le triangle est rectangle en $C$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$M\\in(C)\\iff OM=r$ ؛ القطر $=2r$.', fr: '$M\\in(C)\\iff OM=r$ ; diamètre $=2r$.' },
      { ar: 'المماس في $A$ عمودي على الشعاع $[OA]$.', fr: 'La tangente en $A$ est perpendiculaire au rayon $[OA]$.' },
      { ar: 'العمودي على وتر والمار من المركز هو واسطه.', fr: 'La perpendiculaire à une corde passant par le centre est sa médiatrice.' },
      { ar: 'مثلث أحد أضلاعه قطر للدائرة المحيطة به ← قائم.', fr: 'Triangle dont un côté est un diamètre du cercle circonscrit → rectangle.' },
    ],
  },
  exercises: [
    {
      id: '1ac-cercle-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'الشعاع', fr: 'Le rayon' },
      statement: { ar: '$[IJ]$ قطر لدائرة $(C)$ و $IJ=6\\,\\text{cm}$. ما شعاع $(C)$ بـ cm؟', fr: '$[IJ]$ est un diamètre du cercle $(C)$ et $IJ=6\\,\\text{cm}$. Quel est le rayon de $(C)$ en cm ?' },
      question: { type: 'numeric', answer: 3, unit: 'cm' },
      hints: [{ ar: 'القطر يساوي ضعف الشعاع.', fr: 'Le diamètre vaut le double du rayon.' }],
      solution: [{ ar: 'المركز هو منتصف $[IJ]$ والشعاع $r=\\dfrac62=3\\,\\text{cm}$.', fr: 'Le centre est le milieu de $[IJ]$ et le rayon vaut $r=\\dfrac62=3\\,\\text{cm}$.' }],
    },
    {
      id: '1ac-cercle-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'المماس', fr: 'La tangente' },
      statement: { ar: 'المماس لدائرة مركزها $O$ في النقطة $A$ هو:', fr: 'La tangente au cercle de centre $O$ au point $A$ est :' },
      question: {
        type: 'mcq',
        options: [
          { ar: 'المستقيم العمودي على $(OA)$ في $A$', fr: 'la perpendiculaire à $(OA)$ en $A$' },
          { ar: 'المستقيم $(OA)$', fr: 'la droite $(OA)$' },
          { ar: 'المستقيم الموازي لـ $(OA)$ والمار من $O$', fr: 'la parallèle à $(OA)$ passant par $O$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'المماس والشعاع…', fr: 'La tangente et le rayon…' }],
      solution: [{ ar: 'المماس في $A$ عمودي على الشعاع $[OA]$ في $A$.', fr: 'La tangente en $A$ est perpendiculaire au rayon $[OA]$ en $A$.' }],
    },
    {
      id: '1ac-cercle-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلث في نصف دائرة', fr: 'Triangle dans un demi-cercle' },
      statement: { ar: '$[AB]$ قطر لدائرة و $C$ نقطة منها حيث $C\\widehat{A}B=35^\\circ$. احسب $A\\widehat{B}C$ بالدرجة.', fr: '$[AB]$ est un diamètre d’un cercle et $C$ un point du cercle avec $C\\widehat{A}B=35^\\circ$. Calculer $A\\widehat{B}C$ en degrés.' },
      question: { type: 'numeric', answer: 55, unit: '°' },
      hints: [{ ar: 'المثلث $ABC$ قائم في $C$.', fr: 'Le triangle $ABC$ est rectangle en $C$.' }],
      solution: [
        { ar: '$[AB]$ قطر، إذن $ABC$ قائم في $C$.', fr: '$[AB]$ est un diamètre, donc $ABC$ est rectangle en $C$.' },
        { ar: 'الزاويتان الحادتان متتامتان: $A\\widehat{B}C=90^\\circ-35^\\circ=55^\\circ$.', fr: 'Les angles aigus sont complémentaires : $A\\widehat{B}C=90^\\circ-35^\\circ=55^\\circ$.' },
      ],
    },
    {
      id: '1ac-cercle-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'مماسان متوازيان', fr: 'Deux tangentes parallèles' },
      statement: {
        ar: '$[WH]$ قطر للدائرة $(\\zeta)$. المستقيم $(\\Delta)$ مماس لها في $W$ والمستقيم $(D)$ مماس لها في $H$. بيّن أن $(D)\\parallel(\\Delta)$.',
        fr: '$[WH]$ est un diamètre du cercle $(\\zeta)$. $(\\Delta)$ est tangente en $W$ et $(D)$ tangente en $H$. Montrer que $(D)\\parallel(\\Delta)$.',
      },
      question: { type: 'open' },
      hints: [{ ar: 'كل مماس عمودي على الشعاع في نقطة التماس، والشعاعان محمولان على $(WH)$.', fr: 'Chaque tangente est perpendiculaire au rayon au point de contact ; les deux rayons sont portés par $(WH)$.' }],
      solution: [
        { ar: '$(\\Delta)$ مماس في $W$، إذن $(\\Delta)\\perp(WH)$. و $(D)$ مماس في $H$، إذن $(D)\\perp(WH)$.', fr: '$(\\Delta)$ est tangente en $W$, donc $(\\Delta)\\perp(WH)$. $(D)$ est tangente en $H$, donc $(D)\\perp(WH)$.' },
        { ar: 'مستقيمان عموديان على نفس المستقيم متوازيان: $(D)\\parallel(\\Delta)$.', fr: 'Deux droites perpendiculaires à une même droite sont parallèles : $(D)\\parallel(\\Delta)$.' },
      ],
    },
  ],
};
