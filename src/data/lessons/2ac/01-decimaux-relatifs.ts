import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-decimaux-relatifs';

export const decimauxRelatifs: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'relative-decimals',
    title: { ar: 'الأعداد العشرية النسبية', fr: 'Les nombres décimaux relatifs' },
    summary: {
      ar: 'تذكير بمقارنة الأعداد العشرية النسبية وجمعها وضربها، ثم أولويات العمليات في تعبير جبري.',
      fr: 'Rappels sur la comparaison, l’addition et le produit des décimaux relatifs, puis priorités opératoires dans une expression.',
    },
    objectives: [
      { ar: 'ترتيب الأعداد العشرية النسبية.', fr: 'Ranger des nombres décimaux relatifs.' },
      { ar: 'إنجاز العمليات على الأعداد العشرية النسبية.', fr: 'Effectuer les opérations sur les décimaux relatifs.' },
      { ar: 'تطبيق أولويات العمليات في حساب تعبير.', fr: 'Appliquer les priorités opératoires pour calculer une expression.' },
    ],
    durationMinutes: 25,
    reviewed: false,
    source: teacherSource,
    keywords: ['relatif', 'décimal', 'comparaison', 'addition', 'produit', 'priorité', 'parenthèses', 'نسبي', 'عشري', 'مقارنة', 'أولويات', 'أقواس'],
    sections: [
      {
        id: 'rappels',
        title: { ar: 'تذكير', fr: 'Rappels' },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'القاعدة 1: المقارنة', fr: 'Règle 1 : comparaison' },
            content: {
              ar: '• كل عدد موجب أكبر من كل عدد سالب.\n\n• إذا كان عددان سالبين، فأكبرهما هو الأقرب إلى الصفر (أي الذي مسافته إلى الصفر أصغر).',
              fr: '• Un nombre positif est toujours supérieur à un nombre négatif.\n\n• Si deux nombres sont négatifs, le plus grand est le plus proche de zéro (celui qui a la plus petite distance à zéro).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن.', fr: 'Comparer.' },
            steps: [
              { ar: '$25{,}8>-8{,}65$ ؛ $1>-2024$ ؛ $-2024>-2025$.', fr: '$25{,}8>-8{,}65$ ; $1>-2024$ ; $-2024>-2025$.' },
            ],
          },
          {
            kind: 'rule',
            title: { ar: 'القاعدة 2: الجمع', fr: 'Règle 2 : addition' },
            content: {
              ar: '• مجموع عددين لهما نفس الإشارة: نحتفظ بالإشارة ونجمع المسافتين إلى الصفر.\n\n• مجموع عددين مختلفي الإشارة: نأخذ إشارة العدد ذي المسافة الأكبر إلى الصفر ونطرح المسافتين.',
              fr: '• Somme de deux relatifs de même signe : on garde le signe et on additionne les distances à zéro.\n\n• Somme de deux relatifs de signes contraires : on prend le signe de celui qui a la plus grande distance à zéro et on soustrait les distances à zéro.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$-24+11=-(24-11)=-13$.', fr: '$-24+11=-(24-11)=-13$.' },
              { ar: '$-2{,}54-1{,}87=-(2{,}54+1{,}87)=-4{,}41$.', fr: '$-2{,}54-1{,}87=-(2{,}54+1{,}87)=-4{,}41$.' },
            ],
          },
          {
            kind: 'rule',
            title: { ar: 'القاعدة 3: الجداء', fr: 'Règle 3 : produit' },
            content: {
              ar: '• جداء عددين لهما نفس الإشارة عدد موجب، وجداء عددين مختلفي الإشارة عدد سالب.\n\n• المسافة إلى الصفر للجداء هي جداء المسافتين إلى الصفر.\n\nمثال: $8\\times(-3)=-24$ و $-8\\times(-3)=24$.',
              fr: '• Le produit de deux relatifs de même signe est positif ; de signes contraires, il est négatif.\n\n• La distance à zéro du produit est le produit des distances à zéro.\n\nExemple : $8\\times(-3)=-24$ et $-8\\times(-3)=24$.',
            },
          },
        ],
      },
      {
        id: 'priorites',
        title: { ar: 'أولويات العمليات', fr: 'Priorités opératoires' },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'القاعدة 1', fr: 'Règle 1' },
            content: {
              ar: 'في تعبير بدون أقواس، ننجز الضرب والقسمة أولاً ثم الجمع والطرح.',
              fr: 'Dans une expression sans parenthèses, on effectue d’abord les multiplications et les divisions, puis les additions et les soustractions.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $A=5-3\\times4\\div6$.', fr: 'Calculer $A=5-3\\times4\\div6$.' },
            steps: [{ ar: '$A=5-12\\div6=5-2=3$.', fr: '$A=5-12\\div6=5-2=3$.' }],
          },
          {
            kind: 'rule',
            title: { ar: 'القاعدة 2', fr: 'Règle 2' },
            content: {
              ar: 'في تعبير يتضمن فقط الجمع والطرح (أو فقط الضرب والقسمة)، ننجز العمليات بالتتابع من اليسار إلى اليمين.',
              fr: 'Dans une expression avec uniquement des additions et soustractions (ou uniquement des multiplications et divisions), on calcule de gauche à droite.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$6\\times2\\div3=12\\div3=4$.', fr: '$6\\times2\\div3=12\\div3=4$.' },
              { ar: '$-15\\div3\\times2=-5\\times2=-10$.', fr: '$-15\\div3\\times2=-5\\times2=-10$.' },
              { ar: '$4{,}2+5{,}3-6=9{,}5-6=3{,}5$.', fr: '$4{,}2+5{,}3-6=9{,}5-6=3{,}5$.' },
            ],
          },
          {
            kind: 'rule',
            title: { ar: 'القاعدة 3', fr: 'Règle 3' },
            content: {
              ar: 'لحساب تعبير يتضمن أقواساً، ننجز أولاً الحسابات داخل الأقواس.',
              fr: 'Pour calculer une expression avec des parenthèses, on effectue d’abord les calculs entre parenthèses.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $B=-3-8+(-3\\times2-4)$ و $C=(2{,}2+3-5)\\times7-6\\div3$.', fr: 'Calculer $B=-3-8+(-3\\times2-4)$ et $C=(2{,}2+3-5)\\times7-6\\div3$.' },
            steps: [
              { ar: '$B=-11+(-6-4)=-11-10=-21$.', fr: '$B=-11+(-6-4)=-11-10=-21$.' },
              { ar: '$C=0{,}2\\times7-2=1{,}4-2=-0{,}6$.', fr: '$C=0{,}2\\times7-2=1{,}4-2=-0{,}6$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'بين عددين سالبين، الأكبر هو الأقرب إلى الصفر.', fr: 'Entre deux négatifs, le plus grand est le plus proche de zéro.' },
      { ar: 'نفس الإشارة: نجمع المسافتين؛ إشارتان مختلفتان: نطرحهما.', fr: 'Même signe : on additionne les distances ; signes contraires : on les soustrait.' },
      { ar: 'الأولوية: الأقواس، ثم الضرب والقسمة، ثم الجمع والطرح.', fr: 'Priorités : parenthèses, puis × et ÷, puis + et −.' },
    ],
  },
  exercises: [
    {
      id: '2ac-rel-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أصغر عدد', fr: 'Le plus petit nombre' },
      statement: { ar: 'ما هو أصغر عدد من بين: $-2$ ؛ $-2{,}2$ ؛ $-5{,}12$ ؛ $-5{,}2$؟', fr: 'Quel est le plus petit nombre parmi : $-2$ ; $-2{,}2$ ; $-5{,}12$ ; $-5{,}2$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-5{,}2$', fr: '$-5{,}2$' }, { ar: '$-5{,}12$', fr: '$-5{,}12$' }, { ar: '$-2{,}2$', fr: '$-2{,}2$' }, { ar: '$-2$', fr: '$-2$' }],
        correct: 0,
      },
      hints: [{ ar: 'أصغر عدد سالب هو الأبعد عن الصفر.', fr: 'Le plus petit négatif est le plus éloigné de zéro.' }],
      solution: [
        { ar: '$5{,}2>5{,}12$، إذن $-5{,}2<-5{,}12$.', fr: '$5{,}2>5{,}12$, donc $-5{,}2<-5{,}12$.' },
        { ar: 'الترتيب التنازلي: $-2>-2{,}2>-5{,}12>-5{,}2$.', fr: 'Ordre décroissant : $-2>-2{,}2>-5{,}12>-5{,}2$.' },
      ],
    },
    {
      id: '2ac-rel-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'تعبير بدون أقواس', fr: 'Expression sans parenthèses' },
      statement: { ar: 'احسب $A=2-1+3\\times5$.', fr: 'Calculer $A=2-1+3\\times5$.' },
      question: { type: 'numeric', answer: 16 },
      hints: [{ ar: 'ابدأ بالضرب.', fr: 'Commence par la multiplication.' }],
      solution: [{ ar: '$A=2-1+15=16$.', fr: '$A=2-1+15=16$.' }],
    },
    {
      id: '2ac-rel-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تعبير بأقواس', fr: 'Expression avec parenthèses' },
      statement: { ar: 'احسب $B=6+3-(-5\\times2+7)$.', fr: 'Calculer $B=6+3-(-5\\times2+7)$.' },
      question: { type: 'numeric', answer: 12 },
      hints: [{ ar: 'احسب ما بين القوسين أولاً.', fr: 'Calcule d’abord la parenthèse.' }],
      solution: [
        { ar: '$-5\\times2+7=-10+7=-3$.', fr: '$-5\\times2+7=-10+7=-3$.' },
        { ar: '$B=9-(-3)=9+3=12$.', fr: '$B=9-(-3)=9+3=12$.' },
      ],
    },
    {
      id: '2ac-rel-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'جداءات وقسمة', fr: 'Produits et division' },
      statement: { ar: 'احسب $C=-24\\times(-2)\\times(-1)\\div4$.', fr: 'Calculer $C=-24\\times(-2)\\times(-1)\\div4$.' },
      question: { type: 'numeric', answer: -12 },
      hints: [{ ar: 'من اليسار إلى اليمين؛ عدد العوامل السالبة فردي.', fr: 'De gauche à droite ; le nombre de facteurs négatifs est impair.' }],
      solution: [{ ar: '$C=48\\times(-1)\\div4=-48\\div4=-12$.', fr: '$C=48\\times(-1)\\div4=-48\\div4=-12$.' }],
    },
    {
      id: '2ac-rel-05',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'أقواس متداخلة', fr: 'Parenthèses imbriquées' },
      statement: { ar: 'احسب $D=1+[3\\times(6+(8-2\\times2))]$.', fr: 'Calculer $D=1+[3\\times(6+(8-2\\times2))]$.' },
      question: { type: 'numeric', answer: 31 },
      hints: [{ ar: 'ابدأ بالقوس الداخلي.', fr: 'Commence par la parenthèse la plus intérieure.' }],
      solution: [
        { ar: '$8-2\\times2=4$ ثم $6+4=10$.', fr: '$8-2\\times2=4$ puis $6+4=10$.' },
        { ar: '$D=1+3\\times10=31$.', fr: '$D=1+3\\times10=31$.' },
      ],
    },
  ],
};
