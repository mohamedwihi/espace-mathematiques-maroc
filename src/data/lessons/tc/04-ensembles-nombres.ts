import type { LessonModule } from '@/types';

const lessonId = 'tc-ensembles-nombres';

export const ensemblesNombres: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'sets',
    title: { ar: 'المجموعات العددية', fr: 'Les ensembles de nombres' },
    summary: {
      ar: 'المجموعات $\\mathbb N$ و $\\mathbb Z$ و $\\mathbb D$ و $\\mathbb Q$ و $\\mathbb R$، الرموز $\\in$ و $\\subset$، والأعداد اللاجذرية.',
      fr: 'Les ensembles $\\mathbb N$, $\\mathbb Z$, $\\mathbb D$, $\\mathbb Q$, $\\mathbb R$, les symboles $\\in$ et $\\subset$, et les nombres irrationnels.',
    },
    objectives: [
      { ar: 'التعرف على المجموعات العددية والعلاقات بينها.', fr: 'Connaître les ensembles de nombres et leurs inclusions.' },
      { ar: 'تحديد أصغر مجموعة ينتمي إليها عدد.', fr: 'Déterminer le plus petit ensemble contenant un nombre.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    keywords: ['ensemble', 'naturel', 'entier', 'décimal', 'rationnel', 'réel', 'irrationnel', 'مجموعة', 'جذري', 'لاجذري', 'حقيقي'],
    sections: [
      {
        id: 'ensembles',
        title: { ar: 'المجموعات', fr: 'Les ensembles' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '$\\mathbb N=\\{0;1;2;\\dots\\}$: الأعداد الصحيحة الطبيعية.', fr: '$\\mathbb N=\\{0;1;2;\\dots\\}$ : les entiers naturels.' },
              { ar: '$\\mathbb Z=\\{\\dots;-2;-1;0;1;2;\\dots\\}$: الأعداد الصحيحة النسبية.', fr: '$\\mathbb Z=\\{\\dots;-2;-1;0;1;2;\\dots\\}$ : les entiers relatifs.' },
              { ar: '$\\mathbb D$: الأعداد العشرية، أي التي تكتب $\\dfrac a{10^n}$ مع $a\\in\\mathbb Z$ و $n\\in\\mathbb N$.', fr: '$\\mathbb D$ : les décimaux, qui s’écrivent $\\dfrac a{10^n}$ avec $a\\in\\mathbb Z$ et $n\\in\\mathbb N$.' },
              { ar: '$\\mathbb Q$: الأعداد الجذرية $\\dfrac pq$ مع $p\\in\\mathbb Z$ و $q\\in\\mathbb N^*$.', fr: '$\\mathbb Q$ : les rationnels $\\dfrac pq$ avec $p\\in\\mathbb Z$ et $q\\in\\mathbb N^*$.' },
              { ar: '$\\mathbb R$: الأعداد الحقيقية (تمثل بنقط مستقيم مدرج).', fr: '$\\mathbb R$ : les réels (les abscisses des points d’une droite graduée).' },
            ],
          },
          {
            kind: 'property',
            content: {
              ar: '$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb D\\subset\\mathbb Q\\subset\\mathbb R$. نكتب $x\\in E$ («$x$ ينتمي إلى $E$») و $E\\subset F$ («$E$ ضمن $F$»).',
              fr: '$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb D\\subset\\mathbb Q\\subset\\mathbb R$. On écrit $x\\in E$ (« $x$ appartient à $E$ ») et $E\\subset F$ (« $E$ est inclus dans $F$ »).',
            },
          },
        ],
      },
      {
        id: 'exemples',
        title: { ar: 'أمثلة', fr: 'Exemples' },
        blocks: [
          {
            kind: 'example',
            statement: { ar: 'حدد أصغر مجموعة ينتمي إليها كل عدد.', fr: 'Donner le plus petit ensemble contenant chaque nombre.' },
            steps: [
              { ar: '$\\sqrt{16}=4\\in\\mathbb N$ ؛ $-\\dfrac{12}4=-3\\in\\mathbb Z$ ؛ $-\\dfrac74=-1{,}75\\in\\mathbb D$.', fr: '$\\sqrt{16}=4\\in\\mathbb N$ ; $-\\dfrac{12}4=-3\\in\\mathbb Z$ ; $-\\dfrac74=-1{,}75\\in\\mathbb D$.' },
              { ar: '$\\dfrac13\\in\\mathbb Q$ لكن $\\dfrac13\\notin\\mathbb D$ ؛ $\\sqrt2\\in\\mathbb R$ لكن $\\sqrt2\\notin\\mathbb Q$.', fr: '$\\dfrac13\\in\\mathbb Q$ mais $\\dfrac13\\notin\\mathbb D$ ; $\\sqrt2\\in\\mathbb R$ mais $\\sqrt2\\notin\\mathbb Q$.' },
            ],
          },
          {
            kind: 'remark',
            content: {
              ar: 'العدد الحقيقي غير الجذري يسمى **لاجذرياً**، مثل $\\sqrt2$ و $\\sqrt3$ و $\\pi$.',
              fr: 'Un réel non rationnel est dit **irrationnel**, comme $\\sqrt2$, $\\sqrt3$ ou $\\pi$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb D\\subset\\mathbb Q\\subset\\mathbb R$.', fr: '$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb D\\subset\\mathbb Q\\subset\\mathbb R$.' },
      { ar: '$\\dfrac13$ جذري غير عشري، و $\\sqrt2$ لاجذري.', fr: '$\\dfrac13$ est rationnel non décimal, $\\sqrt2$ est irrationnel.' },
    ],
  },
  exercises: [
    {
      id: 'tc-ens-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أصغر مجموعة', fr: 'Plus petit ensemble' },
      statement: { ar: 'ما أصغر مجموعة ينتمي إليها $-\\dfrac74$؟', fr: 'Quel est le plus petit ensemble contenant $-\\dfrac74$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\mathbb D$', fr: '$\\mathbb D$' }, { ar: '$\\mathbb Z$', fr: '$\\mathbb Z$' }, { ar: '$\\mathbb Q$', fr: '$\\mathbb Q$' }, { ar: '$\\mathbb N$', fr: '$\\mathbb N$' }],
        correct: 0,
      },
      hints: [{ ar: '$-\\dfrac74=-1{,}75$.', fr: '$-\\dfrac74=-1{,}75$.' }],
      solution: [{ ar: '$-1{,}75=\\dfrac{-175}{10^2}\\in\\mathbb D$ وليس صحيحاً.', fr: '$-1{,}75=\\dfrac{-175}{10^2}\\in\\mathbb D$, et ce n’est pas un entier.' }],
    },
    {
      id: 'tc-ens-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'عدد لاجذري', fr: 'Un irrationnel' },
      statement: { ar: 'أي عدد من الأعداد التالية لاجذري؟', fr: 'Lequel de ces nombres est irrationnel ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\sqrt2$', fr: '$\\sqrt2$' }, { ar: '$\\sqrt{9}$', fr: '$\\sqrt{9}$' }, { ar: '$\\dfrac{22}7$', fr: '$\\dfrac{22}7$' }, { ar: '$0{,}333$', fr: '$0{,}333$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\sqrt9=3$.', fr: '$\\sqrt9=3$.' }],
      solution: [{ ar: '$\\sqrt2$ لاجذري؛ الأعداد الأخرى جذرية.', fr: '$\\sqrt2$ est irrationnel ; les autres sont rationnels.' }],
    },
    {
      id: 'tc-ens-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'هل هو عشري؟', fr: 'Est-il décimal ?' },
      statement: { ar: 'هل $\\dfrac13\\in\\mathbb D$؟', fr: 'A-t-on $\\dfrac13\\in\\mathbb D$ ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 1 },
      hints: [{ ar: '$\\dfrac13=0{,}333\\dots$ كتابة لا منتهية.', fr: '$\\dfrac13=0{,}333\\dots$ a une écriture illimitée.' }],
      solution: [{ ar: 'لا يمكن كتابة $\\dfrac13$ على الشكل $\\dfrac a{10^n}$، إذن $\\dfrac13\\in\\mathbb Q$ و $\\dfrac13\\notin\\mathbb D$.', fr: '$\\dfrac13$ ne s’écrit pas $\\dfrac a{10^n}$ : $\\dfrac13\\in\\mathbb Q$ et $\\dfrac13\\notin\\mathbb D$.' }],
    },
    {
      id: 'tc-ens-04',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'تضمين', fr: 'Inclusion' },
      statement: { ar: 'أي كتابة صحيحة؟', fr: 'Quelle écriture est correcte ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\mathbb Z\\subset\\mathbb Q$', fr: '$\\mathbb Z\\subset\\mathbb Q$' }, { ar: '$\\mathbb Q\\subset\\mathbb D$', fr: '$\\mathbb Q\\subset\\mathbb D$' }, { ar: '$\\mathbb R\\subset\\mathbb Q$', fr: '$\\mathbb R\\subset\\mathbb Q$' }, { ar: '$\\mathbb Z\\subset\\mathbb N$', fr: '$\\mathbb Z\\subset\\mathbb N$' }],
        correct: 0,
      },
      hints: [{ ar: 'كل عدد صحيح $n$ يكتب $\\dfrac n1$.', fr: 'Tout entier $n$ s’écrit $\\dfrac n1$.' }],
      solution: [{ ar: '$\\mathbb Z\\subset\\mathbb Q$.', fr: '$\\mathbb Z\\subset\\mathbb Q$.' }],
    },
  ],
};
