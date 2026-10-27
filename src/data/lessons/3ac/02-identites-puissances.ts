import type { LessonModule } from '@/types';

const lessonId = '3ac-identites-puissances';

export const identitesPuissances: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'identities',
    title: { ar: 'المتطابقات الهامة والقوى', fr: 'Identités remarquables et puissances' },
    summary: {
      ar: 'النشر والتعميل بأعداد حقيقية، المتطابقات الهامة في الاتجاهين، قواعد القوى والكتابة العلمية.',
      fr: 'Développer et factoriser avec des réels, identités remarquables dans les deux sens, règles des puissances et écriture scientifique.',
    },
    objectives: [
      { ar: 'نشر وتعميل تعابير جبرية.', fr: 'Développer et factoriser des expressions.' },
      { ar: 'استعمال المتطابقات الهامة في الاتجاهين.', fr: 'Utiliser les identités remarquables dans les deux sens.' },
      { ar: 'استعمال قواعد الحساب على القوى والكتابة العلمية.', fr: 'Utiliser les règles des puissances et l’écriture scientifique.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['identité remarquable', 'développer', 'factoriser', 'puissance', 'écriture scientifique', 'متطابقات هامة', 'نشر', 'تعميل', 'قوى'],
    sections: [
      {
        id: 'identites',
        title: { ar: 'المتطابقات الهامة', fr: 'Identités remarquables' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل عددين حقيقيين $a$ و $b$:\n\n• $(a+b)^2=a^2+2ab+b^2$\n\n• $(a-b)^2=a^2-2ab+b^2$\n\n• $(a+b)(a-b)=a^2-b^2$',
              fr: 'Pour tous réels $a$ et $b$ :\n\n• $(a+b)^2=a^2+2ab+b^2$\n\n• $(a-b)^2=a^2-2ab+b^2$\n\n• $(a+b)(a-b)=a^2-b^2$',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'انشر.', fr: 'Développer.' },
            steps: [
              { ar: '$(x+\\sqrt3)^2=x^2+2\\sqrt3x+3$.', fr: '$(x+\\sqrt3)^2=x^2+2\\sqrt3x+3$.' },
              { ar: '$(2\\sqrt7x+3\\sqrt5)(2\\sqrt7x-3\\sqrt5)=28x^2-45$.', fr: '$(2\\sqrt7x+3\\sqrt5)(2\\sqrt7x-3\\sqrt5)=28x^2-45$.' },
            ],
          },
          {
            kind: 'example',
            statement: { ar: 'عمّل.', fr: 'Factoriser.' },
            steps: [
              { ar: '$25x^2+30x+9=(5x+3)^2$ ؛ $2x^2-2\\sqrt2x+1=(\\sqrt2x-1)^2$.', fr: '$25x^2+30x+9=(5x+3)^2$ ; $2x^2-2\\sqrt2x+1=(\\sqrt2x-1)^2$.' },
              { ar: '$81x^2-7=(9x-\\sqrt7)(9x+\\sqrt7)$.', fr: '$81x^2-7=(9x-\\sqrt7)(9x+\\sqrt7)$.' },
            ],
          },
        ],
      },
      {
        id: 'puissances',
        title: { ar: 'القوى', fr: 'Puissances' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل عددين حقيقيين غير منعدمين $a$ و $b$ ولكل عددين صحيحين نسبيين $n$ و $m$:\n\n• $a^n\\times a^m=a^{n+m}$ ؛ $\\dfrac{a^n}{a^m}=a^{n-m}$ ؛ $(a^n)^m=a^{nm}$\n\n• $a^n\\times b^n=(ab)^n$ ؛ $\\dfrac{a^n}{b^n}=\\left(\\dfrac ab\\right)^n$ ؛ $a^{-n}=\\dfrac1{a^n}$',
              fr: 'Pour tous réels non nuls $a$, $b$ et tous entiers relatifs $n$, $m$ :\n\n• $a^n\\times a^m=a^{n+m}$ ; $\\dfrac{a^n}{a^m}=a^{n-m}$ ; $(a^n)^m=a^{nm}$\n\n• $a^n\\times b^n=(ab)^n$ ; $\\dfrac{a^n}{b^n}=\\left(\\dfrac ab\\right)^n$ ; $a^{-n}=\\dfrac1{a^n}$',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'الكتابة العلمية', fr: 'Écriture scientifique' },
            content: {
              ar: 'الكتابة العلمية لعدد عشري هي $a\\times10^n$ حيث $1\\le|a|<10$ و $n$ عدد صحيح نسبي. مثال: $265900=2{,}659\\times10^5$ ؛ $0{,}0005321=5{,}321\\times10^{-4}$.',
              fr: 'L’écriture scientifique d’un décimal est $a\\times10^n$ avec $1\\le|a|<10$ et $n$ entier relatif. Exemple : $265900=2{,}659\\times10^5$ ; $0{,}0005321=5{,}321\\times10^{-4}$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: 'ثلاث متطابقات تستعمل للنشر وللتعميل.', fr: 'Trois identités, utilisées pour développer et pour factoriser.' },
      { ar: 'قواعد القوى تبقى صالحة للأعداد الحقيقية غير المنعدمة.', fr: 'Les règles des puissances restent valables pour les réels non nuls.' },
    ],
  },
  exercises: [
    {
      id: '3ac-idp-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'مربع مجموع', fr: 'Carré d’une somme' },
      statement: { ar: 'انشر $(2\\sqrt3+\\sqrt5)^2$.', fr: 'Développer $(2\\sqrt3+\\sqrt5)^2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$17+4\\sqrt{15}$', fr: '$17+4\\sqrt{15}$' }, { ar: '$17$', fr: '$17$' }, { ar: '$17+2\\sqrt{15}$', fr: '$17+2\\sqrt{15}$' }, { ar: '$11+4\\sqrt{15}$', fr: '$11+4\\sqrt{15}$' }],
        correct: 0,
      },
      hints: [{ ar: '$(2\\sqrt3)^2=12$.', fr: '$(2\\sqrt3)^2=12$.' }],
      solution: [{ ar: '$12+2\\times2\\sqrt3\\times\\sqrt5+5=17+4\\sqrt{15}$.', fr: '$12+2\\times2\\sqrt3\\times\\sqrt5+5=17+4\\sqrt{15}$.' }],
    },
    {
      id: '3ac-idp-02',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'فرق مربعين', fr: 'Différence de deux carrés' },
      statement: { ar: 'عمّل $F=(2x-5)^2-(x+1)^2$.', fr: 'Factoriser $F=(2x-5)^2-(x+1)^2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(x-6)(3x-4)$', fr: '$(x-6)(3x-4)$' }, { ar: '$(x-4)(3x-6)$', fr: '$(x-4)(3x-6)$' }, { ar: '$(x-6)(3x+4)$', fr: '$(x-6)(3x+4)$' }, { ar: '$(x+6)(3x-4)$', fr: '$(x+6)(3x-4)$' }],
        correct: 0,
      },
      hints: [{ ar: '$A^2-B^2=(A-B)(A+B)$.', fr: '$A^2-B^2=(A-B)(A+B)$.' }],
      solution: [
        { ar: '$F=[(2x-5)-(x+1)][(2x-5)+(x+1)]$.', fr: '$F=[(2x-5)-(x+1)][(2x-5)+(x+1)]$.' },
        { ar: '$F=(x-6)(3x-4)$.', fr: '$F=(x-6)(3x-4)$.' },
      ],
    },
    {
      id: '3ac-idp-03',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'arithmetic',
      title: { ar: 'قوتان متقابلتان', fr: 'Puissances opposées' },
      statement: { ar: 'احسب $\\left(\\dfrac{\\sqrt7}{3}\\right)^4\\times\\left(\\dfrac{\\sqrt7}{3}\\right)^{-4}$.', fr: 'Calculer $\\left(\\dfrac{\\sqrt7}{3}\\right)^4\\times\\left(\\dfrac{\\sqrt7}{3}\\right)^{-4}$.' },
      question: { type: 'numeric', answer: 1 },
      hints: [{ ar: '$a^4\\times a^{-4}=a^0$.', fr: '$a^4\\times a^{-4}=a^0$.' }],
      solution: [{ ar: '$\\left(\\dfrac{\\sqrt7}{3}\\right)^{4-4}=\\left(\\dfrac{\\sqrt7}{3}\\right)^0=1$.', fr: '$\\left(\\dfrac{\\sqrt7}{3}\\right)^{4-4}=\\left(\\dfrac{\\sqrt7}{3}\\right)^0=1$.' }],
    },
    {
      id: '3ac-idp-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'كتابة علمية', fr: 'Écriture scientifique' },
      statement: { ar: 'ما الكتابة العلمية لـ $A=15\\times(10^7)^2\\times3\\times10^{-9}$؟', fr: 'Quelle est l’écriture scientifique de $A=15\\times(10^7)^2\\times3\\times10^{-9}$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$4{,}5\\times10^{6}$', fr: '$4{,}5\\times10^{6}$' }, { ar: '$45\\times10^{5}$', fr: '$45\\times10^{5}$' }, { ar: '$4{,}5\\times10^{5}$', fr: '$4{,}5\\times10^{5}$' }, { ar: '$4{,}5\\times10^{-2}$', fr: '$4{,}5\\times10^{-2}$' }],
        correct: 0,
      },
      hints: [{ ar: '$15\\times3=45$ و $10^{14}\\times10^{-9}=10^5$.', fr: '$15\\times3=45$ et $10^{14}\\times10^{-9}=10^5$.' }],
      solution: [{ ar: '$A=45\\times10^5=4{,}5\\times10^6$.', fr: '$A=45\\times10^5=4{,}5\\times10^6$.' }],
    },
  ],
};
