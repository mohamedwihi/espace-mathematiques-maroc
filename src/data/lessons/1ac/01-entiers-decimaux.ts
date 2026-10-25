import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-operations-decimaux';

export const operationsDecimaux: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'integers-decimals',
    title: { ar: 'العمليات على الأعداد الصحيحة الطبيعية والأعداد العشرية', fr: 'Les opérations sur les nombres entiers et décimaux' },
    summary: {
      ar: 'ترتيب إنجاز العمليات بأقواس وبدونها، ترجمة جملة إلى تعبير عددي، وتوزيعية الضرب على الجمع والطرح.',
      fr: "Priorités opératoires avec et sans parenthèses, traduction d'une phrase en expression numérique et distributivité de la multiplication.",
    },
    objectives: [
      { ar: 'إنجاز سلسلة من العمليات بأقواس أو بدونها.', fr: "Effectuer une suite d'opérations avec ou sans parenthèses." },
      { ar: 'كتابة تعبير عددي يوافق جملة معطاة.', fr: 'Écrire une expression correspondant à une succession donnée d’opérations.' },
      { ar: 'استعمال $k(a+b)=ka+kb$ و $k(a-b)=ka-kb$ في الاتجاهين.', fr: 'Utiliser $k(a+b)=ka+kb$ et $k(a-b)=ka-kb$ dans les deux sens.' },
      { ar: 'نشر وتعميل تعبير بسيط.', fr: 'Développer et factoriser une expression simple.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['priorités', 'parenthèses', 'distributivité', 'somme', 'produit', 'quotient', 'أولويات', 'أقواس', 'توزيعية'],
    sections: [
      {
        id: 'rappel',
        title: { ar: 'تذكير: مصطلحات العمليات', fr: 'Rappel : le vocabulaire des opérations' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: 'الجمع: $20{,}12+2{,}45=22{,}57$ — الحدان و**المجموع**.', fr: 'Addition : $20{,}12+2{,}45=22{,}57$ — les termes et la **somme**.' },
              { ar: 'الطرح: $11-8{,}5=2{,}5$ — الحدان و**الفرق**.', fr: 'Soustraction : $11-8{,}5=2{,}5$ — les termes et la **différence**.' },
              { ar: 'الضرب: $25\\times2=50$ — العاملان و**الجداء**.', fr: 'Multiplication : $25\\times2=50$ — les facteurs et le **produit**.' },
              { ar: 'القسمة: $26{,}4\\div2=13{,}2$ — المقسوم والقاسم و**الخارج**.', fr: 'Division : $26{,}4\\div2=13{,}2$ — le dividende, le diviseur et le **quotient**.' },
            ],
          },
          {
            kind: 'remark',
            content: {
              ar: 'اسم التعبير تحدده **آخر عملية** تُنجز. مثلاً $5\\times(1{,}5+9)$ هو جداء $5$ ومجموع $1{,}5$ و $9$، بينما $1{,}3+(10\\times2)$ هو مجموع $1{,}3$ وجداء $10$ في $2$.',
              fr: "Le nom d'une expression est donné par la **dernière opération** effectuée. Ainsi $5\\times(1{,}5+9)$ est le produit de $5$ par la somme de $1{,}5$ et $9$, tandis que $1{,}3+(10\\times2)$ est la somme de $1{,}3$ et du produit de $10$ par $2$.",
            },
          },
          {
            kind: 'example',
            title: { ar: 'ترجمة جملة إلى تعبير', fr: 'Traduire une phrase' },
            statement: {
              ar: 'اكتب: (أ) خارج $24$ على مجموع $3$ و $2$ ؛ (ب) جداء مجموع $4$ و $5$ في فرق $9$ و $3$.',
              fr: 'Écrire : (a) le quotient de $24$ par la somme de $3$ et $2$ ; (b) le produit de la somme de $4$ et $5$ par la différence de $9$ et $3$.',
            },
            steps: [
              { ar: '(أ) آخر عملية قسمة، والقاسم مجموع: $24\\div(3+2)=24\\div5=4{,}8$.', fr: '(a) La dernière opération est une division dont le diviseur est une somme : $24\\div(3+2)=24\\div5=4{,}8$.' },
              { ar: '(ب) آخر عملية ضرب: $(4+5)\\times(9-3)=9\\times6=54$.', fr: '(b) La dernière opération est une multiplication : $(4+5)\\times(9-3)=9\\times6=54$.' },
            ],
          },
        ],
      },
      {
        id: 'sans-parentheses',
        title: { ar: 'سلسلة عمليات بدون أقواس', fr: "Suites d'opérations sans parenthèses" },
        blocks: [
          {
            kind: 'rule',
            title: { ar: 'جمع وطرح فقط', fr: 'Additions et soustractions seulement' },
            content: {
              ar: 'ننجز العمليات واحدة تلو الأخرى **من اليسار إلى اليمين** (حسب ترتيب كتابتها).',
              fr: "On effectue les calculs l'un après l'autre, **de la gauche vers la droite**.",
            },
          },
          {
            kind: 'rule',
            title: { ar: 'ضرب وقسمة فقط', fr: 'Multiplications et divisions seulement' },
            content: {
              ar: 'ننجز العمليات أيضاً واحدة تلو الأخرى من اليسار إلى اليمين.',
              fr: "On effectue aussi les calculs l'un après l'autre, de la gauche vers la droite.",
            },
          },
          {
            kind: 'rule',
            title: { ar: 'عمليات مختلطة', fr: 'Opérations mélangées' },
            content: {
              ar: 'في تعبير بدون أقواس، ننجز **أولاً الضرب والقسمة** ثم الجمع والطرح.',
              fr: "Dans une expression sans parenthèses, on effectue **d'abord les multiplications et les divisions**, puis les additions et les soustractions.",
            },
          },
          {
            kind: 'example',
            statement: {
              ar: 'احسب: $A=20-4+3-6$ ؛ $B=15\\div3\\times16\\div2$ ؛ $C=45\\div10+2{,}5\\times4$.',
              fr: 'Calculer : $A=20-4+3-6$ ; $B=15\\div3\\times16\\div2$ ; $C=45\\div10+2{,}5\\times4$.',
            },
            steps: [
              { ar: '$A=16+3-6=19-6=13$.', fr: '$A=16+3-6=19-6=13$.' },
              { ar: '$B=5\\times16\\div2=80\\div2=40$.', fr: '$B=5\\times16\\div2=80\\div2=40$.' },
              { ar: 'في $C$ نبدأ بالقسمة والضرب: $C=4{,}5+10=14{,}5$.', fr: 'Dans $C$, on commence par la division et la multiplication : $C=4{,}5+10=14{,}5$.' },
            ],
          },
          {
            kind: 'example',
            title: { ar: 'وضعية', fr: 'Situation' },
            statement: {
              ar: 'اشترى خالد محفظة بـ $70$ درهماً و $5$ دفاتر ثمن الواحد $4{,}3$ دراهم. كم دفع؟',
              fr: 'Khaled achète un cartable à $70$ DH et $5$ cahiers à $4{,}3$ DH l’un. Combien paie-t-il ?',
            },
            steps: [
              { ar: 'التعبير: $70+5\\times4{,}3$.', fr: 'Expression : $70+5\\times4{,}3$.' },
              { ar: 'الضرب أولاً: $5\\times4{,}3=21{,}5$، ثم $70+21{,}5=91{,}5$. دفع $91{,}5$ درهماً.', fr: 'La multiplication d’abord : $5\\times4{,}3=21{,}5$, puis $70+21{,}5=91{,}5$. Il paie $91{,}5$ DH.' },
            ],
          },
        ],
      },
      {
        id: 'avec-parentheses',
        title: { ar: 'سلسلة عمليات بأقواس', fr: "Suites d'opérations avec parenthèses" },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لحساب تعبير يحتوي على أقواس، ننجز **أولاً العمليات داخل الأقواس**. إذا كانت الأقواس متداخلة نبدأ بالأقواس **الداخلية**، وغالباً ما تُعوَّض الأقواس الخارجية بمعقوفتين $[\\;]$.',
              fr: "Pour calculer une expression avec parenthèses, on effectue **d'abord les calculs entre parenthèses**. Si elles sont emboîtées, on commence par les plus **intérieures** ; les parenthèses extérieures sont souvent remplacées par des crochets $[\\;]$.",
            },
          },
          {
            kind: 'example',
            statement: {
              ar: 'احسب: $A=5+2\\times(3-2)$ ؛ $B=(5+2)\\times(3-2)$ ؛ $C=1+[3\\times(6+(3\\times8-1))]$.',
              fr: 'Calculer : $A=5+2\\times(3-2)$ ; $B=(5+2)\\times(3-2)$ ; $C=1+[3\\times(6+(3\\times8-1))]$.',
            },
            steps: [
              { ar: '$A=5+2\\times1=5+2=7$.', fr: '$A=5+2\\times1=5+2=7$.' },
              { ar: '$B=7\\times1=7$.', fr: '$B=7\\times1=7$.' },
              { ar: 'نبدأ بالأقواس الداخلية: $3\\times8-1=23$، ثم $6+23=29$، ثم $3\\times29=87$، إذن $C=1+87=88$.', fr: 'Parenthèses intérieures : $3\\times8-1=23$, puis $6+23=29$, puis $3\\times29=87$, donc $C=1+87=88$.' },
            ],
          },
        ],
      },
      {
        id: 'distributivite',
        title: { ar: 'توزيعية الضرب على الجمع والطرح', fr: 'Distributivité de la multiplication' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لتكن $a$ و $b$ و $k$ أعداداً عشرية:',
              fr: 'Soient $a$, $b$ et $k$ des nombres décimaux :',
            },
          },
          { kind: 'formula', tex: 'k\\times(a+b)=k\\times a+k\\times b\\qquad k\\times(a-b)=k\\times a-k\\times b' },
          {
            kind: 'definition',
            content: {
              ar: '**النشر** هو تحويل جداء إلى مجموع أو فرق. **التعميل** هو تحويل مجموع أو فرق إلى جداء.',
              fr: '**Développer**, c’est transformer un produit en somme ou en différence. **Factoriser**, c’est transformer une somme ou une différence en produit.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: 'انشر $A=2{,}5\\times(4+7{,}2)$ وعمّل $B=13\\times7{,}2+13\\times3$.',
              fr: 'Développer $A=2{,}5\\times(4+7{,}2)$ et factoriser $B=13\\times7{,}2+13\\times3$.',
            },
            steps: [
              { ar: '$A=2{,}5\\times4+2{,}5\\times7{,}2=10+18=28$.', fr: '$A=2{,}5\\times4+2{,}5\\times7{,}2=10+18=28$.' },
              { ar: 'العامل المشترك هو $13$: $B=13\\times(7{,}2+3)=13\\times10{,}2=132{,}6$.', fr: 'Le facteur commun est $13$ : $B=13\\times(7{,}2+3)=13\\times10{,}2=132{,}6$.' },
            ],
          },
          {
            kind: 'remark',
            title: { ar: 'حذف علامة الضرب', fr: 'Suppression du signe ×' },
            content: {
              ar: 'يمكن حذف العلامة $\\times$ إذا تلاها حرف أو قوس: $9\\times a=9a$ ، $4\\times(x+1)=4(x+1)$ ، $(a+b)\\times(c+d)=(a+b)(c+d)$. لكن انتبه: $3\\times2$ لا تكتب $32$.',
              fr: 'On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse : $9\\times a=9a$, $4\\times(x+1)=4(x+1)$, $(a+b)\\times(c+d)=(a+b)(c+d)$. Attention : $3\\times2$ ne s’écrit pas $32$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'آخر عملية تُنجز هي التي تعطي اسم التعبير (مجموع، فرق، جداء، خارج).', fr: "La dernière opération effectuée donne le nom de l'expression (somme, différence, produit, quotient)." },
      { ar: 'الأولويات: الأقواس، ثم الضرب والقسمة، ثم الجمع والطرح.', fr: 'Priorités : parenthèses, puis multiplications et divisions, puis additions et soustractions.' },
      { ar: 'عند تساوي الأولوية: من اليسار إلى اليمين.', fr: 'À priorité égale : de la gauche vers la droite.' },
      { ar: '$k(a+b)=ka+kb$ و $k(a-b)=ka-kb$ (نشر ← / تعميل →).', fr: '$k(a+b)=ka+kb$ et $k(a-b)=ka-kb$ (développer → / ← factoriser).' },
    ],
  },
  exercises: [
    {
      id: '1ac-ops-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'ترجمة جملة', fr: 'Traduire une phrase' },
      statement: { ar: 'أي تعبير يوافق: «خارج مجموع $9$ و $8$ على $7$»؟', fr: 'Quelle expression correspond à « le quotient de la somme de $9$ et $8$ par $7$ » ?' },
      question: {
        type: 'mcq',
        options: [
          { ar: '$(9+8)\\div7$', fr: '$(9+8)\\div7$' },
          { ar: '$9+8\\div7$', fr: '$9+8\\div7$' },
          { ar: '$7\\div(9+8)$', fr: '$7\\div(9+8)$' },
          { ar: '$9\\times8\\div7$', fr: '$9\\times8\\div7$' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'آخر عملية هي القسمة، والمقسوم مجموع.', fr: 'La dernière opération est une division ; le dividende est une somme.' }],
      solution: [
        { ar: 'المقسوم هو المجموع $9+8$ فنضعه بين قوسين، والقاسم $7$.', fr: 'Le dividende est la somme $9+8$, qu’on met entre parenthèses ; le diviseur est $7$.' },
        { ar: 'التعبير هو $(9+8)\\div7$. أما $9+8\\div7$ فهو مجموع لأن القسمة تُنجز أولاً.', fr: 'L’expression est $(9+8)\\div7$. En revanche $9+8\\div7$ est une somme, car la division est prioritaire.' },
      ],
    },
    {
      id: '1ac-ops-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'أولويات العمليات', fr: 'Priorités opératoires' },
      statement: { ar: 'احسب $E=3\\times7+9+15\\div3$.', fr: 'Calculer $E=3\\times7+9+15\\div3$.' },
      question: { type: 'numeric', answer: 35 },
      hints: [{ ar: 'ابدأ بالضرب والقسمة.', fr: 'Commencez par la multiplication et la division.' }],
      solution: [
        { ar: '$3\\times7=21$ و $15\\div3=5$.', fr: '$3\\times7=21$ et $15\\div3=5$.' },
        { ar: '$E=21+9+5=35$.', fr: '$E=21+9+5=35$.' },
      ],
    },
    {
      id: '1ac-ops-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'تعبير بأقواس', fr: 'Expression avec parenthèses' },
      statement: { ar: 'احسب $D=12+5\\times(6+4\\times3{,}1-2)$.', fr: 'Calculer $D=12+5\\times(6+4\\times3{,}1-2)$.' },
      question: { type: 'numeric', answer: 94, tolerance: 1e-9 },
      hints: [
        { ar: 'داخل القوس، الضرب أولاً: $4\\times3{,}1$.', fr: 'Dans la parenthèse, la multiplication d’abord : $4\\times3{,}1$.' },
        { ar: 'بعد حساب القوس، الضرب قبل الجمع.', fr: 'Après la parenthèse, la multiplication avant l’addition.' },
      ],
      solution: [
        { ar: '$4\\times3{,}1=12{,}4$، إذن القوس يساوي $6+12{,}4-2=16{,}4$.', fr: '$4\\times3{,}1=12{,}4$, donc la parenthèse vaut $6+12{,}4-2=16{,}4$.' },
        { ar: '$5\\times16{,}4=82$.', fr: '$5\\times16{,}4=82$.' },
        { ar: '$D=12+82=94$.', fr: '$D=12+82=94$.' },
      ],
    },
    {
      id: '1ac-ops-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'التعميل لتسهيل الحساب', fr: 'Factoriser pour calculer vite' },
      statement: { ar: 'باستعمال التعميل، احسب $C=23\\times1002-23\\times2$.', fr: 'En factorisant, calculer $C=23\\times1002-23\\times2$.' },
      question: { type: 'numeric', answer: 23000 },
      hints: [{ ar: '$23$ عامل مشترك.', fr: '$23$ est un facteur commun.' }],
      solution: [
        { ar: '$C=23\\times(1002-2)$.', fr: '$C=23\\times(1002-2)$.' },
        { ar: '$C=23\\times1000=23\\,000$.', fr: '$C=23\\times1000=23\\,000$.' },
      ],
    },
    {
      id: '1ac-ops-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'عمر سلمى', fr: "L'âge de Salma" },
      statement: {
        ar: 'عمر إبراهيم $34$ سنة وعمر محمد $26$ سنة. عمر أختهما سلمى يساوي ثلث مجموع عمريهما. اكتب تعبيراً عددياً ثم احسب عمر سلمى.',
        fr: "Ibrahim a $34$ ans et Mohammed $26$ ans. L'âge de leur sœur Salma est le tiers de la somme de leurs âges. Écris une expression puis calcule l'âge de Salma.",
      },
      question: { type: 'numeric', answer: 20, unit: 'ans / سنة' },
      hints: [{ ar: 'الثلث يعني القسمة على $3$، والمجموع بين قوسين.', fr: 'Le tiers, c’est diviser par $3$ ; la somme se met entre parenthèses.' }],
      solution: [
        { ar: 'التعبير: $(34+26)\\div3$.', fr: 'Expression : $(34+26)\\div3$.' },
        { ar: '$60\\div3=20$. عمر سلمى $20$ سنة.', fr: '$60\\div3=20$. Salma a $20$ ans.' },
      ],
    },
  ],
};
