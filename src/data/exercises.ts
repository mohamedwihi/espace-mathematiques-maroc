import type { Exercise } from '@/types';
import { modules1ac } from './lessons/1ac';
import { modules2ac } from './lessons/2ac';
import { modules3ac } from './lessons/3ac';
import { modulesTc } from './lessons/tc';
import { modules1bac } from './lessons/1bac';

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

  // 1BAC : les exercices sont définis avec chaque cours (src/data/lessons/1bac/)
  ...modules1bac.flatMap((m) => m.exercises),

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
