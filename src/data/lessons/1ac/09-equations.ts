import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-equations';

export const equations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'equations',
    title: { ar: 'المعادلات', fr: 'Les équations' },
    summary: {
      ar: 'خاصيات المتساويات، المعادلات من الشكل $a+x=b$ و $ax=b$، وحل مسائل بالترييض.',
      fr: 'Propriétés des égalités, équations de la forme $a+x=b$ et $ax=b$, résolution de problèmes par mise en équation.',
    },
    objectives: [
      { ar: 'التعرف على المجهول والمعادلة.', fr: 'Identifier l’inconnue et l’équation.' },
      { ar: 'استعمال خاصيات المتساويات لحل معادلة.', fr: 'Utiliser les propriétés des égalités pour résoudre une équation.' },
      { ar: 'إيجاد الحل والتحقق منه.', fr: 'Trouver la solution et la vérifier.' },
      { ar: 'ترييض وضعيات مختلفة.', fr: 'Modéliser différentes situations.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['équation', 'inconnue', 'solution', 'égalité', 'problème', 'mise en équation', 'معادلة', 'مجهول', 'حل', 'ترييض'],
    sections: [
      {
        id: 'egalite',
        title: { ar: 'المتساوية', fr: 'L’égalité' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'الخاصية 1', fr: 'Propriété 1' },
            content: {
              ar: 'إذا أضفنا (أو طرحنا) نفس العدد إلى طرفي متساوية، نحصل على متساوية مكافئة: $a=b$ تكافئ $a+c=b+c$ وتكافئ $a-c=b-c$.',
              fr: 'Si on ajoute (ou soustrait) un même nombre aux deux membres d’une égalité, on obtient une égalité équivalente : $a=b$ équivaut à $a+c=b+c$ et à $a-c=b-c$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية 2', fr: 'Propriété 2' },
            content: {
              ar: 'إذا ضربنا طرفي متساوية في نفس العدد (أو قسمناهما على نفس العدد غير المنعدم)، نحصل على متساوية مكافئة: $a=b$ تكافئ $a\\times c=b\\times c$ وتكافئ $\\dfrac ac=\\dfrac bc$ مع $c\\neq0$.',
              fr: 'Si on multiplie (ou divise par un même nombre non nul) les deux membres d’une égalité, on obtient une égalité équivalente : $a=b$ équivaut à $a\\times c=b\\times c$ et à $\\dfrac ac=\\dfrac bc$ avec $c\\neq0$.',
            },
          },
        ],
      },
      {
        id: 'definition',
        title: { ar: 'معادلة من الدرجة الأولى بمجهول واحد', fr: 'Équation du premier degré à une inconnue' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'ميزان في حالة توازن: في الكفة الأولى $3$ تفاحات وكتلة $100\\,\\text{g}$، وفي الثانية تفاحتان وكتلة $200\\,\\text{g}$. إذا رمزنا بـ $x$ لكتلة تفاحة: $3x+100=2x+200$، ومنه $x=100\\,\\text{g}$.',
              fr: 'Une balance est en équilibre : d’un côté $3$ pommes et une masse de $100\\,\\text{g}$, de l’autre $2$ pommes et $200\\,\\text{g}$. Avec $x$ la masse d’une pomme : $3x+100=2x+200$, d’où $x=100\\,\\text{g}$.',
            },
          },
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ و $b$ عددين نسبيين معلومين. كل متساوية تكتب على الشكل $a+x=b$ أو $ax=b$ (مع $a\\neq0$) تسمى **معادلة من الدرجة الأولى بمجهول واحد** $x$.\n\n**حل معادلة** هو إيجاد جميع قيم المجهول التي تجعل المتساوية صحيحة؛ كل قيمة منها تسمى **حلاً** للمعادلة.',
              fr: 'Soient $a$ et $b$ deux relatifs donnés. Toute égalité de la forme $a+x=b$ ou $ax=b$ (avec $a\\neq0$) est une **équation du premier degré à une inconnue** $x$.\n\n**Résoudre** une équation, c’est trouver toutes les valeurs de l’inconnue qui rendent l’égalité vraie ; chacune est une **solution**.',
            },
          },
        ],
      },
      {
        id: 'resolution',
        title: { ar: 'حل المعادلات', fr: 'Résolution des équations' },
        blocks: [
          {
            kind: 'method',
            title: { ar: 'الشكل $a+x=b$', fr: 'Forme $a+x=b$' },
            content: {
              ar: 'نطرح $a$ من الطرفين (أو نضيف مقابله): $x=b-a$.',
              fr: 'On soustrait $a$ aux deux membres (ou on ajoute son opposé) : $x=b-a$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $x+1=3$ ثم $x-1=-5$.', fr: 'Résoudre $x+1=3$ puis $x-1=-5$.' },
            steps: [
              { ar: '$x+1-1=3-1$ إذن $x=2$. الحل هو $2$.', fr: '$x+1-1=3-1$ donc $x=2$. La solution est $2$.' },
              { ar: '$x-1+1=-5+1$ إذن $x=-4$. الحل هو $-4$.', fr: '$x-1+1=-5+1$ donc $x=-4$. La solution est $-4$.' },
              { ar: 'تحقق: $-4-1=-5$ ✓.', fr: 'Vérification : $-4-1=-5$ ✓.' },
            ],
          },
          {
            kind: 'method',
            title: { ar: 'الشكل $ax=b$', fr: 'Forme $ax=b$' },
            content: {
              ar: 'نقسم الطرفين على $a\\neq0$: $x=\\dfrac ba$.',
              fr: 'On divise les deux membres par $a\\neq0$ : $x=\\dfrac ba$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $3x=12$ ثم $\\dfrac x4=16$.', fr: 'Résoudre $3x=12$ puis $\\dfrac x4=16$.' },
            steps: [
              { ar: '$\\dfrac{3x}3=\\dfrac{12}3$ إذن $x=4$.', fr: '$\\dfrac{3x}3=\\dfrac{12}3$ donc $x=4$.' },
              { ar: 'نضرب الطرفين في $4$: $4\\times\\dfrac x4=4\\times16$ إذن $x=64$.', fr: 'On multiplie les deux membres par $4$ : $4\\times\\dfrac x4=4\\times16$ donc $x=64$.' },
              { ar: 'تحقق: $\\dfrac{64}4=16$ ✓.', fr: 'Vérification : $\\dfrac{64}4=16$ ✓.' },
            ],
          },
        ],
      },
      {
        id: 'problemes',
        title: { ar: 'حل المسائل', fr: 'Résolution de problèmes' },
        blocks: [
          {
            kind: 'method',
            content: {
              ar: '1. قراءة المسألة وفهمها.\n\n2. اختيار المجهول.\n\n3. وضع المعادلة.\n\n4. حل المعادلة.\n\n5. تأويل النتيجة والخلاصة.\n\n6. التحقق.',
              fr: '1. Lire et bien comprendre le problème.\n\n2. Choisir l’inconnue.\n\n3. Mettre en équation.\n\n4. Résoudre l’équation.\n\n5. Interpréter le résultat et conclure.\n\n6. Vérifier.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: 'في مهرجان $150$ شخصاً، وعدد النساء أربعة أضعاف عدد الرجال. أوجد عدد الرجال وعدد النساء.',
              fr: 'Un festival réunit $150$ personnes ; il y a quatre fois plus de femmes que d’hommes. Trouver le nombre d’hommes et de femmes.',
            },
            steps: [
              { ar: 'نضع $x$ عدد الرجال، إذن عدد النساء $4x$.', fr: 'Soit $x$ le nombre d’hommes ; le nombre de femmes est $4x$.' },
              { ar: 'المعادلة: $x+4x=150$ أي $5x=150$ ومنه $x=30$.', fr: 'Équation : $x+4x=150$, soit $5x=150$, d’où $x=30$.' },
              { ar: '$30$ رجلاً و $4\\times30=120$ امرأة. تحقق: $30+120=150$ ✓.', fr: '$30$ hommes et $4\\times30=120$ femmes. Vérification : $30+120=150$ ✓.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نضيف أو نطرح نفس العدد من طرفي متساوية.', fr: 'On peut ajouter ou soustraire un même nombre aux deux membres.' },
      { ar: 'نضرب أو نقسم الطرفين على نفس العدد غير المنعدم.', fr: 'On peut multiplier ou diviser les deux membres par un même nombre non nul.' },
      { ar: '$a+x=b\\iff x=b-a$ و $ax=b\\iff x=\\dfrac ba$ ($a\\neq0$).', fr: '$a+x=b\\iff x=b-a$ et $ax=b\\iff x=\\dfrac ba$ ($a\\neq0$).' },
      { ar: 'نتحقق دائماً من الحل في المعادلة وفي المسألة.', fr: 'On vérifie toujours la solution dans l’équation et dans le problème.' },
    ],
  },
  exercises: [
    {
      id: '1ac-eq-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معادلة من الشكل a + x = b', fr: 'Équation a + x = b' },
      statement: { ar: 'حل المعادلة $x-5=\\dfrac12$.', fr: 'Résoudre $x-5=\\dfrac12$.' },
      question: { type: 'numeric', answer: 5.5, tolerance: 1e-9 },
      hints: [{ ar: 'أضف $5$ إلى الطرفين.', fr: 'Ajoute $5$ aux deux membres.' }],
      solution: [
        { ar: '$x=\\dfrac12+5=\\dfrac{11}2=5{,}5$.', fr: '$x=\\dfrac12+5=\\dfrac{11}2=5{,}5$.' },
        { ar: 'تحقق: $5{,}5-5=0{,}5$ ✓.', fr: 'Vérification : $5{,}5-5=0{,}5$ ✓.' },
      ],
    },
    {
      id: '1ac-eq-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معادلة بخطوتين', fr: 'Équation en deux étapes' },
      statement: { ar: 'حل المعادلة $2x+7=21$.', fr: 'Résoudre $2x+7=21$.' },
      question: { type: 'numeric', answer: 7 },
      hints: [
        { ar: 'اطرح $7$ من الطرفين أولاً.', fr: 'Soustrais d’abord $7$ aux deux membres.' },
        { ar: 'ثم اقسم على $2$.', fr: 'Puis divise par $2$.' },
      ],
      solution: [
        { ar: '$2x=21-7=14$.', fr: '$2x=21-7=14$.' },
        { ar: '$x=\\dfrac{14}2=7$. تحقق: $2\\times7+7=21$ ✓.', fr: '$x=\\dfrac{14}2=7$. Vérification : $2\\times7+7=21$ ✓.' },
      ],
    },
    {
      id: '1ac-eq-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'معادلة بكسر', fr: 'Équation avec une fraction' },
      statement: { ar: 'حل المعادلة $\\dfrac x9-18=5$.', fr: 'Résoudre $\\dfrac x9-18=5$.' },
      question: { type: 'numeric', answer: 207 },
      hints: [{ ar: 'أضف $18$ ثم اضرب في $9$.', fr: 'Ajoute $18$, puis multiplie par $9$.' }],
      solution: [
        { ar: '$\\dfrac x9=5+18=23$.', fr: '$\\dfrac x9=5+18=23$.' },
        { ar: '$x=9\\times23=207$.', fr: '$x=9\\times23=207$.' },
      ],
    },
    {
      id: '1ac-eq-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'أقلام مريم', fr: 'Les stylos de Meryem' },
      statement: {
        ar: 'اشترت مريم $3$ أقلام ودفتراً ثمنه $7$ دراهم، فدفعت $19$ درهماً. للأقلام نفس الثمن. ما ثمن القلم الواحد؟',
        fr: 'Meryem achète $3$ stylos et un cahier à $7$ DH ; elle paie $19$ DH. Les stylos ont tous le même prix. Quel est le prix d’un stylo ?',
      },
      question: { type: 'numeric', answer: 4, unit: 'DH' },
      hints: [{ ar: 'المعادلة: $3x+7=19$.', fr: 'Équation : $3x+7=19$.' }],
      solution: [
        { ar: 'نضع $x$ ثمن القلم: $3x+7=19$.', fr: 'Soit $x$ le prix d’un stylo : $3x+7=19$.' },
        { ar: '$3x=12$ ومنه $x=4$. ثمن القلم $4$ دراهم.', fr: '$3x=12$ donc $x=4$. Un stylo coûte $4$ DH.' },
        { ar: 'تحقق: $3\\times4+7=19$ ✓.', fr: 'Vérification : $3\\times4+7=19$ ✓.' },
      ],
    },
    {
      id: '1ac-eq-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'الآلة الحاسبة والكتاب', fr: 'La calculatrice et le livre' },
      statement: {
        ar: 'اشترى محمد آلة حاسبة وكتاباً بـ $45$ درهماً. ثمن الكتاب ضعف ثمن الآلة الحاسبة. ما ثمن الآلة الحاسبة؟',
        fr: 'Mohammed achète une calculatrice et un livre pour $45$ DH. Le livre coûte deux fois plus cher que la calculatrice. Quel est le prix de la calculatrice ?',
      },
      question: { type: 'numeric', answer: 15, unit: 'DH' },
      hints: [{ ar: 'إذا كان ثمن الآلة $x$، فثمن الكتاب $2x$.', fr: 'Si la calculatrice coûte $x$, le livre coûte $2x$.' }],
      solution: [
        { ar: '$x+2x=45$ أي $3x=45$ ومنه $x=15$.', fr: '$x+2x=45$, soit $3x=45$, d’où $x=15$.' },
        { ar: 'الآلة الحاسبة بـ $15$ درهماً والكتاب بـ $30$ درهماً. تحقق: $15+30=45$ ✓.', fr: 'La calculatrice coûte $15$ DH et le livre $30$ DH. Vérification : $15+30=45$ ✓.' },
      ],
    },
  ],
};
