import type { Lesson } from '@/types';

export const lesson2acPythagoras: Lesson = {
  id: '2ac-pythagoras',
  levelId: '2ac',
  unitId: 'pythagoras',
  title: { ar: 'مبرهنة فيثاغورس ومبرهنتها العكسية', fr: 'Théorème de Pythagore et sa réciproque' },
  summary: {
    ar: 'حساب طول ضلع في مثلث قائم الزاوية، والتحقق من أن مثلثاً قائم الزاوية.',
    fr: "Calculer une longueur dans un triangle rectangle et démontrer qu'un triangle est rectangle.",
  },
  objectives: [
    { ar: 'معرفة مبرهنة فيثاغورس وتطبيقها لحساب طول.', fr: 'Connaître le théorème de Pythagore et l’appliquer pour calculer une longueur.' },
    { ar: 'استعمال المبرهنة العكسية لإثبات أن مثلثاً قائم الزاوية.', fr: 'Utiliser la réciproque pour démontrer qu’un triangle est rectangle.' },
    { ar: 'إثبات أن مثلثاً ليس قائم الزاوية.', fr: 'Démontrer qu’un triangle n’est pas rectangle.' },
  ],
  durationMinutes: 35,
  reviewed: false,
  featured: true,
  keywords: ['Pythagore', 'triangle rectangle', 'hypoténuse', 'فيثاغورس', 'وتر', 'مثلث قائم'],
  sections: [
    {
      id: 'theorem',
      title: { ar: 'مبرهنة فيثاغورس', fr: 'Le théorème de Pythagore' },
      blocks: [
        {
          kind: 'theorem',
          content: {
            ar: 'إذا كان $ABC$ مثلثاً قائم الزاوية في $A$، فإن مربع طول الوتر يساوي مجموع مربعي طولي الضلعين الآخرين:',
            fr: 'Si $ABC$ est un triangle rectangle en $A$, alors le carré de la longueur de l’hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés :',
          },
        },
        { kind: 'formula', tex: 'BC^2=AB^2+AC^2' },
        {
          kind: 'geometry',
          x: [-1, 5.5],
          y: [-1, 4],
          polygons: [{ points: [[0, 0], [4, 0], [0, 3]], color: 'brand' }],
          rightAngles: [{ at: [0, 0], u: [1, 0], v: [0, 1] }],
          points: [
            { x: 0, y: 0, label: 'A' },
            { x: 4, y: 0, label: 'B' },
            { x: 0, y: 3, label: 'C' },
          ],
          caption: {
            ar: 'المثلث $ABC$ قائم الزاوية في $A$، والوتر هو $[BC]$ (الضلع المقابل للزاوية القائمة).',
            fr: 'Le triangle $ABC$ est rectangle en $A$ ; l’hypoténuse est $[BC]$, le côté opposé à l’angle droit.',
          },
        },
        {
          kind: 'example',
          statement: {
            ar: '$ABC$ مثلث قائم الزاوية في $A$ حيث $AB=4\\,\\text{cm}$ و $AC=3\\,\\text{cm}$. احسب $BC$.',
            fr: '$ABC$ est rectangle en $A$ avec $AB=4\\,\\text{cm}$ et $AC=3\\,\\text{cm}$. Calculer $BC$.',
          },
          steps: [
            { ar: 'المثلث قائم الزاوية في $A$، إذن حسب مبرهنة فيثاغورس: $BC^2=AB^2+AC^2$.', fr: 'Le triangle est rectangle en $A$, donc d’après le théorème de Pythagore : $BC^2=AB^2+AC^2$.' },
            { ar: '$BC^2=4^2+3^2=16+9=25$.', fr: '$BC^2=4^2+3^2=16+9=25$.' },
            { ar: 'بما أن $BC>0$: $BC=\\sqrt{25}=5\\,\\text{cm}$.', fr: 'Comme $BC>0$ : $BC=\\sqrt{25}=5\\,\\text{cm}$.' },
          ],
        },
        {
          kind: 'example',
          title: { ar: 'حساب طول ضلع للزاوية القائمة', fr: "Calcul d'un côté de l'angle droit" },
          statement: {
            ar: '$EFG$ مثلث قائم الزاوية في $E$ حيث $FG=13$ و $EF=5$. احسب $EG$.',
            fr: '$EFG$ est rectangle en $E$ avec $FG=13$ et $EF=5$. Calculer $EG$.',
          },
          steps: [
            { ar: 'الوتر هو $[FG]$، إذن $FG^2=EF^2+EG^2$.', fr: 'L’hypoténuse est $[FG]$, donc $FG^2=EF^2+EG^2$.' },
            { ar: '$EG^2=FG^2-EF^2=169-25=144$.', fr: '$EG^2=FG^2-EF^2=169-25=144$.' },
            { ar: '$EG=\\sqrt{144}=12$.', fr: '$EG=\\sqrt{144}=12$.' },
          ],
        },
      ],
    },
    {
      id: 'converse',
      title: { ar: 'المبرهنة العكسية', fr: 'La réciproque' },
      blocks: [
        {
          kind: 'theorem',
          content: {
            ar: 'إذا كان في مثلث $ABC$: $BC^2=AB^2+AC^2$، فإن المثلث $ABC$ قائم الزاوية في $A$.',
            fr: 'Si, dans un triangle $ABC$, on a $BC^2=AB^2+AC^2$, alors le triangle $ABC$ est rectangle en $A$.',
          },
        },
        {
          kind: 'method',
          content: {
            ar: 'نحسب **على حدة** مربع أكبر طول ومجموع مربعي الطولين الآخرين، ثم نقارن النتيجتين.',
            fr: 'On calcule **séparément** le carré de la plus grande longueur et la somme des carrés des deux autres, puis on compare.',
          },
        },
        {
          kind: 'example',
          statement: {
            ar: 'مثلث $RST$ حيث $RS=6$ و $ST=10$ و $RT=8$. هل هو قائم الزاوية؟',
            fr: 'Le triangle $RST$ a pour côtés $RS=6$, $ST=10$ et $RT=8$. Est-il rectangle ?',
          },
          steps: [
            { ar: 'أكبر طول هو $ST$: $ST^2=100$.', fr: 'La plus grande longueur est $ST$ : $ST^2=100$.' },
            { ar: '$RS^2+RT^2=36+64=100$.', fr: '$RS^2+RT^2=36+64=100$.' },
            { ar: 'بما أن $ST^2=RS^2+RT^2$، فحسب المبرهنة العكسية لفيثاغورس المثلث $RST$ قائم الزاوية في $R$.', fr: 'Comme $ST^2=RS^2+RT^2$, d’après la réciproque du théorème de Pythagore, $RST$ est rectangle en $R$.' },
          ],
        },
        {
          kind: 'example',
          title: { ar: 'مثلث غير قائم', fr: 'Triangle non rectangle' },
          statement: { ar: 'مثلث أطواله $4$ و $5$ و $7$. هل هو قائم الزاوية؟', fr: 'Un triangle a pour côtés $4$, $5$ et $7$. Est-il rectangle ?' },
          steps: [
            { ar: '$7^2=49$ و $4^2+5^2=16+25=41$.', fr: '$7^2=49$ et $4^2+5^2=16+25=41$.' },
            { ar: '$49\\neq41$، إذن حسب مبرهنة فيثاغورس المثلث ليس قائم الزاوية.', fr: '$49\\neq41$, donc d’après le théorème de Pythagore (contraposée), le triangle n’est pas rectangle.' },
          ],
        },
      ],
    },
  ],
  recap: [
    { ar: 'مثلث قائم في $A$ ⇒ $BC^2=AB^2+AC^2$.', fr: 'Rectangle en $A$ ⇒ $BC^2=AB^2+AC^2$.' },
    { ar: '$BC^2=AB^2+AC^2$ ⇒ المثلث قائم في $A$ (المبرهنة العكسية).', fr: '$BC^2=AB^2+AC^2$ ⇒ rectangle en $A$ (réciproque).' },
    { ar: 'الوتر هو أطول ضلع، ويقابل الزاوية القائمة.', fr: "L'hypoténuse est le plus grand côté, opposé à l'angle droit." },
    { ar: 'إذا لم تتحقق المساواة، فالمثلث ليس قائم الزاوية.', fr: "Si l'égalité n'est pas vérifiée, le triangle n'est pas rectangle." },
  ],
};
