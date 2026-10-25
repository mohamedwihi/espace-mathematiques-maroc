import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-relatifs-multiplication';

export const relatifsMultiplication: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'relative-mul',
    title: { ar: 'ضرب وقسمة الأعداد العشرية النسبية', fr: 'Multiplication et division des nombres décimaux relatifs' },
    summary: {
      ar: 'قاعدة الإشارات، جداء عدة أعداد نسبية، خارج عددين نسبيين وقيمته المقربة.',
      fr: 'Règle des signes, produit de plusieurs relatifs, quotient de deux relatifs et valeur approchée.',
    },
    objectives: [
      { ar: 'حساب جداء عددين نسبيين باستعمال قاعدة الإشارات.', fr: 'Calculer le produit de deux relatifs avec la règle des signes.' },
      { ar: 'تحديد إشارة جداء عدة أعداد نسبية.', fr: 'Déterminer le signe d’un produit de plusieurs relatifs.' },
      { ar: 'حساب خارج عددين نسبيين والتعرف على الكتابة $\\dfrac ab$.', fr: 'Calculer le quotient de deux relatifs et reconnaître l’écriture $\\dfrac ab$.' },
      { ar: 'تأطير خارج وإعطاء قيمة مقربة له.', fr: 'Encadrer un quotient et en donner une valeur approchée.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['relatif', 'produit', 'quotient', 'règle des signes', 'valeur approchée', 'encadrement', 'ضرب', 'قسمة', 'قاعدة الإشارات'],
    sections: [
      {
        id: 'produit',
        title: { ar: 'جداء عددين نسبيين', fr: 'Produit de deux relatifs' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'نلاحظ أن $(-3)\\times4=(-3)+(-3)+(-3)+(-3)=-12$: جداء عدد سالب في عدد موجب سالب.',
              fr: 'On remarque que $(-3)\\times4=(-3)+(-3)+(-3)+(-3)=-12$ : le produit d’un négatif par un positif est négatif.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'قاعدة الإشارات', fr: 'Règle des signes' },
            content: {
              ar: '• جداء عددين **لهما نفس الإشارة** موجب.\n\n• جداء عددين **مختلفي الإشارة** سالب.\n\nلضرب عددين نسبيين: نضرب المسافتين إلى الصفر، ثم نحدد الإشارة بقاعدة الإشارات.',
              fr: '• Le produit de deux nombres **de même signe** est positif.\n\n• Le produit de deux nombres **de signes contraires** est négatif.\n\nPour multiplier deux relatifs : on multiplie les distances à zéro, puis on détermine le signe avec la règle des signes.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $A=3{,}2\\times(-5)$ و $B=(-7{,}1)\\times(-5{,}12)$.', fr: 'Calculer $A=3{,}2\\times(-5)$ et $B=(-7{,}1)\\times(-5{,}12)$.' },
            steps: [
              { ar: 'إشارتان مختلفتان: $A=-(3{,}2\\times5)=-16$.', fr: 'Signes contraires : $A=-(3{,}2\\times5)=-16$.' },
              { ar: 'نفس الإشارة: $B=+(7{,}1\\times5{,}12)=36{,}352$.', fr: 'Même signe : $B=+(7{,}1\\times5{,}12)=36{,}352$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'حالات خاصة', fr: 'Cas particuliers' },
            content: {
              ar: 'لكل عدد نسبي $a$: $1\\times a=a$ ، $0\\times a=0$ ، $(-1)\\times a=-a$. ونكتب $-8x$ بدل $(-8)\\times x$.',
              fr: 'Pour tout relatif $a$ : $1\\times a=a$, $0\\times a=0$, $(-1)\\times a=-a$. On écrit $-8x$ au lieu de $(-8)\\times x$.',
            },
          },
        ],
      },
      {
        id: 'plusieurs',
        title: { ar: 'جداء عدة أعداد نسبية', fr: 'Produit de plusieurs relatifs' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'إذا كان عدد العوامل السالبة **زوجياً** فالجداء موجب، وإذا كان **فردياً** فالجداء سالب.',
              fr: 'Si le nombre de facteurs négatifs est **pair**, le produit est positif ; s’il est **impair**, le produit est négatif.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $A=(-2)\\times7\\times(-2{,}5)\\times(-9{,}2)\\times3{,}2$.', fr: 'Calculer $A=(-2)\\times7\\times(-2{,}5)\\times(-9{,}2)\\times3{,}2$.' },
            steps: [
              { ar: 'ثلاثة عوامل سالبة (عدد فردي): الجداء سالب.', fr: 'Trois facteurs négatifs (impair) : le produit est négatif.' },
              { ar: '$2\\times7\\times2{,}5\\times9{,}2\\times3{,}2=1030{,}4$، إذن $A=-1030{,}4$.', fr: '$2\\times7\\times2{,}5\\times9{,}2\\times3{,}2=1030{,}4$, donc $A=-1030{,}4$.' },
            ],
          },
        ],
      },
      {
        id: 'quotient',
        title: { ar: 'خارج عددين نسبيين', fr: 'Quotient de deux relatifs' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ و $b$ عددين نسبيين مع $b\\neq0$. العدد $c$ الذي يحقق $a=b\\times c$ يسمى خارج $a$ على $b$، ونكتب $c=\\dfrac ab=a\\div b$.',
              fr: 'Soient $a$ et $b$ deux relatifs avec $b\\neq0$. Le nombre $c$ tel que $a=b\\times c$ est le quotient de $a$ par $b$ ; on écrit $c=\\dfrac ab=a\\div b$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'إشارة الخارج', fr: 'Signe d’un quotient' },
            content: {
              ar: 'إذا كان $a$ و $b$ لهما نفس الإشارة فإن $\\dfrac ab$ موجب، وإذا كانا مختلفي الإشارة فإن $\\dfrac ab$ سالب. ولدينا: $-\\dfrac ab=\\dfrac{-a}b=\\dfrac a{-b}$.',
              fr: 'Si $a$ et $b$ sont de même signe, $\\dfrac ab$ est positif ; s’ils sont de signes contraires, $\\dfrac ab$ est négatif. De plus : $-\\dfrac ab=\\dfrac{-a}b=\\dfrac a{-b}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $(-25)\\div5$ و $\\dfrac{27}{-3}$ و $\\dfrac{-100}{-2}$.', fr: 'Calculer $(-25)\\div5$, $\\dfrac{27}{-3}$ et $\\dfrac{-100}{-2}$.' },
            steps: [
              { ar: '$(-25)\\div5=-5$ لأن $5\\times(-5)=-25$.', fr: '$(-25)\\div5=-5$ car $5\\times(-5)=-25$.' },
              { ar: '$\\dfrac{27}{-3}=-9$ لأن $(-3)\\times(-9)=27$.', fr: '$\\dfrac{27}{-3}=-9$ car $(-3)\\times(-9)=27$.' },
              { ar: '$\\dfrac{-100}{-2}=50$ لأن $(-2)\\times50=-100$.', fr: '$\\dfrac{-100}{-2}=50$ car $(-2)\\times50=-100$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'حالات خاصة', fr: 'Cas particuliers' },
            content: {
              ar: 'لكل عدد $a\\neq0$: $\\dfrac a1=a$ ، $\\dfrac aa=1$ ، $\\dfrac0a=0$.',
              fr: 'Pour tout $a\\neq0$ : $\\dfrac a1=a$, $\\dfrac aa=1$, $\\dfrac0a=0$.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'قيمة مقربة لخارج', fr: 'Valeur approchée d’un quotient' },
            statement: { ar: 'أعط تأطيراً للعدد $\\dfrac{-18}7$ إلى $10^{-2}$.', fr: 'Encadrer $\\dfrac{-18}7$ au centième.' },
            steps: [
              { ar: 'القسمة تعطي $18\\div7\\approx2{,}5714$، والخارج سالب: $\\dfrac{-18}7\\approx-2{,}5714$.', fr: 'La division donne $18\\div7\\approx2{,}5714$ ; le quotient est négatif : $\\dfrac{-18}7\\approx-2{,}5714$.' },
              { ar: '$-2{,}58<\\dfrac{-18}7<-2{,}57$.', fr: '$-2{,}58<\\dfrac{-18}7<-2{,}57$.' },
              { ar: '$-2{,}58$ قيمة مقربة بالنقصان، و $-2{,}57$ قيمة مقربة بالزيادة إلى $10^{-2}$.', fr: '$-2{,}58$ est une valeur approchée au centième par défaut et $-2{,}57$ par excès.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نفس الإشارة ← موجب ؛ إشارتان مختلفتان ← سالب (للجداء والخارج).', fr: 'Même signe → positif ; signes contraires → négatif (produit et quotient).' },
      { ar: 'عدد زوجي من العوامل السالبة ← جداء موجب.', fr: 'Nombre pair de facteurs négatifs → produit positif.' },
      { ar: '$\\dfrac ab=c$ يعني $a=b\\times c$ مع $b\\neq0$.', fr: '$\\dfrac ab=c$ signifie $a=b\\times c$ avec $b\\neq0$.' },
      { ar: '$-\\dfrac ab=\\dfrac{-a}b=\\dfrac a{-b}$.', fr: '$-\\dfrac ab=\\dfrac{-a}b=\\dfrac a{-b}$.' },
    ],
  },
  exercises: [
    {
      id: '1ac-relmul-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'جداء عددين سالبين', fr: 'Produit de deux négatifs' },
      statement: { ar: 'احسب $E=(-3{,}1)\\times(-0{,}2)$.', fr: 'Calculer $E=(-3{,}1)\\times(-0{,}2)$.' },
      question: { type: 'numeric', answer: 0.62, tolerance: 1e-9 },
      hints: [{ ar: 'نفس الإشارة: الجداء موجب.', fr: 'Même signe : le produit est positif.' }],
      solution: [{ ar: '$3{,}1\\times0{,}2=0{,}62$ والجداء موجب: $E=0{,}62$.', fr: '$3{,}1\\times0{,}2=0{,}62$ et le produit est positif : $E=0{,}62$.' }],
    },
    {
      id: '1ac-relmul-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'إشارة جداء', fr: 'Signe d’un produit' },
      statement: { ar: 'ما إشارة $D=(-5)\\times(-6)\\times(-41{,}2)\\times(-8)\\times(-83)\\times(-9)$؟', fr: 'Quel est le signe de $D=(-5)\\times(-6)\\times(-41{,}2)\\times(-8)\\times(-83)\\times(-9)$ ?' },
      question: { type: 'mcq', options: [{ ar: 'موجب', fr: 'Positif' }, { ar: 'سالب', fr: 'Négatif' }], correct: 0 },
      hints: [{ ar: 'عُدّ العوامل السالبة.', fr: 'Compte les facteurs négatifs.' }],
      solution: [{ ar: 'يوجد $6$ عوامل سالبة، وهو عدد زوجي، إذن $D$ موجب.', fr: 'Il y a $6$ facteurs négatifs, nombre pair, donc $D$ est positif.' }],
    },
    {
      id: '1ac-relmul-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'جداء ثلاثة أعداد', fr: 'Produit de trois nombres' },
      statement: { ar: 'احسب $D=3\\times(-4{,}2)\\times(-9{,}2)$.', fr: 'Calculer $D=3\\times(-4{,}2)\\times(-9{,}2)$.' },
      question: { type: 'numeric', answer: 115.92, tolerance: 1e-9 },
      hints: [{ ar: 'عاملان سالبان: الجداء موجب.', fr: 'Deux facteurs négatifs : le produit est positif.' }],
      solution: [
        { ar: '$3\\times4{,}2=12{,}6$ ثم $12{,}6\\times9{,}2=115{,}92$.', fr: '$3\\times4{,}2=12{,}6$ puis $12{,}6\\times9{,}2=115{,}92$.' },
        { ar: 'عدد العوامل السالبة زوجي: $D=115{,}92$.', fr: 'Nombre pair de facteurs négatifs : $D=115{,}92$.' },
      ],
    },
    {
      id: '1ac-relmul-04',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'خارج عددين سالبين', fr: 'Quotient de deux négatifs' },
      statement: { ar: 'احسب $G=(-95)\\div(-10)$.', fr: 'Calculer $G=(-95)\\div(-10)$.' },
      question: { type: 'numeric', answer: 9.5, tolerance: 1e-9 },
      hints: [{ ar: 'نفس الإشارة: الخارج موجب.', fr: 'Même signe : le quotient est positif.' }],
      solution: [{ ar: '$95\\div10=9{,}5$ والخارج موجب: $G=9{,}5$.', fr: '$95\\div10=9{,}5$ et le quotient est positif : $G=9{,}5$.' }],
    },
    {
      id: '1ac-relmul-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'قيمة مقربة', fr: 'Valeur approchée' },
      statement: { ar: 'أعط القيمة المقربة بالنقصان إلى $0{,}1$ للعدد $\\dfrac{11}3$.', fr: 'Donner la valeur approchée par défaut au dixième de $\\dfrac{11}3$.' },
      question: { type: 'numeric', answer: 3.6, tolerance: 1e-9 },
      hints: [{ ar: '$11\\div3=3{,}666\\ldots$', fr: '$11\\div3=3{,}666\\ldots$' }],
      solution: [
        { ar: '$\\dfrac{11}3=3{,}666\\ldots$، إذن $3{,}6<\\dfrac{11}3<3{,}7$.', fr: '$\\dfrac{11}3=3{,}666\\ldots$, donc $3{,}6<\\dfrac{11}3<3{,}7$.' },
        { ar: 'القيمة المقربة بالنقصان إلى $0{,}1$ هي $3{,}6$ (وبالزيادة $3{,}7$).', fr: 'La valeur approchée par défaut au dixième est $3{,}6$ (par excès : $3{,}7$).' },
      ],
    },
  ],
};
