import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '2ac-calcul-litteral';

export const calculLitteral: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2ac',
    unitId: 'literal',
    title: { ar: 'الحساب الحرفي', fr: 'Calcul littéral' },
    summary: {
      ar: 'التعابير الحرفية واختزالها، النشر (توزيعية بسيطة ومزدوجة)، التعميل والمتطابقات الهامة.',
      fr: 'Expressions littérales et réduction, développement (simple et double distributivité), factorisation et identités remarquables.',
    },
    objectives: [
      { ar: 'اختزال تعبير حرفي.', fr: 'Réduire une expression littérale.' },
      { ar: 'استعمال $k(a+b)=ka+kb$ في الاتجاهين.', fr: 'Utiliser $k(a+b)=ka+kb$ dans les deux sens.' },
      { ar: 'نشر $(a+b)(c+d)$.', fr: 'Développer $(a+b)(c+d)$.' },
      { ar: 'استعمال المتطابقات الهامة.', fr: 'Utiliser les identités remarquables.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['expression littérale', 'réduire', 'développer', 'factoriser', 'distributivité', 'identité remarquable', 'تعبير حرفي', 'اختزال', 'نشر', 'تعميل', 'متطابقات هامة'],
    sections: [
      {
        id: 'expression',
        title: { ar: 'التعبير الحرفي واختزاله', fr: 'Expression littérale et réduction' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'التعبير الحرفي تعبير رياضي يتضمن **أعداداً وحروفاً**. أمثلة: مساحة مثلث $A=\\dfrac{b\\times h}2$ ؛ حجم مكعب $V=c^3$ ؛ السرعة $v=\\dfrac dt$.',
              fr: 'Une expression littérale est une expression mathématique contenant **des nombres et des lettres**. Exemples : aire d’un triangle $A=\\dfrac{b\\times h}2$ ; volume d’un cube $V=c^3$ ; vitesse $v=\\dfrac dt$.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'الاختزال', fr: 'Réduire' },
            content: {
              ar: 'اختزال تعبير حرفي هو تبسيطه بتجميع الحدود المتشابهة، وترتيبها من الأس الأكبر إلى الأصغر.',
              fr: 'Réduire une expression littérale, c’est la simplifier en regroupant les termes semblables, rangés du plus grand au plus petit exposant.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اختزل $A=18x^2+7-3x^3+8x-5+5x^3-20x^2-x$.', fr: 'Réduire $A=18x^2+7-3x^3+8x-5+5x^3-20x^2-x$.' },
            steps: [
              { ar: '$A=(-3x^3+5x^3)+(18x^2-20x^2)+(8x-x)+(7-5)$.', fr: '$A=(-3x^3+5x^3)+(18x^2-20x^2)+(8x-x)+(7-5)$.' },
              { ar: '$A=2x^3-2x^2+7x+2$.', fr: '$A=2x^3-2x^2+7x+2$.' },
            ],
          },
        ],
      },
      {
        id: 'developpement',
        title: { ar: 'النشر والتعميل', fr: 'Développement et factorisation' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'النشر', fr: 'Développer' },
            content: {
              ar: 'النشر هو تحويل جداء إلى مجموع (أو فرق): $k(a+b)=ka+kb$ و $k(a-b)=ka-kb$.',
              fr: 'Développer, c’est transformer un produit en une somme (ou une différence) : $k(a+b)=ka+kb$ et $k(a-b)=ka-kb$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'انشر.', fr: 'Développer.' },
            steps: [
              { ar: '$3x(3-x)=9x-3x^2$ ؛ $7(-x-2)=-7x-14$.', fr: '$3x(3-x)=9x-3x^2$ ; $7(-x-2)=-7x-14$.' },
            ],
          },
          {
            kind: 'property',
            title: { ar: 'التوزيعية المزدوجة', fr: 'Double distributivité' },
            content: { ar: '$(a+b)(c+d)=ac+ad+bc+bd$.', fr: '$(a+b)(c+d)=ac+ad+bc+bd$.' },
          },
          {
            kind: 'example',
            statement: { ar: 'انشر واختزل.', fr: 'Développer et réduire.' },
            steps: [
              { ar: '$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6$.', fr: '$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6$.' },
              { ar: '$(x+1)(x^2+x+2)=x^3+x^2+2x+x^2+x+2=x^3+2x^2+3x+2$.', fr: '$(x+1)(x^2+x+2)=x^3+x^2+2x+x^2+x+2=x^3+2x^2+3x+2$.' },
            ],
          },
          {
            kind: 'definition',
            title: { ar: 'التعميل', fr: 'Factoriser' },
            content: {
              ar: 'التعميل هو تحويل مجموع (أو فرق) إلى جداء: $ka+kb=k(a+b)$ و $ka-kb=k(a-b)$.',
              fr: 'Factoriser, c’est transformer une somme (ou une différence) en un produit : $ka+kb=k(a+b)$ et $ka-kb=k(a-b)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'عمّل.', fr: 'Factoriser.' },
            steps: [
              { ar: '$6x^2+x=x(6x+1)$ ؛ $x^5-x^3+x^2=x^2(x^3-x+1)$.', fr: '$6x^2+x=x(6x+1)$ ; $x^5-x^3+x^2=x^2(x^3-x+1)$.' },
              { ar: '$5x(x+1)+(x+1)=(x+1)(5x+1)$.', fr: '$5x(x+1)+(x+1)=(x+1)(5x+1)$.' },
            ],
          },
        ],
      },
      {
        id: 'identites',
        title: { ar: 'المتطابقات الهامة', fr: 'Identités remarquables' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• $(a+b)^2=a^2+2ab+b^2$\n\n• $(a-b)^2=a^2-2ab+b^2$\n\n• $(a-b)(a+b)=a^2-b^2$',
              fr: '• $(a+b)^2=a^2+2ab+b^2$\n\n• $(a-b)^2=a^2-2ab+b^2$\n\n• $(a-b)(a+b)=a^2-b^2$',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'انشر ثم عمّل.', fr: 'Développer puis factoriser.' },
            steps: [
              { ar: '$(3x-5)^2=9x^2-30x+25$ ؛ $(7x+2)(7x-2)=49x^2-4$.', fr: '$(3x-5)^2=9x^2-30x+25$ ; $(7x+2)(7x-2)=49x^2-4$.' },
              { ar: '$x^2+6x+9=(x+3)^2$ ؛ $25x^2-20x+4=(5x-2)^2$ ؛ $64x^2-49=(8x-7)(8x+7)$.', fr: '$x^2+6x+9=(x+3)^2$ ; $25x^2-20x+4=(5x-2)^2$ ; $64x^2-49=(8x-7)(8x+7)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'نجمع الحدود المتشابهة فقط.', fr: 'On ne regroupe que les termes semblables.' },
      { ar: 'النشر: جداء ← مجموع؛ التعميل: مجموع ← جداء.', fr: 'Développer : produit → somme ; factoriser : somme → produit.' },
      { ar: '$(a+b)(c+d)=ac+ad+bc+bd$.', fr: '$(a+b)(c+d)=ac+ad+bc+bd$.' },
      { ar: 'المتطابقات الهامة الثلاث تُستعمل في الاتجاهين.', fr: 'Les trois identités remarquables s’utilisent dans les deux sens.' },
    ],
  },
  exercises: [
    {
      id: '2ac-lit-01',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'اختزال', fr: 'Réduction' },
      statement: { ar: 'اختزل $A=3a-5+\\dfrac12a+10-a$.', fr: 'Réduire $A=3a-5+\\dfrac12a+10-a$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$\\dfrac52a+5$', fr: '$\\dfrac52a+5$' }, { ar: '$\\dfrac72a+5$', fr: '$\\dfrac72a+5$' }, { ar: '$\\dfrac52a-15$', fr: '$\\dfrac52a-15$' }, { ar: '$\\dfrac{15}2a$', fr: '$\\dfrac{15}2a$' }],
        correct: 0,
      },
      hints: [{ ar: '$3a+\\dfrac12a-a=\\dfrac52a$.', fr: '$3a+\\dfrac12a-a=\\dfrac52a$.' }],
      solution: [{ ar: '$A=\\left(3+\\dfrac12-1\\right)a+(-5+10)=\\dfrac52a+5$.', fr: '$A=\\left(3+\\dfrac12-1\\right)a+(-5+10)=\\dfrac52a+5$.' }],
    },
    {
      id: '2ac-lit-02',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'توزيعية مزدوجة', fr: 'Double distributivité' },
      statement: { ar: 'انشر واختزل $(x-5)(x+7)$.', fr: 'Développer et réduire $(x-5)(x+7)$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$x^2+2x-35$', fr: '$x^2+2x-35$' }, { ar: '$x^2-2x-35$', fr: '$x^2-2x-35$' }, { ar: '$x^2+12x-35$', fr: '$x^2+12x-35$' }, { ar: '$x^2-35$', fr: '$x^2-35$' }],
        correct: 0,
      },
      hints: [{ ar: '$7x-5x=2x$.', fr: '$7x-5x=2x$.' }],
      solution: [{ ar: '$x^2+7x-5x-35=x^2+2x-35$.', fr: '$x^2+7x-5x-35=x^2+2x-35$.' }],
    },
    {
      id: '2ac-lit-03',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'عامل مشترك', fr: 'Facteur commun' },
      statement: { ar: 'عمّل $F=2(3x-2)-9x(3x-2)$.', fr: 'Factoriser $F=2(3x-2)-9x(3x-2)$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(3x-2)(2-9x)$', fr: '$(3x-2)(2-9x)$' }, { ar: '$(3x-2)(2+9x)$', fr: '$(3x-2)(2+9x)$' }, { ar: '$-7x(3x-2)$', fr: '$-7x(3x-2)$' }, { ar: '$(3x-2)^2$', fr: '$(3x-2)^2$' }],
        correct: 0,
      },
      hints: [{ ar: 'العامل المشترك هو $(3x-2)$.', fr: 'Le facteur commun est $(3x-2)$.' }],
      solution: [{ ar: '$F=(3x-2)\\times2-(3x-2)\\times9x=(3x-2)(2-9x)$.', fr: '$F=(3x-2)\\times2-(3x-2)\\times9x=(3x-2)(2-9x)$.' }],
    },
    {
      id: '2ac-lit-04',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'متطابقة هامة', fr: 'Identité remarquable' },
      statement: { ar: 'انشر $\\left(-3x+\\dfrac12\\right)^2$.', fr: 'Développer $\\left(-3x+\\dfrac12\\right)^2$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$9x^2-3x+\\dfrac14$', fr: '$9x^2-3x+\\dfrac14$' }, { ar: '$9x^2+\\dfrac14$', fr: '$9x^2+\\dfrac14$' }, { ar: '$-9x^2-3x+\\dfrac14$', fr: '$-9x^2-3x+\\dfrac14$' }, { ar: '$9x^2+3x+\\dfrac14$', fr: '$9x^2+3x+\\dfrac14$' }],
        correct: 0,
      },
      hints: [{ ar: '$(a+b)^2$ مع $a=-3x$ و $b=\\dfrac12$.', fr: '$(a+b)^2$ avec $a=-3x$ et $b=\\dfrac12$.' }],
      solution: [{ ar: '$(-3x)^2+2\\times(-3x)\\times\\dfrac12+\\dfrac14=9x^2-3x+\\dfrac14$.', fr: '$(-3x)^2+2\\times(-3x)\\times\\dfrac12+\\dfrac14=9x^2-3x+\\dfrac14$.' }],
    },
    {
      id: '2ac-lit-05',
      lessonId,
      levelId: '2ac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'تعميل بمتطابقة', fr: 'Factoriser avec une identité' },
      statement: { ar: 'عمّل $25x^2-1$.', fr: 'Factoriser $25x^2-1$.' },
      question: {
        type: 'mcq',
        options: [{ ar: '$(5x-1)(5x+1)$', fr: '$(5x-1)(5x+1)$' }, { ar: '$(5x-1)^2$', fr: '$(5x-1)^2$' }, { ar: '$(25x-1)(x+1)$', fr: '$(25x-1)(x+1)$' }, { ar: '$5(5x^2-1)$', fr: '$5(5x^2-1)$' }],
        correct: 0,
      },
      hints: [{ ar: '$a^2-b^2=(a-b)(a+b)$ مع $a=5x$ و $b=1$.', fr: '$a^2-b^2=(a-b)(a+b)$ avec $a=5x$ et $b=1$.' }],
      solution: [{ ar: '$25x^2-1=(5x)^2-1^2=(5x-1)(5x+1)$.', fr: '$25x^2-1=(5x)^2-1^2=(5x-1)(5x+1)$.' }],
    },
    {
      id: '2ac-lit-06',
      lessonId,
      levelId: '2ac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'قيمة تعبير', fr: 'Valeur d’une expression' },
      statement: { ar: 'احسب $(x+3)(x+7)$ من أجل $x=2$.', fr: 'Calculer $(x+3)(x+7)$ pour $x=2$.' },
      question: { type: 'numeric', answer: 45 },
      hints: [{ ar: 'عوّض $x$ بـ $2$.', fr: 'Remplace $x$ par $2$.' }],
      solution: [{ ar: '$(2+3)(2+7)=5\\times9=45$.', fr: '$(2+3)(2+7)=5\\times9=45$.' }],
    },
  ],
};
