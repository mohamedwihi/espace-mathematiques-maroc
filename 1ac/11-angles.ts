import type { LessonModule } from '@/types';
import { teacherSource } from './source';

const lessonId = '1ac-angles';

export const angles: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '1ac',
    unitId: 'angles',
    title: { ar: 'الزوايا', fr: 'Les angles' },
    summary: {
      ar: 'أنواع الزوايا، الزوايا المتتامة والمتكاملة، المتحاذية والمتقابلة بالرأس، المنصف وخاصيته المميزة، والدائرة المحاطة بمثلث.',
      fr: 'Types d’angles, angles complémentaires et supplémentaires, adjacents et opposés par le sommet, bissectrice et cercle inscrit.',
    },
    objectives: [
      { ar: 'التعرف على بعض أنواع الزوايا.', fr: 'Identifier certains types d’angles.' },
      { ar: 'التعرف على منصف زاوية وإنشاؤه.', fr: 'Identifier et construire la bissectrice d’un angle.' },
      { ar: 'استعمال الخاصية المميزة لمنصف زاوية في البرهنة.', fr: 'Utiliser la propriété caractéristique de la bissectrice dans une démonstration.' },
      { ar: 'معرفة وإنشاء الدائرة المحاطة بمثلث.', fr: 'Connaître et construire le cercle inscrit dans un triangle.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    source: teacherSource,
    keywords: ['angle', 'aigu', 'obtus', 'droit', 'plat', 'complémentaires', 'supplémentaires', 'adjacents', 'opposés par le sommet', 'bissectrice', 'cercle inscrit', 'زاوية', 'منصف', 'متتامتان', 'متكاملتان'],
    sections: [
      {
        id: 'vocabulaire',
        title: { ar: 'تعاريف ومفردات', fr: 'Définitions et vocabulaire' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'الزاوية $A\\widehat{O}B$ مكونة من نصفي مستقيم $[OA)$ و $[OB)$ لهما نفس الأصل $O$. النقطة $O$ هي **رأس** الزاوية، و $[OA)$ و $[OB)$ هما **ضلعاها**.',
              fr: 'L’angle $A\\widehat{O}B$ est formé de deux demi-droites $[OA)$ et $[OB)$ de même origine $O$. Le point $O$ est le **sommet** et $[OA)$, $[OB)$ sont les **côtés**.',
            },
          },
          {
            kind: 'list',
            items: [
              { ar: '**زاوية منعدمة**: قياسها $0^\\circ$.', fr: '**Angle nul** : il mesure $0^\\circ$.' },
              { ar: '**زاوية حادة**: قياسها بين $0^\\circ$ و $90^\\circ$.', fr: '**Angle aigu** : sa mesure est comprise entre $0^\\circ$ et $90^\\circ$.' },
              { ar: '**زاوية قائمة**: قياسها $90^\\circ$.', fr: '**Angle droit** : il mesure $90^\\circ$.' },
              { ar: '**زاوية منفرجة**: قياسها بين $90^\\circ$ و $180^\\circ$.', fr: '**Angle obtus** : sa mesure est comprise entre $90^\\circ$ et $180^\\circ$.' },
              { ar: '**زاوية مستقيمية**: قياسها $180^\\circ$.', fr: '**Angle plat** : il mesure $180^\\circ$.' },
            ],
          },
        ],
      },
      {
        id: 'complementaires',
        title: { ar: 'زاويتان متتامتان ومتكاملتان', fr: 'Angles complémentaires et supplémentaires' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: '• تكون زاويتان **متتامتين** إذا كان مجموع قياسيهما $90^\\circ$. مثال: $65^\\circ$ و $25^\\circ$.\n\n• تكون زاويتان **متكاملتين** إذا كان مجموع قياسيهما $180^\\circ$. مثال: $70^\\circ$ و $110^\\circ$.',
              fr: '• Deux angles sont **complémentaires** si la somme de leurs mesures vaut $90^\\circ$. Exemple : $65^\\circ$ et $25^\\circ$.\n\n• Deux angles sont **supplémentaires** si la somme de leurs mesures vaut $180^\\circ$. Exemple : $70^\\circ$ et $110^\\circ$.',
            },
          },
        ],
      },
      {
        id: 'adjacents',
        title: { ar: 'زاويتان متحاذيتان ومتقابلتان بالرأس', fr: 'Angles adjacents et opposés par le sommet' },
        blocks: [
          {
            kind: 'definition',
            title: { ar: 'زاويتان متحاذيتان', fr: 'Angles adjacents' },
            content: {
              ar: 'تكون زاويتان متحاذيتين إذا كان لهما **نفس الرأس** و**ضلع مشترك**، وكانتا من جهتين مختلفتين بالنسبة لهذا الضلع.',
              fr: 'Deux angles sont adjacents s’ils ont **le même sommet**, **un côté commun**, et s’ils sont situés de part et d’autre de ce côté.',
            },
          },
          {
            kind: 'definition',
            title: { ar: 'زاويتان متقابلتان بالرأس', fr: 'Angles opposés par le sommet' },
            content: {
              ar: 'تكون زاويتان متقابلتين بالرأس إذا كان لهما نفس الرأس وكان ضلعا إحداهما امتداداً لضلعي الأخرى.',
              fr: 'Deux angles sont opposés par le sommet s’ils ont le même sommet et si leurs côtés sont dans le prolongement l’un de l’autre.',
            },
          },
          {
            kind: 'property',
            content: {
              ar: 'إذا كانت زاويتان متقابلتين بالرأس فإن لهما **نفس القياس**.',
              fr: 'Si deux angles sont opposés par le sommet, alors ils ont **la même mesure**.',
            },
          },
          {
            kind: 'geometry',
            x: [-4, 4],
            y: [-2.5, 2.5],
            segments: [
              { from: [-3.5, -1.75], to: [3.5, 1.75] },
              { from: [-3.5, 1.75], to: [3.5, -1.75] },
            ],
            points: [
              { x: 0, y: 0, label: 'E' },
              { x: -3, y: 1.5, label: 'F' },
              { x: -3, y: -1.5, label: 'G' },
              { x: 3, y: 1.5, label: 'H' },
              { x: 3, y: -1.5, label: 'I' },
            ],
            caption: {
              ar: 'الزاويتان $F\\widehat{E}G$ و $H\\widehat{E}I$ متقابلتان بالرأس، إذن $F\\widehat{E}G=H\\widehat{E}I$.',
              fr: '$F\\widehat{E}G$ et $H\\widehat{E}I$ sont opposés par le sommet, donc $F\\widehat{E}G=H\\widehat{E}I$.',
            },
          },
        ],
      },
      {
        id: 'bissectrice',
        title: { ar: 'منصف زاوية', fr: 'Bissectrice d’un angle' },
        blocks: [
          {
            kind: 'definition',
            content: {
              ar: 'منصف زاوية هو نصف المستقيم الذي أصله رأس الزاوية والذي يقسمها إلى زاويتين **متقايستين**. إذا كان $[OI)$ منصف $A\\widehat{O}B$ فإن $A\\widehat{O}I=I\\widehat{O}B=\\dfrac{A\\widehat{O}B}2$.',
              fr: 'La bissectrice d’un angle est la demi-droite issue du sommet qui le partage en deux angles **de même mesure**. Si $[OI)$ est la bissectrice de $A\\widehat{O}B$ : $A\\widehat{O}I=I\\widehat{O}B=\\dfrac{A\\widehat{O}B}2$.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'الخاصية المميزة', fr: 'Propriété caractéristique' },
            content: {
              ar: '• **مباشرة**: إذا انتمت نقطة إلى منصف زاوية فإنها متساوية المسافة عن ضلعيها.\n\n• **عكسية**: إذا كانت نقطة متساوية المسافة عن ضلعي زاوية فإنها تنتمي إلى منصفها.',
              fr: '• **Directe** : si un point appartient à la bissectrice d’un angle, il est équidistant des côtés de cet angle.\n\n• **Réciproque** : si un point est équidistant des côtés d’un angle, il appartient à sa bissectrice.',
            },
          },
          {
            kind: 'property',
            title: { ar: 'منصفات مثلث', fr: 'Bissectrices d’un triangle' },
            content: {
              ar: 'منصفات الزوايا الثلاث لمثلث تتلاقى في نقطة واحدة هي **مركز الدائرة المحاطة** بهذا المثلث.',
              fr: 'Les bissectrices des trois angles d’un triangle sont concourantes en un point : le **centre du cercle inscrit** dans ce triangle.',
            },
          },
          {
            kind: 'example',
            statement: {
              ar: '$[JL)$ منصف الزاوية $I\\widehat{J}K$ و $I\\widehat{J}L=80^\\circ$، و $[JM)$ منصف $L\\widehat{J}K$. احسب $I\\widehat{J}K$ و $L\\widehat{J}M$ و $I\\widehat{J}M$.',
              fr: '$[JL)$ est la bissectrice de $I\\widehat{J}K$ avec $I\\widehat{J}L=80^\\circ$, et $[JM)$ celle de $L\\widehat{J}K$. Calculer $I\\widehat{J}K$, $L\\widehat{J}M$ et $I\\widehat{J}M$.',
            },
            steps: [
              { ar: '$I\\widehat{J}K=2\\times80^\\circ=160^\\circ$ و $L\\widehat{J}K=80^\\circ$.', fr: '$I\\widehat{J}K=2\\times80^\\circ=160^\\circ$ et $L\\widehat{J}K=80^\\circ$.' },
              { ar: '$L\\widehat{J}M=\\dfrac{80^\\circ}2=40^\\circ$.', fr: '$L\\widehat{J}M=\\dfrac{80^\\circ}2=40^\\circ$.' },
              { ar: '$I\\widehat{J}M=I\\widehat{J}L+L\\widehat{J}M=80^\\circ+40^\\circ=120^\\circ$.', fr: '$I\\widehat{J}M=I\\widehat{J}L+L\\widehat{J}M=80^\\circ+40^\\circ=120^\\circ$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'حادة $<90^\\circ$ ؛ قائمة $=90^\\circ$ ؛ منفرجة بين $90^\\circ$ و $180^\\circ$ ؛ مستقيمية $=180^\\circ$.', fr: 'Aigu $<90^\\circ$ ; droit $=90^\\circ$ ; obtus entre $90^\\circ$ et $180^\\circ$ ; plat $=180^\\circ$.' },
      { ar: 'متتامتان: المجموع $90^\\circ$ ؛ متكاملتان: المجموع $180^\\circ$.', fr: 'Complémentaires : somme $90^\\circ$ ; supplémentaires : somme $180^\\circ$.' },
      { ar: 'زاويتان متقابلتان بالرأس متقايستان.', fr: 'Deux angles opposés par le sommet ont la même mesure.' },
      { ar: 'نقطة من المنصف ⇔ متساوية المسافة عن ضلعي الزاوية.', fr: 'Point de la bissectrice ⇔ équidistant des côtés de l’angle.' },
    ],
  },
  exercises: [
    {
      id: '1ac-angles-01',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'زاوية متممة', fr: 'Angle complémentaire' },
      statement: { ar: 'ما قياس الزاوية المتممة لزاوية قياسها $35^\\circ$؟ (بالدرجة)', fr: 'Quelle est la mesure du complémentaire d’un angle de $35^\\circ$ ? (en degrés)' },
      question: { type: 'numeric', answer: 55, unit: '°' },
      hints: [{ ar: 'المجموع يساوي $90^\\circ$.', fr: 'La somme vaut $90^\\circ$.' }],
      solution: [{ ar: '$90^\\circ-35^\\circ=55^\\circ$.', fr: '$90^\\circ-35^\\circ=55^\\circ$.' }],
    },
    {
      id: '1ac-angles-02',
      lessonId,
      levelId: '1ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'متتامتان أم متكاملتان؟', fr: 'Complémentaires ou supplémentaires ?' },
      statement: { ar: 'زاويتان قياساهما $72^\\circ$ و $108^\\circ$. هما:', fr: 'Deux angles mesurent $72^\\circ$ et $108^\\circ$. Ils sont :' },
      question: {
        type: 'mcq',
        options: [{ ar: 'متكاملتان', fr: 'Supplémentaires' }, { ar: 'متتامتان', fr: 'Complémentaires' }, { ar: 'لا هذه ولا تلك', fr: 'Ni l’un ni l’autre' }],
        correct: 0,
      },
      hints: [{ ar: 'احسب المجموع.', fr: 'Calcule la somme.' }],
      solution: [{ ar: '$72^\\circ+108^\\circ=180^\\circ$، إذن الزاويتان متكاملتان.', fr: '$72^\\circ+108^\\circ=180^\\circ$ : les angles sont supplémentaires.' }],
    },
    {
      id: '1ac-angles-03',
      lessonId,
      levelId: '1ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'المنصف', fr: 'Bissectrice' },
      statement: { ar: '$[JL)$ منصف $I\\widehat{J}K$ و $I\\widehat{J}L=80^\\circ$. احسب $I\\widehat{J}K$ بالدرجة.', fr: '$[JL)$ est la bissectrice de $I\\widehat{J}K$ et $I\\widehat{J}L=80^\\circ$. Calculer $I\\widehat{J}K$ en degrés.' },
      question: { type: 'numeric', answer: 160, unit: '°' },
      hints: [{ ar: 'المنصف يقسم الزاوية إلى زاويتين متقايستين.', fr: 'La bissectrice partage l’angle en deux angles égaux.' }],
      solution: [{ ar: '$I\\widehat{J}K=2\\times I\\widehat{J}L=2\\times80^\\circ=160^\\circ$.', fr: '$I\\widehat{J}K=2\\times I\\widehat{J}L=2\\times80^\\circ=160^\\circ$.' }],
    },
    {
      id: '1ac-angles-04',
      lessonId,
      levelId: '1ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'مثلث متساوي الساقين', fr: 'Triangle isocèle' },
      statement: {
        ar: '$M$ نقطة من منصف الزاوية $X\\widehat{Y}Z$. $I$ و $J$ المسقطان العموديان لـ $M$ على $[YX)$ و $[YZ)$. بيّن أن المثلث $MIJ$ متساوي الساقين في $M$.',
        fr: '$M$ est un point de la bissectrice de $X\\widehat{Y}Z$. $I$ et $J$ sont les projetés orthogonaux de $M$ sur $[YX)$ et $[YZ)$. Montrer que $MIJ$ est isocèle en $M$.',
      },
      question: { type: 'open' },
      hints: [{ ar: 'ماذا تمثل المسافتان $MI$ و $MJ$؟', fr: 'Que représentent les distances $MI$ et $MJ$ ?' }],
      solution: [
        { ar: '$MI$ هي مسافة $M$ عن الضلع $[YX)$، و $MJ$ هي مسافتها عن الضلع $[YZ)$.', fr: '$MI$ est la distance de $M$ au côté $[YX)$ et $MJ$ sa distance au côté $[YZ)$.' },
        { ar: '$M$ تنتمي إلى المنصف، إذن حسب الخاصية المباشرة: $MI=MJ$.', fr: '$M$ appartient à la bissectrice, donc d’après la propriété directe : $MI=MJ$.' },
        { ar: 'إذن المثلث $MIJ$ متساوي الساقين في $M$.', fr: 'Donc le triangle $MIJ$ est isocèle en $M$.' },
      ],
    },
  ],
};
