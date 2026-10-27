import type { Exam } from '@/types';
import { devoirSource } from './source';

/** Devoirs surveillés modèles de 3AC : trois par semestre. */
export const devoirs3ac: Exam[] = [
  /* ---------------- Semestre 1 ---------------- */
  {
    id: 'devoir-3ac-s1-1',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 1 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الجذور المربعة', fr: 'Exercice 1 : racines carrées' },
        points: 6,
        statement: {
          ar: 'احسب وبسّط: $A=\\sqrt{50}-3\\sqrt8+\\sqrt{18}$ ؛ $B=(\\sqrt3-1)(\\sqrt3+1)$ ؛ ثم اجعل مقام $C=\\dfrac{2}{\\sqrt6}$ عدداً جذرياً.',
          fr: 'Calculer et simplifier : $A=\\sqrt{50}-3\\sqrt8+\\sqrt{18}$ ; $B=(\\sqrt3-1)(\\sqrt3+1)$ ; puis rendre rationnel le dénominateur de $C=\\dfrac{2}{\\sqrt6}$.',
        },
        correction: [
          { ar: '$A=5\\sqrt2-6\\sqrt2+3\\sqrt2=2\\sqrt2$.', fr: '$A=5\\sqrt2-6\\sqrt2+3\\sqrt2=2\\sqrt2$.' },
          { ar: '$B=(\\sqrt3)^2-1^2=2$.', fr: '$B=(\\sqrt3)^2-1^2=2$.' },
          { ar: '$C=\\dfrac{2\\sqrt6}{6}=\\dfrac{\\sqrt6}{3}$.', fr: '$C=\\dfrac{2\\sqrt6}{6}=\\dfrac{\\sqrt6}{3}$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المتطابقات الهامة', fr: 'Exercice 2 : identités remarquables' },
        points: 6,
        statement: {
          ar: 'انشر $E=(2x-3)^2$، ثم عمّل $F=9x^2-25$ و $G=x^2+10x+25$.',
          fr: 'Développer $E=(2x-3)^2$, puis factoriser $F=9x^2-25$ et $G=x^2+10x+25$.',
        },
        correction: [
          { ar: '$E=4x^2-12x+9$.', fr: '$E=4x^2-12x+9$.' },
          { ar: '$F=(3x-5)(3x+5)$ ؛ $G=(x+5)^2$.', fr: '$F=(3x-5)(3x+5)$ ; $G=(x+5)^2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: المعادلة $x^2=a$', fr: 'Exercice 3 : équation $x^2=a$' },
        points: 4,
        statement: { ar: 'حل المعادلتين: $x^2=49$ و $4x^2-3=0$.', fr: 'Résoudre : $x^2=49$ et $4x^2-3=0$.' },
        correction: [
          { ar: '$x^2=49$: $x=7$ أو $x=-7$.', fr: '$x^2=49$ : $x=7$ ou $x=-7$.' },
          { ar: '$x^2=\\dfrac34$: $x=\\dfrac{\\sqrt3}2$ أو $x=-\\dfrac{\\sqrt3}2$.', fr: '$x^2=\\dfrac34$ : $x=\\dfrac{\\sqrt3}2$ ou $x=-\\dfrac{\\sqrt3}2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: القوى', fr: 'Exercice 4 : puissances' },
        points: 4,
        statement: {
          ar: 'احسب $H=\\dfrac{2^3\\times2^{-5}}{2^{-4}}$، ثم أعط الكتابة العلمية لـ $K=0{,}00072\\times5\\times10^6$.',
          fr: 'Calculer $H=\\dfrac{2^3\\times2^{-5}}{2^{-4}}$, puis donner l’écriture scientifique de $K=0{,}00072\\times5\\times10^6$.',
        },
        correction: [
          { ar: '$H=\\dfrac{2^{-2}}{2^{-4}}=2^{2}=4$.', fr: '$H=\\dfrac{2^{-2}}{2^{-4}}=2^{2}=4$.' },
          { ar: '$K=7{,}2\\times10^{-4}\\times5\\times10^6=36\\times10^2=3{,}6\\times10^3$.', fr: '$K=7{,}2\\times10^{-4}\\times5\\times10^6=36\\times10^2=3{,}6\\times10^3$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-3ac-s1-2',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 2 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: مبرهنة طاليس', fr: 'Exercice 1 : théorème de Thalès' },
        points: 6,
        statement: {
          ar: '$ABC$ مثلث، $M\\in[AB]$ و $N\\in[AC]$ و $(MN)\\parallel(BC)$، مع $AM=3$ و $AB=7{,}5$ و $AN=2$ و $BC=10$. احسب $AC$ و $MN$.',
          fr: '$ABC$ est un triangle, $M\\in[AB]$, $N\\in[AC]$ et $(MN)\\parallel(BC)$, avec $AM=3$, $AB=7{,}5$, $AN=2$, $BC=10$. Calculer $AC$ et $MN$.',
        },
        correction: [
          { ar: 'حسب طاليس: $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$ والنسبة $\\dfrac{3}{7{,}5}=0{,}4$.', fr: 'D’après Thalès : $\\dfrac{AM}{AB}=\\dfrac{AN}{AC}=\\dfrac{MN}{BC}$, de rapport $\\dfrac{3}{7{,}5}=0{,}4$.' },
          { ar: '$AC=\\dfrac{2}{0{,}4}=5$ و $MN=0{,}4\\times10=4$.', fr: '$AC=\\dfrac{2}{0{,}4}=5$ et $MN=0{,}4\\times10=4$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المبرهنة العكسية', fr: 'Exercice 2 : réciproque' },
        points: 4,
        statement: {
          ar: 'النقط $O,A,C$ و $O,B,D$ مستقيمية بنفس الترتيب، مع $OA=4$ و $OC=10$ و $OB=6$ و $OD=15$. بيّن أن $(AB)\\parallel(CD)$.',
          fr: 'Les points $O,A,C$ et $O,B,D$ sont alignés dans le même ordre, avec $OA=4$, $OC=10$, $OB=6$, $OD=15$. Montrer que $(AB)\\parallel(CD)$.',
        },
        correction: [
          { ar: '$\\dfrac{OA}{OC}=\\dfrac4{10}=0{,}4$ و $\\dfrac{OB}{OD}=\\dfrac6{15}=0{,}4$.', fr: '$\\dfrac{OA}{OC}=\\dfrac4{10}=0{,}4$ et $\\dfrac{OB}{OD}=\\dfrac6{15}=0{,}4$.' },
          { ar: 'النسبتان متساويتان والنقط بنفس الترتيب، إذن حسب المبرهنة العكسية $(AB)\\parallel(CD)$.', fr: 'Les rapports sont égaux et les points dans le même ordre : d’après la réciproque, $(AB)\\parallel(CD)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الترتيب والعمليات', fr: 'Exercice 3 : ordre et opérations' },
        points: 5,
        statement: {
          ar: '1) قارن $2\\sqrt7$ و $5$. 2) نعلم أن $1\\le x\\le3$ و $2\\le y\\le5$. أطّر $x+y$ و $x-y$ و $xy$.',
          fr: '1) Comparer $2\\sqrt7$ et $5$. 2) On sait que $1\\le x\\le3$ et $2\\le y\\le5$. Encadrer $x+y$, $x-y$ et $xy$.',
        },
        correction: [
          { ar: '1) $(2\\sqrt7)^2=28>25=5^2$ والعددان موجبان، إذن $2\\sqrt7>5$.', fr: '1) $(2\\sqrt7)^2=28>25=5^2$ et les nombres sont positifs, donc $2\\sqrt7>5$.' },
          { ar: '2) $3\\le x+y\\le8$ ؛ $-5\\le-y\\le-2$ إذن $-4\\le x-y\\le1$ ؛ $2\\le xy\\le15$.', fr: '2) $3\\le x+y\\le8$ ; $-5\\le-y\\le-2$ donc $-4\\le x-y\\le1$ ; $2\\le xy\\le15$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: مبرهنة فيثاغورس', fr: 'Exercice 4 : théorème de Pythagore' },
        points: 5,
        statement: {
          ar: '1) $ABC$ قائم في $A$ مع $AB=5$ و $AC=12$. احسب $BC$. 2) $EFG$ مثلث بحيث $EF=8$ و $EG=15$ و $FG=17$. بيّن أنه قائم الزاوية.',
          fr: '1) $ABC$ est rectangle en $A$ avec $AB=5$ et $AC=12$. Calculer $BC$. 2) $EFG$ est un triangle tel que $EF=8$, $EG=15$, $FG=17$. Montrer qu’il est rectangle.',
        },
        correction: [
          { ar: '1) $BC^2=25+144=169$ إذن $BC=13$.', fr: '1) $BC^2=25+144=169$ donc $BC=13$.' },
          { ar: '2) $FG^2=289$ و $EF^2+EG^2=64+225=289$، إذن $EFG$ قائم في $E$.', fr: '2) $FG^2=289$ et $EF^2+EG^2=64+225=289$, donc $EFG$ est rectangle en $E$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-3ac-s1-3',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 3 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب المثلثي', fr: 'Exercice 1 : trigonométrie' },
        points: 7,
        statement: {
          ar: '$ABC$ قائم في $A$ مع $AB=6$ و $BC=10$. 1) احسب $AC$. 2) احسب $\\cos\\hat B$ و $\\sin\\hat B$ و $\\tan\\hat B$. 3) احسب $S=\\sin^235^\\circ+\\sin^255^\\circ$.',
          fr: '$ABC$ est rectangle en $A$ avec $AB=6$ et $BC=10$. 1) Calculer $AC$. 2) Calculer $\\cos\\hat B$, $\\sin\\hat B$ et $\\tan\\hat B$. 3) Calculer $S=\\sin^235^\\circ+\\sin^255^\\circ$.',
        },
        correction: [
          { ar: '1) $AC^2=100-36=64$ إذن $AC=8$.', fr: '1) $AC^2=100-36=64$ donc $AC=8$.' },
          { ar: '2) $\\cos\\hat B=\\dfrac6{10}=0{,}6$ ؛ $\\sin\\hat B=\\dfrac8{10}=0{,}8$ ؛ $\\tan\\hat B=\\dfrac86=\\dfrac43$.', fr: '2) $\\cos\\hat B=\\dfrac6{10}=0{,}6$ ; $\\sin\\hat B=\\dfrac8{10}=0{,}8$ ; $\\tan\\hat B=\\dfrac86=\\dfrac43$.' },
          { ar: '3) $\\sin55^\\circ=\\cos35^\\circ$ إذن $S=\\sin^235^\\circ+\\cos^235^\\circ=1$.', fr: '3) $\\sin55^\\circ=\\cos35^\\circ$ donc $S=\\sin^235^\\circ+\\cos^235^\\circ=1$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: العلاقات المثلثية', fr: 'Exercice 2 : relations trigonométriques' },
        points: 4,
        statement: { ar: '$x$ زاوية حادة بحيث $\\cos x=\\dfrac5{13}$. احسب $\\sin x$ و $\\tan x$.', fr: '$x$ est un angle aigu tel que $\\cos x=\\dfrac5{13}$. Calculer $\\sin x$ et $\\tan x$.' },
        correction: [
          { ar: '$\\sin^2x=1-\\dfrac{25}{169}=\\dfrac{144}{169}$ و $\\sin x>0$ إذن $\\sin x=\\dfrac{12}{13}$.', fr: '$\\sin^2x=1-\\dfrac{25}{169}=\\dfrac{144}{169}$ et $\\sin x>0$ donc $\\sin x=\\dfrac{12}{13}$.' },
          { ar: '$\\tan x=\\dfrac{12/13}{5/13}=\\dfrac{12}5$.', fr: '$\\tan x=\\dfrac{12/13}{5/13}=\\dfrac{12}5$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الزوايا المحيطية', fr: 'Exercice 3 : angles inscrits' },
        points: 5,
        statement: {
          ar: '$(C)$ دائرة مركزها $O$، و $A$ و $B$ منها بحيث $A\\hat OB=110^\\circ$. $M$ و $N$ نقطتان من القوس الكبير $AB$. احسب $A\\hat MB$ و $A\\hat NB$.',
          fr: '$(C)$ est un cercle de centre $O$, $A$ et $B$ sont sur $(C)$ avec $A\\hat OB=110^\\circ$. $M$ et $N$ sont sur le grand arc $AB$. Calculer $A\\hat MB$ et $A\\hat NB$.',
        },
        correction: [
          { ar: '$A\\hat MB$ و $A\\hat OB$ تحصران نفس القوس: $A\\hat MB=\\dfrac{110^\\circ}2=55^\\circ$.', fr: '$A\\hat MB$ et $A\\hat OB$ interceptent le même arc : $A\\hat MB=\\dfrac{110^\\circ}2=55^\\circ$.' },
          { ar: '$A\\hat NB$ و $A\\hat MB$ تحصران نفس القوس: $A\\hat NB=55^\\circ$.', fr: '$A\\hat NB$ et $A\\hat MB$ interceptent le même arc : $A\\hat NB=55^\\circ$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: المثلثات المتشابهة', fr: 'Exercice 4 : triangles semblables' },
        points: 4,
        statement: {
          ar: 'في المثلث $ABC$: $\\hat A=50^\\circ$ و $\\hat B=70^\\circ$، وفي المثلث $DEF$: $\\hat E=70^\\circ$ و $\\hat F=60^\\circ$. 1) بيّن أنهما متشابهان. 2) $AB=4$ و $DE=6$ ومساحة $ABC$ هي $8$. احسب مساحة $DEF$.',
          fr: 'Dans $ABC$ : $\\hat A=50^\\circ$, $\\hat B=70^\\circ$ ; dans $DEF$ : $\\hat E=70^\\circ$, $\\hat F=60^\\circ$. 1) Montrer qu’ils sont semblables. 2) $AB=4$, $DE=6$ et l’aire de $ABC$ vaut $8$. Calculer l’aire de $DEF$.',
        },
        correction: [
          { ar: '1) $\\hat C=60^\\circ$ و $\\hat D=50^\\circ$: لهما نفس الزوايا، إذن متشابهان.', fr: '1) $\\hat C=60^\\circ$ et $\\hat D=50^\\circ$ : mêmes angles, donc semblables.' },
          { ar: '2) $k=\\dfrac64=1{,}5$ والمساحة تضرب في $k^2=2{,}25$: $8\\times2{,}25=18$.', fr: '2) $k=\\dfrac64=1{,}5$ et l’aire est multipliée par $k^2=2{,}25$ : $8\\times2{,}25=18$.' },
        ],
      },
    ],
  },

  /* ---------------- Semestre 2 ---------------- */
  {
    id: 'devoir-3ac-s2-1',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 1 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المعادلات', fr: 'Exercice 1 : équations' },
        points: 6,
        statement: { ar: 'حل المعادلات: $5x-3=2x+9$ ؛ $(x-2)(3x+6)=0$ ؛ $x^2-16=0$.', fr: 'Résoudre : $5x-3=2x+9$ ; $(x-2)(3x+6)=0$ ; $x^2-16=0$.' },
        correction: [
          { ar: '$3x=12$ إذن $x=4$.', fr: '$3x=12$ donc $x=4$.' },
          { ar: '$x-2=0$ أو $3x+6=0$: $x=2$ أو $x=-2$.', fr: '$x-2=0$ ou $3x+6=0$ : $x=2$ ou $x=-2$.' },
          { ar: '$(x-4)(x+4)=0$: $x=4$ أو $x=-4$.', fr: '$(x-4)(x+4)=0$ : $x=4$ ou $x=-4$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: متراجحة', fr: 'Exercice 2 : inéquation' },
        points: 4,
        statement: { ar: 'حل المتراجحة $3x-5\\le7x+3$.', fr: 'Résoudre l’inéquation $3x-5\\le7x+3$.' },
        correction: [
          { ar: '$3x-7x\\le3+5$ أي $-4x\\le8$.', fr: '$3x-7x\\le3+5$ soit $-4x\\le8$.' },
          { ar: 'القسمة على $-4<0$ تقلب الاتجاه: $x\\ge-2$.', fr: 'Diviser par $-4<0$ renverse le sens : $x\\ge-2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: مسألة', fr: 'Exercice 3 : problème' },
        points: 4,
        statement: {
          ar: 'سن أب ثلاثة أضعاف سن ابنه، وبعد $12$ سنة سيصبح سن الأب ضعف سن ابنه. أوجد سن كل منهما.',
          fr: 'Un père a trois fois l’âge de son fils ; dans $12$ ans, il aura le double de l’âge de son fils. Trouver leurs âges.',
        },
        correction: [
          { ar: 'نضع $x$ سن الابن: $3x+12=2(x+12)$.', fr: 'Soit $x$ l’âge du fils : $3x+12=2(x+12)$.' },
          { ar: '$3x+12=2x+24$ إذن $x=12$: الابن $12$ سنة والأب $36$ سنة.', fr: '$3x+12=2x+24$ donc $x=12$ : le fils a $12$ ans et le père $36$ ans.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: المتجهات والإزاحة', fr: 'Exercice 4 : vecteurs et translation' },
        points: 6,
        statement: {
          ar: '$ABCD$ متوازي الأضلاع. 1) بسّط $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}$. 2) $E$ صورة $C$ بالإزاحة ذات المتجهة $\\overrightarrow{AB}$. بيّن أن $C$ منتصف $[DE]$.',
          fr: '$ABCD$ est un parallélogramme. 1) Simplifier $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}$. 2) $E$ est l’image de $C$ par la translation de vecteur $\\overrightarrow{AB}$. Montrer que $C$ est le milieu de $[DE]$.',
        },
        correction: [
          { ar: '1) حسب شال: $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}=\\overrightarrow{AD}$.', fr: '1) D’après Chasles : $\\overrightarrow{AB}+\\overrightarrow{BC}+\\overrightarrow{CD}=\\overrightarrow{AD}$.' },
          { ar: '2) $\\overrightarrow{CE}=\\overrightarrow{AB}$ و $\\overrightarrow{AB}=\\overrightarrow{DC}$ (متوازي الأضلاع)، إذن $\\overrightarrow{DC}=\\overrightarrow{CE}$، أي $C$ منتصف $[DE]$.', fr: '2) $\\overrightarrow{CE}=\\overrightarrow{AB}$ et $\\overrightarrow{AB}=\\overrightarrow{DC}$ (parallélogramme), donc $\\overrightarrow{DC}=\\overrightarrow{CE}$ : $C$ est le milieu de $[DE]$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-3ac-s2-2',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 2 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المعلم', fr: 'Exercice 1 : repère' },
        points: 7,
        statement: {
          ar: 'في معلم متعامد ممنظم: $A(1;-2)$ و $B(3;2)$ و $C(-1;0)$. 1) احسب إحداثيتي $\\overrightarrow{AB}$ والمسافة $AB$. 2) حدد إحداثيتي $I$ منتصف $[BC]$. 3) حدد إحداثيتي $D$ بحيث يكون $ABCD$ متوازي الأضلاع.',
          fr: 'Dans un repère orthonormé : $A(1;-2)$, $B(3;2)$, $C(-1;0)$. 1) Calculer les coordonnées de $\\overrightarrow{AB}$ et la distance $AB$. 2) Déterminer le milieu $I$ de $[BC]$. 3) Déterminer $D$ tel que $ABCD$ soit un parallélogramme.',
        },
        correction: [
          { ar: '1) $\\overrightarrow{AB}(2;4)$ و $AB=\\sqrt{4+16}=\\sqrt{20}=2\\sqrt5$.', fr: '1) $\\overrightarrow{AB}(2;4)$ et $AB=\\sqrt{4+16}=\\sqrt{20}=2\\sqrt5$.' },
          { ar: '2) $I\\left(\\dfrac{3-1}2;\\dfrac{2+0}2\\right)=(1;1)$.', fr: '2) $I\\left(\\dfrac{3-1}2;\\dfrac{2+0}2\\right)=(1;1)$.' },
          { ar: '3) $\\overrightarrow{AD}=\\overrightarrow{BC}(-4;-2)$ إذن $D(1-4;-2-2)=(-3;-4)$.', fr: '3) $\\overrightarrow{AD}=\\overrightarrow{BC}(-4;-2)$ donc $D(1-4;-2-2)=(-3;-4)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: معادلة مستقيم', fr: 'Exercice 2 : équation de droite' },
        points: 6,
        statement: {
          ar: '1) حدد معادلة المستقيم $(AB)$ من التمرين 1. 2) حدد معادلة المستقيم $(\\Delta)$ المار من $C$ والعمودي على $(AB)$.',
          fr: '1) Déterminer l’équation de la droite $(AB)$ de l’exercice 1. 2) Déterminer l’équation de la droite $(\\Delta)$ passant par $C$ et perpendiculaire à $(AB)$.',
        },
        correction: [
          { ar: '1) $m=\\dfrac{2-(-2)}{3-1}=2$ و $-2=2\\times1+p$ إذن $p=-4$: $(AB):y=2x-4$.', fr: '1) $m=\\dfrac{2-(-2)}{3-1}=2$ et $-2=2\\times1+p$ donc $p=-4$ : $(AB):y=2x-4$.' },
          { ar: '2) $m\'=-\\dfrac12$ و $0=-\\dfrac12\\times(-1)+p$ إذن $p=-\\dfrac12$: $(\\Delta):y=-\\dfrac12x-\\dfrac12$.', fr: '2) $m\'=-\\dfrac12$ et $0=-\\dfrac12\\times(-1)+p$ donc $p=-\\dfrac12$ : $(\\Delta):y=-\\dfrac12x-\\dfrac12$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: النظمات', fr: 'Exercice 3 : systèmes' },
        points: 7,
        statement: {
          ar: '1) حل $\\begin{cases}3x+2y=7\\\\x-y=4\\end{cases}$. 2) ثمن دفتر وقلم $8$ دراهم، وثمن دفترين وثلاثة أقلام $19$ درهماً. أوجد ثمن كل منهما.',
          fr: '1) Résoudre $\\begin{cases}3x+2y=7\\\\x-y=4\\end{cases}$. 2) Un cahier et un stylo coûtent $8$ DH ; deux cahiers et trois stylos coûtent $19$ DH. Trouver le prix de chacun.',
        },
        correction: [
          { ar: '1) $x=y+4$ ثم $3y+12+2y=7$ أي $y=-1$ و $x=3$: الحل $(3;-1)$.', fr: '1) $x=y+4$ puis $3y+12+2y=7$, soit $y=-1$ et $x=3$ : solution $(3;-1)$.' },
          { ar: '2) $\\begin{cases}c+s=8\\\\2c+3s=19\\end{cases}$: $2(8-s)+3s=19$ إذن $s=3$ و $c=5$. الدفتر $5$ دراهم والقلم $3$ دراهم.', fr: '2) $\\begin{cases}c+s=8\\\\2c+3s=19\\end{cases}$ : $2(8-s)+3s=19$ donc $s=3$ et $c=5$. Cahier $5$ DH, stylo $3$ DH.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-3ac-s2-3',
    levelId: '3ac',
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 3 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الدوال', fr: 'Exercice 1 : fonctions' },
        points: 7,
        statement: {
          ar: '1) $f$ دالة خطية بحيث $f(5)=-15$. حدد معاملها ثم احسب $f(-2)$. 2) $g$ دالة تآلفية بحيث $g(0)=2$ و $g(2)=8$. حدد $g(x)$ ثم سابق $11$.',
          fr: '1) $f$ est linéaire avec $f(5)=-15$. Déterminer son coefficient puis $f(-2)$. 2) $g$ est affine avec $g(0)=2$ et $g(2)=8$. Déterminer $g(x)$ puis l’antécédent de $11$.',
        },
        correction: [
          { ar: '1) $a=\\dfrac{-15}5=-3$ إذن $f(x)=-3x$ و $f(-2)=6$.', fr: '1) $a=\\dfrac{-15}5=-3$ donc $f(x)=-3x$ et $f(-2)=6$.' },
          { ar: '2) $b=g(0)=2$ و $a=\\dfrac{8-2}{2-0}=3$: $g(x)=3x+2$. $3x+2=11$ إذن $x=3$.', fr: '2) $b=g(0)=2$ et $a=\\dfrac{8-2}{2-0}=3$ : $g(x)=3x+2$. $3x+2=11$ donc $x=3$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الإحصاء', fr: 'Exercice 2 : statistique' },
        points: 7,
        statement: {
          ar: 'نقط $20$ تلميذاً: $8$ (حصيصها $2$)، $10$ ($3$)، $12$ ($6$)، $14$ ($4$)، $16$ ($5$). احسب المتوسط الحسابي، وحدد المنوال والوسيط وتردد النقطة $16$.',
          fr: 'Notes de $20$ élèves : $8$ (effectif $2$), $10$ ($3$), $12$ ($6$), $14$ ($4$), $16$ ($5$). Calculer la moyenne, puis donner le mode, la médiane et la fréquence de la note $16$.',
        },
        correction: [
          { ar: 'المتوسط: $\\dfrac{16+30+72+56+80}{20}=\\dfrac{254}{20}=12{,}7$.', fr: 'Moyenne : $\\dfrac{16+30+72+56+80}{20}=\\dfrac{254}{20}=12{,}7$.' },
          { ar: 'المنوال $12$. الحصيصات المتراكمة: $2;5;11;15;20$؛ القيمتان 10 و 11 تساويان $12$، إذن الوسيط $12$.', fr: 'Mode : $12$. Effectifs cumulés : $2;5;11;15;20$ ; les 10e et 11e valeurs valent $12$, donc la médiane est $12$.' },
          { ar: 'تردد $16$: $\\dfrac5{20}=25\\%$.', fr: 'Fréquence de $16$ : $\\dfrac5{20}=25\\%$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الهندسة الفضائية', fr: 'Exercice 3 : géométrie dans l’espace' },
        points: 6,
        statement: {
          ar: '1) هرم قاعدته مربع ضلعه $6$ وارتفاعه $4$. احسب حجمه. 2) نصغر هذا الهرم بنسبة $\\dfrac12$. احسب حجم الهرم المصغر. 3) احسب طول قطر مكعب حرفه $3$.',
          fr: '1) Une pyramide a pour base un carré de côté $6$ et pour hauteur $4$. Calculer son volume. 2) On la réduit de rapport $\\dfrac12$. Calculer le volume obtenu. 3) Calculer la diagonale d’un cube d’arête $3$.',
        },
        correction: [
          { ar: '1) $V=\\dfrac13\\times36\\times4=48$.', fr: '1) $V=\\dfrac13\\times36\\times4=48$.' },
          { ar: '2) $V\'=48\\times\\left(\\dfrac12\\right)^3=6$.', fr: '2) $V\'=48\\times\\left(\\dfrac12\\right)^3=6$.' },
          { ar: '3) القطر $3\\sqrt3$.', fr: '3) La diagonale vaut $3\\sqrt3$.' },
        ],
      },
    ],
  },
];
