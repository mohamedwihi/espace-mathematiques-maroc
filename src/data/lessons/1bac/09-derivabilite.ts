import type { LessonModule } from '@/types';

const lessonId = '1bac-derivabilite';

export const derivabilite: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'derivation',
    streams: ['sm', 'sx', 'ste', 'eco'],
    title: { ar: 'الاشتقاق', fr: 'La dérivation' },
    summary: {
      ar: 'العدد المشتق، التأويل الهندسي ومعادلة المماس، الدالة المشتقة، العمليات على الدوال المشتقة، ورتابة دالة.',
      fr: 'Nombre dérivé, interprétation géométrique et tangente, fonction dérivée, opérations et sens de variation.',
    },
    objectives: [
      { ar: 'حساب العدد المشتق باستعمال النهاية.', fr: 'Calculer un nombre dérivé à l’aide d’une limite.' },
      { ar: 'تحديد معادلة المماس.', fr: 'Déterminer l’équation d’une tangente.' },
      { ar: 'حساب الدالة المشتقة واستنتاج الرتابة.', fr: 'Calculer une dérivée et en déduire les variations.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    featured: true,
    keywords: ['dérivée', 'nombre dérivé', 'tangente', 'variations', 'مشتقة', 'مماس', 'رتابة', 'اشتقاق'],
    sections: [
      {
        id: 'nombre-derive',
        title: { ar: 'العدد المشتق', fr: 'Nombre dérivé' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'تكون $f$ **قابلة للاشتقاق** في $a$ إذا كانت النهاية $\\lim\\limits_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}$ منتهية؛ نرمز لها بـ $f\'(a)$.',
              fr: '$f$ est **dérivable** en $a$ si la limite $\\lim\\limits_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}$ est finie ; on la note $f\'(a)$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'معادلة المماس', fr: 'Équation de la tangente' },
            content: {
              ar: 'المماس لـ $C_f$ في النقطة ذات الأفصول $a$: $y=f\'(a)(x-a)+f(a)$.',
              fr: 'La tangente à $C_f$ au point d’abscisse $a$ : $y=f\'(a)(x-a)+f(a)$.',
            },
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => x * x, label: 'f(x)=x^2', color: 'brand' },
              { fn: (x: number) => 2 * x - 1, label: 'T:\\ y=2x-1', color: 'saffron' },
            ],
            points: [{ x: 1, y: 1, label: 'A(1;1)' }],
            x: [-2, 3],
            y: [-2, 5],
            caption: { ar: 'المماس لمنحنى $x^2$ في $A(1;1)$ معامله الموجه $f\'(1)=2$.', fr: 'La tangente à la courbe de $x^2$ en $A(1;1)$ a pour pente $f\'(1)=2$.' },
          },
        ],
      },
      {
        id: 'derivees',
        title: { ar: 'الدوال المشتقة', fr: 'Fonctions dérivées' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'مشتقات اعتيادية', fr: 'Dérivées usuelles' },
            content: {
              ar: '$(k)\'=0$ ؛ $(x^n)\'=nx^{n-1}$ ؛ $\\left(\\dfrac1x\\right)\'=-\\dfrac1{x^2}$ ؛ $(\\sqrt x)\'=\\dfrac1{2\\sqrt x}$ ؛ $(\\sin x)\'=\\cos x$ ؛ $(\\cos x)\'=-\\sin x$.',
              fr: '$(k)\'=0$ ; $(x^n)\'=nx^{n-1}$ ; $\\left(\\dfrac1x\\right)\'=-\\dfrac1{x^2}$ ; $(\\sqrt x)\'=\\dfrac1{2\\sqrt x}$ ; $(\\sin x)\'=\\cos x$ ; $(\\cos x)\'=-\\sin x$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'العمليات', fr: 'Opérations' },
            content: {
              ar: '$(u+v)\'=u\'+v\'$ ؛ $(uv)\'=u\'v+uv\'$ ؛ $\\left(\\dfrac uv\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$ ؛ $(u^n)\'=nu\'u^{n-1}$ ؛ $(\\sqrt u)\'=\\dfrac{u\'}{2\\sqrt u}$ ؛ $(f(ax+b))\'=af\'(ax+b)$.',
              fr: '$(u+v)\'=u\'+v\'$ ; $(uv)\'=u\'v+uv\'$ ; $\\left(\\dfrac uv\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$ ; $(u^n)\'=nu\'u^{n-1}$ ; $(\\sqrt u)\'=\\dfrac{u\'}{2\\sqrt u}$ ; $(f(ax+b))\'=af\'(ax+b)$.',
            },
          },
          {
            kind: 'theorem',
            title: { ar: 'الرتابة', fr: 'Sens de variation' },
            content: {
              ar: 'إذا كان $f\'\\ge0$ على مجال $I$ فإن $f$ تزايدية على $I$، وإذا كان $f\'\\le0$ فإن $f$ تناقصية.',
              fr: 'Si $f\'\\ge0$ sur un intervalle $I$, $f$ est croissante sur $I$ ; si $f\'\\le0$, $f$ est décroissante.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'المماس: $y=f\'(a)(x-a)+f(a)$.', fr: 'Tangente : $y=f\'(a)(x-a)+f(a)$.' },
      { ar: 'إشارة $f\'$ تعطي رتابة $f$.', fr: 'Le signe de $f\'$ donne les variations de $f$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-der-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'عدد مشتق', fr: 'Nombre dérivé' },
      statement: { ar: '$f(x)=x^3$. احسب $f\'(2)$.', fr: '$f(x)=x^3$. Calculer $f\'(2)$.' },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: '$f\'(x)=3x^2$.', fr: '$f\'(x)=3x^2$.' }],
      solution: [{ ar: '$f\'(2)=12$.', fr: '$f\'(2)=12$.' }],
    },
    {
      id: '1bac-der-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مماس', fr: 'Tangente' },
      statement: { ar: '$f(x)=x^2-3x$. ما الأرتوب عند الأصل للمماس لـ $C_f$ في النقطة ذات الأفصول $2$؟', fr: '$f(x)=x^2-3x$. Quelle est l’ordonnée à l’origine de la tangente à $C_f$ au point d’abscisse $2$ ?' },
      question: { type: 'numeric', answer: -4 },
      hints: [{ ar: '$f(2)=-2$ و $f\'(2)=1$.', fr: '$f(2)=-2$ et $f\'(2)=1$.' }],
      solution: [{ ar: '$y=1(x-2)-2=x-4$: الأرتوب عند الأصل $-4$.', fr: '$y=1(x-2)-2=x-4$ : ordonnée à l’origine $-4$.' }],
    },
    {
      id: '1bac-der-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'مشتقة خارج', fr: 'Dérivée d’un quotient' },
      statement: { ar: '$f(x)=\\dfrac{2x+1}{x-1}$. احسب $f\'(0)$.', fr: '$f(x)=\\dfrac{2x+1}{x-1}$. Calculer $f\'(0)$.' },
      question: { type: 'numeric', answer: -3 },
      hints: [{ ar: '$f\'(x)=\\dfrac{2(x-1)-(2x+1)}{(x-1)^2}$.', fr: '$f\'(x)=\\dfrac{2(x-1)-(2x+1)}{(x-1)^2}$.' }],
      solution: [{ ar: '$f\'(x)=\\dfrac{-3}{(x-1)^2}$ إذن $f\'(0)=-3$.', fr: '$f\'(x)=\\dfrac{-3}{(x-1)^2}$ donc $f\'(0)=-3$.' }],
    },
    {
      id: '1bac-der-04',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'مشتقة جذر', fr: 'Dérivée d’une racine' },
      statement: { ar: '$f(x)=\\sqrt{x^2+9}$. احسب $f\'(4)$.', fr: '$f(x)=\\sqrt{x^2+9}$. Calculer $f\'(4)$.' },
      question: { type: 'numeric', answer: 0.8, tolerance: 1e-6 },
      hints: [{ ar: '$f\'(x)=\\dfrac{2x}{2\\sqrt{x^2+9}}$.', fr: '$f\'(x)=\\dfrac{2x}{2\\sqrt{x^2+9}}$.' }],
      solution: [{ ar: '$f\'(4)=\\dfrac45=0{,}8$.', fr: '$f\'(4)=\\dfrac45=0{,}8$.' }],
    },
  ],
};
