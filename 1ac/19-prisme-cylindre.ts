import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-prisme-cylindre';

export const prismeCylindre: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'prism-cylinder',
    title: { ar: 'الموشور القائم والأسطوانة القائمة', fr: 'Prisme droit et cylindre' },
    summary: {
      ar: 'تعريف الموشور القائم والأسطوانة القائمة، نشرهما، وحساب المساحة الجانبية والمساحة الكلية والحجم.',
      fr: 'Définition du prisme droit et du cylindre, patrons, aire latérale, aire totale et volume.',
    },
    objectives: [
      { ar: 'التعرف على الموشور القائم والأسطوانة وعناصرهما.', fr: 'Reconnaître le prisme droit, le cylindre et leurs éléments.' },
      { ar: 'إنشاء نشر موشور قائم وأسطوانة.', fr: 'Construire le patron d’un prisme droit et d’un cylindre.' },
      { ar: 'حساب المساحة الجانبية والحجم.', fr: 'Calculer l’aire latérale et le volume.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['prisme droit', 'cylindre', 'cube', 'pavé droit', 'patron', 'aire latérale', 'volume', 'موشور', 'أسطوانة', 'نشر', 'حجم', 'مساحة جانبية'],
    sections: [
      {
        id: 'prisme',
        title: { ar: 'الموشور القائم', fr: 'Le prisme droit' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الموشور القائم مجسم يتكون من:\n\n• **قاعدتين** متوازيتين ومتطابقتين (مثلثان، مستطيلان…).\n\n• **أحرف جانبية** متقايسة يمثل طولها **ارتفاع** الموشور.\n\n• **أوجه جانبية** على شكل مستطيلات.',
              fr: 'Un prisme droit est un solide formé de :\n\n• deux **bases** parallèles et superposables (triangles, rectangles…) ;\n\n• des **arêtes latérales** de même longueur, qui est la **hauteur** du prisme ;\n\n• des **faces latérales** rectangulaires.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'المكعب ومتوازي المستطيلات (المسدس الأوجه) حالتان خاصتان من الموشور القائم. للمكعب $ABCDEFGH$: القاعدتان $ABCD$ و $EFGH$، والأحرف الجانبية $[AE]$ و $[BF]$ و $[CG]$ و $[DH]$.',
              fr: 'Le cube et le pavé droit sont des prismes droits particuliers. Pour le cube $ABCDEFGH$ : bases $ABCD$ et $EFGH$, arêtes latérales $[AE]$, $[BF]$, $[CG]$, $[DH]$.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.5, 8.5],
            y: [-1.5, 3.5],
            polygons: [
              { points: [[0, 0], [8, 0], [8, 2], [0, 2]], color: 'brand' },
              { points: [[0, 2], [3, 2], [3, 3], [0, 3]], color: 'saffron' },
              { points: [[0, -1], [3, -1], [3, 0], [0, 0]], color: 'saffron' },
            ],
            segments: [
              { from: [3, 0], to: [3, 2], dashed: true },
              { from: [4, 0], to: [4, 2], dashed: true },
              { from: [7, 0], to: [7, 2], dashed: true },
            ],
            caption: {
              ar: 'نشر متوازي مستطيلات أبعاده $3\\times1\\times2$: الأوجه الجانبية تكوّن مستطيلاً طوله محيط القاعدة ($8$) وعرضه الارتفاع ($2$).',
              fr: 'Patron d’un pavé droit $3\\times1\\times2$ : les faces latérales forment un rectangle de longueur le périmètre de la base ($8$) et de largeur la hauteur ($2$).',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'المساحة والحجم', fr: 'Aires et volume' },
            content: {
              ar: '• **المساحة الجانبية** = محيط القاعدة × الارتفاع: $A_L=P\\times h$.\n\n• **المساحة الكلية** = المساحة الجانبية + ضعف مساحة القاعدة: $A_T=A_L+2A_B$.\n\n• **الحجم** = مساحة القاعدة × الارتفاع: $V=A_B\\times h$.',
              fr: '• **Aire latérale** = périmètre de la base × hauteur : $A_L=P\\times h$.\n\n• **Aire totale** = aire latérale + 2 × aire de la base : $A_T=A_L+2A_B$.\n\n• **Volume** = aire de la base × hauteur : $V=A_B\\times h$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'متوازي مستطيلات قاعدته $3\\,\\text{cm}\\times1\\,\\text{cm}$ وارتفاعه $2\\,\\text{cm}$.', fr: 'Pavé droit de base $3\\,\\text{cm}\\times1\\,\\text{cm}$ et de hauteur $2\\,\\text{cm}$.' },
            steps: [
              { ar: '$P=3+1+3+1=8\\,\\text{cm}$، إذن $A_L=8\\times2=16\\,\\text{cm}^2$.', fr: '$P=3+1+3+1=8\\,\\text{cm}$, donc $A_L=8\\times2=16\\,\\text{cm}^2$.' },
              { ar: '$A_B=3\\times1=3$، إذن $A_T=16+2\\times3=22\\,\\text{cm}^2$.', fr: '$A_B=3\\times1=3$, donc $A_T=16+2\\times3=22\\,\\text{cm}^2$.' },
              { ar: '$V=3\\times2=6\\,\\text{cm}^3$.', fr: '$V=3\\times2=6\\,\\text{cm}^3$.' },
            ],
          },
        ],
      },
      {
        id: 'cylindre',
        title: { ar: 'الأسطوانة القائمة', fr: 'Le cylindre droit' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الأسطوانة القائمة مجسم قاعدتاه **قرصان متوازيان لهما نفس الشعاع** $r$، والمسافة بينهما هي **الارتفاع** $h$. نشرها يتكون من قرصين ومستطيل طوله $2\\pi r$ وعرضه $h$.',
              fr: 'Un cylindre droit est un solide dont les bases sont **deux disques parallèles de même rayon** $r$ ; la distance entre elles est la **hauteur** $h$. Son patron est formé de deux disques et d’un rectangle de longueur $2\\pi r$ et de largeur $h$.',
            },
          },
          { kind: 'formula', tex: 'A_L=2\\pi r\\times h\\qquad A_T=A_L+2\\pi r^2\\qquad V=\\pi r^2\\times h' },
          {
            kind: 'example',
            statement: { ar: 'أسطوانة شعاعها $4\\,\\text{cm}$ وارتفاعها $7\\,\\text{cm}$.', fr: 'Cylindre de rayon $4\\,\\text{cm}$ et de hauteur $7\\,\\text{cm}$.' },
            steps: [
              { ar: '$A_L=2\\pi\\times4\\times7=56\\pi\\approx175{,}93\\,\\text{cm}^2$.', fr: '$A_L=2\\pi\\times4\\times7=56\\pi\\approx175{,}93\\,\\text{cm}^2$.' },
              { ar: '$V=\\pi\\times4^2\\times7=112\\pi\\approx351{,}86\\,\\text{cm}^3$.', fr: '$V=\\pi\\times4^2\\times7=112\\pi\\approx351{,}86\\,\\text{cm}^3$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'موشور قائم: قاعدتان متطابقتان وأوجه جانبية مستطيلة.', fr: 'Prisme droit : deux bases superposables et des faces latérales rectangulaires.' },
      { ar: '$A_L=P\\times h$ و $V=A_B\\times h$.', fr: '$A_L=P\\times h$ et $V=A_B\\times h$.' },
      { ar: 'أسطوانة: $A_L=2\\pi rh$ و $V=\\pi r^2h$.', fr: 'Cylindre : $A_L=2\\pi rh$ et $V=\\pi r^2h$.' },
      { ar: 'المساحة الكلية = الجانبية + مساحتا القاعدتين.', fr: 'Aire totale = aire latérale + aires des deux bases.' },
    ],
  },
  exercises: [
    {
      id: '1ac-prisme-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'الأوجه الجانبية', fr: 'Faces latérales' },
      statement: { ar: 'الأوجه الجانبية لموشور قائم هي:', fr: 'Les faces latérales d’un prisme droit sont :' },
      question: {
        type: 'mcq',
        options: [{ ar: 'مستطيلات', fr: 'des rectangles' }, { ar: 'مثلثات', fr: 'des triangles' }, { ar: 'أقراص', fr: 'des disques' }],
        correct: 0,
      },
      hints: [{ ar: 'القاعدتان قد تكونان مثلثين، لكن ماذا عن الأوجه الجانبية؟', fr: 'Les bases peuvent être des triangles, mais les faces latérales ?' }],
      solution: [{ ar: 'الأوجه الجانبية لموشور قائم مستطيلات (قد تكون مربعات كما في المكعب).', fr: 'Les faces latérales d’un prisme droit sont des rectangles (éventuellement des carrés, comme pour le cube).' }],
    },
    {
      id: '1ac-prisme-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حجم مكعب', fr: 'Volume d’un cube' },
      statement: { ar: 'احسب حجم مكعب طول حرفه $5\\,\\text{cm}$ (بـ $\\text{cm}^3$).', fr: 'Calculer le volume d’un cube d’arête $5\\,\\text{cm}$ (en $\\text{cm}^3$).' },
      question: { type: 'numeric', answer: 125, unit: 'cm³' },
      hints: [{ ar: '$V=A_B\\times h$ و $A_B=5\\times5$.', fr: '$V=A_B\\times h$ avec $A_B=5\\times5$.' }],
      solution: [{ ar: '$V=5\\times5\\times5=125\\,\\text{cm}^3$.', fr: '$V=5\\times5\\times5=125\\,\\text{cm}^3$.' }],
    },
    {
      id: '1ac-prisme-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مساحة جانبية لمكعب', fr: 'Aire latérale d’un cube' },
      statement: { ar: 'احسب المساحة الجانبية لمكعب طول حرفه $5\\,\\text{cm}$ (بـ $\\text{cm}^2$).', fr: 'Calculer l’aire latérale d’un cube d’arête $5\\,\\text{cm}$ (en $\\text{cm}^2$).' },
      question: { type: 'numeric', answer: 100, unit: 'cm²' },
      hints: [{ ar: '$A_L=P\\times h$ مع $P=4\\times5$.', fr: '$A_L=P\\times h$ avec $P=4\\times5$.' }],
      solution: [
        { ar: '$P=20\\,\\text{cm}$ و $h=5\\,\\text{cm}$.', fr: '$P=20\\,\\text{cm}$ et $h=5\\,\\text{cm}$.' },
        { ar: '$A_L=20\\times5=100\\,\\text{cm}^2$ (أي أربعة أوجه مساحة كل منها $25$).', fr: '$A_L=20\\times5=100\\,\\text{cm}^2$ (quatre faces de $25$ chacune).' },
      ],
    },
    {
      id: '1ac-prisme-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'حجم أسطوانة', fr: 'Volume d’un cylindre' },
      statement: { ar: 'أسطوانة شعاعها $2\\,\\text{cm}$ وارتفاعها $3\\,\\text{cm}$. احسب حجمها إلى $0{,}01$ (بـ $\\text{cm}^3$).', fr: 'Un cylindre a pour rayon $2\\,\\text{cm}$ et pour hauteur $3\\,\\text{cm}$. Calculer son volume à $0{,}01$ près (en $\\text{cm}^3$).' },
      question: { type: 'numeric', answer: 12 * Math.PI, tolerance: 0.01, unit: 'cm³' },
      hints: [{ ar: '$V=\\pi r^2h$.', fr: '$V=\\pi r^2h$.' }],
      solution: [{ ar: '$V=\\pi\\times2^2\\times3=12\\pi\\approx37{,}70\\,\\text{cm}^3$.', fr: '$V=\\pi\\times2^2\\times3=12\\pi\\approx37{,}70\\,\\text{cm}^3$.' }],
    },
    {
      id: '1ac-prisme-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'المساحة الكلية لأسطوانة', fr: 'Aire totale d’un cylindre' },
      statement: { ar: 'نفس الأسطوانة ($r=2\\,\\text{cm}$، $h=3\\,\\text{cm}$). احسب مساحتها الكلية إلى $0{,}01$ (بـ $\\text{cm}^2$).', fr: 'Même cylindre ($r=2\\,\\text{cm}$, $h=3\\,\\text{cm}$). Calculer son aire totale à $0{,}01$ près (en $\\text{cm}^2$).' },
      question: { type: 'numeric', answer: 20 * Math.PI, tolerance: 0.01, unit: 'cm²' },
      hints: [
        { ar: '$A_L=2\\pi rh$.', fr: '$A_L=2\\pi rh$.' },
        { ar: 'أضف مساحتي القاعدتين $2\\pi r^2$.', fr: 'Ajoute l’aire des deux bases $2\\pi r^2$.' },
      ],
      solution: [
        { ar: '$A_L=2\\pi\\times2\\times3=12\\pi$ و $2\\pi r^2=8\\pi$.', fr: '$A_L=2\\pi\\times2\\times3=12\\pi$ et $2\\pi r^2=8\\pi$.' },
        { ar: '$A_T=12\\pi+8\\pi=20\\pi\\approx62{,}83\\,\\text{cm}^2$.', fr: '$A_T=12\\pi+8\\pi=20\\pi\\approx62{,}83\\,\\text{cm}^2$.' },
      ],
    },
  ],
};
