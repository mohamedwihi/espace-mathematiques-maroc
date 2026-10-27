import type { LessonModule } from '@/types';

const lessonId = '3ac-racines-carrees';

export const racinesCarrees: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'roots',
    title: { ar: 'الجذور المربعة', fr: 'Les racines carrées' },
    summary: {
      ar: 'تعريف الجذر المربع، الجذور والعمليات، جعل المقام عدداً جذرياً، وحل المعادلة $x^2=a$.',
      fr: 'Définition de la racine carrée, racines et opérations, rendre un dénominateur rationnel, résoudre $x^2=a$.',
    },
    objectives: [
      { ar: 'معرفة واستعمال $(\\sqrt a)^2=a$ و $\\sqrt{a^2}=a$.', fr: 'Connaître et utiliser $(\\sqrt a)^2=a$ et $\\sqrt{a^2}=a$.' },
      { ar: 'استعمال $\\sqrt{ab}=\\sqrt a\\sqrt b$ و $\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}$.', fr: 'Utiliser $\\sqrt{ab}=\\sqrt a\\sqrt b$ et $\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}$.' },
      { ar: 'جعل مقام كتابة كسرية عدداً جذرياً.', fr: 'Rendre rationnel le dénominateur d’une écriture fractionnaire.' },
      { ar: 'حل معادلات من الشكل $x^2=a$.', fr: 'Résoudre des équations de la forme $x^2=a$.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    featured: true,
    keywords: ['racine carrée', 'radical', 'conjugué', 'dénominateur', 'x²=a', 'جذر مربع', 'مرافق', 'مقام'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'الجذر المربع لعدد موجب', fr: 'Racine carrée d’un nombre positif' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ عدداً موجباً. **الجذر المربع** لـ $a$، ونرمز له بـ $\\sqrt a$، هو العدد الموجب الذي مربعه يساوي $a$.',
              fr: 'Soit $a$ un nombre positif. La **racine carrée** de $a$, notée $\\sqrt a$, est le nombre positif dont le carré est égal à $a$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'لكل عدد موجب $a$: $(\\sqrt a)^2=a$ و $\\sqrt{a^2}=a$. أمثلة: $\\sqrt{49}=7$ ؛ $\\sqrt{0}=0$ ؛ $\\sqrt{\\dfrac{36}{81}}=\\dfrac69=\\dfrac23$.',
              fr: 'Pour tout nombre positif $a$ : $(\\sqrt a)^2=a$ et $\\sqrt{a^2}=a$. Exemples : $\\sqrt{49}=7$ ; $\\sqrt{0}=0$ ; $\\sqrt{\\dfrac{36}{81}}=\\dfrac69=\\dfrac23$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'الجذر المربع لعدد سالب غير موجود: $\\sqrt{-5}$ لا معنى له.',
              fr: 'La racine carrée d’un nombre négatif n’existe pas : $\\sqrt{-5}$ n’a pas de sens.',
            },
          },
        ],
      },
      {
        id: 'operations',
        title: { ar: 'الجذور والعمليات', fr: 'Racines carrées et opérations' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل عددين موجبين $a$ و $b$: $\\sqrt{a\\times b}=\\sqrt a\\times\\sqrt b$، وإذا كان $b\\neq0$: $\\sqrt{\\dfrac ab}=\\dfrac{\\sqrt a}{\\sqrt b}$.',
              fr: 'Pour tous nombres positifs $a$ et $b$ : $\\sqrt{a\\times b}=\\sqrt a\\times\\sqrt b$ et, si $b\\neq0$ : $\\sqrt{\\dfrac ab}=\\dfrac{\\sqrt a}{\\sqrt b}$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'انتبه: بصفة عامة $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$. مثلاً $\\sqrt{9+16}=5$ بينما $\\sqrt9+\\sqrt{16}=7$.',
              fr: 'Attention : en général $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$. Par exemple $\\sqrt{9+16}=5$ alors que $\\sqrt9+\\sqrt{16}=7$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'بسّط $7\\sqrt3-\\sqrt{27}+2\\sqrt{12}$.', fr: 'Simplifier $7\\sqrt3-\\sqrt{27}+2\\sqrt{12}$.' },
            steps: [
              { ar: '$\\sqrt{27}=\\sqrt{9\\times3}=3\\sqrt3$ و $\\sqrt{12}=\\sqrt{4\\times3}=2\\sqrt3$.', fr: '$\\sqrt{27}=\\sqrt{9\\times3}=3\\sqrt3$ et $\\sqrt{12}=\\sqrt{4\\times3}=2\\sqrt3$.' },
              { ar: 'إذن $7\\sqrt3-3\\sqrt3+4\\sqrt3=8\\sqrt3$.', fr: 'Donc $7\\sqrt3-3\\sqrt3+4\\sqrt3=8\\sqrt3$.' },
            ],
          },
        ],
      },
      {
        id: 'denominateur',
        title: { ar: 'جعل المقام عدداً جذرياً', fr: 'Rendre le dénominateur rationnel' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: '• إذا كان المقام $\\sqrt a$: نضرب البسط والمقام في $\\sqrt a$.\n\n• إذا كان المقام $a+\\sqrt b$ أو $\\sqrt a-\\sqrt b$: نضرب في **المرافق** ونستعمل $(x-y)(x+y)=x^2-y^2$. مرافق $x+y$ هو $x-y$ والعكس.',
              fr: '• Si le dénominateur est $\\sqrt a$ : on multiplie numérateur et dénominateur par $\\sqrt a$.\n\n• S’il est de la forme $a+\\sqrt b$ ou $\\sqrt a-\\sqrt b$ : on multiplie par le **conjugué** et on utilise $(x-y)(x+y)=x^2-y^2$. Le conjugué de $x+y$ est $x-y$, et inversement.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اجعل المقام عدداً جذرياً.', fr: 'Rendre le dénominateur rationnel.' },
            steps: [
              { ar: '$\\dfrac{2}{\\sqrt7}=\\dfrac{2\\sqrt7}{7}$ ؛ $\\dfrac{3}{2\\sqrt5}=\\dfrac{3\\sqrt5}{10}$.', fr: '$\\dfrac{2}{\\sqrt7}=\\dfrac{2\\sqrt7}{7}$ ; $\\dfrac{3}{2\\sqrt5}=\\dfrac{3\\sqrt5}{10}$.' },
              { ar: '$\\dfrac{2}{5-\\sqrt3}=\\dfrac{2(5+\\sqrt3)}{25-3}=\\dfrac{5+\\sqrt3}{11}$.', fr: '$\\dfrac{2}{5-\\sqrt3}=\\dfrac{2(5+\\sqrt3)}{25-3}=\\dfrac{5+\\sqrt3}{11}$.' },
            ],
          },
        ],
      },
      {
        id: 'equation',
        title: { ar: 'المعادلة $x^2=a$', fr: 'L’équation $x^2=a$' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '• إذا كان $a>0$: للمعادلة حلان هما $\\sqrt a$ و $-\\sqrt a$.\n\n• إذا كان $a=0$: لها حل وحيد هو $0$.\n\n• إذا كان $a<0$: ليس لها حل.',
              fr: '• Si $a>0$ : l’équation a deux solutions, $\\sqrt a$ et $-\\sqrt a$.\n\n• Si $a=0$ : une seule solution, $0$.\n\n• Si $a<0$ : aucune solution.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $x^2=11$ ثم $x^2=-8$.', fr: 'Résoudre $x^2=11$ puis $x^2=-8$.' },
            steps: [
              { ar: '$x=\\sqrt{11}$ أو $x=-\\sqrt{11}$.', fr: '$x=\\sqrt{11}$ ou $x=-\\sqrt{11}$.' },
              { ar: '$-8<0$: المعادلة ليس لها حل.', fr: '$-8<0$ : l’équation n’a pas de solution.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\sqrt a$ معرف فقط إذا كان $a\\ge0$، وهو موجب.', fr: '$\\sqrt a$ n’existe que pour $a\\ge0$ et il est positif.' },
      { ar: '$\\sqrt{ab}=\\sqrt a\\sqrt b$ لكن $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$.', fr: '$\\sqrt{ab}=\\sqrt a\\sqrt b$ mais $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$.' },
      { ar: 'نستعمل المرافق لجعل المقام جذرياً.', fr: 'On utilise le conjugué pour rendre un dénominateur rationnel.' },
    ],
  },
  exercises: [
    {
      id: '3ac-rac-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'خارج جذرين', fr: 'Quotient de racines' },
      statement: { ar: 'احسب $\\dfrac{\\sqrt{0{,}25}}{\\sqrt{0{,}04}}$.', fr: 'Calculer $\\dfrac{\\sqrt{0{,}25}}{\\sqrt{0{,}04}}$.' },
      question: { type: 'numeric', answer: 2.5, tolerance: 1e-9 },
      hints: [{ ar: '$\\sqrt{0{,}25}=0{,}5$.', fr: '$\\sqrt{0{,}25}=0{,}5$.' }],
      solution: [{ ar: '$\\dfrac{0{,}5}{0{,}2}=2{,}5$.', fr: '$\\dfrac{0{,}5}{0{,}2}=2{,}5$.' }],
    },
    {
      id: '3ac-rac-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'اختزال مجموع', fr: 'Réduire une somme' },
      statement: { ar: 'اختزل $2\\sqrt{18}+\\sqrt{32}+3\\sqrt2$.', fr: 'Réduire $2\\sqrt{18}+\\sqrt{32}+3\\sqrt2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$13\\sqrt2$', fr: '$13\\sqrt2$' }, { ar: '$6\\sqrt{52}$', fr: '$6\\sqrt{52}$' }, { ar: '$11\\sqrt2$', fr: '$11\\sqrt2$' }, { ar: '$9\\sqrt2$', fr: '$9\\sqrt2$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\sqrt{18}=3\\sqrt2$ و $\\sqrt{32}=4\\sqrt2$.', fr: '$\\sqrt{18}=3\\sqrt2$ et $\\sqrt{32}=4\\sqrt2$.' }],
      solution: [{ ar: '$6\\sqrt2+4\\sqrt2+3\\sqrt2=13\\sqrt2$.', fr: '$6\\sqrt2+4\\sqrt2+3\\sqrt2=13\\sqrt2$.' }],
    },
    {
      id: '3ac-rac-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'المرافق', fr: 'Le conjugué' },
      statement: { ar: 'اجعل مقام $\\dfrac{1}{\\sqrt3+1}$ عدداً جذرياً.', fr: 'Rendre rationnel le dénominateur de $\\dfrac{1}{\\sqrt3+1}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac{\\sqrt3-1}{2}$', fr: '$\\dfrac{\\sqrt3-1}{2}$' }, { ar: '$\\dfrac{\\sqrt3+1}{2}$', fr: '$\\dfrac{\\sqrt3+1}{2}$' }, { ar: '$\\sqrt3-1$', fr: '$\\sqrt3-1$' }, { ar: '$\\dfrac{\\sqrt3-1}{4}$', fr: '$\\dfrac{\\sqrt3-1}{4}$' }],
        correct: 0,
      },
      hints: [{ ar: 'اضرب في $\\sqrt3-1$.', fr: 'Multiplie par $\\sqrt3-1$.' }],
      solution: [{ ar: '$\\dfrac{\\sqrt3-1}{(\\sqrt3)^2-1}=\\dfrac{\\sqrt3-1}{2}$.', fr: '$\\dfrac{\\sqrt3-1}{(\\sqrt3)^2-1}=\\dfrac{\\sqrt3-1}{2}$.' }],
    },
    {
      id: '3ac-rac-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'معادلة $x^2=a$', fr: 'Équation $x^2=a$' },
      statement: { ar: 'حل المعادلة $9x^2-8=0$.', fr: 'Résoudre $9x^2-8=0$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac{2\\sqrt2}{3}$ و $-\\dfrac{2\\sqrt2}{3}$', fr: '$\\dfrac{2\\sqrt2}{3}$ et $-\\dfrac{2\\sqrt2}{3}$' }, { ar: '$\\dfrac{2\\sqrt2}{3}$ فقط', fr: '$\\dfrac{2\\sqrt2}{3}$ seulement' }, { ar: '$\\dfrac89$ و $-\\dfrac89$', fr: '$\\dfrac89$ et $-\\dfrac89$' }, { ar: 'لا حل', fr: 'Aucune solution' }],
        correct: 0,
      },
      hints: [{ ar: '$x^2=\\dfrac89$ و $\\sqrt{\\dfrac89}=\\dfrac{2\\sqrt2}3$.', fr: '$x^2=\\dfrac89$ et $\\sqrt{\\dfrac89}=\\dfrac{2\\sqrt2}3$.' }],
      solution: [{ ar: '$x^2=\\dfrac89>0$ إذن $x=\\dfrac{2\\sqrt2}3$ أو $x=-\\dfrac{2\\sqrt2}3$.', fr: '$x^2=\\dfrac89>0$ donc $x=\\dfrac{2\\sqrt2}3$ ou $x=-\\dfrac{2\\sqrt2}3$.' }],
    },
    {
      id: '3ac-rac-05',
      lessonId,
      levelId: '3ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'جذور متداخلة', fr: 'Racines imbriquées' },
      statement: { ar: 'احسب $\\sqrt{21+\\sqrt{(-4)^2}}$.', fr: 'Calculer $\\sqrt{21+\\sqrt{(-4)^2}}$.' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\sqrt{(-4)^2}=\\sqrt{16}=4$.', fr: '$\\sqrt{(-4)^2}=\\sqrt{16}=4$.' }],
      solution: [{ ar: '$\\sqrt{21+4}=\\sqrt{25}=5$.', fr: '$\\sqrt{21+4}=\\sqrt{25}=5$.' }],
    },
  ],
};
