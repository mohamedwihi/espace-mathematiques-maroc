import type { LessonModule } from '@/types';

const lessonId = '2bac-calcul-integral';

export const calculIntegral: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'integral',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste', 'eco'],
    title: { ar: 'الحساب التكاملي', fr: 'Calcul intégral' },
    summary: {
      ar: 'تكامل دالة متصلة، خاصيات التكامل (شال، الخطية، الترتيب)، القيمة المتوسطة، المكاملة بالأجزاء، وحساب المساحات والأحجام.',
      fr: 'Intégrale d’une fonction continue, propriétés (Chasles, linéarité, ordre), valeur moyenne, intégration par parties, calcul d’aires et de volumes.',
    },
    objectives: [
      { ar: 'حساب تكامل باستعمال دالة أصلية.', fr: 'Calculer une intégrale à l’aide d’une primitive.' },
      { ar: 'استعمال المكاملة بالأجزاء.', fr: 'Utiliser l’intégration par parties.' },
      { ar: 'حساب مساحة حيز وحجم مجسم دوراني.', fr: 'Calculer une aire et un volume de révolution.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['intégrale', 'primitive', 'aire', 'volume', 'intégration par parties', 'تكامل', 'مساحة', 'حجم', 'المكاملة بالأجزاء'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'التعريف والخاصيات', fr: 'Définition et propriétés' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'إذا كانت $f$ متصلة على $[a;b]$ و $F$ دالة أصلية لها: $\\displaystyle\\int_a^bf(x)\\,dx=F(b)-F(a)=\\big[F(x)\\big]_a^b$.',
              fr: 'Si $f$ est continue sur $[a;b]$ et $F$ en est une primitive : $\\displaystyle\\int_a^bf(x)\\,dx=F(b)-F(a)=\\big[F(x)\\big]_a^b$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• **شال**: $\\int_a^cf=\\int_a^bf+\\int_b^cf$.\n\n• **الخطية**: $\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^bf+\\beta\\int_a^bg$.\n\n• **الترتيب**: إذا كان $a\\le b$ و $f\\le g$ على $[a;b]$ فإن $\\int_a^bf\\le\\int_a^bg$.\n\n• **القيمة المتوسطة**: $\\mu=\\dfrac1{b-a}\\int_a^bf(x)\\,dx$.',
              fr: '• **Chasles** : $\\int_a^cf=\\int_a^bf+\\int_b^cf$.\n\n• **Linéarité** : $\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^bf+\\beta\\int_a^bg$.\n\n• **Ordre** : si $a\\le b$ et $f\\le g$ sur $[a;b]$, alors $\\int_a^bf\\le\\int_a^bg$.\n\n• **Valeur moyenne** : $\\mu=\\dfrac1{b-a}\\int_a^bf(x)\\,dx$.',
            },
          },
          {
            kind: 'theorem',
            title: { ar: 'المكاملة بالأجزاء', fr: 'Intégration par parties' },
            content: {
              ar: '$\\displaystyle\\int_a^bu(x)v\'(x)\\,dx=\\big[u(x)v(x)\\big]_a^b-\\int_a^bu\'(x)v(x)\\,dx$.',
              fr: '$\\displaystyle\\int_a^bu(x)v\'(x)\\,dx=\\big[u(x)v(x)\\big]_a^b-\\int_a^bu\'(x)v(x)\\,dx$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $I=\\displaystyle\\int_0^1xe^x\\,dx$.', fr: 'Calculer $I=\\displaystyle\\int_0^1xe^x\\,dx$.' },
            steps: [
              { ar: '$u=x$ و $v\'=e^x$: $u\'=1$ و $v=e^x$.', fr: '$u=x$, $v\'=e^x$ : $u\'=1$, $v=e^x$.' },
              { ar: '$I=\\big[xe^x\\big]_0^1-\\int_0^1e^x\\,dx=e-(e-1)=1$.', fr: '$I=\\big[xe^x\\big]_0^1-\\int_0^1e^x\\,dx=e-(e-1)=1$.' },
            ],
          },
        ],
      },
      {
        id: 'aires',
        title: { ar: 'المساحات والأحجام', fr: 'Aires et volumes' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• مساحة الحيز المحصور بين $C_f$ ومحور الأفاصيل والمستقيمين $x=a$ و $x=b$: $\\mathcal A=\\int_a^b|f(x)|\\,dx\\times u.a$.\n\n• المساحة بين منحنيين: $\\int_a^b|f(x)-g(x)|\\,dx$.\n\n• حجم المجسم المولد بدوران $C_f$ حول محور الأفاصيل: $V=\\int_a^b\\pi f^2(x)\\,dx\\times u.v$.',
              fr: '• Aire du domaine limité par $C_f$, l’axe des abscisses et les droites $x=a$, $x=b$ : $\\mathcal A=\\int_a^b|f(x)|\\,dx\\times u.a$.\n\n• Aire entre deux courbes : $\\int_a^b|f(x)-g(x)|\\,dx$.\n\n• Volume du solide engendré par la rotation de $C_f$ autour de l’axe des abscisses : $V=\\int_a^b\\pi f^2(x)\\,dx\\times u.v$.',
            },
          },
          {
            kind: 'graph',
            functions: [{ fn: (x: number) => x * x, label: 'f(x)=x^2', color: 'brand' }],
            shade: { index: 0, from: 0, to: 2 },
            x: [-1, 3],
            y: [-0.5, 5],
            caption: { ar: '$\\int_0^2x^2\\,dx=\\dfrac83$: مساحة الحيز الملون.', fr: '$\\int_0^2x^2\\,dx=\\dfrac83$ : aire du domaine coloré.' },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\int_a^bf=F(b)-F(a)$.', fr: '$\\int_a^bf=F(b)-F(a)$.' },
      { ar: 'بالأجزاء: $\\int uv\'=[uv]-\\int u\'v$.', fr: 'Par parties : $\\int uv\'=[uv]-\\int u\'v$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-int-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'تكامل حدودية', fr: 'Intégrale d’un polynôme' },
      statement: { ar: 'احسب $\\displaystyle\\int_0^3x^2\\,dx$.', fr: 'Calculer $\\displaystyle\\int_0^3x^2\\,dx$.' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: '$\\left[\\dfrac{x^3}3\\right]_0^3$.', fr: '$\\left[\\dfrac{x^3}3\\right]_0^3$.' }],
      solution: [{ ar: '$\\dfrac{27}3=9$.', fr: '$\\dfrac{27}3=9$.' }],
    },
    {
      id: '2bac-int-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'شكل $\\frac{u\'}{u}$', fr: 'Forme $\\frac{u\'}{u}$' },
      statement: { ar: 'احسب $\\displaystyle\\int_1^e\\dfrac{1}{x}\\,dx$.', fr: 'Calculer $\\displaystyle\\int_1^e\\dfrac{1}{x}\\,dx$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$[\\ln x]_1^e$.', fr: '$[\\ln x]_1^e$.' }],
      solution: [{ ar: '$\\ln e-\\ln1=1$.', fr: '$\\ln e-\\ln1=1$.' }],
    },
    {
      id: '2bac-int-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'قيمة متوسطة', fr: 'Valeur moyenne' },
      statement: { ar: 'ما القيمة المتوسطة لـ $f(x)=2x$ على $[0;4]$؟', fr: 'Quelle est la valeur moyenne de $f(x)=2x$ sur $[0;4]$ ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$\\dfrac14\\int_0^42x\\,dx$.', fr: '$\\dfrac14\\int_0^42x\\,dx$.' }],
      solution: [{ ar: '$\\dfrac14\\times16=4$.', fr: '$\\dfrac14\\times16=4$.' }],
    },
    {
      id: '2bac-int-04',
      lessonId,
      levelId: '2bac',
      difficulty: 3,
      topic: 'analysis',
      title: { ar: 'مساحة', fr: 'Aire' },
      statement: { ar: 'احسب مساحة الحيز المحصور بين منحنيي $f(x)=x$ و $g(x)=x^2$ على $[0;1]$.', fr: 'Calculer l’aire du domaine compris entre les courbes de $f(x)=x$ et $g(x)=x^2$ sur $[0;1]$.' },
      question: { type: 'numeric', answer: 1 / 6, tolerance: 1e-6 },
      hints: [{ ar: '$\\int_0^1(x-x^2)\\,dx$.', fr: '$\\int_0^1(x-x^2)\\,dx$.' }],
      solution: [{ ar: '$\\dfrac12-\\dfrac13=\\dfrac16\\approx0{,}167$.', fr: '$\\dfrac12-\\dfrac13=\\dfrac16\\approx0{,}167$.' }],
    },
  ],
};
