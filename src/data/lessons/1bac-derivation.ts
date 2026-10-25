import type { Lesson } from '@/types';

export const lesson1bacDerivation: Lesson = {
  id: '1bac-derivation',
  levelId: '1bac',
  unitId: 'derivation',
  streams: ['sm', 'sx', 'ste', 'eco'],
  title: { ar: 'الاشتقاق', fr: 'La dérivation' },
  summary: {
    ar: 'العدد المشتق، معادلة المماس، مشتقات الدوال الاعتيادية والعمليات عليها، ورتابة دالة.',
    fr: 'Nombre dérivé, équation de la tangente, dérivées usuelles et opérations, et sens de variation.',
  },
  objectives: [
    { ar: 'حساب العدد المشتق لدالة في نقطة باستعمال النهاية.', fr: "Calculer le nombre dérivé en un point à l'aide d'une limite." },
    { ar: 'تحديد معادلة المماس لمنحنى دالة.', fr: "Déterminer l'équation d'une tangente." },
    { ar: 'حساب الدالة المشتقة باستعمال قواعد الاشتقاق.', fr: 'Calculer une fonction dérivée avec les règles de dérivation.' },
    { ar: 'استنتاج رتابة دالة من إشارة مشتقتها.', fr: 'Déduire les variations d’une fonction du signe de sa dérivée.' },
  ],
  durationMinutes: 55,
  reviewed: false,
  featured: true,
  keywords: ['dérivée', 'nombre dérivé', 'tangente', 'variations', 'مشتقة', 'مماس', 'رتابة', 'اشتقاق'],
  sections: [
    {
      id: 'number',
      title: { ar: 'العدد المشتق', fr: 'Nombre dérivé' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'لتكن $f$ دالة معرفة على مجال مفتوح يحتوي على $a$. نقول إن $f$ **قابلة للاشتقاق** في $a$ إذا كانت النهاية التالية موجودة ومنتهية، ونرمز لها بـ $f\'(a)$:',
            fr: 'Soit $f$ définie sur un intervalle ouvert contenant $a$. On dit que $f$ est **dérivable** en $a$ si la limite suivante existe et est finie ; on la note $f\'(a)$ :',
          },
        },
        { kind: 'formula', tex: "f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}" },
        {
          kind: 'example',
          statement: { ar: 'احسب العدد المشتق للدالة $f(x)=x^2$ في $a=1$.', fr: 'Calculer le nombre dérivé de $f(x)=x^2$ en $a=1$.' },
          steps: [
            { ar: '$\\dfrac{f(1+h)-f(1)}{h}=\\dfrac{(1+h)^2-1}{h}=\\dfrac{2h+h^2}{h}=2+h$.', fr: '$\\dfrac{f(1+h)-f(1)}{h}=\\dfrac{(1+h)^2-1}{h}=\\dfrac{2h+h^2}{h}=2+h$.' },
            { ar: '$\\lim_{h\\to0}(2+h)=2$، إذن $f\'(1)=2$.', fr: '$\\lim_{h\\to0}(2+h)=2$, donc $f\'(1)=2$.' },
          ],
        },
        {
          kind: 'property',
          title: { ar: 'معادلة المماس', fr: 'Équation de la tangente' },
          content: {
            ar: 'إذا كانت $f$ قابلة للاشتقاق في $a$، فإن منحناها يقبل في النقطة ذات الأفصول $a$ مماساً معادلته:',
            fr: 'Si $f$ est dérivable en $a$, sa courbe admet au point d’abscisse $a$ une tangente d’équation :',
          },
        },
        { kind: 'formula', tex: "y=f'(a)(x-a)+f(a)" },
        {
          kind: 'graph',
          x: [-2.5, 3],
          y: [-2, 5],
          functions: [
            { fn: (x) => x * x, label: 'f(x)=x^2', color: 'brand' },
            { fn: (x) => 2 * x - 1, label: 'T: y=2x-1', color: 'saffron' },
          ],
          points: [{ x: 1, y: 1, label: 'A(1;1)' }],
          caption: {
            ar: 'المماس للمنحنى في $A(1;1)$: $y=2(x-1)+1=2x-1$.',
            fr: 'Tangente à la courbe en $A(1;1)$ : $y=2(x-1)+1=2x-1$.',
          },
        },
      ],
    },
    {
      id: 'rules',
      title: { ar: 'المشتقات الاعتيادية وقواعد الاشتقاق', fr: 'Dérivées usuelles et règles' },
      blocks: [
        {
          kind: 'formula',
          tex: "(k)'=0\\quad (x)'=1\\quad (x^n)'=nx^{n-1}\\quad \\left(\\frac1x\\right)'=-\\frac1{x^2}\\quad (\\sqrt x)'=\\frac{1}{2\\sqrt x}",
          caption: { ar: 'مشتقات اعتيادية', fr: 'Dérivées usuelles' },
        },
        {
          kind: 'formula',
          tex: "(\\sin x)'=\\cos x\\qquad (\\cos x)'=-\\sin x",
        },
        {
          kind: 'formula',
          tex: "(u+v)'=u'+v'\\quad (ku)'=ku'\\quad (uv)'=u'v+uv'\\quad \\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}",
          caption: { ar: 'العمليات على الدوال المشتقة', fr: 'Opérations sur les dérivées' },
        },
        {
          kind: 'example',
          statement: { ar: 'احسب مشتقة $g(x)=\\dfrac{2x+1}{x-1}$ على $]1;+\\infty[$.', fr: 'Calculer la dérivée de $g(x)=\\dfrac{2x+1}{x-1}$ sur $]1;+\\infty[$.' },
          steps: [
            { ar: '$u(x)=2x+1$ و $v(x)=x-1$، إذن $u\'(x)=2$ و $v\'(x)=1$.', fr: '$u(x)=2x+1$ et $v(x)=x-1$, donc $u\'(x)=2$ et $v\'(x)=1$.' },
            { ar: '$g\'(x)=\\dfrac{2(x-1)-(2x+1)\\times1}{(x-1)^2}$.', fr: '$g\'(x)=\\dfrac{2(x-1)-(2x+1)\\times1}{(x-1)^2}$.' },
            { ar: '$g\'(x)=\\dfrac{-3}{(x-1)^2}$.', fr: '$g\'(x)=\\dfrac{-3}{(x-1)^2}$.' },
          ],
        },
      ],
    },
    {
      id: 'variations',
      title: { ar: 'الاشتقاق والرتابة', fr: 'Dérivée et sens de variation' },
      blocks: [
        {
          kind: 'theorem',
          content: {
            ar: 'لتكن $f$ قابلة للاشتقاق على مجال $I$.\n\n• إذا كانت $f\'\\ge0$ على $I$ فإن $f$ تزايدية على $I$.\n\n• إذا كانت $f\'\\le0$ على $I$ فإن $f$ تناقصية على $I$.\n\n• إذا كانت $f\'=0$ على $I$ فإن $f$ ثابتة على $I$.',
            fr: 'Soit $f$ dérivable sur un intervalle $I$.\n\n• Si $f\'\\ge0$ sur $I$, alors $f$ est croissante sur $I$.\n\n• Si $f\'\\le0$ sur $I$, alors $f$ est décroissante sur $I$.\n\n• Si $f\'=0$ sur $I$, alors $f$ est constante sur $I$.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'ادرس رتابة $f(x)=x^3-3x+1$ على $\\mathbb{R}$.', fr: 'Étudier les variations de $f(x)=x^3-3x+1$ sur $\\mathbb{R}$.' },
          steps: [
            { ar: '$f\'(x)=3x^2-3=3(x-1)(x+1)$.', fr: '$f\'(x)=3x^2-3=3(x-1)(x+1)$.' },
            { ar: '$f\'(x)\\ge0$ على $]-\\infty;-1]$ وعلى $[1;+\\infty[$، و $f\'(x)\\le0$ على $[-1;1]$.', fr: '$f\'(x)\\ge0$ sur $]-\\infty;-1]$ et sur $[1;+\\infty[$, et $f\'(x)\\le0$ sur $[-1;1]$.' },
            { ar: '$f$ تزايدية على $]-\\infty;-1]$، تناقصية على $[-1;1]$، تزايدية على $[1;+\\infty[$. مع $f(-1)=3$ و $f(1)=-1$.', fr: '$f$ est croissante sur $]-\\infty;-1]$, décroissante sur $[-1;1]$, croissante sur $[1;+\\infty[$, avec $f(-1)=3$ et $f(1)=-1$.' },
          ],
        },
        {
          kind: 'graph',
          x: [-3, 3],
          y: [-3, 5],
          functions: [{ fn: (x) => x ** 3 - 3 * x + 1, label: 'f(x)=x^3-3x+1', color: 'ink' }],
          points: [
            { x: -1, y: 3, label: '(-1;3)' },
            { x: 1, y: -1, label: '(1;-1)' },
          ],
          caption: {
            ar: 'المماس أفقي في النقطتين اللتين تنعدم فيهما المشتقة.',
            fr: 'La tangente est horizontale aux points où la dérivée s’annule.',
          },
        },
      ],
    },
  ],
  recap: [
    { ar: "$f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$.", fr: "$f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$." },
    { ar: "المماس: $y=f'(a)(x-a)+f(a)$.", fr: "Tangente : $y=f'(a)(x-a)+f(a)$." },
    { ar: "$(uv)'=u'v+uv'$ و $\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$.", fr: "$(uv)'=u'v+uv'$ et $\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$." },
    { ar: "إشارة $f'$ تحدد رتابة $f$.", fr: "Le signe de $f'$ donne les variations de $f$." },
  ],
};
