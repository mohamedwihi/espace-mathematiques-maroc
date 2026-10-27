import type { LessonModule } from '@/types';

const lessonId = '3ac-thales';

export const thales: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '3ac',
    unitId: 'thales',
    title: { ar: 'مبرهنة طاليس', fr: 'Théorème de Thalès' },
    summary: {
      ar: 'مبرهنة طاليس المباشرة في الوضعيات الثلاث، والمبرهنة العكسية لإثبات توازي مستقيمين.',
      fr: 'Théorème de Thalès direct dans les trois configurations, et réciproque pour démontrer un parallélisme.',
    },
    objectives: [
      { ar: 'حساب أطوال باستعمال مبرهنة طاليس.', fr: 'Calculer des longueurs avec le théorème de Thalès.' },
      { ar: 'إثبات توازي مستقيمين بالمبرهنة العكسية.', fr: 'Démontrer que deux droites sont parallèles avec la réciproque.' },
    ],
    durationMinutes: 35,
    reviewed: false,
    keywords: ['Thalès', 'parallèles', 'proportionnalité', 'réciproque', 'طاليس', 'توازي', 'تناسب'],
    sections: [
      {
        id: 'direct',
        title: { ar: 'المبرهنة المباشرة', fr: 'Théorème direct' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'ليكن $(d_1)$ و $(d_2)$ مستقيمين متقاطعين في $A$، و $B,M\\in(d_1)$ و $C,N\\in(d_2)$ مختلفة عن $A$. إذا كان $(MN)\\parallel(BC)$ فإن: $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$.',
              fr: 'Soient $(d_1)$ et $(d_2)$ deux droites sécantes en $A$, $B,M\\in(d_1)$ et $C,N\\in(d_2)$ distincts de $A$. Si $(MN)\\parallel(BC)$ alors : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$.',
            },
          },
          {
            kind: 'geometry',
            x: [-0.6, 6.6],
            y: [-0.6, 4.6],
            polygons: [{ points: [[3, 4], [0, 0], [6, 0]], color: 'brand' }],
            segments: [{ from: [1.5, 2], to: [4.5, 2] }],
            points: [
              { x: 3, y: 4, label: 'A' },
              { x: 0, y: 0, label: 'B' },
              { x: 6, y: 0, label: 'C' },
              { x: 1.5, y: 2, label: 'M' },
              { x: 4.5, y: 2, label: 'N' },
            ],
            caption: { ar: 'الوضعية «مثلث»: $(MN)\\parallel(BC)$.', fr: 'Configuration « triangle » : $(MN)\\parallel(BC)$.' },
          },
          {
            kind: 'remark',
            content: {
              ar: 'تبقى المبرهنة صحيحة إذا كانت $M$ و $N$ على امتدادي الضلعين (وضعية «فراشة»).',
              fr: 'Le théorème reste vrai si $M$ et $N$ sont sur les prolongements des côtés (configuration « papillon »).',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$AM=20$ و $AN=25$ و $AC=45$ و $BC=27$ مع $(MN)\\parallel(BC)$. احسب $AB$ و $MN$.', fr: '$AM=20$, $AN=25$, $AC=45$, $BC=27$ avec $(MN)\\parallel(BC)$. Calculer $AB$ et $MN$.' },
            steps: [
              { ar: '$\\dfrac{20}{AB}=\\dfrac{25}{45}$ إذن $AB=\\dfrac{20\\times45}{25}=36$.', fr: '$\\dfrac{20}{AB}=\\dfrac{25}{45}$ donc $AB=\\dfrac{20\\times45}{25}=36$.' },
              { ar: '$\\dfrac{MN}{27}=\\dfrac{25}{45}$ إذن $MN=15$.', fr: '$\\dfrac{MN}{27}=\\dfrac{25}{45}$ donc $MN=15$.' },
            ],
          },
        ],
      },
      {
        id: 'reciproque',
        title: { ar: 'المبرهنة العكسية', fr: 'Réciproque' },
        blocks: [
          {
            kind: 'theorem',
            content: {
              ar: 'إذا كانت النقط $A,M,B$ و $A,N,C$ مستقيمية **وبنفس الترتيب** وكان $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}$، فإن $(MN)\\parallel(BC)$.',
              fr: 'Si les points $A,M,B$ et $A,N,C$ sont alignés **dans le même ordre** et si $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}$, alors $(MN)\\parallel(BC)$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: '$RT=6$ و $RP=8$ و $RM=4{,}5$ و $RS=6$، والنقط $R,T,P$ و $R,M,S$ بنفس الترتيب.', fr: '$RT=6$, $RP=8$, $RM=4{,}5$, $RS=6$, et $R,T,P$ et $R,M,S$ alignés dans le même ordre.' },
            steps: [
              { ar: '$\\dfrac{RT}{RP}=\\dfrac68=0{,}75$ و $\\dfrac{RM}{RS}=\\dfrac{4{,}5}{6}=0{,}75$.', fr: '$\\dfrac{RT}{RP}=\\dfrac68=0{,}75$ et $\\dfrac{RM}{RS}=\\dfrac{4{,}5}{6}=0{,}75$.' },
              { ar: 'إذن حسب المبرهنة العكسية: $(TM)\\parallel(PS)$.', fr: 'Donc, d’après la réciproque : $(TM)\\parallel(PS)$.' },
            ],
          },
        ],
      },
    ],
    recap: [
      { ar: 'المبرهنة المباشرة تحسب الأطوال.', fr: 'Le théorème direct sert à calculer des longueurs.' },
      { ar: 'المبرهنة العكسية تثبت التوازي (مع شرط الترتيب).', fr: 'La réciproque démontre un parallélisme (avec la condition d’ordre).' },
    ],
  },
  exercises: [
    {
      id: '3ac-tha-01',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حساب AC', fr: 'Calcul de AC' },
      statement: { ar: '$(MN)\\parallel(BC)$ مع $M\\in[AB]$ و $N\\in[AC]$، $AM=4$ و $AB=12$ و $AN=3$. احسب $AC$.', fr: '$(MN)\\parallel(BC)$ avec $M\\in[AB]$, $N\\in[AC]$, $AM=4$, $AB=12$, $AN=3$. Calculer $AC$.' },
      question: { type: 'numeric', answer: 9 },
      hints: [{ ar: '$\\dfrac{AM}{AB}=\\dfrac{AN}{AC}$.', fr: '$\\dfrac{AM}{AB}=\\dfrac{AN}{AC}$.' }],
      solution: [{ ar: '$\\dfrac4{12}=\\dfrac3{AC}$ إذن $AC=9$.', fr: '$\\dfrac4{12}=\\dfrac3{AC}$ donc $AC=9$.' }],
    },
    {
      id: '3ac-tha-02',
      lessonId,
      levelId: '3ac',
      difficulty: 1,
      topic: 'geometry',
      title: { ar: 'حساب MN', fr: 'Calcul de MN' },
      statement: { ar: 'في نفس الشكل ($AM=4$ و $AB=12$) مع $BC=15$، احسب $MN$.', fr: 'Même figure ($AM=4$, $AB=12$) avec $BC=15$ : calculer $MN$.' },
      question: { type: 'numeric', answer: 5 },
      hints: [{ ar: '$\\dfrac{MN}{BC}=\\dfrac{AM}{AB}$.', fr: '$\\dfrac{MN}{BC}=\\dfrac{AM}{AB}$.' }],
      solution: [{ ar: '$MN=15\\times\\dfrac{4}{12}=5$.', fr: '$MN=15\\times\\dfrac{4}{12}=5$.' }],
    },
    {
      id: '3ac-tha-03',
      lessonId,
      levelId: '3ac',
      difficulty: 3,
      topic: 'geometry',
      title: { ar: 'وضعية فراشة', fr: 'Configuration papillon' },
      statement: {
        ar: 'المستقيمان $(AC)$ و $(BD)$ يتقاطعان في $O$ و $(AB)\\parallel(CD)$، مع $OA=5$ و $OB=6$ و $OC=x$ و $OD=x+2$. أوجد $x$.',
        fr: 'Les droites $(AC)$ et $(BD)$ se coupent en $O$ et $(AB)\\parallel(CD)$, avec $OA=5$, $OB=6$, $OC=x$, $OD=x+2$. Trouver $x$.',
      },
      question: { type: 'numeric', answer: 10 },
      hints: [{ ar: '$\\dfrac{OA}{OC}=\\dfrac{OB}{OD}$.', fr: '$\\dfrac{OA}{OC}=\\dfrac{OB}{OD}$.' }],
      solution: [{ ar: '$\\dfrac5x=\\dfrac6{x+2}$ إذن $5x+10=6x$ ومنه $x=10$.', fr: '$\\dfrac5x=\\dfrac6{x+2}$ donc $5x+10=6x$, d’où $x=10$.' }],
    },
    {
      id: '3ac-tha-04',
      lessonId,
      levelId: '3ac',
      difficulty: 2,
      topic: 'geometry',
      title: { ar: 'هل المستقيمان متوازيان؟', fr: 'Les droites sont-elles parallèles ?' },
      statement: {
        ar: 'النقط $A,M,B$ و $A,N,C$ مستقيمية بنفس الترتيب مع $AM=2$ و $AB=5$ و $AN=3$ و $AC=8$. هل $(MN)\\parallel(BC)$؟',
        fr: 'Les points $A,M,B$ et $A,N,C$ sont alignés dans le même ordre avec $AM=2$, $AB=5$, $AN=3$, $AC=8$. A-t-on $(MN)\\parallel(BC)$ ?',
      },
      question: { type: 'mcq', options: [{ ar: 'نعم', fr: 'Oui' }, { ar: 'لا', fr: 'Non' }], correct: 1 },
      hints: [{ ar: 'قارن $\\dfrac{AM}{AB}$ و $\\dfrac{AN}{AC}$.', fr: 'Compare $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$.' }],
      solution: [{ ar: '$\\dfrac25=0{,}4$ و $\\dfrac38=0{,}375$؛ النسبتان مختلفتان، إذن المستقيمان غير متوازيين.', fr: '$\\dfrac25=0{,}4$ et $\\dfrac38=0{,}375$ : les rapports diffèrent, donc les droites ne sont pas parallèles.' }],
    },
  ],
};
