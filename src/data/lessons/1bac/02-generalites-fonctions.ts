import type { LessonModule } from '@/types';

const lessonId = '1bac-generalites-fonctions';

export const generalitesFonctions: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'functions',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'عموميات حول الدوال العددية', fr: 'Généralités sur les fonctions' },
    summary: {
      ar: 'الدالة المكبورة والمصغورة والمحدودة، مقارنة دالتين، الدالة الدورية، تركيب دالتين ورتابته، ومنحنيات $\\sqrt{x+a}$ و $\\dfrac{ax+b}{cx+d}$.',
      fr: 'Fonction majorée, minorée, bornée, comparaison de fonctions, fonction périodique, composée et sa monotonie, courbes de $\\sqrt{x+a}$ et $\\dfrac{ax+b}{cx+d}$.',
    },
    objectives: [
      { ar: 'إثبات أن دالة مكبورة أو مصغورة.', fr: 'Montrer qu’une fonction est majorée ou minorée.' },
      { ar: 'تحديد مركب دالتين ودراسة رتابته.', fr: 'Déterminer une composée et étudier sa monotonie.' },
      { ar: 'التعرف على الدالة الدورية.', fr: 'Reconnaître une fonction périodique.' },
    ],
    durationMinutes: 45,
    reviewed: false,
    keywords: ['fonction', 'majorée', 'bornée', 'composée', 'périodique', 'homographique', 'دالة', 'مكبورة', 'مركب', 'دورية'],
    sections: [
      {
        id: 'bornes',
        title: { ar: 'دالة مكبورة، مصغورة، محدودة', fr: 'Fonction majorée, minorée, bornée' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'لتكن $f$ دالة معرفة على مجال $I$.\n\n• $f$ **مكبورة** على $I$ إذا وجد $M$ حيث $f(x)\\le M$ لكل $x\\in I$.\n\n• $f$ **مصغورة** على $I$ إذا وجد $m$ حيث $f(x)\\ge m$ لكل $x\\in I$.\n\n• $f$ **محدودة** إذا كانت مكبورة ومصغورة.',
              fr: 'Soit $f$ définie sur un intervalle $I$.\n\n• $f$ est **majorée** sur $I$ s’il existe $M$ tel que $f(x)\\le M$ pour tout $x\\in I$.\n\n• $f$ est **minorée** sur $I$ s’il existe $m$ tel que $f(x)\\ge m$ pour tout $x\\in I$.\n\n• $f$ est **bornée** si elle est majorée et minorée.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'بيّن أن $f(x)=\\dfrac{1}{1+x^2}$ محدودة على $\\mathbb R$.', fr: 'Montrer que $f(x)=\\dfrac{1}{1+x^2}$ est bornée sur $\\mathbb R$.' },
            steps: [{ ar: '$1+x^2\\ge1$ إذن $0<f(x)\\le1$.', fr: '$1+x^2\\ge1$ donc $0<f(x)\\le1$.' }],
          },
        ],
      },
      {
        id: 'periodique',
        title: { ar: 'الدالة الدورية', fr: 'Fonction périodique' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'تكون $f$ **دورية** دورها $T>0$ إذا كان لكل $x\\in D_f$: $x+T\\in D_f$ و $x-T\\in D_f$ و $f(x+T)=f(x)$. مثلاً $\\cos$ و $\\sin$ دوريتان دورهما $2\\pi$.',
              fr: '$f$ est **périodique** de période $T>0$ si pour tout $x\\in D_f$ : $x+T\\in D_f$, $x-T\\in D_f$ et $f(x+T)=f(x)$. Par exemple $\\cos$ et $\\sin$ sont $2\\pi$-périodiques.',
            },
          },
        ],
      },
      {
        id: 'composee',
        title: { ar: 'مركب دالتين', fr: 'Composée de deux fonctions' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'إذا كان $f(I)\\subset J$ و $g$ معرفة على $J$، فإن $(g\\circ f)(x)=g(f(x))$ لكل $x\\in I$.',
              fr: 'Si $f(I)\\subset J$ et $g$ est définie sur $J$, alors $(g\\circ f)(x)=g(f(x))$ pour tout $x\\in I$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'إذا كانت $f$ و $g$ لهما نفس الرتابة فإن $g\\circ f$ **تزايدية**، وإذا كانت رتابتهما مختلفة فإن $g\\circ f$ **تناقصية**.',
              fr: 'Si $f$ et $g$ ont la même monotonie, $g\\circ f$ est **croissante** ; si elles sont de monotonies contraires, $g\\circ f$ est **décroissante**.',
            },
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => Math.sqrt(x + 2), label: 'y=\\sqrt{x+2}', color: 'brand', domain: [-2, 6] },
              { fn: (x: number) => (2 * x + 1) / (x - 1), label: 'y=\\frac{2x+1}{x-1}', color: 'saffron', domain: [1.15, 6] },
              { fn: (x: number) => (2 * x + 1) / (x - 1), label: '', color: 'saffron', domain: [-4, 0.85] },
            ],
            x: [-4, 6],
            y: [-4, 8],
            caption: {
              ar: 'منحنى $\\sqrt{x+2}$ نصف شلجم، ومنحنى $\\dfrac{2x+1}{x-1}$ هذلول مقارباه $x=1$ و $y=2$.',
              fr: 'La courbe de $\\sqrt{x+2}$ est une demi-parabole ; celle de $\\dfrac{2x+1}{x-1}$ est une hyperbole d’asymptotes $x=1$ et $y=2$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'نفس الرتابة ⟹ المركب تزايدي.', fr: 'Même monotonie ⟹ composée croissante.' },
      { ar: 'دالة محدودة = مكبورة ومصغورة.', fr: 'Fonction bornée = majorée et minorée.' },
    ],
  },
  exercises: [
    {
      id: '1bac-gen-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مركب', fr: 'Composée' },
      statement: { ar: '$f(x)=2x+1$ و $g(x)=x^2$. احسب $(g\\circ f)(1)$.', fr: '$f(x)=2x+1$ et $g(x)=x^2$. Calculer $(g\\circ f)(1)$.' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: '$f(1)=3$.', fr: '$f(1)=3$.' }],
      solution: [{ ar: '$g(3)=9$.', fr: '$g(3)=9$.' }],
    },
    {
      id: '1bac-gen-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مكبورة', fr: 'Majorant' },
      statement: { ar: 'ما أصغر عدد $M$ يكبر الدالة $f(x)=\\dfrac{2}{1+x^2}$ على $\\mathbb R$؟', fr: 'Quel est le plus petit majorant $M$ de $f(x)=\\dfrac{2}{1+x^2}$ sur $\\mathbb R$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$1+x^2\\ge1$.', fr: '$1+x^2\\ge1$.' }],
      solution: [{ ar: '$f(x)\\le2$ و $f(0)=2$، إذن $M=2$.', fr: '$f(x)\\le2$ et $f(0)=2$, donc $M=2$.' }],
    },
    {
      id: '1bac-gen-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'رتابة مركب', fr: 'Monotonie d’une composée' },
      statement: { ar: '$f$ تناقصية على $I$ و $g$ تناقصية على $f(I)$. ما رتابة $g\\circ f$ على $I$؟', fr: '$f$ est décroissante sur $I$ et $g$ décroissante sur $f(I)$. Quelle est la monotonie de $g\\circ f$ sur $I$ ?' },
      question: { type: 'mcq', options: [{ ar: 'تزايدية', fr: 'Croissante' }, { ar: 'تناقصية', fr: 'Décroissante' }, { ar: 'لا يمكن الحسم', fr: 'On ne peut pas conclure' }], correct: 0 },
      hints: [{ ar: 'نفس الرتابة.', fr: 'Même monotonie.' }],
      solution: [{ ar: 'لهما نفس الرتابة، إذن $g\\circ f$ تزايدية.', fr: 'Elles ont la même monotonie, donc $g\\circ f$ est croissante.' }],
    },
    {
      id: '1bac-gen-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'دور', fr: 'Période' },
      statement: { ar: 'ما دور الدالة $f(x)=\\cos(2x)$؟', fr: 'Quelle est la période de $f(x)=\\cos(2x)$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\pi$', fr: '$\\pi$' }, { ar: '$2\\pi$', fr: '$2\\pi$' }, { ar: '$\\dfrac\\pi2$', fr: '$\\dfrac\\pi2$' }, { ar: '$4\\pi$', fr: '$4\\pi$' }], correct: 0 },
      hints: [{ ar: '$\\cos(2(x+T))=\\cos(2x+2T)$.', fr: '$\\cos(2(x+T))=\\cos(2x+2T)$.' }],
      solution: [{ ar: '$2T=2\\pi$ إذن $T=\\pi$.', fr: '$2T=2\\pi$ donc $T=\\pi$.' }],
    },
  ],
};
