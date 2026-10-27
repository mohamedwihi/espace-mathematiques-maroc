import type { LessonModule } from '@/types';

const lessonId = 'tc-polynomes';

export const polynomes: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'polynomials',
    title: { ar: 'الحدوديات', fr: 'Les polynômes' },
    summary: {
      ar: 'تعريف الحدودية ودرجتها، تساوي حدوديتين، جذر حدودية، القسمة على $x-a$ وتعميل حدودية.',
      fr: 'Définition et degré d’un polynôme, égalité de polynômes, racine, division par $x-a$ et factorisation.',
    },
    objectives: [
      { ar: 'تحديد درجة حدودية.', fr: 'Déterminer le degré d’un polynôme.' },
      { ar: 'التعرف على جذر حدودية والقسمة على $x-a$.', fr: 'Reconnaître une racine et diviser par $x-a$.' },
      { ar: 'تعميل حدودية.', fr: 'Factoriser un polynôme.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['polynôme', 'degré', 'racine', 'division', 'factorisation', 'Horner', 'حدودية', 'درجة', 'جذر', 'تعميل'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف', fr: 'Définition' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الحدودية هي تعبير من الشكل $P(x)=a_nx^n+\\dots+a_1x+a_0$ مع $a_n\\neq0$. العدد $n$ هو **درجتها**. تتساوى حدوديتان إذا كانت لهما نفس الدرجة ونفس المعاملات.',
              fr: 'Un polynôme est une expression $P(x)=a_nx^n+\\dots+a_1x+a_0$ avec $a_n\\neq0$ ; $n$ est son **degré**. Deux polynômes sont égaux s’ils ont même degré et mêmes coefficients.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'درجة جداء حدوديتين تساوي مجموع درجتيهما: $\\deg(PQ)=\\deg P+\\deg Q$.',
              fr: 'Le degré d’un produit est la somme des degrés : $\\deg(PQ)=\\deg P+\\deg Q$.',
            },
          },
        ],
      },
      {
        id: 'racine',
        title: { ar: 'الجذر والتعميل', fr: 'Racine et factorisation' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'يكون $a$ **جذراً** للحدودية $P$ إذا كان $P(a)=0$. في هذه الحالة $P(x)$ يقبل القسمة على $x-a$: يوجد $Q$ بحيث $P(x)=(x-a)Q(x)$ و $\\deg Q=\\deg P-1$. باقي قسمة $P(x)$ على $x-a$ هو $P(a)$.',
              fr: '$a$ est une **racine** de $P$ si $P(a)=0$. Alors $P(x)$ est divisible par $x-a$ : il existe $Q$ tel que $P(x)=(x-a)Q(x)$ avec $\\deg Q=\\deg P-1$. Le reste de la division de $P(x)$ par $x-a$ est $P(a)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'عمّل $P(x)=x^3-2x^2-5x+6$.', fr: 'Factoriser $P(x)=x^3-2x^2-5x+6$.' },
            steps: [
              { ar: '$P(1)=1-2-5+6=0$ إذن $1$ جذر.', fr: '$P(1)=1-2-5+6=0$ donc $1$ est racine.' },
              { ar: 'بالقسمة (أو بطريقة هورنر): $P(x)=(x-1)(x^2-x-6)$.', fr: 'Par division (ou Horner) : $P(x)=(x-1)(x^2-x-6)$.' },
              { ar: '$x^2-x-6=(x-3)(x+2)$ إذن $P(x)=(x-1)(x-3)(x+2)$.', fr: '$x^2-x-6=(x-3)(x+2)$ donc $P(x)=(x-1)(x-3)(x+2)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$P(a)=0\\iff(x-a)$ يقسم $P(x)$.', fr: '$P(a)=0\\iff(x-a)$ divise $P(x)$.' },
      { ar: 'باقي القسمة على $x-a$ هو $P(a)$.', fr: 'Le reste de la division par $x-a$ est $P(a)$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-pol-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'درجة جداء', fr: 'Degré d’un produit' },
      statement: { ar: 'ما درجة $(x^2+1)(2x^3-x)$؟', fr: 'Quel est le degré de $(x^2+1)(2x^3-x)$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$2+3$.', fr: '$2+3$.' }],
      solution: [{ ar: 'الدرجة $2+3=5$.', fr: 'Le degré vaut $2+3=5$.' }],
    },
    {
      id: 'tc-pol-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'قيمة حدودية', fr: 'Valeur d’un polynôme' },
      statement: { ar: '$P(x)=2x^3-3x+1$. احسب $P(2)$.', fr: '$P(x)=2x^3-3x+1$. Calculer $P(2)$.' },
      question: { type: 'numeric', answer: 11 },
      hints: [{ ar: '$2\\times8-6+1$.', fr: '$2\\times8-6+1$.' }],
      solution: [{ ar: '$P(2)=16-6+1=11$.', fr: '$P(2)=16-6+1=11$.' }],
    },
    {
      id: 'tc-pol-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'باقي القسمة', fr: 'Reste de la division' },
      statement: { ar: 'ما باقي قسمة $x^2+3x+5$ على $x-1$؟', fr: 'Quel est le reste de la division de $x^2+3x+5$ par $x-1$ ?' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: 'الباقي $P(1)$.', fr: 'Le reste est $P(1)$.' }],
      solution: [{ ar: '$P(1)=1+3+5=9$.', fr: '$P(1)=1+3+5=9$.' }],
    },
    {
      id: 'tc-pol-04',
      lessonId,
      levelId: 'tc',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'تعميل', fr: 'Factorisation' },
      statement: { ar: 'عمّل $P(x)=x^3-7x+6$ علماً أن $1$ جذر لها.', fr: 'Factoriser $P(x)=x^3-7x+6$ sachant que $1$ en est une racine.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(x-1)(x-2)(x+3)$', fr: '$(x-1)(x-2)(x+3)$' }, { ar: '$(x-1)(x+2)(x-3)$', fr: '$(x-1)(x+2)(x-3)$' }, { ar: '$(x-1)^2(x+6)$', fr: '$(x-1)^2(x+6)$' }, { ar: '$(x+1)(x-2)(x-3)$', fr: '$(x+1)(x-2)(x-3)$' }],
        correct: 0,
      },
      hints: [{ ar: '$P(x)=(x-1)(x^2+x-6)$.', fr: '$P(x)=(x-1)(x^2+x-6)$.' }],
      solution: [
        { ar: '$P(x)=(x-1)(x^2+x-6)$.', fr: '$P(x)=(x-1)(x^2+x-6)$.' },
        { ar: '$x^2+x-6=(x-2)(x+3)$ إذن $P(x)=(x-1)(x-2)(x+3)$.', fr: '$x^2+x-6=(x-2)(x+3)$ donc $P(x)=(x-1)(x-2)(x+3)$.' },
      ],
    },
  ],
};
