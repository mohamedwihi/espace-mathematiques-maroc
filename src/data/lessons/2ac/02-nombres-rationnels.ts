import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-nombres-rationnels';

export const nombresRationnels: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'rationals',
    title: { ar: 'مدخل إلى الأعداد الجذرية', fr: 'Introduction aux nombres rationnels' },
    summary: {
      ar: 'تعريف العدد الجذري وإشارته، تساوي عددين جذريين، الاختزال وتوحيد المقامات.',
      fr: 'Définition et signe d’un nombre rationnel, égalité de deux rationnels, simplification et réduction au même dénominateur.',
    },
    objectives: [
      { ar: 'التعرف على عدد جذري وتحديد إشارته.', fr: 'Identifier un nombre rationnel et son signe.' },
      { ar: 'التعرف على الكتابات المختلفة لعدد جذري.', fr: 'Reconnaître les différentes écritures d’un rationnel.' },
      { ar: 'اختزال كتابة كسرية.', fr: 'Simplifier une écriture fractionnaire.' },
      { ar: 'توحيد مقامات أعداد جذرية.', fr: 'Réduire des rationnels au même dénominateur.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['rationnel', 'numérateur', 'dénominateur', 'signe', 'simplifier', 'irréductible', 'même dénominateur', 'جذري', 'بسط', 'مقام', 'اختزال', 'توحيد المقامات'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'العدد الجذري', fr: 'Nombre rationnel' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'العدد الجذري هو خارج عدد صحيح نسبي $a$ على عدد صحيح نسبي غير منعدم $b$، ونرمز له بـ $\\dfrac ab$. يسمى $a$ **البسط** و $b$ **المقام**.',
              fr: 'Un nombre rationnel est le quotient d’un entier relatif $a$ par un entier relatif non nul $b$ ; on le note $\\dfrac ab$. $a$ est le **numérateur** et $b$ le **dénominateur**.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: '• كل عدد عشري نسبي هو عدد جذري: $3=\\dfrac31$ ؛ $0{,}25=\\dfrac{25}{100}$ ؛ $-4{,}76=-\\dfrac{476}{100}$.\n\n• $-\\dfrac ab=\\dfrac{-a}{b}=\\dfrac{a}{-b}$ و $\\dfrac ab=\\dfrac{-a}{-b}$.',
              fr: '• Tout décimal relatif est un rationnel : $3=\\dfrac31$ ; $0{,}25=\\dfrac{25}{100}$ ; $-4{,}76=-\\dfrac{476}{100}$.\n\n• $-\\dfrac ab=\\dfrac{-a}{b}=\\dfrac{a}{-b}$ et $\\dfrac ab=\\dfrac{-a}{-b}$.',
            },
          },
        ],
      },
      {
        id: 'signe',
        title: { ar: 'إشارة عدد جذري', fr: 'Signe d’un nombre rationnel' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '• خارج عددين لهما نفس الإشارة عدد موجب.\n\n• خارج عددين مختلفي الإشارة عدد سالب.',
              fr: '• Le quotient de deux nombres de même signe est positif.\n\n• Le quotient de deux nombres de signes contraires est négatif.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حدد الإشارة.', fr: 'Déterminer le signe.' },
            steps: [
              { ar: '$\\dfrac58$ و $\\dfrac{-9}{-4}$ موجبان.', fr: '$\\dfrac58$ et $\\dfrac{-9}{-4}$ sont positifs.' },
              { ar: '$\\dfrac{-5}{18}$ و $\\dfrac{19}{-4}$ سالبان.', fr: '$\\dfrac{-5}{18}$ et $\\dfrac{19}{-4}$ sont négatifs.' },
            ],
          },
        ],
      },
      {
        id: 'egalite',
        title: { ar: 'تساوي عددين جذريين', fr: 'Égalité de deux rationnels' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '$\\dfrac ab=\\dfrac cd$ يعني $a\\times d=c\\times b$ (الجداءان المتقاطعان متساويان).',
              fr: '$\\dfrac ab=\\dfrac cd$ signifie $a\\times d=c\\times b$ (les produits en croix sont égaux).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'قارن.', fr: 'Comparer.' },
            steps: [
              { ar: '$5\\times(-6)=-30$ و $15\\times(-2)=-30$ إذن $\\dfrac{5}{-2}=\\dfrac{15}{-6}$.', fr: '$5\\times(-6)=-30$ et $15\\times(-2)=-30$ donc $\\dfrac{5}{-2}=\\dfrac{15}{-6}$.' },
              { ar: '$-4\\times3=-12$ و $6\\times2=12$ إذن $-\\dfrac42\\neq\\dfrac63$.', fr: '$-4\\times3=-12$ et $6\\times2=12$ donc $-\\dfrac42\\neq\\dfrac63$.' },
            ],
          },
        ],
      },
      {
        id: 'simplification',
        title: { ar: 'الاختزال وتوحيد المقامات', fr: 'Simplification et même dénominateur' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'إذا كان $k$ عدداً صحيحاً نسبياً غير منعدم: $\\dfrac{a\\times k}{b\\times k}=\\dfrac ab$ و $\\dfrac{a\\div k}{b\\div k}=\\dfrac ab$. الكتابة التي لا يمكن اختزالها أكثر تسمى **الكتابة غير القابلة للاختزال**.',
              fr: 'Si $k$ est un entier relatif non nul : $\\dfrac{a\\times k}{b\\times k}=\\dfrac ab$ et $\\dfrac{a\\div k}{b\\div k}=\\dfrac ab$. La forme qu’on ne peut plus simplifier est la **forme irréductible**.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اختزل.', fr: 'Simplifier.' },
            steps: [
              { ar: '$\\dfrac{26}{52}=\\dfrac{26\\times1}{26\\times2}=\\dfrac12$ ؛ $-\\dfrac{12}{20}=-\\dfrac{3\\times4}{5\\times4}=-\\dfrac35$.', fr: '$\\dfrac{26}{52}=\\dfrac{26\\times1}{26\\times2}=\\dfrac12$ ; $-\\dfrac{12}{20}=-\\dfrac{3\\times4}{5\\times4}=-\\dfrac35$.' },
              { ar: '$\\dfrac{15\\times4\\times22}{11\\times40}=\\dfrac{3\\times5\\times4\\times11\\times2}{11\\times4\\times5\\times2}=3$.', fr: '$\\dfrac{15\\times4\\times22}{11\\times40}=\\dfrac{3\\times5\\times4\\times11\\times2}{11\\times4\\times5\\times2}=3$.' },
            ],
          },
          {
            kind: 'method',
            title: { ar: 'توحيد المقامات', fr: 'Réduire au même dénominateur' },
            content: {
              ar: 'نبحث عن أصغر مضاعف مشترك للمقامات، ثم نضرب بسط ومقام كل عدد في نفس العدد.',
              fr: 'On cherche le plus petit multiple commun des dénominateurs, puis on multiplie numérateur et dénominateur de chaque nombre par un même nombre.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'وحّد المقامات.', fr: 'Réduire au même dénominateur.' },
            steps: [
              { ar: '$\\dfrac{13}{25}$ و $\\dfrac75$: $25=5\\times5$ إذن $\\dfrac75=\\dfrac{35}{25}$.', fr: '$\\dfrac{13}{25}$ et $\\dfrac75$ : $25=5\\times5$ donc $\\dfrac75=\\dfrac{35}{25}$.' },
              { ar: '$\\dfrac{-7}{12}$ و $\\dfrac98$: المقام المشترك $24$، $\\dfrac{-7}{12}=\\dfrac{-14}{24}$ و $\\dfrac98=\\dfrac{27}{24}$.', fr: '$\\dfrac{-7}{12}$ et $\\dfrac98$ : dénominateur commun $24$, $\\dfrac{-7}{12}=\\dfrac{-14}{24}$ et $\\dfrac98=\\dfrac{27}{24}$.' },
              { ar: '$\\dfrac37$ و $\\dfrac12$: المقام المشترك $14$، $\\dfrac37=\\dfrac6{14}$ و $\\dfrac12=\\dfrac7{14}$.', fr: '$\\dfrac37$ et $\\dfrac12$ : dénominateur commun $14$, $\\dfrac37=\\dfrac6{14}$ et $\\dfrac12=\\dfrac7{14}$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'عدد جذري: $\\dfrac ab$ مع $b\\neq0$.', fr: 'Un rationnel : $\\dfrac ab$ avec $b\\neq0$.' },
      { ar: 'نفس الإشارة ← موجب؛ إشارتان مختلفتان ← سالب.', fr: 'Même signe → positif ; signes contraires → négatif.' },
      { ar: '$\\dfrac ab=\\dfrac cd\\iff ad=cb$.', fr: '$\\dfrac ab=\\dfrac cd\\iff ad=cb$.' },
      { ar: 'نختزل بالقسمة على قاسم مشترك للبسط والمقام.', fr: 'On simplifie en divisant numérateur et dénominateur par un diviseur commun.' },
    ],
  },
  exercises: [
    {
      id: '2ac-rat-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'إشارة عدد جذري', fr: 'Signe d’un rationnel' },
      statement: { ar: 'ما إشارة العدد $-\\dfrac{15}{-24}$؟', fr: 'Quel est le signe de $-\\dfrac{15}{-24}$ ?' },
      question: { type: 'mcq', options: [{ ar: 'موجب', fr: 'Positif' }, { ar: 'سالب', fr: 'Négatif' }], correct: 0 },
      hints: [{ ar: '$\\dfrac{15}{-24}$ سالب، ومقابله…', fr: '$\\dfrac{15}{-24}$ est négatif, et son opposé…' }],
      solution: [{ ar: '$\\dfrac{15}{-24}<0$ إذن $-\\dfrac{15}{-24}=\\dfrac{15}{24}>0$.', fr: '$\\dfrac{15}{-24}<0$ donc $-\\dfrac{15}{-24}=\\dfrac{15}{24}>0$.' }],
    },
    {
      id: '2ac-rat-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أتمم المتساوية', fr: 'Compléter l’égalité' },
      statement: { ar: 'أتمم: $\\dfrac{7}{12}=\\dfrac{\\dots}{24}$.', fr: 'Compléter : $\\dfrac{7}{12}=\\dfrac{\\dots}{24}$.' },
      question: { type: 'numeric', answer: 14 },
      hints: [{ ar: '$24=12\\times2$.', fr: '$24=12\\times2$.' }],
      solution: [{ ar: '$\\dfrac7{12}=\\dfrac{7\\times2}{12\\times2}=\\dfrac{14}{24}$.', fr: '$\\dfrac7{12}=\\dfrac{7\\times2}{12\\times2}=\\dfrac{14}{24}$.' }],
    },
    {
      id: '2ac-rat-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'الكتابة غير القابلة للاختزال', fr: 'Forme irréductible' },
      statement: { ar: 'ما هي الكتابة غير القابلة للاختزال لـ $\\dfrac{-228}{204}$؟', fr: 'Quelle est la forme irréductible de $\\dfrac{-228}{204}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-\\dfrac{19}{17}$', fr: '$-\\dfrac{19}{17}$' }, { ar: '$-\\dfrac{57}{51}$', fr: '$-\\dfrac{57}{51}$' }, { ar: '$\\dfrac{19}{17}$', fr: '$\\dfrac{19}{17}$' }, { ar: '$-\\dfrac{38}{34}$', fr: '$-\\dfrac{38}{34}$' }],
        correct: 0,
      },
      hints: [{ ar: '$228=12\\times19$ و $204=12\\times17$.', fr: '$228=12\\times19$ et $204=12\\times17$.' }],
      solution: [{ ar: '$\\dfrac{-228}{204}=-\\dfrac{12\\times19}{12\\times17}=-\\dfrac{19}{17}$.', fr: '$\\dfrac{-228}{204}=-\\dfrac{12\\times19}{12\\times17}=-\\dfrac{19}{17}$.' }],
    },
    {
      id: '2ac-rat-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'هل العددان متساويان؟', fr: 'Ces nombres sont-ils égaux ?' },
      statement: { ar: 'هل $\\dfrac67=\\dfrac{12}{15}$؟', fr: 'A-t-on $\\dfrac67=\\dfrac{12}{15}$ ?' },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 1 },
      hints: [{ ar: 'قارن الجداءين المتقاطعين.', fr: 'Compare les produits en croix.' }],
      solution: [{ ar: '$6\\times15=90$ و $12\\times7=84$، $90\\neq84$ إذن العددان غير متساويين.', fr: '$6\\times15=90$ et $12\\times7=84$ ; $90\\neq84$ donc les nombres ne sont pas égaux.' }],
    },
    {
      id: '2ac-rat-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'اختزال', fr: 'Simplification' },
      statement: { ar: 'اختزل إلى أقصى حد $\\dfrac{720}{540}$.', fr: 'Simplifier le plus possible $\\dfrac{720}{540}$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac43$', fr: '$\\dfrac43$' }, { ar: '$\\dfrac{72}{54}$', fr: '$\\dfrac{72}{54}$' }, { ar: '$\\dfrac{8}{6}$', fr: '$\\dfrac{8}{6}$' }, { ar: '$\\dfrac34$', fr: '$\\dfrac34$' }],
        correct: 0,
      },
      hints: [{ ar: 'القاسم المشترك الأكبر هو $180$.', fr: 'Le plus grand diviseur commun est $180$.' }],
      solution: [{ ar: '$\\dfrac{720}{540}=\\dfrac{4\\times180}{3\\times180}=\\dfrac43$.', fr: '$\\dfrac{720}{540}=\\dfrac{4\\times180}{3\\times180}=\\dfrac43$.' }],
    },
  ],
};
