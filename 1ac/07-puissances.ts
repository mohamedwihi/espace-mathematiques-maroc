import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-puissances';

export const puissances: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'powers',
    title: { ar: 'القوى', fr: 'Puissances' },
    summary: {
      ar: 'قوة عدد نسبي، إشارة قوة، العمليات على القوى، قوى العدد 10 والكتابة العلمية.',
      fr: 'Puissance d’un relatif, signe d’une puissance, opérations sur les puissances, puissances de 10 et écriture scientifique.',
    },
    objectives: [
      { ar: 'معرفة قوة عدد نسبي: الأساس والأس.', fr: 'Connaître la puissance d’un relatif : base et exposant.' },
      { ar: 'تحديد إشارة قوة.', fr: 'Déterminer le signe d’une puissance.' },
      { ar: 'استعمال خاصيات القوى.', fr: 'Utiliser les propriétés des puissances.' },
      { ar: 'استعمال قوى العدد 10 والكتابة العلمية.', fr: 'Utiliser les puissances de 10 et l’écriture scientifique.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['puissance', 'exposant', 'base', 'écriture scientifique', 'puissance de 10', 'قوة', 'أس', 'أساس', 'كتابة علمية'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'قوة عدد نسبي', fr: 'Puissance d’un nombre relatif' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ عدداً نسبياً غير منعدم و $n$ عدداً صحيحاً طبيعياً أكبر من $1$. العدد $a^n$ هو جداء $n$ عاملاً كلها تساوي $a$؛ $a$ هو **الأساس** و $n$ هو **الأس**.',
              fr: 'Soit $a$ un relatif non nul et $n$ un entier supérieur à $1$. Le nombre $a^n$ est le produit de $n$ facteurs égaux à $a$ ; $a$ est la **base** et $n$ l’**exposant**.',
            },
          },
          { kind: 'formula', tex: 'a^n=\\underbrace{a\\times a\\times\\cdots\\times a}_{n}\\qquad a^1=a\\qquad a^0=1\\ (a\\neq0)' },
          {
            kind: 'remark',
            content: {
              ar: '• $a^2$ تقرأ «$a$ مربع» و $a^3$ تقرأ «$a$ مكعب».\n\n• الكتابة $0^0$ غير معرفة.\n\n• انتبه: $-2^4=-(2^4)=-16$ بينما $(-2)^4=16$.',
              fr: '• $a^2$ se lit « $a$ au carré » et $a^3$ « $a$ au cube ».\n\n• L’écriture $0^0$ n’a pas de sens.\n\n• Attention : $-2^4=-(2^4)=-16$ alors que $(-2)^4=16$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $(-6)^3$ و $(-5)^4$ و $(-7)^0$.', fr: 'Calculer $(-6)^3$, $(-5)^4$ et $(-7)^0$.' },
            steps: [
              { ar: '$(-6)^3=(-6)\\times(-6)\\times(-6)=-216$.', fr: '$(-6)^3=(-6)\\times(-6)\\times(-6)=-216$.' },
              { ar: '$(-5)^4=625$ و $(-7)^0=1$.', fr: '$(-5)^4=625$ et $(-7)^0=1$.' },
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
              ar: '• إذا كان $a$ موجباً فإن $a^n$ موجب.\n\n• إذا كان $a$ سالباً: $a^n$ موجب إذا كان $n$ **زوجياً**، وسالب إذا كان $n$ **فردياً**.',
              fr: '• Si $a$ est positif, $a^n$ est positif.\n\n• Si $a$ est négatif : $a^n$ est positif si $n$ est **pair**, négatif si $n$ est **impair**.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد إشارة $9^{13}$ و $(-15)^{12}$ و $(-2)^9$.', fr: 'Signe de $9^{13}$, $(-15)^{12}$ et $(-2)^9$.' },
            steps: [
              { ar: '$9^{13}$ موجب لأن الأساس موجب.', fr: '$9^{13}$ est positif car la base est positive.' },
              { ar: '$(-15)^{12}$ موجب لأن الأس زوجي، و $(-2)^9$ سالب لأن الأساس سالب والأس فردي.', fr: '$(-15)^{12}$ est positif (exposant pair) ; $(-2)^9$ est négatif (base négative, exposant impair).' },
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
              ar: 'لكل عددين نسبيين غير منعدمين $a$ و $b$ ولكل عددين صحيحين طبيعيين $n$ و $m$:',
              fr: 'Pour tous relatifs non nuls $a$ et $b$ et tous entiers naturels $n$ et $m$ :',
            },
          },
          { kind: 'formula', tex: 'a^n\\times a^m=a^{n+m}\\qquad a^n\\times b^n=(a\\times b)^n\\qquad (a^n)^m=a^{n\\times m}' },
          { kind: 'formula', tex: '\\frac{a^n}{a^m}=a^{n-m}\\ (n>m)\\qquad \\frac{a^n}{b^n}=\\left(\\frac ab\\right)^n' },
          {
            kind: 'example',
            statement: { ar: 'اكتب على شكل قوة: $5^3\\times5^5$ ؛ $(-3)^4\\times4^4$ ؛ $\\dfrac{7^{12}}{7^6}$ ؛ $((-9)^2)^6$.', fr: 'Écrire sous forme d’une puissance : $5^3\\times5^5$ ; $(-3)^4\\times4^4$ ; $\\dfrac{7^{12}}{7^6}$ ; $((-9)^2)^6$.' },
            steps: [
              { ar: '$5^3\\times5^5=5^{3+5}=5^8$.', fr: '$5^3\\times5^5=5^{3+5}=5^8$.' },
              { ar: '$(-3)^4\\times4^4=(-12)^4=12^4$ (الأس زوجي).', fr: '$(-3)^4\\times4^4=(-12)^4=12^4$ (exposant pair).' },
              { ar: '$\\dfrac{7^{12}}{7^6}=7^{12-6}=7^6$ و $((-9)^2)^6=(-9)^{12}=9^{12}$.', fr: '$\\dfrac{7^{12}}{7^6}=7^{12-6}=7^6$ et $((-9)^2)^6=(-9)^{12}=9^{12}$.' },
            ],
          },
        ],
      },
      {
        id: 'base-dix',
        title: { ar: 'قوى العدد 10 والكتابة العلمية', fr: 'Puissances de 10 et écriture scientifique' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لكل عدد صحيح طبيعي غير منعدم $n$: $10^n=1\\underbrace{0\\cdots0}_{n}$. مثلاً $10^3=1000$ و $10^5=100\\,000$.',
              fr: 'Pour tout entier naturel non nul $n$ : $10^n=1\\underbrace{0\\cdots0}_{n}$. Par exemple $10^3=1000$ et $10^5=100\\,000$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'الكتابة العلمية', fr: 'Écriture scientifique' },
            content: {
              ar: 'الكتابة العلمية لعدد عشري هي كتابته على الشكل $a\\times10^n$ حيث $a$ عدد عشري **يحقق $1\\le|a|<10$** (أي له رقم واحد غير منعدم قبل الفاصلة) و $n$ عدد صحيح نسبي.',
              fr: 'L’écriture scientifique d’un nombre décimal est son écriture sous la forme $a\\times10^n$ où $a$ est un décimal **avec un seul chiffre non nul avant la virgule** ($1\\le$ distance à zéro de $a$ $<10$) et $n$ un entier relatif.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اكتب كتابة علمية: $2345$ ؛ $-0{,}0000123$ ؛ $-12{,}2\\times10^4\\times5\\times10^6$.', fr: 'Écriture scientifique de : $2345$ ; $-0{,}0000123$ ; $-12{,}2\\times10^4\\times5\\times10^6$.' },
            steps: [
              { ar: '$2345=2{,}345\\times10^3$.', fr: '$2345=2{,}345\\times10^3$.' },
              { ar: '$-0{,}0000123=-1{,}23\\times10^{-5}$.', fr: '$-0{,}0000123=-1{,}23\\times10^{-5}$.' },
              { ar: '$-12{,}2\\times5\\times10^{4+6}=-61\\times10^{10}=-6{,}1\\times10^{11}$ (لأن $-61$ ليس بين $-10$ و $-1$).', fr: '$-12{,}2\\times5\\times10^{4+6}=-61\\times10^{10}=-6{,}1\\times10^{11}$ ($-61\\times10^{10}$ n’est pas une écriture scientifique).' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$a^n$: جداء $n$ عاملاً يساوي $a$ ؛ $a^1=a$ و $a^0=1$.', fr: '$a^n$ : produit de $n$ facteurs égaux à $a$ ; $a^1=a$ et $a^0=1$.' },
      { ar: 'أساس سالب: أس زوجي ← موجب، أس فردي ← سالب.', fr: 'Base négative : exposant pair → positif, impair → négatif.' },
      { ar: '$a^n\\times a^m=a^{n+m}$ ، $\\dfrac{a^n}{a^m}=a^{n-m}$ ، $(a^n)^m=a^{nm}$.', fr: '$a^n\\times a^m=a^{n+m}$, $\\dfrac{a^n}{a^m}=a^{n-m}$, $(a^n)^m=a^{nm}$.' },
      { ar: 'الكتابة العلمية: $a\\times10^n$ برقم واحد غير منعدم قبل الفاصلة.', fr: 'Écriture scientifique : $a\\times10^n$ avec un seul chiffre non nul avant la virgule.' },
    ],
  },
  exercises: [
    {
      id: '1ac-pow-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'حساب قوة', fr: 'Calculer une puissance' },
      statement: { ar: 'احسب $(-7)^4$.', fr: 'Calculer $(-7)^4$.' },
      question: { type: 'numeric', answer: 2401 },
      hints: [{ ar: 'الأس زوجي: النتيجة موجبة. $7^2=49$.', fr: 'Exposant pair : résultat positif. $7^2=49$.' }],
      solution: [{ ar: '$(-7)^4=7^4=49\\times49=2401$.', fr: '$(-7)^4=7^4=49\\times49=2401$.' }],
    },
    {
      id: '1ac-pow-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'إشارة قوة', fr: 'Signe d’une puissance' },
      statement: { ar: 'ما إشارة $C=(-5)^3$؟', fr: 'Quel est le signe de $C=(-5)^3$ ?' },
      question: { type: 'mcq', options: [{ ar: 'موجب', fr: 'Positif' }, { ar: 'سالب', fr: 'Négatif' }], correct: 1 },
      hints: [{ ar: 'الأساس سالب والأس فردي.', fr: 'Base négative et exposant impair.' }],
      solution: [{ ar: 'الأساس $-5$ سالب والأس $3$ فردي، إذن $C$ سالب ($C=-125$).', fr: 'La base $-5$ est négative et l’exposant $3$ impair : $C$ est négatif ($C=-125$).' }],
    },
    {
      id: '1ac-pow-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'خاصيات القوى', fr: 'Propriétés des puissances' },
      statement: { ar: 'اكتب $A=(-2)^4\\times(-2)^3$ على شكل قوة.', fr: 'Écrire $A=(-2)^4\\times(-2)^3$ sous forme d’une puissance.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(-2)^7$', fr: '$(-2)^7$' }, { ar: '$(-2)^{12}$', fr: '$(-2)^{12}$' }, { ar: '$4^7$', fr: '$4^7$' }, { ar: '$2^7$', fr: '$2^7$' }],
        correct: 0,
      },
      hints: [{ ar: '$a^n\\times a^m=a^{n+m}$.', fr: '$a^n\\times a^m=a^{n+m}$.' }],
      solution: [
        { ar: '$A=(-2)^{4+3}=(-2)^7$.', fr: '$A=(-2)^{4+3}=(-2)^7$.' },
        { ar: 'انتبه: $(-2)^7=-2^7$ (سالب) وليس $2^7$.', fr: 'Attention : $(-2)^7=-2^7$ (négatif), pas $2^7$.' },
      ],
    },
    {
      id: '1ac-pow-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'الكتابة العلمية', fr: 'Écriture scientifique' },
      statement: { ar: 'ما هي الكتابة العلمية للعدد $B=0{,}00000897$؟', fr: 'Quelle est l’écriture scientifique de $B=0{,}00000897$ ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$8{,}97\\times10^{-6}$', fr: '$8{,}97\\times10^{-6}$' },
          { ar: '$897\\times10^{-8}$', fr: '$897\\times10^{-8}$' },
          { ar: '$8{,}97\\times10^{6}$', fr: '$8{,}97\\times10^{6}$' },
          { ar: '$0{,}897\\times10^{-5}$', fr: '$0{,}897\\times10^{-5}$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'ننقل الفاصلة حتى نحصل على رقم واحد غير منعدم قبلها.', fr: 'On déplace la virgule pour avoir un seul chiffre non nul avant elle.' }],
      solution: [
        { ar: 'ننقل الفاصلة $6$ مراتب نحو اليمين: $B=8{,}97\\times10^{-6}$.', fr: 'On décale la virgule de $6$ rangs vers la droite : $B=8{,}97\\times10^{-6}$.' },
        { ar: '$897\\times10^{-8}$ و $0{,}897\\times10^{-5}$ يساويان $B$ لكنهما ليسا كتابة علمية.', fr: '$897\\times10^{-8}$ et $0{,}897\\times10^{-5}$ valent $B$ mais ne sont pas des écritures scientifiques.' },
      ],
    },
  ],
};
