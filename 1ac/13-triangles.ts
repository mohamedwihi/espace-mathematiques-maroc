import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-triangles';

export const triangles: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'triangles',
    title: { ar: 'المثلثات', fr: 'Les triangles particuliers' },
    summary: {
      ar: 'المتفاوتة المثلثية، مجموع زوايا مثلث، والمثلث القائم ومتساوي الساقين ومتساوي الأضلاع.',
      fr: 'Inégalité triangulaire, somme des angles d’un triangle, triangles rectangle, isocèle et équilatéral.',
    },
    objectives: [
      { ar: 'معرفة المتفاوتة المثلثية واستعمالها.', fr: 'Connaître et utiliser l’inégalité triangulaire.' },
      { ar: 'إنشاء مثلث.', fr: 'Construire un triangle.' },
      { ar: 'استعمال مجموع زوايا مثلث في المثلثات الخاصة.', fr: 'Utiliser la somme des angles dans les triangles particuliers.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['triangle', 'inégalité triangulaire', 'rectangle', 'isocèle', 'équilatéral', 'hypoténuse', 'مثلث', 'المتفاوتة المثلثية', 'قائم', 'متساوي الساقين', 'متساوي الأضلاع'],
    sections: [
      {
        id: 'inegalite',
        title: { ar: 'المتفاوتة المثلثية', fr: 'Inégalité triangulaire' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في مثلث، مجموع طولي ضلعين أكبر من طول الضلع الثالث: $AB+AC>BC$ ، $AB+BC>AC$ ، $AC+BC>AB$.',
              fr: 'Dans un triangle, la somme des longueurs de deux côtés est supérieure à la longueur du troisième : $AB+AC>BC$, $AB+BC>AC$, $AC+BC>AB$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: '• لمعرفة إمكانية إنشاء مثلث، يكفي أن نتحقق أن **أكبر طول** أصغر من مجموع الطولين الآخرين.\n\n• حالة خاصة: إذا كان $AB+BC=AC$ فإن $B\\in[AC]$، أي النقط $A$ و $B$ و $C$ مستقيمية.',
              fr: '• Pour savoir si un triangle est constructible, il suffit de vérifier que **la plus grande longueur** est inférieure à la somme des deux autres.\n\n• Cas particulier : si $AB+BC=AC$, alors $B\\in[AC]$ : les points $A$, $B$, $C$ sont alignés.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'هل يمكن إنشاء مثلث أطواله $3{,}5$ و $5$ و $6$ (بـ cm)؟', fr: 'Peut-on construire un triangle de côtés $3{,}5$, $5$ et $6$ (en cm) ?' },
            steps: [
              { ar: 'أكبر طول هو $6$، و $3{,}5+5=8{,}5$.', fr: 'La plus grande longueur est $6$ et $3{,}5+5=8{,}5$.' },
              { ar: '$6<8{,}5$، إذن المثلث موجود.', fr: '$6<8{,}5$, donc le triangle est constructible.' },
            ],
          },
        ],
      },
      {
        id: 'somme',
        title: { ar: 'مجموع زوايا مثلث', fr: 'Somme des angles' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'في مثلث $ABC$: $A\\widehat{B}C+B\\widehat{A}C+A\\widehat{C}B=180^\\circ$.',
              fr: 'Dans un triangle $ABC$ : $A\\widehat{B}C+B\\widehat{A}C+A\\widehat{C}B=180^\\circ$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'في مثلث $ABC$: $\\widehat{A}=52^\\circ$ و $\\widehat{C}=76^\\circ$. احسب $\\widehat{B}$.', fr: 'Dans un triangle $ABC$ : $\\widehat{A}=52^\\circ$ et $\\widehat{C}=76^\\circ$. Calculer $\\widehat{B}$.' },
            steps: [
              { ar: '$\\widehat{B}=180^\\circ-52^\\circ-76^\\circ=52^\\circ$.', fr: '$\\widehat{B}=180^\\circ-52^\\circ-76^\\circ=52^\\circ$.' },
              { ar: 'نلاحظ أن $\\widehat{A}=\\widehat{B}$: المثلث متساوي الساقين في $C$.', fr: 'On remarque $\\widehat{A}=\\widehat{B}$ : le triangle est isocèle en $C$.' },
            ],
          },
        ],
      },
      {
        id: 'particuliers',
        title: { ar: 'المثلثات الخاصة', fr: 'Triangles particuliers' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'المثلث القائم', fr: 'Triangle rectangle' },
            content: {
              ar: 'مثلث له زاوية قائمة. إذا كان $ABC$ قائماً في $A$ فإن $[BC]$ هو **الوتر** و $[AB]$ و $[AC]$ ضلعا الزاوية القائمة.',
              fr: 'Triangle qui possède un angle droit. Si $ABC$ est rectangle en $A$, $[BC]$ est l’**hypoténuse** et $[AB]$, $[AC]$ sont les côtés de l’angle droit.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'إذا كان مثلث قائماً فإن زاويتيه الحادتين متتامتان. وعكسياً، إذا كانت لمثلث زاويتان متتامتان فهو قائم.',
              fr: 'Si un triangle est rectangle, ses deux angles aigus sont complémentaires. Réciproquement, un triangle qui a deux angles complémentaires est rectangle.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.8, 5],
            y: [-0.8, 4],
            polygons: [{ points: [[0, 0], [4.2, 0], [0, 3.2]], color: 'saffron' }],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: 0, y: 0, label: 'A' },
              { x: 4.2, y: 0, label: 'B' },
              { x: 0, y: 3.2, label: 'C' },
            ],
            caption: { ar: 'مثلث قائم في $A$: $\\widehat{B}+\\widehat{C}=90^\\circ$.', fr: 'Triangle rectangle en $A$ : $\\widehat{B}+\\widehat{C}=90^\\circ$.' },
          },
          {
            kind: 'definition',
            title: { ar: 'المثلث متساوي الساقين', fr: 'Triangle isocèle' },
            content: {
              ar: 'مثلث له ضلعان متقايسان. إذا كان $AB=AC$ فإن $A$ هو الرأس و $[BC]$ القاعدة.',
              fr: 'Triangle qui a deux côtés de même longueur. Si $AB=AC$, $A$ est le sommet principal et $[BC]$ la base.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'إذا كان مثلث متساوي الساقين فإن زاويتي قاعدته متقايستان. وعكسياً، إذا كانت لمثلث زاويتان متقايستان فهو متساوي الساقين.\n\n**حالة خاصة**: المثلث القائم ومتساوي الساقين زاويتا قاعدته تساويان $45^\\circ$.',
              fr: 'Si un triangle est isocèle, ses angles à la base sont égaux. Réciproquement, un triangle qui a deux angles égaux est isocèle.\n\n**Cas particulier** : dans un triangle rectangle isocèle, les angles à la base mesurent $45^\\circ$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'المثلث متساوي الأضلاع', fr: 'Triangle équilatéral' },
            content: {
              ar: 'مثلث أضلاعه الثلاثة متقايسة. زواياه الثلاث تساوي كل منها $60^\\circ$، وعكسياً كل مثلث زواياه الثلاث متقايسة متساوي الأضلاع.',
              fr: 'Triangle dont les trois côtés sont égaux. Ses trois angles mesurent $60^\\circ$ ; réciproquement, un triangle qui a trois angles égaux est équilatéral.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'أكبر ضلع أصغر من مجموع الضلعين الآخرين.', fr: 'Le plus grand côté est inférieur à la somme des deux autres.' },
      { ar: 'مجموع زوايا مثلث $180^\\circ$.', fr: 'Somme des angles d’un triangle : $180^\\circ$.' },
      { ar: 'قائم: زاويتان حادتان متتامتان. متساوي الساقين: زاويتا القاعدة متقايستان.', fr: 'Rectangle : angles aigus complémentaires. Isocèle : angles à la base égaux.' },
      { ar: 'متساوي الأضلاع: ثلاث زوايا قياس كل منها $60^\\circ$.', fr: 'Équilatéral : trois angles de $60^\\circ$.' },
    ],
  },
  exercises: [
    {
      id: '1ac-tri-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'إمكانية الإنشاء', fr: 'Triangle constructible ?' },
      statement: { ar: 'أي ثلاثية أطوال (بـ cm) تمكّن من إنشاء مثلث؟', fr: 'Quel triplet de longueurs (en cm) permet de construire un triangle ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$3$ ؛ $4$ ؛ $6$', fr: '$3$ ; $4$ ; $6$' },
          { ar: '$3$ ؛ $4$ ؛ $8$', fr: '$3$ ; $4$ ; $8$' },
          { ar: '$2$ ؛ $3$ ؛ $5$', fr: '$2$ ; $3$ ; $5$' },
          { ar: '$1$ ؛ $1$ ؛ $3$', fr: '$1$ ; $1$ ; $3$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'قارن أكبر طول بمجموع الطولين الآخرين.', fr: 'Compare la plus grande longueur à la somme des deux autres.' }],
      solution: [
        { ar: '$6<3+4=7$: المثلث موجود.', fr: '$6<3+4=7$ : le triangle existe.' },
        { ar: '$8>7$ و $3>2$: مستحيل. و $5=2+3$: النقط مستقيمية (لا يوجد مثلث).', fr: '$8>7$ et $3>2$ : impossible. Et $5=2+3$ : points alignés (pas de triangle).' },
      ],
    },
    {
      id: '1ac-tri-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'الزاوية الثالثة', fr: 'Le troisième angle' },
      statement: { ar: 'في مثلث $ABC$: $\\widehat{A}=52^\\circ$ و $\\widehat{C}=76^\\circ$. احسب $\\widehat{B}$ بالدرجة.', fr: 'Dans $ABC$ : $\\widehat{A}=52^\\circ$ et $\\widehat{C}=76^\\circ$. Calculer $\\widehat{B}$ en degrés.' },
      question: { type: 'numeric', answer: 52, unit: '°' },
      hints: [{ ar: 'مجموع الزوايا $180^\\circ$.', fr: 'La somme des angles vaut $180^\\circ$.' }],
      solution: [{ ar: '$\\widehat{B}=180^\\circ-52^\\circ-76^\\circ=52^\\circ$.', fr: '$\\widehat{B}=180^\\circ-52^\\circ-76^\\circ=52^\\circ$.' }],
    },
    {
      id: '1ac-tri-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلث قائم', fr: 'Triangle rectangle' },
      statement: { ar: '$EFG$ مثلث قائم في $F$ و $E\\widehat{G}F=30^\\circ$. احسب $F\\widehat{E}G$ بالدرجة.', fr: '$EFG$ est rectangle en $F$ et $E\\widehat{G}F=30^\\circ$. Calculer $F\\widehat{E}G$ en degrés.' },
      question: { type: 'numeric', answer: 60, unit: '°' },
      hints: [{ ar: 'الزاويتان الحادتان متتامتان.', fr: 'Les deux angles aigus sont complémentaires.' }],
      solution: [{ ar: '$F\\widehat{E}G=90^\\circ-30^\\circ=60^\\circ$.', fr: '$F\\widehat{E}G=90^\\circ-30^\\circ=60^\\circ$.' }],
    },
    {
      id: '1ac-tri-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'متساوي الأضلاع', fr: 'Triangle équilatéral' },
      statement: { ar: 'مثلث متساوي الأضلاع محيطه $12\\,\\text{cm}$. ما طول ضلعه بـ cm؟', fr: 'Un triangle équilatéral a un périmètre de $12\\,\\text{cm}$. Quelle est la longueur d’un côté en cm ?' },
      question: { type: 'numeric', answer: 4, unit: 'cm' },
      hints: [{ ar: 'الأضلاع الثلاثة متقايسة.', fr: 'Les trois côtés sont égaux.' }],
      solution: [{ ar: '$12\\div3=4\\,\\text{cm}$.', fr: '$12\\div3=4\\,\\text{cm}$.' }],
    },
    {
      id: '1ac-tri-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'قائم ومتساوي الساقين', fr: 'Rectangle isocèle' },
      statement: { ar: '$EFG$ مثلث قائم ومتساوي الساقين في $G$. احسب $E\\widehat{F}G$ بالدرجة.', fr: '$EFG$ est rectangle et isocèle en $G$. Calculer $E\\widehat{F}G$ en degrés.' },
      question: { type: 'numeric', answer: 45, unit: '°' },
      hints: [{ ar: 'الزاوية في $G$ قائمة، والزاويتان الأخريان متقايستان.', fr: 'L’angle en $G$ est droit et les deux autres sont égaux.' }],
      solution: [
        { ar: '$\\widehat{E}+\\widehat{F}=180^\\circ-90^\\circ=90^\\circ$ و $\\widehat{E}=\\widehat{F}$.', fr: '$\\widehat{E}+\\widehat{F}=180^\\circ-90^\\circ=90^\\circ$ et $\\widehat{E}=\\widehat{F}$.' },
        { ar: 'إذن $E\\widehat{F}G=45^\\circ$.', fr: 'Donc $E\\widehat{F}G=45^\\circ$.' },
      ],
    },
  ],
};
