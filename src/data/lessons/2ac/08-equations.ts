import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-equations';

export const equations: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'equations',
    title: { ar: 'المعادلات', fr: 'Les équations' },
    summary: {
      ar: 'المعادلة من الدرجة الأولى بمجهول واحد، حلها (حل وحيد، لا حل، ما لا نهاية من الحلول) وحل المسائل.',
      fr: 'Équation du premier degré à une inconnue, résolution (une solution, aucune, une infinité) et résolution de problèmes.',
    },
    objectives: [
      { ar: 'حل معادلات من الدرجة الأولى بمجهول واحد.', fr: 'Résoudre des équations du premier degré à une inconnue.' },
      { ar: 'حل معادلات تؤول إلى معادلات من الدرجة الأولى.', fr: 'Résoudre des équations qui s’y ramènent.' },
      { ar: 'ترييض وضعيات وحلها.', fr: 'Mettre en équation et résoudre des situations.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['équation', 'inconnue', 'solution', 'premier degré', 'problème', 'mise en équation', 'معادلة', 'مجهول', 'حل', 'الدرجة الأولى', 'ترييض'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'معادلة من الدرجة الأولى بمجهول واحد', fr: 'Équation du premier degré à une inconnue' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'ميزان متوازن: في كفة $3$ تفاحات و $100\\,\\text{g}$، وفي الأخرى تفاحتان و $200\\,\\text{g}$. إذا كانت $x$ كتلة تفاحة: $3x+100=2x+200$ ومنه $x=100\\,\\text{g}$.',
              fr: 'Une balance est en équilibre : d’un côté $3$ pommes et $100\\,\\text{g}$, de l’autre $2$ pommes et $200\\,\\text{g}$. Avec $x$ la masse d’une pomme : $3x+100=2x+200$, d’où $x=100\\,\\text{g}$.',
            },
          },
          {
            kind: 'definition',
            content: {
              ar: 'ليكن $a$ و $b$ عددين جذريين معلومين مع $a\\neq0$. كل متساوية تكتب على الشكل $ax+b=0$ تسمى **معادلة من الدرجة الأولى بمجهول واحد** $x$.\n\n**حل معادلة** هو إيجاد جميع قيم المجهول التي تحقق المتساوية؛ كل قيمة منها **حل** للمعادلة.',
              fr: 'Soient $a$ et $b$ deux rationnels donnés avec $a\\neq0$. Toute égalité qui s’écrit $ax+b=0$ est une **équation du premier degré à une inconnue** $x$.\n\n**Résoudre** une équation, c’est trouver toutes les valeurs de l’inconnue qui vérifient l’égalité ; chacune est une **solution**.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'تحقق.', fr: 'Vérifier.' },
            steps: [
              { ar: '$9+3=12$ إذن $9$ حل للمعادلة $x+3=12$.', fr: '$9+3=12$ donc $9$ est solution de $x+3=12$.' },
              { ar: '$3\\times3+5=14$ إذن $3$ حل للمعادلة $3x+5=14$.', fr: '$3\\times3+5=14$ donc $3$ est solution de $3x+5=14$.' },
            ],
          },
        ],
      },
      {
        id: 'resolution',
        title: { ar: 'حل المعادلات', fr: 'Résolution des équations' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'معادلة تؤول إلى الشكل $ax=b$:\n\n• إذا كان $a\\neq0$: لها حل وحيد هو $\\dfrac ba$.\n\n• إذا كان $a=0$ و $b=0$ ($0x=0$): كل عدد حل لها.\n\n• إذا كان $a=0$ و $b\\neq0$: ليس لها أي حل.',
              fr: 'Une équation qui se ramène à $ax=b$ :\n\n• si $a\\neq0$ : une seule solution, $\\dfrac ba$ ;\n\n• si $a=0$ et $b=0$ ($0x=0$) : tout nombre est solution ;\n\n• si $a=0$ et $b\\neq0$ : aucune solution.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'حل $2x+1=3$.', fr: 'Résoudre $2x+1=3$.' },
            steps: [
              { ar: '$2x=3-1=2$ ومنه $x=1$. للمعادلة حل وحيد هو $1$.', fr: '$2x=3-1=2$ donc $x=1$. L’équation a une seule solution : $1$.' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'حل $3x+12=3x+12$ ثم $5x+2=5x+12$.', fr: 'Résoudre $3x+12=3x+12$ puis $5x+2=5x+12$.' },
            steps: [
              { ar: '$3x-3x=12-12$ أي $0x=0$: كل عدد جذري حل لهذه المعادلة.', fr: '$3x-3x=12-12$ soit $0x=0$ : tout rationnel est solution.' },
              { ar: '$5x-5x=12-2$ أي $0x=10$: المعادلة ليس لها حل.', fr: '$5x-5x=12-2$ soit $0x=10$ : l’équation n’a aucune solution.' },
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
              ar: 'في مدرج $160$ شخصاً، وعدد النساء ثلاثة أضعاف عدد الرجال. أوجد عدد كل منهما.',
              fr: 'Un amphithéâtre compte $160$ personnes ; il y a trois fois plus de femmes que d’hommes. Trouver le nombre d’hommes et de femmes.',
            },
            steps: [
              { ar: 'نضع $x$ عدد الرجال؛ عدد النساء $3x$.', fr: 'Soit $x$ le nombre d’hommes ; il y a $3x$ femmes.' },
              { ar: '$x+3x=160$ أي $4x=160$ ومنه $x=40$.', fr: '$x+3x=160$ soit $4x=160$, d’où $x=40$.' },
              { ar: '$40$ رجلاً و $120$ امرأة. تحقق: $40+120=160$ ✓.', fr: '$40$ hommes et $120$ femmes. Vérification : $40+120=160$ ✓.' },
            ],
          },
          {
            kind: 'example',
            statement: {
              ar: 'اشترى يوسف كيلوغراماً من التفاح وكيلوغراماً من الموز بـ $45$ درهماً، وثمن كيلوغرام الموز ضعف ثمن كيلوغرام التفاح. ما ثمن كل منهما؟',
              fr: 'Youssef achète 1 kg de pommes et 1 kg de bananes pour $45$ DH ; le kilo de bananes coûte le double du kilo de pommes. Quels sont les prix ?',
            },
            steps: [
              { ar: '$x+2x=45$ أي $3x=45$ ومنه $x=15$.', fr: '$x+2x=45$ soit $3x=45$, d’où $x=15$.' },
              { ar: 'التفاح $15$ درهماً والموز $30$ درهماً.', fr: 'Pommes : $15$ DH ; bananes : $30$ DH.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'ننقل الحدود بالمجهول إلى طرف والأعداد إلى الطرف الآخر.', fr: 'On regroupe les termes en $x$ d’un côté et les nombres de l’autre.' },
      { ar: '$0x=0$: ما لا نهاية من الحلول؛ $0x=b$ مع $b\\neq0$: لا حل.', fr: '$0x=0$ : une infinité de solutions ; $0x=b$ avec $b\\neq0$ : aucune solution.' },
      { ar: 'نتحقق دائماً من الحل في المسألة.', fr: 'On vérifie toujours la solution dans le problème.' },
    ],
  },
  exercises: [
    {
      id: '2ac-eq-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'المجهول في الطرفين', fr: 'Inconnue des deux côtés' },
      statement: { ar: 'حل المعادلة $5x+7=x-3$.', fr: 'Résoudre $5x+7=x-3$.' },
      question: { type: 'numeric', answer: -2.5, tolerance: 1e-9 },
      hints: [{ ar: '$5x-x=-3-7$.', fr: '$5x-x=-3-7$.' }],
      solution: [{ ar: '$4x=-10$ ومنه $x=-\\dfrac{10}4=-2{,}5$.', fr: '$4x=-10$ donc $x=-\\dfrac{10}4=-2{,}5$.' }],
    },
    {
      id: '2ac-eq-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معادلة بأقواس', fr: 'Équation avec parenthèses' },
      statement: { ar: 'حل المعادلة $2(x+5)=x-3$.', fr: 'Résoudre $2(x+5)=x-3$.' },
      question: { type: 'numeric', answer: -13 },
      hints: [{ ar: 'انشر الطرف الأول: $2x+10$.', fr: 'Développe le premier membre : $2x+10$.' }],
      solution: [{ ar: '$2x+10=x-3$ ومنه $x=-13$. تحقق: $2\\times(-8)=-16=-13-3$ ✓.', fr: '$2x+10=x-3$ donc $x=-13$. Vérification : $2\\times(-8)=-16=-13-3$ ✓.' }],
    },
    {
      id: '2ac-eq-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'معامل كسري', fr: 'Coefficient fractionnaire' },
      statement: { ar: 'حل المعادلة $\\dfrac15x+7=x-3$.', fr: 'Résoudre $\\dfrac15x+7=x-3$.' },
      question: { type: 'numeric', answer: 12.5, tolerance: 1e-9 },
      hints: [{ ar: '$7+3=x-\\dfrac15x=\\dfrac45x$.', fr: '$7+3=x-\\dfrac15x=\\dfrac45x$.' }],
      solution: [{ ar: '$\\dfrac45x=10$ ومنه $x=10\\times\\dfrac54=12{,}5$.', fr: '$\\dfrac45x=10$ donc $x=10\\times\\dfrac54=12{,}5$.' }],
    },
    {
      id: '2ac-eq-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'عدد الحلول', fr: 'Nombre de solutions' },
      statement: { ar: 'كم حلاً للمعادلة $5x+7=5(x+1)+2$؟', fr: 'Combien de solutions a l’équation $5x+7=5(x+1)+2$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'حل وحيد', fr: 'Une seule' }, { ar: 'لا حل', fr: 'Aucune' }, { ar: 'ما لا نهاية من الحلول', fr: 'Une infinité' }],
        correct: 2,
      },
      hints: [{ ar: 'انشر الطرف الثاني.', fr: 'Développe le second membre.' }],
      solution: [{ ar: '$5x+7=5x+7$ أي $0x=0$: كل عدد حل.', fr: '$5x+7=5x+7$ soit $0x=0$ : tout nombre est solution.' }],
    },
    {
      id: '2ac-eq-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'عرضا السينما', fr: 'Les deux formules du cinéma' },
      statement: {
        ar: 'العرض A: اشتراك $30$ درهماً زائد $5$ دراهم لكل فيلم. العرض B: اشتراك $10$ دراهم زائد $9$ دراهم لكل فيلم. من أجل كم فيلماً يتساوى ثمن العرضين؟',
        fr: 'Formule A : abonnement de $30$ DH plus $5$ DH par film. Formule B : abonnement de $10$ DH plus $9$ DH par film. Pour combien de films les deux formules coûtent-elles le même prix ?',
      },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: 'المعادلة: $30+5n=10+9n$.', fr: 'Équation : $30+5n=10+9n$.' }],
      solution: [
        { ar: '$30-10=9n-5n$ أي $4n=20$ ومنه $n=5$.', fr: '$30-10=9n-5n$ soit $4n=20$, d’où $n=5$.' },
        { ar: 'تحقق: $30+25=55$ و $10+45=55$ ✓.', fr: 'Vérification : $30+25=55$ et $10+45=55$ ✓.' },
      ],
    },
    {
      id: '2ac-eq-06',
      lessonId,
      levelId: '2ac',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'ثلاثة أعداد متتابعة', fr: 'Trois entiers consécutifs' },
      statement: {
        ar: 'محيط مثلث $15\\,\\text{cm}$ وأطوال أضلاعه ثلاثة أعداد صحيحة متتابعة. ما طول أصغر ضلع؟',
        fr: 'Le périmètre d’un triangle est $15\\,\\text{cm}$ et ses côtés ont pour longueurs trois entiers consécutifs. Quelle est la longueur du plus petit côté ?',
      },
      question: { type: 'numeric', answer: 4, unit: 'cm' },
      hints: [{ ar: 'الأضلاع: $x$ و $x+1$ و $x+2$.', fr: 'Côtés : $x$, $x+1$ et $x+2$.' }],
      solution: [{ ar: '$3x+3=15$ ومنه $x=4$: الأضلاع $4$ و $5$ و $6$.', fr: '$3x+3=15$ donc $x=4$ : les côtés mesurent $4$, $5$ et $6$.' }],
    },
  ],
};
