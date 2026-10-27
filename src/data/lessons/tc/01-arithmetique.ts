import type { LessonModule } from '@/types';

const lessonId = 'tc-arithmetique';

export const arithmetique: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'arith',
    title: { ar: 'الحسابيات في مجموعة الأعداد الصحيحة الطبيعية', fr: 'Arithmétique dans ℕ' },
    summary: {
      ar: 'الزوجية، المضاعفات والقواسم، مصاديق القسمة، الأعداد الأولية والتفكيك، القاسم المشترك الأكبر والمضاعف المشترك الأصغر.',
      fr: 'Parité, multiples et diviseurs, critères de divisibilité, nombres premiers et décomposition, PGCD et PPCM.',
    },
    objectives: [
      { ar: 'دراسة زوجية عدد صحيح طبيعي.', fr: 'Étudier la parité d’un entier naturel.' },
      { ar: 'تفكيك عدد إلى جداء عوامل أولية.', fr: 'Décomposer un entier en produit de facteurs premiers.' },
      { ar: 'حساب PGCD و PPCM.', fr: 'Calculer le PGCD et le PPCM.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['arithmétique', 'parité', 'diviseur', 'multiple', 'nombre premier', 'PGCD', 'PPCM', 'حسابيات', 'زوجية', 'قاسم', 'مضاعف', 'عدد أولي'],
    sections: [
      {
        id: 'parite',
        title: { ar: 'الزوجية والقسمة', fr: 'Parité et divisibilité' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• $n$ **زوجي** إذا وجد $k\\in\\mathbb N$ بحيث $n=2k$، و**فردي** إذا كان $n=2k+1$.\n\n• نقول إن $a$ **مضاعف** لـ $b$ (أو $b$ **قاسم** لـ $a$) إذا وجد $k\\in\\mathbb N$ بحيث $a=kb$.',
              fr: '• $n$ est **pair** s’il existe $k\\in\\mathbb N$ tel que $n=2k$, **impair** si $n=2k+1$.\n\n• $a$ est un **multiple** de $b$ (ou $b$ un **diviseur** de $a$) s’il existe $k\\in\\mathbb N$ tel que $a=kb$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• مجموع عددين زوجيين أو فرديين زوجي، ومجموع زوجي وفردي فردي.\n\n• جداء عددين متتابعين $n(n+1)$ زوجي دائماً.\n\n• مصاديق: يقبل القسمة على $2$ إذا كان رقم وحداته $0,2,4,6,8$؛ على $5$ إذا كان رقم وحداته $0$ أو $5$؛ على $3$ (أو $9$) إذا كان مجموع أرقامه يقبل القسمة على $3$ (أو $9$)؛ على $4$ إذا كان العدد المكون من رقميه الأخيرين مضاعفاً لـ $4$.',
              fr: '• La somme de deux pairs ou de deux impairs est paire ; celle d’un pair et d’un impair est impaire.\n\n• Le produit de deux consécutifs $n(n+1)$ est toujours pair.\n\n• Critères : divisible par $2$ si le chiffre des unités est $0,2,4,6,8$ ; par $5$ s’il est $0$ ou $5$ ; par $3$ (ou $9$) si la somme des chiffres est divisible par $3$ (ou $9$) ; par $4$ si le nombre formé par ses deux derniers chiffres est multiple de $4$.',
            },
          },
        ],
      },
      {
        id: 'premiers',
        title: { ar: 'الأعداد الأولية', fr: 'Nombres premiers' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'العدد الأولي عدد صحيح طبيعي يخالف $1$ ولا يقبل إلا قاسمين: $1$ ونفسه. أمثلة: $2,3,5,7,11,13,\\dots$',
              fr: 'Un nombre premier est un entier naturel différent de $1$ qui n’a que deux diviseurs : $1$ et lui-même. Exemples : $2,3,5,7,11,13,\\dots$',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'كل عدد صحيح طبيعي أكبر من $1$ يتفكك بطريقة وحيدة إلى جداء عوامل أولية. مثال: $360=2^3\\times3^2\\times5$.',
              fr: 'Tout entier naturel supérieur à $1$ se décompose de façon unique en produit de facteurs premiers. Exemple : $360=2^3\\times3^2\\times5$.',
            },
          },
        ],
      },
      {
        id: 'pgcd',
        title: { ar: 'PGCD و PPCM', fr: 'PGCD et PPCM' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'بعد التفكيك: **PGCD** هو جداء العوامل المشتركة بأصغر أس، و**PPCM** هو جداء كل العوامل بأكبر أس. ولدينا: $\\text{PGCD}(a;b)\\times\\text{PPCM}(a;b)=a\\times b$.',
              fr: 'Après décomposition : le **PGCD** est le produit des facteurs communs affectés du plus petit exposant ; le **PPCM** est le produit de tous les facteurs affectés du plus grand exposant. On a : $\\text{PGCD}(a;b)\\times\\text{PPCM}(a;b)=a\\times b$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\text{PGCD}(84;126)$ و $\\text{PPCM}(84;126)$.', fr: 'Calculer $\\text{PGCD}(84;126)$ et $\\text{PPCM}(84;126)$.' },
            steps: [
              { ar: '$84=2^2\\times3\\times7$ و $126=2\\times3^2\\times7$.', fr: '$84=2^2\\times3\\times7$ et $126=2\\times3^2\\times7$.' },
              { ar: '$\\text{PGCD}=2\\times3\\times7=42$ و $\\text{PPCM}=2^2\\times3^2\\times7=252$.', fr: '$\\text{PGCD}=2\\times3\\times7=42$ et $\\text{PPCM}=2^2\\times3^2\\times7=252$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$n(n+1)$ زوجي دائماً.', fr: '$n(n+1)$ est toujours pair.' },
      { ar: 'PGCD × PPCM = $a\\times b$.', fr: 'PGCD × PPCM = $a\\times b$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-ari-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'تفكيك', fr: 'Décomposition' },
      statement: { ar: 'ما تفكيك $360$ إلى جداء عوامل أولية؟', fr: 'Quelle est la décomposition de $360$ en facteurs premiers ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$2^3\\times3^2\\times5$', fr: '$2^3\\times3^2\\times5$' }, { ar: '$2^2\\times3^2\\times10$', fr: '$2^2\\times3^2\\times10$' }, { ar: '$2^3\\times45$', fr: '$2^3\\times45$' }, { ar: '$2\\times3^3\\times5$', fr: '$2\\times3^3\\times5$' }],
        correct: 0,
      },
      hints: [{ ar: '$360=8\\times45$.', fr: '$360=8\\times45$.' }],
      solution: [{ ar: '$360=8\\times45=2^3\\times3^2\\times5$.', fr: '$360=8\\times45=2^3\\times3^2\\times5$.' }],
    },
    {
      id: 'tc-ari-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'PPCM', fr: 'PPCM' },
      statement: { ar: 'احسب $\\text{PPCM}(12;18)$.', fr: 'Calculer $\\text{PPCM}(12;18)$.' },
      question: { type: 'numeric', answer: 36 },
      hints: [{ ar: '$12=2^2\\times3$ و $18=2\\times3^2$.', fr: '$12=2^2\\times3$ et $18=2\\times3^2$.' }],
      solution: [{ ar: '$\\text{PPCM}=2^2\\times3^2=36$.', fr: '$\\text{PPCM}=2^2\\times3^2=36$.' }],
    },
    {
      id: 'tc-ari-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'عدد القواسم', fr: 'Nombre de diviseurs' },
      statement: { ar: 'كم قاسماً للعدد $72=2^3\\times3^2$؟', fr: 'Combien de diviseurs a $72=2^3\\times3^2$ ?' },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: 'كل قاسم على الشكل $2^a3^b$ مع $0\\le a\\le3$ و $0\\le b\\le2$.', fr: 'Tout diviseur s’écrit $2^a3^b$ avec $0\\le a\\le3$ et $0\\le b\\le2$.' }],
      solution: [{ ar: '$(3+1)\\times(2+1)=12$ قاسماً.', fr: '$(3+1)\\times(2+1)=12$ diviseurs.' }],
    },
    {
      id: 'tc-ari-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'زوجية', fr: 'Parité' },
      statement: { ar: 'ليكن $n\\in\\mathbb N$. ما زوجية العدد $n^2+n+1$؟', fr: 'Soit $n\\in\\mathbb N$. Quelle est la parité de $n^2+n+1$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'فردي دائماً', fr: 'Toujours impair' }, { ar: 'زوجي دائماً', fr: 'Toujours pair' }, { ar: 'حسب $n$', fr: 'Cela dépend de $n$' }],
        correct: 0,
      },
      hints: [{ ar: '$n^2+n=n(n+1)$.', fr: '$n^2+n=n(n+1)$.' }],
      solution: [{ ar: '$n(n+1)$ زوجي، إذن $n(n+1)+1$ فردي دائماً.', fr: '$n(n+1)$ est pair, donc $n(n+1)+1$ est toujours impair.' }],
    },
  ],
};
