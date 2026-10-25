import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-rationnels-addition';

export const rationnelsAddition: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'rational-add',
    title: { ar: 'جمع وطرح الأعداد الجذرية', fr: 'Addition et soustraction des nombres rationnels' },
    summary: {
      ar: 'جمع عددين جذريين لهما نفس المقام أو مقامان مختلفان، الطرح، المقابل وخاصيات الجمع.',
      fr: 'Somme de deux rationnels de même dénominateur ou non, différence, opposé et propriétés de l’addition.',
    },
    objectives: [
      { ar: 'حساب مجموع عددين جذريين.', fr: 'Calculer la somme de deux rationnels.' },
      { ar: 'حساب فرق عددين جذريين.', fr: 'Calculer la différence de deux rationnels.' },
      { ar: 'حساب مجموع عدة أعداد جذرية.', fr: 'Calculer la somme de plusieurs rationnels.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['somme', 'différence', 'addition', 'soustraction', 'opposé', 'rationnel', 'مجموع', 'فرق', 'جمع', 'طرح', 'مقابل'],
    sections: [
      {
        id: 'addition',
        title: { ar: 'جمع عددين جذريين', fr: 'Addition de deux rationnels' },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'نفس المقام', fr: 'Même dénominateur' },
            content: {
              ar: 'نجمع البسطين ونحتفظ بالمقام المشترك: $\\dfrac ab+\\dfrac cb=\\dfrac{a+c}{b}$.',
              fr: 'On additionne les numérateurs et on garde le dénominateur commun : $\\dfrac ab+\\dfrac cb=\\dfrac{a+c}{b}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$\\dfrac{-5}6+\\dfrac36=\\dfrac{-2}6=-\\dfrac13$.', fr: '$\\dfrac{-5}6+\\dfrac36=\\dfrac{-2}6=-\\dfrac13$.' },
              { ar: '$\\dfrac78+\\dfrac{-13}8=\\dfrac{-6}8=-\\dfrac34$.', fr: '$\\dfrac78+\\dfrac{-13}8=\\dfrac{-6}8=-\\dfrac34$.' },
            ],
          },
          {
            kind: 'rule',
            title: { ar: 'مقامان مختلفان', fr: 'Dénominateurs différents' },
            content: {
              ar: 'نوحّد المقامات أولاً ثم نطبق القاعدة السابقة: $\\dfrac ab+\\dfrac cd=\\dfrac{ad}{bd}+\\dfrac{bc}{bd}=\\dfrac{ad+bc}{bd}$.',
              fr: 'On réduit d’abord au même dénominateur puis on applique la règle précédente : $\\dfrac ab+\\dfrac cd=\\dfrac{ad}{bd}+\\dfrac{bc}{bd}=\\dfrac{ad+bc}{bd}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$\\dfrac{-5}3+\\dfrac36=\\dfrac{-10}6+\\dfrac36=-\\dfrac76$.', fr: '$\\dfrac{-5}3+\\dfrac36=\\dfrac{-10}6+\\dfrac36=-\\dfrac76$.' },
              { ar: '$\\dfrac73+\\dfrac18=\\dfrac{56}{24}+\\dfrac3{24}=\\dfrac{59}{24}$.', fr: '$\\dfrac73+\\dfrac18=\\dfrac{56}{24}+\\dfrac3{24}=\\dfrac{59}{24}$.' },
              { ar: '$-\\dfrac56+\\dfrac49=\\dfrac{-15}{18}+\\dfrac8{18}=-\\dfrac7{18}$.', fr: '$-\\dfrac56+\\dfrac49=\\dfrac{-15}{18}+\\dfrac8{18}=-\\dfrac7{18}$.' },
            ],
          },
        ],
      },
      {
        id: 'soustraction',
        title: { ar: 'طرح عددين جذريين', fr: 'Soustraction de deux rationnels' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'طرح عدد هو إضافة مقابله: $\\dfrac ab-\\dfrac cd=\\dfrac ab+\\left(-\\dfrac cd\\right)$.',
              fr: 'Soustraire un nombre, c’est ajouter son opposé : $\\dfrac ab-\\dfrac cd=\\dfrac ab+\\left(-\\dfrac cd\\right)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب.', fr: 'Calculer.' },
            steps: [
              { ar: '$\\dfrac18-\\dfrac1{10}=\\dfrac{10}{80}-\\dfrac8{80}=\\dfrac2{80}=\\dfrac1{40}$.', fr: '$\\dfrac18-\\dfrac1{10}=\\dfrac{10}{80}-\\dfrac8{80}=\\dfrac2{80}=\\dfrac1{40}$.' },
              { ar: '$\\dfrac{-7}2-\\dfrac{13}5=-\\dfrac{35}{10}-\\dfrac{26}{10}=-\\dfrac{61}{10}$.', fr: '$\\dfrac{-7}2-\\dfrac{13}5=-\\dfrac{35}{10}-\\dfrac{26}{10}=-\\dfrac{61}{10}$.' },
              { ar: '$\\dfrac58-\\dfrac4{10}=\\dfrac{25}{40}-\\dfrac{16}{40}=\\dfrac9{40}$.', fr: '$\\dfrac58-\\dfrac4{10}=\\dfrac{25}{40}-\\dfrac{16}{40}=\\dfrac9{40}$.' },
            ],
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'خاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'المقابل', fr: 'Opposé' },
            content: {
              ar: '$\\dfrac xy+\\left(-\\dfrac xy\\right)=0$: نقول إن $\\dfrac xy$ و $-\\dfrac xy$ **متقابلان**. مثال: مقابل $-\\dfrac5{17}$ هو $\\dfrac5{17}$.',
              fr: '$\\dfrac xy+\\left(-\\dfrac xy\\right)=0$ : $\\dfrac xy$ et $-\\dfrac xy$ sont **opposés**. Exemple : l’opposé de $-\\dfrac5{17}$ est $\\dfrac5{17}$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'التبادلية والتجميعية', fr: 'Commutativité et associativité' },
            content: {
              ar: '$\\dfrac xy+\\dfrac ab=\\dfrac ab+\\dfrac xy$ و $\\left(\\dfrac ab+\\dfrac cd\\right)+\\dfrac xy=\\dfrac ab+\\left(\\dfrac cd+\\dfrac xy\\right)$.',
              fr: '$\\dfrac xy+\\dfrac ab=\\dfrac ab+\\dfrac xy$ et $\\left(\\dfrac ab+\\dfrac cd\\right)+\\dfrac xy=\\dfrac ab+\\left(\\dfrac cd+\\dfrac xy\\right)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\left(\\dfrac{-3}5+\\dfrac7{10}\\right)+\\dfrac{-5}2$ بطريقتين.', fr: 'Calculer $\\left(\\dfrac{-3}5+\\dfrac7{10}\\right)+\\dfrac{-5}2$ de deux façons.' },
            steps: [
              { ar: '$\\dfrac{-6+7}{10}+\\dfrac{-25}{10}=\\dfrac1{10}-\\dfrac{25}{10}=-\\dfrac{24}{10}=-\\dfrac{12}5$.', fr: '$\\dfrac{-6+7}{10}+\\dfrac{-25}{10}=\\dfrac1{10}-\\dfrac{25}{10}=-\\dfrac{24}{10}=-\\dfrac{12}5$.' },
              { ar: '$\\left(\\dfrac{-3}5+\\dfrac{-5}2\\right)+\\dfrac7{10}=-\\dfrac{31}{10}+\\dfrac7{10}=-\\dfrac{12}5$: نفس النتيجة.', fr: '$\\left(\\dfrac{-3}5+\\dfrac{-5}2\\right)+\\dfrac7{10}=-\\dfrac{31}{10}+\\dfrac7{10}=-\\dfrac{12}5$ : même résultat.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نوحّد المقامات ثم نجمع (أو نطرح) البسوط.', fr: 'On réduit au même dénominateur puis on additionne (ou soustrait) les numérateurs.' },
      { ar: 'طرح عدد = إضافة مقابله.', fr: 'Soustraire = ajouter l’opposé.' },
      { ar: 'يمكن تغيير ترتيب الحدود في مجموع.', fr: 'On peut changer l’ordre des termes d’une somme.' },
    ],
  },
  exercises: [
    {
      id: '2ac-radd-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'مجموع بسيط', fr: 'Somme simple' },
      statement: { ar: 'احسب $\\dfrac12+\\dfrac34$ (أعط الكتابة العشرية).', fr: 'Calculer $\\dfrac12+\\dfrac34$ (donner l’écriture décimale).' },
      question: { type: 'numeric', answer: 1.25, tolerance: 1e-9 },
      hints: [{ ar: '$\\dfrac12=\\dfrac24$.', fr: '$\\dfrac12=\\dfrac24$.' }],
      solution: [{ ar: '$\\dfrac24+\\dfrac34=\\dfrac54=1{,}25$.', fr: '$\\dfrac24+\\dfrac34=\\dfrac54=1{,}25$.' }],
    },
    {
      id: '2ac-radd-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'مقامان مختلفان', fr: 'Dénominateurs différents' },
      statement: { ar: 'احسب $\\dfrac56+\\dfrac78$.', fr: 'Calculer $\\dfrac56+\\dfrac78$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac{41}{24}$', fr: '$\\dfrac{41}{24}$' }, { ar: '$\\dfrac{12}{14}$', fr: '$\\dfrac{12}{14}$' }, { ar: '$\\dfrac{35}{48}$', fr: '$\\dfrac{35}{48}$' }, { ar: '$\\dfrac{41}{48}$', fr: '$\\dfrac{41}{48}$' }],
        correct: 0,
      },
      hints: [{ ar: 'المقام المشترك $24$.', fr: 'Dénominateur commun : $24$.' }],
      solution: [{ ar: '$\\dfrac{20}{24}+\\dfrac{21}{24}=\\dfrac{41}{24}$.', fr: '$\\dfrac{20}{24}+\\dfrac{21}{24}=\\dfrac{41}{24}$.' }],
    },
    {
      id: '2ac-radd-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'فرق عددين', fr: 'Différence' },
      statement: { ar: 'احسب $-\\dfrac23-\\dfrac45$.', fr: 'Calculer $-\\dfrac23-\\dfrac45$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-\\dfrac{22}{15}$', fr: '$-\\dfrac{22}{15}$' }, { ar: '$-\\dfrac{2}{15}$', fr: '$-\\dfrac{2}{15}$' }, { ar: '$-\\dfrac{6}{8}$', fr: '$-\\dfrac{6}{8}$' }, { ar: '$\\dfrac{2}{15}$', fr: '$\\dfrac{2}{15}$' }],
        correct: 0,
      },
      hints: [{ ar: 'المقام المشترك $15$.', fr: 'Dénominateur commun : $15$.' }],
      solution: [{ ar: '$-\\dfrac{10}{15}-\\dfrac{12}{15}=-\\dfrac{22}{15}$.', fr: '$-\\dfrac{10}{15}-\\dfrac{12}{15}=-\\dfrac{22}{15}$.' }],
    },
    {
      id: '2ac-radd-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'ثلاثة حدود', fr: 'Trois termes' },
      statement: { ar: 'احسب $A=\\dfrac13+\\dfrac46+\\dfrac{-7}9$.', fr: 'Calculer $A=\\dfrac13+\\dfrac46+\\dfrac{-7}9$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac29$', fr: '$\\dfrac29$' }, { ar: '$-\\dfrac29$', fr: '$-\\dfrac29$' }, { ar: '$\\dfrac{-2}{18}$', fr: '$\\dfrac{-2}{18}$' }, { ar: '$\\dfrac{16}9$', fr: '$\\dfrac{16}9$' }],
        correct: 0,
      },
      hints: [{ ar: 'المقام المشترك $9$؛ $\\dfrac46=\\dfrac23$.', fr: 'Dénominateur commun $9$ ; $\\dfrac46=\\dfrac23$.' }],
      solution: [{ ar: '$\\dfrac39+\\dfrac69-\\dfrac79=\\dfrac29$.', fr: '$\\dfrac39+\\dfrac69-\\dfrac79=\\dfrac29$.' }],
    },
    {
      id: '2ac-radd-05',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'مجموع عدة أعداد', fr: 'Somme de plusieurs nombres' },
      statement: { ar: 'احسب $B=\\dfrac25+\\dfrac{-8}{10}+\\dfrac3{15}$ (أعط الكتابة العشرية).', fr: 'Calculer $B=\\dfrac25+\\dfrac{-8}{10}+\\dfrac3{15}$ (écriture décimale).' },
      question: { type: 'numeric', answer: -0.2, tolerance: 1e-9 },
      hints: [{ ar: 'اختزل أولاً: $\\dfrac{-8}{10}=-\\dfrac45$ و $\\dfrac3{15}=\\dfrac15$.', fr: 'Simplifie d’abord : $\\dfrac{-8}{10}=-\\dfrac45$ et $\\dfrac3{15}=\\dfrac15$.' }],
      solution: [{ ar: '$B=\\dfrac25-\\dfrac45+\\dfrac15=-\\dfrac15=-0{,}2$.', fr: '$B=\\dfrac25-\\dfrac45+\\dfrac15=-\\dfrac15=-0{,}2$.' }],
    },
  ],
};
