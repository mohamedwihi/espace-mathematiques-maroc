import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-ordre-operations';

export const ordreOperations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'order',
    title: { ar: 'الترتيب والعمليات', fr: 'Ordre et opérations' },
    summary: {
      ar: 'المتفاوتات، مقارنة عددين جذريين بإشارة فرقهما، الترتيب والجمع، الترتيب والضرب في عدد موجب، والتأطير.',
      fr: 'Inégalités, comparaison de deux rationnels par le signe de leur différence, ordre et addition, ordre et multiplication par un positif, encadrement.',
    },
    objectives: [
      { ar: 'مقارنة عددين جذريين.', fr: 'Comparer deux nombres rationnels.' },
      { ar: 'استعمال الترتيب والجمع.', fr: 'Utiliser les règles liant ordre et addition.' },
      { ar: 'استعمال الترتيب والضرب في عدد موجب.', fr: 'Utiliser les règles liant ordre et multiplication par un positif.' },
      { ar: 'تأطير عدد.', fr: 'Encadrer un nombre.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['ordre', 'inégalité', 'comparer', 'encadrement', 'valeur approchée', 'ترتيب', 'متفاوتة', 'مقارنة', 'تأطير', 'قيمة مقربة'],
    sections: [
      {
        id: 'vocabulaire',
        title: { ar: 'مصطلحات', fr: 'Vocabulaire' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'كل كتابة على الشكل $a<b$ أو $a>b$ أو $a\\le b$ أو $a\\ge b$ تسمى **متفاوتة**.\n\n• $a<b$: $a$ أصغر قطعاً من $b$.\n\n• $a\\le b$: $a$ أصغر من أو يساوي $b$.',
              fr: 'Toute écriture $a<b$, $a>b$, $a\\le b$ ou $a\\ge b$ est une **inégalité**.\n\n• $a<b$ : $a$ est strictement inférieur à $b$.\n\n• $a\\le b$ : $a$ est inférieur ou égal à $b$.',
            },
          },
        ],
      },
      {
        id: 'comparaison',
        title: { ar: 'مقارنة عددين جذريين', fr: 'Comparaison de deux rationnels' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لمقارنة $a$ و $b$ ندرس إشارة الفرق $a-b$: إذا كان $a-b\\ge0$ فإن $a\\ge b$، وإذا كان $a-b\\le0$ فإن $a\\le b$.',
              fr: 'Pour comparer $a$ et $b$, on étudie le signe de $a-b$ : si $a-b\\ge0$ alors $a\\ge b$ ; si $a-b\\le0$ alors $a\\le b$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن.', fr: 'Comparer.' },
            steps: [
              { ar: '$\\dfrac12-\\dfrac35=\\dfrac{5-6}{10}=-\\dfrac1{10}<0$ إذن $\\dfrac12<\\dfrac35$.', fr: '$\\dfrac12-\\dfrac35=\\dfrac{5-6}{10}=-\\dfrac1{10}<0$ donc $\\dfrac12<\\dfrac35$.' },
              { ar: '$-\\dfrac68-\\left(-\\dfrac56\\right)=\\dfrac{-36+40}{48}=\\dfrac4{48}>0$ إذن $-\\dfrac68>-\\dfrac56$.', fr: '$-\\dfrac68-\\left(-\\dfrac56\\right)=\\dfrac{-36+40}{48}=\\dfrac4{48}>0$ donc $-\\dfrac68>-\\dfrac56$.' },
            ],
          },
        ],
      },
      {
        id: 'operations',
        title: { ar: 'الترتيب والعمليات', fr: 'Ordre et opérations' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'الترتيب والجمع', fr: 'Ordre et addition' },
            content: {
              ar: '• إذا كان $a\\le b$ فإن $a+k\\le b+k$ (لكل عدد $k$).\n\n• إذا كان $a\\le b$ و $c\\le d$ فإن $a+c\\le b+d$.',
              fr: '• Si $a\\le b$ alors $a+k\\le b+k$ (pour tout nombre $k$).\n\n• Si $a\\le b$ et $c\\le d$ alors $a+c\\le b+d$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'إذا كان $x\\le3$ و $5\\le y$، بيّن أن $x-y\\le-2$.', fr: 'Si $x\\le3$ et $5\\le y$, montrer que $x-y\\le-2$.' },
            steps: [
              { ar: 'بالجمع طرفاً بطرف: $x+5\\le3+y$.', fr: 'En ajoutant membre à membre : $x+5\\le3+y$.' },
              { ar: 'نضيف $-5-y$ للطرفين: $x-y\\le-2$.', fr: 'On ajoute $-5-y$ aux deux membres : $x-y\\le-2$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'الترتيب والضرب', fr: 'Ordre et multiplication' },
            content: {
              ar: 'إذا كان $a\\le b$ و $c>0$ فإن $ac\\le bc$ (الضرب في عدد موجب قطعاً لا يغير اتجاه المتفاوتة).',
              fr: 'Si $a\\le b$ et $c>0$ alors $ac\\le bc$ (multiplier par un nombre strictement positif ne change pas le sens de l’inégalité).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'أمثلة.', fr: 'Exemples.' },
            steps: [
              { ar: 'إذا كان $a\\ge\\dfrac32$ فإن $2a\\ge3$.', fr: 'Si $a\\ge\\dfrac32$ alors $2a\\ge3$.' },
              { ar: 'إذا كان $b\\ge-2$ فإن $3b\\ge-6$.', fr: 'Si $b\\ge-2$ alors $3b\\ge-6$.' },
            ],
          },
        ],
      },
      {
        id: 'encadrement',
        title: { ar: 'التأطير', fr: 'Encadrement' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'كل كتابة $a\\le c\\le b$ أو $a<c<b$ تسمى **تأطيراً** للعدد $c$. نقرأ $a\\le c\\le b$: «$c$ محصور بين $a$ و $b$».',
              fr: 'Chacune des écritures $a\\le c\\le b$ ou $a<c<b$ est un **encadrement** de $c$. $a\\le c\\le b$ se lit « $c$ est compris entre $a$ et $b$ ».',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'تأطير وقيم مقربة.', fr: 'Encadrement et valeurs approchées.' },
            steps: [
              { ar: '$1<\\dfrac32<2$ و $-2<-\\dfrac{13}{11}<-1$.', fr: '$1<\\dfrac32<2$ et $-2<-\\dfrac{13}{11}<-1$.' },
              { ar: '$\\dfrac{22}7\\approx3{,}1428$: القيمة المقربة إلى $0{,}01$ بالنقصان $3{,}14$ وبالزيادة $3{,}15$، ومنه $3{,}14<\\dfrac{22}7<3{,}15$.', fr: '$\\dfrac{22}7\\approx3{,}1428$ : la valeur approchée à $0{,}01$ par défaut est $3{,}14$, par excès $3{,}15$, d’où $3{,}14<\\dfrac{22}7<3{,}15$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'لمقارنة عددين ندرس إشارة فرقهما.', fr: 'Pour comparer deux nombres, on étudie le signe de leur différence.' },
      { ar: 'إضافة نفس العدد للطرفين لا تغير اتجاه المتفاوتة.', fr: 'Ajouter un même nombre aux deux membres conserve l’ordre.' },
      { ar: 'الضرب في عدد موجب قطعاً لا يغير اتجاه المتفاوتة.', fr: 'Multiplier par un nombre strictement positif conserve l’ordre.' },
    ],
  },
  exercises: [
    {
      id: '2ac-ord-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'مقارنة', fr: 'Comparaison' },
      statement: { ar: 'قارن $-\\dfrac78$ و $-\\dfrac85$.', fr: 'Comparer $-\\dfrac78$ et $-\\dfrac85$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-\\dfrac78>-\\dfrac85$', fr: '$-\\dfrac78>-\\dfrac85$' }, { ar: '$-\\dfrac78<-\\dfrac85$', fr: '$-\\dfrac78<-\\dfrac85$' }, { ar: '$-\\dfrac78=-\\dfrac85$', fr: '$-\\dfrac78=-\\dfrac85$' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب $-\\dfrac78-\\left(-\\dfrac85\\right)$.', fr: 'Calcule $-\\dfrac78-\\left(-\\dfrac85\\right)$.' }],
      solution: [{ ar: '$-\\dfrac{35}{40}+\\dfrac{64}{40}=\\dfrac{29}{40}>0$ إذن $-\\dfrac78>-\\dfrac85$.', fr: '$-\\dfrac{35}{40}+\\dfrac{64}{40}=\\dfrac{29}{40}>0$ donc $-\\dfrac78>-\\dfrac85$.' }],
    },
    {
      id: '2ac-ord-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'عدد وكسر', fr: 'Un entier et une fraction' },
      statement: { ar: 'قارن $7$ و $\\dfrac{15}2$.', fr: 'Comparer $7$ et $\\dfrac{15}2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$7<\\dfrac{15}2$', fr: '$7<\\dfrac{15}2$' }, { ar: '$7>\\dfrac{15}2$', fr: '$7>\\dfrac{15}2$' }, { ar: '$7=\\dfrac{15}2$', fr: '$7=\\dfrac{15}2$' }],
        correct: 0,
      },
      hints: [{ ar: '$7=\\dfrac{14}2$.', fr: '$7=\\dfrac{14}2$.' }],
      solution: [{ ar: '$7-\\dfrac{15}2=-\\dfrac12<0$ إذن $7<\\dfrac{15}2$.', fr: '$7-\\dfrac{15}2=-\\dfrac12<0$ donc $7<\\dfrac{15}2$.' }],
    },
    {
      id: '2ac-ord-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'متفاوتة', fr: 'Inégalité' },
      statement: { ar: 'نعلم أن $x\\ge3$. أتمم: $3x+1\\ge\\dots$', fr: 'On sait que $x\\ge3$. Compléter : $3x+1\\ge\\dots$' },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: 'اضرب في $3>0$ ثم أضف $1$.', fr: 'Multiplie par $3>0$ puis ajoute $1$.' }],
      solution: [{ ar: '$3x\\ge9$ ومنه $3x+1\\ge10$.', fr: '$3x\\ge9$ donc $3x+1\\ge10$.' }],
    },
    {
      id: '2ac-ord-04',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'استنتاج متفاوتة', fr: 'Déduire une inégalité' },
      statement: { ar: 'نعلم أن $a-2\\le\\dfrac b2$. أتمم: $2a-b\\le\\dots$', fr: 'On sait que $a-2\\le\\dfrac b2$. Compléter : $2a-b\\le\\dots$' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: 'اضرب الطرفين في $2$.', fr: 'Multiplie les deux membres par $2$.' }],
      solution: [{ ar: '$2a-4\\le b$ ومنه $2a-b\\le4$.', fr: '$2a-4\\le b$ donc $2a-b\\le4$.' }],
    },
    {
      id: '2ac-ord-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تأطير إلى 0,01', fr: 'Encadrement à 0,01' },
      statement: { ar: 'ما تأطير $\\dfrac{27}{19}$ إلى $0{,}01$؟', fr: 'Quel est l’encadrement de $\\dfrac{27}{19}$ à $0{,}01$ près ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$1{,}42<\\dfrac{27}{19}<1{,}43$', fr: '$1{,}42<\\dfrac{27}{19}<1{,}43$' }, { ar: '$1{,}41<\\dfrac{27}{19}<1{,}42$', fr: '$1{,}41<\\dfrac{27}{19}<1{,}42$' }, { ar: '$1{,}4<\\dfrac{27}{19}<1{,}5$', fr: '$1{,}4<\\dfrac{27}{19}<1{,}5$' }],
        correct: 0,
      },
      hints: [{ ar: '$27\\div19\\approx1{,}421$.', fr: '$27\\div19\\approx1{,}421$.' }],
      solution: [{ ar: '$\\dfrac{27}{19}\\approx1{,}4210$ إذن $1{,}42<\\dfrac{27}{19}<1{,}43$.', fr: '$\\dfrac{27}{19}\\approx1{,}4210$ donc $1{,}42<\\dfrac{27}{19}<1{,}43$.' }],
    },
  ],
};
