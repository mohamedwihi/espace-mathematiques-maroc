import type { LessonModule } from '@/types';

const lessonId = '1bac-vecteurs-espace';

export const vecteursEspace: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'space-vectors',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'المتجهات في الفضاء', fr: 'Vecteurs de l’espace' },
    summary: {
      ar: 'امتداد الحساب المتجهي إلى الفضاء، استقامية متجهتين، المستوائية، والتعريف المتجهي لمستقيم ولمستوى.',
      fr: 'Extension du calcul vectoriel à l’espace, colinéarité, coplanarité, caractérisation vectorielle d’une droite et d’un plan.',
    },
    objectives: [
      { ar: 'إثبات استقامية متجهتين أو ثلاث نقط.', fr: 'Démontrer la colinéarité de vecteurs ou l’alignement de points.' },
      { ar: 'إثبات مستوائية ثلاث متجهات.', fr: 'Démontrer la coplanarité de trois vecteurs.' },
    ],
    durationMinutes: 40,
    reviewed: false,
    keywords: ['vecteur', 'espace', 'colinéaire', 'coplanaire', 'متجهة', 'فضاء', 'مستقيمية', 'مستوائية'],
    sections: [
      {
        id: 'calcul',
        title: { ar: 'الحساب المتجهي في الفضاء', fr: 'Calcul vectoriel dans l’espace' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'نعرّف في الفضاء المتجهات وجمعها وضربها في عدد حقيقي كما في المستوى، وتبقى علاقة شال $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$ وقاعدة متوازي الأضلاع صالحتين.',
              fr: 'Dans l’espace, on définit les vecteurs, leur somme et leur produit par un réel comme dans le plan ; la relation de Chasles $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$ et la règle du parallélogramme restent valables.',
            },
          },
          {
            kind: 'definition',
            content: {
              ar: '• $\\vec u$ و $\\vec v$ **مستقيميتان** إذا وجد $k$ حيث $\\vec v=k\\vec u$ (أو $\\vec u=\\vec0$).\n\n• $A$ و $B$ و $C$ مستقيمية ⟺ $\\overrightarrow{AB}$ و $\\overrightarrow{AC}$ مستقيميتان.\n\n• $\\vec u$ و $\\vec v$ و $\\vec w$ **مستوائية** إذا وجد $\\alpha$ و $\\beta$ حيث $\\vec w=\\alpha\\vec u+\\beta\\vec v$ (مع $\\vec u$ و $\\vec v$ غير مستقيميتين).',
              fr: '• $\\vec u$ et $\\vec v$ sont **colinéaires** s’il existe $k$ tel que $\\vec v=k\\vec u$ (ou $\\vec u=\\vec0$).\n\n• $A$, $B$, $C$ alignés ⟺ $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ colinéaires.\n\n• $\\vec u$, $\\vec v$, $\\vec w$ sont **coplanaires** s’il existe $\\alpha$, $\\beta$ tels que $\\vec w=\\alpha\\vec u+\\beta\\vec v$ (avec $\\vec u$, $\\vec v$ non colinéaires).',
            },
          },
        ],
      },
      {
        id: 'droites-plans',
        title: { ar: 'التعريف المتجهي لمستقيم ولمستوى', fr: 'Caractérisation vectorielle' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• المستقيم $D(A,\\vec u)$ هو مجموعة النقط $M$ حيث $\\overrightarrow{AM}=t\\vec u$ ($t\\in\\mathbb R$).\n\n• المستوى $P(A,\\vec u,\\vec v)$ هو مجموعة النقط $M$ حيث $\\overrightarrow{AM}=\\alpha\\vec u+\\beta\\vec v$.\n\n• أربع نقط $A,B,C,D$ مستوائية ⟺ $\\overrightarrow{AB}$ و $\\overrightarrow{AC}$ و $\\overrightarrow{AD}$ مستوائية.',
              fr: '• La droite $D(A,\\vec u)$ est l’ensemble des points $M$ tels que $\\overrightarrow{AM}=t\\vec u$ ($t\\in\\mathbb R$).\n\n• Le plan $P(A,\\vec u,\\vec v)$ est l’ensemble des points $M$ tels que $\\overrightarrow{AM}=\\alpha\\vec u+\\beta\\vec v$.\n\n• Quatre points $A,B,C,D$ sont coplanaires ⟺ $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, $\\overrightarrow{AD}$ sont coplanaires.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'في مكعب $ABCDEFGH$، بيّن أن $\\overrightarrow{AB}$ و $\\overrightarrow{AD}$ و $\\overrightarrow{EG}$ مستوائية.', fr: 'Dans le cube $ABCDEFGH$, montrer que $\\overrightarrow{AB}$, $\\overrightarrow{AD}$ et $\\overrightarrow{EG}$ sont coplanaires.' },
            steps: [{ ar: '$\\overrightarrow{EG}=\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$.', fr: '$\\overrightarrow{EG}=\\overrightarrow{AC}=\\overrightarrow{AB}+\\overrightarrow{AD}$.' }],
          },
        ],
      },
    ],
    recap: [
      { ar: 'مستوائية: $\\vec w=\\alpha\\vec u+\\beta\\vec v$.', fr: 'Coplanarité : $\\vec w=\\alpha\\vec u+\\beta\\vec v$.' },
    ],
  },
  exercises: [
    {
      id: '1bac-vec-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'استقامية', fr: 'Colinéarité' },
      statement: { ar: '$\\overrightarrow{AC}=-3\\overrightarrow{AB}$. ماذا نستنتج؟', fr: '$\\overrightarrow{AC}=-3\\overrightarrow{AB}$. Que peut-on conclure ?' },
      question: { type: 'mcq', options: [{ ar: '$A$ و $B$ و $C$ مستقيمية', fr: '$A$, $B$, $C$ sont alignés' }, { ar: '$(AB)\\perp(AC)$', fr: '$(AB)\\perp(AC)$' }, { ar: 'لا شيء', fr: 'Rien' }], correct: 0 },
      hints: [{ ar: 'متجهتان مستقيميتان.', fr: 'Vecteurs colinéaires.' }],
      solution: [{ ar: '$\\overrightarrow{AB}$ و $\\overrightarrow{AC}$ مستقيميتان، إذن النقط مستقيمية.', fr: '$\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires, donc les points sont alignés.' }],
    },
    {
      id: '1bac-vec-02',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'في مكعب', fr: 'Dans un cube' },
      statement: { ar: 'في مكعب $ABCDEFGH$، بأي متجهة يساوي $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AE}$؟', fr: 'Dans le cube $ABCDEFGH$, à quel vecteur est égal $\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AE}$ ?' },
      question: { type: 'mcq', options: [{ ar: '$\\overrightarrow{AG}$', fr: '$\\overrightarrow{AG}$' }, { ar: '$\\overrightarrow{AC}$', fr: '$\\overrightarrow{AC}$' }, { ar: '$\\overrightarrow{AF}$', fr: '$\\overrightarrow{AF}$' }, { ar: '$\\overrightarrow{AH}$', fr: '$\\overrightarrow{AH}$' }], correct: 0 },
      hints: [{ ar: '$\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$ و $\\overrightarrow{AE}=\\overrightarrow{CG}$.', fr: '$\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$ et $\\overrightarrow{AE}=\\overrightarrow{CG}$.' }],
      solution: [{ ar: '$\\overrightarrow{AC}+\\overrightarrow{CG}=\\overrightarrow{AG}$.', fr: '$\\overrightarrow{AC}+\\overrightarrow{CG}=\\overrightarrow{AG}$.' }],
    },
    {
      id: '1bac-vec-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مستوائية', fr: 'Coplanarité' },
      statement: { ar: '$\\vec w=2\\vec u-\\vec v$. هل $\\vec u$ و $\\vec v$ و $\\vec w$ مستوائية؟', fr: '$\\vec w=2\\vec u-\\vec v$. Les vecteurs $\\vec u$, $\\vec v$, $\\vec w$ sont-ils coplanaires ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 0 },
      hints: [{ ar: '$\\vec w$ تأليفة خطية لـ $\\vec u$ و $\\vec v$.', fr: '$\\vec w$ est combinaison linéaire de $\\vec u$ et $\\vec v$.' }],
      solution: [{ ar: 'نعم، لأن $\\vec w=2\\vec u+(-1)\\vec v$.', fr: 'Oui, car $\\vec w=2\\vec u+(-1)\\vec v$.' }],
    },
    {
      id: '1bac-vec-04',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'علاقة شال', fr: 'Chasles' },
      statement: { ar: 'بسّط $\\overrightarrow{AB}+\\overrightarrow{CA}+\\overrightarrow{BC}$.', fr: 'Simplifier $\\overrightarrow{AB}+\\overrightarrow{CA}+\\overrightarrow{BC}$.' },
      question: { type: 'mcq', options: [{ ar: '$\\vec0$', fr: '$\\vec0$' }, { ar: '$\\overrightarrow{AC}$', fr: '$\\overrightarrow{AC}$' }, { ar: '$2\\overrightarrow{AB}$', fr: '$2\\overrightarrow{AB}$' }], correct: 0 },
      hints: [{ ar: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}$.', fr: '$\\overrightarrow{CA}+\\overrightarrow{AB}+\\overrightarrow{BC}$.' }],
      solution: [{ ar: '$\\overrightarrow{CC}=\\vec0$.', fr: '$\\overrightarrow{CC}=\\vec0$.' }],
    },
  ],
};
