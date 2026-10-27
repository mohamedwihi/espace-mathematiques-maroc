import type { LessonModule } from '@/types';

const lessonId = '3ac-systemes';

export const systemes: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'systems',
    title: { ar: 'نظمة معادلتين من الدرجة الأولى بمجهولين', fr: 'Systèmes de deux équations à deux inconnues' },
    summary: {
      ar: 'حل نظمة بالتعويض وبالتأليفة الخطية، التأويل المبياني، وحل مسائل بواسطة نظمة.',
      fr: 'Résolution par substitution et par combinaison linéaire, interprétation graphique et résolution de problèmes.',
    },
    objectives: [
      { ar: 'حل نظمة بالتعويض أو بالتأليفة.', fr: 'Résoudre un système par substitution ou combinaison.' },
      { ar: 'ترييض مسألة بنظمة.', fr: 'Mettre un problème en système.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    featured: true,
    keywords: ['système', 'substitution', 'combinaison', 'deux inconnues', 'نظمة', 'تعويض', 'تأليفة خطية'],
    sections: [
      {
        id: 'methodes',
        title: { ar: 'طرق الحل', fr: 'Méthodes de résolution' },
        blocks: [
          {
            kind: 'method',
            title: { ar: 'التعويض', fr: 'Substitution' },
            content: {
              ar: 'نعبر عن أحد المجهولين بدلالة الآخر في إحدى المعادلتين، ثم نعوّض في المعادلة الأخرى.',
              fr: 'On exprime une inconnue en fonction de l’autre dans une équation, puis on remplace dans l’autre équation.',
            },
          },
          {
            kind: 'method',
            title: { ar: 'التأليفة الخطية', fr: 'Combinaison linéaire' },
            content: {
              ar: 'نضرب المعادلتين في أعداد مناسبة ثم نجمعهما لحذف أحد المجهولين.',
              fr: 'On multiplie les équations par des nombres bien choisis puis on les additionne pour éliminer une inconnue.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $\\begin{cases}2x+3y=13\\\\5x-y=7\\end{cases}$.', fr: 'Résoudre $\\begin{cases}2x+3y=13\\\\5x-y=7\\end{cases}$.' },
            steps: [
              { ar: 'من الثانية: $y=5x-7$. نعوّض: $2x+3(5x-7)=13$ أي $17x=34$ ومنه $x=2$.', fr: 'De la seconde : $y=5x-7$. On remplace : $2x+3(5x-7)=13$, soit $17x=34$, d’où $x=2$.' },
              { ar: '$y=5\\times2-7=3$. الحل هو الزوج $(2;3)$.', fr: '$y=5\\times2-7=3$. La solution est le couple $(2;3)$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [
              { fn: (x: number) => (13 - 2 * x) / 3, label: '2x+3y=13', color: 'brand' },
              { fn: (x: number) => 5 * x - 7, label: '5x-y=7', color: 'saffron' },
            ],
            points: [{ x: 2, y: 3, label: '(2;3)' }],
            x: [-1, 6],
            y: [-3, 7],
            caption: { ar: 'حل النظمة هو إحداثيتا نقطة تقاطع المستقيمين.', fr: 'La solution du système correspond au point d’intersection des deux droites.' },
          },
          {
            kind: 'remark',
            content: {
              ar: 'إذا كان المستقيمان متوازيين قطعاً فالنظمة ليس لها حل، وإذا كانا منطبقين فلها ما لا نهاية من الحلول.',
              fr: 'Si les deux droites sont strictement parallèles, le système n’a pas de solution ; si elles sont confondues, il en a une infinité.',
            },
          },
        ],
      },
      {
        id: 'probleme',
        title: { ar: 'حل مسألة', fr: 'Résolution d’un problème' },
        blocks: [
          {
            kind: 'example',
            statement: {
              ar: 'ثمن $2$ كلغ من البرتقال و $3$ كلغ من التفاح $39$ درهماً، وثمن $4$ كلغ من البرتقال و $1$ كلغ من التفاح $33$ درهماً.',
              fr: '$2$ kg d’oranges et $3$ kg de pommes coûtent $39$ DH ; $4$ kg d’oranges et $1$ kg de pommes coûtent $33$ DH.',
            },
            steps: [
              { ar: '$\\begin{cases}2x+3y=39\\\\4x+y=33\\end{cases}$ حيث $x$ ثمن كلغ البرتقال و $y$ ثمن كلغ التفاح.', fr: '$\\begin{cases}2x+3y=39\\\\4x+y=33\\end{cases}$ où $x$ est le prix du kg d’oranges et $y$ celui des pommes.' },
              { ar: '$y=33-4x$ ثم $2x+99-12x=39$ أي $x=6$ و $y=9$.', fr: '$y=33-4x$ puis $2x+99-12x=39$, soit $x=6$ et $y=9$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نتحقق دائماً من الحل في المعادلتين معاً.', fr: 'On vérifie toujours la solution dans les deux équations.' },
      { ar: 'الحل زوج $(x;y)$.', fr: 'La solution est un couple $(x;y)$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-sys-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'نظمة بسيطة', fr: 'Système simple' },
      statement: { ar: 'حل $\\begin{cases}x+y=10\\\\x-y=4\\end{cases}$. ما قيمة $x$؟', fr: 'Résoudre $\\begin{cases}x+y=10\\\\x-y=4\\end{cases}$. Que vaut $x$ ?' },
      question: { type: 'numeric', answer: 7 },
      hints: [{ ar: 'اجمع المعادلتين.', fr: 'Additionne les deux équations.' }],
      solution: [{ ar: '$2x=14$ إذن $x=7$ و $y=3$.', fr: '$2x=14$ donc $x=7$ et $y=3$.' }],
    },
    {
      id: '3ac-sys-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'بالتعويض', fr: 'Par substitution' },
      statement: { ar: 'ما حل النظمة $\\begin{cases}3x+2y=12\\\\y=x+1\\end{cases}$؟', fr: 'Quelle est la solution de $\\begin{cases}3x+2y=12\\\\y=x+1\\end{cases}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(2;3)$', fr: '$(2;3)$' }, { ar: '$(3;2)$', fr: '$(3;2)$' }, { ar: '$(2;4)$', fr: '$(2;4)$' }, { ar: '$(4;0)$', fr: '$(4;0)$' }],
        correct: 0,
      },
      hints: [{ ar: '$3x+2(x+1)=12$.', fr: '$3x+2(x+1)=12$.' }],
      solution: [{ ar: '$5x+2=12$ إذن $x=2$ و $y=3$.', fr: '$5x+2=12$ donc $x=2$ et $y=3$.' }],
    },
    {
      id: '3ac-sys-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'نظمة بدون حل', fr: 'Système sans solution' },
      statement: { ar: 'كم حلاً للنظمة $\\begin{cases}x+2y=3\\\\2x+4y=7\\end{cases}$؟', fr: 'Combien de solutions a le système $\\begin{cases}x+2y=3\\\\2x+4y=7\\end{cases}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'لا حل', fr: 'Aucune' }, { ar: 'حل وحيد', fr: 'Une seule' }, { ar: 'ما لا نهاية', fr: 'Une infinité' }],
        correct: 0,
      },
      hints: [{ ar: 'اضرب الأولى في $2$ وقارن.', fr: 'Multiplie la première par $2$ et compare.' }],
      solution: [{ ar: 'الأولى تعطي $2x+4y=6$ بينما الثانية $2x+4y=7$: تناقض، إذن لا حل.', fr: 'La première donne $2x+4y=6$ alors que la seconde dit $2x+4y=7$ : contradiction, donc aucune solution.' }],
    },
    {
      id: '3ac-sys-04',
      lessonId,
      levelId: '3ac',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'تذاكر', fr: 'Des billets' },
      statement: {
        ar: 'بيعت $50$ تذكرة: تذاكر الكبار بـ $20$ درهماً وتذاكر الصغار بـ $12$ درهماً، والمبلغ الإجمالي $840$ درهماً. كم تذكرة للكبار؟',
        fr: '$50$ billets ont été vendus : adultes à $20$ DH, enfants à $12$ DH, pour un total de $840$ DH. Combien de billets adultes ?',
      },
      question: { type: 'numeric', answer: 30 },
      hints: [{ ar: '$\\begin{cases}x+y=50\\\\20x+12y=840\\end{cases}$.', fr: '$\\begin{cases}x+y=50\\\\20x+12y=840\\end{cases}$.' }],
      solution: [
        { ar: '$y=50-x$ ثم $20x+600-12x=840$ أي $8x=240$ و $x=30$.', fr: '$y=50-x$ puis $20x+600-12x=840$, soit $8x=240$ et $x=30$.' },
        { ar: '$30$ تذكرة للكبار و $20$ للصغار.', fr: '$30$ billets adultes et $20$ billets enfants.' },
      ],
    },
  ],
};
