import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-developpement-factorisation';

export const developpementFactorisation: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'expand-factor',
    title: { ar: 'النشر والتعميل', fr: 'Développement et factorisation' },
    summary: {
      ar: 'التعبير الحرفي واختزاله، التوزيعية البسيطة والمزدوجة، والتعميل بإخراج العامل المشترك.',
      fr: 'Expression littérale et réduction, distributivité simple et double, factorisation par un facteur commun.',
    },
    objectives: [
      { ar: 'التعرف على تعبير حرفي وحساب قيمته.', fr: 'Reconnaître une expression littérale et calculer sa valeur.' },
      { ar: 'اختزال تعبير حرفي.', fr: 'Réduire une expression littérale.' },
      { ar: 'نشر جداء باستعمال التوزيعية البسيطة والمزدوجة.', fr: 'Développer un produit (distributivité simple et double).' },
      { ar: 'تعميل مجموع بإخراج العامل المشترك.', fr: 'Factoriser une somme en repérant le facteur commun.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['développer', 'factoriser', 'expression littérale', 'réduire', 'distributivité', 'facteur commun', 'نشر', 'تعميل', 'تعبير حرفي', 'اختزال'],
    sections: [
      {
        id: 'expression',
        title: { ar: 'التعبير الحرفي', fr: 'Expression littérale' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'التعبير الحرفي تعبير يحتوي على حرف أو عدة حروف تمثل أعداداً. مثلاً: $A=4\\times a+7$ و $B=-5\\times(x+1)$.',
              fr: 'Une expression littérale contient une ou plusieurs lettres qui désignent des nombres. Exemples : $A=4\\times a+7$ et $B=-5\\times(x+1)$.',
            },
          },
          {
            kind: 'remark',
            content: {
              ar: 'يمكن حذف العلامة $\\times$ أمام حرف أو قوس، ونضع دائماً العدد قبل الحرف: $A=4a+7$ و $B=-5(x+1)$، و $x\\times5=5x$.',
              fr: 'On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse, et on place toujours le nombre devant la lettre : $A=4a+7$, $B=-5(x+1)$ et $x\\times5=5x$.',
            },
          },
          {
            kind: 'example',
            title: { ar: 'وضعية', fr: 'Situation' },
            statement: {
              ar: 'اشترى يحيى $3\\,\\text{kg}$ من الطماطم و $4\\,\\text{kg}$ من التفاح. ثمن كلغ التفاح يزيد بـ $4$ دراهم عن ثمن كلغ الطماطم. نرمز بـ $x$ لثمن كلغ الطماطم.',
              fr: 'Yahya achète $3\\,\\text{kg}$ de tomates et $4\\,\\text{kg}$ de pommes. Le kg de pommes coûte $4$ DH de plus que le kg de tomates, noté $x$.',
            },
            steps: [
              { ar: 'الثمن المؤدى: $3x+4(x+4)=3x+4x+16=7x+16$.', fr: 'Prix payé : $3x+4(x+4)=3x+4x+16=7x+16$.' },
              { ar: 'إذا كان $x=2{,}5$: $7\\times2{,}5+16=33{,}5$ درهماً.', fr: 'Si $x=2{,}5$ : $7\\times2{,}5+16=33{,}5$ DH.' },
            ],
          },
        ],
      },
      {
        id: 'reduire',
        title: { ar: 'اختزال تعبير حرفي', fr: 'Réduire une expression' },
        blocks: [
          {
            kind: 'rule',
            content: {
              ar: 'اختزال تعبير هو كتابته بأقل عدد ممكن من الحدود. نجمع الحدود المتشابهة (نفس الحروف ونفس الأسس).',
              fr: 'Réduire une expression, c’est l’écrire avec le moins de termes possible : on regroupe les termes de même nature (mêmes lettres, mêmes exposants).',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اختزل $C=8x+7+5x-2$ و $D=8+x-x^2+4x+5x^2+7$.', fr: 'Réduire $C=8x+7+5x-2$ et $D=8+x-x^2+4x+5x^2+7$.' },
            steps: [
              { ar: '$C=(8x+5x)+(7-2)=13x+5$.', fr: '$C=(8x+5x)+(7-2)=13x+5$.' },
              { ar: '$D=(5x^2-x^2)+(x+4x)+(8+7)=4x^2+5x+15$.', fr: '$D=(5x^2-x^2)+(x+4x)+(8+7)=4x^2+5x+15$.' },
            ],
          },
        ],
      },
      {
        id: 'developper',
        title: { ar: 'النشر', fr: 'Développer' },
        blocks: [
          {
            kind: 'definition',
            content: { ar: 'النشر هو تحويل جداء إلى مجموع أو فرق.', fr: 'Développer, c’est transformer un produit en somme ou en différence.' },
          },
          {
            kind: 'property',
            title: { ar: 'التوزيعية البسيطة', fr: 'Distributivité simple' },
            content: { ar: 'لكل أعداد نسبية $a$ و $b$ و $c$ و $k$:', fr: 'Pour tous relatifs $a$, $b$, $c$ et $k$ :' },
          },
          { kind: 'formula', tex: 'k(a+b)=ka+kb\\qquad k(a-b)=ka-kb\\qquad k(a+b+c)=ka+kb+kc' },
          {
            kind: 'example',
            statement: { ar: 'انشر $C=5x(x-1)$ و $D=3x(2-x)$.', fr: 'Développer $C=5x(x-1)$ et $D=3x(2-x)$.' },
            steps: [
              { ar: '$C=5x\\times x-5x\\times1=5x^2-5x$.', fr: '$C=5x\\times x-5x\\times1=5x^2-5x$.' },
              { ar: '$D=3x\\times2-3x\\times x=6x-3x^2$.', fr: '$D=3x\\times2-3x\\times x=6x-3x^2$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'التوزيعية المزدوجة', fr: 'Double distributivité' },
            content: { ar: 'لكل أعداد نسبية $a$ و $b$ و $c$ و $d$:', fr: 'Pour tous relatifs $a$, $b$, $c$ et $d$ :' },
          },
          { kind: 'formula', tex: '(a+b)(c+d)=ac+ad+bc+bd' },
          {
            kind: 'example',
            statement: { ar: 'انشر واختزل $B=(2x+1)(3x-2)$.', fr: 'Développer et réduire $B=(2x+1)(3x-2)$.' },
            steps: [
              { ar: '$B=2x\\times3x+2x\\times(-2)+1\\times3x+1\\times(-2)$.', fr: '$B=2x\\times3x+2x\\times(-2)+1\\times3x+1\\times(-2)$.' },
              { ar: '$B=6x^2-4x+3x-2=6x^2-x-2$.', fr: '$B=6x^2-4x+3x-2=6x^2-x-2$.' },
            ],
          },
        ],
      },
      {
        id: 'factoriser',
        title: { ar: 'التعميل', fr: 'Factoriser' },
        blocks: [
          {
            kind: 'definition',
            content: { ar: 'التعميل هو تحويل مجموع أو فرق إلى جداء.', fr: 'Factoriser, c’est transformer une somme ou une différence en produit.' },
          },
          { kind: 'formula', tex: 'ka+kb=k(a+b)\\qquad ka-kb=k(a-b)' },
          {
            kind: 'method',
            content: {
              ar: 'نبحث أولاً عن **العامل المشترك** $k$ بين جميع الحدود، ثم نخرجه أمام القوس.',
              fr: 'On cherche d’abord le **facteur commun** $k$ à tous les termes, puis on le met en facteur devant la parenthèse.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'عمّل: $A=5x^2+x$ ؛ $C=8x-2$ ؛ $D=15x-10y+5$ ؛ $E=(2x-1)+3x(2x-1)$.', fr: 'Factoriser : $A=5x^2+x$ ; $C=8x-2$ ; $D=15x-10y+5$ ; $E=(2x-1)+3x(2x-1)$.' },
            steps: [
              { ar: '$A=x\\times5x+x\\times1=x(5x+1)$.', fr: '$A=x\\times5x+x\\times1=x(5x+1)$.' },
              { ar: '$C=2\\times4x-2\\times1=2(4x-1)$.', fr: '$C=2\\times4x-2\\times1=2(4x-1)$.' },
              { ar: '$D=5\\times3x-5\\times2y+5\\times1=5(3x-2y+1)$.', fr: '$D=5\\times3x-5\\times2y+5\\times1=5(3x-2y+1)$.' },
              { ar: 'العامل المشترك هو $(2x-1)$: $E=(2x-1)(1+3x)$.', fr: 'Le facteur commun est $(2x-1)$ : $E=(2x-1)(1+3x)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'الاختزال: نجمع الحدود المتشابهة.', fr: 'Réduire : regrouper les termes de même nature.' },
      { ar: 'النشر: جداء ← مجموع. التعميل: مجموع ← جداء.', fr: 'Développer : produit → somme. Factoriser : somme → produit.' },
      { ar: '$k(a+b)=ka+kb$ و $(a+b)(c+d)=ac+ad+bc+bd$.', fr: '$k(a+b)=ka+kb$ et $(a+b)(c+d)=ac+ad+bc+bd$.' },
      { ar: 'للتعميل نبحث أولاً عن العامل المشترك.', fr: 'Pour factoriser, on cherche d’abord le facteur commun.' },
    ],
  },
  exercises: [
    {
      id: '1ac-devfac-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'اختزال', fr: 'Réduire' },
      statement: { ar: 'اختزل $C=-7x+8+5x-1$.', fr: 'Réduire $C=-7x+8+5x-1$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$-2x+7$', fr: '$-2x+7$' }, { ar: '$-12x+7$', fr: '$-12x+7$' }, { ar: '$5x$', fr: '$5x$' }, { ar: '$-2x+9$', fr: '$-2x+9$' }],
        correct: 0,
      },
      hints: [{ ar: 'اجمع حدود $x$ ثم الأعداد.', fr: 'Regroupe les termes en $x$, puis les nombres.' }],
      solution: [{ ar: '$C=(-7x+5x)+(8-1)=-2x+7$.', fr: '$C=(-7x+5x)+(8-1)=-2x+7$.' }],
    },
    {
      id: '1ac-devfac-02',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'توزيعية مزدوجة', fr: 'Double distributivité' },
      statement: { ar: 'انشر واختزل $A=(x+1)(x-2)$.', fr: 'Développer et réduire $A=(x+1)(x-2)$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$x^2-x-2$', fr: '$x^2-x-2$' }, { ar: '$x^2-2$', fr: '$x^2-2$' }, { ar: '$x^2+x-2$', fr: '$x^2+x-2$' }, { ar: '$x^2-3x-2$', fr: '$x^2-3x-2$' }],
        correct: 0,
      },
      hints: [{ ar: '$(a+b)(c+d)=ac+ad+bc+bd$.', fr: '$(a+b)(c+d)=ac+ad+bc+bd$.' }],
      solution: [
        { ar: '$A=x\\times x+x\\times(-2)+1\\times x+1\\times(-2)$.', fr: '$A=x\\times x+x\\times(-2)+1\\times x+1\\times(-2)$.' },
        { ar: '$A=x^2-2x+x-2=x^2-x-2$.', fr: '$A=x^2-2x+x-2=x^2-x-2$.' },
      ],
    },
    {
      id: '1ac-devfac-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'تعميل', fr: 'Factoriser' },
      statement: { ar: 'عمّل $C=8x-2x^2$.', fr: 'Factoriser $C=8x-2x^2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$2x(4-x)$', fr: '$2x(4-x)$' }, { ar: '$2(4x-x)$', fr: '$2(4x-x)$' }, { ar: '$x(8-x)$', fr: '$x(8-x)$' }, { ar: '$2x(4-2x)$', fr: '$2x(4-2x)$' }],
        correct: 0,
      },
      hints: [{ ar: 'العامل المشترك الأكبر بين $8x$ و $2x^2$ هو $2x$.', fr: 'Le plus grand facteur commun de $8x$ et $2x^2$ est $2x$.' }],
      solution: [
        { ar: '$8x=2x\\times4$ و $2x^2=2x\\times x$.', fr: '$8x=2x\\times4$ et $2x^2=2x\\times x$.' },
        { ar: '$C=2x(4-x)$. تحقق بالنشر: $8x-2x^2$.', fr: '$C=2x(4-x)$. Vérification en développant : $8x-2x^2$.' },
      ],
    },
    {
      id: '1ac-devfac-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'algebra',
      title: { ar: 'قيمة تعبير', fr: 'Valeur d’une expression' },
      statement: { ar: 'انشر واختزل $F=5(x+2)+3$، ثم احسب قيمته من أجل $x=2$.', fr: 'Développer et réduire $F=5(x+2)+3$, puis calculer sa valeur pour $x=2$.' },
      question: { type: 'numeric', answer: 23 },
      hints: [{ ar: '$F=5x+10+3$.', fr: '$F=5x+10+3$.' }],
      solution: [
        { ar: '$F=5x+10+3=5x+13$.', fr: '$F=5x+10+3=5x+13$.' },
        { ar: 'من أجل $x=2$: $F=5\\times2+13=23$.', fr: 'Pour $x=2$ : $F=5\\times2+13=23$.' },
      ],
    },
  ],
};
