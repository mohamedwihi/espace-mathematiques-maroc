import type { LessonModule } from '@/types';

const lessonId = '1bac-produit-scalaire';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const produitScalaire: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'scalar',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'الجداء السلمي في المستوى', fr: 'Produit scalaire dans le plan' },
    summary: {
      ar: 'الصيغة التحليلية، المسافة بين نقطة ومستقيم، المتجهة المنظمية، ومعادلة الدائرة وتقاطعها مع مستقيم.',
      fr: 'Expression analytique, distance d’un point à une droite, vecteur normal, équation d’un cercle et intersection avec une droite.',
    },
    objectives: [
      { ar: 'استعمال المتجهة المنظمية لتحديد معادلة مستقيم.', fr: 'Utiliser un vecteur normal pour écrire l’équation d’une droite.' },
      { ar: 'حساب المسافة بين نقطة ومستقيم.', fr: 'Calculer la distance d’un point à une droite.' },
      { ar: 'تحديد مركز وشعاع دائرة من معادلتها.', fr: 'Trouver le centre et le rayon d’un cercle à partir de son équation.' },
    ],
    durationMinutes: 50,
    reviewed: false,
    keywords: ['produit scalaire', 'vecteur normal', 'distance', 'cercle', 'جداء سلمي', 'متجهة منظمية', 'مسافة', 'دائرة'],
    sections: [
      {
        id: 'analytique',
        title: { ar: 'الصيغة التحليلية والتطبيقات', fr: 'Expression analytique et applications' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في معلم متعامد ممنظم: $\\vec u(x;y)\\cdot\\vec v(x\';y\')=xx\'+yy\'$ ؛ $\\|\\vec u\\|=\\sqrt{x^2+y^2}$ ؛ $\\cos(\\widehat{\\vec u,\\vec v})=\\dfrac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\|\\vec v\\|}$.',
              fr: 'En repère orthonormé : $\\vec u(x;y)\\cdot\\vec v(x\';y\')=xx\'+yy\'$ ; $\\|\\vec u\\|=\\sqrt{x^2+y^2}$ ; $\\cos(\\widehat{\\vec u,\\vec v})=\\dfrac{\\vec u\\cdot\\vec v}{\\|\\vec u\\|\\|\\vec v\\|}$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'المتجهة المنظمية والمسافة', fr: 'Vecteur normal et distance' },
            content: {
              ar: '• المستقيم $(D):ax+by+c=0$ يقبل $\\vec n(a;b)$ متجهة منظمية (عمودية عليه).\n\n• المسافة بين $A(x_0;y_0)$ و $(D)$: $d(A,(D))=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$.',
              fr: '• La droite $(D):ax+by+c=0$ admet $\\vec n(a;b)$ comme vecteur normal.\n\n• Distance de $A(x_0;y_0)$ à $(D)$ : $d(A,(D))=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب المسافة بين $A(1;2)$ والمستقيم $3x+4y-1=0$.', fr: 'Calculer la distance de $A(1;2)$ à la droite $3x+4y-1=0$.' },
            steps: [{ ar: '$d=\\dfrac{|3+8-1|}{5}=2$.', fr: '$d=\\dfrac{|3+8-1|}{5}=2$.' }],
          },
        ],
      },
      {
        id: 'cercle',
        title: { ar: 'الدائرة', fr: 'Le cercle' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• الدائرة التي مركزها $\\Omega(a;b)$ وشعاعها $r$: $(x-a)^2+(y-b)^2=r^2$.\n\n• المعادلة $x^2+y^2-2ax-2by+c=0$ تمثل دائرة إذا كان $a^2+b^2-c>0$، شعاعها $r=\\sqrt{a^2+b^2-c}$.\n\n• الدائرة التي أحد أقطارها $[AB]$: $M$ منها ⟺ $\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0$.\n\n• مستقيم $(D)$ مماس للدائرة إذا كان $d(\\Omega,(D))=r$، ويقطعها في نقطتين إذا كان $d<r$.',
              fr: '• Le cercle de centre $\\Omega(a;b)$ et de rayon $r$ : $(x-a)^2+(y-b)^2=r^2$.\n\n• L’équation $x^2+y^2-2ax-2by+c=0$ est celle d’un cercle si $a^2+b^2-c>0$, de rayon $r=\\sqrt{a^2+b^2-c}$.\n\n• Cercle de diamètre $[AB]$ : $M$ y appartient ⟺ $\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0$.\n\n• Une droite $(D)$ est tangente au cercle si $d(\\Omega,(D))=r$ ; elle le coupe en deux points si $d<r$.',
            },
          },
          {
            kind: 'geometry',
            polygons: [{ points: circle(1, 2, 2), color: 'brand' }],
            segments: [{ from: [-2, 0], to: [4, 0] }],
            points: [{ x: 1, y: 2, label: 'Ω(1;2)' }, { x: 1, y: 0, label: 'T' }],
            x: [-2, 4],
            y: [-1, 5],
            caption: { ar: 'الدائرة $(x-1)^2+(y-2)^2=4$ مماسة لمحور الأفاصيل في $T(1;0)$.', fr: 'Le cercle $(x-1)^2+(y-2)^2=4$ est tangent à l’axe des abscisses en $T(1;0)$.' },
          },
        ],
      },
    ],
    recap: [
      { ar: '$d(A,(D))=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$.', fr: '$d(A,(D))=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$.' },
      { ar: 'دائرة: $(x-a)^2+(y-b)^2=r^2$.', fr: 'Cercle : $(x-a)^2+(y-b)^2=r^2$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-psc-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مسافة', fr: 'Distance' },
      statement: { ar: 'احسب المسافة بين $O(0;0)$ والمستقيم $6x-8y+20=0$.', fr: 'Calculer la distance de $O(0;0)$ à la droite $6x-8y+20=0$.' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$\\sqrt{36+64}=10$.', fr: '$\\sqrt{36+64}=10$.' }],
      solution: [{ ar: '$d=\\dfrac{20}{10}=2$.', fr: '$d=\\dfrac{20}{10}=2$.' }],
    },
    {
      id: '1bac-psc-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'شعاع دائرة', fr: 'Rayon d’un cercle' },
      statement: { ar: 'ما شعاع الدائرة $x^2+y^2-4x+6y-3=0$؟', fr: 'Quel est le rayon du cercle $x^2+y^2-4x+6y-3=0$ ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$(x-2)^2+(y+3)^2=16$.', fr: '$(x-2)^2+(y+3)^2=16$.' }],
      solution: [{ ar: '$r=\\sqrt{4+9+3}=4$ والمركز $\\Omega(2;-3)$.', fr: '$r=\\sqrt{4+9+3}=4$, centre $\\Omega(2;-3)$.' }],
    },
    {
      id: '1bac-psc-03',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'متجهة منظمية', fr: 'Vecteur normal' },
      statement: { ar: 'ما متجهة منظمية للمستقيم $2x-5y+1=0$؟', fr: 'Quel est un vecteur normal à la droite $2x-5y+1=0$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\vec n(2;-5)$', fr: '$\\vec n(2;-5)$' }, { ar: '$\\vec n(5;2)$', fr: '$\\vec n(5;2)$' }, { ar: '$\\vec n(-5;2)$', fr: '$\\vec n(-5;2)$' }], correct: 0 },
      hints: [{ ar: '$\\vec n(a;b)$.', fr: '$\\vec n(a;b)$.' }],
      solution: [{ ar: '$\\vec n(2;-5)$؛ أما $(5;2)$ فهي متجهة موجهة.', fr: '$\\vec n(2;-5)$ ; $(5;2)$ est un vecteur directeur.' }],
    },
    {
      id: '1bac-psc-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'وضع مستقيم ودائرة', fr: 'Position droite-cercle' },
      statement: { ar: 'الدائرة مركزها $\\Omega(0;0)$ وشعاعها $3$، والمستقيم $x+y-6=0$. ما وضعيتهما؟', fr: 'Cercle de centre $\\Omega(0;0)$ et de rayon $3$, droite $x+y-6=0$. Quelle est leur position ?' },
      question: { type: 'mcq', options: [{ ar: 'لا يتقاطعان', fr: 'Ils ne se coupent pas' }, { ar: 'المستقيم مماس', fr: 'La droite est tangente' }, { ar: 'يتقاطعان في نقطتين', fr: 'Deux points d’intersection' }], correct: 0 },
      hints: [{ ar: '$d=\\dfrac{6}{\\sqrt2}=3\\sqrt2$.', fr: '$d=\\dfrac{6}{\\sqrt2}=3\\sqrt2$.' }],
      solution: [{ ar: '$d=3\\sqrt2\\approx4{,}24>3$: لا يتقاطعان.', fr: '$d=3\\sqrt2\\approx4{,}24>3$ : pas d’intersection.' }],
    },
  ],
};
