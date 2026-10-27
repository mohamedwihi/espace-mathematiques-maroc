import type { LessonModule } from '@/types';

const lessonId = 'tc-ordre-r';

export const ordre: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'order',
    title: { ar: 'الترتيب في ℝ', fr: 'L’ordre dans ℝ' },
    summary: {
      ar: 'الترتيب والعمليات، المجالات، القيمة المطلقة والمسافة، التأطير والقيم المقربة.',
      fr: 'Ordre et opérations, intervalles, valeur absolue et distance, encadrements et valeurs approchées.',
    },
    objectives: [
      { ar: 'استعمال المجالات.', fr: 'Utiliser les intervalles.' },
      { ar: 'حساب القيمة المطلقة وحل $|x-a|\\le r$.', fr: 'Calculer une valeur absolue et résoudre $|x-a|\\le r$.' },
      { ar: 'تأطير عدد وإعطاء قيمة مقربة.', fr: 'Encadrer un nombre et en donner une valeur approchée.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['ordre', 'intervalle', 'valeur absolue', 'distance', 'encadrement', 'approximation', 'ترتيب', 'مجال', 'قيمة مطلقة', 'تأطير'],
    sections: [
      {
        id: 'intervalles',
        title: { ar: 'المجالات', fr: 'Intervalles' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '$[a;b]=\\{x\\in\\mathbb R\\,/\\,a\\le x\\le b\\}$ ؛ $]a;b[=\\{x\\,/\\,a<x<b\\}$.', fr: '$[a;b]=\\{x\\in\\mathbb R\\,/\\,a\\le x\\le b\\}$ ; $]a;b[=\\{x\\,/\\,a<x<b\\}$.' },
              { ar: '$[a;+\\infty[=\\{x\\,/\\,x\\ge a\\}$ ؛ $]-\\infty;b[=\\{x\\,/\\,x<b\\}$.', fr: '$[a;+\\infty[=\\{x\\,/\\,x\\ge a\\}$ ; $]-\\infty;b[=\\{x\\,/\\,x<b\\}$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'الترتيب والعمليات', fr: 'Ordre et opérations' },
            content: {
              ar: '• $a\\le b\\Rightarrow a+c\\le b+c$.\n\n• $a\\le b$ و $c>0\\Rightarrow ac\\le bc$؛ و $c<0\\Rightarrow ac\\ge bc$.\n\n• إذا كان $0<a\\le b$ فإن $\\dfrac1b\\le\\dfrac1a$ و $a^2\\le b^2$ و $\\sqrt a\\le\\sqrt b$.',
              fr: '• $a\\le b\\Rightarrow a+c\\le b+c$.\n\n• $a\\le b$ et $c>0\\Rightarrow ac\\le bc$ ; et $c<0\\Rightarrow ac\\ge bc$.\n\n• Si $0<a\\le b$ alors $\\dfrac1b\\le\\dfrac1a$, $a^2\\le b^2$ et $\\sqrt a\\le\\sqrt b$.',
            },
          },
        ],
      },
      {
        id: 'valeur-absolue',
        title: { ar: 'القيمة المطلقة', fr: 'Valeur absolue' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '$|x|=x$ إذا كان $x\\ge0$ و $|x|=-x$ إذا كان $x\\le0$. العدد $|x-a|$ هو المسافة بين $x$ و $a$ على المستقيم العددي.',
              fr: '$|x|=x$ si $x\\ge0$ et $|x|=-x$ si $x\\le0$. Le nombre $|x-a|$ est la distance entre $x$ et $a$ sur la droite numérique.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• $|x|=r\\iff x=r$ أو $x=-r$ (مع $r\\ge0$).\n\n• $|x-a|\\le r\\iff a-r\\le x\\le a+r\\iff x\\in[a-r;a+r]$.\n\n• $|xy|=|x||y|$ و $|x+y|\\le|x|+|y|$.',
              fr: '• $|x|=r\\iff x=r$ ou $x=-r$ (avec $r\\ge0$).\n\n• $|x-a|\\le r\\iff a-r\\le x\\le a+r\\iff x\\in[a-r;a+r]$.\n\n• $|xy|=|x||y|$ et $|x+y|\\le|x|+|y|$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $|x-2|\\le3$.', fr: 'Résoudre $|x-2|\\le3$.' },
            steps: [{ ar: '$-1\\le x\\le5$ أي $x\\in[-1;5]$.', fr: '$-1\\le x\\le5$, soit $x\\in[-1;5]$.' }],
          },
        ],
      },
      {
        id: 'approximation',
        title: { ar: 'التأطير والقيم المقربة', fr: 'Encadrement et approximation' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'إذا كان $a\\le x\\le b$ مع $b-a=r$، فإن $a$ قيمة مقربة لـ $x$ بالنقصان إلى $r$، و $b$ قيمة مقربة بالزيادة إلى $r$. مثال: $1{,}41\\le\\sqrt2\\le1{,}42$.',
              fr: 'Si $a\\le x\\le b$ avec $b-a=r$, alors $a$ est une valeur approchée de $x$ par défaut à $r$ près, et $b$ par excès. Exemple : $1{,}41\\le\\sqrt2\\le1{,}42$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$|x-a|\\le r\\iff x\\in[a-r;a+r]$.', fr: '$|x-a|\\le r\\iff x\\in[a-r;a+r]$.' },
      { ar: 'الضرب في سالب يقلب الترتيب.', fr: 'Multiplier par un négatif renverse l’ordre.' },
    ],
  },
  exercises: [
    {
      id: 'tc-ord-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'قيم مطلقة', fr: 'Valeurs absolues' },
      statement: { ar: 'احسب $|-5|+|3-7|$.', fr: 'Calculer $|-5|+|3-7|$.' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: '$|3-7|=|-4|=4$.', fr: '$|3-7|=|-4|=4$.' }],
      solution: [{ ar: '$5+4=9$.', fr: '$5+4=9$.' }],
    },
    {
      id: 'tc-ord-02',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'متراجحة بقيمة مطلقة', fr: 'Inéquation avec valeur absolue' },
      statement: { ar: 'ما مجموعة حلول $|x+1|<4$؟', fr: 'Quel est l’ensemble des solutions de $|x+1|<4$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$]-5;3[$', fr: '$]-5;3[$' }, { ar: '$[-5;3]$', fr: '$[-5;3]$' }, { ar: '$]-3;5[$', fr: '$]-3;5[$' }, { ar: '$]-\\infty;3[$', fr: '$]-\\infty;3[$' }],
        correct: 0,
      },
      hints: [{ ar: '$|x-(-1)|<4$.', fr: '$|x-(-1)|<4$.' }],
      solution: [{ ar: '$-1-4<x<-1+4$ أي $x\\in]-5;3[$.', fr: '$-1-4<x<-1+4$, soit $x\\in]-5;3[$.' }],
    },
    {
      id: 'tc-ord-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تأطير خارج', fr: 'Encadrer un quotient' },
      statement: { ar: '$2\\le x\\le3$ و $1\\le y\\le2$. ما الحد الأعلى في تأطير $\\dfrac xy$؟', fr: '$2\\le x\\le3$ et $1\\le y\\le2$. Quelle est la borne supérieure de l’encadrement de $\\dfrac xy$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\dfrac12\\le\\dfrac1y\\le1$.', fr: '$\\dfrac12\\le\\dfrac1y\\le1$.' }],
      solution: [{ ar: '$2\\times\\dfrac12\\le\\dfrac xy\\le3\\times1$ أي $1\\le\\dfrac xy\\le3$.', fr: '$2\\times\\dfrac12\\le\\dfrac xy\\le3\\times1$, soit $1\\le\\dfrac xy\\le3$.' }],
    },
    {
      id: 'tc-ord-04',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'معادلة بقيمة مطلقة', fr: 'Équation avec valeur absolue' },
      statement: { ar: 'حل $|x-3|=5$.', fr: 'Résoudre $|x-3|=5$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\{-2;8\\}$', fr: '$\\{-2;8\\}$' }, { ar: '$\\{8\\}$', fr: '$\\{8\\}$' }, { ar: '$\\{2;-8\\}$', fr: '$\\{2;-8\\}$' }, { ar: '$\\{-5;5\\}$', fr: '$\\{-5;5\\}$' }],
        correct: 0,
      },
      hints: [{ ar: '$x-3=5$ أو $x-3=-5$.', fr: '$x-3=5$ ou $x-3=-5$.' }],
      solution: [{ ar: '$x=8$ أو $x=-2$.', fr: '$x=8$ ou $x=-2$.' }],
    },
  ],
};
