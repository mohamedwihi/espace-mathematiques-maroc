import type { Lesson } from '@/types';

export const lesson2acPowers: Lesson = {
  id: '2ac-powers',
  levelId: '2ac',
  unitId: 'powers',
  title: { ar: 'القوى', fr: 'Les puissances' },
  summary: {
    ar: 'تعريف قوة عدد بأس صحيح نسبي، خاصيات القوى، قوى العدد 10 والكتابة العلمية.',
    fr: "Puissance d'un nombre à exposant entier relatif, propriétés, puissances de 10 et écriture scientifique.",
  },
  objectives: [
    { ar: 'حساب قوة عدد بأس صحيح طبيعي أو سالب.', fr: "Calculer une puissance d'exposant entier positif ou négatif." },
    { ar: 'تطبيق خاصيات القوى لتبسيط تعبير.', fr: 'Appliquer les propriétés des puissances pour simplifier une expression.' },
    { ar: 'تحديد إشارة قوة عدد سالب.', fr: "Déterminer le signe d'une puissance d'un nombre négatif." },
    { ar: 'كتابة عدد على شكل كتابة علمية.', fr: 'Écrire un nombre en notation scientifique.' },
  ],
  durationMinutes: 40,
  reviewed: false,
  keywords: ['puissance', 'exposant', 'notation scientifique', 'قوة', 'أس', 'كتابة علمية'],
  sections: [
    {
      id: 'definition',
      title: { ar: 'تعريف', fr: 'Définition' },
      blocks: [
        {
          kind: 'definition',
          content: {
            ar: 'ليكن $a$ عدداً و $n$ عدداً صحيحاً طبيعياً أكبر من أو يساوي $2$. العدد $a^n$ هو جداء $n$ عاملاً كلها تساوي $a$. نقرأ «$a$ أس $n$».',
            fr: 'Soit $a$ un nombre et $n$ un entier naturel supérieur ou égal à $2$. Le nombre $a^n$ est le produit de $n$ facteurs tous égaux à $a$. On lit « $a$ exposant $n$ ».',
          },
        },
        { kind: 'formula', tex: 'a^n=\\underbrace{a\\times a\\times\\cdots\\times a}_{n\\ \\text{facteurs}}' },
        {
          kind: 'property',
          title: { ar: 'اصطلاحات', fr: 'Conventions' },
          content: {
            ar: 'لكل عدد $a$: $a^1=a$. ولكل عدد $a$ غير منعدم: $a^0=1$ و $a^{-n}=\\dfrac{1}{a^n}$.',
            fr: 'Pour tout nombre $a$ : $a^1=a$. Pour tout nombre $a$ non nul : $a^0=1$ et $a^{-n}=\\dfrac{1}{a^n}$.',
          },
        },
        {
          kind: 'rule',
          title: { ar: 'إشارة قوة عدد سالب', fr: "Signe d'une puissance d'un nombre négatif" },
          content: {
            ar: 'إذا كان $a<0$: تكون $a^n$ موجبة إذا كان $n$ زوجياً، وسالبة إذا كان $n$ فردياً. مثال: $(-2)^4=16$ و $(-2)^5=-32$.',
            fr: 'Si $a<0$ : $a^n$ est positif si $n$ est pair, négatif si $n$ est impair. Exemple : $(-2)^4=16$ et $(-2)^5=-32$.',
          },
        },
        {
          kind: 'remark',
          content: {
            ar: 'انتبه: $-2^4=-16$ بينما $(-2)^4=16$. الأس يتعلق فقط بما يوجد مباشرة قبله.',
            fr: 'Attention : $-2^4=-16$ alors que $(-2)^4=16$. L’exposant ne porte que sur ce qui le précède immédiatement.',
          },
        },
      ],
    },
    {
      id: 'properties',
      title: { ar: 'خاصيات القوى', fr: 'Propriétés des puissances' },
      blocks: [
        {
          kind: 'property',
          content: {
            ar: 'لكل عددين غير منعدمين $a$ و $b$ ولكل عددين صحيحين نسبيين $m$ و $n$:',
            fr: 'Pour tous nombres non nuls $a$ et $b$ et tous entiers relatifs $m$ et $n$ :',
          },
        },
        {
          kind: 'formula',
          tex: 'a^m\\times a^n=a^{m+n}\\qquad \\frac{a^m}{a^n}=a^{m-n}\\qquad (a^m)^n=a^{m\\times n}',
        },
        { kind: 'formula', tex: '(a\\times b)^n=a^n\\times b^n\\qquad \\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}' },
        {
          kind: 'example',
          statement: { ar: 'بسّط $A=\\dfrac{2^3\\times 2^5}{2^4}$ ثم احسبه.', fr: 'Simplifier puis calculer $A=\\dfrac{2^3\\times 2^5}{2^4}$.' },
          steps: [
            { ar: '$2^3\\times 2^5=2^{3+5}=2^8$.', fr: '$2^3\\times 2^5=2^{3+5}=2^8$.' },
            { ar: '$A=\\dfrac{2^8}{2^4}=2^{8-4}=2^4$.', fr: '$A=\\dfrac{2^8}{2^4}=2^{8-4}=2^4$.' },
            { ar: '$A=16$.', fr: '$A=16$.' },
          ],
        },
        {
          kind: 'example',
          statement: { ar: 'اكتب $B=(3^{-2})^3\\times 3^{8}$ على شكل قوة للعدد 3.', fr: 'Écrire $B=(3^{-2})^3\\times 3^{8}$ sous forme d’une puissance de 3.' },
          steps: [
            { ar: '$(3^{-2})^3=3^{-2\\times3}=3^{-6}$.', fr: '$(3^{-2})^3=3^{-2\\times3}=3^{-6}$.' },
            { ar: '$B=3^{-6}\\times3^{8}=3^{-6+8}=3^2=9$.', fr: '$B=3^{-6}\\times3^{8}=3^{-6+8}=3^2=9$.' },
          ],
        },
      ],
    },
    {
      id: 'scientific',
      title: { ar: 'قوى العدد 10 والكتابة العلمية', fr: 'Puissances de 10 et écriture scientifique' },
      blocks: [
        {
          kind: 'property',
          content: {
            ar: 'لكل عدد صحيح طبيعي $n$: $10^n=1\\underbrace{0\\cdots0}_{n}$ و $10^{-n}=0{,}\\underbrace{0\\cdots0}_{n-1}1$.',
            fr: 'Pour tout entier naturel $n$ : $10^n=1\\underbrace{0\\cdots0}_{n}$ et $10^{-n}=0{,}\\underbrace{0\\cdots0}_{n-1}1$.',
          },
        },
        {
          kind: 'definition',
          title: { ar: 'الكتابة العلمية', fr: 'Écriture scientifique' },
          content: {
            ar: 'الكتابة العلمية لعدد عشري موجب هي كتابته على الشكل $a\\times10^p$ حيث $1\\le a<10$ و $p$ عدد صحيح نسبي.',
            fr: "L'écriture scientifique d'un nombre décimal positif est son écriture sous la forme $a\\times10^p$ avec $1\\le a<10$ et $p$ entier relatif.",
          },
        },
        {
          kind: 'example',
          statement: { ar: 'اكتب العددين $0{,}00045$ و $3\\,270\\,000$ كتابة علمية.', fr: 'Donner l’écriture scientifique de $0{,}00045$ et de $3\\,270\\,000$.' },
          steps: [
            { ar: 'ننقل الفاصلة 4 مراتب نحو اليمين: $0{,}00045=4{,}5\\times10^{-4}$.', fr: 'On décale la virgule de 4 rangs vers la droite : $0{,}00045=4{,}5\\times10^{-4}$.' },
            { ar: 'ننقل الفاصلة 6 مراتب نحو اليسار: $3\\,270\\,000=3{,}27\\times10^{6}$.', fr: 'On décale la virgule de 6 rangs vers la gauche : $3\\,270\\,000=3{,}27\\times10^{6}$.' },
          ],
        },
      ],
    },
  ],
  recap: [
    { ar: '$a^0=1$ و $a^{-n}=\\frac{1}{a^n}$ (مع $a\\neq0$).', fr: '$a^0=1$ et $a^{-n}=\\frac{1}{a^n}$ (avec $a\\neq0$).' },
    { ar: '$a^m\\times a^n=a^{m+n}$ ، $\\frac{a^m}{a^n}=a^{m-n}$ ، $(a^m)^n=a^{mn}$.', fr: '$a^m\\times a^n=a^{m+n}$, $\\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$.' },
    { ar: 'قوة عدد سالب: أس زوجي ← موجبة، أس فردي ← سالبة.', fr: "Puissance d'un négatif : exposant pair → positive, impair → négative." },
    { ar: 'الكتابة العلمية: $a\\times10^p$ مع $1\\le a<10$.', fr: 'Écriture scientifique : $a\\times10^p$ avec $1\\le a<10$.' },
  ],
};
