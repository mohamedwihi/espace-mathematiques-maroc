import type { LessonModule } from '@/types';

const lessonId = 'tc-projection';

export const projection: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'projection',
    title: { ar: 'الإسقاط في المستوى', fr: 'La projection dans le plan' },
    summary: {
      ar: 'الإسقاط على مستقيم بتواز مع مستقيم آخر، الإسقاط العمودي، الحفاظ على المنتصف وعلى معامل الاستقامية.',
      fr: 'Projection sur une droite parallèlement à une autre, projection orthogonale, conservation du milieu et du coefficient de colinéarité.',
    },
    objectives: [
      { ar: 'إنشاء مسقط نقطة.', fr: 'Construire le projeté d’un point.' },
      { ar: 'استعمال خاصيات الإسقاط.', fr: 'Utiliser les propriétés de la projection.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    keywords: ['projection', 'projeté', 'orthogonale', 'milieu', 'إسقاط', 'مسقط', 'إسقاط عمودي'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف', fr: 'Définition' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $(D)$ و $(\\Delta)$ مستقيمين متقاطعين. مسقط نقطة $M$ على $(D)$ بتواز مع $(\\Delta)$ هو نقطة تقاطع $(D)$ والمستقيم المار من $M$ والموازي لـ $(\\Delta)$. إذا كان $(\\Delta)\\perp(D)$ نتكلم عن **الإسقاط العمودي**.',
              fr: 'Soient $(D)$ et $(\\Delta)$ deux droites sécantes. Le projeté de $M$ sur $(D)$ parallèlement à $(\\Delta)$ est l’intersection de $(D)$ avec la parallèle à $(\\Delta)$ passant par $M$. Si $(\\Delta)\\perp(D)$, on parle de **projection orthogonale**.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'مسقط كل نقطة من $(D)$ هو النقطة نفسها.',
              fr: 'Tout point de $(D)$ est son propre projeté.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.6, 7],
            y: [-0.8, 4],
            segments: [
              { from: [0, 0], to: [6.6, 0] },
              { from: [1.5, 3], to: [0.5, 0], dashed: true },
              { from: [4.5, 3.4], to: [3.367, 0], dashed: true },
              { from: [1.5, 3], to: [4.5, 3.4] },
            ],
            points: [
              { x: 1.5, y: 3, label: 'A' },
              { x: 4.5, y: 3.4, label: 'B' },
              { x: 0.5, y: 0, label: "A'" },
              { x: 3.367, y: 0, label: "B'" },
            ],
            caption: { ar: '$A\'$ و $B\'$ مسقطا $A$ و $B$ على $(D)$ بتواز مع اتجاه ثابت.', fr: '$A\'$ et $B\'$ sont les projetés de $A$ et $B$ sur $(D)$ parallèlement à une direction fixe.' },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'خاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• الإسقاط يحافظ على المنتصف: إذا كان $I$ منتصف $[AB]$ فإن $I\'$ منتصف $[A\'B\']$.\n\n• الإسقاط يحافظ على معامل الاستقامية: إذا كان $\\overrightarrow{AC}=k\\overrightarrow{AB}$ فإن $\\overrightarrow{A\'C\'}=k\\overrightarrow{A\'B\'}$.',
              fr: '• La projection conserve le milieu : si $I$ est le milieu de $[AB]$, $I\'$ est le milieu de $[A\'B\']$.\n\n• Elle conserve le coefficient de colinéarité : si $\\overrightarrow{AC}=k\\overrightarrow{AB}$ alors $\\overrightarrow{A\'C\'}=k\\overrightarrow{A\'B\'}$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'الإسقاط **لا يحافظ** على الأطوال بصفة عامة. في الإسقاط العمودي لقطعة طولها $\\ell$ تصنع زاوية $\\alpha$ مع $(D)$، طول المسقط $\\ell\\cos\\alpha$.',
              fr: 'La projection **ne conserve pas** les longueurs en général. En projection orthogonale, un segment de longueur $\\ell$ faisant un angle $\\alpha$ avec $(D)$ a un projeté de longueur $\\ell\\cos\\alpha$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'المنتصف ومعامل الاستقامية محفوظان.', fr: 'Milieu et coefficient de colinéarité sont conservés.' },
      { ar: 'الأطوال غير محفوظة.', fr: 'Les longueurs ne sont pas conservées.' },
    ],
  },
  exercises: [
    {
      id: 'tc-pro-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مسقط المنتصف', fr: 'Projeté du milieu' },
      statement: { ar: '$I$ منتصف $[AB]$ و $A\'$ و $B\'$ و $I\'$ مساقطها على $(D)$. ماذا تمثل $I\'$؟', fr: '$I$ est le milieu de $[AB]$ ; $A\'$, $B\'$, $I\'$ sont leurs projetés sur $(D)$. Que représente $I\'$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'منتصف $[A\'B\']$', fr: 'Le milieu de $[A\'B\']$' }, { ar: 'النقطة $A\'$', fr: 'Le point $A\'$' }, { ar: 'لا شيء خاص', fr: 'Rien de particulier' }],
        correct: 0,
      },
      hints: [{ ar: 'الإسقاط يحافظ على المنتصف.', fr: 'La projection conserve le milieu.' }],
      solution: [{ ar: '$I\'$ منتصف $[A\'B\']$.', fr: '$I\'$ est le milieu de $[A\'B\']$.' }],
    },
    {
      id: 'tc-pro-02',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'معامل الاستقامية', fr: 'Coefficient de colinéarité' },
      statement: { ar: '$\\overrightarrow{AC}=3\\overrightarrow{AB}$ و $A\'B\'=2$ (مساقط على $(D)$). احسب $A\'C\'$.', fr: '$\\overrightarrow{AC}=3\\overrightarrow{AB}$ et $A\'B\'=2$ (projetés sur $(D)$). Calculer $A\'C\'$.' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: '$\\overrightarrow{A\'C\'}=3\\overrightarrow{A\'B\'}$.', fr: '$\\overrightarrow{A\'C\'}=3\\overrightarrow{A\'B\'}$.' }],
      solution: [{ ar: '$A\'C\'=3\\times2=6$.', fr: '$A\'C\'=3\\times2=6$.' }],
    },
    {
      id: 'tc-pro-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'إسقاط عمودي', fr: 'Projection orthogonale' },
      statement: { ar: 'قطعة طولها $10$ تصنع زاوية $60^\\circ$ مع $(D)$. ما طول مسقطها العمودي على $(D)$؟', fr: 'Un segment de longueur $10$ fait un angle de $60^\\circ$ avec $(D)$. Quelle est la longueur de son projeté orthogonal sur $(D)$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$10\\cos60^\\circ$.', fr: '$10\\cos60^\\circ$.' }],
      solution: [{ ar: '$10\\times\\dfrac12=5$.', fr: '$10\\times\\dfrac12=5$.' }],
    },
    {
      id: 'tc-pro-04',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'نقطة من المستقيم', fr: 'Point de la droite' },
      statement: { ar: 'ما مسقط نقطة $M\\in(D)$ على $(D)$؟', fr: 'Quel est le projeté d’un point $M\\in(D)$ sur $(D)$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$M$ نفسها', fr: '$M$ lui-même' }, { ar: 'غير موجود', fr: 'Il n’existe pas' }, { ar: 'نقطة أخرى', fr: 'Un autre point' }],
        correct: 0,
      },
      hints: [{ ar: 'الموازي المار من $M$ يقطع $(D)$ في $M$.', fr: 'La parallèle passant par $M$ coupe $(D)$ en $M$.' }],
      solution: [{ ar: 'مسقط $M$ هو $M$ نفسها.', fr: 'Le projeté de $M$ est $M$ lui-même.' }],
    },
  ],
};
