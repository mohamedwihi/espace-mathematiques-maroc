import type { LessonModule } from '@/types';

const lessonId = 'tc-equations-systemes';

export const equationsSystemes: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'eq2',
    title: { ar: 'المعادلات والمتراجحات والنظمات', fr: 'Équations, inéquations et systèmes' },
    summary: {
      ar: 'معادلات الدرجة الثانية والمميز، المجموع والجداء، إشارة ثلاثية الحدود، المتراجحات، ونظمة معادلتين بطريقة المحددة.',
      fr: 'Équations du second degré et discriminant, somme et produit, signe du trinôme, inéquations, systèmes par la méthode du déterminant.',
    },
    objectives: [
      { ar: 'حل معادلة من الدرجة الثانية.', fr: 'Résoudre une équation du second degré.' },
      { ar: 'دراسة إشارة ثلاثية الحدود وحل متراجحة.', fr: 'Étudier le signe d’un trinôme et résoudre une inéquation.' },
      { ar: 'حل نظمة بطريقة المحددة.', fr: 'Résoudre un système par la méthode du déterminant.' },
    ],
    durationMinutes: 45,
    reviewed: false,
    featured: true,
    keywords: ['second degré', 'discriminant', 'trinôme', 'inéquation', 'système', 'Cramer', 'الدرجة الثانية', 'مميز', 'ثلاثية الحدود', 'نظمة'],
    sections: [
      {
        id: 'second-degre',
        title: { ar: 'معادلة من الدرجة الثانية', fr: 'Équation du second degré' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لتكن $ax^2+bx+c=0$ مع $a\\neq0$، و $\\Delta=b^2-4ac$:\n\n• $\\Delta>0$: حلان $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ و $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\n\n• $\\Delta=0$: حل وحيد $x_0=-\\dfrac b{2a}$.\n\n• $\\Delta<0$: لا حل في $\\mathbb R$.',
              fr: 'Soit $ax^2+bx+c=0$ avec $a\\neq0$ et $\\Delta=b^2-4ac$ :\n\n• $\\Delta>0$ : deux solutions $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ et $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\n\n• $\\Delta=0$ : une solution $x_0=-\\dfrac b{2a}$.\n\n• $\\Delta<0$ : aucune solution dans $\\mathbb R$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المجموع والجداء', fr: 'Somme et produit' },
            content: {
              ar: 'إذا كان $\\Delta\\ge0$: $x_1+x_2=-\\dfrac ba$ و $x_1x_2=\\dfrac ca$، و $ax^2+bx+c=a(x-x_1)(x-x_2)$.',
              fr: 'Si $\\Delta\\ge0$ : $x_1+x_2=-\\dfrac ba$, $x_1x_2=\\dfrac ca$, et $ax^2+bx+c=a(x-x_1)(x-x_2)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $2x^2-3x-2=0$.', fr: 'Résoudre $2x^2-3x-2=0$.' },
            steps: [
              { ar: '$\\Delta=9+16=25$.', fr: '$\\Delta=9+16=25$.' },
              { ar: '$x_1=\\dfrac{3-5}4=-\\dfrac12$ و $x_2=\\dfrac{3+5}4=2$.', fr: '$x_1=\\dfrac{3-5}4=-\\dfrac12$ et $x_2=\\dfrac{3+5}4=2$.' },
            ],
          },
        ],
      },
      {
        id: 'signe',
        title: { ar: 'إشارة ثلاثية الحدود', fr: 'Signe du trinôme' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'إشارة $ax^2+bx+c$ هي إشارة $a$، **إلا** بين الجذرين (عندما $\\Delta>0$) حيث تكون إشارتها عكس إشارة $a$.',
              fr: '$ax^2+bx+c$ a le signe de $a$, **sauf** entre les racines (quand $\\Delta>0$), où il est du signe contraire de $a$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $x^2-x-6\\le0$.', fr: 'Résoudre $x^2-x-6\\le0$.' },
            steps: [
              { ar: 'الجذران $-2$ و $3$، و $a=1>0$.', fr: 'Racines $-2$ et $3$, avec $a=1>0$.' },
              { ar: 'الثلاثية سالبة بين الجذرين: $S=[-2;3]$.', fr: 'Le trinôme est négatif entre les racines : $S=[-2;3]$.' },
            ],
          },
        ],
      },
      {
        id: 'systemes',
        title: { ar: 'النظمات', fr: 'Systèmes' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'النظمة $\\begin{cases}ax+by=c\\\\a\'x+b\'y=c\'\\end{cases}$ محددتها $D=ab\'-a\'b$. إذا كان $D\\neq0$ فلها حل وحيد: $x=\\dfrac{cb\'-c\'b}{D}$ و $y=\\dfrac{ac\'-a\'c}{D}$.',
              fr: 'Le système $\\begin{cases}ax+by=c\\\\a\'x+b\'y=c\'\\end{cases}$ a pour déterminant $D=ab\'-a\'b$. Si $D\\neq0$, il a une unique solution : $x=\\dfrac{cb\'-c\'b}{D}$ et $y=\\dfrac{ac\'-a\'c}{D}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}$.', fr: 'Résoudre $\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}$.' },
            steps: [
              { ar: '$D=2\\times(-1)-1\\times1=-3$.', fr: '$D=2\\times(-1)-1\\times1=-3$.' },
              { ar: '$x=\\dfrac{5\\times(-1)-1\\times1}{-3}=2$ و $y=\\dfrac{2\\times1-1\\times5}{-3}=1$.', fr: '$x=\\dfrac{5\\times(-1)-1\\times1}{-3}=2$ et $y=\\dfrac{2\\times1-1\\times5}{-3}=1$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\Delta=b^2-4ac$ يحدد عدد الحلول.', fr: '$\\Delta=b^2-4ac$ donne le nombre de solutions.' },
      { ar: 'إشارة $a$ خارج الجذرين.', fr: 'Signe de $a$ à l’extérieur des racines.' },
    ],
  },
  exercises: [
    {
      id: 'tc-equ-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معادلة من الدرجة الثانية', fr: 'Équation du second degré' },
      statement: { ar: 'حل $x^2-5x+6=0$.', fr: 'Résoudre $x^2-5x+6=0$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\{2;3\\}$', fr: '$\\{2;3\\}$' }, { ar: '$\\{-2;-3\\}$', fr: '$\\{-2;-3\\}$' }, { ar: '$\\{1;6\\}$', fr: '$\\{1;6\\}$' }, { ar: 'لا حل', fr: 'Aucune solution' }],
        correct: 0,
      },
      hints: [{ ar: '$\\Delta=25-24=1$.', fr: '$\\Delta=25-24=1$.' }],
      solution: [{ ar: '$x=\\dfrac{5\\pm1}2$ أي $2$ أو $3$.', fr: '$x=\\dfrac{5\\pm1}2$, soit $2$ ou $3$.' }],
    },
    {
      id: 'tc-equ-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'مجموع الجذرين', fr: 'Somme des racines' },
      statement: { ar: 'المعادلة $3x^2-12x+1=0$ لها جذران. ما مجموعهما؟', fr: 'L’équation $3x^2-12x+1=0$ a deux racines. Quelle est leur somme ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$-\\dfrac ba$.', fr: '$-\\dfrac ba$.' }],
      solution: [{ ar: '$\\Delta=144-12>0$ و $x_1+x_2=\\dfrac{12}3=4$.', fr: '$\\Delta=144-12>0$ et $x_1+x_2=\\dfrac{12}3=4$.' }],
    },
    {
      id: 'tc-equ-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'متراجحة', fr: 'Inéquation' },
      statement: { ar: 'ما مجموعة حلول $x^2+2x-3>0$؟', fr: 'Quel est l’ensemble des solutions de $x^2+2x-3>0$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$]-\\infty;-3[\\cup]1;+\\infty[$', fr: '$]-\\infty;-3[\\cup]1;+\\infty[$' }, { ar: '$]-3;1[$', fr: '$]-3;1[$' }, { ar: '$]-1;3[$', fr: '$]-1;3[$' }, { ar: '$\\mathbb R$', fr: '$\\mathbb R$' }],
        correct: 0,
      },
      hints: [{ ar: 'الجذران $-3$ و $1$.', fr: 'Les racines sont $-3$ et $1$.' }],
      solution: [{ ar: '$a>0$: الثلاثية موجبة خارج الجذرين.', fr: '$a>0$ : le trinôme est positif à l’extérieur des racines.' }],
    },
    {
      id: 'tc-equ-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'نظمة', fr: 'Système' },
      statement: { ar: 'حل $\\begin{cases}3x+2y=12\\\\x-y=-1\\end{cases}$. ما قيمة $y$؟', fr: 'Résoudre $\\begin{cases}3x+2y=12\\\\x-y=-1\\end{cases}$. Que vaut $y$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$D=3\\times(-1)-1\\times2=-5$.', fr: '$D=3\\times(-1)-1\\times2=-5$.' }],
      solution: [
        { ar: '$y=\\dfrac{3\\times(-1)-1\\times12}{-5}=\\dfrac{-15}{-5}=3$.', fr: '$y=\\dfrac{3\\times(-1)-1\\times12}{-5}=\\dfrac{-15}{-5}=3$.' },
        { ar: 'و $x=y-1=2$.', fr: 'et $x=y-1=2$.' },
      ],
    },
  ],
};
