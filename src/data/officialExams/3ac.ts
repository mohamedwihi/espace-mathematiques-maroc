import type { Exam, Localized } from '@/types';

const modelSource: Localized = {
  ar: 'موضوع نموذجي على شاكلة الامتحان من إعداد الأستاذ Wihi Mohamed، غير صادر عن أي جهة رسمية. التصحيح مقترح من الأستاذ.',
  fr: "Sujet type rédigé par Prof Wihi Mohamed sur le modèle de l'examen, non issu d'une instance officielle. Corrigé proposé par le professeur.",
};

/** Examens régionaux et locaux de 3e année du collège (3AC). */
export const exams3ac: Exam[] = [
  {
    id: 'regional-3ac-draa-tafilalet-2021-normale',
    levelId: '3ac',
    kind: 'regional',
    year: 2021,
    session: 'normal',
    title: {
      ar: 'الامتحان الجهوي الموحد 2021 — جهة درعة تافيلالت (الدورة العادية)',
      fr: 'Examen régional unifié 2021 — Drâa-Tafilalet (session normale)',
    },
    durationMinutes: 120,
    source: {
      ar: 'موضوع الامتحان الجهوي الموحد لنيل شهادة السلك الإعدادي، الأكاديمية الجهوية للتربية والتكوين درعة تافيلالت، دورة يونيو 2021 (نسخة مصورة). التصحيح أدناه من إعداد الأستاذ Wihi Mohamed.',
      fr: "Sujet de l'examen régional unifié du certificat d'études collégiales, AREF Drâa-Tafilalet, session de juin 2021 (copie numérisée). Corrigé ci-dessous rédigé par Prof Wihi Mohamed.",
    },
    official: true,
    pdfUrl: '/exams/3ac/regional-3ac-draa-tafilalet-2021-normale.pdf',
    parts: [
      {
        title: { ar: 'التمرين 1: المعادلات والمتراجحات', fr: 'Exercice 1 : équations et inéquations' },
        points: 6,
        statement: {
          ar: 'حل $4x+6=126$ ؛ حدد أربعة أعداد صحيحة طبيعية متتابعة مجموعها $126$ ؛ حل $(x+2)^2-25=0$ ؛ حل المتراجحة $4x\\le12$ ومثل حلولها على مستقيم مدرج.',
          fr: 'Résoudre $4x+6=126$ ; trouver quatre entiers naturels consécutifs de somme $126$ ; résoudre $(x+2)^2-25=0$ ; résoudre $4x\\le12$ et représenter les solutions sur une droite graduée.',
        },
        correction: [
          { ar: '$4x=120$ إذن $x=30$.', fr: '$4x=120$ donc $x=30$.' },
          { ar: 'لتكن $n$ أصغرها: $n+(n+1)+(n+2)+(n+3)=126$ أي $4n+6=126$، إذن $n=30$: الأعداد هي $30$، $31$، $32$، $33$.', fr: 'Soit $n$ le plus petit : $n+(n+1)+(n+2)+(n+3)=126$, soit $4n+6=126$, donc $n=30$ : les nombres sont $30$, $31$, $32$, $33$.' },
          { ar: '$(x+2-5)(x+2+5)=0$ أي $(x-3)(x+7)=0$: $x=3$ أو $x=-7$.', fr: '$(x+2-5)(x+2+5)=0$, soit $(x-3)(x+7)=0$ : $x=3$ ou $x=-7$.' },
          { ar: '$x\\le3$: مثلاً $2$ حل موجب و $-1$ حل سالب؛ الحلول هي نصف المستقيم المغلق في $3$ نحو اليسار.', fr: '$x\\le3$ : par exemple $2$ est une solution positive et $-1$ une solution négative ; les solutions forment la demi-droite fermée en $3$, vers la gauche.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: النظمات', fr: 'Exercice 2 : systèmes' },
        points: 6,
        statement: {
          ar: 'حل جبرياً $x+y=60$ و $2x+5y=150$ ؛ ظرف يحتوي على $60$ ورقة من فئة $20$ درهماً و $50$ درهماً قيمتها $1500$ درهم: كم عدد أوراق كل فئة؟ ؛ حل مبيانياً $3x-y=5$ و $x+y=3$.',
          fr: 'Résoudre algébriquement $x+y=60$ et $2x+5y=150$ ; une enveloppe contient $60$ billets de $20$ DH et de $50$ DH pour $1500$ DH : combien de billets de chaque sorte ? ; résoudre graphiquement $3x-y=5$ et $x+y=3$.',
        },
        correction: [
          { ar: '$y=60-x$ ثم $2x+300-5x=150$ أي $x=50$ و $y=10$.', fr: '$y=60-x$ puis $2x+300-5x=150$, d’où $x=50$ et $y=10$.' },
          { ar: '$x+y=60$ و $20x+50y=1500$ أي $2x+5y=150$: $50$ ورقة من فئة $20$ درهماً و $10$ أوراق من فئة $50$ درهماً.', fr: '$x+y=60$ et $20x+50y=1500$, soit $2x+5y=150$ : $50$ billets de $20$ DH et $10$ billets de $50$ DH.' },
          { ar: 'نرسم المستقيمين $y=3x-5$ و $y=-x+3$؛ يتقاطعان في النقطة $(2;1)$ وهي حل النظمة.', fr: 'On trace $y=3x-5$ et $y=-x+3$ ; elles se coupent en $(2;1)$, solution du système.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الإزاحة', fr: 'Exercice 3 : translation' },
        points: 3,
        statement: {
          ar: '$ABC$ مثلث قائم الزاوية في $A$ و $M$ منتصف $[BC]$، و $T$ الإزاحة التي تحول $A$ إلى $M$. أنشئ $D=T(B)$ و $E=T(C)$، حدد قياس $\\widehat{DME}$ وصورة $[BC]$.',
          fr: '$ABC$ est rectangle en $A$, $M$ est le milieu de $[BC]$ et $T$ la translation qui transforme $A$ en $M$. Construire $D=T(B)$ et $E=T(C)$, déterminer $\\widehat{DME}$ et l’image de $[BC]$.',
        },
        correction: [
          { ar: '$\\overrightarrow{BD}=\\overrightarrow{CE}=\\overrightarrow{AM}$.', fr: '$\\overrightarrow{BD}=\\overrightarrow{CE}=\\overrightarrow{AM}$.' },
          { ar: 'الإزاحة تحافظ على قياس الزوايا و $T(A)=M$ إذن $\\widehat{DME}=\\widehat{BAC}=90°$.', fr: 'La translation conserve les angles et $T(A)=M$, donc $\\widehat{DME}=\\widehat{BAC}=90°$.' },
          { ar: 'صورة $[BC]$ هي $[DE]$.', fr: 'L’image de $[BC]$ est $[DE]$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: المعلم ومعادلة مستقيم', fr: 'Exercice 4 : repère et équation de droite' },
        points: 5,
        statement: {
          ar: '$A(0;-2)$، $B(3;-1)$، $C(2;2)$. احسب $\\overrightarrow{AB}$ و $AB$، بين أن $(AB):y=\\frac13x-2$ وأن المستقيم $(\\Delta)$ المار من $B$ والعمودي على $(AB)$ هو $y=-3x+8$، حدد $(\\Delta\')$ المار من $C$ والموازي لـ $(AB)$، ثم $D$ بحيث $ABCD$ متوازي أضلاع.',
          fr: '$A(0;-2)$, $B(3;-1)$, $C(2;2)$. Calculer $\\overrightarrow{AB}$ et $AB$, montrer que $(AB):y=\\frac13x-2$ et que la perpendiculaire $(\\Delta)$ à $(AB)$ passant par $B$ est $y=-3x+8$, déterminer $(\\Delta\')$ passant par $C$ et parallèle à $(AB)$, puis $D$ tel que $ABCD$ soit un parallélogramme.',
        },
        correction: [
          { ar: '$\\overrightarrow{AB}(3;1)$ و $AB=\\sqrt{9+1}=\\sqrt{10}$.', fr: '$\\overrightarrow{AB}(3;1)$ et $AB=\\sqrt{9+1}=\\sqrt{10}$.' },
          { ar: 'الميل $m=\\frac{-1+2}{3-0}=\\frac13$ والأرتوب عند الأصل $-2$ (لأن $A$ على محور الأراتيب).', fr: 'Pente $m=\\frac{-1+2}{3-0}=\\frac13$ et ordonnée à l’origine $-2$ (car $A$ est sur l’axe des ordonnées).' },
          { ar: 'ميل $(\\Delta)$ هو $-3$ لأن $\\frac13\\times(-3)=-1$؛ و $-1=-3\\times3+p$ يعطي $p=8$.', fr: 'La pente de $(\\Delta)$ est $-3$ car $\\frac13\\times(-3)=-1$ ; et $-1=-3\\times3+p$ donne $p=8$.' },
          { ar: '$(\\Delta\'):y=\\frac13x+p$ مع $2=\\frac23+p$ أي $p=\\frac43$.', fr: '$(\\Delta\'):y=\\frac13x+p$ avec $2=\\frac23+p$, soit $p=\\frac43$.' },
          { ar: '$\\overrightarrow{AB}=\\overrightarrow{DC}$: $(3;1)=(2-x_D;2-y_D)$ إذن $D(-1;1)$.', fr: '$\\overrightarrow{AB}=\\overrightarrow{DC}$ : $(3;1)=(2-x_D;2-y_D)$, donc $D(-1;1)$.' },
        ],
      },
    ],
  },

  /* ---------- Sujets types d'examen régional ---------- */
  {
    id: 'regional-3ac-modele-1',
    levelId: '3ac',
    kind: 'regional',
    year: 2026,
    title: { ar: 'نموذج الامتحان الجهوي رقم 1', fr: "Sujet type d'examen régional n°1" },
    durationMinutes: 120,
    source: modelSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب العددي', fr: 'Exercice 1 : calcul numérique' },
        points: 4,
        statement: {
          ar: 'بسّط $A=\\sqrt{48}-2\\sqrt{27}+\\sqrt{75}$ ؛ اجعل مقام $B=\\dfrac{3}{\\sqrt5-\\sqrt2}$ عدداً جذرياً ؛ عمّل $C=4x^2-9-(2x-3)(x+5)$.',
          fr: 'Simplifier $A=\\sqrt{48}-2\\sqrt{27}+\\sqrt{75}$ ; rendre rationnel le dénominateur de $B=\\dfrac{3}{\\sqrt5-\\sqrt2}$ ; factoriser $C=4x^2-9-(2x-3)(x+5)$.',
        },
        correction: [
          { ar: '$A=4\\sqrt3-6\\sqrt3+5\\sqrt3=3\\sqrt3$.', fr: '$A=4\\sqrt3-6\\sqrt3+5\\sqrt3=3\\sqrt3$.' },
          { ar: '$B=\\dfrac{3(\\sqrt5+\\sqrt2)}{5-2}=\\sqrt5+\\sqrt2$.', fr: '$B=\\dfrac{3(\\sqrt5+\\sqrt2)}{5-2}=\\sqrt5+\\sqrt2$.' },
          { ar: '$C=(2x-3)(2x+3)-(2x-3)(x+5)=(2x-3)(x-2)$.', fr: '$C=(2x-3)(2x+3)-(2x-3)(x+5)=(2x-3)(x-2)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المعادلات والنظمات', fr: 'Exercice 2 : équations et systèmes' },
        points: 5,
        statement: {
          ar: 'حل $\\dfrac{x-1}{3}-\\dfrac{x}{2}=1$ و $(3x-1)^2=(x+3)^2$ ؛ ثم المتراجحة $2(x-1)\\ge5x+4$. في مسرح، ثمن تذكرة الكبير $40$ درهماً وتذكرة الصغير $25$ درهماً؛ بيعت $150$ تذكرة بمبلغ $4\\,800$ درهم. كم عدد تذاكر كل نوع؟',
          fr: 'Résoudre $\\dfrac{x-1}{3}-\\dfrac{x}{2}=1$ et $(3x-1)^2=(x+3)^2$, puis l’inéquation $2(x-1)\\ge5x+4$. Au théâtre, un billet adulte coûte $40$ DH et un billet enfant $25$ DH ; $150$ billets ont rapporté $4\\,800$ DH. Combien de billets de chaque sorte ?',
        },
        correction: [
          { ar: 'نضرب في $6$: $2x-2-3x=6$ أي $x=-8$.', fr: 'On multiplie par $6$ : $2x-2-3x=6$, soit $x=-8$.' },
          { ar: '$(3x-1-x-3)(3x-1+x+3)=0$ أي $(2x-4)(4x+2)=0$: $x=2$ أو $x=-\\frac12$.', fr: '$(3x-1-x-3)(3x-1+x+3)=0$, soit $(2x-4)(4x+2)=0$ : $x=2$ ou $x=-\\frac12$.' },
          { ar: '$2x-2\\ge5x+4$ أي $-3x\\ge6$ إذن $x\\le-2$.', fr: '$2x-2\\ge5x+4$, soit $-3x\\ge6$, donc $x\\le-2$.' },
          { ar: '$x+y=150$ و $40x+25y=4800$: $40x+25(150-x)=4800$ أي $15x=1050$، $x=70$ و $y=80$.', fr: '$x+y=150$ et $40x+25y=4800$ : $40x+25(150-x)=4800$, soit $15x=1050$, $x=70$ adultes et $y=80$ enfants.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الدوال والإحصاء', fr: 'Exercice 3 : fonctions et statistique' },
        points: 4,
        statement: {
          ar: '$f$ دالة تآلفية حيث $f(1)=4$ و $f(3)=0$. حدد $f(x)$ وصورة $-2$ وسابق $10$. ثم: نقط $20$ تلميذاً: $8$ (3 تلاميذ)، $10$ (5)، $12$ (7)، $15$ (5). احسب المعدل وحدد الوسيط.',
          fr: '$f$ est affine avec $f(1)=4$ et $f(3)=0$. Déterminer $f(x)$, l’image de $-2$ et l’antécédent de $10$. Puis : notes de $20$ élèves : $8$ (3 élèves), $10$ (5), $12$ (7), $15$ (5). Calculer la moyenne et la médiane.',
        },
        correction: [
          { ar: '$a=\\frac{0-4}{3-1}=-2$ و $f(1)=-2+b=4$ إذن $b=6$: $f(x)=-2x+6$.', fr: '$a=\\frac{0-4}{3-1}=-2$ et $f(1)=-2+b=4$ donc $b=6$ : $f(x)=-2x+6$.' },
          { ar: '$f(-2)=10$ ؛ و $-2x+6=10$ يعطي $x=-2$.', fr: '$f(-2)=10$ ; et $-2x+6=10$ donne $x=-2$.' },
          { ar: 'المعدل $\\frac{24+50+84+75}{20}=\\frac{233}{20}=11{,}65$ ؛ الوسيط: القيمتان العاشرة والحادية عشرة تساويان $12$، إذن الوسيط $12$.', fr: 'Moyenne $\\frac{24+50+84+75}{20}=\\frac{233}{20}=11{,}65$ ; médiane : les $10^{e}$ et $11^{e}$ valeurs valent $12$, donc la médiane est $12$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: الهندسة', fr: 'Exercice 4 : géométrie' },
        points: 7,
        statement: {
          ar: 'في معلم متعامد ممنظم: $A(1;2)$، $B(5;4)$، $C(3;-2)$. احسب $AB$ و $AC$ و $BC$ وحدد طبيعة المثلث $ABC$. حدد معادلة $(AB)$ ومعادلة واسط $[BC]$. ثم حدد إحداثيتي $E$ صورة $A$ بالإزاحة ذات المتجهة $\\overrightarrow{BC}$.',
          fr: 'Dans un repère orthonormé : $A(1;2)$, $B(5;4)$, $C(3;-2)$. Calculer $AB$, $AC$, $BC$ et préciser la nature de $ABC$. Déterminer l’équation de $(AB)$ et celle de la médiatrice de $[BC]$. Puis les coordonnées de $E$, image de $A$ par la translation de vecteur $\\overrightarrow{BC}$.',
        },
        correction: [
          { ar: '$AB=\\sqrt{16+4}=\\sqrt{20}$ ؛ $AC=\\sqrt{4+16}=\\sqrt{20}$ ؛ $BC=\\sqrt{4+36}=\\sqrt{40}$.', fr: '$AB=\\sqrt{16+4}=\\sqrt{20}$ ; $AC=\\sqrt{4+16}=\\sqrt{20}$ ; $BC=\\sqrt{4+36}=\\sqrt{40}$.' },
          { ar: '$AB=AC$ و $AB^2+AC^2=40=BC^2$: المثلث قائم الزاوية ومتساوي الساقين في $A$.', fr: '$AB=AC$ et $AB^2+AC^2=40=BC^2$ : $ABC$ est rectangle isocèle en $A$.' },
          { ar: '$(AB):y=\\frac12x+\\frac32$.', fr: '$(AB):y=\\frac12x+\\frac32$.' },
          { ar: 'منتصف $[BC]$ هو $I(4;1)$ وميل $(BC)$ هو $3$، فميل الواسط $-\\frac13$: $y=-\\frac13x+\\frac73$ (وهو يمر من $A$ لأن $AB=AC$).', fr: 'Le milieu de $[BC]$ est $I(4;1)$ et la pente de $(BC)$ vaut $3$ ; la médiatrice a pour pente $-\\frac13$ : $y=-\\frac13x+\\frac73$ (elle passe par $A$ car $AB=AC$).' },
          { ar: '$\\overrightarrow{AE}=\\overrightarrow{BC}(-2;-6)$ إذن $E(-1;-4)$.', fr: '$\\overrightarrow{AE}=\\overrightarrow{BC}(-2;-6)$, donc $E(-1;-4)$.' },
        ],
      },
    ],
  },
  {
    id: 'regional-3ac-modele-2',
    levelId: '3ac',
    kind: 'regional',
    year: 2026,
    title: { ar: 'نموذج الامتحان الجهوي رقم 2', fr: "Sujet type d'examen régional n°2" },
    durationMinutes: 120,
    source: modelSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الترتيب والقوى', fr: 'Exercice 1 : ordre et puissances' },
        points: 4,
        statement: {
          ar: 'قارن $2\\sqrt7$ و $3\\sqrt3$. علماً أن $1\\le x\\le3$ و $-2\\le y\\le-1$، أطّر $x-y$ و $2x+3y$. احسب $D=\\dfrac{3^4\\times9^{-2}\\times5^3}{15^2}$.',
          fr: 'Comparer $2\\sqrt7$ et $3\\sqrt3$. Sachant $1\\le x\\le3$ et $-2\\le y\\le-1$, encadrer $x-y$ et $2x+3y$. Calculer $D=\\dfrac{3^4\\times9^{-2}\\times5^3}{15^2}$.',
        },
        correction: [
          { ar: '$(2\\sqrt7)^2=28>27=(3\\sqrt3)^2$ إذن $2\\sqrt7>3\\sqrt3$.', fr: '$(2\\sqrt7)^2=28>27=(3\\sqrt3)^2$, donc $2\\sqrt7>3\\sqrt3$.' },
          { ar: '$1\\le-y\\le2$ إذن $2\\le x-y\\le5$ ؛ $2\\le2x\\le6$ و $-6\\le3y\\le-3$ إذن $-4\\le2x+3y\\le3$.', fr: '$1\\le-y\\le2$ donc $2\\le x-y\\le5$ ; $2\\le2x\\le6$ et $-6\\le3y\\le-3$ donc $-4\\le2x+3y\\le3$.' },
          { ar: '$9^{-2}=3^{-4}$ إذن $D=\\dfrac{5^3}{3^2\\times5^2}=\\dfrac59$.', fr: '$9^{-2}=3^{-4}$ donc $D=\\dfrac{5^3}{3^2\\times5^2}=\\dfrac59$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: مبرهنة طاليس وفيثاغورس', fr: 'Exercice 2 : Thalès et Pythagore' },
        points: 5,
        statement: {
          ar: '$ABC$ مثلث حيث $AB=6$، $AC=8$، $BC=10$ (بالسنتيمتر). بين أنه قائم الزاوية. $M\\in[AB]$ حيث $AM=4{,}5$ والمستقيم المار من $M$ والموازي لـ $(BC)$ يقطع $[AC]$ في $N$. احسب $AN$ و $MN$، ثم $\\cos\\widehat{ABC}$ و $\\tan\\widehat{ABC}$.',
          fr: '$ABC$ est un triangle avec $AB=6$, $AC=8$, $BC=10$ (en cm). Montrer qu’il est rectangle. $M\\in[AB]$ avec $AM=4{,}5$ ; la parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$. Calculer $AN$ et $MN$, puis $\\cos\\widehat{ABC}$ et $\\tan\\widehat{ABC}$.',
        },
        correction: [
          { ar: '$BC^2=100=36+64=AB^2+AC^2$: قائم الزاوية في $A$ (عكس فيثاغورس).', fr: '$BC^2=100=36+64=AB^2+AC^2$ : rectangle en $A$ (réciproque de Pythagore).' },
          { ar: 'حسب طاليس: $\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac{MN}{BC}=\\frac{4{,}5}{6}=0{,}75$ إذن $AN=6$ و $MN=7{,}5$.', fr: 'Thalès : $\\frac{AM}{AB}=\\frac{AN}{AC}=\\frac{MN}{BC}=\\frac{4{,}5}{6}=0{,}75$, donc $AN=6$ et $MN=7{,}5$.' },
          { ar: '$\\cos\\widehat{ABC}=\\frac{AB}{BC}=\\frac35$ و $\\tan\\widehat{ABC}=\\frac{AC}{AB}=\\frac43$.', fr: '$\\cos\\widehat{ABC}=\\frac{AB}{BC}=\\frac35$ et $\\tan\\widehat{ABC}=\\frac{AC}{AB}=\\frac43$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الدوال الخطية والتآلفية', fr: 'Exercice 3 : fonctions linéaires et affines' },
        points: 5,
        statement: {
          ar: 'عرض أ: $30$ درهماً للحصة. عرض ب: اشتراك $200$ درهم و $10$ دراهم للحصة. عبر عن الثمنين $p_1(x)$ و $p_2(x)$ بدلالة عدد الحصص $x$، حدد طبيعة كل دالة، ثم ابتداء من كم حصة يكون العرض ب أفضل؟',
          fr: 'Formule A : $30$ DH la séance. Formule B : abonnement de $200$ DH et $10$ DH la séance. Exprimer $p_1(x)$ et $p_2(x)$ en fonction du nombre $x$ de séances, préciser la nature de chaque fonction, puis à partir de combien de séances la formule B est-elle plus avantageuse ?',
        },
        correction: [
          { ar: '$p_1(x)=30x$ دالة خطية ؛ $p_2(x)=10x+200$ دالة تآلفية.', fr: '$p_1(x)=30x$ est linéaire ; $p_2(x)=10x+200$ est affine.' },
          { ar: '$10x+200<30x$ أي $x>10$: ابتداء من $11$ حصة.', fr: '$10x+200<30x$, soit $x>10$ : à partir de $11$ séances.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: الهندسة الفضائية', fr: 'Exercice 4 : géométrie dans l’espace' },
        points: 6,
        statement: {
          ar: '$SABCD$ هرم قاعدته المربع $ABCD$ الذي ضلعه $6$ سم وارتفاعه $SA=8$ سم مع $(SA)$ عمودي على المستوى $(ABC)$. احسب حجمه و $SB$. نقطع الهرم بمستوى مواز للقاعدة يمر من النقطة $I$ من $[SA]$ حيث $SI=2$ سم: احسب معامل التصغير وحجم الهرم الصغير.',
          fr: '$SABCD$ est une pyramide de base le carré $ABCD$ de côté $6$ cm, de hauteur $SA=8$ cm avec $(SA)$ perpendiculaire au plan $(ABC)$. Calculer son volume et $SB$. On la coupe par un plan parallèle à la base passant par $I\\in[SA]$ avec $SI=2$ cm : calculer le coefficient de réduction et le volume de la petite pyramide.',
        },
        correction: [
          { ar: '$V=\\frac{36\\times8}{3}=96\\ \\text{cm}^3$.', fr: '$V=\\frac{36\\times8}{3}=96\\ \\text{cm}^3$.' },
          { ar: 'المثلث $SAB$ قائم في $A$: $SB^2=64+36=100$ إذن $SB=10$ سم.', fr: '$SAB$ est rectangle en $A$ : $SB^2=64+36=100$, donc $SB=10$ cm.' },
          { ar: '$k=\\frac{SI}{SA}=\\frac14$ و $V\'=k^3V=\\frac{96}{64}=1{,}5\\ \\text{cm}^3$.', fr: '$k=\\frac{SI}{SA}=\\frac14$ et $V\'=k^3V=\\frac{96}{64}=1{,}5\\ \\text{cm}^3$.' },
        ],
      },
    ],
  },

  /* ---------- Sujets types d'examen local (semestre 1) ---------- */
  {
    id: 'local-3ac-modele-1',
    levelId: '3ac',
    kind: 'local',
    year: 2026,
    semester: 1,
    title: { ar: 'نموذج الامتحان المحلي الموحد رقم 1 (الدورة الأولى)', fr: "Sujet type d'examen local unifié n°1 (semestre 1)" },
    durationMinutes: 120,
    source: modelSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الجذور المربعة والمتطابقات', fr: 'Exercice 1 : racines carrées et identités' },
        points: 6,
        statement: {
          ar: 'احسب $E=(\\sqrt3-2)^2+4\\sqrt3$ ؛ انشر $F=(3x+2)^2-(x-1)(x+1)$ ؛ عمل $G=x^2-6x+9$ و $H=(x+1)^2-16$ ؛ حل $x^2=12$.',
          fr: 'Calculer $E=(\\sqrt3-2)^2+4\\sqrt3$ ; développer $F=(3x+2)^2-(x-1)(x+1)$ ; factoriser $G=x^2-6x+9$ et $H=(x+1)^2-16$ ; résoudre $x^2=12$.',
        },
        correction: [
          { ar: '$E=3-4\\sqrt3+4+4\\sqrt3=7$.', fr: '$E=3-4\\sqrt3+4+4\\sqrt3=7$.' },
          { ar: '$F=9x^2+12x+4-x^2+1=8x^2+12x+5$.', fr: '$F=9x^2+12x+4-x^2+1=8x^2+12x+5$.' },
          { ar: '$G=(x-3)^2$ ؛ $H=(x+1-4)(x+1+4)=(x-3)(x+5)$.', fr: '$G=(x-3)^2$ ; $H=(x+1-4)(x+1+4)=(x-3)(x+5)$.' },
          { ar: '$x=2\\sqrt3$ أو $x=-2\\sqrt3$.', fr: '$x=2\\sqrt3$ ou $x=-2\\sqrt3$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الحساب المثلثي', fr: 'Exercice 2 : trigonométrie' },
        points: 4,
        statement: {
          ar: '$x$ قياس زاوية حادة حيث $\\sin x=\\frac{\\sqrt5}{3}$. احسب $\\cos x$ و $\\tan x$، ثم بسط $K=\\cos^2 x+\\cos^2(90°-x)+\\tan x\\times\\tan(90°-x)$.',
          fr: '$x$ est un angle aigu avec $\\sin x=\\frac{\\sqrt5}{3}$. Calculer $\\cos x$ et $\\tan x$, puis simplifier $K=\\cos^2 x+\\cos^2(90°-x)+\\tan x\\times\\tan(90°-x)$.',
        },
        correction: [
          { ar: '$\\cos^2x=1-\\frac59=\\frac49$ و $\\cos x>0$ إذن $\\cos x=\\frac23$ ؛ $\\tan x=\\frac{\\sqrt5}{2}$.', fr: '$\\cos^2x=1-\\frac59=\\frac49$ et $\\cos x>0$, donc $\\cos x=\\frac23$ ; $\\tan x=\\frac{\\sqrt5}{2}$.' },
          { ar: '$\\cos(90°-x)=\\sin x$ و $\\tan(90°-x)=\\frac{1}{\\tan x}$ إذن $K=1+1=2$.', fr: '$\\cos(90°-x)=\\sin x$ et $\\tan(90°-x)=\\frac{1}{\\tan x}$, donc $K=1+1=2$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: الزاوية المحيطية والمثلثات المتشابهة', fr: 'Exercice 3 : angles inscrits et triangles semblables' },
        points: 5,
        statement: {
          ar: '$A$، $B$، $C$، $D$ نقط من دائرة مركزها $O$، و $[AC]$ و $[BD]$ يتقاطعان في $I$. بين أن المثلثين $IAB$ و $IDC$ متشابهان ثم أن $IA\\times IC=IB\\times ID$.',
          fr: '$A$, $B$, $C$, $D$ sont sur un cercle de centre $O$ ; $[AC]$ et $[BD]$ se coupent en $I$. Montrer que les triangles $IAB$ et $IDC$ sont semblables, puis que $IA\\times IC=IB\\times ID$.',
        },
        correction: [
          { ar: '$\\widehat{BAC}=\\widehat{BDC}$ (زاويتان محيطيتان تحصران القوس $\\overset\\frown{BC}$) و $\\widehat{AIB}=\\widehat{DIC}$ (متقابلتان بالرأس): المثلثان متشابهان.', fr: '$\\widehat{BAC}=\\widehat{BDC}$ (angles inscrits interceptant l’arc $\\overset\\frown{BC}$) et $\\widehat{AIB}=\\widehat{DIC}$ (opposés par le sommet) : les triangles sont semblables.' },
          { ar: 'تناسب الأضلاع: $\\frac{IA}{ID}=\\frac{IB}{IC}$ إذن $IA\\times IC=IB\\times ID$.', fr: 'Côtés proportionnels : $\\frac{IA}{ID}=\\frac{IB}{IC}$, donc $IA\\times IC=IB\\times ID$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: مسألة', fr: 'Exercice 4 : problème' },
        points: 5,
        statement: {
          ar: 'سلم طوله $5$ م يستند إلى حائط عمودي، وتبعد قاعدته عن الحائط بـ $1{,}4$ م. احسب الارتفاع الذي يصل إليه السلم، ثم قيمة مقربة للزاوية التي يصنعها مع الأرض (نعطي $\\cos 74°\\approx0{,}28$).',
          fr: 'Une échelle de $5$ m s’appuie contre un mur vertical, son pied étant à $1{,}4$ m du mur. Calculer la hauteur atteinte, puis une valeur approchée de l’angle avec le sol (on donne $\\cos 74°\\approx0{,}28$).',
        },
        correction: [
          { ar: '$h^2=25-1{,}96=23{,}04$ إذن $h=4{,}8$ م.', fr: '$h^2=25-1{,}96=23{,}04$, donc $h=4{,}8$ m.' },
          { ar: '$\\cos\\alpha=\\frac{1{,}4}{5}=0{,}28$ إذن $\\alpha\\approx74°$.', fr: '$\\cos\\alpha=\\frac{1{,}4}{5}=0{,}28$, donc $\\alpha\\approx74°$.' },
        ],
      },
    ],
  },
  {
    id: 'local-3ac-modele-2',
    levelId: '3ac',
    kind: 'local',
    year: 2026,
    semester: 1,
    title: { ar: 'نموذج الامتحان المحلي الموحد رقم 2 (الدورة الأولى)', fr: "Sujet type d'examen local unifié n°2 (semestre 1)" },
    durationMinutes: 120,
    source: modelSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب', fr: 'Exercice 1 : calcul' },
        points: 5,
        statement: {
          ar: 'احسب $A=\\sqrt{(1-\\sqrt2)^2}+\\sqrt2$ ؛ $B=\\dfrac{1}{2-\\sqrt3}+\\dfrac{1}{2+\\sqrt3}$ ؛ أعط الكتابة العلمية لـ $C=\\dfrac{0{,}03\\times10^{5}\\times4\\times10^{-2}}{6\\times10^{-3}}$.',
          fr: 'Calculer $A=\\sqrt{(1-\\sqrt2)^2}+\\sqrt2$ ; $B=\\dfrac{1}{2-\\sqrt3}+\\dfrac{1}{2+\\sqrt3}$ ; donner l’écriture scientifique de $C=\\dfrac{0{,}03\\times10^{5}\\times4\\times10^{-2}}{6\\times10^{-3}}$.',
        },
        correction: [
          { ar: '$1-\\sqrt2<0$ إذن $\\sqrt{(1-\\sqrt2)^2}=\\sqrt2-1$ و $A=2\\sqrt2-1$.', fr: '$1-\\sqrt2<0$ donc $\\sqrt{(1-\\sqrt2)^2}=\\sqrt2-1$ et $A=2\\sqrt2-1$.' },
          { ar: '$B=\\dfrac{2+\\sqrt3+2-\\sqrt3}{4-3}=4$.', fr: '$B=\\dfrac{2+\\sqrt3+2-\\sqrt3}{4-3}=4$.' },
          { ar: '$C=\\dfrac{0{,}12}{6}\\times10^{5-2+3}=0{,}02\\times10^6=2\\times10^4$.', fr: '$C=\\dfrac{0{,}12}{6}\\times10^{5-2+3}=0{,}02\\times10^6=2\\times10^4$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الترتيب', fr: 'Exercice 2 : ordre' },
        points: 4,
        statement: {
          ar: 'ليكن $a$ و $b$ عددين موجبين قطعاً. بين أن $\\frac ab+\\frac ba\\ge2$. ثم إذا علمت أن $2<x<3$، أطّر $\\frac1x$ و $\\frac{x-1}{x}$.',
          fr: 'Soient $a$ et $b$ strictement positifs. Montrer que $\\frac ab+\\frac ba\\ge2$. Puis, sachant $2<x<3$, encadrer $\\frac1x$ et $\\frac{x-1}{x}$.',
        },
        correction: [
          { ar: '$\\frac ab+\\frac ba-2=\\frac{a^2+b^2-2ab}{ab}=\\frac{(a-b)^2}{ab}\\ge0$.', fr: '$\\frac ab+\\frac ba-2=\\frac{a^2+b^2-2ab}{ab}=\\frac{(a-b)^2}{ab}\\ge0$.' },
          { ar: '$\\frac13<\\frac1x<\\frac12$ و $\\frac{x-1}{x}=1-\\frac1x$ إذن $\\frac12<\\frac{x-1}{x}<\\frac23$.', fr: '$\\frac13<\\frac1x<\\frac12$ et $\\frac{x-1}{x}=1-\\frac1x$, donc $\\frac12<\\frac{x-1}{x}<\\frac23$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3: طاليس وعكسها', fr: 'Exercice 3 : Thalès et réciproque' },
        points: 5,
        statement: {
          ar: 'المستقيمان $(AE)$ و $(BD)$ يتقاطعان في $C$ حيث $CA=3$، $CE=4{,}5$، $CB=2$، $CD=3$. بين أن $(AB)\\parallel(DE)$، ثم احسب $DE$ علماً أن $AB=2{,}4$.',
          fr: 'Les droites $(AE)$ et $(BD)$ se coupent en $C$ avec $CA=3$, $CE=4{,}5$, $CB=2$, $CD=3$ ($C$ entre $A$ et $E$, et entre $B$ et $D$). Montrer que $(AB)\\parallel(DE)$, puis calculer $DE$ sachant $AB=2{,}4$.',
        },
        correction: [
          { ar: '$\\frac{CA}{CE}=\\frac{3}{4{,}5}=\\frac23$ و $\\frac{CB}{CD}=\\frac23$ والنقط في نفس الترتيب: $(AB)\\parallel(DE)$.', fr: '$\\frac{CA}{CE}=\\frac{3}{4{,}5}=\\frac23$ et $\\frac{CB}{CD}=\\frac23$, dans le même ordre : $(AB)\\parallel(DE)$.' },
          { ar: '$\\frac{AB}{DE}=\\frac23$ إذن $DE=3{,}6$.', fr: '$\\frac{AB}{DE}=\\frac23$ donc $DE=3{,}6$.' },
        ],
      },
      {
        title: { ar: 'التمرين 4: الزاوية المحيطية', fr: 'Exercice 4 : angle inscrit' },
        points: 6,
        statement: {
          ar: '$[AB]$ قطر دائرة مركزها $O$ و $C$ نقطة منها حيث $\\widehat{BAC}=35°$. احسب $\\widehat{ACB}$ و $\\widehat{ABC}$ و $\\widehat{BOC}$. ثم $D$ نقطة من القوس $\\overset\\frown{AB}$ التي لا تحتوي على $C$: احسب $\\widehat{ADC}$.',
          fr: '$[AB]$ est un diamètre d’un cercle de centre $O$, et $C$ un point du cercle avec $\\widehat{BAC}=35°$. Calculer $\\widehat{ACB}$, $\\widehat{ABC}$ et $\\widehat{BOC}$. $D$ est un point de l’arc $\\overset\\frown{AB}$ ne contenant pas $C$ : calculer $\\widehat{ADC}$.',
        },
        correction: [
          { ar: '$\\widehat{ACB}=90°$ (تحصر نصف دائرة) و $\\widehat{ABC}=55°$.', fr: '$\\widehat{ACB}=90°$ (elle intercepte un demi-cercle) et $\\widehat{ABC}=55°$.' },
          { ar: '$\\widehat{BOC}=2\\widehat{BAC}=70°$.', fr: '$\\widehat{BOC}=2\\widehat{BAC}=70°$.' },
          { ar: '$\\widehat{ADC}$ و $\\widehat{ABC}$ تحصران نفس القوس $\\overset\\frown{AC}$ إذن $\\widehat{ADC}=55°$.', fr: '$\\widehat{ADC}$ et $\\widehat{ABC}$ interceptent le même arc $\\overset\\frown{AC}$, donc $\\widehat{ADC}=55°$.' },
        ],
      },
    ],
  },
];
