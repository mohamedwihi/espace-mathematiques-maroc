import type { LessonModule } from '@/types';

const lessonId = '2bac-geometrie-espace';

export const geometrieEspace: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'space',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'الهندسة الفضائية', fr: 'Géométrie dans l’espace' },
    summary: {
      ar: 'الجداء السلمي في الفضاء، معادلة مستوى بمتجهة منظمية، المسافة بين نقطة ومستوى، الفلكة، والجداء المتجهي.',
      fr: 'Produit scalaire dans l’espace, équation d’un plan par vecteur normal, distance d’un point à un plan, sphère et produit vectoriel.',
    },
    objectives: [
      { ar: 'تحديد معادلة مستوى بمتجهة منظمية.', fr: 'Déterminer l’équation d’un plan à l’aide d’un vecteur normal.' },
      { ar: 'دراسة الوضع النسبي لفلكة ومستوى.', fr: 'Étudier la position relative d’une sphère et d’un plan.' },
      { ar: 'استعمال الجداء المتجهي.', fr: 'Utiliser le produit vectoriel.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['espace', 'produit scalaire', 'produit vectoriel', 'sphère', 'plan', 'فضاء', 'فلكة', 'جداء متجهي', 'مستوى'],
    sections: [
      {
        id: 'scalaire',
        title: { ar: 'الجداء السلمي والمستوى', fr: 'Produit scalaire et plan' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في معلم متعامد ممنظم:\n\n• $\\vec u(x;y;z)\\cdot\\vec v(x\';y\';z\')=xx\'+yy\'+zz\'$ و $\\|\\vec u\\|=\\sqrt{x^2+y^2+z^2}$.\n\n• المستوى المار من $A$ والذي $\\vec n(a;b;c)$ منظمية عليه: $M\\in(P)\\iff\\overrightarrow{AM}\\cdot\\vec n=0$، ومعادلته $ax+by+cz+d=0$.\n\n• $d(A,(P))=\\dfrac{|ax_A+by_A+cz_A+d|}{\\sqrt{a^2+b^2+c^2}}$.',
              fr: 'Dans un repère orthonormé :\n\n• $\\vec u(x;y;z)\\cdot\\vec v(x\';y\';z\')=xx\'+yy\'+zz\'$ et $\\|\\vec u\\|=\\sqrt{x^2+y^2+z^2}$.\n\n• Le plan passant par $A$ de vecteur normal $\\vec n(a;b;c)$ : $M\\in(P)\\iff\\overrightarrow{AM}\\cdot\\vec n=0$, d’équation $ax+by+cz+d=0$.\n\n• $d(A,(P))=\\dfrac{|ax_A+by_A+cz_A+d|}{\\sqrt{a^2+b^2+c^2}}$.',
            },
          },
        ],
      },
      {
        id: 'sphere',
        title: { ar: 'الفلكة', fr: 'La sphère' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• الفلكة $(S)$ التي مركزها $\\Omega(a;b;c)$ وشعاعها $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.\n\n• الفلكة التي أحد أقطارها $[AB]$: $\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0$.\n\n• ليكن $d=d(\\Omega,(P))$: إذا كان $d>R$ فلا تقاطع؛ إذا كان $d=R$ فـ $(P)$ مماس لـ $(S)$؛ إذا كان $d<R$ فالتقاطع دائرة شعاعها $r=\\sqrt{R^2-d^2}$.',
              fr: '• La sphère $(S)$ de centre $\\Omega(a;b;c)$ et de rayon $R$ : $(x-a)^2+(y-b)^2+(z-c)^2=R^2$.\n\n• Sphère de diamètre $[AB]$ : $\\overrightarrow{MA}\\cdot\\overrightarrow{MB}=0$.\n\n• Soit $d=d(\\Omega,(P))$ : si $d>R$, pas d’intersection ; si $d=R$, $(P)$ est tangent à $(S)$ ; si $d<R$, l’intersection est un cercle de rayon $r=\\sqrt{R^2-d^2}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$(S):x^2+y^2+z^2=25$ و $(P):z=3$. حدد تقاطعهما.', fr: '$(S):x^2+y^2+z^2=25$ et $(P):z=3$. Déterminer leur intersection.' },
            steps: [{ ar: '$d(O,(P))=3<5$: دائرة مركزها $(0;0;3)$ وشعاعها $\\sqrt{25-9}=4$.', fr: '$d(O,(P))=3<5$ : cercle de centre $(0;0;3)$ et de rayon $\\sqrt{25-9}=4$.' }],
          },
        ],
      },
      {
        id: 'vectoriel',
        title: { ar: 'الجداء المتجهي', fr: 'Produit vectoriel' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '$\\vec u(x;y;z)\\wedge\\vec v(x\';y\';z\')=(yz\'-zy\';\\ zx\'-xz\';\\ xy\'-yx\')$.\n\n• $\\vec u\\wedge\\vec v$ عمودية على $\\vec u$ و $\\vec v$، و $\\vec u\\wedge\\vec v=\\vec0\\iff\\vec u$ و $\\vec v$ مستقيميتان.\n\n• $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}$ منظمية على المستوى $(ABC)$، ومساحة المثلث $ABC$ هي $\\dfrac12\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$.\n\n• المسافة بين $M$ والمستقيم $D(A,\\vec u)$: $\\dfrac{\\|\\overrightarrow{AM}\\wedge\\vec u\\|}{\\|\\vec u\\|}$.',
              fr: '$\\vec u(x;y;z)\\wedge\\vec v(x\';y\';z\')=(yz\'-zy\';\\ zx\'-xz\';\\ xy\'-yx\')$.\n\n• $\\vec u\\wedge\\vec v$ est orthogonal à $\\vec u$ et $\\vec v$ ; $\\vec u\\wedge\\vec v=\\vec0\\iff\\vec u$ et $\\vec v$ colinéaires.\n\n• $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}$ est normal au plan $(ABC)$ et l’aire du triangle $ABC$ vaut $\\dfrac12\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$.\n\n• Distance de $M$ à la droite $D(A,\\vec u)$ : $\\dfrac{\\|\\overrightarrow{AM}\\wedge\\vec u\\|}{\\|\\vec u\\|}$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'مستوى: $\\overrightarrow{AM}\\cdot\\vec n=0$.', fr: 'Plan : $\\overrightarrow{AM}\\cdot\\vec n=0$.' },
      { ar: 'فلكة ومستوى: نقارن $d(\\Omega,(P))$ و $R$.', fr: 'Sphère et plan : comparer $d(\\Omega,(P))$ et $R$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-esp-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مسافة', fr: 'Distance' },
      statement: { ar: 'احسب المسافة بين $O$ والمستوى $2x-y+2z-9=0$.', fr: 'Calculer la distance de $O$ au plan $2x-y+2z-9=0$.' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$\\sqrt{4+1+4}=3$.', fr: '$\\sqrt{4+1+4}=3$.' }],
      solution: [{ ar: '$d=\\dfrac93=3$.', fr: '$d=\\dfrac93=3$.' }],
    },
    {
      id: '2bac-esp-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'شعاع فلكة', fr: 'Rayon d’une sphère' },
      statement: { ar: 'ما شعاع الفلكة $x^2+y^2+z^2-2x+4z-4=0$؟', fr: 'Quel est le rayon de la sphère $x^2+y^2+z^2-2x+4z-4=0$ ?' },
      question: { type: 'numeric', answer: 3 },
      hints: [{ ar: '$(x-1)^2+y^2+(z+2)^2=9$.', fr: '$(x-1)^2+y^2+(z+2)^2=9$.' }],
      solution: [{ ar: '$R=\\sqrt{1+4+4}=3$ والمركز $\\Omega(1;0;-2)$.', fr: '$R=\\sqrt{1+4+4}=3$, centre $\\Omega(1;0;-2)$.' }],
    },
    {
      id: '2bac-esp-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'جداء متجهي', fr: 'Produit vectoriel' },
      statement: { ar: 'ما الإحداثية الثالثة لـ $\\vec i\\wedge\\vec j$ حيث $\\vec i(1;0;0)$ و $\\vec j(0;1;0)$؟', fr: 'Quelle est la troisième coordonnée de $\\vec i\\wedge\\vec j$ avec $\\vec i(1;0;0)$ et $\\vec j(0;1;0)$ ?' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$xy\'-yx\'$.', fr: '$xy\'-yx\'$.' }],
      solution: [{ ar: '$\\vec i\\wedge\\vec j=\\vec k=(0;0;1)$.', fr: '$\\vec i\\wedge\\vec j=\\vec k=(0;0;1)$.' }],
    },
    {
      id: '2bac-esp-04',
      lessonId,
      levelId: '2bac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'مقطع فلكة', fr: 'Section d’une sphère' },
      statement: { ar: 'فلكة شعاعها $13$ ومستوى يبعد عن مركزها بـ $5$. ما شعاع دائرة التقاطع؟', fr: 'Une sphère de rayon $13$ et un plan à distance $5$ de son centre. Quel est le rayon du cercle d’intersection ?' },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: '$\\sqrt{169-25}$.', fr: '$\\sqrt{169-25}$.' }],
      solution: [{ ar: '$r=\\sqrt{144}=12$.', fr: '$r=\\sqrt{144}=12$.' }],
    },
  ],
};
