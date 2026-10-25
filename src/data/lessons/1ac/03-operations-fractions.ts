import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-operations-fractions';

export const operationsFractions: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'fraction-ops',
    title: { ar: 'العمليات على الأعداد الكسرية', fr: 'Opérations sur les nombres en écriture fractionnaire' },
    summary: {
      ar: 'جمع وطرح كسرين لهما نفس المقام أو مقامان مختلفان، وضرب كسرين.',
      fr: 'Addition et soustraction de fractions de même dénominateur ou de dénominateurs différents, et produit de deux fractions.',
    },
    objectives: [
      { ar: 'جمع وطرح كسرين لهما نفس المقام.', fr: 'Additionner et soustraire deux fractions de même dénominateur.' },
      { ar: 'جمع وطرح كسرين مقام أحدهما مضاعف لمقام الآخر، أو مقاماهما مختلفان.', fr: 'Additionner et soustraire deux fractions dont un dénominateur est multiple de l’autre, ou de dénominateurs différents.' },
      { ar: 'ضرب كسرين.', fr: 'Effectuer le produit de deux fractions.' },
      { ar: 'إعطاء النتيجة على شكل كسر غير قابل للاختزال.', fr: 'Donner le résultat sous forme irréductible.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['fraction', 'addition', 'soustraction', 'multiplication', 'dénominateur commun', 'كسر', 'جمع', 'ضرب', 'مقام مشترك'],
    sections: [
      {
        id: 'meme-denominateur',
        title: { ar: 'الجمع والطرح بنفس المقام', fr: 'Addition et soustraction : même dénominateur' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لجمع (أو طرح) كسرين لهما نفس المقام، نجمع (أو نطرح) البسطين ونحتفظ بالمقام المشترك:',
              fr: 'Pour additionner (ou soustraire) deux fractions de même dénominateur, on additionne (ou on soustrait) les numérateurs et on garde le dénominateur commun :',
            },
          },
          { kind: 'formula', tex: '\\frac ac+\\frac bc=\\frac{a+b}{c}\\qquad \\frac ac-\\frac bc=\\frac{a-b}{c}' },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\dfrac{19}4-\\dfrac94$ و $\\dfrac{13}5+\\dfrac25$.', fr: 'Calculer $\\dfrac{19}4-\\dfrac94$ et $\\dfrac{13}5+\\dfrac25$.' },
            steps: [
              { ar: '$\\dfrac{19}4-\\dfrac94=\\dfrac{19-9}4=\\dfrac{10}4=\\dfrac52$ (اختزلنا على $2$).', fr: '$\\dfrac{19}4-\\dfrac94=\\dfrac{19-9}4=\\dfrac{10}4=\\dfrac52$ (simplification par $2$).' },
              { ar: '$\\dfrac{13}5+\\dfrac25=\\dfrac{15}5=3$.', fr: '$\\dfrac{13}5+\\dfrac25=\\dfrac{15}5=3$.' },
            ],
          },
          {
            kind: 'remark',
            content: {
              ar: 'نعطي دائماً النتيجة النهائية على شكل كسر **غير قابل للاختزال** كلما أمكن.',
              fr: 'On donne toujours le résultat final sous forme **irréductible** lorsque c’est possible.',
            },
          },
        ],
      },
      {
        id: 'denominateurs-differents',
        title: { ar: 'الجمع والطرح بمقامين مختلفين', fr: 'Addition et soustraction : dénominateurs différents' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: 'نكتب الكسرين **بنفس المقام** أولاً، ثم نجمع (أو نطرح) البسطين ونحتفظ بالمقام المشترك.\n\nإذا كان أحد المقامين مضاعفاً للآخر، فهو المقام المشترك. وإلا يمكن استعمال جداء المقامين.',
              fr: 'On écrit d’abord les deux fractions **avec le même dénominateur**, puis on additionne (ou soustrait) les numérateurs en gardant le dénominateur commun.\n\nSi un dénominateur est multiple de l’autre, c’est lui le dénominateur commun ; sinon on peut prendre le produit des dénominateurs.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'مقام مضاعف للآخر', fr: 'Un dénominateur multiple de l’autre' },
            statement: { ar: 'احسب $\\dfrac23+\\dfrac16$ و $\\dfrac58-\\dfrac14$.', fr: 'Calculer $\\dfrac23+\\dfrac16$ et $\\dfrac58-\\dfrac14$.' },
            steps: [
              { ar: '$6$ مضاعف لـ $3$: $\\dfrac23=\\dfrac46$، إذن $\\dfrac23+\\dfrac16=\\dfrac46+\\dfrac16=\\dfrac56$.', fr: '$6$ est multiple de $3$ : $\\dfrac23=\\dfrac46$, donc $\\dfrac23+\\dfrac16=\\dfrac46+\\dfrac16=\\dfrac56$.' },
              { ar: '$8$ مضاعف لـ $4$: $\\dfrac14=\\dfrac28$، إذن $\\dfrac58-\\dfrac28=\\dfrac38$.', fr: '$8$ est multiple de $4$ : $\\dfrac14=\\dfrac28$, donc $\\dfrac58-\\dfrac28=\\dfrac38$.' },
            ],
          },
          {
            kind: 'example',
            title: { ar: 'مقامان كيفيان', fr: 'Dénominateurs quelconques' },
            statement: { ar: 'احسب $\\dfrac58+\\dfrac23$ و $\\dfrac18-\\dfrac1{10}$.', fr: 'Calculer $\\dfrac58+\\dfrac23$ et $\\dfrac18-\\dfrac1{10}$.' },
            steps: [
              { ar: '$\\dfrac58+\\dfrac23=\\dfrac{15}{24}+\\dfrac{16}{24}=\\dfrac{31}{24}$.', fr: '$\\dfrac58+\\dfrac23=\\dfrac{15}{24}+\\dfrac{16}{24}=\\dfrac{31}{24}$.' },
              { ar: '$\\dfrac18-\\dfrac1{10}=\\dfrac{10}{80}-\\dfrac8{80}=\\dfrac2{80}=\\dfrac1{40}$.', fr: '$\\dfrac18-\\dfrac1{10}=\\dfrac{10}{80}-\\dfrac8{80}=\\dfrac2{80}=\\dfrac1{40}$.' },
            ],
          },
        ],
      },
      {
        id: 'produit',
        title: { ar: 'ضرب كسرين', fr: 'Produit de deux fractions' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لضرب كسرين، نضرب البسطين فيما بينهما والمقامين فيما بينهما:',
              fr: 'Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux :',
            },
          },
          { kind: 'formula', tex: '\\frac ab\\times\\frac cd=\\frac{a\\times c}{b\\times d}' },
          {
            kind: 'example',
            statement: { ar: 'احسب $\\dfrac34\\times\\dfrac75$ و $5\\times\\dfrac32$.', fr: 'Calculer $\\dfrac34\\times\\dfrac75$ et $5\\times\\dfrac32$.' },
            steps: [
              { ar: '$\\dfrac34\\times\\dfrac75=\\dfrac{3\\times7}{4\\times5}=\\dfrac{21}{20}$.', fr: '$\\dfrac34\\times\\dfrac75=\\dfrac{3\\times7}{4\\times5}=\\dfrac{21}{20}$.' },
              { ar: 'نكتب $5=\\dfrac51$: $5\\times\\dfrac32=\\dfrac{5\\times3}{1\\times2}=\\dfrac{15}2$.', fr: 'On écrit $5=\\dfrac51$ : $5\\times\\dfrac32=\\dfrac{5\\times3}{1\\times2}=\\dfrac{15}2$.' },
            ],
          },
          {
            kind: 'remark',
            title: { ar: 'تأويل بالمساحة', fr: 'Interprétation par les aires' },
            content: {
              ar: 'مساحة مستطيل بعداه $\\dfrac34$ و $\\dfrac59$ من وحدة الطول هي $\\dfrac34\\times\\dfrac59=\\dfrac{15}{36}$ من وحدة المساحة.',
              fr: 'L’aire d’un rectangle de dimensions $\\dfrac34$ et $\\dfrac59$ de l’unité de longueur vaut $\\dfrac34\\times\\dfrac59=\\dfrac{15}{36}$ de l’unité d’aire.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'نفس المقام: نجمع أو نطرح البسطين فقط.', fr: 'Même dénominateur : on additionne ou soustrait seulement les numérateurs.' },
      { ar: 'مقامان مختلفان: نوحد المقامين أولاً.', fr: 'Dénominateurs différents : on réduit d’abord au même dénominateur.' },
      { ar: '$\\dfrac ab\\times\\dfrac cd=\\dfrac{ac}{bd}$.', fr: '$\\dfrac ab\\times\\dfrac cd=\\dfrac{ac}{bd}$.' },
      { ar: 'نختزل النتيجة النهائية كلما أمكن.', fr: 'On simplifie le résultat final quand c’est possible.' },
    ],
  },
  exercises: [
    {
      id: '1ac-opfrac-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'مقام مضاعف', fr: 'Dénominateur multiple' },
      statement: { ar: 'احسب $A=\\dfrac57+\\dfrac2{14}$ وأعط النتيجة مختزلة.', fr: 'Calculer $A=\\dfrac57+\\dfrac2{14}$ sous forme irréductible.' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$\\dfrac67$', fr: '$\\dfrac67$' },
          { ar: '$\\dfrac7{21}$', fr: '$\\dfrac7{21}$' },
          { ar: '$\\dfrac{12}{14}$', fr: '$\\dfrac{12}{14}$' },
          { ar: '$\\dfrac7{14}$', fr: '$\\dfrac7{14}$' },
        ],
        correct: 0,
      },
      hints: [{ ar: '$14=2\\times7$: اكتب $\\dfrac57$ بالمقام $14$.', fr: '$14=2\\times7$ : écris $\\dfrac57$ avec le dénominateur $14$.' }],
      solution: [
        { ar: '$\\dfrac57=\\dfrac{10}{14}$، إذن $A=\\dfrac{10}{14}+\\dfrac2{14}=\\dfrac{12}{14}$.', fr: '$\\dfrac57=\\dfrac{10}{14}$, donc $A=\\dfrac{10}{14}+\\dfrac2{14}=\\dfrac{12}{14}$.' },
        { ar: 'نختزل على $2$: $A=\\dfrac67$. ($\\dfrac{12}{14}$ صحيح لكنه غير مختزل.)', fr: 'On simplifie par $2$ : $A=\\dfrac67$. ($\\dfrac{12}{14}$ est juste mais pas irréductible.)' },
      ],
    },
    {
      id: '1ac-opfrac-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'فرق كسرين', fr: 'Différence de fractions' },
      statement: { ar: 'احسب $D=\\dfrac87-\\dfrac13$. اكتب النتيجة على شكل $\\dfrac ab$ (مثلاً 5/12).', fr: 'Calculer $D=\\dfrac87-\\dfrac13$. Donne le résultat sous la forme $\\dfrac ab$ (ex. 5/12).' },
      question: { type: 'numeric', answer: 17 / 21, tolerance: 1e-9 },
      hints: [{ ar: 'المقام المشترك: $21$.', fr: 'Dénominateur commun : $21$.' }],
      solution: [
        { ar: '$\\dfrac87=\\dfrac{24}{21}$ و $\\dfrac13=\\dfrac7{21}$.', fr: '$\\dfrac87=\\dfrac{24}{21}$ et $\\dfrac13=\\dfrac7{21}$.' },
        { ar: '$D=\\dfrac{24-7}{21}=\\dfrac{17}{21}$.', fr: '$D=\\dfrac{24-7}{21}=\\dfrac{17}{21}$.' },
      ],
    },
    {
      id: '1ac-opfrac-03',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'جداء كسرين', fr: 'Produit de fractions' },
      statement: { ar: 'احسب $B=\\dfrac79\\times\\dfrac56$.', fr: 'Calculer $B=\\dfrac79\\times\\dfrac56$.' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$\\dfrac{35}{54}$', fr: '$\\dfrac{35}{54}$' },
          { ar: '$\\dfrac{12}{15}$', fr: '$\\dfrac{12}{15}$' },
          { ar: '$\\dfrac{42}{45}$', fr: '$\\dfrac{42}{45}$' },
          { ar: '$\\dfrac{35}{15}$', fr: '$\\dfrac{35}{15}$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'بسط × بسط، ومقام × مقام.', fr: 'Numérateur × numérateur, dénominateur × dénominateur.' }],
      solution: [{ ar: '$B=\\dfrac{7\\times5}{9\\times6}=\\dfrac{35}{54}$.', fr: '$B=\\dfrac{7\\times5}{9\\times6}=\\dfrac{35}{54}$.' }],
    },
    {
      id: '1ac-opfrac-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'لوح الشوكولاتة', fr: 'La tablette de chocolat' },
      statement: {
        ar: 'لوح شوكولاتة به $18$ مربعاً. أكل عثمان $\\dfrac13$ اللوح وأكلت كنزة $\\dfrac{11}{18}$ منه. كم مربعاً بقي؟',
        fr: 'Une tablette de chocolat a $18$ carrés. Othmane mange $\\dfrac13$ de la tablette et Kenza $\\dfrac{11}{18}$. Combien de carrés reste-t-il ?',
      },
      question: { type: 'numeric', answer: 1 },
      hints: [
        { ar: 'احسب الكسر الذي أكلاه معاً بالمقام $18$.', fr: 'Calcule la fraction mangée à eux deux, avec le dénominateur $18$.' },
        { ar: 'الكسر المتبقي هو $1$ ناقص ما أُكل.', fr: 'La fraction restante est $1$ moins ce qui a été mangé.' },
      ],
      solution: [
        { ar: '$\\dfrac13=\\dfrac6{18}$، إذن أكلا $\\dfrac6{18}+\\dfrac{11}{18}=\\dfrac{17}{18}$.', fr: '$\\dfrac13=\\dfrac6{18}$, donc ils ont mangé $\\dfrac6{18}+\\dfrac{11}{18}=\\dfrac{17}{18}$.' },
        { ar: 'الباقي $\\dfrac{18}{18}-\\dfrac{17}{18}=\\dfrac1{18}$ من اللوح، أي مربع واحد.', fr: 'Il reste $\\dfrac{18}{18}-\\dfrac{17}{18}=\\dfrac1{18}$ de la tablette, soit $1$ carré.' },
      ],
    },
  ],
};
