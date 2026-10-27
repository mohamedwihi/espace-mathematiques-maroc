import type { LessonModule } from '@/types';

const lessonId = '2bac-complexes';

/** Cercle approché par un polygone régulier (pour les figures). */
const circle = (cx: number, cy: number, r: number, n = 72): [number, number][] =>
  Array.from({ length: n }, (_, i) => [cx + r * Math.cos((2 * Math.PI * i) / n), cy + r * Math.sin((2 * Math.PI * i) / n)]);

export const complexes: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'complex',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'الأعداد العقدية', fr: 'Les nombres complexes' },
    summary: {
      ar: 'الشكل الجبري، المرافق، المعيار والعمدة، الشكل المثلثي والأسي، صيغة موافر، المعادلات من الدرجة الثانية، والتأويل الهندسي (الإزاحة، التحاكي، الدوران).',
      fr: 'Forme algébrique, conjugué, module et argument, formes trigonométrique et exponentielle, formule de Moivre, équations du second degré, interprétation géométrique (translation, homothétie, rotation).',
    },
    objectives: [
      { ar: 'الانتقال بين الأشكال الجبرية والمثلثية والأسية.', fr: 'Passer entre formes algébrique, trigonométrique et exponentielle.' },
      { ar: 'حل معادلة من الدرجة الثانية في $\\mathbb C$.', fr: 'Résoudre une équation du second degré dans $\\mathbb C$.' },
      { ar: 'استعمال الأعداد العقدية في الهندسة.', fr: 'Utiliser les complexes en géométrie.' },
    ],
    durationMinutes: 60,
    reviewed: false,
    keywords: ['complexe', 'module', 'argument', 'conjugué', 'Moivre', 'rotation', 'عدد عقدي', 'معيار', 'عمدة', 'مرافق'],
    sections: [
      {
        id: 'algebrique',
        title: { ar: 'الشكل الجبري', fr: 'Forme algébrique' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'كل عدد عقدي يكتب بكيفية وحيدة $z=a+ib$ مع $a,b\\in\\mathbb R$ و $i^2=-1$. $a=\\mathrm{Re}(z)$ و $b=\\mathrm{Im}(z)$. **المرافق** $\\bar z=a-ib$، و**المعيار** $|z|=\\sqrt{a^2+b^2}=\\sqrt{z\\bar z}$.',
              fr: 'Tout complexe s’écrit de façon unique $z=a+ib$ avec $a,b\\in\\mathbb R$ et $i^2=-1$ ; $a=\\mathrm{Re}(z)$, $b=\\mathrm{Im}(z)$. Le **conjugué** est $\\bar z=a-ib$ et le **module** $|z|=\\sqrt{a^2+b^2}=\\sqrt{z\\bar z}$.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: '$\\overline{z+z\'}=\\bar z+\\bar z\'$ ؛ $\\overline{zz\'}=\\bar z\\,\\bar z\'$ ؛ $|zz\'|=|z||z\'|$ ؛ $\\left|\\dfrac z{z\'}\\right|=\\dfrac{|z|}{|z\'|}$. $z$ حقيقي ⟺ $\\bar z=z$، و $z$ تخيلي صرف ⟺ $\\bar z=-z$.',
              fr: '$\\overline{z+z\'}=\\bar z+\\bar z\'$ ; $\\overline{zz\'}=\\bar z\\,\\bar z\'$ ; $|zz\'|=|z||z\'|$ ; $\\left|\\dfrac z{z\'}\\right|=\\dfrac{|z|}{|z\'|}$. $z$ réel ⟺ $\\bar z=z$ ; $z$ imaginaire pur ⟺ $\\bar z=-z$.',
            },
          },
        ],
      },
      {
        id: 'trigonometrique',
        title: { ar: 'الشكل المثلثي والأسي', fr: 'Formes trigonométrique et exponentielle' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: 'لكل $z\\neq0$: $z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$ مع $r=|z|$ و $\\theta\\equiv\\arg z\\ [2\\pi]$.\n\n• $e^{i\\theta}e^{i\\theta\'}=e^{i(\\theta+\\theta\')}$ ؛ $\\arg(zz\')\\equiv\\arg z+\\arg z\'$ ؛ $\\arg\\dfrac z{z\'}\\equiv\\arg z-\\arg z\'$.\n\n• **صيغة موافر**: $(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$.\n\n• **صيغتا أولير**: $\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}2$ و $\\sin\\theta=\\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}$.',
              fr: 'Pour $z\\neq0$ : $z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$ avec $r=|z|$ et $\\theta\\equiv\\arg z\\ [2\\pi]$.\n\n• $e^{i\\theta}e^{i\\theta\'}=e^{i(\\theta+\\theta\')}$ ; $\\arg(zz\')\\equiv\\arg z+\\arg z\'$ ; $\\arg\\dfrac z{z\'}\\equiv\\arg z-\\arg z\'$.\n\n• **Moivre** : $(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta$.\n\n• **Euler** : $\\cos\\theta=\\dfrac{e^{i\\theta}+e^{-i\\theta}}2$ et $\\sin\\theta=\\dfrac{e^{i\\theta}-e^{-i\\theta}}{2i}$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'اكتب $z=1+i$ على الشكل الأسي.', fr: 'Écrire $z=1+i$ sous forme exponentielle.' },
            steps: [{ ar: '$|z|=\\sqrt2$ و $\\cos\\theta=\\sin\\theta=\\dfrac{\\sqrt2}2$ إذن $z=\\sqrt2e^{i\\frac\\pi4}$.', fr: '$|z|=\\sqrt2$ et $\\cos\\theta=\\sin\\theta=\\dfrac{\\sqrt2}2$ donc $z=\\sqrt2e^{i\\frac\\pi4}$.' }],
          },
          {
            kind: 'geometry',
            polygons: [{ points: circle(0, 0, Math.SQRT2), color: 'ink' }],
            segments: [{ from: [0, 0], to: [1, 1] }, { from: [1, 0], to: [1, 1], dashed: true }],
            points: [{ x: 0, y: 0, label: 'O' }, { x: 1, y: 1, label: 'M(1+i)' }],
            x: [-2, 2],
            y: [-2, 2],
            caption: { ar: 'النقطة $M$ لحقها $1+i$: $OM=\\sqrt2$ و $(\\vec u,\\overrightarrow{OM})\\equiv\\dfrac\\pi4$.', fr: 'Le point $M$ d’affixe $1+i$ : $OM=\\sqrt2$ et $(\\vec u,\\overrightarrow{OM})\\equiv\\dfrac\\pi4$.' },
          },
        ],
      },
      {
        id: 'equations-geometrie',
        title: { ar: 'المعادلات والتأويل الهندسي', fr: 'Équations et géométrie' },
        blocks: [
          {
            kind: 'property',
            title: { ar: 'المعادلة $az^2+bz+c=0$ (معاملات حقيقية)', fr: 'L’équation $az^2+bz+c=0$ (coefficients réels)' },
            content: {
              ar: 'إذا كان $\\Delta<0$، فللمعادلة حلان عقديان مترافقان: $z_{1,2}=\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$.',
              fr: 'Si $\\Delta<0$, l’équation a deux solutions complexes conjuguées : $z_{1,2}=\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'التحويلات', fr: 'Transformations' },
            content: {
              ar: '• $AB=|z_B-z_A|$ و $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\arg\\dfrac{z_C-z_A}{z_B-z_A}$.\n\n• الإزاحة ذات المتجهة $\\vec u(b)$: $z\'=z+b$.\n\n• التحاكي الذي مركزه $\\Omega(\\omega)$ ونسبته $k$: $z\'-\\omega=k(z-\\omega)$.\n\n• الدوران الذي مركزه $\\Omega(\\omega)$ وزاويته $\\theta$: $z\'-\\omega=e^{i\\theta}(z-\\omega)$.',
              fr: '• $AB=|z_B-z_A|$ et $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\arg\\dfrac{z_C-z_A}{z_B-z_A}$.\n\n• Translation de vecteur $\\vec u(b)$ : $z\'=z+b$.\n\n• Homothétie de centre $\\Omega(\\omega)$ et de rapport $k$ : $z\'-\\omega=k(z-\\omega)$.\n\n• Rotation de centre $\\Omega(\\omega)$ et d’angle $\\theta$ : $z\'-\\omega=e^{i\\theta}(z-\\omega)$.',
            },
          },
        ],
      },
    ],
    recap: [
      { ar: '$z=re^{i\\theta}$ مع $r=|z|$.', fr: '$z=re^{i\\theta}$ avec $r=|z|$.' },
      { ar: 'الدوران: $z\'-\\omega=e^{i\\theta}(z-\\omega)$.', fr: 'Rotation : $z\'-\\omega=e^{i\\theta}(z-\\omega)$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-cpx-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'معيار', fr: 'Module' },
      statement: { ar: 'احسب $|3-4i|$.', fr: 'Calculer $|3-4i|$.' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\sqrt{9+16}$.', fr: '$\\sqrt{9+16}$.' }],
      solution: [{ ar: '$|3-4i|=5$.', fr: '$|3-4i|=5$.' }],
    },
    {
      id: '2bac-cpx-02',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'algebra',
      title: { ar: 'جداء', fr: 'Produit' },
      statement: { ar: 'ما الجزء الحقيقي لـ $(2+i)(1-3i)$؟', fr: 'Quelle est la partie réelle de $(2+i)(1-3i)$ ?' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$2-6i+i-3i^2$.', fr: '$2-6i+i-3i^2$.' }],
      solution: [{ ar: '$(2+i)(1-3i)=5-5i$، الجزء الحقيقي $5$.', fr: '$(2+i)(1-3i)=5-5i$ ; partie réelle $5$.' }],
    },
    {
      id: '2bac-cpx-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'معادلة', fr: 'Équation' },
      statement: { ar: 'ما حلول $z^2-2z+5=0$ في $\\mathbb C$؟', fr: 'Quelles sont les solutions de $z^2-2z+5=0$ dans $\\mathbb C$ ?' },
      question: { type: 'mcq', options: [{ ar: '$1+2i$ و $1-2i$', fr: '$1+2i$ et $1-2i$' }, { ar: '$2+i$ و $2-i$', fr: '$2+i$ et $2-i$' }, { ar: '$-1\\pm2i$', fr: '$-1\\pm2i$' }], correct: 0 },
      hints: [{ ar: '$\\Delta=4-20=-16$.', fr: '$\\Delta=4-20=-16$.' }],
      solution: [{ ar: '$z=\\dfrac{2\\pm4i}{2}=1\\pm2i$.', fr: '$z=\\dfrac{2\\pm4i}{2}=1\\pm2i$.' }],
    },
    {
      id: '2bac-cpx-04',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'algebra',
      title: { ar: 'عمدة', fr: 'Argument' },
      statement: { ar: 'ما عمدة $z=-2i$ (في $]-\\pi;\\pi]$)؟', fr: 'Quel est l’argument de $z=-2i$ (dans $]-\\pi;\\pi]$) ?' },
      question: { type: 'mcq', options: [{ ar: '$-\\dfrac\\pi2$', fr: '$-\\dfrac\\pi2$' }, { ar: '$\\dfrac\\pi2$', fr: '$\\dfrac\\pi2$' }, { ar: '$\\pi$', fr: '$\\pi$' }, { ar: '$0$', fr: '$0$' }], correct: 0 },
      hints: [{ ar: '$-2i=2e^{-i\\frac\\pi2}$.', fr: '$-2i=2e^{-i\\frac\\pi2}$.' }],
      solution: [{ ar: '$\\arg z\\equiv-\\dfrac\\pi2$.', fr: '$\\arg z\\equiv-\\dfrac\\pi2$.' }],
    },
  ],
};
