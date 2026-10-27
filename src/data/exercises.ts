import type { Exercise } from '@/types';
import { modules1ac } from './lessons/1ac';
import { modules2ac } from './lessons/2ac';
import { modules3ac } from './lessons/3ac';
import { modulesTc } from './lessons/tc';

/**
 * Exercices corrigés. Chaque exercice est rattaché à un cours (lessonId).
 * Types : 'mcq' (QCM, index de la bonne réponse), 'numeric' (réponse numérique avec tolérance), 'open' (auto-évaluation).
 */
export const exercises: Exercise[] = [
  // 1AC : les exercices sont définis avec chaque cours (src/data/lessons/1ac/)
  ...modules1ac.flatMap((m) => m.exercises),

  // 2AC : les exercices sont définis avec chaque cours (src/data/lessons/2ac/)
  ...modules2ac.flatMap((m) => m.exercises),

  // 3AC : les exercices sont définis avec chaque cours (src/data/lessons/3ac/)
  ...modules3ac.flatMap((m) => m.exercises),

  // TC : les exercices sont définis avec chaque cours (src/data/lessons/tc/)
  ...modulesTc.flatMap((m) => m.exercises),

  /* ---------------- 1BAC — Dérivation ---------------- */
  {
    id: '1bac-der-01',
    lessonId: '1bac-derivation',
    levelId: '1bac',
    difficulty: 1,
    topic: 'analysis',
    title: { ar: 'مشتقة حدودية', fr: "Dérivée d'un polynôme" },
    statement: { ar: 'ما هي مشتقة الدالة $f(x)=3x^4-2x+1$؟', fr: 'Quelle est la dérivée de $f(x)=3x^4-2x+1$ ?' },
    question: {
      type: 'mcq',
      options: [
        { ar: "$f'(x)=12x^3-2$", fr: "$f'(x)=12x^3-2$" },
        { ar: "$f'(x)=12x^3$", fr: "$f'(x)=12x^3$" },
        { ar: "$f'(x)=3x^3-2$", fr: "$f'(x)=3x^3-2$" },
        { ar: "$f'(x)=4x^3-2$", fr: "$f'(x)=4x^3-2$" },
      ],
      correct: 0,
    },
    hints: [{ ar: "$(x^n)'=nx^{n-1}$ و $(k)'=0$.", fr: "$(x^n)'=nx^{n-1}$ et $(k)'=0$." }],
    solution: [
      { ar: "$(3x^4)'=3\\times4x^3=12x^3$ ، $(-2x)'=-2$ ، $(1)'=0$.", fr: "$(3x^4)'=3\\times4x^3=12x^3$, $(-2x)'=-2$, $(1)'=0$." },
      { ar: "$f'(x)=12x^3-2$.", fr: "$f'(x)=12x^3-2$." },
    ],
  },
  {
    id: '1bac-der-02',
    lessonId: '1bac-derivation',
    levelId: '1bac',
    difficulty: 1,
    topic: 'analysis',
    title: { ar: 'عدد مشتق', fr: 'Nombre dérivé' },
    statement: { ar: "لتكن $f(x)=x^2+3x$. احسب $f'(2)$.", fr: "Soit $f(x)=x^2+3x$. Calculer $f'(2)$." },
    question: { type: 'numeric', answer: 7 },
    hints: [{ ar: "احسب أولاً $f'(x)$.", fr: "Calculez d'abord $f'(x)$." }],
    solution: [
      { ar: "$f'(x)=2x+3$.", fr: "$f'(x)=2x+3$." },
      { ar: "$f'(2)=2\\times2+3=7$.", fr: "$f'(2)=2\\times2+3=7$." },
    ],
  },
  {
    id: '1bac-der-03',
    lessonId: '1bac-derivation',
    levelId: '1bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'معادلة مماس', fr: "Équation d'une tangente" },
    statement: { ar: 'ما معادلة المماس لمنحنى الدالة $f(x)=x^3$ في النقطة ذات الأفصول $1$؟', fr: "Quelle est l'équation de la tangente à la courbe de $f(x)=x^3$ au point d'abscisse $1$ ?" },
    question: {
      type: 'mcq',
      options: [{ ar: '$y=3x-2$', fr: '$y=3x-2$' }, { ar: '$y=3x+1$', fr: '$y=3x+1$' }, { ar: '$y=x$', fr: '$y=x$' }, { ar: '$y=3x-3$', fr: '$y=3x-3$' }],
      correct: 0,
    },
    hints: [{ ar: "$y=f'(1)(x-1)+f(1)$.", fr: "$y=f'(1)(x-1)+f(1)$." }],
    solution: [
      { ar: "$f(1)=1$ و $f'(x)=3x^2$ إذن $f'(1)=3$.", fr: "$f(1)=1$ et $f'(x)=3x^2$ donc $f'(1)=3$." },
      { ar: '$y=3(x-1)+1=3x-2$.', fr: '$y=3(x-1)+1=3x-2$.' },
    ],
  },
  {
    id: '1bac-der-04',
    lessonId: '1bac-derivation',
    levelId: '1bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'مشتقة خارج', fr: "Dérivée d'un quotient" },
    statement: { ar: "لتكن $f(x)=\\dfrac{x+1}{x-2}$ على $]2;+\\infty[$. احسب $f'(3)$.", fr: "Soit $f(x)=\\dfrac{x+1}{x-2}$ sur $]2;+\\infty[$. Calculer $f'(3)$." },
    question: { type: 'numeric', answer: -3 },
    hints: [{ ar: "$\\left(\\dfrac uv\\right)'=\\dfrac{u'v-uv'}{v^2}$.", fr: "$\\left(\\dfrac uv\\right)'=\\dfrac{u'v-uv'}{v^2}$." }],
    solution: [
      { ar: "$f'(x)=\\dfrac{1\\times(x-2)-(x+1)\\times1}{(x-2)^2}=\\dfrac{-3}{(x-2)^2}$.", fr: "$f'(x)=\\dfrac{1\\times(x-2)-(x+1)\\times1}{(x-2)^2}=\\dfrac{-3}{(x-2)^2}$." },
      { ar: "$f'(3)=\\dfrac{-3}{1^2}=-3$.", fr: "$f'(3)=\\dfrac{-3}{1^2}=-3$." },
    ],
  },
  {
    id: '1bac-der-05',
    lessonId: '1bac-derivation',
    levelId: '1bac',
    difficulty: 3,
    topic: 'analysis',
    title: { ar: 'دراسة الرتابة', fr: 'Étude des variations' },
    statement: { ar: 'ادرس رتابة الدالة $f(x)=\\dfrac{x}{x^2+1}$ على $\\mathbb{R}$.', fr: 'Étudier les variations de $f(x)=\\dfrac{x}{x^2+1}$ sur $\\mathbb{R}$.' },
    question: { type: 'open' },
    hints: [
      { ar: 'استعمل قاعدة مشتقة خارج مع $u(x)=x$ و $v(x)=x^2+1$.', fr: 'Utilisez la dérivée d’un quotient avec $u(x)=x$ et $v(x)=x^2+1$.' },
      { ar: 'إشارة المشتقة هي إشارة $1-x^2$.', fr: 'Le signe de la dérivée est celui de $1-x^2$.' },
    ],
    solution: [
      { ar: "$f'(x)=\\dfrac{1\\times(x^2+1)-x\\times2x}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}$.", fr: "$f'(x)=\\dfrac{1\\times(x^2+1)-x\\times2x}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}$." },
      { ar: 'المقام موجب قطعاً، إذن إشارة $f\'(x)$ هي إشارة $1-x^2=(1-x)(1+x)$.', fr: 'Le dénominateur est strictement positif, donc $f\'(x)$ a le signe de $1-x^2=(1-x)(1+x)$.' },
      { ar: "$f'(x)\\ge0$ على $[-1;1]$ و $f'(x)\\le0$ على $]-\\infty;-1]$ وعلى $[1;+\\infty[$.", fr: "$f'(x)\\ge0$ sur $[-1;1]$ et $f'(x)\\le0$ sur $]-\\infty;-1]$ et sur $[1;+\\infty[$." },
      { ar: '$f$ تناقصية على $]-\\infty;-1]$، تزايدية على $[-1;1]$، تناقصية على $[1;+\\infty[$، مع $f(-1)=-\\frac12$ و $f(1)=\\frac12$.', fr: '$f$ est décroissante sur $]-\\infty;-1]$, croissante sur $[-1;1]$, décroissante sur $[1;+\\infty[$, avec $f(-1)=-\\frac12$ et $f(1)=\\frac12$.' },
    ],
  },

  /* ---------------- 2BAC — Logarithme ---------------- */
  {
    id: '2bac-ln-01',
    lessonId: '2bac-logarithm',
    levelId: '2bac',
    difficulty: 1,
    topic: 'analysis',
    title: { ar: 'حساب لوغاريتمي', fr: 'Calcul logarithmique' },
    statement: { ar: 'ما قيمة $\\ln(e^3)-\\ln e$؟', fr: 'Que vaut $\\ln(e^3)-\\ln e$ ?' },
    question: {
      type: 'mcq',
      options: [{ ar: '$2$', fr: '$2$' }, { ar: '$3$', fr: '$3$' }, { ar: '$e^2$', fr: '$e^2$' }, { ar: '$1$', fr: '$1$' }],
      correct: 0,
    },
    hints: [{ ar: '$\\ln(a^n)=n\\ln a$ و $\\ln e=1$.', fr: '$\\ln(a^n)=n\\ln a$ et $\\ln e=1$.' }],
    solution: [{ ar: '$\\ln(e^3)-\\ln e=3\\ln e-\\ln e=3-1=2$.', fr: '$\\ln(e^3)-\\ln e=3\\ln e-\\ln e=3-1=2$.' }],
  },
  {
    id: '2bac-ln-02',
    lessonId: '2bac-logarithm',
    levelId: '2bac',
    difficulty: 1,
    topic: 'analysis',
    title: { ar: 'معادلة بسيطة', fr: 'Équation simple' },
    statement: { ar: 'حل في $]0;+\\infty[$ المعادلة $\\ln x=\\ln3+\\ln5$.', fr: 'Résoudre dans $]0;+\\infty[$ l’équation $\\ln x=\\ln3+\\ln5$.' },
    question: { type: 'numeric', answer: 15 },
    hints: [{ ar: '$\\ln a+\\ln b=\\ln(ab)$.', fr: '$\\ln a+\\ln b=\\ln(ab)$.' }],
    solution: [
      { ar: '$\\ln3+\\ln5=\\ln15$، إذن $\\ln x=\\ln15$.', fr: '$\\ln3+\\ln5=\\ln15$, donc $\\ln x=\\ln15$.' },
      { ar: '$x=15$ وهو موجب، إذن $S=\\{15\\}$.', fr: '$x=15$, qui est positif, donc $S=\\{15\\}$.' },
    ],
  },
  {
    id: '2bac-ln-03',
    lessonId: '2bac-logarithm',
    levelId: '2bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'مجموعة التعريف', fr: 'Ensemble de définition' },
    statement: { ar: 'ما هي مجموعة تعريف الدالة $f(x)=\\ln(2-x)$؟', fr: "Quel est l'ensemble de définition de $f(x)=\\ln(2-x)$ ?" },
    question: {
      type: 'mcq',
      options: [
        { ar: '$]-\\infty;2[$', fr: '$]-\\infty;2[$' },
        { ar: '$]2;+\\infty[$', fr: '$]2;+\\infty[$' },
        { ar: '$]0;2[$', fr: '$]0;2[$' },
        { ar: '$\\mathbb{R}$', fr: '$\\mathbb{R}$' },
      ],
      correct: 0,
    },
    hints: [{ ar: 'يجب أن يكون $2-x>0$.', fr: 'Il faut $2-x>0$.' }],
    solution: [{ ar: '$2-x>0\\iff x<2$، إذن $D_f=]-\\infty;2[$.', fr: '$2-x>0\\iff x<2$, donc $D_f=]-\\infty;2[$.' }],
  },
  {
    id: '2bac-ln-04',
    lessonId: '2bac-logarithm',
    levelId: '2bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'معادلة بالأسية', fr: 'Équation et exponentielle' },
    statement: { ar: 'حل المعادلة $\\ln(x+1)=2$ وأعط قيمة مقربة للحل إلى $10^{-2}$.', fr: 'Résoudre $\\ln(x+1)=2$ et donner une valeur approchée de la solution à $10^{-2}$ près.' },
    question: { type: 'numeric', answer: Math.exp(2) - 1, tolerance: 0.01 },
    hints: [
      { ar: 'الشرط: $x>-1$.', fr: 'Condition : $x>-1$.' },
      { ar: '$\\ln a=2\\iff a=e^2$.', fr: '$\\ln a=2\\iff a=e^2$.' },
    ],
    solution: [
      { ar: 'الشرط $x+1>0$ أي $x>-1$.', fr: 'Condition : $x+1>0$, soit $x>-1$.' },
      { ar: '$\\ln(x+1)=2\\iff x+1=e^2\\iff x=e^2-1$.', fr: '$\\ln(x+1)=2\\iff x+1=e^2\\iff x=e^2-1$.' },
      { ar: '$e^2-1\\approx6{,}39$ وهو أكبر من $-1$، إذن $S=\\{e^2-1\\}$.', fr: '$e^2-1\\approx6{,}39>-1$, donc $S=\\{e^2-1\\}$.' },
    ],
  },
  {
    id: '2bac-ln-05',
    lessonId: '2bac-logarithm',
    levelId: '2bac',
    difficulty: 3,
    topic: 'analysis',
    title: { ar: 'حساب نهاية', fr: "Calcul d'une limite" },
    statement: { ar: 'احسب $\\displaystyle\\lim_{x\\to+\\infty}(\\ln x-x)$.', fr: 'Calculer $\\displaystyle\\lim_{x\\to+\\infty}(\\ln x-x)$.' },
    question: { type: 'open' },
    hints: [
      { ar: 'لدينا شكل غير محدد $+\\infty-\\infty$: عمّل $x$.', fr: 'Forme indéterminée $+\\infty-\\infty$ : factorisez par $x$.' },
      { ar: 'استعمل $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$.', fr: 'Utilisez $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$.' },
    ],
    solution: [
      { ar: 'لكل $x>0$: $\\ln x-x=x\\left(\\dfrac{\\ln x}{x}-1\\right)$.', fr: 'Pour tout $x>0$ : $\\ln x-x=x\\left(\\dfrac{\\ln x}{x}-1\\right)$.' },
      { ar: '$\\lim_{x\\to+\\infty}\\left(\\dfrac{\\ln x}{x}-1\\right)=-1$ و $\\lim_{x\\to+\\infty}x=+\\infty$.', fr: '$\\lim_{x\\to+\\infty}\\left(\\dfrac{\\ln x}{x}-1\\right)=-1$ et $\\lim_{x\\to+\\infty}x=+\\infty$.' },
      { ar: 'إذن $\\displaystyle\\lim_{x\\to+\\infty}(\\ln x-x)=-\\infty$.', fr: 'Donc $\\displaystyle\\lim_{x\\to+\\infty}(\\ln x-x)=-\\infty$.' },
    ],
  },

  /* ---------------- 2BAC — Intégrales ---------------- */
  {
    id: '2bac-int-01',
    lessonId: '2bac-integrals',
    levelId: '2bac',
    difficulty: 1,
    topic: 'analysis',
    title: { ar: 'تكامل حدودية', fr: "Intégrale d'un polynôme" },
    statement: { ar: 'احسب $\\displaystyle\\int_0^2 3x^2\\,dx$.', fr: 'Calculer $\\displaystyle\\int_0^2 3x^2\\,dx$.' },
    question: { type: 'numeric', answer: 8 },
    hints: [{ ar: 'دالة أصلية لـ $3x^2$ هي $x^3$.', fr: 'Une primitive de $3x^2$ est $x^3$.' }],
    solution: [{ ar: '$\\displaystyle\\int_0^2 3x^2\\,dx=\\big[x^3\\big]_0^2=8-0=8$.', fr: '$\\displaystyle\\int_0^2 3x^2\\,dx=\\big[x^3\\big]_0^2=8-0=8$.' }],
  },
  {
    id: '2bac-int-02',
    lessonId: '2bac-integrals',
    levelId: '2bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'تكامل دالة تآلفية', fr: "Intégrale d'une fonction affine" },
    statement: { ar: 'احسب $\\displaystyle\\int_1^2(2x+1)\\,dx$.', fr: 'Calculer $\\displaystyle\\int_1^2(2x+1)\\,dx$.' },
    question: { type: 'numeric', answer: 4 },
    hints: [{ ar: 'دالة أصلية: $F(x)=x^2+x$.', fr: 'Une primitive : $F(x)=x^2+x$.' }],
    solution: [
      { ar: '$F(x)=x^2+x$ دالة أصلية لـ $2x+1$.', fr: '$F(x)=x^2+x$ est une primitive de $2x+1$.' },
      { ar: '$F(2)-F(1)=6-2=4$.', fr: '$F(2)-F(1)=6-2=4$.' },
    ],
  },
  {
    id: '2bac-int-03',
    lessonId: '2bac-integrals',
    levelId: '2bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'تكامل مثلثي', fr: 'Intégrale trigonométrique' },
    statement: { ar: 'ما قيمة $\\displaystyle\\int_0^{\\pi/2}\\cos x\\,dx$؟', fr: 'Que vaut $\\displaystyle\\int_0^{\\pi/2}\\cos x\\,dx$ ?' },
    question: {
      type: 'mcq',
      options: [{ ar: '$1$', fr: '$1$' }, { ar: '$0$', fr: '$0$' }, { ar: '$-1$', fr: '$-1$' }, { ar: '$\\frac{\\pi}{2}$', fr: '$\\frac{\\pi}{2}$' }],
      correct: 0,
    },
    hints: [{ ar: 'دالة أصلية لـ $\\cos$ هي $\\sin$.', fr: 'Une primitive de $\\cos$ est $\\sin$.' }],
    solution: [{ ar: '$\\big[\\sin x\\big]_0^{\\pi/2}=\\sin\\frac\\pi2-\\sin0=1$.', fr: '$\\big[\\sin x\\big]_0^{\\pi/2}=\\sin\\frac\\pi2-\\sin0=1$.' }],
  },
  {
    id: '2bac-int-04',
    lessonId: '2bac-integrals',
    levelId: '2bac',
    difficulty: 2,
    topic: 'analysis',
    title: { ar: 'القيمة المتوسطة', fr: 'Valeur moyenne' },
    statement: { ar: 'احسب القيمة المتوسطة للدالة $f(x)=x$ على $[0;4]$.', fr: 'Calculer la valeur moyenne de $f(x)=x$ sur $[0;4]$.' },
    question: { type: 'numeric', answer: 2 },
    hints: [{ ar: '$\\mu=\\dfrac1{b-a}\\displaystyle\\int_a^b f(x)\\,dx$.', fr: '$\\mu=\\dfrac1{b-a}\\displaystyle\\int_a^b f(x)\\,dx$.' }],
    solution: [
      { ar: '$\\displaystyle\\int_0^4x\\,dx=\\left[\\dfrac{x^2}2\\right]_0^4=8$.', fr: '$\\displaystyle\\int_0^4x\\,dx=\\left[\\dfrac{x^2}2\\right]_0^4=8$.' },
      { ar: '$\\mu=\\dfrac14\\times8=2$.', fr: '$\\mu=\\dfrac14\\times8=2$.' },
    ],
  },
  {
    id: '2bac-int-05',
    lessonId: '2bac-integrals',
    levelId: '2bac',
    difficulty: 3,
    topic: 'analysis',
    title: { ar: 'المكاملة بالأجزاء', fr: 'Intégration par parties' },
    statement: { ar: 'باستعمال المكاملة بالأجزاء، احسب $\\displaystyle\\int_1^e\\ln x\\,dx$.', fr: 'À l’aide d’une intégration par parties, calculer $\\displaystyle\\int_1^e\\ln x\\,dx$.' },
    question: { type: 'open' },
    hints: [
      { ar: 'اكتب $\\ln x=1\\times\\ln x$.', fr: 'Écrivez $\\ln x=1\\times\\ln x$.' },
      { ar: "ضع $u(x)=\\ln x$ و $v'(x)=1$.", fr: "Posez $u(x)=\\ln x$ et $v'(x)=1$." },
    ],
    solution: [
      { ar: "$u(x)=\\ln x$ ، $u'(x)=\\dfrac1x$ ، $v'(x)=1$ ، $v(x)=x$.", fr: "$u(x)=\\ln x$, $u'(x)=\\dfrac1x$, $v'(x)=1$, $v(x)=x$." },
      { ar: '$\\displaystyle\\int_1^e\\ln x\\,dx=\\big[x\\ln x\\big]_1^e-\\int_1^e x\\times\\frac1x\\,dx=e-\\int_1^e1\\,dx$.', fr: '$\\displaystyle\\int_1^e\\ln x\\,dx=\\big[x\\ln x\\big]_1^e-\\int_1^e x\\times\\frac1x\\,dx=e-\\int_1^e1\\,dx$.' },
      { ar: '$=e-(e-1)=1$.', fr: '$=e-(e-1)=1$.' },
    ],
  },
];
