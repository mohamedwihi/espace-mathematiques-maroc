import type { Lesson } from '@/types';

export const lesson2bacIntegrals: Lesson = {
  id: '2bac-integrals',
  levelId: '2bac',
  unitId: 'integral',
  streams: ['sm', 'pc', 'svt', 'sa', 'ste', 'eco'],
  title: { ar: 'الحساب التكاملي', fr: 'Le calcul intégral' },
  summary: {
    ar: 'تكامل دالة متصلة على قطعة، الخاصيات، المكاملة بالأجزاء، وحساب المساحات.',
    fr: 'Intégrale d’une fonction continue sur un segment, propriétés, intégration par parties et calcul d’aires.',
  },
  objectives: [
    { ar: 'حساب تكامل باستعمال دالة أصلية.', fr: 'Calculer une intégrale à l’aide d’une primitive.' },
    { ar: 'استعمال خطية التكامل وعلاقة شال.', fr: 'Utiliser la linéarité et la relation de Chasles.' },
    { ar: 'تطبيق المكاملة بالأجزاء.', fr: 'Appliquer l’intégration par parties.' },
    { ar: 'حساب مساحة حيز من المستوى.', fr: 'Calculer l’aire d’un domaine du plan.' },
  ],
  durationMinutes: 60,
  reviewed: false,
  keywords: ['intégrale', 'primitive', 'aire', 'intégration par parties', 'Chasles', 'تكامل', 'دالة أصلية', 'مساحة'],
  sections: [
    {
      id: 'definition',
      title: { ar: 'تعريف', fr: 'Définition' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'لتكن $f$ دالة متصلة على مجال $I$ و $F$ دالة أصلية لها على $I$، و $a$ و $b$ عنصرين من $I$. العدد $F(b)-F(a)$ لا يتعلق باختيار $F$، ويسمى **تكامل** $f$ من $a$ إلى $b$:',
            fr: 'Soit $f$ continue sur un intervalle $I$, $F$ une primitive de $f$ sur $I$ et $a,b\\in I$. Le nombre $F(b)-F(a)$ ne dépend pas du choix de $F$ ; c’est l’**intégrale** de $f$ de $a$ à $b$ :',
          },
        },
        { kind: 'formula', tex: '\\int_a^b f(x)\\,dx=\\big[F(x)\\big]_a^b=F(b)-F(a)' },
        {
          kind: 'formula',
          tex: '\\int x^n dx=\\frac{x^{n+1}}{n+1}\\ (n\\ne-1)\\qquad \\int \\frac1x dx=\\ln|x|\\qquad \\int e^x dx=e^x',
          caption: { ar: 'دوال أصلية اعتيادية (بتقدير ثابتة)', fr: 'Primitives usuelles (à une constante près)' },
        },
        {
          kind: 'example',
          statement: { ar: 'احسب $I=\\displaystyle\\int_0^1 x^2\\,dx$ و $J=\\displaystyle\\int_1^e\\frac1x\\,dx$.', fr: 'Calculer $I=\\displaystyle\\int_0^1 x^2\\,dx$ et $J=\\displaystyle\\int_1^e\\frac1x\\,dx$.' },
          steps: [
            { ar: '$I=\\left[\\dfrac{x^3}{3}\\right]_0^1=\\dfrac13-0=\\dfrac13$.', fr: '$I=\\left[\\dfrac{x^3}{3}\\right]_0^1=\\dfrac13-0=\\dfrac13$.' },
            { ar: '$J=\\big[\\ln x\\big]_1^e=\\ln e-\\ln1=1$.', fr: '$J=\\big[\\ln x\\big]_1^e=\\ln e-\\ln1=1$.' },
          ],
        },
      ],
    },
    {
      id: 'properties',
      title: { ar: 'خاصيات التكامل', fr: 'Propriétés de l’intégrale' },
      blocks: [
        {
          kind: 'property',
          title: { ar: 'الخطية وعلاقة شال', fr: 'Linéarité et relation de Chasles' },
          content: {
            ar: 'لكل دالتين متصلتين $f$ و $g$ ولكل عددين حقيقيين $\\alpha$ و $\\beta$:',
            fr: 'Pour toutes fonctions continues $f$, $g$ et tous réels $\\alpha$, $\\beta$ :',
          },
        },
        { kind: 'formula', tex: '\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g\\qquad \\int_a^c f=\\int_a^b f+\\int_b^c f' },
        {
          kind: 'property',
          title: { ar: 'الموجبية', fr: 'Positivité' },
          content: {
            ar: 'إذا كان $a\\le b$ و $f\\ge0$ على $[a;b]$، فإن $\\displaystyle\\int_a^b f(x)\\,dx\\ge0$.',
            fr: 'Si $a\\le b$ et $f\\ge0$ sur $[a;b]$, alors $\\displaystyle\\int_a^b f(x)\\,dx\\ge0$.',
          },
        },
        {
          kind: 'property',
          title: { ar: 'القيمة المتوسطة', fr: 'Valeur moyenne' },
          content: {
            ar: 'القيمة المتوسطة لـ $f$ على $[a;b]$ (مع $a<b$) هي $\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$.',
            fr: 'La valeur moyenne de $f$ sur $[a;b]$ (avec $a<b$) est $\\mu=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$.',
          },
        },
      ],
    },
    {
      id: 'parts',
      title: { ar: 'المكاملة بالأجزاء', fr: 'Intégration par parties' },
      blocks: [
        {
          kind: 'theorem',
          content: {
            ar: 'إذا كانت $u$ و $v$ قابلتين للاشتقاق على $[a;b]$ ومشتقتاهما متصلتين، فإن:',
            fr: 'Si $u$ et $v$ sont dérivables sur $[a;b]$ à dérivées continues, alors :',
          },
        },
        { kind: 'formula', tex: "\\int_a^b u(x)v'(x)\\,dx=\\big[u(x)v(x)\\big]_a^b-\\int_a^b u'(x)v(x)\\,dx" },
        {
          kind: 'example',
          statement: { ar: 'احسب $K=\\displaystyle\\int_0^1 xe^x\\,dx$.', fr: 'Calculer $K=\\displaystyle\\int_0^1 xe^x\\,dx$.' },
          steps: [
            { ar: 'نضع $u(x)=x$ و $v\'(x)=e^x$، إذن $u\'(x)=1$ و $v(x)=e^x$.', fr: 'On pose $u(x)=x$ et $v\'(x)=e^x$, donc $u\'(x)=1$ et $v(x)=e^x$.' },
            { ar: '$K=\\big[xe^x\\big]_0^1-\\displaystyle\\int_0^1 e^x\\,dx=e-\\big[e^x\\big]_0^1$.', fr: '$K=\\big[xe^x\\big]_0^1-\\displaystyle\\int_0^1 e^x\\,dx=e-\\big[e^x\\big]_0^1$.' },
            { ar: '$K=e-(e-1)=1$.', fr: '$K=e-(e-1)=1$.' },
          ],
        },
      ],
    },
    {
      id: 'area',
      title: { ar: 'حساب المساحات', fr: 'Calcul d’aires' },
      blocks: [
        {
          kind: 'property',
          content: {
            ar: 'إذا كانت $f$ متصلة وموجبة على $[a;b]$، فإن مساحة الحيز المحصور بين المنحنى ومحور الأفاصيل والمستقيمين $x=a$ و $x=b$ هي $\\displaystyle\\int_a^b f(x)\\,dx$ وحدة مساحة. بصفة عامة تساوي المساحة $\\displaystyle\\int_a^b |f(x)|\\,dx$.',
            fr: 'Si $f$ est continue et positive sur $[a;b]$, l’aire du domaine limité par la courbe, l’axe des abscisses et les droites $x=a$ et $x=b$ vaut $\\displaystyle\\int_a^b f(x)\\,dx$ unités d’aire. En général, elle vaut $\\displaystyle\\int_a^b |f(x)|\\,dx$.',
          },
        },
        {
          kind: 'graph',
          x: [-0.5, 3.6],
          y: [-0.5, 1.5],
          functions: [{ fn: (x) => Math.sin(x), label: 'y=\\sin x', color: 'brand' }],
          shade: { index: 0, from: 0, to: Math.PI },
          points: [
            { x: 0, y: 0, label: '0' },
            { x: Math.PI, y: 0, label: 'π' },
          ],
          caption: {
            ar: 'مساحة الحيز تحت منحنى $\\sin$ بين $0$ و $\\pi$: $\\displaystyle\\int_0^\\pi\\sin x\\,dx=\\big[-\\cos x\\big]_0^\\pi=1+1=2$ وحدة مساحة.',
            fr: 'Aire sous la courbe de $\\sin$ entre $0$ et $\\pi$ : $\\displaystyle\\int_0^\\pi\\sin x\\,dx=\\big[-\\cos x\\big]_0^\\pi=1+1=2$ unités d’aire.',
          },
        },
      ],
    },
  ],
  recap: [
    { ar: '$\\int_a^b f=F(b)-F(a)$ حيث $F$ دالة أصلية لـ $f$.', fr: '$\\int_a^b f=F(b)-F(a)$ où $F$ est une primitive de $f$.' },
    { ar: 'الخطية وعلاقة شال تسهلان الحساب.', fr: 'Linéarité et Chasles simplifient les calculs.' },
    { ar: "بالأجزاء: $\\int uv'=[uv]-\\int u'v$.", fr: "Par parties : $\\int uv'=[uv]-\\int u'v$." },
    { ar: 'المساحة: $\\int_a^b|f(x)|\\,dx$ وحدة مساحة.', fr: 'Aire : $\\int_a^b|f(x)|\\,dx$ unités d’aire.' },
  ],
};
