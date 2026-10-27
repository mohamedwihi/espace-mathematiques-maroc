import type { LessonModule } from '@/types';

const lessonId = '3ac-equation-droite';

export const equationDroite: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'line',
    title: { ar: 'معادلة مستقيم', fr: 'Équation d’une droite' },
    summary: {
      ar: 'المعادلة المختصرة $y=mx+p$، الميل والأرتوب عند الأصل، تحديد معادلة مستقيم، والتوازي والتعامد.',
      fr: 'Équation réduite $y=mx+p$, coefficient directeur et ordonnée à l’origine, déterminer une équation, droites parallèles et perpendiculaires.',
    },
    objectives: [
      { ar: 'تحديد المعادلة المختصرة لمستقيم.', fr: 'Déterminer l’équation réduite d’une droite.' },
      { ar: 'التعرف على مستقيمين متوازيين أو متعامدين.', fr: 'Reconnaître deux droites parallèles ou perpendiculaires.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    keywords: ['équation réduite', 'coefficient directeur', 'pente', 'ordonnée à l’origine', 'parallèles', 'perpendiculaires', 'معادلة مستقيم', 'ميل'],
    sections: [
      {
        id: 'equation',
        title: { ar: 'المعادلة المختصرة', fr: 'Équation réduite' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'كل مستقيم غير مواز لمحور الأراتيب له معادلة من الشكل $y=mx+p$: $m$ **الميل** و $p$ **الأرتوب عند الأصل**. المستقيم الموازي لمحور الأراتيب معادلته $x=a$.\n\nإذا كان $A$ و $B$ من المستقيم مع $x_A\\neq x_B$ فإن $m=\\dfrac{y_B-y_A}{x_B-x_A}$.',
              fr: 'Toute droite non parallèle à l’axe des ordonnées a une équation $y=mx+p$ : $m$ est le **coefficient directeur** et $p$ l’**ordonnée à l’origine**. Une droite parallèle à l’axe des ordonnées a pour équation $x=a$.\n\nSi $A$ et $B$ sont sur la droite avec $x_A\\neq x_B$, alors $m=\\dfrac{y_B-y_A}{x_B-x_A}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد معادلة المستقيم $(AB)$ حيث $A(1;2)$ و $B(3;8)$.', fr: 'Déterminer l’équation de $(AB)$ avec $A(1;2)$ et $B(3;8)$.' },
            steps: [
              { ar: '$m=\\dfrac{8-2}{3-1}=3$، إذن $y=3x+p$.', fr: '$m=\\dfrac{8-2}{3-1}=3$, donc $y=3x+p$.' },
              { ar: '$A$ من المستقيم: $2=3+p$ ومنه $p=-1$. المعادلة: $y=3x-1$.', fr: '$A$ est sur la droite : $2=3+p$, d’où $p=-1$. Équation : $y=3x-1$.' },
            ],
          },
          {
            kind: 'graph',
            functions: [{ fn: (x: number) => 3 * x - 1, label: 'y=3x-1', color: 'brand' }],
            points: [
              { x: 1, y: 2, label: 'A' },
              { x: 3, y: 8, label: 'B' },
            ],
            x: [-2, 5],
            y: [-4, 10],
          },
        ],
      },
      {
        id: 'positions',
        title: { ar: 'التوازي والتعامد', fr: 'Parallélisme et perpendicularité' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'ليكن $(D):y=mx+p$ و $(D\'):y=m\'x+p\'$.\n\n• $(D)\\parallel(D\')\\iff m=m\'$.\n\n• $(D)\\perp(D\')\\iff m\\times m\'=-1$.',
              fr: 'Soient $(D):y=mx+p$ et $(D\'):y=m\'x+p\'$.\n\n• $(D)\\parallel(D\')\\iff m=m\'$.\n\n• $(D)\\perp(D\')\\iff m\\times m\'=-1$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$m=\\dfrac{y_B-y_A}{x_B-x_A}$.', fr: '$m=\\dfrac{y_B-y_A}{x_B-x_A}$.' },
      { ar: 'متوازيان: نفس الميل؛ متعامدان: جداء الميلين $-1$.', fr: 'Parallèles : même coefficient ; perpendiculaires : produit des coefficients $-1$.' },
    ],
  },
  exercises: [
    {
      id: '3ac-dro-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'الميل', fr: 'Coefficient directeur' },
      statement: { ar: 'احسب ميل المستقيم المار من $A(-1;4)$ و $B(2;-2)$.', fr: 'Calculer le coefficient directeur de la droite passant par $A(-1;4)$ et $B(2;-2)$.' },
      question: { type: 'numeric', answer: -2 },
      hints: [{ ar: '$\\dfrac{-2-4}{2-(-1)}$.', fr: '$\\dfrac{-2-4}{2-(-1)}$.' }],
      solution: [{ ar: '$m=\\dfrac{-6}{3}=-2$.', fr: '$m=\\dfrac{-6}{3}=-2$.' }],
    },
    {
      id: '3ac-dro-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'نقطة من مستقيم', fr: 'Point d’une droite' },
      statement: { ar: 'هل النقطة $M(2;5)$ تنتمي إلى المستقيم $y=3x-1$؟', fr: 'Le point $M(2;5)$ appartient-il à la droite $y=3x-1$ ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: 'عوّض $x$ بـ $2$.', fr: 'Remplace $x$ par $2$.' }],
      solution: [{ ar: '$3\\times2-1=5=y_M$ إذن $M$ تنتمي إلى المستقيم.', fr: '$3\\times2-1=5=y_M$, donc $M$ appartient à la droite.' }],
    },
    {
      id: '3ac-dro-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'وضعية مستقيمين', fr: 'Position de deux droites' },
      statement: { ar: 'ما وضعية المستقيمين $y=2x+1$ و $y=-\\dfrac12x+4$؟', fr: 'Quelle est la position des droites $y=2x+1$ et $y=-\\dfrac12x+4$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'متعامدان', fr: 'Perpendiculaires' }, { ar: 'متوازيان', fr: 'Parallèles' }, { ar: 'منطبقان', fr: 'Confondues' }, { ar: 'متقاطعان غير متعامدين', fr: 'Sécantes non perpendiculaires' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب جداء الميلين.', fr: 'Calcule le produit des coefficients.' }],
      solution: [{ ar: '$2\\times\\left(-\\dfrac12\\right)=-1$ إذن المستقيمان متعامدان.', fr: '$2\\times\\left(-\\dfrac12\\right)=-1$ donc les droites sont perpendiculaires.' }],
    },
    {
      id: '3ac-dro-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'مستقيم موازٍ', fr: 'Droite parallèle' },
      statement: { ar: 'المستقيم $(D)$ يوازي $y=-4x+2$ ويمر من $E(1;3)$. ما أرتوبه عند الأصل $p$؟', fr: '$(D)$ est parallèle à $y=-4x+2$ et passe par $E(1;3)$. Quelle est son ordonnée à l’origine $p$ ?' },
      question: { type: 'numeric', answer: 7 },
      hints: [{ ar: '$(D):y=-4x+p$.', fr: '$(D):y=-4x+p$.' }],
      solution: [{ ar: '$3=-4\\times1+p$ إذن $p=7$: $(D):y=-4x+7$.', fr: '$3=-4\\times1+p$ donc $p=7$ : $(D):y=-4x+7$.' }],
    },
  ],
};
