import type { Exam } from '@/types';
import { devoirSource } from './source';

/** Devoirs surveillés modèles de 2e année bac PC/SVT : trois par semestre. */
export const devoirs2bac: Exam[] = [
  /* ---------------- Semestre 1 ---------------- */
  {
    id: 'devoir-2bac-s1-1',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 1 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: النهايات والاتصال', fr: 'Exercice 1 : limites et continuité' },
        points: 8,
        statement: {
          ar: 'نعتبر $f(x)=x^3+3x-2$.\n\n1) بيّن أن المعادلة $f(x)=0$ تقبل حلاً وحيداً $\\alpha$ في $]0;1[$.\n\n2) بيّن أن $0{,}5<\\alpha<1$.\n\n3) احسب $\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt[3]{x^3+1}-x\\right)$.',
          fr: 'On considère $f(x)=x^3+3x-2$.\n\n1) Montrer que $f(x)=0$ admet une unique solution $\\alpha$ dans $]0;1[$.\n\n2) Montrer que $0{,}5<\\alpha<1$.\n\n3) Calculer $\\lim\\limits_{x\\to+\\infty}\\left(\\sqrt[3]{x^3+1}-x\\right)$.',
        },
        correction: [
          { ar: '$f$ متصلة و $f\'(x)=3x^2+3>0$، و $f(0)=-2<0$ و $f(1)=2>0$: حل وحيد $\\alpha$.', fr: '$f$ est continue, $f\'(x)=3x^2+3>0$, $f(0)=-2<0$ et $f(1)=2>0$ : solution unique $\\alpha$.' },
          { ar: '$f(0{,}5)=0{,}125+1{,}5-2=-0{,}375<0$ إذن $0{,}5<\\alpha<1$.', fr: '$f(0{,}5)=0{,}125+1{,}5-2=-0{,}375<0$ donc $0{,}5<\\alpha<1$.' },
          { ar: 'باستعمال $a-b=\\dfrac{a^3-b^3}{a^2+ab+b^2}$ مع $a=\\sqrt[3]{x^3+1}$ و $b=x$: البسط $1$ والمقام يؤول إلى $+\\infty$، إذن النهاية $0$.', fr: 'Avec $a-b=\\dfrac{a^3-b^3}{a^2+ab+b^2}$, $a=\\sqrt[3]{x^3+1}$, $b=x$ : le numérateur vaut $1$ et le dénominateur tend vers $+\\infty$, donc la limite vaut $0$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الاشتقاق ودراسة دالة', fr: 'Exercice 2 : dérivation et étude' },
        points: 12,
        statement: {
          ar: 'نعتبر $g(x)=x-2\\sqrt{x}$ على $[0;+\\infty[$.\n\n1) ادرس قابلية اشتقاق $g$ على اليمين في $0$ وأول النتيجة هندسياً.\n\n2) احسب $g\'(x)$ لـ $x>0$ وضع جدول تغيرات $g$.\n\n3) احسب $\\lim\\limits_{x\\to+\\infty}g(x)$ و $\\lim\\limits_{x\\to+\\infty}\\dfrac{g(x)}x$، ثم حدد طبيعة الفرع اللانهائي.',
          fr: 'On considère $g(x)=x-2\\sqrt{x}$ sur $[0;+\\infty[$.\n\n1) Étudier la dérivabilité de $g$ à droite en $0$ et interpréter géométriquement.\n\n2) Calculer $g\'(x)$ pour $x>0$ et dresser le tableau de variations.\n\n3) Calculer $\\lim\\limits_{x\\to+\\infty}g(x)$ et $\\lim\\limits_{x\\to+\\infty}\\dfrac{g(x)}x$, puis préciser la branche infinie.',
        },
        correction: [
          { ar: '$\\dfrac{g(x)-g(0)}{x}=1-\\dfrac2{\\sqrt x}\\to-\\infty$: غير قابلة للاشتقاق، ونصف مماس عمودي في $O$.', fr: '$\\dfrac{g(x)-g(0)}{x}=1-\\dfrac2{\\sqrt x}\\to-\\infty$ : non dérivable, demi-tangente verticale en $O$.' },
          { ar: '$g\'(x)=1-\\dfrac1{\\sqrt x}=\\dfrac{\\sqrt x-1}{\\sqrt x}$: $g$ تناقصية على $[0;1]$ وتزايدية على $[1;+\\infty[$، و $g(1)=-1$.', fr: '$g\'(x)=1-\\dfrac1{\\sqrt x}=\\dfrac{\\sqrt x-1}{\\sqrt x}$ : $g$ décroît sur $[0;1]$, croît sur $[1;+\\infty[$, $g(1)=-1$.' },
          { ar: '$g(x)=\\sqrt x(\\sqrt x-2)\\to+\\infty$ و $\\dfrac{g(x)}x=1-\\dfrac2{\\sqrt x}\\to1$، و $g(x)-x=-2\\sqrt x\\to-\\infty$: فرع شلجمي في اتجاه $y=x$.', fr: '$g(x)=\\sqrt x(\\sqrt x-2)\\to+\\infty$, $\\dfrac{g(x)}x=1-\\dfrac2{\\sqrt x}\\to1$ et $g(x)-x=-2\\sqrt x\\to-\\infty$ : branche parabolique de direction $y=x$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-2bac-s1-2',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 2 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: المتتاليات', fr: 'Exercice 1 : suites' },
        points: 12,
        statement: {
          ar: 'نعتبر $(u_n)$ المعرفة بـ $u_0=\\dfrac12$ و $u_{n+1}=\\dfrac{3u_n+2}{u_n+4}$.\n\n1) بيّن بالترجع أن $0<u_n<1$ لكل $n$.\n\n2) بيّن أن $u_{n+1}-u_n=\\dfrac{(1-u_n)(u_n+2)}{u_n+4}$ واستنتج أن $(u_n)$ تزايدية.\n\n3) استنتج أن $(u_n)$ متقاربة وحدد نهايتها.',
          fr: 'On considère $(u_n)$ définie par $u_0=\\dfrac12$ et $u_{n+1}=\\dfrac{3u_n+2}{u_n+4}$.\n\n1) Montrer par récurrence que $0<u_n<1$ pour tout $n$.\n\n2) Montrer que $u_{n+1}-u_n=\\dfrac{(1-u_n)(u_n+2)}{u_n+4}$ et en déduire que $(u_n)$ est croissante.\n\n3) En déduire que $(u_n)$ converge et déterminer sa limite.',
        },
        correction: [
          { ar: 'التهيئة: $0<\\dfrac12<1$. الوراثة: $u_{n+1}=3-\\dfrac{10}{u_n+4}$ والدالة $x\\mapsto3-\\dfrac{10}{x+4}$ تزايدية، تحول $]0;1[$ إلى $\\left]\\dfrac12;1\\right[\\subset]0;1[$.', fr: 'Initialisation : $0<\\dfrac12<1$. Hérédité : $u_{n+1}=3-\\dfrac{10}{u_n+4}$ et $x\\mapsto3-\\dfrac{10}{x+4}$ est croissante, envoie $]0;1[$ dans $\\left]\\dfrac12;1\\right[\\subset]0;1[$.' },
          { ar: '$u_{n+1}-u_n=\\dfrac{3u_n+2-u_n^2-4u_n}{u_n+4}=\\dfrac{-u_n^2-u_n+2}{u_n+4}=\\dfrac{(1-u_n)(u_n+2)}{u_n+4}>0$.', fr: '$u_{n+1}-u_n=\\dfrac{3u_n+2-u_n^2-4u_n}{u_n+4}=\\dfrac{-u_n^2-u_n+2}{u_n+4}=\\dfrac{(1-u_n)(u_n+2)}{u_n+4}>0$.' },
          { ar: 'تزايدية ومكبورة بـ $1$: متقاربة. النهاية تحقق $\\ell=\\dfrac{3\\ell+2}{\\ell+4}$ أي $(1-\\ell)(\\ell+2)=0$، ومع $\\ell\\in\\left[\\dfrac12;1\\right]$: $\\ell=1$.', fr: 'Croissante et majorée par $1$ : convergente. La limite vérifie $\\ell=\\dfrac{3\\ell+2}{\\ell+4}$, soit $(1-\\ell)(\\ell+2)=0$ ; avec $\\ell\\in\\left[\\dfrac12;1\\right]$ : $\\ell=1$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الدوال الأصلية', fr: 'Exercice 2 : primitives' },
        points: 8,
        statement: {
          ar: '1) حدد دالة أصلية لكل من: $f_1(x)=3x^2-\\dfrac1{x^2}$ ؛ $f_2(x)=\\dfrac{x}{\\sqrt{x^2+1}}$ ؛ $f_3(x)=\\sin x\\cos^2x$.\n\n2) حدد الدالة الأصلية $F$ لـ $f(x)=(2x-1)^3$ التي تنعدم في $1$.',
          fr: '1) Déterminer une primitive de : $f_1(x)=3x^2-\\dfrac1{x^2}$ ; $f_2(x)=\\dfrac{x}{\\sqrt{x^2+1}}$ ; $f_3(x)=\\sin x\\cos^2x$.\n\n2) Déterminer la primitive $F$ de $f(x)=(2x-1)^3$ qui s’annule en $1$.',
        },
        correction: [
          { ar: '$F_1(x)=x^3+\\dfrac1x$ ؛ $F_2(x)=\\sqrt{x^2+1}$ ؛ $F_3(x)=-\\dfrac{\\cos^3x}3$.', fr: '$F_1(x)=x^3+\\dfrac1x$ ; $F_2(x)=\\sqrt{x^2+1}$ ; $F_3(x)=-\\dfrac{\\cos^3x}3$.' },
          { ar: '$F(x)=\\dfrac{(2x-1)^4}{8}+c$ و $F(1)=\\dfrac18+c=0$، إذن $F(x)=\\dfrac{(2x-1)^4-1}{8}$.', fr: '$F(x)=\\dfrac{(2x-1)^4}{8}+c$ et $F(1)=\\dfrac18+c=0$, donc $F(x)=\\dfrac{(2x-1)^4-1}{8}$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-2bac-s1-3',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 1,
    title: { ar: 'الفرض المحروس 3 – الدورة الأولى (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 1 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الدوال اللوغاريتمية', fr: 'Exercice 1 : logarithme' },
        points: 11,
        statement: {
          ar: 'نعتبر $f(x)=x-1-\\ln x$ على $]0;+\\infty[$.\n\n1) احسب $\\lim\\limits_{x\\to0^+}f(x)$ و $\\lim\\limits_{x\\to+\\infty}f(x)$.\n\n2) احسب $f\'(x)$ وضع جدول تغيرات $f$.\n\n3) استنتج أن $\\ln x\\le x-1$ لكل $x>0$.\n\n4) حل في $\\mathbb R$ المتراجحة $\\ln(x+2)\\le\\ln(4-x)$.',
          fr: 'On considère $f(x)=x-1-\\ln x$ sur $]0;+\\infty[$.\n\n1) Calculer $\\lim\\limits_{x\\to0^+}f(x)$ et $\\lim\\limits_{x\\to+\\infty}f(x)$.\n\n2) Calculer $f\'(x)$ et dresser le tableau de variations.\n\n3) En déduire que $\\ln x\\le x-1$ pour tout $x>0$.\n\n4) Résoudre dans $\\mathbb R$ : $\\ln(x+2)\\le\\ln(4-x)$.',
        },
        correction: [
          { ar: '$\\lim\\limits_{0^+}f=+\\infty$ ؛ $f(x)=x\\left(1-\\dfrac1x-\\dfrac{\\ln x}x\\right)\\to+\\infty$.', fr: '$\\lim\\limits_{0^+}f=+\\infty$ ; $f(x)=x\\left(1-\\dfrac1x-\\dfrac{\\ln x}x\\right)\\to+\\infty$.' },
          { ar: '$f\'(x)=1-\\dfrac1x=\\dfrac{x-1}x$: تناقصية على $]0;1]$ وتزايدية على $[1;+\\infty[$، و $f(1)=0$.', fr: '$f\'(x)=1-\\dfrac1x=\\dfrac{x-1}x$ : décroissante sur $]0;1]$, croissante sur $[1;+\\infty[$, $f(1)=0$.' },
          { ar: '$f(1)=0$ قيمة دنوية، إذن $f(x)\\ge0$ أي $\\ln x\\le x-1$.', fr: '$f(1)=0$ est le minimum, donc $f(x)\\ge0$, soit $\\ln x\\le x-1$.' },
          { ar: 'الشرط: $-2<x<4$. المتراجحة تكافئ $x+2\\le4-x$ أي $x\\le1$. $S=]-2;1]$.', fr: 'Condition : $-2<x<4$. L’inéquation équivaut à $x+2\\le4-x$, soit $x\\le1$. $S=]-2;1]$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: الأعداد العقدية', fr: 'Exercice 2 : nombres complexes' },
        points: 9,
        statement: {
          ar: '1) حل في $\\mathbb C$: $z^2-2\\sqrt3z+4=0$.\n\n2) اكتب الحلين على الشكل الأسي.\n\n3) في المستوى العقدي، $A(\\sqrt3+i)$ و $B(\\sqrt3-i)$. بيّن أن $B$ صورة $A$ بالدوران الذي مركزه $O$ وزاويته $-\\dfrac\\pi3$، واستنتج طبيعة المثلث $OAB$.',
          fr: '1) Résoudre dans $\\mathbb C$ : $z^2-2\\sqrt3z+4=0$.\n\n2) Écrire les solutions sous forme exponentielle.\n\n3) Dans le plan complexe, $A(\\sqrt3+i)$ et $B(\\sqrt3-i)$. Montrer que $B$ est l’image de $A$ par la rotation de centre $O$ et d’angle $-\\dfrac\\pi3$ ; en déduire la nature de $OAB$.',
        },
        correction: [
          { ar: '$\\Delta=12-16=-4$، إذن $z=\\sqrt3\\pm i$.', fr: '$\\Delta=12-16=-4$, donc $z=\\sqrt3\\pm i$.' },
          { ar: '$\\sqrt3+i=2e^{i\\frac\\pi6}$ و $\\sqrt3-i=2e^{-i\\frac\\pi6}$.', fr: '$\\sqrt3+i=2e^{i\\frac\\pi6}$ et $\\sqrt3-i=2e^{-i\\frac\\pi6}$.' },
          { ar: '$e^{-i\\frac\\pi3}\\times2e^{i\\frac\\pi6}=2e^{-i\\frac\\pi6}=z_B$. إذن $OA=OB$ و $(\\overrightarrow{OA},\\overrightarrow{OB})\\equiv-\\dfrac\\pi3$: المثلث $OAB$ متساوي الأضلاع.', fr: '$e^{-i\\frac\\pi3}\\times2e^{i\\frac\\pi6}=2e^{-i\\frac\\pi6}=z_B$. Donc $OA=OB$ et $(\\overrightarrow{OA},\\overrightarrow{OB})\\equiv-\\dfrac\\pi3$ : $OAB$ est équilatéral.' },
        ],
      },
    ],
  },

  /* ---------------- Semestre 2 ---------------- */
  {
    id: 'devoir-2bac-s2-1',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 1 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°1 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'مسألة: الدالة الأسية', fr: 'Problème : fonction exponentielle' },
        points: 20,
        statement: {
          ar: 'نعتبر $f(x)=(x-1)e^x+1$ على $\\mathbb R$.\n\n1) احسب $\\lim\\limits_{x\\to-\\infty}f(x)$ وأول النتيجة هندسياً.\n\n2) احسب $\\lim\\limits_{x\\to+\\infty}f(x)$ و $\\lim\\limits_{x\\to+\\infty}\\dfrac{f(x)}x$ وأول النتيجة.\n\n3) بيّن أن $f\'(x)=xe^x$ وضع جدول تغيرات $f$.\n\n4) استنتج أن $f(x)\\ge0$ لكل $x\\in\\mathbb R$.\n\n5) حدد معادلة المماس لـ $C_f$ في النقطة ذات الأفصول $1$.',
          fr: 'On considère $f(x)=(x-1)e^x+1$ sur $\\mathbb R$.\n\n1) Calculer $\\lim\\limits_{x\\to-\\infty}f(x)$ et interpréter.\n\n2) Calculer $\\lim\\limits_{x\\to+\\infty}f(x)$ et $\\lim\\limits_{x\\to+\\infty}\\dfrac{f(x)}x$ ; interpréter.\n\n3) Montrer que $f\'(x)=xe^x$ et dresser le tableau de variations.\n\n4) En déduire que $f(x)\\ge0$ pour tout $x\\in\\mathbb R$.\n\n5) Déterminer l’équation de la tangente à $C_f$ au point d’abscisse $1$.',
        },
        correction: [
          { ar: '$xe^x\\to0$ و $e^x\\to0$ عند $-\\infty$: $\\lim f=1$؛ المستقيم $y=1$ مقارب أفقي بجوار $-\\infty$.', fr: '$xe^x\\to0$ et $e^x\\to0$ en $-\\infty$ : $\\lim f=1$ ; la droite $y=1$ est asymptote horizontale en $-\\infty$.' },
          { ar: '$\\lim f=+\\infty$ و $\\dfrac{f(x)}x=\\left(1-\\dfrac1x\\right)e^x+\\dfrac1x\\to+\\infty$: فرع شلجمي في اتجاه محور الأراتيب.', fr: '$\\lim f=+\\infty$ et $\\dfrac{f(x)}x=\\left(1-\\dfrac1x\\right)e^x+\\dfrac1x\\to+\\infty$ : branche parabolique de direction $(Oy)$.' },
          { ar: '$f\'(x)=e^x+(x-1)e^x=xe^x$: تناقصية على $]-\\infty;0]$ وتزايدية على $[0;+\\infty[$، و $f(0)=0$.', fr: '$f\'(x)=e^x+(x-1)e^x=xe^x$ : décroissante sur $]-\\infty;0]$, croissante sur $[0;+\\infty[$, $f(0)=0$.' },
          { ar: '$f(0)=0$ قيمة دنوية مطلقة، إذن $f(x)\\ge0$.', fr: '$f(0)=0$ est le minimum absolu, donc $f(x)\\ge0$.' },
          { ar: '$f(1)=1$ و $f\'(1)=e$: $y=e(x-1)+1$.', fr: '$f(1)=1$ et $f\'(1)=e$ : $y=e(x-1)+1$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-2bac-s2-2',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 2 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°2 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الحساب التكاملي', fr: 'Exercice 1 : calcul intégral' },
        points: 12,
        statement: {
          ar: '1) احسب $I=\\displaystyle\\int_0^1\\dfrac{2x}{x^2+1}\\,dx$ و $J=\\displaystyle\\int_0^{\\ln2}e^{2x}\\,dx$.\n\n2) باستعمال المكاملة بالأجزاء، احسب $K=\\displaystyle\\int_1^ex\\ln x\\,dx$.\n\n3) احسب مساحة الحيز المحصور بين منحنى $f(x)=e^x$ ومحور الأفاصيل والمستقيمين $x=0$ و $x=1$.',
          fr: '1) Calculer $I=\\displaystyle\\int_0^1\\dfrac{2x}{x^2+1}\\,dx$ et $J=\\displaystyle\\int_0^{\\ln2}e^{2x}\\,dx$.\n\n2) Par parties, calculer $K=\\displaystyle\\int_1^ex\\ln x\\,dx$.\n\n3) Calculer l’aire du domaine limité par la courbe de $f(x)=e^x$, l’axe des abscisses et les droites $x=0$ et $x=1$.',
        },
        correction: [
          { ar: '$I=\\big[\\ln(x^2+1)\\big]_0^1=\\ln2$ ؛ $J=\\left[\\dfrac{e^{2x}}2\\right]_0^{\\ln2}=\\dfrac{4-1}2=\\dfrac32$.', fr: '$I=\\big[\\ln(x^2+1)\\big]_0^1=\\ln2$ ; $J=\\left[\\dfrac{e^{2x}}2\\right]_0^{\\ln2}=\\dfrac{4-1}2=\\dfrac32$.' },
          { ar: '$u=\\ln x$ و $v\'=x$: $K=\\left[\\dfrac{x^2}2\\ln x\\right]_1^e-\\int_1^e\\dfrac x2\\,dx=\\dfrac{e^2}2-\\dfrac{e^2-1}4=\\dfrac{e^2+1}4$.', fr: '$u=\\ln x$, $v\'=x$ : $K=\\left[\\dfrac{x^2}2\\ln x\\right]_1^e-\\int_1^e\\dfrac x2\\,dx=\\dfrac{e^2}2-\\dfrac{e^2-1}4=\\dfrac{e^2+1}4$.' },
          { ar: '$\\mathcal A=\\int_0^1e^x\\,dx=(e-1)\\,u.a$.', fr: '$\\mathcal A=\\int_0^1e^x\\,dx=(e-1)\\,u.a$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: المعادلات التفاضلية', fr: 'Exercice 2 : équations différentielles' },
        points: 8,
        statement: {
          ar: '1) حل المعادلة $(E):y\'+2y=6$، ثم حدد الحل الذي يحقق $y(0)=1$.\n\n2) حل المعادلة $y\'\'-2y\'+5y=0$، ثم حدد الحل الذي يحقق $y(0)=1$ و $y\'(0)=3$.',
          fr: '1) Résoudre $(E):y\'+2y=6$, puis déterminer la solution vérifiant $y(0)=1$.\n\n2) Résoudre $y\'\'-2y\'+5y=0$, puis déterminer la solution vérifiant $y(0)=1$ et $y\'(0)=3$.',
        },
        correction: [
          { ar: '$y\'=-2y+6$: $y=Ce^{-2x}+3$، و $y(0)=C+3=1$ إذن $y=3-2e^{-2x}$.', fr: '$y\'=-2y+6$ : $y=Ce^{-2x}+3$ ; $y(0)=C+3=1$ donc $y=3-2e^{-2x}$.' },
          { ar: '$r^2-2r+5=0$: $r=1\\pm2i$، إذن $y=e^x(\\alpha\\cos2x+\\beta\\sin2x)$. $y(0)=\\alpha=1$ و $y\'(0)=\\alpha+2\\beta=3$ إذن $\\beta=1$: $y=e^x(\\cos2x+\\sin2x)$.', fr: '$r^2-2r+5=0$ : $r=1\\pm2i$, donc $y=e^x(\\alpha\\cos2x+\\beta\\sin2x)$. $y(0)=\\alpha=1$, $y\'(0)=\\alpha+2\\beta=3$ donc $\\beta=1$ : $y=e^x(\\cos2x+\\sin2x)$.' },
        ],
      },
    ],
  },
  {
    id: 'devoir-2bac-s2-3',
    levelId: '2bac',
    streams: ['pc', 'svt'],
    kind: 'continuous',
    year: 2026,
    semester: 2,
    title: { ar: 'الفرض المحروس 3 – الدورة الثانية (نموذج)', fr: 'Devoir surveillé n°3 – Semestre 2 (modèle)' },
    durationMinutes: 120,
    source: devoirSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1: الهندسة الفضائية', fr: 'Exercice 1 : géométrie dans l’espace' },
        points: 10,
        statement: {
          ar: 'في معلم متعامد ممنظم، نعتبر $A(1;0;1)$ و $B(0;1;1)$ و $C(1;1;0)$ والفلكة $(S):x^2+y^2+z^2-2x-2y-2z-1=0$.\n\n1) احسب $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}$ واستنتج أن $x+y+z-2=0$ معادلة للمستوى $(ABC)$.\n\n2) حدد مركز $(S)$ وشعاعها.\n\n3) بيّن أن $(ABC)$ يقطع $(S)$ وفق دائرة يُطلب تحديد شعاعها.',
          fr: 'Dans un repère orthonormé, on considère $A(1;0;1)$, $B(0;1;1)$, $C(1;1;0)$ et la sphère $(S):x^2+y^2+z^2-2x-2y-2z-1=0$.\n\n1) Calculer $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}$ et en déduire que $x+y+z-2=0$ est une équation de $(ABC)$.\n\n2) Déterminer le centre et le rayon de $(S)$.\n\n3) Montrer que $(ABC)$ coupe $(S)$ selon un cercle dont on précisera le rayon.',
        },
        correction: [
          { ar: '$\\overrightarrow{AB}(-1;1;0)$ و $\\overrightarrow{AC}(0;1;-1)$: $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}=(-1;-1;-1)$، إذن $\\vec n(1;1;1)$ منظمية، و $A$ يعطي $d=-2$.', fr: '$\\overrightarrow{AB}(-1;1;0)$, $\\overrightarrow{AC}(0;1;-1)$ : $\\overrightarrow{AB}\\wedge\\overrightarrow{AC}=(-1;-1;-1)$, donc $\\vec n(1;1;1)$ est normal, et $A$ donne $d=-2$.' },
          { ar: '$(x-1)^2+(y-1)^2+(z-1)^2=4$: المركز $\\Omega(1;1;1)$ والشعاع $R=2$.', fr: '$(x-1)^2+(y-1)^2+(z-1)^2=4$ : centre $\\Omega(1;1;1)$, rayon $R=2$.' },
          { ar: '$d(\\Omega,(ABC))=\\dfrac{|1+1+1-2|}{\\sqrt3}=\\dfrac1{\\sqrt3}<2$: التقاطع دائرة شعاعها $r=\\sqrt{4-\\dfrac13}=\\sqrt{\\dfrac{11}3}$.', fr: '$d(\\Omega,(ABC))=\\dfrac{|1+1+1-2|}{\\sqrt3}=\\dfrac1{\\sqrt3}<2$ : l’intersection est un cercle de rayon $r=\\sqrt{4-\\dfrac13}=\\sqrt{\\dfrac{11}3}$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2: حساب الاحتمالات', fr: 'Exercice 2 : probabilités' },
        points: 10,
        statement: {
          ar: 'يحتوي صندوق على $4$ كرات بيضاء و $2$ سوداء. نسحب في آن واحد كرتين.\n\n1) احسب احتمال الحدث $A$: «الكرتان بيضاوان».\n\n2) ليكن $X$ عدد الكرات السوداء المسحوبة. حدد قانون $X$ واحسب $E(X)$.\n\n3) نعيد التجربة $3$ مرات (مع إرجاع الكرتين). ما احتمال تحقق $A$ مرتين بالضبط؟',
          fr: 'Une urne contient $4$ boules blanches et $2$ noires. On tire simultanément $2$ boules.\n\n1) Calculer la probabilité de $A$ : « les deux boules sont blanches ».\n\n2) Soit $X$ le nombre de boules noires tirées. Donner la loi de $X$ et calculer $E(X)$.\n\n3) On répète l’expérience $3$ fois (en remettant les boules). Quelle est la probabilité que $A$ se réalise exactement $2$ fois ?',
        },
        correction: [
          { ar: '$\\mathrm{card}\\,\\Omega=C_6^2=15$ و $p(A)=\\dfrac{C_4^2}{15}=\\dfrac6{15}=\\dfrac25$.', fr: '$\\mathrm{card}\\,\\Omega=C_6^2=15$ et $p(A)=\\dfrac{C_4^2}{15}=\\dfrac6{15}=\\dfrac25$.' },
          { ar: '$p(X=0)=\\dfrac6{15}$ ؛ $p(X=1)=\\dfrac{4\\times2}{15}=\\dfrac8{15}$ ؛ $p(X=2)=\\dfrac1{15}$. $E(X)=\\dfrac{8+2}{15}=\\dfrac23$.', fr: '$p(X=0)=\\dfrac6{15}$ ; $p(X=1)=\\dfrac{4\\times2}{15}=\\dfrac8{15}$ ; $p(X=2)=\\dfrac1{15}$. $E(X)=\\dfrac{8+2}{15}=\\dfrac23$.' },
          { ar: '$C_3^2\\left(\\dfrac25\\right)^2\\dfrac35=3\\times\\dfrac4{25}\\times\\dfrac35=\\dfrac{36}{125}$.', fr: '$C_3^2\\left(\\dfrac25\\right)^2\\dfrac35=3\\times\\dfrac4{25}\\times\\dfrac35=\\dfrac{36}{125}$.' },
        ],
      },
    ],
  },
];
