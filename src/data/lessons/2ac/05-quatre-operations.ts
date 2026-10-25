import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-quatre-operations';

export const quatreOperations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'rational-ops',
    title: { ar: 'العمليات الأربع على الأعداد الجذرية', fr: 'Les quatre opérations sur les nombres rationnels' },
    summary: {
      ar: 'النشر والتعميل بأعداد جذرية، مقابل مجموع، مجموع وجداء عدة أعداد، وتتابع العمليات بأقواس أو بدونها.',
      fr: 'Développement et factorisation avec des rationnels, opposé d’une somme, sommes et produits de plusieurs nombres, suites d’opérations avec ou sans parenthèses.',
    },
    objectives: [
      { ar: 'النشر والتعميل باستعمال التوزيعية.', fr: 'Développer et factoriser grâce à la distributivité.' },
      { ar: 'حساب تتابع عمليات بدون أقواس.', fr: 'Calculer une suite d’opérations sans parenthèses.' },
      { ar: 'حساب تتابع عمليات بأقواس.', fr: 'Calculer une suite d’opérations avec parenthèses.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['distributivité', 'développer', 'factoriser', 'priorités', 'parenthèses', 'rationnel', 'توزيعية', 'نشر', 'تعميل', 'أولويات', 'أقواس'],
    sections: [
      {
        id: 'distributivite',
        title: { ar: 'النشر والتعميل', fr: 'Développement et factorisation' },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'القاعدة 1', fr: 'Règle 1' },
            content: {
              ar: 'لكل أعداد جذرية $a$ و $b$ و $c$: $c(a+b)=ac+bc$ (نشر) و $ac-bc=c(a-b)$ (تعميل).',
              fr: 'Pour tous rationnels $a$, $b$, $c$ : $c(a+b)=ac+bc$ (développement) et $ac-bc=c(a-b)$ (factorisation).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'انشر ثم احسب.', fr: 'Développer puis calculer.' },
            steps: [
              { ar: '$\\dfrac6{24}\\left(\\dfrac{16}{12}+\\dfrac{24}{36}\\right)=\\dfrac{6\\times16}{24\\times12}+\\dfrac{6\\times24}{24\\times36}=\\dfrac13+\\dfrac16=\\dfrac12$.', fr: '$\\dfrac6{24}\\left(\\dfrac{16}{12}+\\dfrac{24}{36}\\right)=\\dfrac{6\\times16}{24\\times12}+\\dfrac{6\\times24}{24\\times36}=\\dfrac13+\\dfrac16=\\dfrac12$.' },
              { ar: '$\\dfrac{-3}2\\left(-2-\\dfrac23\\right)=\\dfrac{-3}2\\times(-2)+\\dfrac{-3}2\\times\\left(-\\dfrac23\\right)=3+1=4$.', fr: '$\\dfrac{-3}2\\left(-2-\\dfrac23\\right)=\\dfrac{-3}2\\times(-2)+\\dfrac{-3}2\\times\\left(-\\dfrac23\\right)=3+1=4$.' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'عمّل ثم احسب.', fr: 'Factoriser puis calculer.' },
            steps: [
              { ar: '$\\dfrac12\\times\\dfrac52+\\dfrac12\\times\\dfrac53=\\dfrac12\\left(\\dfrac52+\\dfrac53\\right)=\\dfrac12\\times\\dfrac{25}6=\\dfrac{25}{12}$.', fr: '$\\dfrac12\\times\\dfrac52+\\dfrac12\\times\\dfrac53=\\dfrac12\\left(\\dfrac52+\\dfrac53\\right)=\\dfrac12\\times\\dfrac{25}6=\\dfrac{25}{12}$.' },
              { ar: '$\\dfrac13\\times\\dfrac25-\\dfrac13\\times\\dfrac72=\\dfrac13\\left(\\dfrac25-\\dfrac72\\right)=\\dfrac13\\times\\dfrac{-31}{10}=-\\dfrac{31}{30}$.', fr: '$\\dfrac13\\times\\dfrac25-\\dfrac13\\times\\dfrac72=\\dfrac13\\left(\\dfrac25-\\dfrac72\\right)=\\dfrac13\\times\\dfrac{-31}{10}=-\\dfrac{31}{30}$.' },
            ],
          },
          {
            kind: 'rule',
            title: { ar: 'القاعدة 2: مقابل مجموع', fr: 'Règle 2 : opposé d’une somme' },
            content: {
              ar: '$-(a+b)=-a-b$ و $-(a-b)=-a+b$. مثال: $-\\left(-1-\\dfrac57\\right)=1+\\dfrac57$.',
              fr: '$-(a+b)=-a-b$ et $-(a-b)=-a+b$. Exemple : $-\\left(-1-\\dfrac57\\right)=1+\\dfrac57$.',
            },
          },
        ],
      },
      {
        id: 'plusieurs',
        title: { ar: 'مجموع وجداء عدة أعداد', fr: 'Somme et produit de plusieurs nombres' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لا يتغير مجموع (أو جداء) عدة أعداد جذرية إذا غيرنا ترتيب حدوده (أو عوامله).',
              fr: 'Une somme (ou un produit) de plusieurs rationnels ne change pas si on change l’ordre des termes (ou des facteurs).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب بتجميع ذكي.', fr: 'Calculer en regroupant astucieusement.' },
            steps: [
              { ar: '$\\dfrac73+\\dfrac54-\\dfrac{11}3+\\dfrac34=\\dfrac{7-11}3+\\dfrac{5+3}4=-\\dfrac43+2=\\dfrac23$.', fr: '$\\dfrac73+\\dfrac54-\\dfrac{11}3+\\dfrac34=\\dfrac{7-11}3+\\dfrac{5+3}4=-\\dfrac43+2=\\dfrac23$.' },
              { ar: '$\\dfrac{-4}5\\times\\dfrac13\\times\\dfrac{-5}3\\times11=\\dfrac{20}{45}\\times11=\\dfrac{44}9$.', fr: '$\\dfrac{-4}5\\times\\dfrac13\\times\\dfrac{-5}3\\times11=\\dfrac{20}{45}\\times11=\\dfrac{44}9$.' },
            ],
          },
        ],
      },
      {
        id: 'suites',
        title: { ar: 'تتابع العمليات', fr: 'Suites d’opérations' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '• بدون أقواس: ننجز الضرب والقسمة قبل الجمع والطرح.\n\n• بأقواس: ننجز أولاً الحسابات داخل الأقواس.',
              fr: '• Sans parenthèses : on effectue les multiplications et divisions avant les additions et soustractions.\n\n• Avec parenthèses : on effectue d’abord les calculs entre parenthèses.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$-\\dfrac46\\div\\dfrac25+\\dfrac73=-\\dfrac{20}{12}+\\dfrac73=-\\dfrac53+\\dfrac73=\\dfrac23$.', fr: '$-\\dfrac46\\div\\dfrac25+\\dfrac73=-\\dfrac{20}{12}+\\dfrac73=-\\dfrac53+\\dfrac73=\\dfrac23$.' },
              { ar: '$-\\dfrac36\\div\\left(\\dfrac24+\\dfrac1{12}\\right)=-\\dfrac36\\div\\dfrac7{12}=-\\dfrac36\\times\\dfrac{12}7=-\\dfrac67$.', fr: '$-\\dfrac36\\div\\left(\\dfrac24+\\dfrac1{12}\\right)=-\\dfrac36\\div\\dfrac7{12}=-\\dfrac36\\times\\dfrac{12}7=-\\dfrac67$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$c(a+b)=ac+bc$ في الاتجاهين.', fr: '$c(a+b)=ac+bc$ dans les deux sens.' },
      { ar: '$-(a-b)=-a+b$.', fr: '$-(a-b)=-a+b$.' },
      { ar: 'الأولوية: الأقواس ← الضرب والقسمة ← الجمع والطرح.', fr: 'Priorités : parenthèses → × et ÷ → + et −.' },
    ],
  },
  exercises: [
    {
      id: '2ac-ops-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'حذف الأقواس', fr: 'Supprimer les parenthèses' },
      statement: { ar: 'احسب $N=-\\left(\\dfrac34+\\dfrac56\\right)+\\left(\\dfrac34-\\dfrac16\\right)$.', fr: 'Calculer $N=-\\left(\\dfrac34+\\dfrac56\\right)+\\left(\\dfrac34-\\dfrac16\\right)$.' },
      question: { type: 'numeric', answer: -1 },
      hints: [{ ar: 'احذف الأقواس: $\\dfrac34$ و $-\\dfrac34$ يتلاشيان.', fr: 'Supprime les parenthèses : $\\dfrac34$ et $-\\dfrac34$ s’annulent.' }],
      solution: [{ ar: '$N=-\\dfrac34-\\dfrac56+\\dfrac34-\\dfrac16=-\\dfrac66=-1$.', fr: '$N=-\\dfrac34-\\dfrac56+\\dfrac34-\\dfrac16=-\\dfrac66=-1$.' }],
    },
    {
      id: '2ac-ops-02',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'مقابل فرق', fr: 'Opposé d’une différence' },
      statement: { ar: 'احسب $O=-\\left(\\dfrac7{10}-\\dfrac35\\right)-\\left(\\dfrac3{10}-\\dfrac25\\right)$.', fr: 'Calculer $O=-\\left(\\dfrac7{10}-\\dfrac35\\right)-\\left(\\dfrac3{10}-\\dfrac25\\right)$.' },
      question: { type: 'numeric', answer: 0 },
      hints: [{ ar: 'اكتب كل الكسور بالمقام $10$.', fr: 'Écris toutes les fractions avec le dénominateur $10$.' }],
      solution: [{ ar: '$O=-\\dfrac7{10}+\\dfrac6{10}-\\dfrac3{10}+\\dfrac4{10}=0$.', fr: '$O=-\\dfrac7{10}+\\dfrac6{10}-\\dfrac3{10}+\\dfrac4{10}=0$.' }],
    },
    {
      id: '2ac-ops-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تجميع ذكي', fr: 'Regroupement astucieux' },
      statement: { ar: 'احسب $T=\\dfrac89+\\dfrac76-\\dfrac89-\\dfrac16+\\dfrac43$.', fr: 'Calculer $T=\\dfrac89+\\dfrac76-\\dfrac89-\\dfrac16+\\dfrac43$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac73$', fr: '$\\dfrac73$' }, { ar: '$\\dfrac43$', fr: '$\\dfrac43$' }, { ar: '$\\dfrac{25}9$', fr: '$\\dfrac{25}9$' }, { ar: '$1$', fr: '$1$' }],
        correct: 0,
      },
      hints: [{ ar: '$\\dfrac89-\\dfrac89=0$ و $\\dfrac76-\\dfrac16=1$.', fr: '$\\dfrac89-\\dfrac89=0$ et $\\dfrac76-\\dfrac16=1$.' }],
      solution: [{ ar: '$T=0+1+\\dfrac43=\\dfrac73$.', fr: '$T=0+1+\\dfrac43=\\dfrac73$.' }],
    },
    {
      id: '2ac-ops-04',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'جداء أربعة أعداد', fr: 'Produit de quatre nombres' },
      statement: { ar: 'احسب $U=\\dfrac{16}{21}\\times\\dfrac7{18}\\times\\dfrac{-12}4\\times\\dfrac{54}{24}$.', fr: 'Calculer $U=\\dfrac{16}{21}\\times\\dfrac7{18}\\times\\dfrac{-12}4\\times\\dfrac{54}{24}$.' },
      question: { type: 'numeric', answer: -2 },
      hints: [{ ar: 'فكك إلى عوامل أولية واختزل قبل الضرب.', fr: 'Décompose et simplifie avant de multiplier.' }],
      solution: [
        { ar: '$\\dfrac{-12}4=-3$ و $\\dfrac{54}{24}=\\dfrac94$ و $\\dfrac{16}{21}\\times\\dfrac7{18}=\\dfrac{8}{27}$.', fr: '$\\dfrac{-12}4=-3$, $\\dfrac{54}{24}=\\dfrac94$ et $\\dfrac{16}{21}\\times\\dfrac7{18}=\\dfrac{8}{27}$.' },
        { ar: '$U=\\dfrac8{27}\\times(-3)\\times\\dfrac94=-\\dfrac{216}{108}=-2$.', fr: '$U=\\dfrac8{27}\\times(-3)\\times\\dfrac94=-\\dfrac{216}{108}=-2$.' },
      ],
    },
    {
      id: '2ac-ops-05',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'خارج بأقواس', fr: 'Quotient avec parenthèses' },
      statement: { ar: 'احسب $E=\\left(\\dfrac23-\\dfrac16\\right)\\div\\left(\\dfrac35+\\dfrac3{10}\\right)$.', fr: 'Calculer $E=\\left(\\dfrac23-\\dfrac16\\right)\\div\\left(\\dfrac35+\\dfrac3{10}\\right)$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac59$', fr: '$\\dfrac59$' }, { ar: '$\\dfrac95$', fr: '$\\dfrac95$' }, { ar: '$\\dfrac9{20}$', fr: '$\\dfrac9{20}$' }, { ar: '$\\dfrac12$', fr: '$\\dfrac12$' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب كل قوس على حدة.', fr: 'Calcule chaque parenthèse séparément.' }],
      solution: [
        { ar: '$\\dfrac23-\\dfrac16=\\dfrac12$ و $\\dfrac35+\\dfrac3{10}=\\dfrac9{10}$.', fr: '$\\dfrac23-\\dfrac16=\\dfrac12$ et $\\dfrac35+\\dfrac3{10}=\\dfrac9{10}$.' },
        { ar: '$E=\\dfrac12\\times\\dfrac{10}9=\\dfrac59$.', fr: '$E=\\dfrac12\\times\\dfrac{10}9=\\dfrac59$.' },
      ],
    },
  ],
};
