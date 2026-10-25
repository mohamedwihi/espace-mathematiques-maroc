import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-relatifs-addition';

export const relatifsAddition: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'relative-add',
    title: { ar: 'جمع وطرح الأعداد العشرية النسبية', fr: 'Addition et soustraction des nombres décimaux relatifs' },
    summary: {
      ar: 'جمع عددين نسبيين أو أكثر، تحويل الطرح إلى جمع، وحذف الأقواس.',
      fr: 'Additionner deux relatifs ou plus, transformer une soustraction en addition et supprimer des parenthèses.',
    },
    objectives: [
      { ar: 'جمع عددين نسبيين لهما نفس الإشارة أو إشارتان مختلفتان.', fr: 'Additionner deux relatifs de même signe ou de signes contraires.' },
      { ar: 'تحويل الطرح إلى جمع: $a-b=a+(-b)$.', fr: 'Transformer une soustraction en addition : $a-b=a+(-b)$.' },
      { ar: 'حذف الأقواس وحساب مجموع جبري.', fr: 'Supprimer des parenthèses et calculer une somme algébrique.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    featured: true,
    source: teacherSource,
    keywords: ['relatif', 'addition', 'soustraction', 'opposé', 'parenthèses', 'somme algébrique', 'جمع', 'طرح', 'نسبي', 'أقواس'],
    sections: [
      {
        id: 'addition',
        title: { ar: 'جمع عددين نسبيين', fr: 'Addition de deux relatifs' },
        blocks: [
          {
            kind: 'text',
            content: {
              ar: 'كانت درجة الحرارة صباحاً بميدلت $-6^\\circ$، ثم انخفضت بـ $4^\\circ$ خلال الصباح: $(-6)+(-4)=-10$. وفي الزوال ارتفعت بـ $9^\\circ$: $(-10)+(+9)=-1$.',
              fr: 'À Midelt il fait $-6^\\circ$ le matin ; la température baisse encore de $4^\\circ$ : $(-6)+(-4)=-10$. L’après-midi elle augmente de $9^\\circ$ : $(-10)+(+9)=-1$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'نفس الإشارة', fr: 'Même signe' },
            content: {
              ar: 'نحتفظ بالإشارة المشتركة ونجمع المسافتين إلى الصفر. مثلاً: $(-5{,}7)+(-3{,}2)=-8{,}9$.',
              fr: 'On garde le signe commun et on additionne les distances à zéro. Exemple : $(-5{,}7)+(-3{,}2)=-8{,}9$.',
            },
          },
          {
            kind: 'rule',
            title: { ar: 'إشارتان مختلفتان', fr: 'Signes contraires' },
            content: {
              ar: 'نأخذ إشارة العدد ذي المسافة الكبرى إلى الصفر، ونطرح المسافة الصغرى من الكبرى. مثلاً: $(-6{,}2)+(+2{,}1)=-4{,}1$ و $(-2{,}5)+(+9{,}8)=+7{,}3$.',
              fr: 'On prend le signe du nombre qui a la plus grande distance à zéro et on soustrait la plus petite distance de la plus grande. Exemples : $(-6{,}2)+(+2{,}1)=-4{,}1$ et $(-2{,}5)+(+9{,}8)=+7{,}3$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'مجموع عددين متقابلين يساوي $0$: $(+5{,}2)+(-5{,}2)=0$. ولكل عدد $a$: $a+0=0+a=a$.',
              fr: 'La somme de deux opposés est nulle : $(+5{,}2)+(-5{,}2)=0$. Pour tout $a$ : $a+0=0+a=a$.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'جمع عدة أعداد', fr: 'Somme de plusieurs nombres' },
            statement: { ar: 'احسب $B=(-13)+(+23)+(-5)+(+15)$.', fr: 'Calculer $B=(-13)+(+23)+(-5)+(+15)$.' },
            steps: [
              { ar: 'نجمع عددين عددين من اليسار: $(-13)+(+23)=+10$.', fr: 'On additionne deux par deux à partir de la gauche : $(-13)+(+23)=+10$.' },
              { ar: '$(+10)+(-5)=+5$ ثم $(+5)+(+15)=20$.', fr: '$(+10)+(-5)=+5$ puis $(+5)+(+15)=20$.' },
            ],
          },
        ],
      },
      {
        id: 'soustraction',
        title: { ar: 'طرح عددين نسبيين', fr: 'Soustraction de deux relatifs' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'لطرح عدد نسبي، **نضيف مقابله**:',
              fr: 'Pour soustraire un nombre relatif, **on ajoute son opposé** :',
            },
          },
          { kind: 'formula', tex: 'a-b=a+(-b)' },
          {
            kind: 'example',
            statement: { ar: 'احسب $(-5)-(+2)$ و $(+12{,}3)-(+16{,}2)$ و $(-5)-(-5)$.', fr: 'Calculer $(-5)-(+2)$, $(+12{,}3)-(+16{,}2)$ et $(-5)-(-5)$.' },
            steps: [
              { ar: '$(-5)-(+2)=(-5)+(-2)=-7$.', fr: '$(-5)-(+2)=(-5)+(-2)=-7$.' },
              { ar: '$(+12{,}3)-(+16{,}2)=(+12{,}3)+(-16{,}2)=-3{,}9$.', fr: '$(+12{,}3)-(+16{,}2)=(+12{,}3)+(-16{,}2)=-3{,}9$.' },
              { ar: 'فرق عددين متساويين يساوي $0$: $(-5)-(-5)=0$.', fr: 'La différence de deux nombres égaux est nulle : $(-5)-(-5)=0$.' },
            ],
          },
        ],
      },
      {
        id: 'parentheses',
        title: { ar: 'حذف الأقواس', fr: 'Suppression des parenthèses' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: '• إشارتان متماثلتان متتاليتان تعوّضان بـ $+$: $3+(+5)=3+5$ و $3-(-5)=3+5$.\n\n• إشارتان مختلفتان متتاليتان تعوّضان بـ $-$: $3-(+5)=3-5$ و $5+(-3)=5-3$.',
              fr: '• Deux signes identiques qui se suivent sont remplacés par $+$ : $3+(+5)=3+5$ et $3-(-5)=3+5$.\n\n• Deux signes contraires qui se suivent sont remplacés par $-$ : $3-(+5)=3-5$ et $5+(-3)=5-3$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'لكل عددين نسبيين $a$ و $b$: $-(a+b)=-a-b$ و $-(a-b)=-a+b$. أي إذا سبقت الإشارة $-$ قوساً، نحذف القوس ونغير إشارات جميع حدوده.',
              fr: 'Pour tous relatifs $a$ et $b$ : $-(a+b)=-a-b$ et $-(a-b)=-a+b$. Quand un signe $-$ précède une parenthèse, on la supprime en changeant les signes de tous ses termes.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'احسب $-(1{,}2-3{,}4+5{,}6)$.', fr: 'Calculer $-(1{,}2-3{,}4+5{,}6)$.' },
            steps: [
              { ar: 'نغير الإشارات: $-1{,}2+3{,}4-5{,}6$.', fr: 'On change les signes : $-1{,}2+3{,}4-5{,}6$.' },
              { ar: '$=2{,}2-5{,}6=-3{,}4$.', fr: '$=2{,}2-5{,}6=-3{,}4$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نفس الإشارة: نجمع المسافات ونحتفظ بالإشارة.', fr: 'Même signe : on additionne les distances et on garde le signe.' },
      { ar: 'إشارتان مختلفتان: نطرح المسافات ونأخذ إشارة الأبعد عن الصفر.', fr: 'Signes contraires : on soustrait les distances et on prend le signe du plus éloigné de zéro.' },
      { ar: '$a-b=a+(-b)$.', fr: '$a-b=a+(-b)$.' },
      { ar: '$-(a+b)=-a-b$ و $-(a-b)=-a+b$.', fr: '$-(a+b)=-a-b$ et $-(a-b)=-a+b$.' },
    ],
  },
  exercises: [
    {
      id: '1ac-reladd-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'إشارتان مختلفتان', fr: 'Signes contraires' },
      statement: { ar: 'احسب $C=(-15{,}2)+(+12)$.', fr: 'Calculer $C=(-15{,}2)+(+12)$.' },
      question: { type: 'numeric', answer: -3.2, tolerance: 1e-9 },
      hints: [{ ar: 'المسافة الكبرى $15{,}2$ لعدد سالب.', fr: 'La plus grande distance, $15{,}2$, est celle d’un négatif.' }],
      solution: [
        { ar: '$15{,}2-12=3{,}2$، والإشارة إشارة $-15{,}2$.', fr: '$15{,}2-12=3{,}2$, avec le signe de $-15{,}2$.' },
        { ar: '$C=-3{,}2$.', fr: '$C=-3{,}2$.' },
      ],
    },
    {
      id: '1ac-reladd-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'درجة الحرارة', fr: 'Variation de température' },
      statement: { ar: 'كانت درجة الحرارة صباحاً $-6^\\circ$ ومساءً $-1^\\circ$. احسب التغير $S-M=(-1)-(-6)$.', fr: 'Le matin il fait $-6^\\circ$ et le soir $-1^\\circ$. Calculer la variation $S-M=(-1)-(-6)$.' },
      question: { type: 'numeric', answer: 5, unit: '°C' },
      hints: [{ ar: 'طرح $-6$ يعني إضافة $+6$.', fr: 'Soustraire $-6$, c’est ajouter $+6$.' }],
      solution: [{ ar: '$(-1)-(-6)=(-1)+(+6)=5$: ارتفعت الحرارة بـ $5^\\circ$.', fr: '$(-1)-(-6)=(-1)+(+6)=5$ : la température a augmenté de $5^\\circ$.' }],
    },
    {
      id: '1ac-reladd-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'حذف الأقواس', fr: 'Supprimer les parenthèses' },
      statement: { ar: 'احسب $P=18-(-24+7)$.', fr: 'Calculer $P=18-(-24+7)$.' },
      question: { type: 'numeric', answer: 35 },
      hints: [{ ar: '$-(-24+7)=24-7$.', fr: '$-(-24+7)=24-7$.' }],
      solution: [
        { ar: '$P=18+24-7$.', fr: '$P=18+24-7$.' },
        { ar: '$P=42-7=35$.', fr: '$P=42-7=35$.' },
      ],
    },
    {
      id: '1ac-reladd-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'arithmetic',
      title: { ar: 'مجموع جبري', fr: 'Somme algébrique' },
      statement: { ar: 'احسب $R=-(1+2{,}2)-(-3+4{,}4-5)$.', fr: 'Calculer $R=-(1+2{,}2)-(-3+4{,}4-5)$.' },
      question: { type: 'numeric', answer: 0.4, tolerance: 1e-9 },
      hints: [{ ar: 'احذف القوسين مع تغيير الإشارات، ثم اجمع الموجبة والسالبة.', fr: 'Supprime les parenthèses en changeant les signes, puis regroupe positifs et négatifs.' }],
      solution: [
        { ar: '$R=-1-2{,}2+3-4{,}4+5$.', fr: '$R=-1-2{,}2+3-4{,}4+5$.' },
        { ar: 'الموجبة: $3+5=8$. السالبة: $-1-2{,}2-4{,}4=-7{,}6$.', fr: 'Positifs : $3+5=8$. Négatifs : $-1-2{,}2-4{,}4=-7{,}6$.' },
        { ar: '$R=8-7{,}6=0{,}4$.', fr: '$R=8-7{,}6=0{,}4$.' },
      ],
    },
  ],
};
