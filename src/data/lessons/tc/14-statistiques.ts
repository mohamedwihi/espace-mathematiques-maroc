import type { LessonModule } from '@/types';

const lessonId = 'tc-statistiques';

export const statistiques: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'stats',
    title: { ar: 'الإحصاء', fr: 'Statistiques' },
    summary: {
      ar: 'المتسلسلات الإحصائية (المتقطعة وبالفئات)، الحصيصات المتراكمة، المنوال والوسيط والمتوسط، المغايرة والانحراف الطرازي.',
      fr: 'Séries statistiques (discrètes et en classes), effectifs cumulés, mode, médiane, moyenne, variance et écart-type.',
    },
    objectives: [
      { ar: 'حساب وسائط الموقع.', fr: 'Calculer les paramètres de position.' },
      { ar: 'حساب المغايرة والانحراف الطرازي.', fr: 'Calculer la variance et l’écart-type.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['statistique', 'moyenne', 'médiane', 'variance', 'écart-type', 'classes', 'إحصاء', 'متوسط', 'وسيط', 'مغايرة', 'انحراف طرازي'],
    sections: [
      {
        id: 'position',
        title: { ar: 'وسائط الموقع', fr: 'Paramètres de position' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'لمتسلسلة قيمها $x_i$ وحصيصاتها $n_i$ وحصيصها الإجمالي $N$:\n\n• المتوسط $\\bar x=\\dfrac1N\\sum n_ix_i$.\n\n• الوسيط $Me$ يقسم المتسلسلة المرتبة إلى جزأين متساويين في الحصيص.\n\n• المنوال هو القيمة (أو الفئة) ذات أكبر حصيص.\n\nفي حالة الفئات، نستعمل مراكزها لحساب المتوسط.',
              fr: 'Pour une série de valeurs $x_i$, d’effectifs $n_i$ et d’effectif total $N$ :\n\n• la moyenne $\\bar x=\\dfrac1N\\sum n_ix_i$ ;\n\n• la médiane $Me$ partage la série ordonnée en deux parties de même effectif ;\n\n• le mode est la valeur (ou la classe) de plus grand effectif.\n\nPour une série en classes, on utilise les centres des classes pour la moyenne.',
            },
          },
        ],
      },
      {
        id: 'dispersion',
        title: { ar: 'وسائط التشتت', fr: 'Paramètres de dispersion' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• **المغايرة**: $V=\\dfrac1N\\sum n_i(x_i-\\bar x)^2=\\dfrac1N\\sum n_ix_i^2-\\bar x^2$.\n\n• **الانحراف الطرازي**: $\\sigma=\\sqrt V$.\n\nكلما كان $\\sigma$ صغيراً كانت القيم متجمعة حول المتوسط.',
              fr: '• **Variance** : $V=\\dfrac1N\\sum n_i(x_i-\\bar x)^2=\\dfrac1N\\sum n_ix_i^2-\\bar x^2$.\n\n• **Écart-type** : $\\sigma=\\sqrt V$.\n\nPlus $\\sigma$ est petit, plus les valeurs sont regroupées autour de la moyenne.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'المتسلسلة $2;4;6;8$.', fr: 'La série $2;4;6;8$.' },
            steps: [
              { ar: '$\\bar x=\\dfrac{20}4=5$.', fr: '$\\bar x=\\dfrac{20}4=5$.' },
              { ar: '$V=\\dfrac{4+16+36+64}4-25=30-25=5$ و $\\sigma=\\sqrt5\\approx2{,}24$.', fr: '$V=\\dfrac{4+16+36+64}4-25=30-25=5$ et $\\sigma=\\sqrt5\\approx2{,}24$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$V=\\overline{x^2}-\\bar x^2$ و $\\sigma=\\sqrt V$.', fr: '$V=\\overline{x^2}-\\bar x^2$ et $\\sigma=\\sqrt V$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-sta-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'متوسط', fr: 'Moyenne' },
      statement: { ar: 'احسب متوسط $3;7;8;10;12$.', fr: 'Calculer la moyenne de $3;7;8;10;12$.' },
      question: { type: 'numeric', answer: 8 },
      hints: [{ ar: 'المجموع $40$.', fr: 'La somme vaut $40$.' }],
      solution: [{ ar: '$\\dfrac{40}5=8$.', fr: '$\\dfrac{40}5=8$.' }],
    },
    {
      id: 'tc-sta-02',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'statistics',
      title: { ar: 'مغايرة', fr: 'Variance' },
      statement: { ar: 'احسب مغايرة المتسلسلة $1;3;5$.', fr: 'Calculer la variance de la série $1;3;5$.' },
      question: { type: 'numeric', answer: 8 / 3, tolerance: 1e-6 },
      hints: [{ ar: '$\\bar x=3$.', fr: '$\\bar x=3$.' }],
      solution: [{ ar: '$V=\\dfrac{4+0+4}3=\\dfrac83\\approx2{,}667$.', fr: '$V=\\dfrac{4+0+4}3=\\dfrac83\\approx2{,}667$.' }],
    },
    {
      id: 'tc-sta-03',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'انحراف طرازي', fr: 'Écart-type' },
      statement: { ar: 'مغايرة متسلسلة $V=9$. ما انحرافها الطرازي؟', fr: 'Une série a pour variance $V=9$. Quel est son écart-type ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\sigma=\\sqrt V$.', fr: '$\\sigma=\\sqrt V$.' }],
      solution: [{ ar: '$\\sigma=\\sqrt9=3$.', fr: '$\\sigma=\\sqrt9=3$.' }],
    },
    {
      id: 'tc-sta-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'statistics',
      title: { ar: 'متوسط بالفئات', fr: 'Moyenne en classes' },
      statement: {
        ar: 'متسلسلة بالفئات: $[0;10[$ (حصيصها $2$)، $[10;20[$ ($5$)، $[20;30[$ ($3$). احسب المتوسط باستعمال مراكز الفئات.',
        fr: 'Série en classes : $[0;10[$ (effectif $2$), $[10;20[$ ($5$), $[20;30[$ ($3$). Calculer la moyenne avec les centres des classes.',
      },
      question: { type: 'numeric', answer: 16 },
      hints: [{ ar: 'المراكز $5$ و $15$ و $25$.', fr: 'Centres : $5$, $15$, $25$.' }],
      solution: [{ ar: '$\\dfrac{2\\times5+5\\times15+3\\times25}{10}=\\dfrac{160}{10}=16$.', fr: '$\\dfrac{2\\times5+5\\times15+3\\times25}{10}=\\dfrac{160}{10}=16$.' }],
    },
  ],
};
