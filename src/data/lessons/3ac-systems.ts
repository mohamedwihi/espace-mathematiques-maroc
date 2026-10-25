import type { Lesson } from '@/types';

export const lesson3acSystems: Lesson = {
  id: '3ac-systems',
  levelId: '3ac',
  unitId: 'systems',
  title: { ar: 'نظمة معادلتين من الدرجة الأولى بمجهولين', fr: 'Systèmes de deux équations du premier degré à deux inconnues' },
  summary: {
    ar: 'حل نظمة بطريقة التعويض وبطريقة التأليفة الخطية، والتأويل المبياني، وحل مسائل.',
    fr: 'Résoudre un système par substitution et par combinaison linéaire, interprétation graphique et résolution de problèmes.',
  },
  objectives: [
    { ar: 'التحقق من أن زوجاً حل لنظمة.', fr: "Vérifier qu'un couple est solution d'un système." },
    { ar: 'حل نظمة بطريقة التعويض.', fr: 'Résoudre un système par substitution.' },
    { ar: 'حل نظمة بطريقة التأليفة الخطية.', fr: 'Résoudre un système par combinaison linéaire.' },
    { ar: 'تأويل حل نظمة مبيانياً وترييض مسألة.', fr: 'Interpréter graphiquement la solution et mettre un problème en équations.' },
  ],
  durationMinutes: 45,
  reviewed: false,
  keywords: ['système', 'substitution', 'combinaison', 'inconnues', 'نظمة', 'تعويض', 'تأليفة خطية'],
  sections: [
    {
      id: 'definition',
      title: { ar: 'تعريف', fr: 'Définition' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'نظمة معادلتين من الدرجة الأولى بمجهولين $x$ و $y$ تكتب على الشكل:\n\n$$\\begin{cases} ax+by=c \\\\ a\'x+b\'y=c\' \\end{cases}$$\n\nحل النظمة هو إيجاد جميع الأزواج $(x;y)$ التي تحقق المعادلتين معاً.',
            fr: 'Un système de deux équations du premier degré à deux inconnues $x$ et $y$ s’écrit :\n\n$$\\begin{cases} ax+by=c \\\\ a\'x+b\'y=c\' \\end{cases}$$\n\nRésoudre le système, c’est trouver tous les couples $(x;y)$ qui vérifient les deux équations à la fois.',
          },
        },
      ],
    },
    {
      id: 'substitution',
      title: { ar: 'طريقة التعويض', fr: 'Méthode par substitution' },
      blocks: [
        {
          kind: 'method',
          content: {
            ar: 'نعبّر عن أحد المجهولين بدلالة الآخر انطلاقاً من إحدى المعادلتين، ثم نعوّضه في المعادلة الأخرى.',
            fr: "On exprime une inconnue en fonction de l'autre à partir d'une équation, puis on la remplace dans l'autre équation.",
          },
        },
        {
          kind: 'example',
          statement: {
            ar: 'حل النظمة $\\begin{cases} x+y=5 \\\\ 2x-y=1 \\end{cases}$',
            fr: 'Résoudre $\\begin{cases} x+y=5 \\\\ 2x-y=1 \\end{cases}$',
          },
          steps: [
            { ar: 'من المعادلة الأولى: $y=5-x$.', fr: 'De la première équation : $y=5-x$.' },
            { ar: 'نعوّض في الثانية: $2x-(5-x)=1$ أي $3x-5=1$.', fr: 'On remplace dans la seconde : $2x-(5-x)=1$, soit $3x-5=1$.' },
            { ar: 'إذن $3x=6$ ومنه $x=2$، ثم $y=5-2=3$.', fr: 'Donc $3x=6$, d’où $x=2$, puis $y=5-2=3$.' },
            { ar: 'تحقق: $2+3=5$ و $2\\times2-3=1$. حل النظمة هو الزوج $(2;3)$.', fr: 'Vérification : $2+3=5$ et $2\\times2-3=1$. La solution est le couple $(2;3)$.' },
          ],
        },
        {
          kind: 'graph',
          x: [-2, 6],
          y: [-2, 6],
          functions: [
            { fn: (x) => 5 - x, label: 'y=5-x', color: 'brand' },
            { fn: (x) => 2 * x - 1, label: 'y=2x-1', color: 'saffron' },
          ],
          points: [{ x: 2, y: 3, label: '(2;3)' }],
          caption: {
            ar: 'التأويل المبياني: حل النظمة هو إحداثيتا نقطة تقاطع المستقيمين $(D_1): y=5-x$ و $(D_2): y=2x-1$.',
            fr: 'Interprétation graphique : la solution est le couple de coordonnées du point d’intersection des droites $(D_1): y=5-x$ et $(D_2): y=2x-1$.',
          },
        },
      ],
    },
    {
      id: 'combination',
      title: { ar: 'طريقة التأليفة الخطية', fr: 'Méthode par combinaison linéaire' },
      blocks: [
        {
          kind: 'method',
          content: {
            ar: 'نضرب المعادلتين في عددين مناسبين بحيث يصبح معاملا أحد المجهولين متقابلين، ثم نجمع المعادلتين طرفاً بطرف.',
            fr: "On multiplie les équations par des nombres choisis pour que les coefficients d'une inconnue soient opposés, puis on additionne membre à membre.",
          },
        },
        {
          kind: 'example',
          statement: {
            ar: 'حل النظمة $\\begin{cases} 3x+2y=7 \\\\ x-2y=5 \\end{cases}$',
            fr: 'Résoudre $\\begin{cases} 3x+2y=7 \\\\ x-2y=5 \\end{cases}$',
          },
          steps: [
            { ar: 'معاملا $y$ متقابلان ($2$ و $-2$)، نجمع: $4x=12$ ومنه $x=3$.', fr: 'Les coefficients de $y$ sont opposés ($2$ et $-2$) ; on additionne : $4x=12$, d’où $x=3$.' },
            { ar: 'نعوّض في الثانية: $3-2y=5$ أي $-2y=2$ ومنه $y=-1$.', fr: 'On remplace dans la seconde : $3-2y=5$, soit $-2y=2$, d’où $y=-1$.' },
            { ar: 'تحقق: $9-2=7$ و $3+2=5$. الحل هو $(3;-1)$.', fr: 'Vérification : $9-2=7$ et $3+2=5$. La solution est $(3;-1)$.' },
          ],
        },
      ],
    },
    {
      id: 'problems',
      title: { ar: 'ترييض مسألة', fr: 'Mise en équations d’un problème' },
      blocks: [
        {
          kind: 'example',
          statement: {
            ar: 'اشترى تلميذ 3 دفاتر و 2 أقلام بـ 26 درهماً، واشترى آخر دفتراً واحداً و 4 أقلام بـ 22 درهماً. ما ثمن الدفتر وثمن القلم؟',
            fr: 'Un élève achète 3 cahiers et 2 stylos pour 26 DH ; un autre achète 1 cahier et 4 stylos pour 22 DH. Quel est le prix d’un cahier et celui d’un stylo ?',
          },
          steps: [
            { ar: 'نضع $x$ ثمن الدفتر و $y$ ثمن القلم بالدرهم.', fr: 'On note $x$ le prix d’un cahier et $y$ celui d’un stylo, en DH.' },
            { ar: 'النظمة: $\\begin{cases} 3x+2y=26 \\\\ x+4y=22 \\end{cases}$', fr: 'Le système : $\\begin{cases} 3x+2y=26 \\\\ x+4y=22 \\end{cases}$' },
            { ar: 'نضرب الأولى في $-2$: $-6x-4y=-52$، ثم نجمع مع الثانية: $-5x=-30$ ومنه $x=6$.', fr: 'On multiplie la première par $-2$ : $-6x-4y=-52$, puis on ajoute la seconde : $-5x=-30$, d’où $x=6$.' },
            { ar: '$6+4y=22$ ومنه $y=4$.', fr: '$6+4y=22$ d’où $y=4$.' },
            { ar: 'ثمن الدفتر 6 دراهم وثمن القلم 4 دراهم.', fr: 'Un cahier coûte 6 DH et un stylo 4 DH.' },
          ],
        },
      ],
    },
  ],
  recap: [
    { ar: 'الحل زوج $(x;y)$ يحقق المعادلتين معاً.', fr: 'Une solution est un couple $(x;y)$ vérifiant les deux équations.' },
    { ar: 'التعويض: نعبّر عن مجهول بدلالة الآخر ثم نعوّض.', fr: 'Substitution : exprimer une inconnue puis remplacer.' },
    { ar: 'التأليفة: نجعل معاملي مجهول متقابلين ثم نجمع.', fr: 'Combinaison : rendre deux coefficients opposés puis additionner.' },
    { ar: 'مبيانياً: الحل هو نقطة تقاطع مستقيمين.', fr: 'Graphiquement : la solution est le point d’intersection de deux droites.' },
    { ar: 'تحقق دائماً من الحل في المعادلتين.', fr: 'Toujours vérifier la solution dans les deux équations.' },
  ],
};
