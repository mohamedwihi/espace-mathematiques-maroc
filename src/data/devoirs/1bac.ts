import type { Exam } from '@/types';
import { devoirSource } from './source';

/** Devoirs surveillés modèles de 1re année bac sciences expérimentales : trois par semestre. */
export const devoirs1bac: Exam[] = [
  /* ---------------- Semestre 1 ---------------- */
  {
    id: 'devoir-1bac-s1-1',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 1 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المنطق', fr: 'Exercice 1 : logique' },
        points: 8,
        statement: {
          ar: '1) حدد قيمة حقيقة العبارة $P:\\ \\forall x\\in\\mathbb R,\\ x^2-2x+2>0$ ثم اكتب نفيها.\n\n2) بيّن بالاستلزام المضاد للعكس: إذا كان $x\\neq1$ و $y\\neq1$ فإن $x+y-xy\\neq1$.\n\n3) بيّن بالترجع أن $\\forall n\\in\\mathbb N,\\ 3^n\\ge1+2n$.',
          fr: '1) Donner la valeur de vérité de $P:\\ \\forall x\\in\\mathbb R,\\ x^2-2x+2>0$, puis écrire sa négation.\n\n2) Montrer par contraposée : si $x\\neq1$ et $y\\neq1$ alors $x+y-xy\\neq1$.\n\n3) Montrer par récurrence que $\\forall n\\in\\mathbb N,\\ 3^n\\ge1+2n$.',
        },
        correction: [
          { ar: '$x^2-2x+2=(x-1)^2+1>0$: $P$ صحيحة. نفيها: $\\exists x\\in\\mathbb R,\\ x^2-2x+2\\le0$.', fr: '$x^2-2x+2=(x-1)^2+1>0$ : $P$ est vraie. Négation : $\\exists x\\in\\mathbb R,\\ x^2-2x+2\\le0$.' },
          { ar: 'نفترض $x+y-xy=1$، أي $(1-x)(1-y)=0$، إذن $x=1$ أو $y=1$.', fr: 'Supposons $x+y-xy=1$, soit $(1-x)(1-y)=0$, donc $x=1$ ou $y=1$.' },
          { ar: 'التهيئة: $3^0=1\\ge1$. الوراثة: $3^{n+1}=3\\cdot3^n\\ge3+6n\\ge3+2n=1+2(n+1)$.', fr: 'Initialisation : $3^0=1\\ge1$. Hérédité : $3^{n+1}=3\\cdot3^n\\ge3+6n\\ge3+2n=1+2(n+1)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: عموميات حول الدوال', fr: 'Exercice 2 : généralités sur les fonctions' },
        points: 12,
        statement: {
          ar: 'نعتبر $f(x)=\\dfrac{2x-1}{x+1}$ و $g(x)=x^2$.\n\n1) حدد $D_f$ وبيّن أن $f(x)=2-\\dfrac{3}{x+1}$.\n\n2) ادرس رتابة $f$ على $]-1;+\\infty[$.\n\n3) بيّن أن $f$ مكبورة بـ $2$ على $]-1;+\\infty[$.\n\n4) حدد $(g\\circ f)(x)$ وادرس رتابة $g\\circ f$ على $\\left[\\dfrac12;+\\infty\\right[$.',
          fr: 'On considère $f(x)=\\dfrac{2x-1}{x+1}$ et $g(x)=x^2$.\n\n1) Déterminer $D_f$ et montrer que $f(x)=2-\\dfrac{3}{x+1}$.\n\n2) Étudier la monotonie de $f$ sur $]-1;+\\infty[$.\n\n3) Montrer que $f$ est majorée par $2$ sur $]-1;+\\infty[$.\n\n4) Déterminer $(g\\circ f)(x)$ et étudier la monotonie de $g\\circ f$ sur $\\left[\\dfrac12;+\\infty\\right[$.',
        },
        correction: [
          { ar: '$D_f=\\mathbb R\\setminus\\{-1\\}$ و $2-\\dfrac3{x+1}=\\dfrac{2x+2-3}{x+1}=f(x)$.', fr: '$D_f=\\mathbb R\\setminus\\{-1\\}$ et $2-\\dfrac3{x+1}=\\dfrac{2x+2-3}{x+1}=f(x)$.' },
          { ar: 'إذا كان $-1<a<b$ فإن $\\dfrac3{a+1}>\\dfrac3{b+1}$ إذن $f(a)<f(b)$: $f$ تزايدية.', fr: 'Si $-1<a<b$, $\\dfrac3{a+1}>\\dfrac3{b+1}$ donc $f(a)<f(b)$ : $f$ est croissante.' },
          { ar: '$\\dfrac3{x+1}>0$ إذن $f(x)<2$.', fr: '$\\dfrac3{x+1}>0$ donc $f(x)<2$.' },
          { ar: '$(g\\circ f)(x)=\\left(\\dfrac{2x-1}{x+1}\\right)^2$. على $\\left[\\dfrac12;+\\infty\\right[$: $f$ تزايدية و $f(x)\\ge0$، و $g$ تزايدية على $[0;+\\infty[$، إذن $g\\circ f$ تزايدية.', fr: '$(g\\circ f)(x)=\\left(\\dfrac{2x-1}{x+1}\\right)^2$. Sur $\\left[\\dfrac12;+\\infty\\right[$ : $f$ croissante et $f(x)\\ge0$, $g$ croissante sur $[0;+\\infty[$, donc $g\\circ f$ est croissante.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-1bac-s1-2',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 2 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المرجح', fr: 'Exercice 1 : barycentre' },
        points: 8,
        statement: {
          ar: 'ليكن $ABC$ مثلثاً، و $G$ مرجح $\\{(A;1),(B;2),(C;1)\\}$، و $I$ منتصف $[AC]$.\n\n1) بيّن أن $G$ منتصف $[IB]$.\n\n2) حدد مجموعة النقط $M$ حيث $\\|\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}\\|=4$.',
          fr: 'Soit $ABC$ un triangle, $G$ le barycentre de $\\{(A;1),(B;2),(C;1)\\}$ et $I$ le milieu de $[AC]$.\n\n1) Montrer que $G$ est le milieu de $[IB]$.\n\n2) Déterminer l’ensemble des points $M$ tels que $\\|\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}\\|=4$.',
        },
        correction: [
          { ar: 'بالتجميعية: $I$ مرجح $\\{(A;1),(C;1)\\}$، إذن $G$ مرجح $\\{(I;2),(B;2)\\}$: منتصف $[IB]$.', fr: 'Par associativité : $I$ est le barycentre de $\\{(A;1),(C;1)\\}$, donc $G$ est celui de $\\{(I;2),(B;2)\\}$ : milieu de $[IB]$.' },
          { ar: '$\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}=4\\overrightarrow{MG}$، إذن $MG=1$: الدائرة التي مركزها $G$ وشعاعها $1$.', fr: '$\\overrightarrow{MA}+2\\overrightarrow{MB}+\\overrightarrow{MC}=4\\overrightarrow{MG}$, donc $MG=1$ : cercle de centre $G$ et de rayon $1$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الجداء السلمي', fr: 'Exercice 2 : produit scalaire' },
        points: 12,
        statement: {
          ar: 'في معلم متعامد ممنظم، نعتبر $A(1;2)$ و $B(3;-2)$ والمستقيم $(D):x-2y+8=0$.\n\n1) حدد معادلة ديكارتية لواسط $[AB]$.\n\n2) حدد معادلة الدائرة $(C)$ التي أحد أقطارها $[AB]$.\n\n3) احسب $d(\\Omega,(D))$ حيث $\\Omega$ مركز $(C)$، واستنتج الوضع النسبي لـ $(D)$ و $(C)$.',
          fr: 'Dans un repère orthonormé, on considère $A(1;2)$, $B(3;-2)$ et la droite $(D):x-2y+8=0$.\n\n1) Déterminer une équation cartésienne de la médiatrice de $[AB]$.\n\n2) Déterminer une équation du cercle $(C)$ de diamètre $[AB]$.\n\n3) Calculer $d(\\Omega,(D))$ où $\\Omega$ est le centre de $(C)$, et en déduire la position relative de $(D)$ et $(C)$.',
        },
        correction: [
          { ar: 'المنتصف $\\Omega(2;0)$ و $\\overrightarrow{AB}(2;-4)$ منظمية: $2x-4y-4=0$ أي $x-2y-2=0$.', fr: 'Milieu $\\Omega(2;0)$ et $\\overrightarrow{AB}(2;-4)$ normal : $2x-4y-4=0$, soit $x-2y-2=0$.' },
          { ar: '$r=\\dfrac{AB}2=\\dfrac{\\sqrt{20}}2=\\sqrt5$: $(C):(x-2)^2+y^2=5$.', fr: '$r=\\dfrac{AB}2=\\dfrac{\\sqrt{20}}2=\\sqrt5$ : $(C):(x-2)^2+y^2=5$.' },
          { ar: '$d=\\dfrac{|2+8|}{\\sqrt5}=2\\sqrt5>\\sqrt5$: المستقيم لا يقطع الدائرة.', fr: '$d=\\dfrac{|2+8|}{\\sqrt5}=2\\sqrt5>\\sqrt5$ : la droite ne coupe pas le cercle.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-1bac-s1-3',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 3 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المتتاليات', fr: 'Exercice 1 : suites' },
        points: 11,
        statement: {
          ar: 'نعتبر المتتالية $(u_n)$ المعرفة بـ $u_0=4$ و $u_{n+1}=\\dfrac12u_n+1$، ونضع $v_n=u_n-2$.\n\n1) احسب $u_1$ و $u_2$.\n\n2) بيّن أن $(v_n)$ هندسية وحدد أساسها وحدها الأول.\n\n3) اكتب $u_n$ بدلالة $n$.\n\n4) احسب $S_n=v_0+v_1+\\dots+v_n$.',
          fr: 'On considère $(u_n)$ définie par $u_0=4$ et $u_{n+1}=\\dfrac12u_n+1$, et on pose $v_n=u_n-2$.\n\n1) Calculer $u_1$ et $u_2$.\n\n2) Montrer que $(v_n)$ est géométrique ; préciser sa raison et son premier terme.\n\n3) Exprimer $u_n$ en fonction de $n$.\n\n4) Calculer $S_n=v_0+v_1+\\dots+v_n$.',
        },
        correction: [
          { ar: '$u_1=3$ و $u_2=\\dfrac52$.', fr: '$u_1=3$ et $u_2=\\dfrac52$.' },
          { ar: '$v_{n+1}=\\dfrac12u_n+1-2=\\dfrac12(u_n-2)=\\dfrac12v_n$: هندسية أساسها $\\dfrac12$ و $v_0=2$.', fr: '$v_{n+1}=\\dfrac12u_n+1-2=\\dfrac12(u_n-2)=\\dfrac12v_n$ : géométrique de raison $\\dfrac12$, $v_0=2$.' },
          { ar: '$v_n=2\\left(\\dfrac12\\right)^n$ إذن $u_n=2+2\\left(\\dfrac12\\right)^n$.', fr: '$v_n=2\\left(\\dfrac12\\right)^n$ donc $u_n=2+2\\left(\\dfrac12\\right)^n$.' },
          { ar: '$S_n=2\\times\\dfrac{1-\\left(\\frac12\\right)^{n+1}}{1-\\frac12}=4\\left(1-\\left(\\dfrac12\\right)^{n+1}\\right)$.', fr: '$S_n=2\\times\\dfrac{1-\\left(\\frac12\\right)^{n+1}}{1-\\frac12}=4\\left(1-\\left(\\dfrac12\\right)^{n+1}\\right)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الحساب المثلثي', fr: 'Exercice 2 : trigonométrie' },
        points: 9,
        statement: {
          ar: '1) احسب $\\sin\\dfrac{\\pi}{12}$.\n\n2) بيّن أن $\\sqrt3\\cos x-\\sin x=2\\cos\\left(x+\\dfrac\\pi6\\right)$.\n\n3) حل في $[0;2\\pi[$ المعادلة $\\sqrt3\\cos x-\\sin x=\\sqrt2$.',
          fr: '1) Calculer $\\sin\\dfrac{\\pi}{12}$.\n\n2) Montrer que $\\sqrt3\\cos x-\\sin x=2\\cos\\left(x+\\dfrac\\pi6\\right)$.\n\n3) Résoudre dans $[0;2\\pi[$ : $\\sqrt3\\cos x-\\sin x=\\sqrt2$.',
        },
        correction: [
          { ar: '$\\sin\\left(\\dfrac\\pi3-\\dfrac\\pi4\\right)=\\dfrac{\\sqrt3}2\\cdot\\dfrac{\\sqrt2}2-\\dfrac12\\cdot\\dfrac{\\sqrt2}2=\\dfrac{\\sqrt6-\\sqrt2}4$.', fr: '$\\sin\\left(\\dfrac\\pi3-\\dfrac\\pi4\\right)=\\dfrac{\\sqrt3}2\\cdot\\dfrac{\\sqrt2}2-\\dfrac12\\cdot\\dfrac{\\sqrt2}2=\\dfrac{\\sqrt6-\\sqrt2}4$.' },
          { ar: '$2\\cos\\left(x+\\dfrac\\pi6\\right)=2\\left(\\dfrac{\\sqrt3}2\\cos x-\\dfrac12\\sin x\\right)=\\sqrt3\\cos x-\\sin x$.', fr: '$2\\cos\\left(x+\\dfrac\\pi6\\right)=2\\left(\\dfrac{\\sqrt3}2\\cos x-\\dfrac12\\sin x\\right)=\\sqrt3\\cos x-\\sin x$.' },
          { ar: '$\\cos\\left(x+\\dfrac\\pi6\\right)=\\dfrac{\\sqrt2}2$: $x+\\dfrac\\pi6=\\pm\\dfrac\\pi4+2k\\pi$، إذن $x=\\dfrac{\\pi}{12}+2k\\pi$ أو $x=-\\dfrac{5\\pi}{12}+2k\\pi$. في $[0;2\\pi[$: $S=\\left\\{\\dfrac\\pi{12};\\dfrac{19\\pi}{12}\\right\\}$.', fr: '$\\cos\\left(x+\\dfrac\\pi6\\right)=\\dfrac{\\sqrt2}2$ : $x+\\dfrac\\pi6=\\pm\\dfrac\\pi4+2k\\pi$, donc $x=\\dfrac{\\pi}{12}+2k\\pi$ ou $x=-\\dfrac{5\\pi}{12}+2k\\pi$. Dans $[0;2\\pi[$ : $S=\\left\\{\\dfrac\\pi{12};\\dfrac{19\\pi}{12}\\right\\}$.' },
        ],
      },
    ],
  },

  /* ---------------- Semestre 2 ---------------- */
  {
    id: 'devoir-1bac-s2-1',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 1 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: النهايات', fr: 'Exercice 1 : limites' },
        points: 12,
        statement: {
          ar: 'احسب النهايات التالية:\n\n1) $\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2-x+3}{1-x^2}$.\n\n2) $\\lim\\limits_{x\\to1}\\dfrac{x^2+x-2}{x-1}$.\n\n3) $\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt{x^2+x}-x\\right)$.\n\n4) $\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}{x\\sin x}$.',
          fr: 'Calculer les limites suivantes :\n\n1) $\\lim\\limits_{x\\to+\\infty}\\dfrac{2x^2-x+3}{1-x^2}$.\n\n2) $\\lim\\limits_{x\\to1}\\dfrac{x^2+x-2}{x-1}$.\n\n3) $\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt{x^2+x}-x\\right)$.\n\n4) $\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}{x\\sin x}$.',
        },
        correction: [
          { ar: '$\\lim\\dfrac{2x^2}{-x^2}=-2$.', fr: '$\\lim\\dfrac{2x^2}{-x^2}=-2$.' },
          { ar: '$\\dfrac{(x-1)(x+2)}{x-1}=x+2\\to3$.', fr: '$\\dfrac{(x-1)(x+2)}{x-1}=x+2\\to3$.' },
          { ar: 'بالمرافق: $\\dfrac{x}{\\sqrt{x^2+x}+x}=\\dfrac{1}{\\sqrt{1+\\frac1x}+1}\\to\\dfrac12$.', fr: 'Par le conjugué : $\\dfrac{x}{\\sqrt{x^2+x}+x}=\\dfrac{1}{\\sqrt{1+\\frac1x}+1}\\to\\dfrac12$.' },
          { ar: '$\\dfrac{1-\\cos x}{x^2}\\times\\dfrac{x}{\\sin x}\\to\\dfrac12\\times1=\\dfrac12$.', fr: '$\\dfrac{1-\\cos x}{x^2}\\times\\dfrac{x}{\\sin x}\\to\\dfrac12\\times1=\\dfrac12$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الدوران', fr: 'Exercice 2 : rotation' },
        points: 8,
        statement: {
          ar: 'ليكن $ABC$ مثلثاً متساوي الأضلاع مباشراً، و $R$ الدوران الذي مركزه $A$ وزاويته $\\dfrac\\pi3$. لتكن $M$ نقطة من $[BC]$ و $M\'=R(M)$.\n\n1) حدد $R(B)$.\n\n2) بيّن أن $CM\'=BM$.\n\n3) بيّن أن المثلث $AMM\'$ متساوي الأضلاع.',
          fr: 'Soit $ABC$ un triangle équilatéral direct et $R$ la rotation de centre $A$ et d’angle $\\dfrac\\pi3$. Soit $M\\in[BC]$ et $M\'=R(M)$.\n\n1) Déterminer $R(B)$.\n\n2) Montrer que $CM\'=BM$.\n\n3) Montrer que le triangle $AMM\'$ est équilatéral.',
        },
        correction: [
          { ar: '$AC=AB$ و $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\dfrac\\pi3$، إذن $R(B)=C$.', fr: '$AC=AB$ et $(\\overrightarrow{AB},\\overrightarrow{AC})\\equiv\\dfrac\\pi3$, donc $R(B)=C$.' },
          { ar: '$R(B)=C$ و $R(M)=M\'$، والدوران يحافظ على المسافات: $CM\'=BM$.', fr: '$R(B)=C$ et $R(M)=M\'$ ; la rotation conserve les distances : $CM\'=BM$.' },
          { ar: '$AM\'=AM$ و $(\\overrightarrow{AM},\\overrightarrow{AM\'})\\equiv\\dfrac\\pi3$: المثلث متساوي الساقين ورأسه زاويته $60^\\circ$، إذن متساوي الأضلاع.', fr: '$AM\'=AM$ et $(\\overrightarrow{AM},\\overrightarrow{AM\'})\\equiv\\dfrac\\pi3$ : triangle isocèle d’angle au sommet $60^\\circ$, donc équilatéral.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-1bac-s2-2',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 2 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الاشتقاق', fr: 'Exercice 1 : dérivation' },
        points: 10,
        statement: {
          ar: 'نعتبر $f(x)=\\sqrt{x+3}$.\n\n1) بيّن باستعمال التعريف أن $f$ قابلة للاشتقاق في $1$ وأن $f\'(1)=\\dfrac14$.\n\n2) حدد معادلة المماس لـ $C_f$ في النقطة ذات الأفصول $1$.\n\n3) احسب مشتقة $g(x)=\\dfrac{x^2}{x-1}$ وادرس إشارتها.',
          fr: 'On considère $f(x)=\\sqrt{x+3}$.\n\n1) Montrer à l’aide de la définition que $f$ est dérivable en $1$ et que $f\'(1)=\\dfrac14$.\n\n2) Déterminer l’équation de la tangente à $C_f$ au point d’abscisse $1$.\n\n3) Calculer la dérivée de $g(x)=\\dfrac{x^2}{x-1}$ et étudier son signe.',
        },
        correction: [
          { ar: '$\\dfrac{\\sqrt{x+3}-2}{x-1}=\\dfrac{1}{\\sqrt{x+3}+2}\\to\\dfrac14$.', fr: '$\\dfrac{\\sqrt{x+3}-2}{x-1}=\\dfrac{1}{\\sqrt{x+3}+2}\\to\\dfrac14$.' },
          { ar: '$y=\\dfrac14(x-1)+2=\\dfrac14x+\\dfrac74$.', fr: '$y=\\dfrac14(x-1)+2=\\dfrac14x+\\dfrac74$.' },
          { ar: '$g\'(x)=\\dfrac{2x(x-1)-x^2}{(x-1)^2}=\\dfrac{x(x-2)}{(x-1)^2}$: موجبة على $]-\\infty;0]$ و $[2;+\\infty[$، وسالبة على $[0;1[$ و $]1;2]$.', fr: '$g\'(x)=\\dfrac{2x(x-1)-x^2}{(x-1)^2}=\\dfrac{x(x-2)}{(x-1)^2}$ : positive sur $]-\\infty;0]$ et $[2;+\\infty[$, négative sur $[0;1[$ et $]1;2]$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المتجهات في الفضاء', fr: 'Exercice 2 : vecteurs de l’espace' },
        points: 10,
        statement: {
          ar: 'ليكن $ABCDEFGH$ مكعباً، و $I$ منتصف $[EF]$ و $J$ منتصف $[CG]$.\n\n1) عبّر عن $\\overrightarrow{AI}$ و $\\overrightarrow{AJ}$ بدلالة $\\overrightarrow{AB}$ و $\\overrightarrow{AD}$ و $\\overrightarrow{AE}$.\n\n2) بيّن أن $\\overrightarrow{IJ}=\\dfrac12\\overrightarrow{AB}+\\overrightarrow{AD}-\\dfrac12\\overrightarrow{AE}$.\n\n3) هل المتجهات $\\overrightarrow{IJ}$ و $\\overrightarrow{AD}$ و $\\overrightarrow{EB}$ مستوائية؟',
          fr: 'Soit $ABCDEFGH$ un cube, $I$ le milieu de $[EF]$ et $J$ celui de $[CG]$.\n\n1) Exprimer $\\overrightarrow{AI}$ et $\\overrightarrow{AJ}$ en fonction de $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AE}$.\n\n2) Montrer que $\\overrightarrow{IJ}=\\dfrac12\\overrightarrow{AB}+\\overrightarrow{AD}-\\dfrac12\\overrightarrow{AE}$.\n\n3) Les vecteurs $\\overrightarrow{IJ}$, $\\overrightarrow{AD}$, $\\overrightarrow{EB}$ sont-ils coplanaires ?',
        },
        correction: [
          { ar: '$\\overrightarrow{AI}=\\overrightarrow{AE}+\\dfrac12\\overrightarrow{AB}$ و $\\overrightarrow{AJ}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\dfrac12\\overrightarrow{AE}$.', fr: '$\\overrightarrow{AI}=\\overrightarrow{AE}+\\dfrac12\\overrightarrow{AB}$ et $\\overrightarrow{AJ}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\dfrac12\\overrightarrow{AE}$.' },
          { ar: '$\\overrightarrow{IJ}=\\overrightarrow{AJ}-\\overrightarrow{AI}=\\dfrac12\\overrightarrow{AB}+\\overrightarrow{AD}-\\dfrac12\\overrightarrow{AE}$.', fr: '$\\overrightarrow{IJ}=\\overrightarrow{AJ}-\\overrightarrow{AI}=\\dfrac12\\overrightarrow{AB}+\\overrightarrow{AD}-\\dfrac12\\overrightarrow{AE}$.' },
          { ar: '$\\overrightarrow{EB}=\\overrightarrow{AB}-\\overrightarrow{AE}$، إذن $\\overrightarrow{IJ}=\\dfrac12\\overrightarrow{EB}+\\overrightarrow{AD}$: نعم، مستوائية.', fr: '$\\overrightarrow{EB}=\\overrightarrow{AB}-\\overrightarrow{AE}$, donc $\\overrightarrow{IJ}=\\dfrac12\\overrightarrow{EB}+\\overrightarrow{AD}$ : oui, coplanaires.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-1bac-s2-3',
    levelId: '1bac',
    streams: ['sx'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 3 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: دراسة دالة', fr: 'Exercice 1 : étude de fonction' },
        points: 12,
        statement: {
          ar: 'نعتبر $f(x)=\\dfrac{x^2+x+1}{x}$ على $\\mathbb R^*$.\n\n1) احسب نهايات $f$ عند $0^+$ و $0^-$ و $\\pm\\infty$.\n\n2) بيّن أن $y=x+1$ مقارب مائل لـ $C_f$ وادرس الوضع النسبي.\n\n3) احسب $f\'(x)$ وضع جدول تغيرات $f$.\n\n4) بيّن أن $\\Omega(0;1)$ مركز تماثل لـ $C_f$.',
          fr: 'On considère $f(x)=\\dfrac{x^2+x+1}{x}$ sur $\\mathbb R^*$.\n\n1) Calculer les limites de $f$ en $0^+$, $0^-$ et $\\pm\\infty$.\n\n2) Montrer que $y=x+1$ est asymptote oblique à $C_f$ et étudier la position relative.\n\n3) Calculer $f\'(x)$ et dresser le tableau de variations.\n\n4) Montrer que $\\Omega(0;1)$ est centre de symétrie de $C_f$.',
        },
        correction: [
          { ar: '$f(x)=x+1+\\dfrac1x$: $\\lim\\limits_{0^+}f=+\\infty$ ؛ $\\lim\\limits_{0^-}f=-\\infty$ ؛ $\\lim\\limits_{\\pm\\infty}f=\\pm\\infty$.', fr: '$f(x)=x+1+\\dfrac1x$ : $\\lim\\limits_{0^+}f=+\\infty$ ; $\\lim\\limits_{0^-}f=-\\infty$ ; $\\lim\\limits_{\\pm\\infty}f=\\pm\\infty$.' },
          { ar: '$f(x)-(x+1)=\\dfrac1x\\to0$؛ المنحنى فوق المقارب على $]0;+\\infty[$ وتحته على $]-\\infty;0[$.', fr: '$f(x)-(x+1)=\\dfrac1x\\to0$ ; la courbe est au-dessus de l’asymptote sur $]0;+\\infty[$ et en dessous sur $]-\\infty;0[$.' },
          { ar: '$f\'(x)=\\dfrac{x^2-1}{x^2}$: $f$ تزايدية على $]-\\infty;-1]$ و $[1;+\\infty[$، وتناقصية على $[-1;0[$ و $]0;1]$؛ $f(-1)=-1$ و $f(1)=3$.', fr: '$f\'(x)=\\dfrac{x^2-1}{x^2}$ : $f$ croît sur $]-\\infty;-1]$ et $[1;+\\infty[$, décroît sur $[-1;0[$ et $]0;1]$ ; $f(-1)=-1$ et $f(1)=3$.' },
          { ar: '$f(-x)+f(x)=(-x+1-\\tfrac1x)+(x+1+\\tfrac1x)=2$.', fr: '$f(-x)+f(x)=(-x+1-\\tfrac1x)+(x+1+\\tfrac1x)=2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الهندسة التحليلية في الفضاء', fr: 'Exercice 2 : géométrie analytique de l’espace' },
        points: 8,
        statement: {
          ar: 'نعتبر $A(1;0;2)$ و $B(2;1;0)$ و $C(0;1;2)$.\n\n1) بيّن أن $A$ و $B$ و $C$ غير مستقيمية.\n\n2) اكتب تمثيلاً بارامترياً للمستقيم $(AB)$.\n\n3) بيّن أن $x+y+z-3=0$ معادلة ديكارتية للمستوى $(ABC)$.',
          fr: 'On considère $A(1;0;2)$, $B(2;1;0)$ et $C(0;1;2)$.\n\n1) Montrer que $A$, $B$, $C$ ne sont pas alignés.\n\n2) Écrire une représentation paramétrique de $(AB)$.\n\n3) Montrer que $x+y+z-3=0$ est une équation cartésienne du plan $(ABC)$.',
        },
        correction: [
          { ar: '$\\overrightarrow{AB}(1;1;-2)$ و $\\overrightarrow{AC}(-1;1;0)$؛ المحددة $\\begin{vmatrix}1&-1\\\\1&1\\end{vmatrix}=2\\neq0$: غير مستقيميتين.', fr: '$\\overrightarrow{AB}(1;1;-2)$ et $\\overrightarrow{AC}(-1;1;0)$ ; le déterminant $\\begin{vmatrix}1&-1\\\\1&1\\end{vmatrix}=2\\neq0$ : non colinéaires.' },
          { ar: '$(AB):\\begin{cases}x=1+t\\\\y=t\\\\z=2-2t\\end{cases}$ ($t\\in\\mathbb R$).', fr: '$(AB):\\begin{cases}x=1+t\\\\y=t\\\\z=2-2t\\end{cases}$ ($t\\in\\mathbb R$).' },
          { ar: '$1+0+2-3=0$ ؛ $2+1+0-3=0$ ؛ $0+1+2-3=0$: النقط الثلاث غير المستقيمية تحقق المعادلة، إذن هي معادلة للمستوى $(ABC)$.', fr: '$1+0+2-3=0$ ; $2+1+0-3=0$ ; $0+1+2-3=0$ : les trois points non alignés vérifient l’équation, c’est donc une équation de $(ABC)$.' },
        ],
      },
    ],
  },
];
