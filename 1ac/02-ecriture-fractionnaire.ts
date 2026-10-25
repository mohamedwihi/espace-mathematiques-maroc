import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-ecriture-fractionnaire';

export const ecritureFractionnaire: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'fractions',
    title: { ar: 'الأعداد الكسرية', fr: 'Les nombres en écriture fractionnaire' },
    summary: {
      ar: 'مفهوم الخارج والكسر، تساوي كسرين واختزال الكسور، ومقارنة الكسور وترتيبها.',
      fr: 'Notion de quotient et de fraction, égalité de quotients et simplification, comparaison et rangement de fractions.',
    },
    objectives: [
      { ar: 'التعرف على الكسر: البسط والمقام.', fr: 'Reconnaître une fraction : numérateur et dénominateur.' },
      { ar: 'كتابة عدد عشري على شكل كسر.', fr: 'Écrire un nombre décimal sous forme de fraction.' },
      { ar: 'اختزال كسر باستعمال قواعد قابلية القسمة.', fr: 'Simplifier une fraction à l’aide des critères de divisibilité.' },
      { ar: 'مقارنة كسرين وترتيب كسور.', fr: 'Comparer deux fractions et ranger des fractions.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['fraction', 'quotient', 'numérateur', 'dénominateur', 'simplifier', 'irréductible', 'comparer', 'كسر', 'بسط', 'مقام', 'اختزال'],
    sections: [
      {
        id: 'quotient',
        title: { ar: 'مفهوم الخارج', fr: 'Notion de quotient' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ و $b$ عددين صحيحين طبيعيين مع $b\\neq0$. خارج $a$ على $b$ هو العدد $c$ الذي يحقق $a=b\\times c$، ونرمز له بـ $\\dfrac ab$.\n\nالكتابة $\\dfrac ab$ تسمى **كسراً**؛ $a$ هو **البسط** و $b$ هو **المقام**.',
              fr: 'Soient $a$ et $b$ deux entiers avec $b\\neq0$. Le quotient de $a$ par $b$ est le nombre $c$ tel que $a=b\\times c$ ; on le note $\\dfrac ab$.\n\nL’écriture $\\dfrac ab$ est une **fraction** ; $a$ est le **numérateur** et $b$ le **dénominateur**.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: '• القسمة على $0$ مستحيلة.\n\n• $\\dfrac{3{,}5}{2}$ ليس كسراً (البسط غير صحيح) بل **كتابة كسرية**.\n\n• كل عدد عشري يُكتب على شكل كسر مقامه $10$ أو $100$ أو $1000$…: $3{,}2=\\dfrac{32}{10}$ ، $1{,}12=\\dfrac{112}{100}$ ، $0{,}123=\\dfrac{123}{1000}$.',
              fr: '• La division par $0$ est impossible.\n\n• $\\dfrac{3{,}5}{2}$ n’est pas une fraction (numérateur non entier) mais une **écriture fractionnaire**.\n\n• Tout nombre décimal s’écrit comme une fraction de dénominateur $10$, $100$, $1000$… : $3{,}2=\\dfrac{32}{10}$, $1{,}12=\\dfrac{112}{100}$, $0{,}123=\\dfrac{123}{1000}$.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.5, 8.5],
            y: [-0.5, 2.5],
            polygons: [
              { points: [[0, 0], [5, 0], [5, 2], [0, 2]], color: 'saffron' },
              { points: [[0, 0], [8, 0], [8, 2], [0, 2]], color: 'ink' },
            ],
            segments: [1, 2, 3, 4, 5, 6, 7].map((k) => ({ from: [k, 0] as [number, number], to: [k, 2] as [number, number] })),
            caption: {
              ar: 'مستطيل مقسم إلى $8$ أجزاء متساوية، لُوِّن منها $5$: الجزء الملون يمثل $\\dfrac58$ من المستطيل.',
              fr: 'Un rectangle partagé en $8$ parts égales dont $5$ sont coloriées : la partie coloriée représente $\\dfrac58$ du rectangle.',
            },
          },
        ],
      },
      {
        id: 'egalite',
        title: { ar: 'تساوي خارجين واختزال الكسور', fr: 'Égalité de quotients et simplification' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لا تتغير قيمة الكسر $\\dfrac ab$ إذا ضربنا (أو قسمنا) بسطه ومقامه في (على) نفس العدد غير المنعدم $k$:',
              fr: 'On ne change pas la valeur de $\\dfrac ab$ si l’on multiplie (ou divise) son numérateur et son dénominateur par un même nombre non nul $k$ :',
            },
          },
          { kind: 'formula', tex: '\\frac ab=\\frac{a\\times k}{b\\times k}\\qquad \\frac ab=\\frac{a\\div k}{b\\div k}\\qquad (k\\neq0)' },
          {
            kind: 'example',
            statement: {
              ar: 'اكتب $\\dfrac{1{,}5}{2{,}5}$ على شكل كسر، واختزل $\\dfrac{34}{51}$.',
              fr: 'Écrire $\\dfrac{1{,}5}{2{,}5}$ sous forme de fraction et simplifier $\\dfrac{34}{51}$.',
            },
            steps: [
              { ar: 'نضرب في $2$: $\\dfrac{1{,}5}{2{,}5}=\\dfrac{1{,}5\\times2}{2{,}5\\times2}=\\dfrac35$.', fr: 'On multiplie par $2$ : $\\dfrac{1{,}5}{2{,}5}=\\dfrac{1{,}5\\times2}{2{,}5\\times2}=\\dfrac35$.' },
              { ar: '$34=2\\times17$ و $51=3\\times17$، إذن $\\dfrac{34}{51}=\\dfrac{34\\div17}{51\\div17}=\\dfrac23$.', fr: '$34=2\\times17$ et $51=3\\times17$, donc $\\dfrac{34}{51}=\\dfrac{34\\div17}{51\\div17}=\\dfrac23$.' },
            ],
          },
          {
            kind: 'definition',
            title: { ar: 'كسر غير قابل للاختزال', fr: 'Fraction irréductible' },
            content: {
              ar: 'نقول إن كسراً **غير قابل للاختزال** إذا لم يكن لبسطه ومقامه قاسم مشترك غير $1$.',
              fr: 'Une fraction est **irréductible** si son numérateur et son dénominateur n’ont pas d’autre diviseur commun que $1$.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: 'يقبل عدد القسمة على $2$ إذا كان رقم وحداته $0$ أو $2$ أو $4$ أو $6$ أو $8$.', fr: 'Un nombre est divisible par $2$ s’il se termine par $0$, $2$, $4$, $6$ ou $8$.' },
              { ar: 'يقبل القسمة على $5$ إذا كان رقم وحداته $0$ أو $5$.', fr: 'Il est divisible par $5$ s’il se termine par $0$ ou $5$.' },
              { ar: 'يقبل القسمة على $3$ إذا كان مجموع أرقامه يقبل القسمة على $3$.', fr: 'Il est divisible par $3$ si la somme de ses chiffres est divisible par $3$.' },
              { ar: 'يقبل القسمة على $9$ إذا كان مجموع أرقامه يقبل القسمة على $9$.', fr: 'Il est divisible par $9$ si la somme de ses chiffres est divisible par $9$.' },
            ],
          },
        ],
      },
      {
        id: 'comparaison',
        title: { ar: 'مقارنة الكسور', fr: 'Comparaison des fractions' },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'نفس المقام', fr: 'Même dénominateur' },
            content: {
              ar: 'إذا كان لكسرين نفس المقام، فأصغرهما هو الذي له **أصغر بسط**. مثال: $\\dfrac83<\\dfrac{13}3$ لأن $8<13$.',
              fr: 'Si deux fractions ont le même dénominateur, la plus petite est celle qui a le **plus petit numérateur**. Exemple : $\\dfrac83<\\dfrac{13}3$ car $8<13$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'نفس البسط', fr: 'Même numérateur' },
            content: {
              ar: 'إذا كان لكسرين نفس البسط، فأكبرهما هو الذي له **أصغر مقام**. مثال: $\\dfrac38>\\dfrac3{13}$ لأن $8<13$.',
              fr: 'Si deux fractions ont le même numérateur, la plus grande est celle qui a le **plus petit dénominateur**. Exemple : $\\dfrac38>\\dfrac3{13}$ car $8<13$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'مقامان مختلفان', fr: 'Dénominateurs différents' },
            content: {
              ar: 'نوحد المقامين أولاً ثم نقارن البسطين.',
              fr: 'On réduit d’abord au même dénominateur, puis on compare les numérateurs.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المقارنة مع 1', fr: 'Comparaison à 1' },
            content: {
              ar: 'ليكن $a$ و $b$ عددين موجبين غير منعدمين: إذا كان $a<b$ فإن $\\dfrac ab<1$، وإذا كان $a>b$ فإن $\\dfrac ab>1$. مثال: $\\dfrac{2025}{2026}<1<\\dfrac{2027}{2026}$.',
              fr: 'Soient $a$ et $b$ deux nombres positifs non nuls : si $a<b$ alors $\\dfrac ab<1$ ; si $a>b$ alors $\\dfrac ab>1$. Exemple : $\\dfrac{2025}{2026}<1<\\dfrac{2027}{2026}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن $\\dfrac23$ و $\\dfrac75$.', fr: 'Comparer $\\dfrac23$ et $\\dfrac75$.' },
            steps: [
              { ar: 'المقام المشترك $15$: $\\dfrac23=\\dfrac{10}{15}$ و $\\dfrac75=\\dfrac{21}{15}$.', fr: 'Dénominateur commun $15$ : $\\dfrac23=\\dfrac{10}{15}$ et $\\dfrac75=\\dfrac{21}{15}$.' },
              { ar: '$10<21$ إذن $\\dfrac23<\\dfrac75$.', fr: '$10<21$ donc $\\dfrac23<\\dfrac75$.' },
            ],
          },
          {
            kind: 'example',
            title: { ar: 'ترتيب', fr: 'Rangement' },
            statement: { ar: 'رتب تزايدياً: $\\dfrac37$ ؛ $\\dfrac35$ ؛ $\\dfrac3{14}$ ؛ $\\dfrac32$.', fr: 'Ranger dans l’ordre croissant : $\\dfrac37$ ; $\\dfrac35$ ; $\\dfrac3{14}$ ; $\\dfrac32$.' },
            steps: [
              { ar: 'للكسور نفس البسط، فترتب عكس ترتيب مقاماتها: $14>7>5>2$.', fr: 'Même numérateur : l’ordre est l’inverse de celui des dénominateurs : $14>7>5>2$.' },
              { ar: '$\\dfrac3{14}<\\dfrac37<\\dfrac35<\\dfrac32$.', fr: '$\\dfrac3{14}<\\dfrac37<\\dfrac35<\\dfrac32$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\dfrac ab$: $a$ البسط، $b$ المقام، و $b\\neq0$.', fr: '$\\dfrac ab$ : $a$ numérateur, $b$ dénominateur, $b\\neq0$.' },
      { ar: '$\\dfrac ab=\\dfrac{a\\times k}{b\\times k}$ مع $k\\neq0$ (التكبير والاختزال).', fr: '$\\dfrac ab=\\dfrac{a\\times k}{b\\times k}$ avec $k\\neq0$ (amplifier, simplifier).' },
      { ar: 'نفس المقام: نقارن البسطين. نفس البسط: الأصغر مقاماً هو الأكبر.', fr: 'Même dénominateur : on compare les numérateurs. Même numérateur : le plus petit dénominateur donne la plus grande fraction.' },
      { ar: 'مقامان مختلفان: نوحد المقامين أولاً.', fr: 'Dénominateurs différents : réduire d’abord au même dénominateur.' },
    ],
  },
  exercises: [
    {
      id: '1ac-frac-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'عدد عشري على شكل كسر', fr: 'Décimal en fraction' },
      statement: { ar: 'نكتب $1{,}12=\\dfrac{\\ldots}{100}$. ما هو البسط؟', fr: 'On écrit $1{,}12=\\dfrac{\\ldots}{100}$. Quel est le numérateur ?' },
      question: { type: 'numeric', answer: 112 },
      hints: [{ ar: 'رقمان بعد الفاصلة: نضرب في $100$.', fr: 'Deux chiffres après la virgule : on multiplie par $100$.' }],
      solution: [{ ar: '$1{,}12\\times100=112$، إذن $1{,}12=\\dfrac{112}{100}$.', fr: '$1{,}12\\times100=112$, donc $1{,}12=\\dfrac{112}{100}$.' }],
    },
    {
      id: '1ac-frac-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'اختزال كسر', fr: 'Simplifier une fraction' },
      statement: { ar: 'ما هو الشكل غير القابل للاختزال للكسر $\\dfrac{21}{49}$؟', fr: 'Quelle est la forme irréductible de $\\dfrac{21}{49}$ ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$\\dfrac37$', fr: '$\\dfrac37$' },
          { ar: '$\\dfrac7{21}$', fr: '$\\dfrac7{21}$' },
          { ar: '$\\dfrac{21}{49}$', fr: '$\\dfrac{21}{49}$' },
          { ar: '$\\dfrac13$', fr: '$\\dfrac13$' },
        ],
        correct: 0,
      },
      hints: [{ ar: '$21$ و $49$ يقبلان القسمة على $7$.', fr: '$21$ et $49$ sont divisibles par $7$.' }],
      solution: [
        { ar: '$\\dfrac{21}{49}=\\dfrac{21\\div7}{49\\div7}=\\dfrac37$.', fr: '$\\dfrac{21}{49}=\\dfrac{21\\div7}{49\\div7}=\\dfrac37$.' },
        { ar: '$3$ و $7$ ليس لهما قاسم مشترك غير $1$: الكسر غير قابل للاختزال.', fr: '$3$ et $7$ n’ont pas d’autre diviseur commun que $1$ : la fraction est irréductible.' },
      ],
    },
    {
      id: '1ac-frac-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'مقارنة كسرين', fr: 'Comparer deux fractions' },
      statement: { ar: 'قارن $\\dfrac58$ و $\\dfrac34$.', fr: 'Comparer $\\dfrac58$ et $\\dfrac34$.' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$\\dfrac58<\\dfrac34$', fr: '$\\dfrac58<\\dfrac34$' },
          { ar: '$\\dfrac58>\\dfrac34$', fr: '$\\dfrac58>\\dfrac34$' },
          { ar: '$\\dfrac58=\\dfrac34$', fr: '$\\dfrac58=\\dfrac34$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'اكتب $\\dfrac34$ بالمقام $8$.', fr: 'Écris $\\dfrac34$ avec le dénominateur $8$.' }],
      solution: [
        { ar: '$\\dfrac34=\\dfrac{3\\times2}{4\\times2}=\\dfrac68$.', fr: '$\\dfrac34=\\dfrac{3\\times2}{4\\times2}=\\dfrac68$.' },
        { ar: '$5<6$ إذن $\\dfrac58<\\dfrac68=\\dfrac34$.', fr: '$5<6$ donc $\\dfrac58<\\dfrac68=\\dfrac34$.' },
      ],
    },
    {
      id: '1ac-frac-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'المقارنة مع 1', fr: 'Comparer à 1' },
      statement: { ar: 'قارن $\\dfrac{1234}{1235}$ و $\\dfrac{5678}{5677}$.', fr: 'Comparer $\\dfrac{1234}{1235}$ et $\\dfrac{5678}{5677}$.' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$\\dfrac{1234}{1235}<\\dfrac{5678}{5677}$', fr: '$\\dfrac{1234}{1235}<\\dfrac{5678}{5677}$' },
          { ar: '$\\dfrac{1234}{1235}>\\dfrac{5678}{5677}$', fr: '$\\dfrac{1234}{1235}>\\dfrac{5678}{5677}$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'قارن كل كسر مع العدد $1$.', fr: 'Compare chaque fraction à $1$.' }],
      solution: [
        { ar: '$1234<1235$ إذن $\\dfrac{1234}{1235}<1$.', fr: '$1234<1235$ donc $\\dfrac{1234}{1235}<1$.' },
        { ar: '$5678>5677$ إذن $\\dfrac{5678}{5677}>1$.', fr: '$5678>5677$ donc $\\dfrac{5678}{5677}>1$.' },
        { ar: 'إذن $\\dfrac{1234}{1235}<1<\\dfrac{5678}{5677}$.', fr: 'Donc $\\dfrac{1234}{1235}<1<\\dfrac{5678}{5677}$.' },
      ],
    },
  ],
};
