import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-aires-perimetres';

/** Demi-cercle approché (pour la figure composée). */
const arc = (cx: number, cy: number, r: number, from: number, to: number, n = 36): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const t = from + ((to - from) * i) / n;
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  });

export const airesPerimetres: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'areas-perimeters',
    title: { ar: 'المساحات والمحيطات', fr: 'Aires et périmètres' },
    summary: {
      ar: 'محيطات ومساحات الأشكال الاعتيادية (مربع، مستطيل، متوازي أضلاع، مثلث، شبه منحرف، معين، دائرة)، وحساب مساحة شكل مركب.',
      fr: 'Périmètres et aires des figures usuelles (carré, rectangle, parallélogramme, triangle, trapèze, losange, cercle) et aire d’une figure composée.',
    },
    objectives: [
      { ar: 'حساب محيطات ومساحات الأشكال الاعتيادية.', fr: 'Calculer périmètres et aires des figures usuelles.' },
      { ar: 'حساب محيط أو مساحة شكل مركب بالتفكيك إلى أشكال اعتيادية.', fr: 'Calculer le périmètre ou l’aire d’une figure composée par décomposition.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    source: teacherSource,
    keywords: ['aire', 'périmètre', 'surface', 'disque', 'trapèze', 'losange', 'مساحة', 'محيط', 'قرص', 'شبه منحرف'],
    sections: [
      {
        id: 'perimetres',
        title: { ar: 'المحيطات', fr: 'Périmètres' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '**محيط** شكل هو طول حدوده (الخط المحيط به)، ويقاس بوحدة طول. الوحدة القانونية للطول هي المتر.',
              fr: 'Le **périmètre** d’une figure est la longueur de son contour ; il s’exprime dans une unité de longueur. L’unité légale est le mètre.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: 'مربع ضلعه $c$: $P=4\\times c$.', fr: 'Carré de côté $c$ : $P=4\\times c$.' },
              { ar: 'مستطيل بعداه $L$ و $l$: $P=2\\times(L+l)$.', fr: 'Rectangle de dimensions $L$ et $l$ : $P=2\\times(L+l)$.' },
              { ar: 'معين ضلعه $c$: $P=4\\times c$.', fr: 'Losange de côté $c$ : $P=4\\times c$.' },
              { ar: 'مثلث، متوازي أضلاع، شبه منحرف: مجموع أطوال الأضلاع.', fr: 'Triangle, parallélogramme, trapèze : somme des longueurs des côtés.' },
              { ar: 'دائرة شعاعها $r$: $P=2\\times\\pi\\times r$.', fr: 'Cercle de rayon $r$ : $P=2\\times\\pi\\times r$.' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'احسب محيط المضلع $ABCDEF$ حيث $AB=3$، $BC=2$، $CD=3{,}61$، $DE=3{,}5$، $EF=2{,}5$، $FA=3$ (بـ cm).', fr: 'Calculer le périmètre du polygone $ABCDEF$ avec $AB=3$, $BC=2$, $CD=3{,}61$, $DE=3{,}5$, $EF=2{,}5$, $FA=3$ (en cm).' },
            steps: [{ ar: '$P=3+2+3{,}61+3{,}5+2{,}5+3=17{,}61\\,\\text{cm}$.', fr: '$P=3+2+3{,}61+3{,}5+2{,}5+3=17{,}61\\,\\text{cm}$.' }],
          },
        ],
      },
      {
        id: 'aires',
        title: { ar: 'المساحات', fr: 'Aires' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '**مساحة** شكل مغلق هي قياس سطحه الداخلي. الوحدة القانونية للمساحة هي المتر المربع $\\text{m}^2$.',
              fr: 'L’**aire** d’une figure fermée est la mesure de sa surface intérieure. L’unité légale est le mètre carré $\\text{m}^2$.',
            },
          },
          { kind: 'formula', tex: '\\text{Carré : } c\\times c\\qquad \\text{Rectangle : } L\\times l\\qquad \\text{Parallélogramme : } B\\times h', caption: { ar: 'مربع، مستطيل، متوازي أضلاع ($h$ الارتفاع)', fr: 'Carré, rectangle, parallélogramme ($h$ : hauteur)' } },
          { kind: 'formula', tex: '\\text{Triangle : } \\frac{B\\times h}{2}\\qquad \\text{Trapèze : } \\frac{(B+b)\\times h}{2}\\qquad \\text{Losange : } \\frac{D\\times d}{2}\\qquad \\text{Disque : } \\pi\\times r^2', caption: { ar: 'مثلث، شبه منحرف، معين ($D$ و $d$ القطران)، قرص', fr: 'Triangle, trapèze, losange ($D$, $d$ : diagonales), disque' } },
          {
            kind: 'remark',
            content: {
              ar: 'يمكنك التحقق من نتائجك باستعمال أداة «المساحات والمحيطات والحجوم» في قسم الأدوات.',
              fr: 'Vous pouvez vérifier vos résultats avec l’outil « Aires, périmètres et volumes » de la section Outils.',
            },
          },
        ],
      },
      {
        id: 'composee',
        title: { ar: 'مساحة شكل مركب', fr: 'Aire d’une figure composée' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'نفكك الشكل إلى أشكال اعتيادية، نحسب مساحة كل جزء، ثم نجمع (أو نطرح) المساحات.',
              fr: 'On décompose la figure en figures usuelles, on calcule l’aire de chaque partie, puis on additionne (ou soustrait) les aires.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.6, 5.6],
            y: [-0.6, 4.4],
            polygons: [
              { points: [[0, 0], [4, 0], [4, 2], [0, 2]], color: 'saffron' },
              { points: arc(2, 2, 2, 0, Math.PI), color: 'brand' },
              { points: arc(4, 1, 1, -Math.PI / 2, Math.PI / 2), color: 'ink' },
            ],
            points: [
              { x: 0, y: 2, label: 'A' },
              { x: 4, y: 2, label: 'B' },
              { x: 4, y: 0, label: 'C' },
              { x: 0, y: 0, label: 'D' },
            ],
            caption: {
              ar: 'مستطيل $ABCD$ ($DC=4\\,\\text{cm}$، $AD=2\\,\\text{cm}$) مع نصف دائرة قطرها $[AB]$ ونصف دائرة قطرها $[BC]$.',
              fr: 'Rectangle $ABCD$ ($DC=4\\,\\text{cm}$, $AD=2\\,\\text{cm}$) avec un demi-disque de diamètre $[AB]$ et un demi-disque de diamètre $[BC]$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب مساحة الشكل أعلاه.', fr: 'Calculer l’aire de la figure ci-dessus.' },
            steps: [
              { ar: 'المستطيل: $4\\times2=8\\,\\text{cm}^2$.', fr: 'Rectangle : $4\\times2=8\\,\\text{cm}^2$.' },
              { ar: 'نصف القرص الكبير (شعاعه $2$): $\\dfrac{\\pi\\times2^2}2=2\\pi$.', fr: 'Grand demi-disque (rayon $2$) : $\\dfrac{\\pi\\times2^2}2=2\\pi$.' },
              { ar: 'نصف القرص الصغير (شعاعه $1$): $\\dfrac{\\pi\\times1^2}2=\\dfrac\\pi2$.', fr: 'Petit demi-disque (rayon $1$) : $\\dfrac{\\pi\\times1^2}2=\\dfrac\\pi2$.' },
              { ar: 'المجموع: $8+2\\pi+\\dfrac\\pi2=8+2{,}5\\pi\\approx15{,}85\\,\\text{cm}^2$.', fr: 'Total : $8+2\\pi+\\dfrac\\pi2=8+2{,}5\\pi\\approx15{,}85\\,\\text{cm}^2$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'المحيط = طول الحدود (وحدة طول). المساحة = قياس السطح (وحدة مساحة).', fr: 'Périmètre = longueur du contour (unité de longueur). Aire = mesure de la surface (unité d’aire).' },
      { ar: 'محيط دائرة $2\\pi r$ ومساحة قرص $\\pi r^2$.', fr: 'Périmètre du cercle $2\\pi r$, aire du disque $\\pi r^2$.' },
      { ar: 'مثلث $\\frac{B\\times h}2$ ، شبه منحرف $\\frac{(B+b)h}2$ ، معين $\\frac{D\\times d}2$.', fr: 'Triangle $\\frac{B\\times h}2$, trapèze $\\frac{(B+b)h}2$, losange $\\frac{D\\times d}2$.' },
      { ar: 'شكل مركب: نفكك ثم نجمع.', fr: 'Figure composée : décomposer puis additionner.' },
    ],
  },
  exercises: [
    {
      id: '1ac-aires-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'محيط مستطيل', fr: 'Périmètre d’un rectangle' },
      statement: { ar: 'احسب محيط مستطيل طوله $8\\,\\text{cm}$ وعرضه $5\\,\\text{cm}$ (بـ cm).', fr: 'Calculer le périmètre d’un rectangle de longueur $8\\,\\text{cm}$ et de largeur $5\\,\\text{cm}$ (en cm).' },
      question: { type: 'numeric', answer: 26, unit: 'cm' },
      hints: [{ ar: '$P=2\\times(L+l)$.', fr: '$P=2\\times(L+l)$.' }],
      solution: [{ ar: '$P=2\\times(8+5)=26\\,\\text{cm}$.', fr: '$P=2\\times(8+5)=26\\,\\text{cm}$.' }],
    },
    {
      id: '1ac-aires-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مساحة معين', fr: 'Aire d’un losange' },
      statement: { ar: 'معين قطراه $6\\,\\text{cm}$ و $4\\,\\text{cm}$. احسب مساحته بـ $\\text{cm}^2$.', fr: 'Un losange a pour diagonales $6\\,\\text{cm}$ et $4\\,\\text{cm}$. Calculer son aire en $\\text{cm}^2$.' },
      question: { type: 'numeric', answer: 12, unit: 'cm²' },
      hints: [{ ar: '$A=\\dfrac{D\\times d}2$.', fr: '$A=\\dfrac{D\\times d}2$.' }],
      solution: [{ ar: '$A=\\dfrac{6\\times4}2=12\\,\\text{cm}^2$.', fr: '$A=\\dfrac{6\\times4}2=12\\,\\text{cm}^2$.' }],
    },
    {
      id: '1ac-aires-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مساحة شبه منحرف', fr: 'Aire d’un trapèze' },
      statement: { ar: 'شبه منحرف قاعدتاه $6\\,\\text{cm}$ و $4\\,\\text{cm}$ وارتفاعه $3\\,\\text{cm}$. احسب مساحته بـ $\\text{cm}^2$.', fr: 'Un trapèze a pour bases $6\\,\\text{cm}$ et $4\\,\\text{cm}$ et pour hauteur $3\\,\\text{cm}$. Calculer son aire en $\\text{cm}^2$.' },
      question: { type: 'numeric', answer: 15, unit: 'cm²' },
      hints: [{ ar: '$A=\\dfrac{(B+b)\\times h}2$.', fr: '$A=\\dfrac{(B+b)\\times h}2$.' }],
      solution: [{ ar: '$A=\\dfrac{(6+4)\\times3}2=15\\,\\text{cm}^2$.', fr: '$A=\\dfrac{(6+4)\\times3}2=15\\,\\text{cm}^2$.' }],
    },
    {
      id: '1ac-aires-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مساحة قرص', fr: 'Aire d’un disque' },
      statement: { ar: 'احسب مساحة قرص شعاعه $3\\,\\text{cm}$. أعط قيمة مقربة إلى $0{,}01$.', fr: 'Calculer l’aire d’un disque de rayon $3\\,\\text{cm}$. Donner une valeur approchée à $0{,}01$ près.' },
      question: { type: 'numeric', answer: 9 * Math.PI, tolerance: 0.01, unit: 'cm²' },
      hints: [{ ar: '$A=\\pi\\times r^2$ مع $\\pi\\approx3{,}14159$.', fr: '$A=\\pi\\times r^2$ avec $\\pi\\approx3{,}14159$.' }],
      solution: [{ ar: '$A=\\pi\\times3^2=9\\pi\\approx28{,}27\\,\\text{cm}^2$.', fr: '$A=\\pi\\times3^2=9\\pi\\approx28{,}27\\,\\text{cm}^2$.' }],
    },
    {
      id: '1ac-aires-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'شكل مركب', fr: 'Figure composée' },
      statement: {
        ar: 'شكل مكون من مستطيل بعداه $4\\,\\text{cm}$ و $2\\,\\text{cm}$ ونصف قرص قطره $4\\,\\text{cm}$ ونصف قرص قطره $2\\,\\text{cm}$. احسب مساحته إلى $0{,}01$.',
        fr: 'Une figure est formée d’un rectangle de $4\\,\\text{cm}$ sur $2\\,\\text{cm}$, d’un demi-disque de diamètre $4\\,\\text{cm}$ et d’un demi-disque de diamètre $2\\,\\text{cm}$. Calculer son aire à $0{,}01$ près.',
      },
      question: { type: 'numeric', answer: 8 + 2.5 * Math.PI, tolerance: 0.01, unit: 'cm²' },
      hints: [{ ar: 'شعاعا نصفي القرصين $2$ و $1$.', fr: 'Les demi-disques ont pour rayons $2$ et $1$.' }],
      solution: [
        { ar: 'المستطيل $8$، نصف القرص الكبير $2\\pi$، نصف القرص الصغير $\\dfrac\\pi2$.', fr: 'Rectangle $8$, grand demi-disque $2\\pi$, petit demi-disque $\\dfrac\\pi2$.' },
        { ar: '$A=8+2{,}5\\pi\\approx15{,}85\\,\\text{cm}^2$.', fr: '$A=8+2{,}5\\pi\\approx15{,}85\\,\\text{cm}^2$.' },
      ],
    },
  ],
};
