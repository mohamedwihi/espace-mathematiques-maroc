import type { LessonModule } from '@/types';

const lessonId = '2bac-limites-continuite';

export const limitesContinuite: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'limits',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'النهايات والاتصال', fr: 'Limites et continuité' },
    summary: {
      ar: 'اتصال دالة في نقطة وعلى مجال، مبرهنة القيم الوسيطية، الدالة العكسية لدالة متصلة ورتيبة قطعاً، ودالة الجذر من الرتبة $n$.',
      fr: 'Continuité en un point et sur un intervalle, théorème des valeurs intermédiaires, fonction réciproque d’une fonction continue strictement monotone, racine $n$-ième.',
    },
    objectives: [
      { ar: 'دراسة اتصال دالة.', fr: 'Étudier la continuité d’une fonction.' },
      { ar: 'تطبيق مبرهنة القيم الوسيطية وطريقة التفرع الثنائي.', fr: 'Appliquer le TVI et la dichotomie.' },
      { ar: 'التعامل مع الدالة العكسية ودالة الجذر من الرتبة $n$.', fr: 'Manipuler la fonction réciproque et la racine $n$-ième.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['continuité', 'valeurs intermédiaires', 'TVI', 'réciproque', 'racine n-ième', 'اتصال', 'القيم الوسيطية', 'دالة عكسية', 'جذر'],
    sections: [
      {
        id: 'continuite',
        title: { ar: 'الاتصال', fr: 'Continuité' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'تكون $f$ **متصلة** في $a$ إذا كان $\\lim\\limits_{x\\to a}f(x)=f(a)$، ومتصلة على مجال $I$ إذا كانت متصلة في كل نقطة منه. الحدوديات والدوال الجذرية و $\\sqrt x$ و $\\sin$ و $\\cos$ متصلة على مجموعات تعريفها، وكذلك مجموعها وجداؤها وخارجها ومركبها.',
              fr: '$f$ est **continue** en $a$ si $\\lim\\limits_{x\\to a}f(x)=f(a)$, et continue sur un intervalle $I$ si elle l’est en tout point de $I$. Polynômes, fonctions rationnelles, $\\sqrt x$, $\\sin$, $\\cos$ sont continues sur leur ensemble de définition, ainsi que leurs sommes, produits, quotients et composées.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'صورة مجال بدالة متصلة مجال. مثلاً إذا كانت $f$ متصلة وتزايدية قطعاً على $[a;b]$ فإن $f([a;b])=[f(a);f(b)]$.',
              fr: 'L’image d’un intervalle par une fonction continue est un intervalle. Par exemple, si $f$ est continue et strictement croissante sur $[a;b]$, alors $f([a;b])=[f(a);f(b)]$.',
            },
          },
        ],
      },
      {
        id: 'tvi',
        title: { ar: 'مبرهنة القيم الوسيطية', fr: 'Théorème des valeurs intermédiaires' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'إذا كانت $f$ متصلة على $[a;b]$ و $f(a)\\times f(b)<0$، فإن المعادلة $f(x)=0$ تقبل حلاً على الأقل في $]a;b[$. وإذا كانت $f$ رتيبة قطعاً فالحل **وحيد**.',
              fr: 'Si $f$ est continue sur $[a;b]$ et $f(a)\\times f(b)<0$, l’équation $f(x)=0$ admet au moins une solution dans $]a;b[$. Si de plus $f$ est strictement monotone, cette solution est **unique**.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'بيّن أن $x^3+x-1=0$ تقبل حلاً وحيداً $\\alpha$ في $]0;1[$.', fr: 'Montrer que $x^3+x-1=0$ admet une unique solution $\\alpha$ dans $]0;1[$.' },
            steps: [
              { ar: '$f(x)=x^3+x-1$ متصلة وتزايدية قطعاً ($f\'(x)=3x^2+1>0$).', fr: '$f(x)=x^3+x-1$ est continue et strictement croissante ($f\'(x)=3x^2+1>0$).' },
              { ar: '$f(0)=-1<0$ و $f(1)=1>0$: يوجد حل وحيد $\\alpha$، و $f(0{,}5)<0$ إذن $0{,}5<\\alpha<1$ (تفرع ثنائي).', fr: '$f(0)=-1<0$ et $f(1)=1>0$ : solution unique $\\alpha$ ; $f(0{,}5)<0$ donc $0{,}5<\\alpha<1$ (dichotomie).' },
            ],
          },
          {
            kind: 'graph',
            functions: [{ fn: (x: number) => x ** 3 + x - 1, label: 'f(x)=x^3+x-1', color: 'brand' }],
            points: [{ x: 0.6823, y: 0, label: 'α' }],
            x: [-1.5, 1.5],
            y: [-3, 2],
            caption: { ar: 'المنحنى يقطع محور الأفاصيل مرة واحدة في $\\alpha\\approx0{,}68$.', fr: 'La courbe coupe l’axe des abscisses une seule fois en $\\alpha\\approx0{,}68$.' },
          },
        ],
      },
      {
        id: 'reciproque',
        title: { ar: 'الدالة العكسية ودالة الجذر من الرتبة n', fr: 'Fonction réciproque et racine n-ième' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كانت $f$ متصلة ورتيبة قطعاً على $I$ فإنها تقبل دالة عكسية $f^{-1}$ معرفة على $J=f(I)$، متصلة ولها نفس رتابة $f$. منحناها مماثل لـ $C_f$ بالنسبة للمستقيم $y=x$.\n\n• لكل $n\\in\\mathbb N^*$، الدالة $x\\mapsto\\sqrt[n]x$ هي عكسية $x\\mapsto x^n$ على $[0;+\\infty[$: $\\sqrt[n]{x}=y\\iff y^n=x$، ونكتب $\\sqrt[n]x=x^{\\frac1n}$.',
              fr: '• Si $f$ est continue et strictement monotone sur $I$, elle admet une réciproque $f^{-1}$ définie sur $J=f(I)$, continue et de même monotonie. Sa courbe est symétrique de $C_f$ par rapport à la droite $y=x$.\n\n• Pour $n\\in\\mathbb N^*$, $x\\mapsto\\sqrt[n]x$ est la réciproque de $x\\mapsto x^n$ sur $[0;+\\infty[$ : $\\sqrt[n]{x}=y\\iff y^n=x$, et on note $\\sqrt[n]x=x^{\\frac1n}$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'متصلة + $f(a)f(b)<0$ ⟹ حل في $]a;b[$.', fr: 'Continue + $f(a)f(b)<0$ ⟹ une solution dans $]a;b[$.' },
      { ar: '$\\sqrt[n]x=y\\iff y^n=x$.', fr: '$\\sqrt[n]x=y\\iff y^n=x$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-lim-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'جذر من الرتبة 3', fr: 'Racine cubique' },
      statement: { ar: 'احسب $\\sqrt[3]{64}$.', fr: 'Calculer $\\sqrt[3]{64}$.' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$4^3=64$.', fr: '$4^3=64$.' }],
      solution: [{ ar: '$\\sqrt[3]{64}=4$.', fr: '$\\sqrt[3]{64}=4$.' }],
    },
    {
      id: '2bac-lim-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'تمديد بالاتصال', fr: 'Prolongement par continuité' },
      statement: { ar: 'ما قيمة $a$ التي تجعل $f(x)=\\dfrac{x^2-1}{x-1}$ إذا $x\\neq1$ و $f(1)=a$ متصلة في $1$؟', fr: 'Quelle valeur de $a$ rend continue en $1$ la fonction $f(x)=\\dfrac{x^2-1}{x-1}$ si $x\\neq1$, $f(1)=a$ ?' },
      question: { type: 'numeric', answer: 2 },
      hints: [{ ar: '$\\lim\\limits_{x\\to1}(x+1)$.', fr: '$\\lim\\limits_{x\\to1}(x+1)$.' }],
      solution: [{ ar: '$a=\\lim\\limits_{x\\to1}f(x)=2$.', fr: '$a=\\lim\\limits_{x\\to1}f(x)=2$.' }],
    },
    {
      id: '2bac-lim-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'analysis',
      title: { ar: 'القيم الوسيطية', fr: 'Valeurs intermédiaires' },
      statement: { ar: 'في أي مجال تقبل $x^3-3x+1=0$ حلاً بالتأكيد؟', fr: 'Dans quel intervalle $x^3-3x+1=0$ admet-elle sûrement une solution ?' },
      question: { type: 'mcq', options: [{ ar: '$]0;1[$', fr: '$]0;1[$' }, { ar: '$]2;3[$', fr: '$]2;3[$' }, { ar: '$]-1;0[$', fr: '$]-1;0[$' }], correct: 0 },
      hints: [{ ar: '$f(0)=1$ و $f(1)=-1$.', fr: '$f(0)=1$ et $f(1)=-1$.' }],
      solution: [{ ar: '$f(0)\\times f(1)<0$ و $f$ متصلة: حل في $]0;1[$.', fr: '$f(0)\\times f(1)<0$ et $f$ continue : une solution dans $]0;1[$.' }],
    },
    {
      id: '2bac-lim-04',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'analysis',
      title: { ar: 'قوة جذرية', fr: 'Puissance rationnelle' },
      statement: { ar: 'احسب $8^{\\frac23}$.', fr: 'Calculer $8^{\\frac23}$.' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$\\left(\\sqrt[3]8\\right)^2$.', fr: '$\\left(\\sqrt[3]8\\right)^2$.' }],
      solution: [{ ar: '$2^2=4$.', fr: '$2^2=4$.' }],
    },
  ],
};
