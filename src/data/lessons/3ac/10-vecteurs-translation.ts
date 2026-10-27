import type { LessonModule } from '@/types';

const lessonId = '3ac-vecteurs-translation';

export const vecteursTranslation: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'vectors',
    title: { ar: 'المتجهات والإزاحة', fr: 'Vecteurs et translation' },
    summary: {
      ar: 'تساوي متجهتين، مجموع متجهتين وعلاقة شال، ضرب متجهة في عدد، والإزاحة وخاصياتها.',
      fr: 'Égalité de vecteurs, somme et relation de Chasles, produit d’un vecteur par un réel, translation et ses propriétés.',
    },
    objectives: [
      { ar: 'استعمال تساوي متجهتين ومتوازي الأضلاع.', fr: 'Utiliser l’égalité de vecteurs et le parallélogramme.' },
      { ar: 'استعمال علاقة شال وضرب متجهة في عدد.', fr: 'Utiliser la relation de Chasles et le produit par un réel.' },
      { ar: 'إنشاء صورة شكل بإزاحة.', fr: 'Construire l’image d’une figure par une translation.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    keywords: ['vecteur', 'translation', 'Chasles', 'parallélogramme', 'colinéaires', 'متجهة', 'إزاحة', 'علاقة شال'],
    sections: [
      {
        id: 'vecteurs',
        title: { ar: 'المتجهات', fr: 'Vecteurs' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• $\\overrightarrow{AB}=\\overrightarrow{DC}$ يعني أن $ABCD$ متوازي الأضلاع.\n\n• علاقة شال: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.\n\n• $I$ منتصف $[AB]$ يعني $\\overrightarrow{AI}=\\overrightarrow{IB}$، أي $\\overrightarrow{AB}=2\\overrightarrow{AI}$.',
              fr: '• $\\overrightarrow{AB}=\\overrightarrow{DC}$ signifie que $ABCD$ est un parallélogramme.\n\n• Relation de Chasles : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.\n\n• $I$ milieu de $[AB]$ signifie $\\overrightarrow{AI}=\\overrightarrow{IB}$, soit $\\overrightarrow{AB}=2\\overrightarrow{AI}$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'ضرب متجهة في عدد', fr: 'Produit par un réel' },
            content: {
              ar: 'لكل متجهة $\\vec u$ غير منعدمة وعدد $k\\neq0$، المتجهة $k\\vec u$ لها نفس اتجاه $\\vec u$، ونفس منحاها إذا كان $k>0$ وعكسه إذا كان $k<0$، ومنظمها $|k|$ مرة منظم $\\vec u$.',
              fr: 'Pour un vecteur $\\vec u$ non nul et un réel $k\\neq0$, le vecteur $k\\vec u$ a la même direction que $\\vec u$, le même sens si $k>0$, le sens contraire si $k<0$, et une norme égale à $|k|$ fois celle de $\\vec u$.',
            },
          },
        ],
      },
      {
        id: 'translation',
        title: { ar: 'الإزاحة', fr: 'Translation' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '$M\'$ صورة $M$ بالإزاحة ذات المتجهة $\\vec u$ يعني $\\overrightarrow{MM\'}=\\vec u$.',
              fr: '$M\'$ est l’image de $M$ par la translation de vecteur $\\vec u$ signifie $\\overrightarrow{MM\'}=\\vec u$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'الإزاحة تحافظ على المسافات والاستقامية والتوازي وقياسات الزوايا. صورة مستقيم مستقيم موازٍ له، وصورة دائرة دائرة لها نفس الشعاع.',
              fr: 'La translation conserve les distances, l’alignement, le parallélisme et les angles. L’image d’une droite est une droite parallèle ; l’image d’un cercle est un cercle de même rayon.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'شال: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.', fr: 'Chasles : $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.' },
      { ar: 'الإزاحة تحافظ على الأطوال والزوايا.', fr: 'La translation conserve longueurs et angles.' },
    ],
  },
  exercises: [
    {
      id: '3ac-vec-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'علاقة شال', fr: 'Relation de Chasles' },
      statement: { ar: 'بسّط $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA}$.', fr: 'Simplifier $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CA}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\vec0$', fr: '$\\vec0$' }, { ar: '$\\overrightarrow{AC}$', fr: '$\\overrightarrow{AC}$' }, { ar: '$2\\overrightarrow{AC}$', fr: '$2\\overrightarrow{AC}$' }, { ar: '$\\overrightarrow{CA}$', fr: '$\\overrightarrow{CA}$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.', fr: '$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.' }],
      solution: [{ ar: '$\\overrightarrow{AC}+\\overrightarrow{CA}=\\overrightarrow{AA}=\\vec0$.', fr: '$\\overrightarrow{AC}+\\overrightarrow{CA}=\\overrightarrow{AA}=\\vec0$.' }],
    },
    {
      id: '3ac-vec-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'صورة دائرة', fr: 'Image d’un cercle' },
      statement: { ar: 'دائرة شعاعها $4\\,\\text{cm}$. ما شعاع صورتها بإزاحة؟', fr: 'Un cercle a pour rayon $4\\,\\text{cm}$. Quel est le rayon de son image par une translation ?' },
      question: { type: 'numeric', answer: 4, unit: 'cm' },
      hints: [{ ar: 'الإزاحة تحافظ على المسافات.', fr: 'La translation conserve les distances.' }],
      solution: [{ ar: 'صورة دائرة دائرة لها نفس الشعاع: $4\\,\\text{cm}$.', fr: 'L’image d’un cercle est un cercle de même rayon : $4\\,\\text{cm}$.' }],
    },
    {
      id: '3ac-vec-03',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'متوازي الأضلاع', fr: 'Parallélogramme' },
      statement: { ar: '$ABCD$ متوازي الأضلاع. بسّط $\\overrightarrow{AB}+\\overrightarrow{AD}$.', fr: '$ABCD$ est un parallélogramme. Simplifier $\\overrightarrow{AB}+\\overrightarrow{AD}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\overrightarrow{AC}$', fr: '$\\overrightarrow{AC}$' }, { ar: '$\\overrightarrow{BD}$', fr: '$\\overrightarrow{BD}$' }, { ar: '$\\overrightarrow{DB}$', fr: '$\\overrightarrow{DB}$' }, { ar: '$\\vec0$', fr: '$\\vec0$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\overrightarrow{AD}=\\overrightarrow{BC}$.', fr: '$\\overrightarrow{AD}=\\overrightarrow{BC}$.' }],
      solution: [{ ar: '$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.', fr: '$\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$.' }],
    },
    {
      id: '3ac-vec-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'منتصف قطعة', fr: 'Milieu d’un segment' },
      statement: { ar: '$I$ منتصف $[AB]$ و $AB=10$. ما منظم المتجهة $\\overrightarrow{AI}$؟', fr: '$I$ est le milieu de $[AB]$ et $AB=10$. Quelle est la norme du vecteur $\\overrightarrow{AI}$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\overrightarrow{AB}=2\\overrightarrow{AI}$.', fr: '$\\overrightarrow{AB}=2\\overrightarrow{AI}$.' }],
      solution: [{ ar: '$AI=\\dfrac{AB}2=5$.', fr: '$AI=\\dfrac{AB}2=5$.' }],
    },
  ],
};
