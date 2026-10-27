import type { LessonModule } from '@/types';

const lessonId = '3ac-ordre-operations';

export const ordreOperations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'order',
    title: { ar: 'الترتيب والعمليات', fr: 'Ordre et opérations' },
    summary: {
      ar: 'مقارنة عددين حقيقيين، الترتيب والجمع والضرب والمقلوب والمربع والجذر، والتأطير.',
      fr: 'Comparer deux réels, ordre et addition, multiplication, inverse, carré, racine carrée, encadrements.',
    },
    objectives: [
      { ar: 'مقارنة عددين حقيقيين.', fr: 'Comparer deux nombres réels.' },
      { ar: 'استعمال خاصيات الترتيب والعمليات.', fr: 'Utiliser les propriétés de l’ordre et des opérations.' },
      { ar: 'تأطير مجموع وفرق وجداء ومقلوب.', fr: 'Encadrer une somme, une différence, un produit, un inverse.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['ordre', 'inégalité', 'comparer', 'encadrement', 'inverse', 'carré', 'ترتيب', 'متفاوتة', 'تأطير', 'مقلوب'],
    sections: [
      {
        id: 'comparaison',
        title: { ar: 'المقارنة', fr: 'Comparaison' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لمقارنة $a$ و $b$ ندرس إشارة $a-b$: إذا كان $a-b<0$ فإن $a<b$، وإذا كان $a-b>0$ فإن $a>b$.',
              fr: 'Pour comparer $a$ et $b$, on étudie le signe de $a-b$ : si $a-b<0$ alors $a<b$ ; si $a-b>0$ alors $a>b$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن $\\dfrac35$ و $\\dfrac67$.', fr: 'Comparer $\\dfrac35$ et $\\dfrac67$.' },
            steps: [{ ar: '$\\dfrac35-\\dfrac67=\\dfrac{21-30}{35}=-\\dfrac9{35}<0$ إذن $\\dfrac35<\\dfrac67$.', fr: '$\\dfrac35-\\dfrac67=\\dfrac{21-30}{35}=-\\dfrac9{35}<0$ donc $\\dfrac35<\\dfrac67$.' }],
          },
        ],
      },
      {
        id: 'operations',
        title: { ar: 'الترتيب والعمليات', fr: 'Ordre et opérations' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كان $a<b$ فإن $a+c<b+c$ و $a-c<b-c$.\n\n• إذا كان $a<b$ و $c<d$ فإن $a+c<b+d$.\n\n• إذا كان $a<b$ و $c>0$ فإن $ac<bc$؛ وإذا كان $c<0$ فإن $ac>bc$ (يتغير الاتجاه).',
              fr: '• Si $a<b$ alors $a+c<b+c$ et $a-c<b-c$.\n\n• Si $a<b$ et $c<d$ alors $a+c<b+d$.\n\n• Si $a<b$ et $c>0$ alors $ac<bc$ ; si $c<0$ alors $ac>bc$ (le sens change).',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المقلوب والمربع والجذر', fr: 'Inverse, carré, racine carrée' },
            content: {
              ar: '• إذا كان $a$ و $b$ لهما نفس الإشارة و $a<b$ فإن $\\dfrac1a>\\dfrac1b$.\n\n• إذا كان $a$ و $b$ موجبين: $a<b\\iff a^2<b^2\\iff\\sqrt a<\\sqrt b$.',
              fr: '• Si $a$ et $b$ sont de même signe et $a<b$, alors $\\dfrac1a>\\dfrac1b$.\n\n• Si $a$ et $b$ sont positifs : $a<b\\iff a^2<b^2\\iff\\sqrt a<\\sqrt b$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن $3\\sqrt5$ و $\\sqrt{41}$.', fr: 'Comparer $3\\sqrt5$ et $\\sqrt{41}$.' },
            steps: [{ ar: '$(3\\sqrt5)^2=45>41=(\\sqrt{41})^2$، والعددان موجبان، إذن $3\\sqrt5>\\sqrt{41}$.', fr: '$(3\\sqrt5)^2=45>41=(\\sqrt{41})^2$, et les deux nombres sont positifs, donc $3\\sqrt5>\\sqrt{41}$.' }],
          },
        ],
      },
      {
        id: 'encadrement',
        title: { ar: 'التأطير', fr: 'Encadrement' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'إذا كان $a\\le x\\le b$ و $c\\le y\\le d$:\n\n• $a+c\\le x+y\\le b+d$\n\n• $-b\\le -x\\le -a$ ومنه $a-d\\le x-y\\le b-c$\n\n• إذا كانت جميع الأعداد موجبة: $ac\\le xy\\le bd$ و $\\dfrac1b\\le\\dfrac1x\\le\\dfrac1a$ (مع $a>0$).',
              fr: 'Si $a\\le x\\le b$ et $c\\le y\\le d$ :\n\n• $a+c\\le x+y\\le b+d$\n\n• $-b\\le -x\\le -a$, d’où $a-d\\le x-y\\le b-c$\n\n• si tous les nombres sont positifs : $ac\\le xy\\le bd$ et $\\dfrac1b\\le\\dfrac1x\\le\\dfrac1a$ (avec $a>0$).',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$2\\le x\\le7$ و $-1\\le y\\le5$. أطّر $x-y$.', fr: '$2\\le x\\le7$ et $-1\\le y\\le5$. Encadrer $x-y$.' },
            steps: [
              { ar: '$-5\\le -y\\le1$.', fr: '$-5\\le -y\\le1$.' },
              { ar: 'بالجمع: $2-5\\le x-y\\le7+1$ أي $-3\\le x-y\\le8$.', fr: 'En ajoutant : $2-5\\le x-y\\le7+1$, soit $-3\\le x-y\\le8$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'الضرب في عدد سالب يغير اتجاه المتفاوتة.', fr: 'Multiplier par un négatif change le sens de l’inégalité.' },
      { ar: 'لا نطرح التأطيرات طرفاً بطرف: نجمع مع تأطير المقابل.', fr: 'On ne soustrait jamais des encadrements : on ajoute l’encadrement de l’opposé.' },
    ],
  },
  exercises: [
    {
      id: '3ac-ord-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'الضرب في عدد سالب', fr: 'Multiplier par un négatif' },
      statement: { ar: 'نعلم أن $x<3$. أتمم: $-4x\\;\\dots\\;-12$.', fr: 'On sait que $x<3$. Compléter : $-4x\\;\\dots\\;-12$.' },
      question: { type: 'mcq', options: [{ ar: '$>$', fr: '$>$' }, { ar: '$<$', fr: '$<$' }, { ar: '$=$', fr: '$=$' }], correct: 0 },
      hints: [{ ar: '$-4<0$.', fr: '$-4<0$.' }],
      solution: [{ ar: 'نضرب في $-4<0$ فيتغير الاتجاه: $-4x>-12$.', fr: 'On multiplie par $-4<0$, le sens change : $-4x>-12$.' }],
    },
    {
      id: '3ac-ord-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تأطير فرق', fr: 'Encadrer une différence' },
      statement: { ar: '$2\\le x\\le5$ و $1\\le y\\le4$. ما تأطير $x-y$؟', fr: '$2\\le x\\le5$ et $1\\le y\\le4$. Quel est l’encadrement de $x-y$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-2\\le x-y\\le4$', fr: '$-2\\le x-y\\le4$' }, { ar: '$1\\le x-y\\le1$', fr: '$1\\le x-y\\le1$' }, { ar: '$1\\le x-y\\le4$', fr: '$1\\le x-y\\le4$' }, { ar: '$-2\\le x-y\\le1$', fr: '$-2\\le x-y\\le1$' }],
        correct: 0,
      },
      hints: [{ ar: '$-4\\le -y\\le -1$.', fr: '$-4\\le -y\\le -1$.' }],
      solution: [{ ar: '$2-4\\le x-y\\le5-1$ أي $-2\\le x-y\\le4$.', fr: '$2-4\\le x-y\\le5-1$, soit $-2\\le x-y\\le4$.' }],
    },
    {
      id: '3ac-ord-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تأطير جداء', fr: 'Encadrer un produit' },
      statement: { ar: '$2\\le x\\le5$ و $1\\le y\\le4$. ما هو الحد الأعلى في تأطير $xy$؟', fr: '$2\\le x\\le5$ et $1\\le y\\le4$. Quelle est la borne supérieure de l’encadrement de $xy$ ?' },
      question: { type: 'numeric', answer: 20 },
      hints: [{ ar: 'كل الأعداد موجبة.', fr: 'Tous les nombres sont positifs.' }],
      solution: [{ ar: '$2\\times1\\le xy\\le5\\times4$ أي $2\\le xy\\le20$.', fr: '$2\\times1\\le xy\\le5\\times4$, soit $2\\le xy\\le20$.' }],
    },
    {
      id: '3ac-ord-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تأطير المقلوب', fr: 'Encadrer l’inverse' },
      statement: { ar: '$5\\le x\\le9$. ما تأطير $\\dfrac1x$؟', fr: '$5\\le x\\le9$. Quel est l’encadrement de $\\dfrac1x$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac19\\le\\dfrac1x\\le\\dfrac15$', fr: '$\\dfrac19\\le\\dfrac1x\\le\\dfrac15$' }, { ar: '$\\dfrac15\\le\\dfrac1x\\le\\dfrac19$', fr: '$\\dfrac15\\le\\dfrac1x\\le\\dfrac19$' }, { ar: '$-9\\le\\dfrac1x\\le-5$', fr: '$-9\\le\\dfrac1x\\le-5$' }],
        correct: 0,
      },
      hints: [{ ar: 'الأعداد موجبة: المقلوب يقلب الترتيب.', fr: 'Nombres positifs : l’inverse renverse l’ordre.' }],
      solution: [{ ar: '$\\dfrac19\\le\\dfrac1x\\le\\dfrac15$.', fr: '$\\dfrac19\\le\\dfrac1x\\le\\dfrac15$.' }],
    },
  ],
};
