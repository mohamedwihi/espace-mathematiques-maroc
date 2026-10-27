import type { LessonModule } from '@/types';

const lessonId = 'tc-calcul-vectoriel';

export const calculVectoriel: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'vectors',
    title: { ar: 'الحساب المتجهي في المستوى', fr: 'Calcul vectoriel dans le plan' },
    summary: {
      ar: 'تساوي متجهتين، علاقة شال، ضرب متجهة في عدد حقيقي، الاستقامية والتوازي ومنتصف قطعة.',
      fr: 'Égalité de vecteurs, relation de Chasles, produit d’un vecteur par un réel, colinéarité, alignement, parallélisme et milieu.',
    },
    objectives: [
      { ar: 'استعمال علاقة شال وخاصيات الضرب في عدد.', fr: 'Utiliser Chasles et les propriétés du produit par un réel.' },
      { ar: 'إثبات استقامية نقط وتوازي مستقيمين.', fr: 'Démontrer un alignement et un parallélisme.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    featured: true,
    keywords: ['vecteur', 'Chasles', 'colinéaires', 'alignés', 'milieu', 'متجهة', 'علاقة شال', 'استقامية'],
    sections: [
      {
        id: 'operations',
        title: { ar: 'العمليات على المتجهات', fr: 'Opérations sur les vecteurs' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• شال: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$ ؛ $\\overrightarrow{AB}=-\\overrightarrow{BA}$.\n\n• لكل $\\alpha,\\beta\\in\\mathbb R$: $\\alpha(\\vec u+\\vec v)=\\alpha\\vec u+\\alpha\\vec v$ و $(\\alpha+\\beta)\\vec u=\\alpha\\vec u+\\beta\\vec u$ و $\\alpha(\\beta\\vec u)=(\\alpha\\beta)\\vec u$.\n\n• $\\alpha\\vec u=\\vec0\\iff\\alpha=0$ أو $\\vec u=\\vec0$.',
              fr: '• Chasles : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$ ; $\\overrightarrow{AB}=-\\overrightarrow{BA}$.\n\n• Pour tous $\\alpha,\\beta\\in\\mathbb R$ : $\\alpha(\\vec u+\\vec v)=\\alpha\\vec u+\\alpha\\vec v$, $(\\alpha+\\beta)\\vec u=\\alpha\\vec u+\\beta\\vec u$, $\\alpha(\\beta\\vec u)=(\\alpha\\beta)\\vec u$.\n\n• $\\alpha\\vec u=\\vec0\\iff\\alpha=0$ ou $\\vec u=\\vec0$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المنتصف', fr: 'Milieu' },
            content: {
              ar: '$I$ منتصف $[AB]$ يكافئ $\\overrightarrow{IA}+\\overrightarrow{IB}=\\vec0$، ولكل نقطة $M$: $\\overrightarrow{MA}+\\overrightarrow{MB}=2\\overrightarrow{MI}$.',
              fr: '$I$ milieu de $[AB]$ équivaut à $\\overrightarrow{IA}+\\overrightarrow{IB}=\\vec0$, et pour tout point $M$ : $\\overrightarrow{MA}+\\overrightarrow{MB}=2\\overrightarrow{MI}$.',
            },
          },
        ],
      },
      {
        id: 'colinearite',
        title: { ar: 'الاستقامية', fr: 'Colinéarité' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'تكون $\\vec u$ و $\\vec v$ **مستقيميتين** إذا وجد عدد حقيقي $k$ بحيث $\\vec u=k\\vec v$ (أو $\\vec v=\\vec0$).',
              fr: '$\\vec u$ et $\\vec v$ sont **colinéaires** s’il existe un réel $k$ tel que $\\vec u=k\\vec v$ (ou si $\\vec v=\\vec0$).',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• $A,B,C$ نقط مستقيمية $\\iff\\overrightarrow{AB}$ و $\\overrightarrow{AC}$ مستقيميتان.\n\n• $(AB)\\parallel(CD)\\iff\\overrightarrow{AB}$ و $\\overrightarrow{CD}$ مستقيميتان.',
              fr: '• $A,B,C$ alignés $\\iff\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ colinéaires.\n\n• $(AB)\\parallel(CD)\\iff\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ colinéaires.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$ABC$ مثلث و $M$ و $N$ بحيث $\\overrightarrow{AM}=2\\overrightarrow{AB}$ و $\\overrightarrow{AN}=2\\overrightarrow{AC}$. بيّن أن $(MN)\\parallel(BC)$.', fr: '$ABC$ est un triangle, $\\overrightarrow{AM}=2\\overrightarrow{AB}$ et $\\overrightarrow{AN}=2\\overrightarrow{AC}$. Montrer que $(MN)\\parallel(BC)$.' },
            steps: [
              { ar: '$\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}=-2\\overrightarrow{AB}+2\\overrightarrow{AC}=2(\\overrightarrow{BA}+\\overrightarrow{AC})=2\\overrightarrow{BC}$.', fr: '$\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}=-2\\overrightarrow{AB}+2\\overrightarrow{AC}=2(\\overrightarrow{BA}+\\overrightarrow{AC})=2\\overrightarrow{BC}$.' },
              { ar: 'المتجهتان مستقيميتان إذن $(MN)\\parallel(BC)$.', fr: 'Les vecteurs sont colinéaires, donc $(MN)\\parallel(BC)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\overrightarrow{MA}+\\overrightarrow{MB}=2\\overrightarrow{MI}$.', fr: '$\\overrightarrow{MA}+\\overrightarrow{MB}=2\\overrightarrow{MI}$.' },
      { ar: 'الاستقامية تثبت الاستقامية والتوازي.', fr: 'La colinéarité sert à prouver alignement et parallélisme.' },
    ],
  },
  exercises: [
    {
      id: 'tc-vec-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'تبسيط', fr: 'Simplifier' },
      statement: { ar: 'بسّط $\\overrightarrow{AB}-\\overrightarrow{AC}+\\overrightarrow{BC}$.', fr: 'Simplifier $\\overrightarrow{AB}-\\overrightarrow{AC}+\\overrightarrow{BC}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\vec0$', fr: '$\\vec0$' }, { ar: '$2\\overrightarrow{BC}$', fr: '$2\\overrightarrow{BC}$' }, { ar: '$\\overrightarrow{AB}$', fr: '$\\overrightarrow{AB}$' }, { ar: '$2\\overrightarrow{AB}$', fr: '$2\\overrightarrow{AB}$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{CA}=\\overrightarrow{CB}$.', fr: '$\\overrightarrow{AB}-\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{CA}=\\overrightarrow{CB}$.' }],
      solution: [{ ar: '$\\overrightarrow{CB}+\\overrightarrow{BC}=\\vec0$.', fr: '$\\overrightarrow{CB}+\\overrightarrow{BC}=\\vec0$.' }],
    },
    {
      id: 'tc-vec-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منظم', fr: 'Norme' },
      statement: { ar: '$AB=2$ و $\\overrightarrow{AC}=-3\\overrightarrow{AB}$. احسب $AC$.', fr: '$AB=2$ et $\\overrightarrow{AC}=-3\\overrightarrow{AB}$. Calculer $AC$.' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: 'المنظم يضرب في $|k|$.', fr: 'La norme est multipliée par $|k|$.' }],
      solution: [{ ar: '$AC=|-3|\\times2=6$.', fr: '$AC=|-3|\\times2=6$.' }],
    },
    {
      id: 'tc-vec-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'استقامية', fr: 'Alignement' },
      statement: { ar: '$\\overrightarrow{AM}=3\\overrightarrow{AB}$. هل النقط $A$ و $B$ و $M$ مستقيمية؟', fr: '$\\overrightarrow{AM}=3\\overrightarrow{AB}$. Les points $A$, $B$, $M$ sont-ils alignés ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: '$\\overrightarrow{AM}$ و $\\overrightarrow{AB}$ مستقيميتان.', fr: '$\\overrightarrow{AM}$ et $\\overrightarrow{AB}$ sont colinéaires.' }],
      solution: [{ ar: 'المتجهتان مستقيميتان ولهما نفس الأصل $A$، إذن النقط مستقيمية.', fr: 'Les vecteurs sont colinéaires et ont la même origine $A$ : les points sont alignés.' }],
    },
    {
      id: 'tc-vec-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'المنتصف', fr: 'Le milieu' },
      statement: { ar: '$I$ منتصف $[AB]$ و $M$ نقطة. بسّط $\\overrightarrow{MA}+\\overrightarrow{MB}$.', fr: '$I$ est le milieu de $[AB]$ et $M$ un point. Simplifier $\\overrightarrow{MA}+\\overrightarrow{MB}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$2\\overrightarrow{MI}$', fr: '$2\\overrightarrow{MI}$' }, { ar: '$\\overrightarrow{MI}$', fr: '$\\overrightarrow{MI}$' }, { ar: '$\\overrightarrow{AB}$', fr: '$\\overrightarrow{AB}$' }, { ar: '$\\vec0$', fr: '$\\vec0$' }],
        correct: 0,
      },
      hints: [{ ar: 'أدخل $I$ بعلاقة شال.', fr: 'Introduis $I$ avec Chasles.' }],
      solution: [{ ar: '$\\overrightarrow{MI}+\\overrightarrow{IA}+\\overrightarrow{MI}+\\overrightarrow{IB}=2\\overrightarrow{MI}+\\vec0=2\\overrightarrow{MI}$.', fr: '$\\overrightarrow{MI}+\\overrightarrow{IA}+\\overrightarrow{MI}+\\overrightarrow{IB}=2\\overrightarrow{MI}+\\vec0=2\\overrightarrow{MI}$.' }],
    },
  ],
};
