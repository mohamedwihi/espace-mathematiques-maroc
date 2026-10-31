import type { Exam } from '@/types';
import { devoirs3ac } from './devoirs/3ac';
import { devoirsTc } from './devoirs/tc';
import { devoirs1bac } from './devoirs/1bac';
import { devoirs2bac } from './devoirs/2bac';
import { exams3ac } from './officialExams/3ac';
import { bacExams } from './officialExams/bac.generated';
import { withCorrections } from './officialExams/bacCorrections';
import { devoirs2bacPdf } from './officialExams/devoirs2bacPdf';

/**
 * Bibliothèque des devoirs et examens.
 *
 * ⚠️ RÈGLES D'AJOUT
 * - Les examens officiels (régionaux, nationaux…) ne doivent être ajoutés qu'avec leur PDF réel,
 *   placé dans `public/exams/`, et une source vérifiable décrite dans `source`.
 * - `official: true` uniquement après vérification de la provenance du document.
 * - Ne jamais mettre de lien fictif dans `pdfUrl` / `correctionPdfUrl`.
 *
 * Exemple d'entrée officielle (à adapter quand un vrai fichier est disponible) :
 * {
 *   id: 'bac-2025-pc-normal',
 *   levelId: '2bac', streams: ['pc', 'svt'], kind: 'national', year: 2025, session: 'normal',
 *   title: { ar: '…', fr: '…' },
 *   source: { ar: '…', fr: '…' },          // origine exacte du document
 *   official: true,
 *   pdfUrl: '/exams/bac-2025-pc-normal.pdf',
 *   correctionPdfUrl: '/exams/bac-2025-pc-normal-corrige.pdf',
 * }
 *
 * Les sujets ci-dessous sont des sujets d'ENTRAÎNEMENT rédigés par la plateforme (non officiels).
 */
const platformSource = {
  ar: 'موضوع تدريبي من إعداد فريق المنصة، غير صادر عن أي جهة رسمية. التصحيح مقترح من المنصة.',
  fr: "Sujet d'entraînement rédigé par l'équipe de la plateforme, non issu d'une instance officielle. Corrigé proposé par la plateforme.",
};

