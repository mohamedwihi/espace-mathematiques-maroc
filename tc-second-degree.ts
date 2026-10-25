import type { Lesson } from '@/types';

export const lessonTcSecondDegree: Lesson = {
  id: 'tc-second-degree',
  levelId: 'tc',
  unitId: 'eq2',
  streams: ['tc-sci', 'tc-tech'],
  title: { ar: 'معادلات ومتراجحات الدرجة الثانية', fr: 'Équations et inéquations du second degré' },
  summary: {
    ar: 'المميز، حل المعادلة $ax^2+bx+c=0$، تحليل ثلاثية الحدود، ودراسة إشارتها لحل المتراجحات.',
    fr: 'Discriminant, résolution de $ax^2+bx+c=0$, factorisation du trinôme et étude de son signe pour résoudre des inéquations.',
  },
  objectives: [
    { ar: 'حساب المميز $\\Delta$ لثلاثية حدود.', fr: 'Calculer le discriminant $\\Delta$ d’un trinôme.' },
    { ar: 'حل معادلة من الدرجة الثانية حسب إشارة $\\Delta$.', fr: 'Résoudre une équation du second degré selon le signe de $\\Delta$.' },
    { ar: 'تحليل ثلاثية حدود إلى جداء.', fr: 'Factoriser un trinôme.' },
    { ar: 'دراسة إشارة ثلاثية حدود وحل متراجحة.', fr: 'Étudier le signe d’un trinôme et résoudre une inéquation.' },
  ],
  durationMinutes: 50,
  reviewed: false,
  featured: true,
  keywords: ['discriminant', 'delta', 'trinôme', 'second degré', 'parabole', 'مميز', 'ثلاثية الحدود', 'الدرجة الثانية'],
  sections: [
    {
      id: 'discriminant',
      title: { ar: 'المميز وحل المعادلة', fr: 'Discriminant et résolution' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'لتكن ثلاثية الحدود $P(x)=ax^2+bx+c$ حيث $a\\neq0$. نسمي **مميز** $P$ العدد:',
            fr: 'Soit le trinôme $P(x)=ax^2+bx+c$ avec $a\\neq0$. On appelle **discriminant** de $P$ le nombre :',
          },
        },
        { kind: 'formula', tex: '\\Delta=b^2-4ac' },
        {
          kind: 'theorem',
          content: {
            ar: '• إذا كان $\\Delta>0$: للمعادلة $P(x)=0$ حلان مختلفان $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ و $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\n\n• إذا كان $\\Delta=0$: للمعادلة حل وحيد (مزدوج) $x_0=-\\dfrac{b}{2a}$.\n\n• إذا كان $\\Delta<0$: ليس للمعادلة حل في $\\mathbb{R}$.',
            fr: '• Si $\\Delta>0$ : l’équation $P(x)=0$ admet deux solutions distinctes $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ et $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\n\n• Si $\\Delta=0$ : elle admet une solution unique (double) $x_0=-\\dfrac{b}{2a}$.\n\n• Si $\\Delta<0$ : elle n’admet aucune solution dans $\\mathbb{R}$.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'حل في $\\mathbb{R}$ المعادلة $2x^2-3x-2=0$.', fr: 'Résoudre dans $\\mathbb{R}$ l’équation $2x^2-3x-2=0$.' },
          steps: [
            { ar: '$a=2$ و $b=-3$ و $c=-2$.', fr: '$a=2$, $b=-3$ et $c=-2$.' },
            { ar: '$\\Delta=(-3)^2-4\\times2\\times(-2)=9+16=25>0$ و $\\sqrt\\Delta=5$.', fr: '$\\Delta=(-3)^2-4\\times2\\times(-2)=9+16=25>0$ et $\\sqrt\\Delta=5$.' },
            { ar: '$x_1=\\dfrac{3-5}{4}=-\\dfrac12$ و $x_2=\\dfrac{3+5}{4}=2$.', fr: '$x_1=\\dfrac{3-5}{4}=-\\dfrac12$ et $x_2=\\dfrac{3+5}{4}=2$.' },
            { ar: '$S=\\left\\{-\\dfrac12;\\,2\\right\\}$.', fr: '$S=\\left\\{-\\dfrac12;\\,2\\right\\}$.' },
          ],
        },
        {
          kind: 'example',
          statement: { ar: 'حل المعادلتين $x^2-4x+4=0$ و $x^2+x+1=0$.', fr: 'Résoudre $x^2-4x+4=0$ et $x^2+x+1=0$.' },
          steps: [
            { ar: 'الأولى: $\\Delta=16-16=0$، إذن حل مزدوج $x_0=\\dfrac{4}{2}=2$، و $S=\\{2\\}$.', fr: 'Première : $\\Delta=16-16=0$, donc solution double $x_0=\\dfrac{4}{2}=2$ et $S=\\{2\\}$.' },
            { ar: 'الثانية: $\\Delta=1-4=-3<0$، إذن $S=\\varnothing$.', fr: 'Seconde : $\\Delta=1-4=-3<0$, donc $S=\\varnothing$.' },
          ],
        },
      ],
    },
    {
      id: 'factorisation',
      title: { ar: 'تحليل ثلاثية الحدود', fr: 'Factorisation du trinôme' },
      blocks: [
        {
          kind: 'property',
          content: {
            ar: '• إذا كان $\\Delta>0$: $P(x)=a(x-x_1)(x-x_2)$.\n\n• إذا كان $\\Delta=0$: $P(x)=a(x-x_0)^2$.\n\n• إذا كان $\\Delta<0$: لا يمكن تحليل $P(x)$ إلى جداء عاملين من الدرجة الأولى.',
            fr: '• Si $\\Delta>0$ : $P(x)=a(x-x_1)(x-x_2)$.\n\n• Si $\\Delta=0$ : $P(x)=a(x-x_0)^2$.\n\n• Si $\\Delta<0$ : $P(x)$ ne se factorise pas en produit de facteurs du premier degré.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'حلل $2x^2-3x-2$.', fr: 'Factoriser $2x^2-3x-2$.' },
          steps: [
            { ar: 'وجدنا الجذرين $-\\dfrac12$ و $2$.', fr: 'Nous avons trouvé les racines $-\\dfrac12$ et $2$.' },
            { ar: '$2x^2-3x-2=2\\left(x+\\dfrac12\\right)(x-2)=(2x+1)(x-2)$.', fr: '$2x^2-3x-2=2\\left(x+\\dfrac12\\right)(x-2)=(2x+1)(x-2)$.' },
          ],
        },
      ],
    },
    {
      id: 'sign',
      title: { ar: 'إشارة ثلاثية الحدود والمتراجحات', fr: 'Signe du trinôme et inéquations' },
      blocks: [
        {
          kind: 'rule',
          content: {
            ar: 'ثلاثية الحدود لها إشارة $a$ **خارج** الجذرين، وعكس إشارة $a$ **بين** الجذرين. إذا كان $\\Delta<0$ فلها إشارة $a$ على $\\mathbb{R}$ كله.',
            fr: 'Le trinôme est du signe de $a$ **à l’extérieur** des racines et du signe contraire de $a$ **entre** les racines. Si $\\Delta<0$, il est du signe de $a$ sur tout $\\mathbb{R}$.',
          },
        },
        {
          kind: 'graph',
          x: [-3, 5],
          y: [-5, 6],
          functions: [{ fn: (x) => x * x - 2 * x - 3, label: 'f(x)=x^2-2x-3', color: 'brand' }],
          points: [
            { x: -1, y: 0, label: '-1' },
            { x: 3, y: 0, label: '3' },
            { x: 1, y: -4, label: 'S(1;-4)' },
          ],
          caption: {
            ar: 'المنحنى (شلجم) يوجد تحت محور الأفاصيل بين الجذرين $-1$ و $3$ لأن $a=1>0$.',
            fr: 'La courbe (parabole) est sous l’axe des abscisses entre les racines $-1$ et $3$ car $a=1>0$.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'حل في $\\mathbb{R}$ المتراجحة $x^2-2x-3\\le0$.', fr: 'Résoudre dans $\\mathbb{R}$ l’inéquation $x^2-2x-3\\le0$.' },
          steps: [
            { ar: '$\\Delta=4+12=16$، الجذران: $x_1=\\dfrac{2-4}{2}=-1$ و $x_2=\\dfrac{2+4}{2}=3$.', fr: '$\\Delta=4+12=16$, racines : $x_1=\\dfrac{2-4}{2}=-1$ et $x_2=\\dfrac{2+4}{2}=3$.' },
            { ar: '$a=1>0$، إذن ثلاثية الحدود سالبة بين الجذرين.', fr: '$a=1>0$, donc le trinôme est négatif entre les racines.' },
            { ar: '$S=[-1;3]$.', fr: '$S=[-1;3]$.' },
          ],
        },
      ],
    },
  ],
  recap: [
    { ar: '$\\Delta=b^2-4ac$.', fr: '$\\Delta=b^2-4ac$.' },
    { ar: '$\\Delta>0$: حلان $\\frac{-b\\pm\\sqrt\\Delta}{2a}$ ؛ $\\Delta=0$: حل مزدوج $-\\frac{b}{2a}$ ؛ $\\Delta<0$: لا حل.', fr: '$\\Delta>0$ : deux solutions $\\frac{-b\\pm\\sqrt\\Delta}{2a}$ ; $\\Delta=0$ : solution double $-\\frac{b}{2a}$ ; $\\Delta<0$ : aucune.' },
    { ar: 'التحليل: $a(x-x_1)(x-x_2)$.', fr: 'Factorisation : $a(x-x_1)(x-x_2)$.' },
    { ar: 'الإشارة: عكس إشارة $a$ بين الجذرين فقط.', fr: 'Signe : contraire de $a$ uniquement entre les racines.' },
  ],
};
