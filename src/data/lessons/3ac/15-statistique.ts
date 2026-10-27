import type { LessonModule } from '@/types';

const lessonId = '3ac-statistique';

export const statistique: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'stats',
    title: { ar: 'الإحصاء', fr: 'Statistique' },
    summary: {
      ar: 'مصطلحات الإحصاء، الحصيص والتردد، المتوسط الحسابي، الوسيط، المنوال والمدى.',
      fr: 'Vocabulaire, effectifs et fréquences, moyenne arithmétique, médiane, mode et étendue.',
    },
    objectives: [
      { ar: 'حساب الحصيصات والترددات.', fr: 'Calculer effectifs et fréquences.' },
      { ar: 'حساب المتوسط الحسابي والوسيط والمنوال.', fr: 'Calculer la moyenne, la médiane et le mode.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    keywords: ['statistique', 'effectif', 'fréquence', 'moyenne', 'médiane', 'mode', 'étendue', 'إحصاء', 'حصيص', 'تردد', 'متوسط', 'وسيط', 'منوال'],
    sections: [
      {
        id: 'vocabulaire',
        title: { ar: 'مصطلحات', fr: 'Vocabulaire' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '**الساكنة**: المجموعة المدروسة، و**الميزة**: الخاصية المدروسة (كمية أو نوعية).', fr: '**Population** : l’ensemble étudié ; **caractère** : la propriété étudiée (quantitatif ou qualitatif).' },
              { ar: '**الحصيص** $n_i$: عدد مرات ظهور قيمة، و**الحصيص الإجمالي** $N$: مجموع الحصيصات.', fr: '**Effectif** $n_i$ : nombre d’apparitions d’une valeur ; **effectif total** $N$ : somme des effectifs.' },
              { ar: '**التردد** $f_i=\\dfrac{n_i}N$ (يمكن كتابته بالنسبة المئوية).', fr: '**Fréquence** $f_i=\\dfrac{n_i}N$ (souvent en pourcentage).' },
            ],
          },
        ],
      },
      {
        id: 'parametres',
        title: { ar: 'وسائط الموقع والتشتت', fr: 'Paramètres de position et de dispersion' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• **المتوسط الحسابي**: $\\bar x=\\dfrac{n_1x_1+n_2x_2+\\dots+n_px_p}{N}$.\n\n• **الوسيط**: القيمة التي تقسم المتسلسلة المرتبة إلى جزأين لهما نفس الحصيص.\n\n• **المنوال**: القيمة ذات أكبر حصيص.\n\n• **المدى**: الفرق بين أكبر قيمة وأصغر قيمة.',
              fr: '• **Moyenne** : $\\bar x=\\dfrac{n_1x_1+n_2x_2+\\dots+n_px_p}{N}$.\n\n• **Médiane** : valeur qui partage la série ordonnée en deux parties de même effectif.\n\n• **Mode** : valeur de plus grand effectif.\n\n• **Étendue** : différence entre la plus grande et la plus petite valeur.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'نقط $6$ تلاميذ: $8$ ؛ $10$ ؛ $12$ ؛ $12$ ؛ $14$ ؛ $16$.', fr: 'Notes de $6$ élèves : $8$ ; $10$ ; $12$ ; $12$ ; $14$ ; $16$.' },
            steps: [
              { ar: 'المتوسط: $\\dfrac{72}6=12$.', fr: 'Moyenne : $\\dfrac{72}6=12$.' },
              { ar: 'الوسيط: $N=6$ زوجي، الوسيط هو معدل القيمتين 3 و 4: $\\dfrac{12+12}2=12$.', fr: 'Médiane : $N=6$ pair, moyenne des 3e et 4e valeurs : $\\dfrac{12+12}2=12$.' },
              { ar: 'المنوال $12$ والمدى $16-8=8$.', fr: 'Mode $12$ et étendue $16-8=8$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نرتب القيم قبل تحديد الوسيط.', fr: 'On range les valeurs avant de chercher la médiane.' },
      { ar: 'مجموع الترددات يساوي $1$ (أو $100\\%$).', fr: 'La somme des fréquences vaut $1$ (ou $100\\%$).' },
    ],
  },
  exercises: [
    {
      id: '3ac-sta-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'متوسط حسابي', fr: 'Moyenne' },
      statement: {
        ar: 'نقط قسم: النقطة $10$ (حصيصها $3$)، $12$ (حصيصها $5$)، $15$ (حصيصها $2$). احسب المتوسط الحسابي.',
        fr: 'Notes d’une classe : $10$ (effectif $3$), $12$ (effectif $5$), $15$ (effectif $2$). Calculer la moyenne.',
      },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: '$\\dfrac{3\\times10+5\\times12+2\\times15}{10}$.', fr: '$\\dfrac{3\\times10+5\\times12+2\\times15}{10}$.' }],
      solution: [{ ar: '$\\dfrac{30+60+30}{10}=\\dfrac{120}{10}=12$.', fr: '$\\dfrac{30+60+30}{10}=\\dfrac{120}{10}=12$.' }],
    },
    {
      id: '3ac-sta-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'تردد', fr: 'Fréquence' },
      statement: { ar: 'في نفس المتسلسلة، ما تردد النقطة $15$ (بالنسبة المئوية)؟', fr: 'Dans la même série, quelle est la fréquence de la note $15$ (en %) ?' },
      question: { type: 'numeric', answer: 20, unit: '%' },
      hints: [{ ar: '$\\dfrac{2}{10}$.', fr: '$\\dfrac{2}{10}$.' }],
      solution: [{ ar: '$\\dfrac2{10}=0{,}2=20\\%$.', fr: '$\\dfrac2{10}=0{,}2=20\\%$.' }],
    },
    {
      id: '3ac-sta-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'statistics',
      title: { ar: 'وسيط', fr: 'Médiane' },
      statement: { ar: 'ما وسيط المتسلسلة $3$ ؛ $9$ ؛ $5$ ؛ $7$ ؛ $11$؟', fr: 'Quelle est la médiane de la série $3$ ; $9$ ; $5$ ; $7$ ; $11$ ?' },
      question: { type: 'numeric', answer: 7 },
      hints: [{ ar: 'رتب القيم أولاً.', fr: 'Range d’abord les valeurs.' }],
      solution: [{ ar: 'المتسلسلة المرتبة: $3;5;7;9;11$، القيمة الوسطى هي $7$.', fr: 'Série ordonnée : $3;5;7;9;11$ ; la valeur du milieu est $7$.' }],
    },
    {
      id: '3ac-sta-04',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'منوال ومدى', fr: 'Mode et étendue' },
      statement: { ar: 'ما مدى المتسلسلة $4$ ؛ $7$ ؛ $7$ ؛ $9$ ؛ $15$؟', fr: 'Quelle est l’étendue de la série $4$ ; $7$ ; $7$ ; $9$ ; $15$ ?' },
      question: { type: 'numeric', answer: 11 },
      hints: [{ ar: 'أكبر قيمة ناقص أصغر قيمة.', fr: 'Plus grande valeur moins plus petite.' }],
      solution: [{ ar: '$15-4=11$ (والمنوال هو $7$).', fr: '$15-4=11$ (et le mode est $7$).' }],
    },
  ],
};
