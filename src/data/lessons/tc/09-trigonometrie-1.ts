import type { LessonModule } from '@/types';

const lessonId = 'tc-trigonometrie-1';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

const c = Math.cos(Math.PI / 3);
const s = Math.sin(Math.PI / 3);

export const trigonometrie1: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'trigo1',
    title: { ar: 'الحساب المثلثي (الجزء 1)', fr: 'Calcul trigonométrique (partie 1)' },
    summary: {
      ar: 'الراديان، الدائرة المثلثية والأفاصيل المنحنية، جيب التمام والجيب لعدد حقيقي، والعلاقات الأساسية.',
      fr: 'Le radian, le cercle trigonométrique et les abscisses curvilignes, cosinus et sinus d’un réel, relations fondamentales.',
    },
    objectives: [
      { ar: 'التحويل بين الدرجة والراديان.', fr: 'Convertir degrés et radians.' },
      { ar: 'تحديد $\\cos x$ و $\\sin x$ على الدائرة المثلثية.', fr: 'Lire $\\cos x$ et $\\sin x$ sur le cercle trigonométrique.' },
      { ar: 'استعمال العلاقات المثلثية الأساسية.', fr: 'Utiliser les relations trigonométriques fondamentales.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['radian', 'cercle trigonométrique', 'cosinus', 'sinus', 'abscisse curviligne', 'راديان', 'دائرة مثلثية', 'جيب تمام', 'جيب'],
    sections: [
      {
        id: 'radian',
        title: { ar: 'الراديان', fr: 'Le radian' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '$\\pi\\,\\text{rad}=180^\\circ$. إذا كان $x$ قياساً بالراديان و $\\alpha$ بالدرجات: $\\dfrac x\\pi=\\dfrac\\alpha{180}$. مثال: $60^\\circ=\\dfrac\\pi3$ و $150^\\circ=\\dfrac{5\\pi}6$.',
              fr: '$\\pi\\,\\text{rad}=180^\\circ$. Si $x$ est en radians et $\\alpha$ en degrés : $\\dfrac x\\pi=\\dfrac\\alpha{180}$. Exemple : $60^\\circ=\\dfrac\\pi3$ et $150^\\circ=\\dfrac{5\\pi}6$.',
            },
          },
        ],
      },
      {
        id: 'cercle',
        title: { ar: 'الدائرة المثلثية', fr: 'Cercle trigonométrique' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الدائرة المثلثية هي دائرة مركزها $O$ وشعاعها $1$، موجهة في المنحى المباشر. لكل عدد حقيقي $x$ نقطة $M$ أفصولها المنحني $x$؛ إحداثيتا $M$ هما $(\\cos x;\\sin x)$. للنقطة $M$ أفاصيل منحنية $x+2k\\pi$ ($k\\in\\mathbb Z$).',
              fr: 'Le cercle trigonométrique est le cercle de centre $O$, de rayon $1$, orienté dans le sens direct. À tout réel $x$ correspond un point $M$ d’abscisse curviligne $x$ ; ses coordonnées sont $(\\cos x;\\sin x)$. $M$ a pour abscisses curvilignes $x+2k\\pi$ ($k\\in\\mathbb Z$).',
            },
          },
          {
            kind: 'geometry',
            x: [-1.4, 1.4],
            y: [-1.3, 1.3],
            polygons: [{ points: circle(0, 0, 1), color: 'brand' }],
            segments: [
              { from: [-1.3, 0], to: [1.3, 0] },
              { from: [0, -1.25], to: [0, 1.25] },
              { from: [0, 0], to: [c, s] },
              { from: [c, s], to: [c, 0], dashed: true },
              { from: [c, s], to: [0, s], dashed: true },
            ],
            points: [
              { x: c, y: s, label: 'M' },
              { x: c, y: 0, label: 'cos x' },
              { x: 0, y: s, label: 'sin x' },
            ],
            caption: { ar: '$M$ صورة $x=\\dfrac\\pi3$: $\\cos x=\\dfrac12$ و $\\sin x=\\dfrac{\\sqrt3}2$.', fr: '$M$ image de $x=\\dfrac\\pi3$ : $\\cos x=\\dfrac12$ et $\\sin x=\\dfrac{\\sqrt3}2$.' },
          },
          {
            kind: 'property',
            content: {
              ar: '• $-1\\le\\cos x\\le1$ و $-1\\le\\sin x\\le1$ و $\\cos^2x+\\sin^2x=1$.\n\n• $\\cos(-x)=\\cos x$ ؛ $\\sin(-x)=-\\sin x$.\n\n• $\\cos(\\pi-x)=-\\cos x$ ؛ $\\sin(\\pi-x)=\\sin x$ ؛ $\\cos(\\pi+x)=-\\cos x$ ؛ $\\sin(\\pi+x)=-\\sin x$.\n\n• $\\cos\\left(\\dfrac\\pi2-x\\right)=\\sin x$ ؛ $\\sin\\left(\\dfrac\\pi2-x\\right)=\\cos x$.',
              fr: '• $-1\\le\\cos x\\le1$, $-1\\le\\sin x\\le1$ et $\\cos^2x+\\sin^2x=1$.\n\n• $\\cos(-x)=\\cos x$ ; $\\sin(-x)=-\\sin x$.\n\n• $\\cos(\\pi-x)=-\\cos x$ ; $\\sin(\\pi-x)=\\sin x$ ; $\\cos(\\pi+x)=-\\cos x$ ; $\\sin(\\pi+x)=-\\sin x$.\n\n• $\\cos\\left(\\dfrac\\pi2-x\\right)=\\sin x$ ; $\\sin\\left(\\dfrac\\pi2-x\\right)=\\cos x$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\pi\\,\\text{rad}=180^\\circ$.', fr: '$\\pi\\,\\text{rad}=180^\\circ$.' },
      { ar: '$M(\\cos x;\\sin x)$ و $\\cos^2x+\\sin^2x=1$.', fr: '$M(\\cos x;\\sin x)$ et $\\cos^2x+\\sin^2x=1$.' },
    ],
  },
  exercises: [
    {
      id: 'tc-tr1-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'تحويل', fr: 'Conversion' },
      statement: { ar: 'ما قياس $150^\\circ$ بالراديان؟', fr: 'Quelle est la mesure de $150^\\circ$ en radians ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac{5\\pi}6$', fr: '$\\dfrac{5\\pi}6$' }, { ar: '$\\dfrac{3\\pi}4$', fr: '$\\dfrac{3\\pi}4$' }, { ar: '$\\dfrac{2\\pi}3$', fr: '$\\dfrac{2\\pi}3$' }, { ar: '$\\dfrac{5\\pi}3$', fr: '$\\dfrac{5\\pi}3$' }],
        correct: 0,
      },
      hints: [{ ar: '$150\\times\\dfrac\\pi{180}$.', fr: '$150\\times\\dfrac\\pi{180}$.' }],
      solution: [{ ar: '$\\dfrac{150\\pi}{180}=\\dfrac{5\\pi}6$.', fr: '$\\dfrac{150\\pi}{180}=\\dfrac{5\\pi}6$.' }],
    },
    {
      id: 'tc-tr1-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'قيمة خاصة', fr: 'Valeur remarquable' },
      statement: { ar: 'احسب $\\cos\\dfrac{2\\pi}3$.', fr: 'Calculer $\\cos\\dfrac{2\\pi}3$.' },
      question: { type: 'numeric', answer: -0.5, tolerance: 1e-9 },
      hints: [{ ar: '$\\dfrac{2\\pi}3=\\pi-\\dfrac\\pi3$.', fr: '$\\dfrac{2\\pi}3=\\pi-\\dfrac\\pi3$.' }],
      solution: [{ ar: '$\\cos\\left(\\pi-\\dfrac\\pi3\\right)=-\\cos\\dfrac\\pi3=-\\dfrac12$.', fr: '$\\cos\\left(\\pi-\\dfrac\\pi3\\right)=-\\cos\\dfrac\\pi3=-\\dfrac12$.' }],
    },
    {
      id: 'tc-tr1-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'إشارة الجيب', fr: 'Signe du sinus' },
      statement: { ar: '$x\\in\\left]-\\dfrac\\pi2;0\\right[$ و $\\cos x=\\dfrac35$. احسب $\\sin x$.', fr: '$x\\in\\left]-\\dfrac\\pi2;0\\right[$ et $\\cos x=\\dfrac35$. Calculer $\\sin x$.' },
      question: { type: 'numeric', answer: -0.8, tolerance: 1e-9 },
      hints: [{ ar: 'في هذا المجال $\\sin x<0$.', fr: 'Sur cet intervalle, $\\sin x<0$.' }],
      solution: [{ ar: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ و $\\sin x<0$ إذن $\\sin x=-\\dfrac45=-0{,}8$.', fr: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ et $\\sin x<0$ donc $\\sin x=-\\dfrac45=-0{,}8$.' }],
    },
    {
      id: 'tc-tr1-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'تبسيط', fr: 'Simplifier' },
      statement: { ar: 'بسّط $A=\\sin(\\pi-x)+\\sin(-x)+\\cos\\left(\\dfrac\\pi2-x\\right)$.', fr: 'Simplifier $A=\\sin(\\pi-x)+\\sin(-x)+\\cos\\left(\\dfrac\\pi2-x\\right)$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\sin x$', fr: '$\\sin x$' }, { ar: '$3\\sin x$', fr: '$3\\sin x$' }, { ar: '$0$', fr: '$0$' }, { ar: '$\\cos x$', fr: '$\\cos x$' }],
        correct: 0,
      },
      hints: [{ ar: 'استعمل العلاقات الثلاث.', fr: 'Utilise les trois relations.' }],
      solution: [{ ar: '$A=\\sin x-\\sin x+\\sin x=\\sin x$.', fr: '$A=\\sin x-\\sin x+\\sin x=\\sin x$.' }],
    },
  ],
};
