import type { LessonModule } from '@/types';

const lessonId = 'tc-generalites-fonctions';

export const generalitesFonctions: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'functions',
    title: { ar: 'عموميات حول الدوال العددية', fr: 'Généralités sur les fonctions' },
    summary: {
      ar: 'مجموعة التعريف، الزوجية، التغيرات والقيم القصوى، ودراسة الدوال المرجعية: $x^2$ و $\\frac1x$ و $ax^2+bx+c$.',
      fr: 'Ensemble de définition, parité, variations et extremums, fonctions de référence : $x^2$, $\\frac1x$ et $ax^2+bx+c$.',
    },
    objectives: [
      { ar: 'تحديد مجموعة تعريف دالة.', fr: 'Déterminer l’ensemble de définition d’une fonction.' },
      { ar: 'دراسة زوجية دالة.', fr: 'Étudier la parité d’une fonction.' },
      { ar: 'دراسة تغيرات دالة من الشكل $ax^2+bx+c$.', fr: 'Étudier les variations de $ax^2+bx+c$.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['fonction', 'ensemble de définition', 'paire', 'impaire', 'variations', 'parabole', 'دالة', 'مجموعة التعريف', 'زوجية', 'تغيرات'],
    sections: [
      {
        id: 'domaine',
        title: { ar: 'مجموعة التعريف والزوجية', fr: 'Ensemble de définition et parité' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: 'الحدودية معرفة على $\\mathbb R$.', fr: 'Un polynôme est défini sur $\\mathbb R$.' },
              { ar: '$\\dfrac{P(x)}{Q(x)}$ معرفة إذا كان $Q(x)\\neq0$.', fr: '$\\dfrac{P(x)}{Q(x)}$ est définie si $Q(x)\\neq0$.' },
              { ar: '$\\sqrt{u(x)}$ معرفة إذا كان $u(x)\\ge0$.', fr: '$\\sqrt{u(x)}$ est définie si $u(x)\\ge0$.' },
            ],
          },
          {
            kind: 'definition',
            content: {
              ar: 'لتكن $D_f$ متماثلة بالنسبة لـ $0$. تكون $f$ **زوجية** إذا كان $f(-x)=f(x)$ (منحناها متماثل بالنسبة لمحور الأراتيب)، و**فردية** إذا كان $f(-x)=-f(x)$ (منحناها متماثل بالنسبة للأصل).',
              fr: 'Soit $D_f$ symétrique par rapport à $0$. $f$ est **paire** si $f(-x)=f(x)$ (courbe symétrique par rapport à l’axe des ordonnées), **impaire** si $f(-x)=-f(x)$ (courbe symétrique par rapport à l’origine).',
            },
          },
        ],
      },
      {
        id: 'variations',
        title: { ar: 'التغيرات', fr: 'Variations' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '$f$ **تزايدية** على $I$ إذا كان لكل $a<b$ من $I$: $f(a)\\le f(b)$، و**تناقصية** إذا كان $f(a)\\ge f(b)$. نقول إن $f(a)$ **قيمة دنوية** لـ $f$ على $I$ إذا كان $f(x)\\ge f(a)$ لكل $x\\in I$.',
              fr: '$f$ est **croissante** sur $I$ si pour tous $a<b$ de $I$ : $f(a)\\le f(b)$ ; **décroissante** si $f(a)\\ge f(b)$. $f(a)$ est un **minimum** de $f$ sur $I$ si $f(x)\\ge f(a)$ pour tout $x\\in I$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الدالة $ax^2+bx+c$', fr: 'La fonction $ax^2+bx+c$' },
            content: {
              ar: 'منحناها شلجم رأسه النقطة ذات الأفصول $\\alpha=-\\dfrac b{2a}$. إذا كان $a>0$: $f$ تناقصية على $]-\\infty;\\alpha]$ وتزايدية على $[\\alpha;+\\infty[$، و $f(\\alpha)$ قيمة دنوية.',
              fr: 'Sa courbe est une parabole de sommet d’abscisse $\\alpha=-\\dfrac b{2a}$. Si $a>0$ : $f$ décroît sur $]-\\infty;\\alpha]$, croît sur $[\\alpha;+\\infty[$, et $f(\\alpha)$ est un minimum.',
            },
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => x * x - 4 * x + 1, label: 'f(x)=x^2-4x+1', color: 'brand' },
              { fn: (x: number) => 1 / x, label: 'g(x)=\\frac1x', color: 'saffron', domain: [0.15, 6] },
            ],
            points: [{ x: 2, y: -3, label: 'S(2;-3)' }],
            x: [-2, 6],
            y: [-4, 6],
            caption: { ar: 'رأس الشلجم $S(2;-3)$: قيمة دنوية $-3$.', fr: 'Sommet de la parabole $S(2;-3)$ : minimum $-3$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: 'زوجية: $f(-x)=f(x)$؛ فردية: $f(-x)=-f(x)$.', fr: 'Paire : $f(-x)=f(x)$ ; impaire : $f(-x)=-f(x)$.' },
      { ar: 'رأس الشلجم أفصوله $-\\dfrac b{2a}$.', fr: 'Le sommet de la parabole a pour abscisse $-\\dfrac b{2a}$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-fon-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مجموعة التعريف', fr: 'Ensemble de définition' },
      statement: { ar: 'ما مجموعة تعريف $f(x)=\\sqrt{x-3}$؟', fr: 'Quel est l’ensemble de définition de $f(x)=\\sqrt{x-3}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$[3;+\\infty[$', fr: '$[3;+\\infty[$' }, { ar: '$]3;+\\infty[$', fr: '$]3;+\\infty[$' }, { ar: '$\\mathbb R$', fr: '$\\mathbb R$' }, { ar: '$]-\\infty;3]$', fr: '$]-\\infty;3]$' }],
        correct: 0,
      },
      hints: [{ ar: '$x-3\\ge0$.', fr: '$x-3\\ge0$.' }],
      solution: [{ ar: '$D_f=[3;+\\infty[$.', fr: '$D_f=[3;+\\infty[$.' }],
    },
    {
      id: 'tc-fon-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'زوجية', fr: 'Parité' },
      statement: { ar: 'ما زوجية $f(x)=x^3-x$؟', fr: 'Quelle est la parité de $f(x)=x^3-x$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'فردية', fr: 'Impaire' }, { ar: 'زوجية', fr: 'Paire' }, { ar: 'لا زوجية ولا فردية', fr: 'Ni paire ni impaire' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب $f(-x)$.', fr: 'Calcule $f(-x)$.' }],
      solution: [{ ar: '$f(-x)=-x^3+x=-f(x)$ و $D_f=\\mathbb R$ متماثلة: $f$ فردية.', fr: '$f(-x)=-x^3+x=-f(x)$ et $D_f=\\mathbb R$ est symétrique : $f$ est impaire.' }],
    },
    {
      id: 'tc-fon-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'قيمة دنوية', fr: 'Minimum' },
      statement: { ar: 'ما القيمة الدنوية للدالة $f(x)=x^2-4x+1$؟', fr: 'Quel est le minimum de $f(x)=x^2-4x+1$ ?' },
      question: { type: 'numeric', answer: -3 },
      hints: [{ ar: '$\\alpha=-\\dfrac{-4}{2}=2$.', fr: '$\\alpha=-\\dfrac{-4}{2}=2$.' }],
      solution: [{ ar: '$f(2)=4-8+1=-3$.', fr: '$f(2)=4-8+1=-3$.' }],
    },
    {
      id: 'tc-fon-04',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'دالة جذرية', fr: 'Fonction rationnelle' },
      statement: { ar: 'ما مجموعة تعريف $f(x)=\\dfrac{3}{x-2}$؟', fr: 'Quel est l’ensemble de définition de $f(x)=\\dfrac{3}{x-2}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\mathbb R\\setminus\\{2\\}$', fr: '$\\mathbb R\\setminus\\{2\\}$' }, { ar: '$\\mathbb R$', fr: '$\\mathbb R$' }, { ar: '$]2;+\\infty[$', fr: '$]2;+\\infty[$' }, { ar: '$\\mathbb R\\setminus\\{3\\}$', fr: '$\\mathbb R\\setminus\\{3\\}$' }],
        correct: 0,
      },
      hints: [{ ar: '$x-2\\neq0$.', fr: '$x-2\\neq0$.' }],
      solution: [{ ar: '$D_f=\\mathbb R\\setminus\\{2\\}$.', fr: '$D_f=\\mathbb R\\setminus\\{2\\}$.' }],
    },
  ],
};
