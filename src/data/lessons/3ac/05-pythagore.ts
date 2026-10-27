import type { LessonModule } from '@/types';

const lessonId = '3ac-pythagore';

export const pythagore: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'pythagoras',
    title: { ar: 'مبرهنة فيثاغورس', fr: 'Théorème de Pythagore' },
    summary: {
      ar: 'مبرهنة فيثاغورس المباشرة لحساب طول ضلع، والعكسية لإثبات أن مثلثاً قائم الزاوية.',
      fr: 'Théorème de Pythagore pour calculer une longueur, et réciproque pour montrer qu’un triangle est rectangle.',
    },
    objectives: [
      { ar: 'حساب طول ضلع في مثلث قائم الزاوية.', fr: 'Calculer une longueur dans un triangle rectangle.' },
      { ar: 'إثبات أن مثلثاً قائم الزاوية بالمبرهنة العكسية.', fr: 'Démontrer qu’un triangle est rectangle avec la réciproque.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    keywords: ['Pythagore', 'hypoténuse', 'triangle rectangle', 'réciproque', 'فيثاغورس', 'وتر', 'مثلث قائم'],
    sections: [
      {
        id: 'direct',
        title: { ar: 'المبرهنة المباشرة', fr: 'Théorème direct' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'إذا كان $ABC$ قائم الزاوية في $A$ فإن $BC^2=AB^2+AC^2$. الضلع $[BC]$ المقابل للزاوية القائمة هو **الوتر**، وهو أطول الأضلاع.',
              fr: 'Si $ABC$ est rectangle en $A$, alors $BC^2=AB^2+AC^2$. Le côté $[BC]$ opposé à l’angle droit est l’**hypoténuse**, le plus long côté.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.8, 4.8],
            y: [-0.8, 3.6],
            polygons: [{ points: [[0, 0], [4, 0], [0, 3]], color: 'brand' }],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: 0, y: 0, label: 'A' },
              { x: 4, y: 0, label: 'B' },
              { x: 0, y: 3, label: 'C' },
            ],
            caption: { ar: '$BC^2=AB^2+AC^2$.', fr: '$BC^2=AB^2+AC^2$.' },
          },
          {
            kind: 'example',
            statement: { ar: '$EFG$ قائم في $E$ مع $EG=2\\sqrt5$ و $FG=6$. احسب $EF$.', fr: '$EFG$ est rectangle en $E$ avec $EG=2\\sqrt5$ et $FG=6$. Calculer $EF$.' },
            steps: [
              { ar: '$EF^2=FG^2-EG^2=36-20=16$.', fr: '$EF^2=FG^2-EG^2=36-20=16$.' },
              { ar: '$EF=\\sqrt{16}=4$.', fr: '$EF=\\sqrt{16}=4$.' },
            ],
          },
        ],
      },
      {
        id: 'reciproque',
        title: { ar: 'المبرهنة العكسية', fr: 'Réciproque' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'إذا كان مربع أطول ضلع في مثلث يساوي مجموع مربعي الضلعين الآخرين، فإن المثلث قائم الزاوية في الرأس المقابل لهذا الضلع.',
              fr: 'Si, dans un triangle, le carré du plus long côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle au sommet opposé à ce côté.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$AB=\\sqrt7$ و $AC=2$ و $BC=\\sqrt3$.', fr: '$AB=\\sqrt7$, $AC=2$, $BC=\\sqrt3$.' },
            steps: [
              { ar: '$AB^2=7$ و $AC^2+BC^2=4+3=7$.', fr: '$AB^2=7$ et $AC^2+BC^2=4+3=7$.' },
              { ar: 'إذن $ABC$ قائم الزاوية في $C$.', fr: 'Donc $ABC$ est rectangle en $C$.' },
            ],
          },
          {
            kind: 'remark',
            content: {
              ar: 'إذا كان مربع أطول ضلع مختلفاً عن مجموع مربعي الضلعين الآخرين، فالمثلث **ليس** قائم الزاوية.',
              fr: 'Si le carré du plus long côté diffère de la somme des carrés des deux autres, le triangle **n’est pas** rectangle.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'قائم في $A$ ⟸⟹ $BC^2=AB^2+AC^2$.', fr: 'Rectangle en $A$ ⟺ $BC^2=AB^2+AC^2$.' },
      { ar: 'نتحقق دائماً من أطول ضلع.', fr: 'On teste toujours le plus long côté.' },
    ],
  },
  exercises: [
    {
      id: '3ac-pyt-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حساب الوتر', fr: 'Calcul de l’hypoténuse' },
      statement: { ar: '$ABC$ قائم في $A$ مع $AB=9$ و $AC=12$. احسب $BC$.', fr: '$ABC$ est rectangle en $A$ avec $AB=9$ et $AC=12$. Calculer $BC$.' },
      question: { type: 'numeric', answer: 15 },
      hints: [{ ar: '$BC^2=81+144$.', fr: '$BC^2=81+144$.' }],
      solution: [{ ar: '$BC^2=225$ إذن $BC=15$.', fr: '$BC^2=225$ donc $BC=15$.' }],
    },
    {
      id: '3ac-pyt-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'ارتفاع ومثلث قائم', fr: 'Hauteur et triangle rectangle' },
      statement: {
        ar: '$H$ نقطة من $[BC]$ بحيث $(AH)\\perp(BC)$، مع $BH=2$ و $AH=4$ و $HC=8$. هل المثلث $ABC$ قائم الزاوية في $A$؟',
        fr: '$H$ est un point de $[BC]$ tel que $(AH)\\perp(BC)$, avec $BH=2$, $AH=4$, $HC=8$. Le triangle $ABC$ est-il rectangle en $A$ ?',
      },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'احسب $AB^2$ و $AC^2$ بفيثاغورس في المثلثين القائمين في $H$.', fr: 'Calcule $AB^2$ et $AC^2$ avec Pythagore dans les triangles rectangles en $H$.' }],
      solution: [
        { ar: '$AB^2=4+16=20$ و $AC^2=16+64=80$ و $BC=10$.', fr: '$AB^2=4+16=20$, $AC^2=16+64=80$ et $BC=10$.' },
        { ar: '$AB^2+AC^2=100=BC^2$ إذن $ABC$ قائم في $A$.', fr: '$AB^2+AC^2=100=BC^2$, donc $ABC$ est rectangle en $A$.' },
      ],
    },
    {
      id: '3ac-pyt-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'في مستطيل', fr: 'Dans un rectangle' },
      statement: {
        ar: '$ABCD$ مستطيل مع $AB=6$ و $AD=9$. $J$ نقطة من $[AD]$ بحيث $AJ=1$. احسب $JC$.',
        fr: '$ABCD$ est un rectangle avec $AB=6$ et $AD=9$. $J$ est le point de $[AD]$ tel que $AJ=1$. Calculer $JC$.',
      },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: 'المثلث $JDC$ قائم في $D$ مع $JD=8$.', fr: 'Le triangle $JDC$ est rectangle en $D$, avec $JD=8$.' }],
      solution: [{ ar: '$JC^2=JD^2+DC^2=64+36=100$ إذن $JC=10$.', fr: '$JC^2=JD^2+DC^2=64+36=100$ donc $JC=10$.' }],
    },
    {
      id: '3ac-pyt-04',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مثلث غير قائم', fr: 'Triangle non rectangle' },
      statement: { ar: 'هل المثلث الذي أطوال أضلاعه $5$ و $6$ و $8$ قائم الزاوية؟', fr: 'Le triangle de côtés $5$, $6$ et $8$ est-il rectangle ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 1 },
      hints: [{ ar: 'قارن $8^2$ و $5^2+6^2$.', fr: 'Compare $8^2$ et $5^2+6^2$.' }],
      solution: [{ ar: '$64\\neq25+36=61$ إذن المثلث ليس قائم الزاوية.', fr: '$64\\neq25+36=61$ donc le triangle n’est pas rectangle.' }],
    },
  ],
};
