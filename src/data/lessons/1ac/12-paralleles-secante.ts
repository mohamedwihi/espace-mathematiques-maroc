import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-paralleles-secante';

export const parallelesSecante: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'parallels-secant',
    title: { ar: 'مستقيمان متوازيان وقاطع', fr: 'Deux parallèles et une sécante' },
    summary: {
      ar: 'الزوايا المتبادلة داخلياً والزوايا المتناظرة، خاصياتها المباشرة والعكسية، ومجموع زوايا مثلث.',
      fr: 'Angles alternes-internes et correspondants, propriétés directes et réciproques, somme des angles d’un triangle.',
    },
    objectives: [
      { ar: 'التعرف على الزوايا المتبادلة داخلياً والمتناظرة.', fr: 'Reconnaître des angles alternes-internes et correspondants.' },
      { ar: 'استعمال خاصيات الزوايا المكونة من مستقيمين متوازيين وقاطع.', fr: 'Utiliser les propriétés des angles formés par deux parallèles et une sécante.' },
      { ar: 'إثبات توازي مستقيمين.', fr: 'Démontrer que deux droites sont parallèles.' },
      { ar: 'برهنة أن مجموع زوايا مثلث $180^\\circ$.', fr: 'Démontrer que la somme des angles d’un triangle vaut $180^\\circ$.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['alternes-internes', 'correspondants', 'sécante', 'parallèles', 'somme des angles', 'متبادلتان داخلياً', 'متناظرتان', 'قاطع', 'متوازيان'],
    sections: [
      {
        id: 'vocabulaire',
        title: { ar: 'زوايا مكونة من مستقيمين وقاطع', fr: 'Angles formés par deux droites et une sécante' },
        blocks: [
          {
            kind: 'geometry',
            x: [-5, 5],
            y: [-3, 3.2],
            segments: [
              { from: [-4.8, 1.5], to: [4.8, 1.5] },
              { from: [-4.8, -1.5], to: [4.8, -1.5] },
              { from: [-1.6, -3], to: [1.6, 3.2] },
            ],
            points: [
              { x: -3.8, y: 1.5, label: 'A' },
              { x: 3.8, y: 1.5, label: 'B' },
              { x: -3.8, y: -1.5, label: 'C' },
              { x: 3.8, y: -1.5, label: 'D' },
              { x: 0.775, y: 1.5, label: 'I' },
              { x: -0.775, y: -1.5, label: 'J' },
              { x: 1.45, y: 2.9, label: 'E' },
              { x: -1.45, y: -2.8, label: 'F' },
            ],
            caption: {
              ar: 'المستقيم $(EF)$ يقطع $(AB)$ في $I$ و $(CD)$ في $J$.',
              fr: 'La sécante $(EF)$ coupe $(AB)$ en $I$ et $(CD)$ en $J$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'زاويتان متبادلتان داخلياً', fr: 'Angles alternes-internes' },
            content: {
              ar: 'زاويتان **متبادلتان داخلياً** إذا كانتا: من جهتين مختلفتين بالنسبة للقاطع، وداخل الشريط المحدود بالمستقيمين، وليس لهما نفس الرأس. مثال: $A\\widehat{I}J$ و $I\\widehat{J}D$.',
              fr: 'Deux angles sont **alternes-internes** s’ils sont de part et d’autre de la sécante, à l’intérieur de la bande délimitée par les deux droites, et n’ont pas le même sommet. Exemple : $A\\widehat{I}J$ et $I\\widehat{J}D$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'زاويتان متناظرتان', fr: 'Angles correspondants' },
            content: {
              ar: 'زاويتان **متناظرتان** إذا كانتا: من نفس الجهة بالنسبة للقاطع، إحداهما داخل الشريط والأخرى خارجه، وليس لهما نفس الرأس. مثال: $E\\widehat{I}A$ و $I\\widehat{J}C$.',
              fr: 'Deux angles sont **correspondants** s’ils sont du même côté de la sécante, l’un à l’intérieur de la bande et l’autre à l’extérieur, et n’ont pas le même sommet. Exemple : $E\\widehat{I}A$ et $I\\widehat{J}C$.',
            },
          },
        ],
      },
      {
        id: 'proprietes',
        title: { ar: 'حالة مستقيمين متوازيين', fr: 'Cas de deux droites parallèles' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'الخاصية المباشرة', fr: 'Propriété directe' },
            content: {
              ar: 'إذا كان مستقيمان **متوازيين**، فإن كل قاطع لهما يكوّن معهما زوايا متبادلة داخلياً **متقايسة**، وزوايا متناظرة **متقايسة**.',
              fr: 'Si deux droites sont **parallèles**, toute sécante forme avec elles des angles alternes-internes **de même mesure** et des angles correspondants **de même mesure**.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية العكسية', fr: 'Propriété réciproque' },
            content: {
              ar: 'إذا كوّن قاطع مع مستقيمين زاويتين متبادلتين داخلياً متقايستين (أو زاويتين متناظرتين متقايستين)، فإن المستقيمين **متوازيان**.',
              fr: 'Si une sécante forme avec deux droites deux angles alternes-internes de même mesure (ou deux angles correspondants de même mesure), alors ces droites sont **parallèles**.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: '$(CD)\\parallel(EF)$ والقاطع $(AB)$ مع $A\\in(CD)$ و $B\\in(EF)$، و $C\\widehat{A}B=65^\\circ$. احسب $A\\widehat{B}E$.',
              fr: '$(CD)\\parallel(EF)$, la sécante $(AB)$ avec $A\\in(CD)$, $B\\in(EF)$ et $C\\widehat{A}B=65^\\circ$. Calculer $A\\widehat{B}E$.',
            },
            steps: [
              { ar: 'الزاويتان $C\\widehat{A}B$ و $A\\widehat{B}E$ متبادلتان داخلياً.', fr: 'Les angles $C\\widehat{A}B$ et $A\\widehat{B}E$ sont alternes-internes.' },
              { ar: 'المستقيمان متوازيان، إذن $A\\widehat{B}E=C\\widehat{A}B=65^\\circ$.', fr: 'Les droites sont parallèles, donc $A\\widehat{B}E=C\\widehat{A}B=65^\\circ$.' },
            ],
          },
        ],
      },
      {
        id: 'demonstrations',
        title: { ar: 'برهنة خاصيات', fr: 'Démonstration de propriétés' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• إذا كان مستقيمان متوازيين، فكل مستقيم عمودي على أحدهما عمودي على الآخر (زاويتان متناظرتان تساويان $90^\\circ$).\n\n• إذا كان مستقيمان عموديين على نفس المستقيم فإنهما متوازيان (زاويتان متناظرتان متقايستان).',
              fr: '• Si deux droites sont parallèles, toute perpendiculaire à l’une est perpendiculaire à l’autre (deux angles correspondants valent $90^\\circ$).\n\n• Deux droites perpendiculaires à une même droite sont parallèles (angles correspondants égaux).',
            },
          },
          {
            kind: 'theorem',
            title: { ar: 'مجموع زوايا مثلث', fr: 'Somme des angles d’un triangle' },
            content: {
              ar: 'مجموع قياسات زوايا مثلث يساوي $180^\\circ$: $\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ$.',
              fr: 'La somme des mesures des angles d’un triangle vaut $180^\\circ$ : $\\widehat{A}+\\widehat{B}+\\widehat{C}=180^\\circ$.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'البرهان', fr: 'Démonstration' },
            statement: {
              ar: 'ليكن $ABC$ مثلثاً، و $(DF)$ المستقيم المار من $A$ والموازي لـ $(BC)$.',
              fr: 'Soit $ABC$ un triangle et $(DF)$ la parallèle à $(BC)$ passant par $A$.',
            },
            steps: [
              { ar: '$D\\widehat{A}B$ و $A\\widehat{B}C$ متبادلتان داخلياً بالنسبة للمتوازيين $(DF)$ و $(BC)$، إذن $D\\widehat{A}B=A\\widehat{B}C$.', fr: '$D\\widehat{A}B$ et $A\\widehat{B}C$ sont alternes-internes pour les parallèles $(DF)$ et $(BC)$, donc $D\\widehat{A}B=A\\widehat{B}C$.' },
              { ar: 'بنفس الطريقة: $F\\widehat{A}C=A\\widehat{C}B$.', fr: 'De même : $F\\widehat{A}C=A\\widehat{C}B$.' },
              { ar: 'الزاوية $D\\widehat{A}F$ مستقيمية: $D\\widehat{A}B+B\\widehat{A}C+C\\widehat{A}F=180^\\circ$.', fr: 'L’angle $D\\widehat{A}F$ est plat : $D\\widehat{A}B+B\\widehat{A}C+C\\widehat{A}F=180^\\circ$.' },
              { ar: 'إذن $A\\widehat{B}C+B\\widehat{A}C+A\\widehat{C}B=180^\\circ$.', fr: 'Donc $A\\widehat{B}C+B\\widehat{A}C+A\\widehat{C}B=180^\\circ$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'متبادلتان داخلياً: من جهتين مختلفتين للقاطع وداخل الشريط.', fr: 'Alternes-internes : de part et d’autre de la sécante, dans la bande.' },
      { ar: 'متناظرتان: من نفس جهة القاطع، واحدة داخل الشريط والأخرى خارجه.', fr: 'Correspondants : même côté de la sécante, l’un dans la bande, l’autre dehors.' },
      { ar: 'مستقيمان متوازيان ⇔ زوايا متبادلة داخلياً (أو متناظرة) متقايسة.', fr: 'Droites parallèles ⇔ angles alternes-internes (ou correspondants) de même mesure.' },
      { ar: 'مجموع زوايا مثلث $180^\\circ$.', fr: 'Somme des angles d’un triangle : $180^\\circ$.' },
    ],
  },
  exercises: [
    {
      id: '1ac-parsec-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'نوع زاويتين', fr: 'Nature de deux angles' },
      statement: { ar: 'زاويتان من نفس جهة القاطع، إحداهما داخل الشريط والأخرى خارجه. هما زاويتان:', fr: 'Deux angles sont du même côté de la sécante, l’un dans la bande et l’autre à l’extérieur. Ils sont :' },
      question: {
        type: 'mcq',
        options: [{ ar: 'متناظرتان', fr: 'Correspondants' }, { ar: 'متبادلتان داخلياً', fr: 'Alternes-internes' }, { ar: 'متقابلتان بالرأس', fr: 'Opposés par le sommet' }],
        correct: 0,
      },
      hints: [{ ar: 'راجع تعريف الزاويتين المتناظرتين.', fr: 'Revois la définition des angles correspondants.' }],
      solution: [{ ar: 'نفس جهة القاطع + واحدة داخل الشريط والأخرى خارجه: زاويتان متناظرتان.', fr: 'Même côté de la sécante, une dans la bande et l’autre dehors : angles correspondants.' }],
    },
    {
      id: '1ac-parsec-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'زاويتان متبادلتان داخلياً', fr: 'Angles alternes-internes' },
      statement: {
        ar: '$(CD)\\parallel(EF)$ و $C\\widehat{A}B=65^\\circ$ حيث $C\\widehat{A}B$ و $A\\widehat{B}E$ متبادلتان داخلياً. احسب $A\\widehat{B}E$ بالدرجة.',
        fr: '$(CD)\\parallel(EF)$ et $C\\widehat{A}B=65^\\circ$, où $C\\widehat{A}B$ et $A\\widehat{B}E$ sont alternes-internes. Calculer $A\\widehat{B}E$ en degrés.',
      },
      question: { type: 'numeric', answer: 65, unit: '°' },
      hints: [{ ar: 'المستقيمان متوازيان.', fr: 'Les droites sont parallèles.' }],
      solution: [{ ar: 'زاويتان متبادلتان داخلياً مكونتان من متوازيين وقاطع متقايستان: $A\\widehat{B}E=65^\\circ$.', fr: 'Des angles alternes-internes formés par deux parallèles et une sécante sont égaux : $A\\widehat{B}E=65^\\circ$.' }],
    },
    {
      id: '1ac-parsec-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'الزاوية الثالثة', fr: 'Le troisième angle' },
      statement: { ar: 'في مثلث $ABC$: $\\widehat{B}=45^\\circ$ و $\\widehat{C}=33^\\circ$. احسب $\\widehat{A}$ بالدرجة.', fr: 'Dans un triangle $ABC$ : $\\widehat{B}=45^\\circ$ et $\\widehat{C}=33^\\circ$. Calculer $\\widehat{A}$ en degrés.' },
      question: { type: 'numeric', answer: 102, unit: '°' },
      hints: [{ ar: 'مجموع زوايا مثلث $180^\\circ$.', fr: 'La somme des angles d’un triangle vaut $180^\\circ$.' }],
      solution: [{ ar: '$\\widehat{A}=180^\\circ-45^\\circ-33^\\circ=102^\\circ$.', fr: '$\\widehat{A}=180^\\circ-45^\\circ-33^\\circ=102^\\circ$.' }],
    },
    {
      id: '1ac-parsec-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'إثبات التوازي', fr: 'Démontrer le parallélisme' },
      statement: {
        ar: 'القاطع $(GB)$ يقطع $(CD)$ في $A$ و $(EF)$ في $B$، حيث $G$ فوق $A$. لدينا $C\\widehat{A}G=103^\\circ$ و $A\\widehat{B}E=77^\\circ$ ($C$ و $F$ على اليسار، $D$ و $E$ على اليمين). بيّن أن $(CD)\\parallel(EF)$.',
        fr: 'La sécante $(GB)$ coupe $(CD)$ en $A$ et $(EF)$ en $B$, $G$ étant au-dessus de $A$. On a $C\\widehat{A}G=103^\\circ$ et $A\\widehat{B}E=77^\\circ$ ($C$ et $F$ à gauche, $D$ et $E$ à droite). Montrer que $(CD)\\parallel(EF)$.',
      },
      question: { type: 'open' },
      hints: [
        { ar: '$C\\widehat{A}G$ و $G\\widehat{A}D$ متكاملتان.', fr: '$C\\widehat{A}G$ et $G\\widehat{A}D$ sont supplémentaires.' },
        { ar: 'قارن $G\\widehat{A}D$ مع $A\\widehat{B}E$: ما نوعهما؟', fr: 'Compare $G\\widehat{A}D$ et $A\\widehat{B}E$ : de quel type sont-ils ?' },
      ],
      solution: [
        { ar: '$C\\widehat{A}D$ زاوية مستقيمية، إذن $G\\widehat{A}D=180^\\circ-103^\\circ=77^\\circ$.', fr: '$C\\widehat{A}D$ est plat, donc $G\\widehat{A}D=180^\\circ-103^\\circ=77^\\circ$.' },
        { ar: '$G\\widehat{A}D$ و $A\\widehat{B}E$ متناظرتان (نفس الجهة، واحدة خارج الشريط والأخرى داخله) ومتقايستان ($77^\\circ$).', fr: '$G\\widehat{A}D$ et $A\\widehat{B}E$ sont correspondants (même côté, l’un hors de la bande, l’autre dedans) et de même mesure ($77^\\circ$).' },
        { ar: 'حسب الخاصية العكسية: $(CD)\\parallel(EF)$.', fr: 'D’après la propriété réciproque : $(CD)\\parallel(EF)$.' },
      ],
    },
  ],
};
