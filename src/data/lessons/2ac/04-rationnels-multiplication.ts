import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-rationnels-multiplication';

export const rationnelsMultiplication: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'rational-mul',
    title: { ar: 'ضرب وقسمة الأعداد الجذرية', fr: 'Multiplication et division des nombres rationnels' },
    summary: {
      ar: 'جداء عددين أو ثلاثة أعداد جذرية، مقلوب عدد جذري غير منعدم، وخارج عددين جذريين.',
      fr: 'Produit de deux ou trois rationnels, inverse d’un rationnel non nul et quotient de deux rationnels.',
    },
    objectives: [
      { ar: 'حساب جداء عددين أو ثلاثة أعداد جذرية.', fr: 'Calculer le produit de deux ou trois rationnels.' },
      { ar: 'معرفة مقلوب عدد جذري.', fr: 'Connaître l’inverse d’un rationnel.' },
      { ar: 'حساب خارج عددين جذريين.', fr: 'Calculer le quotient de deux rationnels.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['produit', 'quotient', 'inverse', 'multiplication', 'division', 'rationnel', 'جداء', 'خارج', 'مقلوب', 'ضرب', 'قسمة'],
    sections: [
      {
        id: 'produit',
        title: { ar: 'جداء عددين جذريين', fr: 'Produit de deux rationnels' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'نضرب البسطين فيما بينهما والمقامين فيما بينهما: $\\dfrac ab\\times\\dfrac cd=\\dfrac{a\\times c}{b\\times d}$.\n\nحالات خاصة: $a\\times\\dfrac bc=\\dfrac{a\\times b}{c}$ ؛ $1\\times\\dfrac bc=\\dfrac bc$ ؛ $0\\times\\dfrac bc=0$.',
              fr: 'On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\\dfrac ab\\times\\dfrac cd=\\dfrac{a\\times c}{b\\times d}$.\n\nCas particuliers : $a\\times\\dfrac bc=\\dfrac{a\\times b}{c}$ ; $1\\times\\dfrac bc=\\dfrac bc$ ; $0\\times\\dfrac bc=0$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$\\dfrac{12}5\\times\\dfrac32=\\dfrac{36}{10}=\\dfrac{18}5$.', fr: '$\\dfrac{12}5\\times\\dfrac32=\\dfrac{36}{10}=\\dfrac{18}5$.' },
              { ar: '$\\dfrac7{24}\\times\\dfrac{-1}2=\\dfrac{-7}{48}$ ؛ $\\dfrac{15}4\\times(-3)=\\dfrac{-45}4$.', fr: '$\\dfrac7{24}\\times\\dfrac{-1}2=\\dfrac{-7}{48}$ ; $\\dfrac{15}4\\times(-3)=\\dfrac{-45}4$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'جداء ثلاثة أعداد', fr: 'Produit de trois nombres' },
            content: {
              ar: '$a\\times b\\times c=(a\\times b)\\times c=a\\times(b\\times c)$، و $\\dfrac ab\\times\\dfrac cd\\times\\dfrac xy=\\dfrac{a\\times c\\times x}{b\\times d\\times y}$.',
              fr: '$a\\times b\\times c=(a\\times b)\\times c=a\\times(b\\times c)$, et $\\dfrac ab\\times\\dfrac cd\\times\\dfrac xy=\\dfrac{a\\times c\\times x}{b\\times d\\times y}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$2\\times\\dfrac32\\times\\dfrac{-5}7=3\\times\\dfrac{-5}7=-\\dfrac{15}7$.', fr: '$2\\times\\dfrac32\\times\\dfrac{-5}7=3\\times\\dfrac{-5}7=-\\dfrac{15}7$.' },
              { ar: '$\\dfrac{-5}3\\times\\dfrac9{10}\\times\\dfrac6{-4}=\\dfrac{-270}{-120}=\\dfrac94$.', fr: '$\\dfrac{-5}3\\times\\dfrac9{10}\\times\\dfrac6{-4}=\\dfrac{-270}{-120}=\\dfrac94$.' },
            ],
          },
        ],
      },
      {
        id: 'quotient',
        title: { ar: 'المقلوب والخارج', fr: 'Inverse et quotient' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'يكون عددان **مقلوبين** إذا كان جداؤهما يساوي $1$. مقلوب $\\dfrac ab$ (غير المنعدم) هو $\\dfrac ba$، ونكتب $\\left(\\dfrac ab\\right)^{-1}=\\dfrac ba$. لكل $x\\neq0$: $x\\times\\dfrac1x=1$.',
              fr: 'Deux nombres sont **inverses** si leur produit vaut $1$. L’inverse de $\\dfrac ab$ (non nul) est $\\dfrac ba$ ; on note $\\left(\\dfrac ab\\right)^{-1}=\\dfrac ba$. Pour tout $x\\neq0$ : $x\\times\\dfrac1x=1$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'مقلوبات.', fr: 'Inverses.' },
            steps: [
              { ar: 'مقلوب $\\dfrac{-23}2$ هو $\\dfrac2{-23}$ ؛ مقلوب $\\dfrac18$ هو $8$.', fr: 'L’inverse de $\\dfrac{-23}2$ est $\\dfrac2{-23}$ ; l’inverse de $\\dfrac18$ est $8$.' },
            ],
          },
          {
            kind: 'rule',
            content: {
              ar: 'خارج $\\dfrac ab$ على $\\dfrac cd$ (مع $c\\neq0$) هو جداء $\\dfrac ab$ في مقلوب $\\dfrac cd$: $\\dfrac ab\\div\\dfrac cd=\\dfrac ab\\times\\dfrac dc$.',
              fr: 'Le quotient de $\\dfrac ab$ par $\\dfrac cd$ ($c\\neq0$) est le produit de $\\dfrac ab$ par l’inverse de $\\dfrac cd$ : $\\dfrac ab\\div\\dfrac cd=\\dfrac ab\\times\\dfrac dc$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$\\dfrac18\\div\\dfrac43=\\dfrac18\\times\\dfrac34=\\dfrac3{32}$.', fr: '$\\dfrac18\\div\\dfrac43=\\dfrac18\\times\\dfrac34=\\dfrac3{32}$.' },
              { ar: '$\\dfrac{-\\frac{14}3}{\\frac23}=-\\dfrac{14}3\\times\\dfrac32=-7$.', fr: '$\\dfrac{-\\frac{14}3}{\\frac23}=-\\dfrac{14}3\\times\\dfrac32=-7$.' },
              { ar: '$-32\\div\\dfrac{18}{12}=-32\\times\\dfrac{12}{18}=-32\\times\\dfrac23=-\\dfrac{64}3$.', fr: '$-32\\div\\dfrac{18}{12}=-32\\times\\dfrac{12}{18}=-32\\times\\dfrac23=-\\dfrac{64}3$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\dfrac ab\\times\\dfrac cd=\\dfrac{ac}{bd}$.', fr: '$\\dfrac ab\\times\\dfrac cd=\\dfrac{ac}{bd}$.' },
      { ar: 'مقلوب $\\dfrac ab$ هو $\\dfrac ba$.', fr: 'L’inverse de $\\dfrac ab$ est $\\dfrac ba$.' },
      { ar: 'القسمة على عدد = الضرب في مقلوبه.', fr: 'Diviser par un nombre = multiplier par son inverse.' },
    ],
  },
  exercises: [
    {
      id: '2ac-rmul-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'جداء واختزال', fr: 'Produit et simplification' },
      statement: { ar: 'احسب $\\dfrac76\\times\\dfrac3{14}$ (الكتابة العشرية).', fr: 'Calculer $\\dfrac76\\times\\dfrac3{14}$ (écriture décimale).' },
      question: { type: 'numeric', answer: 0.25, tolerance: 1e-9 },
      hints: [{ ar: 'اختزل قبل الضرب: $\\dfrac7{14}=\\dfrac12$.', fr: 'Simplifie avant : $\\dfrac7{14}=\\dfrac12$.' }],
      solution: [{ ar: '$\\dfrac{7\\times3}{6\\times14}=\\dfrac{21}{84}=\\dfrac14=0{,}25$.', fr: '$\\dfrac{7\\times3}{6\\times14}=\\dfrac{21}{84}=\\dfrac14=0{,}25$.' }],
    },
    {
      id: '2ac-rmul-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'جداء بعدد سالب', fr: 'Produit avec un négatif' },
      statement: { ar: 'احسب $\\dfrac8{28}\\times\\dfrac{-14}2$.', fr: 'Calculer $\\dfrac8{28}\\times\\dfrac{-14}2$.' },
      question: { type: 'numeric', answer: -2 },
      hints: [{ ar: '$\\dfrac{-14}2=-7$.', fr: '$\\dfrac{-14}2=-7$.' }],
      solution: [{ ar: '$\\dfrac8{28}\\times(-7)=-\\dfrac{56}{28}=-2$.', fr: '$\\dfrac8{28}\\times(-7)=-\\dfrac{56}{28}=-2$.' }],
    },
    {
      id: '2ac-rmul-03',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'المقلوب', fr: 'L’inverse' },
      statement: { ar: 'ما هو مقلوب $-\\dfrac73$؟', fr: 'Quel est l’inverse de $-\\dfrac73$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-\\dfrac37$', fr: '$-\\dfrac37$' }, { ar: '$\\dfrac37$', fr: '$\\dfrac37$' }, { ar: '$\\dfrac73$', fr: '$\\dfrac73$' }, { ar: '$-\\dfrac73$', fr: '$-\\dfrac73$' }],
        correct: 0,
      },
      hints: [{ ar: 'جداؤهما يساوي $1$ (إذن نفس الإشارة).', fr: 'Leur produit vaut $1$ (donc même signe).' }],
      solution: [{ ar: '$-\\dfrac73\\times\\left(-\\dfrac37\\right)=1$.', fr: '$-\\dfrac73\\times\\left(-\\dfrac37\\right)=1$.' }],
    },
    {
      id: '2ac-rmul-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'خارج', fr: 'Quotient' },
      statement: { ar: 'احسب $\\dfrac{\\frac{21}5}{\\frac{-3}5}$.', fr: 'Calculer $\\dfrac{\\frac{21}5}{\\frac{-3}5}$.' },
      question: { type: 'numeric', answer: -7 },
      hints: [{ ar: 'اضرب في مقلوب المقام.', fr: 'Multiplie par l’inverse du dénominateur.' }],
      solution: [{ ar: '$\\dfrac{21}5\\times\\dfrac5{-3}=\\dfrac{21}{-3}=-7$.', fr: '$\\dfrac{21}5\\times\\dfrac5{-3}=\\dfrac{21}{-3}=-7$.' }],
    },
    {
      id: '2ac-rmul-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'جداء ثلاثة أعداد', fr: 'Produit de trois nombres' },
      statement: { ar: 'احسب $G=\\dfrac83\\times\\dfrac9{15}\\times\\dfrac34$ (الكتابة العشرية).', fr: 'Calculer $G=\\dfrac83\\times\\dfrac9{15}\\times\\dfrac34$ (écriture décimale).' },
      question: { type: 'numeric', answer: 1.2, tolerance: 1e-9 },
      hints: [{ ar: '$\\dfrac83\\times\\dfrac34=2$.', fr: '$\\dfrac83\\times\\dfrac34=2$.' }],
      solution: [{ ar: '$G=2\\times\\dfrac9{15}=\\dfrac{18}{15}=\\dfrac65=1{,}2$.', fr: '$G=2\\times\\dfrac9{15}=\\dfrac{18}{15}=\\dfrac65=1{,}2$.' }],
    },
  ],
};
