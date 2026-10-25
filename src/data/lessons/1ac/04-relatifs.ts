import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-nombres-relatifs';

export const nombresRelatifs: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'relative',
    title: { ar: 'الأعداد العشرية النسبية', fr: 'Les nombres décimaux relatifs' },
    summary: {
      ar: 'الأعداد الموجبة والسالبة، المستقيم المدرج والأفصول، المسافة إلى الصفر والعددان المتقابلان، ومقارنة الأعداد النسبية.',
      fr: 'Nombres positifs et négatifs, droite graduée et abscisse, distance à zéro et nombres opposés, comparaison des relatifs.',
    },
    objectives: [
      { ar: 'التعرف على الأعداد العشرية النسبية الموجبة والسالبة.', fr: 'Identifier les nombres décimaux relatifs positifs et négatifs.' },
      { ar: 'تدريج مستقيم وتمثيل نقط عليه.', fr: 'Graduer une droite et y placer des points.' },
      { ar: 'تحديد المسافة إلى الصفر ومقابل عدد.', fr: 'Déterminer la distance à zéro et l’opposé d’un nombre.' },
      { ar: 'مقارنة وترتيب أعداد نسبية.', fr: 'Comparer et ranger des nombres relatifs.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['relatif', 'négatif', 'positif', 'opposé', 'droite graduée', 'abscisse', 'distance à zéro', 'نسبي', 'سالب', 'موجب', 'مقابل', 'أفصول'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'العدد النسبي', fr: 'Un nombre relatif' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'في يوم من شهر يناير، سُجلت درجة الحرارة $-3^\\circ$ بإفران و $-2^\\circ$ بميدلت، بينما كانت $14^\\circ$ بمراكش. الأعداد السالبة تمكّن من التعبير عن درجات الحرارة تحت الصفر.',
              fr: 'Un jour de janvier, on relève $-3^\\circ$ à Ifrane et $-2^\\circ$ à Midelt, mais $14^\\circ$ à Marrakech. Les nombres négatifs permettent d’exprimer les températures au-dessous de zéro.',
            },
          },
          {
            kind: 'definition',
            content: {
              ar: 'العدد النسبي عدد مسبوق بإشارة $+$ أو $-$. إذا سُبق بالإشارة $-$ فهو عدد نسبي **سالب**، وإذا سُبق بالإشارة $+$ فهو عدد نسبي **موجب**.',
              fr: 'Un nombre relatif est un nombre précédé d’un signe $+$ ou $-$. Précédé de $-$, c’est un nombre relatif **négatif** ; précédé de $+$, c’est un nombre relatif **positif**.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: '• $0$ موجب وسالب في آن واحد.\n\n• يمكن حذف الإشارة $+$ للأعداد الموجبة.\n\n• $2025$ و $-89$ أعداد صحيحة نسبية، بينما $-6{,}45$ و $8{,}4$ أعداد عشرية نسبية وليست صحيحة.',
              fr: '• $0$ est à la fois positif et négatif.\n\n• Le signe $+$ des nombres positifs n’est pas obligatoire.\n\n• $2025$ et $-89$ sont des entiers relatifs ; $-6{,}45$ et $8{,}4$ sont des décimaux relatifs mais pas des entiers relatifs.',
            },
          },
        ],
      },
      {
        id: 'droite',
        title: { ar: 'المستقيم المدرج', fr: 'La droite graduée' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'على مستقيم مدرج، كل نقطة معلمة بعدد عشري نسبي يسمى **أفصولها**. أفصول الأصل $O$ هو $0$. النقط ذات الأفاصيل السالبة توجد على يسار $O$، والنقط ذات الأفاصيل الموجبة على يمينه.',
              fr: 'Sur une droite graduée, chaque point est repéré par un nombre décimal relatif appelé son **abscisse**. L’origine $O$ a pour abscisse $0$. Les points d’abscisse négative sont à gauche de $O$, ceux d’abscisse positive à droite.',
            },
          },
          {
            kind: 'geometry',
            x: [-5.8, 5.8],
            y: [-1.2, 1.2],
            segments: [{ from: [-5.5, 0], to: [5.5, 0] }],
            points: [
              { x: -2, y: 0, label: 'B(-2)' },
              { x: 0, y: 0, label: 'O(0)' },
              { x: 1, y: 0, label: 'I(1)' },
              { x: 3, y: 0, label: 'A(3)' },
            ],
            caption: { ar: 'نكتب $B(-2)$ ونقرأ: النقطة $B$ أفصولها $-2$.', fr: 'On écrit $B(-2)$ : le point $B$ a pour abscisse $-2$.' },
          },
        ],
      },
      {
        id: 'distance-opposes',
        title: { ar: 'المسافة إلى الصفر والعددان المتقابلان', fr: 'Distance à zéro et nombres opposés' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'المسافة إلى الصفر', fr: 'Distance à zéro' },
            content: {
              ar: 'المسافة إلى الصفر لعدد نسبي $a$ هي المسافة بين النقطة ذات الأفصول $a$ وأصل المستقيم المدرج. مثلاً المسافة إلى الصفر للعدد $-2$ هي $2$ لأن $OB=2$، وللعدد $3$ هي $3$ لأن $OA=3$.',
              fr: 'La distance à zéro d’un relatif $a$ est la distance entre le point d’abscisse $a$ et l’origine. Par exemple, la distance à zéro de $-2$ est $2$ car $OB=2$, et celle de $3$ est $3$ car $OA=3$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'عددان متقابلان', fr: 'Nombres opposés' },
            content: {
              ar: 'عددان متقابلان لهما نفس المسافة إلى الصفر وإشارتان مختلفتان. مثلاً: $-2{,}4$ و $2{,}4$ متقابلان، ومقابل $4{,}2$ هو $-4{,}2$.',
              fr: 'Deux nombres opposés ont la même distance à zéro et des signes différents. Par exemple $-2{,}4$ et $2{,}4$ sont opposés, et l’opposé de $4{,}2$ est $-4{,}2$.',
            },
          },
        ],
      },
      {
        id: 'comparaison',
        title: { ar: 'مقارنة عددين نسبيين', fr: 'Comparaison de deux relatifs' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كان العددان مختلفي الإشارة: العدد السالب أصغر من العدد الموجب.\n\n• إذا كانا موجبين: الأصغر هو **الأقرب** إلى الصفر.\n\n• إذا كانا سالبين: الأصغر هو **الأبعد** عن الصفر.',
              fr: '• Signes contraires : le nombre négatif est inférieur au nombre positif.\n\n• Deux positifs : le plus petit est le **plus proche** de $0$.\n\n• Deux négatifs : le plus petit est le **plus éloigné** de $0$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن: $-1{,}9$ و $-1{,}2$ ؛ $-2024$ و $-2025$ ؛ $2{,}1$ و $-2{,}56$.', fr: 'Comparer : $-1{,}9$ et $-1{,}2$ ; $-2024$ et $-2025$ ; $2{,}1$ et $-2{,}56$.' },
            steps: [
              { ar: 'المسافتان $1{,}9$ و $1{,}2$، إذن $-1{,}2>-1{,}9$.', fr: 'Distances $1{,}9$ et $1{,}2$ : donc $-1{,}2>-1{,}9$.' },
              { ar: '$2024<2025$، إذن $-2024>-2025$.', fr: '$2024<2025$, donc $-2024>-2025$.' },
              { ar: 'موجب وسالب: $2{,}1>-2{,}56$.', fr: 'Un positif et un négatif : $2{,}1>-2{,}56$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'عدد نسبي = إشارة + مسافة إلى الصفر.', fr: 'Nombre relatif = signe + distance à zéro.' },
      { ar: 'على المستقيم المدرج: السالب يسار $O$ والموجب يمينه.', fr: 'Sur la droite graduée : les négatifs à gauche de $O$, les positifs à droite.' },
      { ar: 'المتقابلان: نفس المسافة إلى الصفر وإشارتان مختلفتان.', fr: 'Opposés : même distance à zéro, signes contraires.' },
      { ar: 'بين عددين سالبين، الأكبر هو الأقرب إلى الصفر.', fr: 'Entre deux négatifs, le plus grand est le plus proche de zéro.' },
    ],
  },
  exercises: [
    {
      id: '1ac-rel-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'مقابل عدد', fr: 'Opposé d’un nombre' },
      statement: { ar: 'ما هو مقابل العدد $-3{,}1$؟', fr: 'Quel est l’opposé de $-3{,}1$ ?' },
      question: { type: 'numeric', answer: 3.1, tolerance: 1e-9 },
      hints: [{ ar: 'نفس المسافة إلى الصفر وإشارة مختلفة.', fr: 'Même distance à zéro, signe contraire.' }],
      solution: [{ ar: 'مقابل $-3{,}1$ هو $3{,}1$.', fr: 'L’opposé de $-3{,}1$ est $3{,}1$.' }],
    },
    {
      id: '1ac-rel-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أكبر عدد', fr: 'Le plus grand' },
      statement: { ar: 'أي عدد هو الأكبر: $-4$ ؛ $-4{,}02$ ؛ $-4{,}002$ ؛ $-4{,}022$؟', fr: 'Quel est le plus grand : $-4$ ; $-4{,}02$ ; $-4{,}002$ ; $-4{,}022$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-4$', fr: '$-4$' }, { ar: '$-4{,}02$', fr: '$-4{,}02$' }, { ar: '$-4{,}002$', fr: '$-4{,}002$' }, { ar: '$-4{,}022$', fr: '$-4{,}022$' }],
        correct: 0,
      },
      hints: [{ ar: 'كلها سالبة: الأكبر هو الأقرب إلى الصفر.', fr: 'Tous négatifs : le plus grand est le plus proche de zéro.' }],
      solution: [
        { ar: 'المسافات إلى الصفر: $4<4{,}002<4{,}02<4{,}022$.', fr: 'Distances à zéro : $4<4{,}002<4{,}02<4{,}022$.' },
        { ar: 'أصغر مسافة هي $4$، إذن الأكبر هو $-4$.', fr: 'La plus petite distance est $4$, donc le plus grand est $-4$.' },
      ],
    },
    {
      id: '1ac-rel-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'مقارنة', fr: 'Comparaison' },
      statement: { ar: 'أكمل: $-5{,}3\\;\\ldots\\;-5{,}28$', fr: 'Compléter : $-5{,}3\\;\\ldots\\;-5{,}28$' },
      question: { type: 'mcq', options: [{ ar: '$<$', fr: '$<$' }, { ar: '$>$', fr: '$>$' }, { ar: '$=$', fr: '$=$' }], correct: 0 },
      hints: [{ ar: 'قارن $5{,}3$ و $5{,}28$ أولاً.', fr: 'Compare d’abord $5{,}3$ et $5{,}28$.' }],
      solution: [
        { ar: '$5{,}30>5{,}28$: العدد $-5{,}3$ أبعد عن الصفر.', fr: '$5{,}30>5{,}28$ : $-5{,}3$ est plus éloigné de zéro.' },
        { ar: 'إذن $-5{,}3<-5{,}28$.', fr: 'Donc $-5{,}3<-5{,}28$.' },
      ],
    },
    {
      id: '1ac-rel-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'ترتيب تناقصي', fr: 'Ordre décroissant' },
      statement: { ar: 'رتب تناقصياً: $-8{,}1$ ؛ $7{,}9$ ؛ $0$ ؛ $-5{,}8$ ؛ $3{,}6$ ؛ $-5{,}9$ ؛ $-6{,}5$.', fr: 'Ranger dans l’ordre décroissant : $-8{,}1$ ; $7{,}9$ ; $0$ ; $-5{,}8$ ; $3{,}6$ ; $-5{,}9$ ; $-6{,}5$.' },
      question: { type: 'open' },
      hints: [{ ar: 'ابدأ بالموجبة من الأكبر، ثم $0$، ثم السالبة من الأقرب إلى الصفر.', fr: 'Commence par les positifs du plus grand au plus petit, puis $0$, puis les négatifs du plus proche de zéro au plus éloigné.' }],
      solution: [
        { ar: 'الموجبة: $7{,}9>3{,}6$، ثم $0$.', fr: 'Positifs : $7{,}9>3{,}6$, puis $0$.' },
        { ar: 'السالبة: $-5{,}8>-5{,}9>-6{,}5>-8{,}1$.', fr: 'Négatifs : $-5{,}8>-5{,}9>-6{,}5>-8{,}1$.' },
        { ar: '$7{,}9>3{,}6>0>-5{,}8>-5{,}9>-6{,}5>-8{,}1$.', fr: '$7{,}9>3{,}6>0>-5{,}8>-5{,}9>-6{,}5>-8{,}1$.' },
      ],
    },
  ],
};
