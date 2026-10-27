import type { LessonModule } from '@/types';

const lessonId = '1bac-logique';

export const logique: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1bac',
    unitId: 'logic',
    streams: ['sm', 'sx', 'ste'],
    title: { ar: 'المنطق الرياضي', fr: 'Notions de logique' },
    summary: {
      ar: 'العبارات والعمليات المنطقية، المكممات، وأنواع الاستدلال: الاستلزام المضاد للعكس، الخلف، فصل الحالات والترجع.',
      fr: 'Propositions et connecteurs, quantificateurs, et types de raisonnement : contraposée, absurde, disjonction des cas et récurrence.',
    },
    objectives: [
      { ar: 'تحديد قيمة حقيقة عبارة ونفيها.', fr: 'Déterminer la valeur de vérité d’une proposition et sa négation.' },
      { ar: 'استعمال المكممات ونفيها.', fr: 'Utiliser les quantificateurs et leur négation.' },
      { ar: 'اختيار نوع الاستدلال المناسب.', fr: 'Choisir le type de raisonnement adapté.' },
    ],
    durationMinutes: 45,
    reviewed: false,
    keywords: ['logique', 'proposition', 'quantificateur', 'contraposée', 'absurde', 'récurrence', 'منطق', 'عبارة', 'مكمم', 'خلف', 'ترجع'],
    sections: [
      {
        id: 'propositions',
        title: { ar: 'العبارات والعمليات المنطقية', fr: 'Propositions et connecteurs' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '**العبارة** نص رياضي يكون إما صحيحاً (ص) وإما خاطئاً (خ). لعبارتين $P$ و $Q$:\n\n• **النفي** $\\bar P$ صحيح إذا كان $P$ خاطئاً.\n\n• **العطف** «$P$ و $Q$» صحيح فقط إذا كان $P$ و $Q$ صحيحين.\n\n• **الفصل** «$P$ أو $Q$» خاطئ فقط إذا كان $P$ و $Q$ خاطئين.\n\n• **الاستلزام** $P\\Rightarrow Q$ خاطئ فقط إذا كان $P$ صحيحاً و $Q$ خاطئاً.\n\n• **التكافؤ** $P\\iff Q$ صحيح إذا كان لـ $P$ و $Q$ نفس قيمة الحقيقة.',
              fr: 'Une **proposition** est un énoncé mathématique soit vrai (V), soit faux (F). Pour deux propositions $P$ et $Q$ :\n\n• la **négation** $\\bar P$ est vraie si $P$ est fausse ;\n\n• la **conjonction** « $P$ et $Q$ » n’est vraie que si $P$ et $Q$ sont vraies ;\n\n• la **disjonction** « $P$ ou $Q$ » n’est fausse que si $P$ et $Q$ sont fausses ;\n\n• l’**implication** $P\\Rightarrow Q$ n’est fausse que si $P$ est vraie et $Q$ fausse ;\n\n• l’**équivalence** $P\\iff Q$ est vraie si $P$ et $Q$ ont la même valeur de vérité.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'قوانين مورغان', fr: 'Lois de Morgan' },
            content: {
              ar: '$\\overline{P\\text{ و }Q}\\iff\\bar P\\text{ أو }\\bar Q$ ؛ $\\overline{P\\text{ أو }Q}\\iff\\bar P\\text{ و }\\bar Q$ ؛ $\\overline{P\\Rightarrow Q}\\iff P\\text{ و }\\bar Q$.',
              fr: '$\\overline{P\\text{ et }Q}\\iff\\bar P\\text{ ou }\\bar Q$ ; $\\overline{P\\text{ ou }Q}\\iff\\bar P\\text{ et }\\bar Q$ ; $\\overline{P\\Rightarrow Q}\\iff P\\text{ et }\\bar Q$.',
            },
          },
        ],
      },
      {
        id: 'quantificateurs',
        title: { ar: 'المكممات', fr: 'Quantificateurs' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '$\\forall$ يعني «لكل»، و $\\exists$ يعني «يوجد على الأقل». نفي «$\\forall x\\in E,\\ P(x)$» هو «$\\exists x\\in E,\\ \\overline{P(x)}$»، ونفي «$\\exists x\\in E,\\ P(x)$» هو «$\\forall x\\in E,\\ \\overline{P(x)}$».',
              fr: '$\\forall$ signifie « pour tout », $\\exists$ signifie « il existe au moins ». La négation de « $\\forall x\\in E,\\ P(x)$ » est « $\\exists x\\in E,\\ \\overline{P(x)}$ », et celle de « $\\exists x\\in E,\\ P(x)$ » est « $\\forall x\\in E,\\ \\overline{P(x)}$ ».',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'انف العبارة: $\\forall x\\in\\mathbb R,\\ x^2+1>0$.', fr: 'Nier : $\\forall x\\in\\mathbb R,\\ x^2+1>0$.' },
            steps: [{ ar: 'النفي: $\\exists x\\in\\mathbb R,\\ x^2+1\\le0$ (وهو خاطئ، إذن العبارة الأصلية صحيحة).', fr: 'Négation : $\\exists x\\in\\mathbb R,\\ x^2+1\\le0$ (fausse, donc la proposition initiale est vraie).' }],
          },
        ],
      },
      {
        id: 'raisonnements',
        title: { ar: 'أنواع الاستدلال', fr: 'Types de raisonnement' },
        blocks: [
          {
            kind: 'list',
            items: [
              { ar: '**الاستلزام المضاد للعكس**: لإثبات $P\\Rightarrow Q$ نثبت $\\bar Q\\Rightarrow\\bar P$.', fr: '**Contraposée** : pour montrer $P\\Rightarrow Q$, on montre $\\bar Q\\Rightarrow\\bar P$.' },
              { ar: '**الاستدلال بالخلف**: نفترض أن $P$ خاطئة ونصل إلى تناقض.', fr: '**Absurde** : on suppose $P$ fausse et on aboutit à une contradiction.' },
              { ar: '**فصل الحالات**: نثبت العبارة في كل حالة ممكنة (مثلاً $n$ زوجي أو فردي).', fr: '**Disjonction des cas** : on démontre la propriété dans chaque cas possible (par exemple $n$ pair ou impair).' },
              { ar: '**التكافؤات المتتالية**: ننتقل من $P$ إلى $Q$ بتكافؤات.', fr: '**Équivalences successives** : on passe de $P$ à $Q$ par des équivalences.' },
            ],
          },
          {
            kind: 'theorem',
            title: { ar: 'الاستدلال بالترجع', fr: 'Raisonnement par récurrence' },
            content: {
              ar: 'لإثبات أن $P(n)$ صحيحة لكل $n\\ge n_0$:\n\n• **التهيئة**: نتحقق أن $P(n_0)$ صحيحة.\n\n• **الوراثة**: نفترض أن $P(n)$ صحيحة ونثبت أن $P(n+1)$ صحيحة.',
              fr: 'Pour montrer que $P(n)$ est vraie pour tout $n\\ge n_0$ :\n\n• **initialisation** : on vérifie $P(n_0)$ ;\n\n• **hérédité** : on suppose $P(n)$ vraie et on montre $P(n+1)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'بيّن أن $1+2+\\dots+n=\\dfrac{n(n+1)}2$ لكل $n\\ge1$.', fr: 'Montrer que $1+2+\\dots+n=\\dfrac{n(n+1)}2$ pour tout $n\\ge1$.' },
            steps: [
              { ar: 'التهيئة: $1=\\dfrac{1\\times2}2$.', fr: 'Initialisation : $1=\\dfrac{1\\times2}2$.' },
              { ar: 'الوراثة: $\\dfrac{n(n+1)}2+(n+1)=\\dfrac{(n+1)(n+2)}2$.', fr: 'Hérédité : $\\dfrac{n(n+1)}2+(n+1)=\\dfrac{(n+1)(n+2)}2$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: '$P\\Rightarrow Q$ تكافئ $\\bar Q\\Rightarrow\\bar P$.', fr: '$P\\Rightarrow Q$ équivaut à $\\bar Q\\Rightarrow\\bar P$.' },
      { ar: 'نفي $\\forall$ هو $\\exists$ والعكس.', fr: 'La négation de $\\forall$ est $\\exists$, et inversement.' },
    ],
  },
  exercises: [
    {
      id: '1bac-log-01',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'قيمة حقيقة', fr: 'Valeur de vérité' },
      statement: { ar: 'ما قيمة حقيقة العبارة: $(2>3)\\Rightarrow(1=0)$؟', fr: 'Quelle est la valeur de vérité de $(2>3)\\Rightarrow(1=0)$ ?' },
      question: { type: 'mcq', options: [{ ar: 'صحيحة', fr: 'Vraie' }, { ar: 'خاطئة', fr: 'Fausse' }], correct: 0 },
      hints: [{ ar: 'المقدمة خاطئة.', fr: 'L’hypothèse est fausse.' }],
      solution: [{ ar: 'استلزام مقدمته خاطئة يكون صحيحاً.', fr: 'Une implication dont l’hypothèse est fausse est vraie.' }],
    },
    {
      id: '1bac-log-02',
      lessonId,
      levelId: '1bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'نفي عبارة مكممة', fr: 'Négation quantifiée' },
      statement: { ar: 'ما نفي $\\exists x\\in\\mathbb R,\\ x^2=2$؟', fr: 'Quelle est la négation de $\\exists x\\in\\mathbb R,\\ x^2=2$ ?' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\forall x\\in\\mathbb R,\\ x^2\\neq2$', fr: '$\\forall x\\in\\mathbb R,\\ x^2\\neq2$' }, { ar: '$\\exists x\\in\\mathbb R,\\ x^2\\neq2$', fr: '$\\exists x\\in\\mathbb R,\\ x^2\\neq2$' }, { ar: '$\\forall x\\in\\mathbb R,\\ x^2=2$', fr: '$\\forall x\\in\\mathbb R,\\ x^2=2$' }],
        correct: 0,
      },
      hints: [{ ar: 'نفي $\\exists$ هو $\\forall$.', fr: 'La négation de $\\exists$ est $\\forall$.' }],
      solution: [{ ar: '$\\forall x\\in\\mathbb R,\\ x^2\\neq2$.', fr: '$\\forall x\\in\\mathbb R,\\ x^2\\neq2$.' }],
    },
    {
      id: '1bac-log-03',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'نوع الاستدلال', fr: 'Type de raisonnement' },
      statement: { ar: 'لإثبات «إذا كان $n^2$ زوجياً فإن $n$ زوجي»، نثبت «إذا كان $n$ فردياً فإن $n^2$ فردي». ما هذا الاستدلال؟', fr: 'Pour montrer « si $n^2$ est pair alors $n$ est pair », on montre « si $n$ est impair alors $n^2$ est impair ». Quel est ce raisonnement ?' },
      question: {
        type: 'mcq',
        options: [{ ar: 'الاستلزام المضاد للعكس', fr: 'La contraposée' }, { ar: 'الخلف', fr: 'L’absurde' }, { ar: 'الترجع', fr: 'La récurrence' }, { ar: 'فصل الحالات', fr: 'La disjonction des cas' }],
        correct: 0,
      },
      hints: [{ ar: '$\\bar Q\\Rightarrow\\bar P$.', fr: '$\\bar Q\\Rightarrow\\bar P$.' }],
      solution: [{ ar: 'هو الاستلزام المضاد للعكس.', fr: 'C’est la contraposée.' }],
    },
    {
      id: '1bac-log-04',
      lessonId,
      levelId: '1bac',
      difficulty: 2,
      topic: 'arithmetic',
      title: { ar: 'ترجع', fr: 'Récurrence' },
      statement: { ar: 'باستعمال الصيغة $1+2+\\dots+n=\\dfrac{n(n+1)}2$، احسب $1+2+\\dots+20$.', fr: 'Avec la formule $1+2+\\dots+n=\\dfrac{n(n+1)}2$, calculer $1+2+\\dots+20$.' },
      question: { type: 'numeric', answer: 210 },
      hints: [{ ar: '$\\dfrac{20\\times21}2$.', fr: '$\\dfrac{20\\times21}2$.' }],
      solution: [{ ar: '$\\dfrac{20\\times21}2=210$.', fr: '$\\dfrac{20\\times21}2=210$.' }],
    },
  ],
};
