import type { Lesson } from '@/types';

export const lesson1acRelative: Lesson = {
  id: '1ac-relative-numbers',
  levelId: '1ac',
  unitId: 'relative',
  title: { ar: 'الأعداد العشرية النسبية: الجمع والطرح', fr: 'Nombres décimaux relatifs : addition et soustraction' },
  summary: {
    ar: 'التعرف على الأعداد الموجبة والسالبة، تمثيلها على مستقيم مدرج، مقارنتها، وجمعها وطرحها.',
    fr: 'Reconnaître les nombres positifs et négatifs, les placer sur une droite graduée, les comparer, les additionner et les soustraire.',
  },
  objectives: [
    { ar: 'تحديد إشارة عدد نسبي والمسافة بينه وبين الصفر.', fr: "Identifier le signe d'un nombre relatif et sa distance à zéro." },
    { ar: 'تمثيل أعداد نسبية على مستقيم مدرج.', fr: 'Placer des nombres relatifs sur une droite graduée.' },
    { ar: 'مقارنة عددين نسبيين.', fr: 'Comparer deux nombres relatifs.' },
    { ar: 'جمع وطرح أعداد عشرية نسبية.', fr: 'Additionner et soustraire des nombres décimaux relatifs.' },
  ],
  durationMinutes: 35,
  reviewed: false,
  featured: true,
  keywords: ['relatif', 'négatif', 'positif', 'opposé', 'droite graduée', 'نسبي', 'سالب', 'موجب', 'مقابل'],
  sections: [
    {
      id: 'definitions',
      title: { ar: 'تعاريف', fr: 'Définitions' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'العدد العشري النسبي هو عدد مكوَّن من **إشارة** ($+$ أو $-$) ومن **مسافة إلى الصفر**.\n\nالأعداد ذات الإشارة $+$ أعداد **موجبة**، والأعداد ذات الإشارة $-$ أعداد **سالبة**. العدد $0$ موجب وسالب في نفس الوقت.',
            fr: 'Un nombre décimal relatif est formé d’un **signe** ($+$ ou $-$) et d’une **distance à zéro**.\n\nLes nombres de signe $+$ sont **positifs**, ceux de signe $-$ sont **négatifs**. Le nombre $0$ est à la fois positif et négatif.',
          },
        },
        {
          kind: 'definition',
          title: { ar: 'العددان المتقابلان', fr: 'Nombres opposés' },
          content: {
            ar: 'نقول إن عددين نسبيين **متقابلان** إذا كانت لهما نفس المسافة إلى الصفر وإشارتان مختلفتان. مثال: $-3{,}5$ و $+3{,}5$ متقابلان.',
            fr: 'Deux nombres relatifs sont **opposés** s’ils ont la même distance à zéro et des signes contraires. Exemple : $-3{,}5$ et $+3{,}5$ sont opposés.',
          },
        },
        {
          kind: 'geometry',
          x: [-6, 6],
          y: [-1.5, 1.5],
          segments: [{ from: [-5.5, 0], to: [5.5, 0] }],
          points: [
            { x: -3, y: 0, label: 'A(-3)' },
            { x: 0, y: 0, label: 'O(0)' },
            { x: 2, y: 0, label: 'B(+2)' },
            { x: 4.5, y: 0, label: 'C(+4,5)' },
          ],
          caption: {
            ar: 'مستقيم مدرج: كل نقطة تمثل عدداً نسبياً يسمى أفصولها.',
            fr: 'Droite graduée : chaque point est repéré par un nombre relatif appelé son abscisse.',
          },
        },
      ],
    },
    {
      id: 'comparison',
      title: { ar: 'مقارنة الأعداد النسبية', fr: 'Comparaison des nombres relatifs' },
      blocks: [
        {
          kind: 'rule',
          content: {
            ar: '• كل عدد موجب أكبر من كل عدد سالب.\n\n• من بين عددين موجبين، الأكبر هو الذي مسافته إلى الصفر أكبر.\n\n• من بين عددين سالبين، الأكبر هو الذي مسافته إلى الصفر **أصغر**.',
            fr: '• Tout nombre positif est supérieur à tout nombre négatif.\n\n• Entre deux nombres positifs, le plus grand est celui qui a la plus grande distance à zéro.\n\n• Entre deux nombres négatifs, le plus grand est celui qui a la **plus petite** distance à zéro.',
          },
        },
        {
          kind: 'example',
          statement: { ar: 'قارن $-7$ و $-2{,}5$.', fr: 'Comparer $-7$ et $-2{,}5$.' },
          steps: [
            { ar: 'العددان سالبان.', fr: 'Les deux nombres sont négatifs.' },
            { ar: 'المسافتان إلى الصفر هما $7$ و $2{,}5$، و $2{,}5 < 7$.', fr: 'Leurs distances à zéro sont $7$ et $2{,}5$, et $2{,}5 < 7$.' },
            { ar: 'إذن $-2{,}5 > -7$.', fr: 'Donc $-2{,}5 > -7$.' },
          ],
        },
      ],
    },
    {
      id: 'addition',
      title: { ar: 'جمع عددين نسبيين', fr: 'Addition de deux nombres relatifs' },
      blocks: [
        {
          kind: 'rule',
          title: { ar: 'عددان لهما نفس الإشارة', fr: 'Deux nombres de même signe' },
          content: {
            ar: 'نحتفظ بالإشارة المشتركة ونجمع المسافتين إلى الصفر.',
            fr: 'On garde le signe commun et on additionne les distances à zéro.',
          },
        },
        {
          kind: 'rule',
          title: { ar: 'عددان مختلفا الإشارة', fr: 'Deux nombres de signes contraires' },
          content: {
            ar: 'نأخذ إشارة العدد الذي مسافته إلى الصفر أكبر، ونطرح المسافة الصغرى من الكبرى.',
            fr: 'On prend le signe du nombre qui a la plus grande distance à zéro et on soustrait la plus petite distance de la plus grande.',
          },
        },
        { kind: 'formula', tex: '(-7)+(-5)=-12 \\qquad (+9)+(-14)=-5 \\qquad (-3)+(+3)=0' },
        {
          kind: 'remark',
          content: {
            ar: 'مجموع عددين متقابلين يساوي $0$.',
            fr: 'La somme de deux nombres opposés est égale à $0$.',
          },
        },
      ],
    },
    {
      id: 'subtraction',
      title: { ar: 'طرح عددين نسبيين', fr: 'Soustraction de deux nombres relatifs' },
      blocks: [
        {
          kind: 'rule',
          content: {
            ar: 'لطرح عدد نسبي، نضيف مقابله:',
            fr: 'Soustraire un nombre relatif revient à ajouter son opposé :',
          },
        },
        { kind: 'formula', tex: 'a-b=a+(-b)' },
        {
          kind: 'example',
          statement: { ar: 'احسب $A=(-3{,}5)-(-8)$.', fr: 'Calculer $A=(-3{,}5)-(-8)$.' },
          steps: [
            { ar: 'مقابل $-8$ هو $+8$، إذن $A=(-3{,}5)+(+8)$.', fr: "L'opposé de $-8$ est $+8$, donc $A=(-3{,}5)+(+8)$." },
            {
              ar: 'العددان مختلفا الإشارة: $8-3{,}5=4{,}5$ والإشارة إشارة $+8$.',
              fr: 'Signes contraires : $8-3{,}5=4{,}5$ et le signe est celui de $+8$.',
            },
            { ar: 'إذن $A=+4{,}5$.', fr: 'Donc $A=+4{,}5$.' },
          ],
        },
        {
          kind: 'example',
          title: { ar: 'مجموع جبري', fr: 'Somme algébrique' },
          statement: { ar: 'احسب $B=-4+7-10+2$.', fr: 'Calculer $B=-4+7-10+2$.' },
          steps: [
            { ar: 'نجمع الأعداد الموجبة: $7+2=9$.', fr: 'On regroupe les termes positifs : $7+2=9$.' },
            { ar: 'نجمع الأعداد السالبة: $-4-10=-14$.', fr: 'On regroupe les termes négatifs : $-4-10=-14$.' },
            { ar: '$B=9-14=-5$.', fr: '$B=9-14=-5$.' },
          ],
        },
      ],
    },
  ],
  recap: [
    { ar: 'عدد نسبي = إشارة + مسافة إلى الصفر.', fr: 'Nombre relatif = signe + distance à zéro.' },
    { ar: 'بين عددين سالبين، الأكبر هو الأقرب إلى الصفر.', fr: 'Entre deux négatifs, le plus grand est le plus proche de zéro.' },
    { ar: 'نفس الإشارة: نجمع المسافات ونحتفظ بالإشارة.', fr: 'Même signe : on additionne les distances et on garde le signe.' },
    { ar: 'إشارتان مختلفتان: نطرح المسافات ونأخذ إشارة الأبعد عن الصفر.', fr: 'Signes contraires : on soustrait les distances et on prend le signe du plus éloigné de zéro.' },
    { ar: '$a-b=a+(-b)$.', fr: '$a-b=a+(-b)$.' },
  ],
};
