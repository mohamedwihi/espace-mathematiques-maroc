import type { LessonModule } from '@/types';

const lessonId = 'tc-transformations';

export const transformations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'transformations',
    title: { ar: 'التحويلات في المستوى', fr: 'Les transformations du plan' },
    summary: {
      ar: 'التماثل المركزي والتماثل المحوري والإزاحة والتحاكي، وخاصياتها.',
      fr: 'Symétrie centrale, symétrie axiale, translation, homothétie et leurs propriétés.',
    },
    objectives: [
      { ar: 'إنشاء صورة شكل بتحويل.', fr: 'Construire l’image d’une figure par une transformation.' },
      { ar: 'استعمال خاصيات التحاكي.', fr: 'Utiliser les propriétés de l’homothétie.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['transformation', 'homothétie', 'translation', 'symétrie', 'تحويل', 'تحاك', 'إزاحة', 'تماثل'],
    sections: [
      {
        id: 'definitions',
        title: { ar: 'التحويلات', fr: 'Les transformations' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '**الإزاحة** ذات المتجهة $\\vec u$: $\\overrightarrow{MM\'}=\\vec u$.', fr: '**Translation** de vecteur $\\vec u$ : $\\overrightarrow{MM\'}=\\vec u$.' },
              { ar: '**التماثل المركزي** الذي مركزه $\\Omega$: $\\Omega$ منتصف $[MM\']$.', fr: '**Symétrie centrale** de centre $\\Omega$ : $\\Omega$ est le milieu de $[MM\']$.' },
              { ar: '**التماثل المحوري** الذي محوره $(\\Delta)$: $(\\Delta)$ واسط $[MM\']$.', fr: '**Symétrie axiale** d’axe $(\\Delta)$ : $(\\Delta)$ est la médiatrice de $[MM\']$.' },
              { ar: '**التحاكي** الذي مركزه $\\Omega$ ونسبته $k\\neq0$: $\\overrightarrow{\\Omega M\'}=k\\overrightarrow{\\Omega M}$.', fr: '**Homothétie** de centre $\\Omega$ et de rapport $k\\neq0$ : $\\overrightarrow{\\Omega M\'}=k\\overrightarrow{\\Omega M}$.' },
            ],
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'الخاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• الإزاحة والتماثلان **تحافظ على المسافات**.\n\n• التحاكي ذو النسبة $k$: $\\overrightarrow{M\'N\'}=k\\overrightarrow{MN}$، إذن $M\'N\'=|k|MN$، والمساحات تضرب في $k^2$.\n\n• كل هذه التحويلات تحافظ على الاستقامية والتوازي وقياسات الزوايا ومنتصف قطعة. صورة مستقيم بإزاحة أو تحاك مستقيم موازٍ له.',
              fr: '• La translation et les symétries **conservent les distances**.\n\n• L’homothétie de rapport $k$ : $\\overrightarrow{M\'N\'}=k\\overrightarrow{MN}$, donc $M\'N\'=|k|MN$, et les aires sont multipliées par $k^2$.\n\n• Toutes ces transformations conservent l’alignement, le parallélisme, les angles et le milieu. L’image d’une droite par une translation ou une homothétie est une droite parallèle.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'التحاكي ذو النسبة $-1$ هو التماثل المركزي الذي له نفس المركز.',
              fr: 'L’homothétie de rapport $-1$ est la symétrie centrale de même centre.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'التحاكي: $M\'N\'=|k|MN$ والمساحات × $k^2$.', fr: 'Homothétie : $M\'N\'=|k|MN$, aires × $k^2$.' },
      { ar: 'الإزاحة والتماثلات تحافظ على المسافات.', fr: 'Translations et symétries conservent les distances.' },
    ],
  },
  exercises: [
    {
      id: 'tc-tra-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'طول بتحاك', fr: 'Longueur par homothétie' },
      statement: { ar: 'تحاك نسبته $-2$. ما طول صورة قطعة طولها $3$؟', fr: 'Une homothétie a pour rapport $-2$. Quelle est la longueur de l’image d’un segment de longueur $3$ ?' },
      question: { type: 'numeric', answer: 6 },
      hints: [{ ar: '$|k|\\times3$.', fr: '$|k|\\times3$.' }],
      solution: [{ ar: '$|-2|\\times3=6$.', fr: '$|-2|\\times3=6$.' }],
    },
    {
      id: 'tc-tra-02',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مساحة بتحاك', fr: 'Aire par homothétie' },
      statement: { ar: 'تحاك نسبته $2$ يحول مثلثاً مساحته $5$. ما مساحة الصورة؟', fr: 'Une homothétie de rapport $2$ transforme un triangle d’aire $5$. Quelle est l’aire de l’image ?' },
      question: { type: 'numeric', answer: 20 },
      hints: [{ ar: 'المساحات تضرب في $k^2$.', fr: 'Les aires sont multipliées par $k^2$.' }],
      solution: [{ ar: '$5\\times4=20$.', fr: '$5\\times4=20$.' }],
    },
    {
      id: 'tc-tra-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'الحفاظ على المسافات', fr: 'Conservation des distances' },
      statement: { ar: 'أي تحويل لا يحافظ على المسافات بصفة عامة؟', fr: 'Quelle transformation ne conserve pas les distances en général ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'التحاكي ذو النسبة $3$', fr: 'L’homothétie de rapport $3$' }, { ar: 'الإزاحة', fr: 'La translation' }, { ar: 'التماثل المحوري', fr: 'La symétrie axiale' }, { ar: 'التماثل المركزي', fr: 'La symétrie centrale' }],
        correct: 0,
      },
      hints: [{ ar: 'التحاكي يضرب المسافات في $|k|$.', fr: 'L’homothétie multiplie les distances par $|k|$.' }],
      solution: [{ ar: 'التحاكي ذو النسبة $3$ يضرب المسافات في $3$.', fr: 'L’homothétie de rapport $3$ multiplie les distances par $3$.' }],
    },
    {
      id: 'tc-tra-04',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'تحاك ونسبة', fr: 'Homothétie et rapport' },
      statement: { ar: '$\\overrightarrow{\\Omega A\'}=-\\dfrac12\\overrightarrow{\\Omega A}$ و $\\Omega A=8$. احسب $\\Omega A\'$.', fr: '$\\overrightarrow{\\Omega A\'}=-\\dfrac12\\overrightarrow{\\Omega A}$ et $\\Omega A=8$. Calculer $\\Omega A\'$.' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: '$\\left|-\\dfrac12\\right|\\times8$.', fr: '$\\left|-\\dfrac12\\right|\\times8$.' }],
      solution: [{ ar: '$\\Omega A\'=\\dfrac12\\times8=4$.', fr: '$\\Omega A\'=\\dfrac12\\times8=4$.' }],
    },
  ],
};
