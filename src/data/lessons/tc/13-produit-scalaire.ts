import type { LessonModule } from '@/types';

const lessonId = 'tc-produit-scalaire';

export const produitScalaire: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'scalar',
    title: { ar: 'الجداء السلمي', fr: 'Le produit scalaire' },
    summary: {
      ar: 'تعريف الجداء السلمي بالإسقاط العمودي وبالزاوية، خاصياته، التعامد، والصيغة التحليلية في معلم متعامد ممنظم.',
      fr: 'Produit scalaire par projection orthogonale et par l’angle, propriétés, orthogonalité et expression analytique en repère orthonormé.',
    },
    objectives: [
      { ar: 'حساب جداء سلمي بطرق مختلفة.', fr: 'Calculer un produit scalaire de différentes façons.' },
      { ar: 'إثبات تعامد متجهتين.', fr: 'Démontrer l’orthogonalité de deux vecteurs.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['produit scalaire', 'orthogonal', 'norme', 'projection', 'جداء سلمي', 'تعامد', 'منظم'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف', fr: 'Définition' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=AB\\times AC\\times\\cos(B\\hat AC)$.\n\n• إذا كانت $H$ المسقط العمودي لـ $C$ على $(AB)$: $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=\\overrightarrow{AB}\\cdot\\overrightarrow{AH}$، وتساوي $AB\\times AH$ إذا كان للمتجهتين نفس المنحى و $-AB\\times AH$ إذا كان منحياهما متعاكسين.',
              fr: '• $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=AB\\times AC\\times\\cos(B\\hat AC)$.\n\n• Si $H$ est le projeté orthogonal de $C$ sur $(AB)$ : $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=\\overrightarrow{AB}\\cdot\\overrightarrow{AH}$, égal à $AB\\times AH$ si les vecteurs sont de même sens et à $-AB\\times AH$ sinon.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• $\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$ ؛ $\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$ ؛ $\\vec u\\cdot\\vec u=\\|\\vec u\\|^2$.\n\n• $\\vec u\\perp\\vec v\\iff\\vec u\\cdot\\vec v=0$.',
              fr: '• $\\vec u\\cdot\\vec v=\\vec v\\cdot\\vec u$ ; $\\vec u\\cdot(\\vec v+\\vec w)=\\vec u\\cdot\\vec v+\\vec u\\cdot\\vec w$ ; $\\vec u\\cdot\\vec u=\\|\\vec u\\|^2$.\n\n• $\\vec u\\perp\\vec v\\iff\\vec u\\cdot\\vec v=0$.',
            },
          },
        ],
      },
      {
        id: 'analytique',
        title: { ar: 'الصيغة التحليلية', fr: 'Expression analytique' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في معلم متعامد ممنظم، إذا كان $\\vec u(x;y)$ و $\\vec v(x\';y\')$: $\\vec u\\cdot\\vec v=xx\'+yy\'$ و $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.',
              fr: 'Dans un repère orthonormé, si $\\vec u(x;y)$ et $\\vec v(x\';y\')$ : $\\vec u\\cdot\\vec v=xx\'+yy\'$ et $\\|\\vec u\\|=\\sqrt{x^2+y^2}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'هل $\\vec u(2;3)$ و $\\vec v(-3;2)$ متعامدتان؟', fr: '$\\vec u(2;3)$ et $\\vec v(-3;2)$ sont-ils orthogonaux ?' },
            steps: [{ ar: '$\\vec u\\cdot\\vec v=-6+6=0$: نعم، متعامدتان.', fr: '$\\vec u\\cdot\\vec v=-6+6=0$ : oui, ils sont orthogonaux.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\|\\vec v\\|\\cos\\theta=xx\'+yy\'$.', fr: '$\\vec u\\cdot\\vec v=\\|\\vec u\\|\\|\\vec v\\|\\cos\\theta=xx\'+yy\'$.' },
      { ar: 'التعامد ⟺ جداء سلمي منعدم.', fr: 'Orthogonalité ⟺ produit scalaire nul.' },
    ],
  },
  exercises: [
    {
      id: 'tc-psc-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'بالزاوية', fr: 'Avec l’angle' },
      statement: { ar: '$\\|\\vec u\\|=3$ و $\\|\\vec v\\|=4$ والزاوية بينهما $60^\\circ$. احسب $\\vec u\\cdot\\vec v$.', fr: '$\\|\\vec u\\|=3$, $\\|\\vec v\\|=4$ et l’angle entre eux vaut $60^\\circ$. Calculer $\\vec u\\cdot\\vec v$.' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: '$3\\times4\\times\\cos60^\\circ$.', fr: '$3\\times4\\times\\cos60^\\circ$.' }],
      solution: [{ ar: '$12\\times\\dfrac12=6$.', fr: '$12\\times\\dfrac12=6$.' }],
    },
    {
      id: 'tc-psc-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'بالإحداثيات', fr: 'Avec les coordonnées' },
      statement: { ar: 'احسب $\\vec u\\cdot\\vec v$ حيث $\\vec u(1;2)$ و $\\vec v(3;-1)$.', fr: 'Calculer $\\vec u\\cdot\\vec v$ avec $\\vec u(1;2)$ et $\\vec v(3;-1)$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$xx\'+yy\'$.', fr: '$xx\'+yy\'$.' }],
      solution: [{ ar: '$3-2=1$.', fr: '$3-2=1$.' }],
    },
    {
      id: 'tc-psc-03',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'منظم', fr: 'Norme' },
      statement: { ar: 'احسب منظم $\\vec u(3;-4)$.', fr: 'Calculer la norme de $\\vec u(3;-4)$.' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\sqrt{9+16}$.', fr: '$\\sqrt{9+16}$.' }],
      solution: [{ ar: '$\\|\\vec u\\|=5$.', fr: '$\\|\\vec u\\|=5$.' }],
    },
    {
      id: 'tc-psc-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'تعامد', fr: 'Orthogonalité' },
      statement: { ar: 'ما قيمة $m$ التي تجعل $\\vec u(m;2)$ و $\\vec v(4;-6)$ متعامدتين؟', fr: 'Pour quelle valeur de $m$ les vecteurs $\\vec u(m;2)$ et $\\vec v(4;-6)$ sont-ils orthogonaux ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$4m-12=0$.', fr: '$4m-12=0$.' }],
      solution: [{ ar: '$\\vec u\\cdot\\vec v=4m-12=0$ إذن $m=3$.', fr: '$\\vec u\\cdot\\vec v=4m-12=0$ donc $m=3$.' }],
    },
  ],
};
