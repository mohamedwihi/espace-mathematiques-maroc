import type { LessonModule } from '@/types';

const lessonId = 'tc-geometrie-espace';

export const geometrieEspace: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: 'tc',
    unitId: 'space',
    title: { ar: 'الهندسة الفضائية', fr: 'Géométrie dans l’espace' },
    summary: {
      ar: 'تحديد مستوى، الأوضاع النسبية لمستقيمات ومستويات، التوازي والتعامد في الفضاء.',
      fr: 'Détermination d’un plan, positions relatives de droites et de plans, parallélisme et orthogonalité dans l’espace.',
    },
    objectives: [
      { ar: 'معرفة طرق تحديد مستوى.', fr: 'Connaître les façons de déterminer un plan.' },
      { ar: 'دراسة الأوضاع النسبية لمستقيمين ولمستويين.', fr: 'Étudier les positions relatives de droites et de plans.' },
      { ar: 'استعمال مبرهنات التوازي والتعامد.', fr: 'Utiliser les théorèmes de parallélisme et d’orthogonalité.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['espace', 'plan', 'droite', 'parallèle', 'orthogonal', 'coplanaire', 'فضاء', 'مستوى', 'توازي', 'تعامد'],
    sections: [
      {
        id: 'plans',
        title: { ar: 'تحديد مستوى', fr: 'Détermination d’un plan' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'يحدَّد مستوى بأحد الشروط:\n\n• ثلاث نقط غير مستقيمية.\n\n• مستقيم ونقطة لا تنتمي إليه.\n\n• مستقيمان متقاطعان.\n\n• مستقيمان متوازيان قطعاً.',
              fr: 'Un plan est déterminé par :\n\n• trois points non alignés ;\n\n• une droite et un point extérieur à cette droite ;\n\n• deux droites sécantes ;\n\n• deux droites strictement parallèles.',
            },
          },
        ],
      },
      {
        id: 'positions',
        title: { ar: 'الأوضاع النسبية', fr: 'Positions relatives' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '**مستقيمان**: مستوائيان (متقاطعان أو متوازيان) أو غير مستوائيين.', fr: '**Deux droites** : coplanaires (sécantes ou parallèles) ou non coplanaires.' },
              { ar: '**مستقيم ومستوى**: المستقيم ضمن المستوى، أو يقطعه في نقطة، أو يوازيه قطعاً.', fr: '**Une droite et un plan** : la droite est incluse dans le plan, le coupe en un point, ou lui est strictement parallèle.' },
              { ar: '**مستويان**: متوازيان (قطعاً أو منطبقان) أو متقاطعان وفق مستقيم.', fr: '**Deux plans** : parallèles (strictement ou confondus) ou sécants selon une droite.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'التوازي والتعامد', fr: 'Parallélisme et orthogonalité' },
            content: {
              ar: '• إذا كان مستقيم موازياً لمستقيم من مستوى، فهو موازٍ لهذا المستوى.\n\n• إذا كان مستوى يتضمن مستقيمين متقاطعين موازيين لمستوى آخر، فالمستويان متوازيان.\n\n• يكون مستقيم عمودياً على مستوى إذا كان عمودياً على مستقيمين متقاطعين منه.',
              fr: '• Si une droite est parallèle à une droite d’un plan, elle est parallèle à ce plan.\n\n• Si un plan contient deux droites sécantes parallèles à un autre plan, les deux plans sont parallèles.\n\n• Une droite est orthogonale à un plan si elle est orthogonale à deux droites sécantes de ce plan.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'في مكعب $ABCDEFGH$ (القاعدة $ABCD$ والأحرف $[AE]$، $[BF]$، $[CG]$، $[DH]$).', fr: 'Dans un cube $ABCDEFGH$ (base $ABCD$, arêtes $[AE]$, $[BF]$, $[CG]$, $[DH]$).' },
            steps: [
              { ar: '$(AE)$ عمودي على $(AB)$ و $(AD)$ المتقاطعين، إذن $(AE)\\perp(ABC)$.', fr: '$(AE)$ est orthogonale aux droites sécantes $(AB)$ et $(AD)$, donc $(AE)\\perp(ABC)$.' },
              { ar: '$(AE)$ و $(BC)$ غير مستوائيين، و $(AE)$ عمودي على $(BC)$.', fr: '$(AE)$ et $(BC)$ sont non coplanaires, et $(AE)$ est orthogonale à $(BC)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'ثلاث نقط غير مستقيمية تحدد مستوى وحيداً.', fr: 'Trois points non alignés déterminent un unique plan.' },
      { ar: 'مستويان متقاطعان يتقاطعان وفق مستقيم.', fr: 'Deux plans sécants se coupent selon une droite.' },
    ],
  },
  exercises: [
    {
      id: 'tc-esp-01',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'تقاطع مستويين', fr: 'Intersection de deux plans' },
      statement: { ar: 'مستويان متمايزان وغير متوازيين. ما تقاطعهما؟', fr: 'Deux plans distincts et non parallèles. Quelle est leur intersection ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'مستقيم', fr: 'Une droite' }, { ar: 'نقطة', fr: 'Un point' }, { ar: 'فارغ', fr: 'L’ensemble vide' }, { ar: 'مستوى', fr: 'Un plan' }],
        correct: 0,
      },
      hints: [{ ar: 'مستويان متقاطعان.', fr: 'Deux plans sécants.' }],
      solution: [{ ar: 'يتقاطعان وفق مستقيم.', fr: 'Ils se coupent selon une droite.' }],
    },
    {
      id: 'tc-esp-02',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'في مكعب', fr: 'Dans un cube' },
      statement: { ar: 'في مكعب $ABCDEFGH$، ما وضعية المستقيمين $(AE)$ و $(BC)$؟', fr: 'Dans le cube $ABCDEFGH$, quelle est la position des droites $(AE)$ et $(BC)$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'غير مستوائيين', fr: 'Non coplanaires' }, { ar: 'متوازيان', fr: 'Parallèles' }, { ar: 'متقاطعان', fr: 'Sécantes' }, { ar: 'منطبقان', fr: 'Confondues' }],
        correct: 0,
      },
      hints: [{ ar: 'لا يوجد مستوى يتضمنهما معاً.', fr: 'Aucun plan ne les contient toutes les deux.' }],
      solution: [{ ar: '$(AE)$ و $(BC)$ لا يتقاطعان وليسا متوازيين: غير مستوائيين.', fr: '$(AE)$ et $(BC)$ ne sont ni sécantes ni parallèles : non coplanaires.' }],
    },
    {
      id: 'tc-esp-03',
      lessonId,
      levelId: 'tc',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'عدد المستويات', fr: 'Nombre de plans' },
      statement: { ar: 'أربع نقط غير مستوائية. كم مستوى تحدده ثلاث منها؟', fr: 'Quatre points non coplanaires. Combien de plans déterminent-ils trois à trois ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: 'عدد طرق اختيار $3$ نقط من $4$.', fr: 'Nombre de façons de choisir $3$ points parmi $4$.' }],
      solution: [{ ar: '$4$ مستويات (وجوه رباعي الأوجه).', fr: '$4$ plans (les faces du tétraèdre).' }],
    },
    {
      id: 'tc-esp-04',
      lessonId,
      levelId: 'tc',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'مستقيم يوازي مستوى', fr: 'Droite parallèle à un plan' },
      statement: { ar: 'المستقيم $(D)$ يوازي مستقيماً $(\\Delta)$ ضمن المستوى $(P)$. ماذا نستنتج؟', fr: 'La droite $(D)$ est parallèle à une droite $(\\Delta)$ du plan $(P)$. Que peut-on conclure ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(D)$ يوازي $(P)$', fr: '$(D)$ est parallèle à $(P)$' }, { ar: '$(D)$ عمودي على $(P)$', fr: '$(D)$ est orthogonale à $(P)$' }, { ar: '$(D)$ يقطع $(P)$', fr: '$(D)$ coupe $(P)$' }],
        correct: 0,
      },
      hints: [{ ar: 'مبرهنة التوازي.', fr: 'Théorème de parallélisme.' }],
      solution: [{ ar: '$(D)$ يوازي $(P)$ (قد يكون ضمنه).', fr: '$(D)$ est parallèle à $(P)$ (éventuellement incluse dedans).' }],
    },
  ],
};
