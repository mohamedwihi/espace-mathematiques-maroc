import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-quadrilateres';

export const quadrilateres: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'quadrilaterals',
    title: { ar: 'الرباعيات الخاصة', fr: 'Quadrilatères particuliers' },
    summary: {
      ar: 'المستطيل والمعين والمربع: التعاريف، خاصيات القطرين، طرق الإثبات، ومحاور ومراكز التماثل.',
      fr: 'Rectangle, losange et carré : définitions, propriétés des diagonales, méthodes de démonstration, axes et centres de symétrie.',
    },
    objectives: [
      { ar: 'التعرف على المستطيل والمعين والمربع وخاصياتها.', fr: 'Reconnaître le rectangle, le losange, le carré et leurs propriétés.' },
      { ar: 'إنشاء رباعي خاص.', fr: 'Construire un quadrilatère particulier.' },
      { ar: 'إثبات أن رباعياً مستطيل أو معين أو مربع.', fr: 'Démontrer qu’un quadrilatère est un rectangle, un losange ou un carré.' },
    ],
    durationMinutes: 30,
    reviewed: false,
    source: teacherSource,
    keywords: ['rectangle', 'losange', 'carré', 'quadrilatère', 'diagonales', 'axes de symétrie', 'مستطيل', 'معين', 'مربع', 'رباعي'],
    sections: [
      {
        id: 'rectangle',
        title: { ar: 'المستطيل', fr: 'Le rectangle' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'المستطيل رباعي **زواياه الأربع قائمة**. كل مستطيل متوازي أضلاع، فله جميع خاصيات متوازي الأضلاع.',
              fr: 'Un rectangle est un quadrilatère qui a **quatre angles droits**. Tout rectangle est un parallélogramme et en a toutes les propriétés.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• قطرا المستطيل **متقايسان**: $AC=BD$ ومنه $OA=OB=OC=OD$.\n\n• متوازي أضلاع قطراه متقايسان هو مستطيل.\n\n• متوازي أضلاع له زاوية قائمة هو مستطيل.\n\n• للمستطيل محورا تماثل (واسطا ضلعين متقابلين) ومركز تماثل هو نقطة تقاطع قطريه.',
              fr: '• Les diagonales d’un rectangle ont **la même longueur** : $AC=BD$, donc $OA=OB=OC=OD$.\n\n• Un parallélogramme dont les diagonales ont la même longueur est un rectangle.\n\n• Un parallélogramme qui a un angle droit est un rectangle.\n\n• Un rectangle a deux axes de symétrie (les médiatrices de ses côtés) et un centre de symétrie (intersection des diagonales).',
            },
          },
          {
            kind: 'geometry',
            x: [-0.8, 6.8],
            y: [-0.8, 4],
            polygons: [{ points: [[0, 0], [6, 0], [6, 3.2], [0, 3.2]], color: 'ink' }],
            segments: [
              { from: [0, 0], to: [6, 3.2], dashed: true },
              { from: [6, 0], to: [0, 3.2], dashed: true },
            ],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: 0, y: 3.2, label: 'A' },
              { x: 6, y: 3.2, label: 'B' },
              { x: 6, y: 0, label: 'C' },
              { x: 0, y: 0, label: 'D' },
              { x: 3, y: 1.6, label: 'O' },
            ],
            caption: { ar: 'في المستطيل $ABCD$: $AC=BD$.', fr: 'Dans le rectangle $ABCD$ : $AC=BD$.' },
          },
        ],
      },
      {
        id: 'losange',
        title: { ar: 'المعين', fr: 'Le losange' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'المعين رباعي **أضلاعه الأربعة متقايسة**. كل معين متوازي أضلاع.',
              fr: 'Un losange est un quadrilatère qui a **quatre côtés de même longueur**. Tout losange est un parallélogramme.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• قطرا المعين يتقاطعان في منتصفهما وهما **متعامدان**.\n\n• متوازي أضلاع له ضلعان متتاليان متقايسان هو معين.\n\n• متوازي أضلاع قطراه متعامدان هو معين.\n\n• للمعين محورا تماثل هما قطراه، ومركز تماثل هو نقطة تقاطعهما.',
              fr: '• Les diagonales d’un losange se coupent en leur milieu et sont **perpendiculaires**.\n\n• Un parallélogramme qui a deux côtés consécutifs de même longueur est un losange.\n\n• Un parallélogramme dont les diagonales sont perpendiculaires est un losange.\n\n• Un losange a deux axes de symétrie (ses diagonales) et un centre de symétrie (leur intersection).',
            },
          },
          {
            kind: 'geometry',
            x: [-4, 4],
            y: [-2.6, 2.6],
            polygons: [{ points: [[-3.2, 0], [0, 2], [3.2, 0], [0, -2]], color: 'saffron' }],
            segments: [
              { from: [-3.2, 0], to: [3.2, 0], dashed: true },
              { from: [0, 2], to: [0, -2], dashed: true },
            ],
            rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
            points: [
              { x: 0, y: 2, label: 'A' },
              { x: 3.2, y: 0, label: 'B' },
              { x: 0, y: -2, label: 'C' },
              { x: -3.2, y: 0, label: 'D' },
            ],
            caption: { ar: 'في المعين $ABCD$: $(AC)\\perp(BD)$.', fr: 'Dans le losange $ABCD$ : $(AC)\\perp(BD)$.' },
          },
        ],
      },
      {
        id: 'carre',
        title: { ar: 'المربع', fr: 'Le carré' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'المربع رباعي **زواياه الأربع قائمة وأضلاعه الأربعة متقايسة**. فهو مستطيل ومعين في آن واحد، وله جميع خاصياتهما.',
              fr: 'Un carré est un quadrilatère qui a **quatre angles droits et quatre côtés de même longueur**. C’est à la fois un rectangle et un losange ; il en a toutes les propriétés.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '• قطرا المربع متقايسان ومتعامدان ويتقاطعان في منتصفهما.\n\n• معين قطراه متقايسان هو مربع، ومعين له زاوية قائمة هو مربع.\n\n• للمربع أربعة محاور تماثل (قطراه وواسطا أضلاعه) ومركز تماثل واحد.',
              fr: '• Les diagonales d’un carré ont la même longueur, sont perpendiculaires et se coupent en leur milieu.\n\n• Un losange dont les diagonales ont la même longueur est un carré ; un losange qui a un angle droit est un carré.\n\n• Un carré a quatre axes de symétrie (ses diagonales et les médiatrices de ses côtés) et un centre de symétrie.',
            },
          },
          {
            kind: 'method',
            title: { ar: 'خلاصة', fr: 'Résumé' },
            content: {
              ar: 'متوازي أضلاع + (زاوية قائمة **أو** قطران متقايسان) ← **مستطيل**.\n\nمتوازي أضلاع + (ضلعان متتاليان متقايسان **أو** قطران متعامدان) ← **معين**.\n\nمستطيل + (ضلعان متتاليان متقايسان أو قطران متعامدان) ← **مربع**. معين + (زاوية قائمة أو قطران متقايسان) ← **مربع**.',
              fr: 'Parallélogramme + (un angle droit **ou** diagonales de même longueur) → **rectangle**.\n\nParallélogramme + (deux côtés consécutifs égaux **ou** diagonales perpendiculaires) → **losange**.\n\nRectangle + (côtés consécutifs égaux ou diagonales perpendiculaires) → **carré**. Losange + (angle droit ou diagonales égales) → **carré**.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'المستطيل: قطران متقايسان.', fr: 'Rectangle : diagonales de même longueur.' },
      { ar: 'المعين: قطران متعامدان.', fr: 'Losange : diagonales perpendiculaires.' },
      { ar: 'المربع: قطران متقايسان ومتعامدان.', fr: 'Carré : diagonales égales et perpendiculaires.' },
      { ar: 'محاور التماثل: المستطيل 2، المعين 2، المربع 4.', fr: 'Axes de symétrie : rectangle 2, losange 2, carré 4.' },
    ],
  },
  exercises: [
    {
      id: '1ac-quad-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'قطران متقايسان', fr: 'Diagonales égales' },
      statement: { ar: 'متوازي أضلاع قطراه متقايسان هو:', fr: 'Un parallélogramme dont les diagonales ont la même longueur est :' },
      question: {
        type: 'mcq',
        options: [{ ar: 'مستطيل', fr: 'un rectangle' }, { ar: 'معين', fr: 'un losange' }, { ar: 'شبه منحرف', fr: 'un trapèze' }],
        correct: 0,
      },
      hints: [{ ar: 'راجع خاصيات المستطيل.', fr: 'Revois les propriétés du rectangle.' }],
      solution: [{ ar: 'متوازي أضلاع قطراه متقايسان هو مستطيل.', fr: 'Un parallélogramme dont les diagonales sont de même longueur est un rectangle.' }],
    },
    {
      id: '1ac-quad-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'قطران متعامدان', fr: 'Diagonales perpendiculaires' },
      statement: { ar: 'متوازي أضلاع قطراه متعامدان هو:', fr: 'Un parallélogramme dont les diagonales sont perpendiculaires est :' },
      question: {
        type: 'mcq',
        options: [{ ar: 'معين', fr: 'un losange' }, { ar: 'مستطيل', fr: 'un rectangle' }, { ar: 'مربع بالضرورة', fr: 'forcément un carré' }],
        correct: 0,
      },
      hints: [{ ar: 'التعامد وحده لا يكفي للحصول على مربع.', fr: 'La perpendicularité seule ne suffit pas pour un carré.' }],
      solution: [{ ar: 'متوازي أضلاع قطراه متعامدان هو معين (ولا يكون مربعاً إلا إذا كان قطراه متقايسين أيضاً).', fr: 'C’est un losange (ce n’est un carré que si, en plus, ses diagonales ont la même longueur).' }],
    },
    {
      id: '1ac-quad-03',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'محاور التماثل', fr: 'Axes de symétrie' },
      statement: { ar: 'كم محور تماثل للمربع؟', fr: 'Combien un carré a-t-il d’axes de symétrie ?' },
      question: { type: 'numeric', answer: 4 },
      hints: [{ ar: 'القطران + واسطا الأضلاع.', fr: 'Les diagonales + les médiatrices des côtés.' }],
      solution: [{ ar: 'للمربع $4$ محاور تماثل: قطراه وواسطا ضلعيه المتقابلين.', fr: 'Un carré a $4$ axes de symétrie : ses deux diagonales et les deux médiatrices de ses côtés.' }],
    },
    {
      id: '1ac-quad-04',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'مثلث في مستطيل', fr: 'Triangle dans un rectangle' },
      statement: { ar: '$IJKL$ مستطيل مركزه $O$. ما طبيعة المثلث $JOK$؟', fr: '$IJKL$ est un rectangle de centre $O$. Quelle est la nature du triangle $JOK$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'متساوي الساقين في $O$', fr: 'isocèle en $O$' }, { ar: 'قائم في $O$', fr: 'rectangle en $O$' }, { ar: 'متساوي الأضلاع', fr: 'équilatéral' }],
        correct: 0,
      },
      hints: [{ ar: 'قطرا المستطيل متقايسان ويتقاطعان في منتصفهما.', fr: 'Les diagonales du rectangle sont égales et se coupent en leur milieu.' }],
      solution: [
        { ar: '$IK=JL$ و $O$ منتصف القطرين، إذن $OJ=OK$.', fr: '$IK=JL$ et $O$ est le milieu des diagonales, donc $OJ=OK$.' },
        { ar: 'المثلث $JOK$ متساوي الساقين في $O$ (وليس قائماً إلا إذا كان المستطيل مربعاً).', fr: 'Le triangle $JOK$ est isocèle en $O$ (il n’est rectangle que si le rectangle est un carré).' },
      ],
    },
    {
      id: '1ac-quad-05',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'إثبات معين', fr: 'Démontrer un losange' },
      statement: {
        ar: '$AIB$ مثلث قائم في $I$. $C$ مماثلة $A$ و $D$ مماثلة $B$ بالنسبة لـ $I$. بيّن أن $ABCD$ معين.',
        fr: '$AIB$ est rectangle en $I$. $C$ est le symétrique de $A$ et $D$ celui de $B$ par rapport à $I$. Montrer que $ABCD$ est un losange.',
      },
      question: { type: 'open' },
      hints: [
        { ar: 'بيّن أولاً أن $ABCD$ متوازي أضلاع باستعمال القطرين.', fr: 'Montre d’abord que $ABCD$ est un parallélogramme grâce aux diagonales.' },
        { ar: 'ثم استعمل الزاوية القائمة في $I$.', fr: 'Puis utilise l’angle droit en $I$.' },
      ],
      solution: [
        { ar: '$I$ منتصف $[AC]$ و $[BD]$، إذن $ABCD$ متوازي أضلاع.', fr: '$I$ est le milieu de $[AC]$ et de $[BD]$, donc $ABCD$ est un parallélogramme.' },
        { ar: 'المثلث $AIB$ قائم في $I$، إذن $(AC)\\perp(BD)$.', fr: 'Le triangle $AIB$ est rectangle en $I$, donc $(AC)\\perp(BD)$.' },
        { ar: 'متوازي أضلاع قطراه متعامدان: $ABCD$ معين.', fr: 'Parallélogramme à diagonales perpendiculaires : $ABCD$ est un losange.' },
      ],
    },
  ],
};