export const exams: Exam[] = [
  // Devoirs surveillés modèles (3 par semestre et par niveau)
  ...devoirs3ac,
  ...devoirsTc,
  ...devoirs1bac,
  ...devoirs2bac,
  ...devoirs2bacPdf,

  // Examens régionaux / locaux de 3AC et examens nationaux du bac
  ...exams3ac,
  ...withCorrections(bacExams),

  {
    id: 'practice-3ac-s2-systems',
    levelId: '3ac',
    kind: 'practice',
    year: 2026,
    semester: 2,
    title: { ar: 'فرض تدريبي: النظمات والمعادلات', fr: "Devoir d'entraînement : systèmes et équations" },
    durationMinutes: 60,
    source: platformSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1', fr: 'Exercice 1' },
        points: 6,
        statement: {
          ar: 'حل المعادلتين: (أ) $3x-7=2x+5$ ؛ (ب) $(2x-1)(x+4)=0$.',
          fr: 'Résoudre : (a) $3x-7=2x+5$ ; (b) $(2x-1)(x+4)=0$.',
        },
        correction: [
          { ar: '(أ) $3x-2x=5+7$ إذن $x=12$.', fr: '(a) $3x-2x=5+7$ donc $x=12$.' },
          { ar: '(ب) جداء منعدم: $2x-1=0$ أو $x+4=0$، أي $x=\\frac12$ أو $x=-4$.', fr: '(b) Produit nul : $2x-1=0$ ou $x+4=0$, soit $x=\\frac12$ ou $x=-4$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2', fr: 'Exercice 2' },
        points: 8,
        statement: {
          ar: 'حل النظمة $\\begin{cases} 2x+3y=13 \\\\ 5x-y=7 \\end{cases}$ بطريقتين مختلفتين.',
          fr: 'Résoudre $\\begin{cases} 2x+3y=13 \\\\ 5x-y=7 \\end{cases}$ par deux méthodes différentes.',
        },
        correction: [
          { ar: 'التعويض: من الثانية $y=5x-7$، ثم $2x+3(5x-7)=13$ أي $17x=34$ و $x=2$، ثم $y=3$.', fr: 'Substitution : de la seconde $y=5x-7$, puis $2x+3(5x-7)=13$, soit $17x=34$, $x=2$, puis $y=3$.' },
          { ar: 'التأليفة: نضرب الثانية في $3$: $15x-3y=21$ ونجمع مع الأولى: $17x=34$ إذن $x=2$ و $y=3$.', fr: 'Combinaison : on multiplie la seconde par $3$ : $15x-3y=21$, on ajoute la première : $17x=34$, donc $x=2$ et $y=3$.' },
          { ar: 'الحل: $(2;3)$.', fr: 'Solution : $(2;3)$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3', fr: 'Exercice 3' },
        points: 6,
        statement: {
          ar: 'ثمن 2 كيلوغرام من البرتقال و 3 كيلوغرامات من التفاح هو 39 درهماً، وثمن 4 كيلوغرامات من البرتقال و 1 كيلوغرام من التفاح هو 33 درهماً. حدد ثمن الكيلوغرام من كل نوع.',
          fr: "2 kg d'oranges et 3 kg de pommes coûtent 39 DH ; 4 kg d'oranges et 1 kg de pommes coûtent 33 DH. Déterminer le prix du kilogramme de chaque fruit.",
        },
        correction: [
          { ar: 'نضع $x$ ثمن كلغ البرتقال و $y$ ثمن كلغ التفاح: $\\begin{cases} 2x+3y=39 \\\\ 4x+y=33 \\end{cases}$', fr: 'On note $x$ le prix du kg d’oranges et $y$ celui des pommes : $\\begin{cases} 2x+3y=39 \\\\ 4x+y=33 \\end{cases}$' },
          { ar: 'من الثانية $y=33-4x$، فنحصل على $2x+99-12x=39$ أي $x=6$، ثم $y=9$.', fr: 'De la seconde $y=33-4x$, d’où $2x+99-12x=39$, soit $x=6$, puis $y=9$.' },
          { ar: 'كلغ البرتقال بـ 6 دراهم وكلغ التفاح بـ 9 دراهم.', fr: 'Le kg d’oranges coûte 6 DH et le kg de pommes 9 DH.' },
        ],
      },
    ],
  },
  {
    id: 'practice-tc-s1-deg2',
    levelId: 'tc',
    streams: ['tc-sci', 'tc-tech'],
    kind: 'practice',
    year: 2026,
    semester: 1,
    title: { ar: 'فرض تدريبي: الدرجة الثانية', fr: "Devoir d'entraînement : second degré" },
    durationMinutes: 60,
    source: platformSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1', fr: 'Exercice 1' },
        points: 8,
        statement: {
          ar: 'حل في $\\mathbb{R}$ المعادلات: (أ) $x^2-6x+5=0$ ؛ (ب) $4x^2-4x+1=0$ ؛ (ج) $x^2+x+3=0$.',
          fr: 'Résoudre dans $\\mathbb{R}$ : (a) $x^2-6x+5=0$ ; (b) $4x^2-4x+1=0$ ; (c) $x^2+x+3=0$.',
        },
        correction: [
          { ar: '(أ) $\\Delta=36-20=16$، $x_1=1$ و $x_2=5$.', fr: '(a) $\\Delta=36-20=16$, $x_1=1$ et $x_2=5$.' },
          { ar: '(ب) $\\Delta=16-16=0$، حل مزدوج $x_0=\\frac{4}{8}=\\frac12$.', fr: '(b) $\\Delta=16-16=0$, solution double $x_0=\\frac{4}{8}=\\frac12$.' },
          { ar: '(ج) $\\Delta=1-12=-11<0$، $S=\\varnothing$.', fr: '(c) $\\Delta=1-12=-11<0$, $S=\\varnothing$.' },
        ],
      },
      {
        title: { ar: 'التمرين 2', fr: 'Exercice 2' },
        points: 6,
        statement: {
          ar: 'لتكن $P(x)=2x^2+x-3$. (1) حلل $P(x)$. (2) حل المتراجحة $P(x)<0$.',
          fr: 'Soit $P(x)=2x^2+x-3$. (1) Factoriser $P(x)$. (2) Résoudre $P(x)<0$.',
        },
        correction: [
          { ar: '$\\Delta=1+24=25$، الجذران $x_1=\\frac{-1-5}{4}=-\\frac32$ و $x_2=\\frac{-1+5}{4}=1$.', fr: '$\\Delta=1+24=25$, racines $x_1=\\frac{-1-5}{4}=-\\frac32$ et $x_2=\\frac{-1+5}{4}=1$.' },
          { ar: '$P(x)=2\\left(x+\\frac32\\right)(x-1)=(2x+3)(x-1)$.', fr: '$P(x)=2\\left(x+\\frac32\\right)(x-1)=(2x+3)(x-1)$.' },
          { ar: '$a=2>0$: $P(x)<0$ بين الجذرين، إذن $S=\\left]-\\frac32;1\\right[$.', fr: '$a=2>0$ : $P(x)<0$ entre les racines, donc $S=\\left]-\\frac32;1\\right[$.' },
        ],
      },
      {
        title: { ar: 'التمرين 3', fr: 'Exercice 3' },
        points: 6,
        statement: {
          ar: 'مستطيل محيطه $34\\,\\text{cm}$ ومساحته $60\\,\\text{cm}^2$. حدد بعديه.',
          fr: 'Un rectangle a un périmètre de $34\\,\\text{cm}$ et une aire de $60\\,\\text{cm}^2$. Déterminer ses dimensions.',
        },
        correction: [
          { ar: 'نضع $x$ الطول، إذن العرض $17-x$ و $x(17-x)=60$.', fr: 'Soit $x$ la longueur ; la largeur est $17-x$ et $x(17-x)=60$.' },
          { ar: '$x^2-17x+60=0$، $\\Delta=289-240=49$، $x=\\frac{17\\pm7}{2}$ أي $12$ أو $5$.', fr: '$x^2-17x+60=0$, $\\Delta=289-240=49$, $x=\\frac{17\\pm7}{2}$, soit $12$ ou $5$.' },
          { ar: 'بعدا المستطيل: $12\\,\\text{cm}$ و $5\\,\\text{cm}$.', fr: 'Dimensions : $12\\,\\text{cm}$ et $5\\,\\text{cm}$.' },
        ],
      },
    ],
  },
  {
    id: 'practice-1bac-s2-derivation',
    levelId: '1bac',
    streams: ['sm', 'sx', 'ste'],
    kind: 'practice',
    year: 2026,
    semester: 2,
    title: { ar: 'فرض تدريبي: الاشتقاق ودراسة دالة', fr: "Devoir d'entraînement : dérivation et étude de fonction" },
    durationMinutes: 90,
    source: platformSource,
    official: false,
    parts: [
      {
        title: { ar: 'التمرين 1', fr: 'Exercice 1' },
        points: 6,
        statement: {
          ar: 'احسب مشتقة كل دالة: $f(x)=x^3-4x^2+5$ ، $g(x)=(2x-1)\\sqrt x$ على $]0;+\\infty[$ ، $h(x)=\\dfrac{3}{x^2+1}$.',
          fr: 'Calculer la dérivée de : $f(x)=x^3-4x^2+5$, $g(x)=(2x-1)\\sqrt x$ sur $]0;+\\infty[$, $h(x)=\\dfrac{3}{x^2+1}$.',
        },
        correction: [
          { ar: "$f'(x)=3x^2-8x$.", fr: "$f'(x)=3x^2-8x$." },
          { ar: "$g'(x)=2\\sqrt x+(2x-1)\\dfrac{1}{2\\sqrt x}=\\dfrac{4x+2x-1}{2\\sqrt x}=\\dfrac{6x-1}{2\\sqrt x}$.", fr: "$g'(x)=2\\sqrt x+(2x-1)\\dfrac{1}{2\\sqrt x}=\\dfrac{4x+2x-1}{2\\sqrt x}=\\dfrac{6x-1}{2\\sqrt x}$." },
          { ar: "$h'(x)=\\dfrac{-3\\times2x}{(x^2+1)^2}=\\dfrac{-6x}{(x^2+1)^2}$.", fr: "$h'(x)=\\dfrac{-3\\times2x}{(x^2+1)^2}=\\dfrac{-6x}{(x^2+1)^2}$." },
        ],
      },
      {
        title: { ar: 'التمرين 2', fr: 'Exercice 2' },
        points: 14,
        statement: {
          ar: 'لتكن $f(x)=x^3-3x^2+2$. (1) احسب $f\'(x)$ وادرس إشارتها. (2) ضع جدول تغيرات $f$. (3) حدد معادلة المماس لمنحنى $f$ في النقطة ذات الأفصول $1$.',
          fr: "Soit $f(x)=x^3-3x^2+2$. (1) Calculer $f'(x)$ et étudier son signe. (2) Dresser le tableau de variations de $f$. (3) Déterminer l'équation de la tangente au point d'abscisse $1$.",
        },
        correction: [
          { ar: "(1) $f'(x)=3x^2-6x=3x(x-2)$: موجبة على $]-\\infty;0]$ وعلى $[2;+\\infty[$، وسالبة على $[0;2]$.", fr: "(1) $f'(x)=3x^2-6x=3x(x-2)$ : positive sur $]-\\infty;0]$ et sur $[2;+\\infty[$, négative sur $[0;2]$." },
          { ar: '(2) $f$ تزايدية على $]-\\infty;0]$، تناقصية على $[0;2]$، تزايدية على $[2;+\\infty[$، مع $f(0)=2$ و $f(2)=-2$.', fr: '(2) $f$ croissante sur $]-\\infty;0]$, décroissante sur $[0;2]$, croissante sur $[2;+\\infty[$, avec $f(0)=2$ et $f(2)=-2$.' },
          { ar: "(3) $f(1)=0$ و $f'(1)=-3$، إذن المماس: $y=-3(x-1)+0=-3x+3$.", fr: "(3) $f(1)=0$ et $f'(1)=-3$, d'où la tangente : $y=-3(x-1)+0=-3x+3$." },
        ],
      },
    ],
  },
  {
    id: 'practice-2bac-s1-ln',
    levelId: '2bac',
    streams: ['pc', 'svt', 'sa', 'ste'],
    kind: 'practice',
    year: 2026,
    semester: 1,
    title: { ar: 'موضوع تدريبي: دراسة دالة لوغاريتمية', fr: "Sujet d'entraînement : étude d'une fonction logarithme" },
    durationMinutes: 90,
    source: platformSource,
    official: false,
    parts: [
      {
        title: { ar: 'الجزء الأول', fr: 'Partie I' },
        points: 8,
        statement: {
          ar: 'لتكن $f$ الدالة المعرفة على $]0;+\\infty[$ بـ $f(x)=x-1-\\ln x$. (1) احسب $\\lim_{x\\to0^+}f(x)$ و $\\lim_{x\\to+\\infty}f(x)$. (2) احسب $f\'(x)$ وضع جدول التغيرات.',
          fr: "Soit $f$ définie sur $]0;+\\infty[$ par $f(x)=x-1-\\ln x$. (1) Calculer $\\lim_{x\\to0^+}f(x)$ et $\\lim_{x\\to+\\infty}f(x)$. (2) Calculer $f'(x)$ et dresser le tableau de variations.",
        },
        correction: [
          { ar: '(1) $\\lim_{x\\to0^+}\\ln x=-\\infty$ إذن $\\lim_{x\\to0^+}f(x)=+\\infty$.', fr: '(1) $\\lim_{x\\to0^+}\\ln x=-\\infty$ donc $\\lim_{x\\to0^+}f(x)=+\\infty$.' },
          { ar: '$f(x)=x\\left(1-\\frac1x-\\frac{\\ln x}{x}\\right)$ و $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$ إذن $\\lim_{x\\to+\\infty}f(x)=+\\infty$.', fr: '$f(x)=x\\left(1-\\frac1x-\\frac{\\ln x}{x}\\right)$ et $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$ donc $\\lim_{x\\to+\\infty}f(x)=+\\infty$.' },
          { ar: "(2) $f'(x)=1-\\frac1x=\\frac{x-1}{x}$: سالبة على $]0;1]$ وموجبة على $[1;+\\infty[$.", fr: "(2) $f'(x)=1-\\frac1x=\\frac{x-1}{x}$ : négative sur $]0;1]$, positive sur $[1;+\\infty[$." },
          { ar: '$f$ تناقصية على $]0;1]$ وتزايدية على $[1;+\\infty[$، وقيمتها الدنيا $f(1)=0$.', fr: '$f$ est décroissante sur $]0;1]$ et croissante sur $[1;+\\infty[$, de minimum $f(1)=0$.' },
        ],
      },
      {
        title: { ar: 'الجزء الثاني', fr: 'Partie II' },
        points: 6,
        statement: {
          ar: 'استنتج أنه لكل $x>0$: $\\ln x\\le x-1$.',
          fr: 'En déduire que pour tout $x>0$ : $\\ln x\\le x-1$.',
        },
        correction: [
          { ar: 'القيمة الدنيا لـ $f$ على $]0;+\\infty[$ هي $0$، إذن $f(x)\\ge0$ لكل $x>0$.', fr: 'Le minimum de $f$ sur $]0;+\\infty[$ est $0$, donc $f(x)\\ge0$ pour tout $x>0$.' },
          { ar: 'أي $x-1-\\ln x\\ge0$، ومنه $\\ln x\\le x-1$.', fr: 'Soit $x-1-\\ln x\\ge0$, d’où $\\ln x\\le x-1$.' },
        ],
      },
      {
        title: { ar: 'الجزء الثالث', fr: 'Partie III' },
        points: 6,
        statement: {
          ar: 'حل في $\\mathbb{R}$ المعادلة $\\ln(x-1)+\\ln(x+1)=\\ln3$.',
          fr: 'Résoudre dans $\\mathbb{R}$ l’équation $\\ln(x-1)+\\ln(x+1)=\\ln3$.',
        },
        correction: [
          { ar: 'الشرط: $x-1>0$ و $x+1>0$ أي $x>1$.', fr: 'Condition : $x-1>0$ et $x+1>0$, soit $x>1$.' },
          { ar: '$\\ln\\big((x-1)(x+1)\\big)=\\ln3\\iff x^2-1=3\\iff x^2=4$.', fr: '$\\ln\\big((x-1)(x+1)\\big)=\\ln3\\iff x^2-1=3\\iff x^2=4$.' },
          { ar: '$x=2$ أو $x=-2$، و $-2$ مرفوض لأن $x>1$. إذن $S=\\{2\\}$.', fr: '$x=2$ ou $x=-2$ ; $-2$ est rejeté car $x>1$. Donc $S=\\{2\\}$.' },
        ],
      },
    ],
  },
];
