import type { Exam } from '@/types';
import { devoirSource } from './source';

/** Devoirs surveillés modèles du tronc commun scientifique : trois par semestre. */
export const devoirsTc: Exam[] = [
  /* ---------------- Semestre 1 ---------------- */
  {
    id: 'devoir-tc-s1-1',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 1 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحسابيات', fr: 'Exercice 1 : arithmétique' },
        points: 8,
        statement: {
          ar: '1) فكك $360$ و $84$ إلى جداء عوامل أولية.\n\n2) استنتج $PGCD(360;84)$ و $PPCM(360;84)$.\n\n3) ليكن $n\\in\\mathbb N$. بيّن أن $n(n+1)$ عدد زوجي.',
          fr: '1) Décomposer $360$ et $84$ en produit de facteurs premiers.\n\n2) En déduire $PGCD(360;84)$ et $PPCM(360;84)$.\n\n3) Soit $n\\in\\mathbb N$. Montrer que $n(n+1)$ est pair.',
        },
        correction: [
          { ar: '$360=2^3\\times3^2\\times5$ و $84=2^2\\times3\\times7$.', fr: '$360=2^3\\times3^2\\times5$ et $84=2^2\\times3\\times7$.' },
          { ar: '$PGCD=2^2\\times3=12$ و $PPCM=2^3\\times3^2\\times5\\times7=2520$.', fr: '$PGCD=2^2\\times3=12$ et $PPCM=2^3\\times3^2\\times5\\times7=2520$.' },
          { ar: 'أحد العددين المتتاليين $n$ و $n+1$ زوجي، إذن جداؤهما زوجي.', fr: 'L’un des deux entiers consécutifs $n$ et $n+1$ est pair, donc leur produit est pair.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المجموعات العددية', fr: 'Exercice 2 : ensembles de nombres' },
        points: 5,
        statement: {
          ar: '1) حدد طبيعة الأعداد: $\\dfrac{12}{4}$ ؛ $\\dfrac{7}{20}$ ؛ $\\dfrac13$ ؛ $\\sqrt2$.\n\n2) بسّط $A=\\dfrac{2^5\\times3^{-2}}{2^3\\times3^{-4}}$.',
          fr: '1) Préciser le plus petit ensemble contenant : $\\dfrac{12}{4}$ ; $\\dfrac{7}{20}$ ; $\\dfrac13$ ; $\\sqrt2$.\n\n2) Simplifier $A=\\dfrac{2^5\\times3^{-2}}{2^3\\times3^{-4}}$.',
        },
        correction: [
          { ar: '$\\dfrac{12}4=3\\in\\mathbb N$ ؛ $\\dfrac7{20}=0{,}35\\in\\mathbb D$ ؛ $\\dfrac13\\in\\mathbb Q$ ؛ $\\sqrt2\\in\\mathbb R\\setminus\\mathbb Q$.', fr: '$\\dfrac{12}4=3\\in\\mathbb N$ ; $\\dfrac7{20}=0{,}35\\in\\mathbb D$ ; $\\dfrac13\\in\\mathbb Q$ ; $\\sqrt2\\in\\mathbb R\\setminus\\mathbb Q$.' },
          { ar: '$A=2^{2}\\times3^{2}=36$.', fr: '$A=2^{2}\\times3^{2}=36$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الترتيب', fr: 'Exercice 3 : ordre' },
        points: 7,
        statement: {
          ar: 'ليكن $x$ عدداً حقيقياً حيث $1\\le x\\le3$.\n\n1) أطّر $2x-5$ و $x^2$.\n\n2) حل في $\\mathbb R$: $|x-2|\\le1$ ثم $|2x+1|=5$.',
          fr: 'Soit $x$ un réel tel que $1\\le x\\le3$.\n\n1) Encadrer $2x-5$ et $x^2$.\n\n2) Résoudre dans $\\mathbb R$ : $|x-2|\\le1$ puis $|2x+1|=5$.',
        },
        correction: [
          { ar: '$-3\\le2x-5\\le1$ و $1\\le x^2\\le9$ (لأن $x>0$).', fr: '$-3\\le2x-5\\le1$ et $1\\le x^2\\le9$ (car $x>0$).' },
          { ar: '$|x-2|\\le1\\iff1\\le x\\le3$، أي $S=[1;3]$.', fr: '$|x-2|\\le1\\iff1\\le x\\le3$, soit $S=[1;3]$.' },
          { ar: '$2x+1=5$ أو $2x+1=-5$، إذن $S=\\{2;-3\\}$.', fr: '$2x+1=5$ ou $2x+1=-5$, donc $S=\\{2;-3\\}$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-tc-s1-2',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 2 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب المتجهي', fr: 'Exercice 1 : calcul vectoriel' },
        points: 7,
        statement: {
          ar: 'ليكن $ABC$ مثلثاً. نعرف النقطتين $M$ و $N$ بـ: $\\overrightarrow{AM}=\\dfrac13\\overrightarrow{AB}$ و $\\overrightarrow{AN}=\\dfrac13\\overrightarrow{AC}$.\n\n1) بيّن أن $\\overrightarrow{MN}=\\dfrac13\\overrightarrow{BC}$.\n\n2) ماذا تستنتج بالنسبة للمستقيمين $(MN)$ و $(BC)$؟',
          fr: 'Soit $ABC$ un triangle. On définit $M$ et $N$ par $\\overrightarrow{AM}=\\dfrac13\\overrightarrow{AB}$ et $\\overrightarrow{AN}=\\dfrac13\\overrightarrow{AC}$.\n\n1) Montrer que $\\overrightarrow{MN}=\\dfrac13\\overrightarrow{BC}$.\n\n2) Que peut-on dire des droites $(MN)$ et $(BC)$ ?',
        },
        correction: [
          { ar: '$\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}=-\\dfrac13\\overrightarrow{AB}+\\dfrac13\\overrightarrow{AC}=\\dfrac13\\overrightarrow{BC}$.', fr: '$\\overrightarrow{MN}=\\overrightarrow{MA}+\\overrightarrow{AN}=-\\dfrac13\\overrightarrow{AB}+\\dfrac13\\overrightarrow{AC}=\\dfrac13\\overrightarrow{BC}$.' },
          { ar: 'المتجهتان مستقيميتان، إذن $(MN)\\parallel(BC)$.', fr: 'Les vecteurs sont colinéaires, donc $(MN)\\parallel(BC)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الإسقاط', fr: 'Exercice 2 : projection' },
        points: 5,
        statement: {
          ar: 'ليكن $ABC$ مثلثاً و $I$ منتصف $[AB]$. المستقيم المار من $I$ والموازي لـ $(BC)$ يقطع $(AC)$ في $J$.\n\n1) ما هو الإسقاط الذي يحوّل $B$ إلى $C$ و $I$ إلى $J$؟\n\n2) استنتج أن $J$ منتصف $[AC]$.',
          fr: 'Soit $ABC$ un triangle et $I$ le milieu de $[AB]$. La parallèle à $(BC)$ passant par $I$ coupe $(AC)$ en $J$.\n\n1) Quelle projection transforme $B$ en $C$ et $I$ en $J$ ?\n\n2) En déduire que $J$ est le milieu de $[AC]$.',
        },
        correction: [
          { ar: 'الإسقاط على $(AC)$ بتواز مع $(BC)$؛ وهو يحوّل $A$ إلى $A$.', fr: 'La projection sur $(AC)$ parallèlement à $(BC)$ ; elle laisse $A$ invariant.' },
          { ar: 'الإسقاط يحافظ على المنتصف: $I$ منتصف $[AB]$ إذن $J$ منتصف $[AC]$.', fr: 'La projection conserve le milieu : $I$ milieu de $[AB]$ donc $J$ milieu de $[AC]$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: المستقيم في المستوى', fr: 'Exercice 3 : la droite dans le plan' },
        points: 8,
        statement: {
          ar: 'في معلم، نعتبر $A(1;2)$ و $B(3;6)$ و $C(-1;0)$.\n\n1) حدد معادلة ديكارتية للمستقيم $(AB)$.\n\n2) حدد معادلة المستقيم $(D)$ المار من $C$ والموازي لـ $(AB)$.\n\n3) هل النقطة $E(0;2)$ تنتمي إلى $(D)$؟',
          fr: 'Dans un repère, on considère $A(1;2)$, $B(3;6)$ et $C(-1;0)$.\n\n1) Déterminer une équation cartésienne de $(AB)$.\n\n2) Déterminer une équation de la droite $(D)$ passant par $C$ et parallèle à $(AB)$.\n\n3) Le point $E(0;2)$ appartient-il à $(D)$ ?',
        },
        correction: [
          { ar: '$\\overrightarrow{AB}(2;4)$ موجهة لـ $(AB)$، المعامل الموجه $2$: $(AB):y=2x$ أي $2x-y=0$.', fr: '$\\overrightarrow{AB}(2;4)$ dirige $(AB)$, pente $2$ : $(AB):y=2x$, soit $2x-y=0$.' },
          { ar: '$(D):2x-y+c=0$ و $C\\in(D)$ يعطي $c=2$، إذن $(D):2x-y+2=0$.', fr: '$(D):2x-y+c=0$ et $C\\in(D)$ donne $c=2$, donc $(D):2x-y+2=0$.' },
          { ar: '$2\\times0-2+2=0$: نعم $E\\in(D)$.', fr: '$2\\times0-2+2=0$ : oui, $E\\in(D)$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-tc-s1-3',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 3 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 1 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحدوديات', fr: 'Exercice 1 : polynômes' },
        points: 8,
        statement: {
          ar: 'نعتبر الحدودية $P(x)=x^3-2x^2-5x+6$.\n\n1) تحقق أن $1$ جذر لـ $P$.\n\n2) حدد الحدودية $Q$ حيث $P(x)=(x-1)Q(x)$.\n\n3) عمّل $P(x)$ ثم حل المعادلة $P(x)=0$.',
          fr: 'On considère le polynôme $P(x)=x^3-2x^2-5x+6$.\n\n1) Vérifier que $1$ est une racine de $P$.\n\n2) Déterminer le polynôme $Q$ tel que $P(x)=(x-1)Q(x)$.\n\n3) Factoriser $P(x)$ puis résoudre $P(x)=0$.',
        },
        correction: [
          { ar: '$P(1)=1-2-5+6=0$.', fr: '$P(1)=1-2-5+6=0$.' },
          { ar: 'بالقسمة الإقليدية: $Q(x)=x^2-x-6$.', fr: 'Par division euclidienne : $Q(x)=x^2-x-6$.' },
          { ar: '$Q(x)=(x-3)(x+2)$، إذن $P(x)=(x-1)(x-3)(x+2)$ و $S=\\{-2;1;3\\}$.', fr: '$Q(x)=(x-3)(x+2)$, donc $P(x)=(x-1)(x-3)(x+2)$ et $S=\\{-2;1;3\\}$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المعادلات والنظمات', fr: 'Exercice 2 : équations et systèmes' },
        points: 7,
        statement: {
          ar: '1) حل في $\\mathbb R$: $2x^2-3x-2=0$.\n\n2) حل في $\\mathbb R$ المتراجحة $2x^2-3x-2<0$.\n\n3) حل النظمة $\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}$.',
          fr: '1) Résoudre dans $\\mathbb R$ : $2x^2-3x-2=0$.\n\n2) Résoudre dans $\\mathbb R$ l’inéquation $2x^2-3x-2<0$.\n\n3) Résoudre le système $\\begin{cases}2x+y=5\\\\x-y=1\\end{cases}$.',
        },
        correction: [
          { ar: '$\\Delta=9+16=25$، $x_1=\\dfrac{3-5}4=-\\dfrac12$ و $x_2=\\dfrac{3+5}4=2$.', fr: '$\\Delta=9+16=25$, $x_1=\\dfrac{3-5}4=-\\dfrac12$ et $x_2=\\dfrac{3+5}4=2$.' },
          { ar: 'ثلاثية الحدود سالبة بين الجذرين: $S=\\left]-\\dfrac12;2\\right[$.', fr: 'Le trinôme est négatif entre les racines : $S=\\left]-\\dfrac12;2\\right[$.' },
          { ar: 'بالجمع: $3x=6$ إذن $x=2$ و $y=1$.', fr: 'Par addition : $3x=6$ donc $x=2$ et $y=1$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الحساب المثلثي', fr: 'Exercice 3 : trigonométrie' },
        points: 5,
        statement: {
          ar: '1) حوّل $\\dfrac{\\pi}{6}$ إلى الدرجة و $135^\\circ$ إلى الراديان.\n\n2) علماً أن $\\cos x=\\dfrac35$ و $0<x<\\dfrac\\pi2$، احسب $\\sin x$ و $\\tan x$.',
          fr: '1) Convertir $\\dfrac{\\pi}{6}$ en degrés et $135^\\circ$ en radians.\n\n2) Sachant que $\\cos x=\\dfrac35$ et $0<x<\\dfrac\\pi2$, calculer $\\sin x$ et $\\tan x$.',
        },
        correction: [
          { ar: '$\\dfrac\\pi6=30^\\circ$ و $135^\\circ=\\dfrac{3\\pi}4$.', fr: '$\\dfrac\\pi6=30^\\circ$ et $135^\\circ=\\dfrac{3\\pi}4$.' },
          { ar: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ و $\\sin x>0$، إذن $\\sin x=\\dfrac45$ و $\\tan x=\\dfrac43$.', fr: '$\\sin^2x=1-\\dfrac9{25}=\\dfrac{16}{25}$ et $\\sin x>0$, donc $\\sin x=\\dfrac45$ et $\\tan x=\\dfrac43$.' },
        ],
      },
    ],
  },

  /* ---------------- Semestre 2 ---------------- */
  {
    id: 'devoir-tc-s2-1',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 1 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب المثلثي', fr: 'Exercice 1 : trigonométrie' },
        points: 8,
        statement: {
          ar: '1) احسب $\\cos\\dfrac{5\\pi}{6}$ و $\\sin\\dfrac{7\\pi}{6}$.\n\n2) بسّط $A=\\cos(\\pi-x)+\\cos(\\pi+x)+2\\cos x$.\n\n3) حل في $[0;2\\pi[$ المعادلة $\\cos x=\\dfrac12$.',
          fr: '1) Calculer $\\cos\\dfrac{5\\pi}{6}$ et $\\sin\\dfrac{7\\pi}{6}$.\n\n2) Simplifier $A=\\cos(\\pi-x)+\\cos(\\pi+x)+2\\cos x$.\n\n3) Résoudre dans $[0;2\\pi[$ l’équation $\\cos x=\\dfrac12$.',
        },
        correction: [
          { ar: '$\\cos\\dfrac{5\\pi}6=-\\cos\\dfrac\\pi6=-\\dfrac{\\sqrt3}2$ و $\\sin\\dfrac{7\\pi}6=-\\sin\\dfrac\\pi6=-\\dfrac12$.', fr: '$\\cos\\dfrac{5\\pi}6=-\\cos\\dfrac\\pi6=-\\dfrac{\\sqrt3}2$ et $\\sin\\dfrac{7\\pi}6=-\\sin\\dfrac\\pi6=-\\dfrac12$.' },
          { ar: '$A=-\\cos x-\\cos x+2\\cos x=0$.', fr: '$A=-\\cos x-\\cos x+2\\cos x=0$.' },
          { ar: '$S=\\left\\{\\dfrac\\pi3;\\dfrac{5\\pi}3\\right\\}$.', fr: '$S=\\left\\{\\dfrac\\pi3;\\dfrac{5\\pi}3\\right\\}$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: عموميات حول الدوال', fr: 'Exercice 2 : généralités sur les fonctions' },
        points: 12,
        statement: {
          ar: 'نعتبر الدالة $f(x)=x^2-2x-3$.\n\n1) حدد $D_f$ واحسب $f(0)$ و $f(3)$.\n\n2) بيّن أن $f(x)=(x-1)^2-4$.\n\n3) ادرس تغيرات $f$ وحدد قيمتها الدنوية.\n\n4) حل المعادلة $f(x)=0$ وأول النتيجة مبيانياً.',
          fr: 'On considère $f(x)=x^2-2x-3$.\n\n1) Déterminer $D_f$ et calculer $f(0)$ et $f(3)$.\n\n2) Montrer que $f(x)=(x-1)^2-4$.\n\n3) Étudier les variations de $f$ et donner son minimum.\n\n4) Résoudre $f(x)=0$ et interpréter graphiquement.',
        },
        correction: [
          { ar: '$D_f=\\mathbb R$، $f(0)=-3$ و $f(3)=0$.', fr: '$D_f=\\mathbb R$, $f(0)=-3$ et $f(3)=0$.' },
          { ar: '$(x-1)^2-4=x^2-2x+1-4=x^2-2x-3$.', fr: '$(x-1)^2-4=x^2-2x+1-4=x^2-2x-3$.' },
          { ar: '$f$ تناقصية على $]-\\infty;1]$ وتزايدية على $[1;+\\infty[$، وقيمتها الدنوية $f(1)=-4$.', fr: '$f$ décroît sur $]-\\infty;1]$ et croît sur $[1;+\\infty[$ ; son minimum est $f(1)=-4$.' },
          { ar: '$(x-1)^2=4$ إذن $x=-1$ أو $x=3$: المنحنى يقطع محور الأفاصيل في $(-1;0)$ و $(3;0)$.', fr: '$(x-1)^2=4$ donc $x=-1$ ou $x=3$ : la courbe coupe l’axe des abscisses en $(-1;0)$ et $(3;0)$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-tc-s2-2',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 2 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: التحويلات', fr: 'Exercice 1 : transformations' },
        points: 8,
        statement: {
          ar: 'ليكن $ABC$ مثلثاً و $h$ التحاكي الذي مركزه $A$ ونسبته $3$. نضع $B\'=h(B)$ و $C\'=h(C)$.\n\n1) أنشئ $B\'$ و $C\'$.\n\n2) بيّن أن $(B\'C\')\\parallel(BC)$ وأن $B\'C\'=3BC$.\n\n3) إذا كانت مساحة $ABC$ هي $4\\,cm^2$، فما مساحة $AB\'C\'$؟',
          fr: 'Soit $ABC$ un triangle et $h$ l’homothétie de centre $A$ et de rapport $3$. On pose $B\'=h(B)$ et $C\'=h(C)$.\n\n1) Construire $B\'$ et $C\'$.\n\n2) Montrer que $(B\'C\')\\parallel(BC)$ et que $B\'C\'=3BC$.\n\n3) Si l’aire de $ABC$ vaut $4\\,cm^2$, quelle est l’aire de $AB\'C\'$ ?',
        },
        correction: [
          { ar: '$\\overrightarrow{AB\'}=3\\overrightarrow{AB}$ و $\\overrightarrow{AC\'}=3\\overrightarrow{AC}$.', fr: '$\\overrightarrow{AB\'}=3\\overrightarrow{AB}$ et $\\overrightarrow{AC\'}=3\\overrightarrow{AC}$.' },
          { ar: '$\\overrightarrow{B\'C\'}=3\\overrightarrow{BC}$: إذن $(B\'C\')\\parallel(BC)$ و $B\'C\'=3BC$.', fr: '$\\overrightarrow{B\'C\'}=3\\overrightarrow{BC}$ : donc $(B\'C\')\\parallel(BC)$ et $B\'C\'=3BC$.' },
          { ar: 'المساحة تضرب في $3^2=9$: $36\\,cm^2$.', fr: 'L’aire est multipliée par $3^2=9$ : $36\\,cm^2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الجداء السلمي', fr: 'Exercice 2 : produit scalaire' },
        points: 12,
        statement: {
          ar: 'في معلم متعامد ممنظم، نعتبر $A(1;1)$ و $B(4;2)$ و $C(0;4)$.\n\n1) احسب $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.\n\n2) استنتج طبيعة المثلث $ABC$.\n\n3) احسب $AB$ و $AC$ ثم مساحة المثلث $ABC$.',
          fr: 'Dans un repère orthonormé, on considère $A(1;1)$, $B(4;2)$ et $C(0;4)$.\n\n1) Calculer $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.\n\n2) En déduire la nature du triangle $ABC$.\n\n3) Calculer $AB$ et $AC$, puis l’aire du triangle $ABC$.',
        },
        correction: [
          { ar: '$\\overrightarrow{AB}(3;1)$ و $\\overrightarrow{AC}(-1;3)$، إذن $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=-3+3=0$.', fr: '$\\overrightarrow{AB}(3;1)$ et $\\overrightarrow{AC}(-1;3)$, donc $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=-3+3=0$.' },
          { ar: 'المثلث $ABC$ قائم الزاوية في $A$.', fr: 'Le triangle $ABC$ est rectangle en $A$.' },
          { ar: '$AB=AC=\\sqrt{10}$: المثلث قائم ومتساوي الساقين، ومساحته $\\dfrac{\\sqrt{10}\\times\\sqrt{10}}2=5$.', fr: '$AB=AC=\\sqrt{10}$ : le triangle est rectangle isocèle, d’aire $\\dfrac{\\sqrt{10}\\times\\sqrt{10}}2=5$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-tc-s2-3',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 3 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 2 (modèle)' },
    durationMinutes: 60,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الإحصاء', fr: 'Exercice 1 : statistiques' },
        points: 10,
        statement: {
          ar: 'نقط $10$ تلاميذ في فرض: $8;10;10;12;12;12;14;14;16;12$.\n\n1) ضع جدول الحصيصات وحدد المنوال.\n\n2) احسب المتوسط والوسيط.\n\n3) احسب المغايرة والانحراف الطرازي.',
          fr: 'Notes de $10$ élèves à un devoir : $8;10;10;12;12;12;14;14;16;12$.\n\n1) Dresser le tableau des effectifs et donner le mode.\n\n2) Calculer la moyenne et la médiane.\n\n3) Calculer la variance et l’écart-type.',
        },
        correction: [
          { ar: 'القيم $8;10;12;14;16$ بحصيصات $1;2;4;2;1$. المنوال $12$.', fr: 'Valeurs $8;10;12;14;16$ d’effectifs $1;2;4;2;1$. Mode : $12$.' },
          { ar: '$\\bar x=\\dfrac{8+20+48+28+16}{10}=12$؛ الوسيط $12$ (القيمتان 5 و 6 تساويان $12$).', fr: '$\\bar x=\\dfrac{8+20+48+28+16}{10}=12$ ; médiane $12$ (5e et 6e valeurs égales à $12$).' },
          { ar: '$V=\\dfrac{16+2\\times4+0+2\\times4+16}{10}=4{,}8$ و $\\sigma=\\sqrt{4{,}8}\\approx2{,}19$.', fr: '$V=\\dfrac{16+2\\times4+0+2\\times4+16}{10}=4{,}8$ et $\\sigma=\\sqrt{4{,}8}\\approx2{,}19$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الهندسة الفضائية', fr: 'Exercice 2 : géométrie dans l’espace' },
        points: 10,
        statement: {
          ar: 'ليكن $ABCDEFGH$ مكعباً (القاعدة $ABCD$ والأحرف $[AE]$، $[BF]$، $[CG]$، $[DH]$)، و $I$ منتصف $[AE]$ و $J$ منتصف $[CG]$.\n\n1) حدد تقاطع المستويين $(ABC)$ و $(BCG)$.\n\n2) بيّن أن $(IJ)\\parallel(AC)$، واستنتج أن $(IJ)\\parallel(ABC)$.\n\n3) بيّن أن $(BF)\\perp(ABC)$.',
          fr: 'Soit $ABCDEFGH$ un cube (base $ABCD$, arêtes $[AE]$, $[BF]$, $[CG]$, $[DH]$), $I$ le milieu de $[AE]$ et $J$ celui de $[CG]$.\n\n1) Déterminer l’intersection des plans $(ABC)$ et $(BCG)$.\n\n2) Montrer que $(IJ)\\parallel(AC)$ et en déduire que $(IJ)\\parallel(ABC)$.\n\n3) Montrer que $(BF)\\perp(ABC)$.',
        },
        correction: [
          { ar: 'المستويان يشتركان في $B$ و $C$، إذن تقاطعهما المستقيم $(BC)$.', fr: 'Les deux plans contiennent $B$ et $C$ : leur intersection est la droite $(BC)$.' },
          { ar: '$\\overrightarrow{AI}=\\dfrac12\\overrightarrow{AE}=\\dfrac12\\overrightarrow{CG}=\\overrightarrow{CJ}$، إذن $ACJI$ متوازي أضلاع و $(IJ)\\parallel(AC)$؛ و $(AC)\\subset(ABC)$ إذن $(IJ)\\parallel(ABC)$.', fr: '$\\overrightarrow{AI}=\\dfrac12\\overrightarrow{AE}=\\dfrac12\\overrightarrow{CG}=\\overrightarrow{CJ}$, donc $ACJI$ est un parallélogramme et $(IJ)\\parallel(AC)$ ; comme $(AC)\\subset(ABC)$, $(IJ)\\parallel(ABC)$.' },
          { ar: '$(BF)$ عمودي على $(BA)$ و $(BC)$ المتقاطعين من $(ABC)$، إذن $(BF)\\perp(ABC)$.', fr: '$(BF)$ est orthogonale aux droites sécantes $(BA)$ et $(BC)$ de $(ABC)$, donc $(BF)\\perp(ABC)$.' },
        ],
      },
    ],
  },
];
