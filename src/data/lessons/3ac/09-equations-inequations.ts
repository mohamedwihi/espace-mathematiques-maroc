import type { LessonModule } from '@/types';

const lessonId = '3ac-equations-inequations';

export const equationsInequations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'equations',
    title: { ar: 'المعادلات والمتراجحات', fr: 'Équations et inéquations' },
    summary: {
      ar: 'المعادلات من الدرجة الأولى بمجهول واحد، معادلة جداء منعدم، المتراجحات من الدرجة الأولى، وترييض المسائل.',
      fr: 'Équations du premier degré à une inconnue, équations produit nul, inéquations du premier degré et mise en équation de problèmes.',
    },
    objectives: [
      { ar: 'حل معادلات من الدرجة الأولى ومعادلات جداء منعدم.', fr: 'Résoudre des équations du premier degré et des équations produit nul.' },
      { ar: 'حل متراجحات من الدرجة الأولى وتمثيل حلولها.', fr: 'Résoudre des inéquations du premier degré et représenter leurs solutions.' },
      { ar: 'ترييض مسألة وحلها.', fr: 'Mettre un problème en équation et le résoudre.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    featured: true,
    keywords: ['équation', 'inéquation', 'produit nul', 'mise en équation', 'معادلة', 'متراجحة', 'جداء منعدم'],
    sections: [
      {
        id: 'equations',
        title: { ar: 'المعادلات', fr: 'Équations' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'لحل معادلة من الدرجة الأولى: ننقل الحدود التي تتضمن المجهول إلى طرف والأعداد إلى الطرف الآخر، ثم نقسم على معامل المجهول.',
              fr: 'Pour résoudre une équation du premier degré : on regroupe les termes en $x$ d’un côté et les nombres de l’autre, puis on divise par le coefficient de $x$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'جداء منعدم', fr: 'Produit nul' },
            content: {
              ar: 'يكون جداء عددين منعدماً إذا وفقط إذا كان أحدهما على الأقل منعدماً: $A\\times B=0\\iff A=0$ أو $B=0$.',
              fr: 'Un produit est nul si et seulement si l’un au moins de ses facteurs est nul : $A\\times B=0\\iff A=0$ ou $B=0$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $(2x-1)(x+4)=0$.', fr: 'Résoudre $(2x-1)(x+4)=0$.' },
            steps: [
              { ar: '$2x-1=0$ أو $x+4=0$.', fr: '$2x-1=0$ ou $x+4=0$.' },
              { ar: '$x=\\dfrac12$ أو $x=-4$. مجموعة الحلول $\\left\\{-4;\\dfrac12\\right\\}$.', fr: '$x=\\dfrac12$ ou $x=-4$. Ensemble des solutions : $\\left\\{-4;\\dfrac12\\right\\}$.' },
            ],
          },
        ],
      },
      {
        id: 'inequations',
        title: { ar: 'المتراجحات', fr: 'Inéquations' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'نحل متراجحة مثل المعادلة، مع الانتباه: عند ضرب أو قسمة الطرفين على عدد **سالب** يتغير اتجاه المتراجحة.',
              fr: 'On résout une inéquation comme une équation, avec une précaution : quand on multiplie ou divise les deux membres par un nombre **négatif**, le sens de l’inégalité change.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $2x-3<5x+6$.', fr: 'Résoudre $2x-3<5x+6$.' },
            steps: [
              { ar: '$2x-5x<6+3$ أي $-3x<9$.', fr: '$2x-5x<6+3$ soit $-3x<9$.' },
              { ar: 'نقسم على $-3<0$: $x>-3$. الحلول هي كل الأعداد الأكبر قطعاً من $-3$.', fr: 'On divise par $-3<0$ : $x>-3$. Les solutions sont tous les nombres strictement supérieurs à $-3$.' },
            ],
          },
        ],
      },
      {
        id: 'problemes',
        title: { ar: 'ترييض مسألة', fr: 'Mise en équation' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: '1. اختيار المجهول. 2. وضع المعادلة أو المتراجحة. 3. الحل. 4. التحقق والخلاصة.',
              fr: '1. Choisir l’inconnue. 2. Écrire l’équation ou l’inéquation. 3. Résoudre. 4. Vérifier et conclure.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'ثلاثة أضعاف عدد مضافاً إليه $7$ يساوي $25$. ما هو العدد؟', fr: 'Le triple d’un nombre augmenté de $7$ vaut $25$. Quel est ce nombre ?' },
            steps: [{ ar: '$3x+7=25$ إذن $3x=18$ و $x=6$.', fr: '$3x+7=25$ donc $3x=18$ et $x=6$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: '$A\\times B=0\\iff A=0$ أو $B=0$.', fr: '$A\\times B=0\\iff A=0$ ou $B=0$.' },
      { ar: 'القسمة على عدد سالب تقلب اتجاه المتراجحة.', fr: 'Diviser par un négatif renverse le sens de l’inéquation.' },
    ],
  },
  exercises: [
    {
      id: '3ac-eqi-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معادلة بسيطة', fr: 'Équation simple' },
      statement: { ar: 'حل المعادلة $3x-7=2x+5$.', fr: 'Résoudre $3x-7=2x+5$.' },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: '$3x-2x=5+7$.', fr: '$3x-2x=5+7$.' }],
      solution: [{ ar: '$x=12$. تحقق: $36-7=29=24+5$ ✓.', fr: '$x=12$. Vérification : $36-7=29=24+5$ ✓.' }],
    },
    {
      id: '3ac-eqi-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'جداء منعدم', fr: 'Produit nul' },
      statement: { ar: 'حل المعادلة $x^2-9=0$.', fr: 'Résoudre $x^2-9=0$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\{-3;3\\}$', fr: '$\\{-3;3\\}$' }, { ar: '$\\{3\\}$', fr: '$\\{3\\}$' }, { ar: '$\\{9\\}$', fr: '$\\{9\\}$' }, { ar: 'لا حل', fr: 'Aucune solution' }],
        correct: 0,
      },
      hints: [{ ar: '$x^2-9=(x-3)(x+3)$.', fr: '$x^2-9=(x-3)(x+3)$.' }],
      solution: [{ ar: '$(x-3)(x+3)=0$ إذن $x=3$ أو $x=-3$.', fr: '$(x-3)(x+3)=0$ donc $x=3$ ou $x=-3$.' }],
    },
    {
      id: '3ac-eqi-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'متراجحة', fr: 'Inéquation' },
      statement: { ar: 'ما حلول المتراجحة $4-2x\\ge10$؟', fr: 'Quelles sont les solutions de $4-2x\\ge10$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$x\\le-3$', fr: '$x\\le-3$' }, { ar: '$x\\ge-3$', fr: '$x\\ge-3$' }, { ar: '$x\\le3$', fr: '$x\\le3$' }, { ar: '$x\\ge3$', fr: '$x\\ge3$' }],
        correct: 0,
      },
      hints: [{ ar: '$-2x\\ge6$ ثم القسمة على $-2$.', fr: '$-2x\\ge6$ puis diviser par $-2$.' }],
      solution: [{ ar: '$-2x\\ge6$؛ القسمة على $-2<0$ تقلب الاتجاه: $x\\le-3$.', fr: '$-2x\\ge6$ ; diviser par $-2<0$ renverse le sens : $x\\le-3$.' }],
    },
    {
      id: '3ac-eqi-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'محيط مستطيل', fr: 'Périmètre d’un rectangle' },
      statement: { ar: 'طول مستطيل يزيد عن عرضه بـ $4\\,\\text{cm}$ ومحيطه $28\\,\\text{cm}$. ما عرضه؟', fr: 'La longueur d’un rectangle dépasse sa largeur de $4\\,\\text{cm}$ et son périmètre vaut $28\\,\\text{cm}$. Quelle est sa largeur ?' },
      question: { type: 'numeric', answer: 5, unit: 'cm' },
      hints: [{ ar: '$2(x+x+4)=28$.', fr: '$2(x+x+4)=28$.' }],
      solution: [{ ar: '$4x+8=28$ إذن $x=5$: العرض $5\\,\\text{cm}$ والطول $9\\,\\text{cm}$.', fr: '$4x+8=28$ donc $x=5$ : largeur $5\\,\\text{cm}$, longueur $9\\,\\text{cm}$.' }],
    },
  ],
};
