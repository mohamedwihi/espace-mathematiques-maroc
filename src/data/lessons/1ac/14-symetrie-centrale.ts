import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-symetrie-centrale';

export const symetrieCentrale: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'central-symmetry',
    title: { ar: 'التماثل المركزي', fr: 'Symétrie centrale' },
    summary: {
      ar: 'مماثلة نقطة وقطعة ومستقيم ونصف مستقيم وزاوية ودائرة بالنسبة لنقطة، والخاصيات التي يحافظ عليها التماثل المركزي.',
      fr: 'Symétrique d’un point, d’un segment, d’une droite, d’une demi-droite, d’un angle et d’un cercle ; propriétés conservées.',
    },
    objectives: [
      { ar: 'إنشاء مماثلة نقطة وقطعة ومستقيم وزاوية ودائرة.', fr: 'Construire le symétrique d’un point, d’un segment, d’une droite, d’un angle et d’un cercle.' },
      { ar: 'معرفة أن التماثل المركزي يحافظ على المسافة والاستقامية وقياس الزوايا.', fr: 'Savoir que la symétrie centrale conserve distances, alignement et mesures d’angles.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['symétrie centrale', 'symétrique', 'centre de symétrie', 'conservation', 'تماثل مركزي', 'مماثلة', 'مركز التماثل'],
    sections: [
      {
        id: 'point',
        title: { ar: 'مماثلة نقطة', fr: 'Symétrique d’un point' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'نقول إن النقطة $M\'$ **مماثلة** النقطة $M$ بالنسبة للنقطة $O$ إذا كانت $O$ **منتصف** القطعة $[MM\']$.',
              fr: 'Le point $M\'$ est le **symétrique** de $M$ par rapport au point $O$ lorsque $O$ est le **milieu** du segment $[MM\']$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'إذا كانت $A\'$ مماثلة $A$ بالنسبة لـ $M$ فإن $A$ مماثلة $A\'$ بالنسبة لـ $M$. ومماثلة النقطة $M$ بالنسبة لـ $M$ هي $M$ نفسها.',
              fr: 'Si $A\'$ est le symétrique de $A$ par rapport à $M$, alors $A$ est le symétrique de $A\'$. Le symétrique de $M$ par rapport à $M$ est $M$ lui-même.',
            },
          },
          {
            kind: 'geometry',
            x: [-4.5, 4.5],
            y: [-2.5, 2.5],
            segments: [
              { from: [-3, 1.5], to: [3, -1.5], dashed: true },
              { from: [-3.5, -1], to: [3.5, 1], dashed: true },
              { from: [-3, 1.5], to: [-3.5, -1] },
              { from: [3, -1.5], to: [3.5, 1] },
            ],
            points: [
              { x: 0, y: 0, label: 'O' },
              { x: -3, y: 1.5, label: 'A' },
              { x: 3, y: -1.5, label: "A'" },
              { x: -3.5, y: -1, label: 'B' },
              { x: 3.5, y: 1, label: "B'" },
            ],
            caption: {
              ar: '$O$ منتصف $[AA\']$ و $[BB\']$: القطعة $[A\'B\']$ مماثلة $[AB]$، و $A\'B\'=AB$ و $(A\'B\')\\parallel(AB)$.',
              fr: '$O$ est le milieu de $[AA\']$ et de $[BB\']$ : $[A\'B\']$ est le symétrique de $[AB]$, avec $A\'B\'=AB$ et $(A\'B\')\\parallel(AB)$.',
            },
          },
        ],
      },
      {
        id: 'figures',
        title: { ar: 'مماثلات الأشكال', fr: 'Symétriques des figures' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'قطعة', fr: 'Segment' },
            content: {
              ar: 'مماثلة قطعة $[AB]$ بالنسبة لنقطة هي قطعة $[A\'B\']$ لها **نفس الطول**: التماثل المركزي يحافظ على المسافات. لإنشائها ننشئ مماثلتي طرفيها.',
              fr: 'Le symétrique d’un segment $[AB]$ par rapport à un point est un segment $[A\'B\']$ de **même longueur** : la symétrie centrale conserve les distances. On construit les symétriques des extrémités.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'مستقيم ونصف مستقيم', fr: 'Droite et demi-droite' },
            content: {
              ar: 'مماثلة مستقيم بالنسبة لنقطة هي مستقيم **موازٍ** له، ومماثلة نصف مستقيم نصف مستقيم موازٍ له. والتماثل المركزي يحافظ على **استقامية** النقط.',
              fr: 'Le symétrique d’une droite par rapport à un point est une droite **parallèle** ; celui d’une demi-droite est une demi-droite parallèle. La symétrie centrale conserve l’**alignement**.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'زاوية', fr: 'Angle' },
            content: {
              ar: 'مماثلة زاوية بالنسبة لنقطة زاوية **لها نفس القياس**.',
              fr: 'Le symétrique d’un angle par rapport à un point est un angle de **même mesure**.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'دائرة', fr: 'Cercle' },
            content: {
              ar: 'مماثلة دائرة بالنسبة لنقطة دائرة **لها نفس الشعاع**، ومركزاهما متماثلان بالنسبة لهذه النقطة. لإنشائها ننشئ مماثلة المركز ونحتفظ بالشعاع.',
              fr: 'Le symétrique d’un cercle par rapport à un point est un cercle de **même rayon**, dont le centre est le symétrique du centre. On construit le symétrique du centre et on garde le rayon.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: '$ABC$ مثلث قائم في $A$ حيث $AC=6\\,\\text{cm}$، و $I$ منتصف $[BC]$. $A\'$ مماثلة $A$ بالنسبة لـ $I$. احسب $A\'B$.',
              fr: '$ABC$ est rectangle en $A$ avec $AC=6\\,\\text{cm}$ et $I$ le milieu de $[BC]$. $A\'$ est le symétrique de $A$ par rapport à $I$. Calculer $A\'B$.',
            },
            steps: [
              { ar: '$I$ منتصف $[BC]$، إذن مماثلة $C$ بالنسبة لـ $I$ هي $B$. ومماثلة $A$ هي $A\'$.', fr: '$I$ est le milieu de $[BC]$, donc le symétrique de $C$ par rapport à $I$ est $B$ ; celui de $A$ est $A\'$.' },
              { ar: 'إذن $[A\'B]$ مماثلة $[AC]$، والتماثل يحافظ على المسافات: $A\'B=AC=6\\,\\text{cm}$.', fr: 'Donc $[A\'B]$ est le symétrique de $[AC]$ et la symétrie conserve les distances : $A\'B=AC=6\\,\\text{cm}$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$M\'$ مماثلة $M$ بالنسبة لـ $O$ ⇔ $O$ منتصف $[MM\']$.', fr: '$M\'$ symétrique de $M$ par rapport à $O$ ⇔ $O$ milieu de $[MM\']$.' },
      { ar: 'يحافظ التماثل المركزي على: المسافات، الاستقامية، قياس الزوايا.', fr: 'La symétrie centrale conserve : distances, alignement, mesures d’angles.' },
      { ar: 'مماثلة مستقيم مستقيم موازٍ له.', fr: 'Le symétrique d’une droite est une droite parallèle.' },
      { ar: 'مماثلة دائرة دائرة لها نفس الشعاع ومركزها مماثلة المركز.', fr: 'Le symétrique d’un cercle est un cercle de même rayon, centré au symétrique du centre.' },
    ],
  },
  exercises: [
    {
      id: '1ac-symc-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'تعريف', fr: 'Définition' },
      statement: { ar: '$M\'$ مماثلة $M$ بالنسبة لـ $O$. هذا يعني أن:', fr: '$M\'$ est le symétrique de $M$ par rapport à $O$. Cela signifie que :' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$O$ منتصف $[MM\']$', fr: '$O$ est le milieu de $[MM\']$' },
          { ar: '$M$ منتصف $[OM\']$', fr: '$M$ est le milieu de $[OM\']$' },
          { ar: '$(OM)\\perp(OM\')$', fr: '$(OM)\\perp(OM\')$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'مركز التماثل يقع بين النقطة ومماثلتها.', fr: 'Le centre de symétrie est entre le point et son symétrique.' }],
      solution: [{ ar: 'حسب التعريف، $O$ هي منتصف القطعة $[MM\']$.', fr: 'Par définition, $O$ est le milieu du segment $[MM\']$.' }],
    },
    {
      id: '1ac-symc-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مماثلة زاوية', fr: 'Symétrique d’un angle' },
      statement: {
        ar: '$ABC$ مثلث حيث $B\\widehat{A}C=63^\\circ$. $E$ و $F$ و $G$ مماثلات $A$ و $B$ و $C$ بالنسبة لنقطة $I$. ما قياس $F\\widehat{E}G$ بالدرجة؟',
        fr: '$ABC$ est un triangle avec $B\\widehat{A}C=63^\\circ$. $E$, $F$, $G$ sont les symétriques de $A$, $B$, $C$ par rapport à un point $I$. Quelle est la mesure de $F\\widehat{E}G$ en degrés ?',
      },
      question: { type: 'numeric', answer: 63, unit: '°' },
      hints: [{ ar: '$F\\widehat{E}G$ هي مماثلة $B\\widehat{A}C$.', fr: '$F\\widehat{E}G$ est le symétrique de $B\\widehat{A}C$.' }],
      solution: [{ ar: 'التماثل المركزي يحافظ على قياس الزوايا: $F\\widehat{E}G=B\\widehat{A}C=63^\\circ$.', fr: 'La symétrie centrale conserve les mesures d’angles : $F\\widehat{E}G=B\\widehat{A}C=63^\\circ$.' }],
    },
    {
      id: '1ac-symc-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مماثلة قطعة', fr: 'Symétrique d’un segment' },
      statement: {
        ar: '$ABC$ مثلث قائم في $A$ حيث $AC=6\\,\\text{cm}$ و $I$ منتصف $[BC]$. $A\'$ مماثلة $A$ بالنسبة لـ $I$. احسب $A\'B$ بـ cm.',
        fr: '$ABC$ est rectangle en $A$, $AC=6\\,\\text{cm}$ et $I$ est le milieu de $[BC]$. $A\'$ est le symétrique de $A$ par rapport à $I$. Calculer $A\'B$ en cm.',
      },
      question: { type: 'numeric', answer: 6, unit: 'cm' },
      hints: [{ ar: 'ما هي مماثلة $C$ بالنسبة لـ $I$؟', fr: 'Quel est le symétrique de $C$ par rapport à $I$ ?' }],
      solution: [
        { ar: 'مماثلة $C$ هي $B$ ومماثلة $A$ هي $A\'$، إذن $[A\'B]$ مماثلة $[AC]$.', fr: 'Le symétrique de $C$ est $B$ et celui de $A$ est $A\'$, donc $[A\'B]$ est le symétrique de $[AC]$.' },
        { ar: '$A\'B=AC=6\\,\\text{cm}$.', fr: '$A\'B=AC=6\\,\\text{cm}$.' },
      ],
    },
    {
      id: '1ac-symc-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'مماثلة مستقيم', fr: 'Symétrique d’une droite' },
      statement: {
        ar: '$IJK$ مثلث و $J\'$ و $K\'$ مماثلتا $J$ و $K$ بالنسبة لـ $I$. بيّن أن $(J\'K\')\\parallel(JK)$.',
        fr: '$IJK$ est un triangle ; $J\'$ et $K\'$ sont les symétriques de $J$ et $K$ par rapport à $I$. Montrer que $(J\'K\')\\parallel(JK)$.',
      },
      question: { type: 'open' },
      hints: [{ ar: 'ما هي مماثلة المستقيم $(JK)$ بالنسبة لـ $I$؟', fr: 'Quel est le symétrique de la droite $(JK)$ par rapport à $I$ ?' }],
      solution: [
        { ar: 'مماثلة $J$ هي $J\'$ ومماثلة $K$ هي $K\'$، إذن مماثلة المستقيم $(JK)$ بالنسبة لـ $I$ هي $(J\'K\')$.', fr: 'Le symétrique de $J$ est $J\'$ et celui de $K$ est $K\'$, donc le symétrique de la droite $(JK)$ par rapport à $I$ est $(J\'K\')$.' },
        { ar: 'مماثلة مستقيم بالنسبة لنقطة مستقيم موازٍ له، إذن $(J\'K\')\\parallel(JK)$.', fr: 'Le symétrique d’une droite par rapport à un point est une droite parallèle, donc $(J\'K\')\\parallel(JK)$.' },
      ],
    },
  ],
};
