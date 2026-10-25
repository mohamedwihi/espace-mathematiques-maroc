import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-parallelogramme';

export const parallelogramme: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'parallelogram',
    title: { ar: 'متوازي الأضلاع', fr: 'Le parallélogramme' },
    summary: {
      ar: 'تعريف متوازي الأضلاع، خاصيات قطريه وأضلاعه وزواياه (المباشرة والعكسية)، وارتفاعه.',
      fr: 'Définition du parallélogramme, propriétés des diagonales, des côtés et des angles (directes et réciproques), hauteur.',
    },
    objectives: [
      { ar: 'رسم متوازي أضلاع.', fr: 'Tracer un parallélogramme.' },
      { ar: 'معرفة واستعمال خاصيات القطرين والأضلاع المتقابلة والزوايا المتقابلة.', fr: 'Connaître et utiliser les propriétés des diagonales, des côtés et des angles opposés.' },
      { ar: 'إثبات أن رباعياً متوازي أضلاع.', fr: 'Démontrer qu’un quadrilatère est un parallélogramme.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['parallélogramme', 'diagonales', 'côtés opposés', 'angles opposés', 'centre', 'hauteur', 'متوازي الأضلاع', 'قطران', 'مركز'],
    sections: [
      {
        id: 'definition',
        title: { ar: 'تعريف', fr: 'Définition' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'متوازي الأضلاع رباعي **أضلاعه المتقابلة متوازية**: $ABCD$ متوازي أضلاع إذا كان $(AB)\\parallel(DC)$ و $(AD)\\parallel(BC)$.',
              fr: 'Un parallélogramme est un quadrilatère dont **les côtés opposés sont parallèles** : $ABCD$ est un parallélogramme si $(AB)\\parallel(DC)$ et $(AD)\\parallel(BC)$.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.8, 7.2],
            y: [-0.8, 3.6],
            polygons: [{ points: [[0, 0], [5, 0], [6.5, 3], [1.5, 3]], color: 'brand' }],
            segments: [
              { from: [0, 0], to: [6.5, 3], dashed: true },
              { from: [5, 0], to: [1.5, 3], dashed: true },
            ],
            points: [
              { x: 0, y: 0, label: 'D' },
              { x: 5, y: 0, label: 'C' },
              { x: 6.5, y: 3, label: 'B' },
              { x: 1.5, y: 3, label: 'A' },
              { x: 3.25, y: 1.5, label: 'O' },
            ],
            caption: {
              ar: 'القطران $[AC]$ و $[BD]$ يتقاطعان في منتصفهما $O$، مركز متوازي الأضلاع (ومركز تماثله).',
              fr: 'Les diagonales $[AC]$ et $[BD]$ se coupent en leur milieu $O$, centre du parallélogramme (et centre de symétrie).',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'عند تسمية متوازي أضلاع، نتبع الرؤوس بالترتيب على محيطه: $ABCD$ يعني أن $[AC]$ و $[BD]$ هما القطران.',
              fr: 'Pour nommer un parallélogramme, on suit les sommets dans l’ordre du contour : $ABCD$ signifie que $[AC]$ et $[BD]$ sont les diagonales.',
            },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'الخاصيات', fr: 'Propriétés' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'القطران', fr: 'Diagonales' },
            content: {
              ar: '• إذا كان رباعي متوازي أضلاع فإن قطريه **يتقاطعان في منتصفهما**.\n\n• **عكسياً**: إذا كان قطرا رباعي يتقاطعان في منتصفهما فهو متوازي أضلاع.',
              fr: '• Si un quadrilatère est un parallélogramme, ses diagonales **se coupent en leur milieu**.\n\n• **Réciproquement** : si les diagonales d’un quadrilatère se coupent en leur milieu, c’est un parallélogramme.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الأضلاع', fr: 'Côtés' },
            content: {
              ar: '• في متوازي أضلاع، الأضلاع المتقابلة **متقايسة**: $AB=DC$ و $AD=BC$.\n\n• **عكسياً**: رباعي غير متقاطع أضلاعه المتقابلة متقايسة هو متوازي أضلاع.',
              fr: '• Dans un parallélogramme, les côtés opposés ont **la même longueur** : $AB=DC$ et $AD=BC$.\n\n• **Réciproquement** : un quadrilatère non croisé dont les côtés opposés ont la même longueur est un parallélogramme.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الزوايا', fr: 'Angles' },
            content: {
              ar: '• في متوازي أضلاع، الزوايا المتقابلة **متقايسة**، والزوايا المتتالية **متكاملة** (مجموعها $180^\\circ$).\n\n• **عكسياً**: رباعي زواياه المتقابلة متقايسة هو متوازي أضلاع.',
              fr: '• Dans un parallélogramme, les angles opposés ont **la même mesure** et deux angles consécutifs sont **supplémentaires** (somme $180^\\circ$).\n\n• **Réciproquement** : un quadrilatère dont les angles opposés sont égaux est un parallélogramme.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'الارتفاع', fr: 'Hauteur' },
            content: {
              ar: 'ارتفاع متوازي أضلاع هو مستقيم يمر من رأس ويكون عمودياً على الضلع المقابل له.',
              fr: 'Une hauteur d’un parallélogramme est une droite passant par un sommet et perpendiculaire au côté opposé.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: '$ABC$ مثلث و $I$ منتصف $[AC]$. $D$ مماثلة $B$ بالنسبة لـ $I$. بيّن أن $ABCD$ متوازي أضلاع.',
              fr: '$ABC$ est un triangle et $I$ le milieu de $[AC]$. $D$ est le symétrique de $B$ par rapport à $I$. Montrer que $ABCD$ est un parallélogramme.',
            },
            steps: [
              { ar: '$D$ مماثلة $B$ بالنسبة لـ $I$، إذن $I$ منتصف $[BD]$.', fr: '$D$ est le symétrique de $B$ par rapport à $I$, donc $I$ est le milieu de $[BD]$.' },
              { ar: '$I$ منتصف $[AC]$ أيضاً: القطران $[AC]$ و $[BD]$ يتقاطعان في منتصفهما.', fr: '$I$ est aussi le milieu de $[AC]$ : les diagonales $[AC]$ et $[BD]$ se coupent en leur milieu.' },
              { ar: 'إذن $ABCD$ متوازي أضلاع.', fr: 'Donc $ABCD$ est un parallélogramme.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'متوازي الأضلاع: الأضلاع المتقابلة متوازية.', fr: 'Parallélogramme : côtés opposés parallèles.' },
      { ar: 'القطران يتقاطعان في منتصفهما (المركز).', fr: 'Les diagonales se coupent en leur milieu (le centre).' },
      { ar: 'الأضلاع المتقابلة متقايسة، والزوايا المتقابلة متقايسة.', fr: 'Côtés opposés de même longueur, angles opposés de même mesure.' },
      { ar: 'زاويتان متتاليتان متكاملتان.', fr: 'Deux angles consécutifs sont supplémentaires.' },
    ],
  },
  exercises: [
    {
      id: '1ac-para-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'طول ضلع', fr: 'Longueur d’un côté' },
      statement: { ar: '$ABCD$ متوازي أضلاع حيث $AD=5\\,\\text{cm}$ و $DC=7\\,\\text{cm}$. احسب $AB$ بـ cm.', fr: '$ABCD$ est un parallélogramme avec $AD=5\\,\\text{cm}$ et $DC=7\\,\\text{cm}$. Calculer $AB$ en cm.' },
      question: { type: 'numeric', answer: 7, unit: 'cm' },
      hints: [{ ar: '$[AB]$ و $[DC]$ ضلعان متقابلان.', fr: '$[AB]$ et $[DC]$ sont des côtés opposés.' }],
      solution: [{ ar: 'الأضلاع المتقابلة متقايسة: $AB=DC=7\\,\\text{cm}$ (و $BC=AD=5\\,\\text{cm}$).', fr: 'Les côtés opposés ont la même longueur : $AB=DC=7\\,\\text{cm}$ (et $BC=AD=5\\,\\text{cm}$).' }],
    },
    {
      id: '1ac-para-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'القطران', fr: 'Les diagonales' },
      statement: { ar: 'قطرا متوازي الأضلاع:', fr: 'Les diagonales d’un parallélogramme :' },
      question: {
        type: 'mcq',
        options: [
          { ar: 'يتقاطعان في منتصفهما', fr: 'se coupent en leur milieu' },
          { ar: 'متقايسان دائماً', fr: 'ont toujours la même longueur' },
          { ar: 'متعامدان دائماً', fr: 'sont toujours perpendiculaires' },
        ],
        correct: 0,
      },
      hints: [{ ar: 'فكّر في متوازي أضلاع "مائل" عادي.', fr: 'Pense à un parallélogramme « penché » quelconque.' }],
      solution: [{ ar: 'في كل متوازي أضلاع يتقاطع القطران في منتصفهما. التقايس والتعامد خاصيات للمستطيل والمعين فقط.', fr: 'Dans tout parallélogramme, les diagonales se coupent en leur milieu. Même longueur ou perpendicularité ne valent que pour le rectangle ou le losange.' }],
    },
    {
      id: '1ac-para-03',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'حساب زاوية', fr: 'Calcul d’angle' },
      statement: { ar: '$ABCD$ متوازي أضلاع حيث $D\\widehat{A}B=98^\\circ$ و $A\\widehat{B}D=16{,}95^\\circ$. احسب $C\\widehat{B}D$ بالدرجة.', fr: '$ABCD$ est un parallélogramme avec $D\\widehat{A}B=98^\\circ$ et $A\\widehat{B}D=16{,}95^\\circ$. Calculer $C\\widehat{B}D$ en degrés.' },
      question: { type: 'numeric', answer: 65.05, tolerance: 1e-9, unit: '°' },
      hints: [
        { ar: '$D\\widehat{A}B$ و $A\\widehat{B}C$ زاويتان متتاليتان.', fr: '$D\\widehat{A}B$ et $A\\widehat{B}C$ sont consécutifs.' },
        { ar: '$C\\widehat{B}D=A\\widehat{B}C-A\\widehat{B}D$.', fr: '$C\\widehat{B}D=A\\widehat{B}C-A\\widehat{B}D$.' },
      ],
      solution: [
        { ar: 'الزاويتان المتتاليتان متكاملتان: $A\\widehat{B}C=180^\\circ-98^\\circ=82^\\circ$.', fr: 'Deux angles consécutifs sont supplémentaires : $A\\widehat{B}C=180^\\circ-98^\\circ=82^\\circ$.' },
        { ar: '$C\\widehat{B}D=82^\\circ-16{,}95^\\circ=65{,}05^\\circ$.', fr: '$C\\widehat{B}D=82^\\circ-16{,}95^\\circ=65{,}05^\\circ$.' },
      ],
    },
    {
      id: '1ac-para-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'إثبات', fr: 'Démonstration' },
      statement: {
        ar: '$A$ و $B$ و $O$ نقط غير مستقيمية. $C$ و $D$ مماثلتا $A$ و $B$ بالنسبة لـ $O$. ما طبيعة الرباعي $ABCD$؟ علّل.',
        fr: '$A$, $B$, $O$ sont non alignés. $C$ et $D$ sont les symétriques de $A$ et $B$ par rapport à $O$. Quelle est la nature de $ABCD$ ? Justifier.',
      },
      question: { type: 'open' },
      hints: [{ ar: 'ماذا تمثل $O$ بالنسبة للقطعتين $[AC]$ و $[BD]$؟', fr: 'Que représente $O$ pour les segments $[AC]$ et $[BD]$ ?' }],
      solution: [
        { ar: '$C$ مماثلة $A$: $O$ منتصف $[AC]$. و $D$ مماثلة $B$: $O$ منتصف $[BD]$.', fr: '$C$ symétrique de $A$ : $O$ est le milieu de $[AC]$. $D$ symétrique de $B$ : $O$ est le milieu de $[BD]$.' },
        { ar: 'قطرا الرباعي $ABCD$ يتقاطعان في منتصفهما، إذن $ABCD$ متوازي أضلاع.', fr: 'Les diagonales de $ABCD$ se coupent en leur milieu, donc $ABCD$ est un parallélogramme.' },
      ],
    },
  ],
};
