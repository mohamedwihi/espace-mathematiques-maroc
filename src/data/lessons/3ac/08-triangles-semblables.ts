import type { LessonModule } from '@/types';

const lessonId = '3ac-triangles-semblables';

export const trianglesSemblables: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'similar-triangles',
    title: { ar: 'المثلثات المتشابهة', fr: 'Triangles semblables' },
    summary: {
      ar: 'تعريف مثلثين متشابهين، نسبة التشابه، حالات التشابه الثلاث ونسبة المساحات.',
      fr: 'Définition de deux triangles semblables, rapport de similitude, les trois cas de similitude et rapport des aires.',
    },
    objectives: [
      { ar: 'التعرف على مثلثين متشابهين.', fr: 'Reconnaître deux triangles semblables.' },
      { ar: 'استعمال حالات التشابه لحل مسائل.', fr: 'Utiliser les cas de similitude pour résoudre des problèmes.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    keywords: ['triangles semblables', 'similitude', 'rapport', 'proportionnels', 'مثلثات متشابهة', 'نسبة التشابه'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف ونسبة التشابه', fr: 'Définition et rapport' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'يكون مثلثان **متشابهين** إذا كانت زواياهما متقايسة مثنى مثنى وأطوال أضلاعهما المتناظرة متناسبة. النسبة $k$ بين ضلعين متناظرين تسمى **نسبة التشابه**.',
              fr: 'Deux triangles sont **semblables** si leurs angles sont égaux deux à deux et si leurs côtés homologues sont proportionnels. Le rapport $k$ de deux côtés homologues est le **rapport de similitude**.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'أضلاع $ABC$: $7{,}2$ ؛ $8{,}8$ ؛ $8{,}2$، وأضلاع $EFG$ المتناظرة: $10{,}8$ ؛ $13{,}2$ ؛ $12{,}3$.', fr: 'Côtés de $ABC$ : $7{,}2$ ; $8{,}8$ ; $8{,}2$, et côtés homologues de $EFG$ : $10{,}8$ ; $13{,}2$ ; $12{,}3$.' },
            steps: [{ ar: '$\\dfrac{10{,}8}{7{,}2}=\\dfrac{13{,}2}{8{,}8}=\\dfrac{12{,}3}{8{,}2}=1{,}5$: المثلثان متشابهان ونسبة التشابه $k=1{,}5$.', fr: '$\\dfrac{10{,}8}{7{,}2}=\\dfrac{13{,}2}{8{,}8}=\\dfrac{12{,}3}{8{,}2}=1{,}5$ : les triangles sont semblables, de rapport $k=1{,}5$.' }],
          },
        ],
      },
      {
        id: 'cas',
        title: { ar: 'حالات التشابه', fr: 'Cas de similitude' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'يكون مثلثان متشابهين إذا تحقق أحد الشروط:\n\n1. **زاويتان** من الأول تقايسان زاويتين من الثاني.\n\n2. **زاوية** متقايسة والضلعان المحيطان بها متناسبان.\n\n3. **الأضلاع الثلاثة** متناسبة.',
              fr: 'Deux triangles sont semblables si l’une des conditions est vérifiée :\n\n1. **deux angles** de l’un sont égaux à deux angles de l’autre ;\n\n2. un **angle** égal compris entre deux côtés proportionnels ;\n\n3. les **trois côtés** sont proportionnels.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'النسب في مثلثين متشابهين', fr: 'Rapports dans deux triangles semblables' },
            content: {
              ar: 'إذا كانت نسبة التشابه $k$: المحيطات والارتفاعات والمتوسطات تضرب في $k$، والمساحات تضرب في $k^2$.',
              fr: 'Si le rapport de similitude est $k$ : périmètres, hauteurs et médianes sont multipliés par $k$, les aires par $k^2$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'زاويتان متقايستان تكفيان لإثبات التشابه.', fr: 'Deux angles égaux suffisent pour prouver la similitude.' },
      { ar: 'نسبة المساحات $=k^2$.', fr: 'Rapport des aires $=k^2$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-sem-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'زوايا مثلثين', fr: 'Angles de deux triangles' },
      statement: { ar: 'مثلث له زاويتان $72^\\circ$ و $43^\\circ$، وآخر له زاويتان $72^\\circ$ و $65^\\circ$. هل هما متشابهان؟', fr: 'Un triangle a des angles de $72^\\circ$ et $43^\\circ$ ; un autre a des angles de $72^\\circ$ et $65^\\circ$. Sont-ils semblables ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'احسب الزاوية الثالثة في كل مثلث.', fr: 'Calcule le troisième angle de chaque triangle.' }],
      solution: [{ ar: 'الزاوية الثالثة للأول $65^\\circ$ وللثاني $43^\\circ$: لهما نفس الزوايا، إذن متشابهان.', fr: 'Troisième angle : $65^\\circ$ pour le premier, $43^\\circ$ pour le second : mêmes angles, donc semblables.' }],
    },
    {
      id: '3ac-sem-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'نسبة المساحات', fr: 'Rapport des aires' },
      statement: { ar: 'مثلثان متشابهان نسبة تشابههما $k=3$. بكم تُضرب المساحة؟', fr: 'Deux triangles sont semblables de rapport $k=3$. Par combien l’aire est-elle multipliée ?' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: 'المساحات تضرب في $k^2$.', fr: 'Les aires sont multipliées par $k^2$.' }],
      solution: [{ ar: '$k^2=9$.', fr: '$k^2=9$.' }],
    },
    {
      id: '3ac-sem-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'أكبر ضلع', fr: 'Le plus grand côté' },
      statement: { ar: 'مثلث أضلاعه $3$ و $4$ و $5$، ومثلث مشابه له أصغر أضلاعه $6$. ما طول أكبر أضلاعه؟', fr: 'Un triangle a pour côtés $3$, $4$, $5$ ; un triangle semblable a pour plus petit côté $6$. Quelle est la longueur de son plus grand côté ?' },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: 'نسبة التشابه $k=\\dfrac63=2$.', fr: 'Rapport $k=\\dfrac63=2$.' }],
      solution: [{ ar: '$5\\times2=10$.', fr: '$5\\times2=10$.' }],
    },
    {
      id: '3ac-sem-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلثان متساويا الساقين', fr: 'Deux triangles isocèles' },
      statement: {
        ar: 'مثلثان متساويا الساقين: القاعدتان $4$ و $6$ والساقان $5$ و $7{,}5$. هل هما متشابهان؟',
        fr: 'Deux triangles isocèles : bases $4$ et $6$, côtés égaux $5$ et $7{,}5$. Sont-ils semblables ?',
      },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'قارن $\\dfrac64$ و $\\dfrac{7{,}5}5$.', fr: 'Compare $\\dfrac64$ et $\\dfrac{7{,}5}5$.' }],
      solution: [{ ar: '$\\dfrac64=\\dfrac{7{,}5}5=\\dfrac{7{,}5}5=1{,}5$: الأضلاع الثلاثة متناسبة، إذن متشابهان.', fr: '$\\dfrac64=\\dfrac{7{,}5}5=\\dfrac{7{,}5}5=1{,}5$ : les trois côtés sont proportionnels, donc semblables.' }],
    },
  ],
};
