import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-puissances';

export const puissances: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'powers',
    title: { ar: 'القوى', fr: 'Puissances' },
    summary: {
      ar: 'قوة عدد جذري بأس موجب أو سالب، إشارة قوة، العمليات على القوى، قوى العدد 10 والكتابة العلمية.',
      fr: 'Puissance d’un rationnel d’exposant positif ou négatif, signe d’une puissance, opérations, puissances de 10 et écriture scientifique.',
    },
    objectives: [
      { ar: 'معرفة واستعمال قوة عدد جذري بأس موجب أو سالب.', fr: 'Connaître et utiliser la puissance d’exposant positif ou négatif.' },
      { ar: 'تحديد إشارة قوة.', fr: 'Déterminer le signe d’une puissance.' },
      { ar: 'استعمال خاصيات القوى.', fr: 'Utiliser les propriétés des puissances.' },
      { ar: 'كتابة عدد كتابة علمية.', fr: 'Écrire un nombre en notation scientifique.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['puissance', 'exposant', 'base', 'écriture scientifique', 'ordre de grandeur', 'puissance de 10', 'قوة', 'أس', 'أساس', 'الكتابة العلمية', 'رتبة القدر'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'قوة عدد جذري', fr: 'Puissance d’un rationnel' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'أس موجب', fr: 'Exposant positif' },
            content: {
              ar: 'ليكن $a$ عدداً جذرياً و $n$ عدداً صحيحاً طبيعياً غير منعدم: $a^n=\\underbrace{a\\times a\\times\\dots\\times a}_{n\\text{ عوامل}}$. نسمي $a$ **الأساس** و $n$ **الأس**.\n\nإذا كان $a\\neq0$: $a^1=a$ و $a^0=1$. الكتابة $0^0$ غير معرفة.',
              fr: 'Soit $a$ un rationnel et $n$ un entier naturel non nul : $a^n=\\underbrace{a\\times a\\times\\dots\\times a}_{n\\text{ facteurs}}$. $a$ est la **base** et $n$ l’**exposant**.\n\nSi $a\\neq0$ : $a^1=a$ et $a^0=1$. L’écriture $0^0$ n’est pas définie.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'أس سالب', fr: 'Exposant négatif' },
            content: {
              ar: 'لكل عدد جذري غير منعدم $a$ ولكل $n$ صحيح طبيعي: $a^{-n}=\\dfrac1{a^n}$ و $\\left(\\dfrac bc\\right)^{-n}=\\left(\\dfrac cb\\right)^n$.',
              fr: 'Pour tout rationnel non nul $a$ et tout entier naturel $n$ : $a^{-n}=\\dfrac1{a^n}$ et $\\left(\\dfrac bc\\right)^{-n}=\\left(\\dfrac cb\\right)^n$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$(-6)^3=-216$ ؛ $(-5)^4=625$ ؛ $\\left(\\dfrac37\\right)^5=\\dfrac{243}{16807}$.', fr: '$(-6)^3=-216$ ; $(-5)^4=625$ ; $\\left(\\dfrac37\\right)^5=\\dfrac{243}{16807}$.' },
              { ar: '$(-3)^{-2}=\\dfrac1{(-3)^2}=\\dfrac19$ ؛ $5^{-3}=\\dfrac1{125}$.', fr: '$(-3)^{-2}=\\dfrac1{(-3)^2}=\\dfrac19$ ; $5^{-3}=\\dfrac1{125}$.' },
              { ar: '$\\left(-\\dfrac53\\right)^{-4}=\\left(-\\dfrac35\\right)^4=\\dfrac{81}{625}$.', fr: '$\\left(-\\dfrac53\\right)^{-4}=\\left(-\\dfrac35\\right)^4=\\dfrac{81}{625}$.' },
            ],
          },
        ],
      },
      {
        id: 'signe',
        title: { ar: 'إشارة قوة', fr: 'Signe d’une puissance' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '• إذا كان الأساس موجباً فالقوة موجبة.\n\n• إذا كان الأساس سالباً: القوة موجبة إذا كان الأس زوجياً، وسالبة إذا كان الأس فردياً.',
              fr: '• Si la base est positive, la puissance est positive.\n\n• Si la base est négative : la puissance est positive si l’exposant est pair, négative s’il est impair.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد الإشارة.', fr: 'Déterminer le signe.' },
            steps: [
              { ar: '$9^{13}$ موجب لأن الأساس موجب.', fr: '$9^{13}$ est positif car la base est positive.' },
              { ar: '$(-15)^{12}$ موجب لأن الأس $12$ زوجي.', fr: '$(-15)^{12}$ est positif car l’exposant $12$ est pair.' },
              { ar: '$\\left(-\\dfrac45\\right)^9$ سالب لأن الأساس سالب والأس $9$ فردي.', fr: '$\\left(-\\dfrac45\\right)^9$ est négatif : base négative et exposant $9$ impair.' },
            ],
          },
        ],
      },
      {
        id: 'operations',
        title: { ar: 'العمليات على القوى', fr: 'Opérations sur les puissances' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل أعداد جذرية غير منعدمة $a$ و $b$ ولكل أعداد صحيحة نسبية $n$ و $m$:\n\n• $a^n\\times a^m=a^{n+m}$\n\n• $\\dfrac{a^m}{a^n}=a^{m-n}$\n\n• $a^n\\times b^n=(a\\times b)^n$\n\n• $\\dfrac{a^n}{b^n}=\\left(\\dfrac ab\\right)^n$\n\n• $(a^n)^m=a^{n\\times m}$',
              fr: 'Pour tous rationnels non nuls $a$, $b$ et tous entiers relatifs $n$, $m$ :\n\n• $a^n\\times a^m=a^{n+m}$\n\n• $\\dfrac{a^m}{a^n}=a^{m-n}$\n\n• $a^n\\times b^n=(a\\times b)^n$\n\n• $\\dfrac{a^n}{b^n}=\\left(\\dfrac ab\\right)^n$\n\n• $(a^n)^m=a^{n\\times m}$',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اكتب على شكل قوة.', fr: 'Écrire sous forme d’une puissance.' },
            steps: [
              { ar: '$\\left(\\dfrac25\\right)^3\\times\\left(\\dfrac25\\right)^{-5}=\\left(\\dfrac25\\right)^{-2}=\\left(\\dfrac52\\right)^2$.', fr: '$\\left(\\dfrac25\\right)^3\\times\\left(\\dfrac25\\right)^{-5}=\\left(\\dfrac25\\right)^{-2}=\\left(\\dfrac52\\right)^2$.' },
              { ar: '$\\left(-\\dfrac35\\right)^4\\times\\left(-\\dfrac35\\right)^3=\\left(-\\dfrac35\\right)^7$.', fr: '$\\left(-\\dfrac35\\right)^4\\times\\left(-\\dfrac35\\right)^3=\\left(-\\dfrac35\\right)^7$.' },
              { ar: '$\\dfrac{25^{26}}{25^{27}}=25^{-1}=\\dfrac1{25}$ ؛ $4^{-3}\\times5^{-3}=20^{-3}$ ؛ $(25^4)^{-3}=25^{-12}$.', fr: '$\\dfrac{25^{26}}{25^{27}}=25^{-1}=\\dfrac1{25}$ ; $4^{-3}\\times5^{-3}=20^{-3}$ ; $(25^4)^{-3}=25^{-12}$.' },
            ],
          },
        ],
      },
      {
        id: 'puissances-10',
        title: { ar: 'قوى العدد 10 والكتابة العلمية', fr: 'Puissances de 10 et écriture scientifique' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل $n$ صحيح طبيعي غير منعدم: $10^n=1\\underbrace{0\\dots0}_{n}$ و $10^{-n}=0{,}\\underbrace{0\\dots0}_{n-1}1$. مثال: $10^5=100000$ و $10^{-6}=0{,}000001$.',
              fr: 'Pour tout entier naturel non nul $n$ : $10^n=1\\underbrace{0\\dots0}_{n}$ et $10^{-n}=0{,}\\underbrace{0\\dots0}_{n-1}1$. Exemple : $10^5=100000$ et $10^{-6}=0{,}000001$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'الكتابة العلمية', fr: 'Écriture scientifique' },
            content: {
              ar: 'الكتابة العلمية لعدد عشري غير منعدم هي كتابته على الشكل $a\\times10^n$ أو $-a\\times10^n$ حيث $a$ عدد عشري يحقق $1\\le a<10$ و $n$ عدد صحيح نسبي.',
              fr: 'L’écriture scientifique d’un décimal non nul est son écriture sous la forme $a\\times10^n$ ou $-a\\times10^n$, où $a$ est un décimal tel que $1\\le a<10$ et $n$ un entier relatif.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'أعط الكتابة العلمية.', fr: 'Donner l’écriture scientifique.' },
            steps: [
              { ar: '$2345=2{,}345\\times10^3$ ؛ $-10543=-1{,}0543\\times10^4$ ؛ $-0{,}0000123=-1{,}23\\times10^{-5}$.', fr: '$2345=2{,}345\\times10^3$ ; $-10543=-1{,}0543\\times10^4$ ; $-0{,}0000123=-1{,}23\\times10^{-5}$.' },
              { ar: '$-12{,}2\\times10^4\\times5\\times10^{-6}=-61\\times10^{-2}=-6{,}1\\times10^{-1}$.', fr: '$-12{,}2\\times10^4\\times5\\times10^{-6}=-61\\times10^{-2}=-6{,}1\\times10^{-1}$.' },
            ],
          },
          {
            kind: 'definition',
            title: { ar: 'رتبة القدر', fr: 'Ordre de grandeur' },
            content: {
              ar: 'رتبة قدر عدد هي قوة العدد $10$ الأقرب إليه. إذا كان $a\\times10^n$ كتابته العلمية: إذا كان $a<5$ فرتبة القدر $10^n$، وإذا كان $a\\ge5$ فهي $10^{n+1}$.\n\nمثال: $2468=2{,}468\\times10^3$ رتبة قدره $10^3$ ؛ $0{,}000678=6{,}78\\times10^{-4}$ رتبة قدره $10^{-3}$.',
              fr: 'L’ordre de grandeur d’un nombre est la puissance de $10$ la plus proche de ce nombre. Si $a\\times10^n$ est son écriture scientifique : si $a<5$ c’est $10^n$, si $a\\ge5$ c’est $10^{n+1}$.\n\nExemple : $2468=2{,}468\\times10^3$ a pour ordre de grandeur $10^3$ ; $0{,}000678=6{,}78\\times10^{-4}$ a pour ordre de grandeur $10^{-3}$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$a^{-n}=\\dfrac1{a^n}$ و $a^0=1$ ($a\\neq0$).', fr: '$a^{-n}=\\dfrac1{a^n}$ et $a^0=1$ ($a\\neq0$).' },
      { ar: 'أساس سالب وأس فردي ← قوة سالبة.', fr: 'Base négative et exposant impair → puissance négative.' },
      { ar: '$a^n a^m=a^{n+m}$ ؛ $\\dfrac{a^m}{a^n}=a^{m-n}$ ؛ $(a^n)^m=a^{nm}$.', fr: '$a^n a^m=a^{n+m}$ ; $\\dfrac{a^m}{a^n}=a^{m-n}$ ; $(a^n)^m=a^{nm}$.' },
      { ar: 'الكتابة العلمية: $a\\times10^n$ مع $1\\le a<10$.', fr: 'Écriture scientifique : $a\\times10^n$ avec $1\\le a<10$.' },
    ],
  },
  exercises: [
    {
      id: '2ac-pui-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'قوة عدد سالب', fr: 'Puissance d’un négatif' },
      statement: { ar: 'احسب $(-7)^4$.', fr: 'Calculer $(-7)^4$.' },
      question: { type: 'numeric', answer: 2401 },
      hints: [{ ar: 'الأس زوجي إذن النتيجة موجبة؛ $7^2=49$.', fr: 'Exposant pair donc résultat positif ; $7^2=49$.' }],
      solution: [{ ar: '$(-7)^4=49\\times49=2401$.', fr: '$(-7)^4=49\\times49=2401$.' }],
    },
    {
      id: '2ac-pui-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أس سالب', fr: 'Exposant négatif' },
      statement: { ar: 'احسب $(-13)^{-2}$.', fr: 'Calculer $(-13)^{-2}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac1{169}$', fr: '$\\dfrac1{169}$' }, { ar: '$-\\dfrac1{169}$', fr: '$-\\dfrac1{169}$' }, { ar: '$169$', fr: '$169$' }, { ar: '$-26$', fr: '$-26$' }],
        correct: 0,
      },
      hints: [{ ar: '$a^{-2}=\\dfrac1{a^2}$.', fr: '$a^{-2}=\\dfrac1{a^2}$.' }],
      solution: [{ ar: '$(-13)^{-2}=\\dfrac1{(-13)^2}=\\dfrac1{169}$.', fr: '$(-13)^{-2}=\\dfrac1{(-13)^2}=\\dfrac1{169}$.' }],
    },
    {
      id: '2ac-pui-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'إشارة قوة', fr: 'Signe d’une puissance' },
      statement: { ar: 'ما إشارة $D=\\left(-\\dfrac92\\right)^{-3}$؟', fr: 'Quel est le signe de $D=\\left(-\\dfrac92\\right)^{-3}$ ?' },
      question: { type: 'mcq', options: [{ ar: 'موجب', fr: 'Positif' }, { ar: 'سالب', fr: 'Négatif' }], correct: 1 },
      hints: [{ ar: '$D=\\left(-\\dfrac29\\right)^{3}$.', fr: '$D=\\left(-\\dfrac29\\right)^{3}$.' }],
      solution: [{ ar: 'الأساس سالب والأس $3$ فردي، إذن $D$ سالب.', fr: 'Base négative et exposant $3$ impair : $D$ est négatif.' }],
    },
    {
      id: '2ac-pui-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'قوى العدد 10', fr: 'Puissances de 10' },
      statement: { ar: 'نكتب $D=(0{,}001)^3\\times(10^4)^{-2}$ على الشكل $10^n$. ما قيمة $n$؟', fr: 'On écrit $D=(0{,}001)^3\\times(10^4)^{-2}$ sous la forme $10^n$. Que vaut $n$ ?' },
      question: { type: 'numeric', answer: -17 },
      hints: [{ ar: '$0{,}001=10^{-3}$.', fr: '$0{,}001=10^{-3}$.' }],
      solution: [{ ar: '$D=(10^{-3})^3\\times10^{-8}=10^{-9}\\times10^{-8}=10^{-17}$.', fr: '$D=(10^{-3})^3\\times10^{-8}=10^{-9}\\times10^{-8}=10^{-17}$.' }],
    },
    {
      id: '2ac-pui-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'نفس الأس', fr: 'Même exposant' },
      statement: { ar: 'احسب $Q=2^3\\times(0{,}5)^3$.', fr: 'Calculer $Q=2^3\\times(0{,}5)^3$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$a^n\\times b^n=(ab)^n$.', fr: '$a^n\\times b^n=(ab)^n$.' }],
      solution: [{ ar: '$Q=(2\\times0{,}5)^3=1^3=1$.', fr: '$Q=(2\\times0{,}5)^3=1^3=1$.' }],
    },
    {
      id: '2ac-pui-06',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'كتابة علمية', fr: 'Écriture scientifique' },
      statement: { ar: 'ما الكتابة العلمية لـ $B=0{,}03\\times10^{-6}\\times123\\times10^{-10}$؟', fr: 'Quelle est l’écriture scientifique de $B=0{,}03\\times10^{-6}\\times123\\times10^{-10}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$3{,}69\\times10^{-16}$', fr: '$3{,}69\\times10^{-16}$' }, { ar: '$3{,}69\\times10^{-18}$', fr: '$3{,}69\\times10^{-18}$' }, { ar: '$36{,}9\\times10^{-17}$', fr: '$36{,}9\\times10^{-17}$' }, { ar: '$3{,}69\\times10^{-14}$', fr: '$3{,}69\\times10^{-14}$' }],
        correct: 0,
      },
      hints: [{ ar: '$0{,}03\\times123=3{,}69$.', fr: '$0{,}03\\times123=3{,}69$.' }],
      solution: [{ ar: '$B=3{,}69\\times10^{-6-10}=3{,}69\\times10^{-16}$.', fr: '$B=3{,}69\\times10^{-6-10}=3{,}69\\times10^{-16}$.' }],
    },
  ],
};
