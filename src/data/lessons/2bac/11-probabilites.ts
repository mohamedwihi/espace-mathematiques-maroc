import type { LessonModule } from '@/types';

const lessonId = '2bac-probabilites';

export const probabilites: LessonModule = {
  lesson: {
    id: lessonId,
    levelId: '2bac',
    unitId: 'proba',
    streams: ['sm', 'pc', 'svt', 'sa', 'ste'],
    title: { ar: 'حساب الاحتمالات', fr: 'Calcul des probabilités' },
    summary: {
      ar: 'التعداد (الترتيبات والتأليفات)، فضاء الاحتمال، الاحتمال الشرطي واستقلالية حدثين، الاختبارات المتكررة، والمتغير العشوائي وقانونه وأمله الرياضي.',
      fr: 'Dénombrement (arrangements et combinaisons), espace probabilisé, probabilité conditionnelle et indépendance, épreuves répétées, variable aléatoire, loi et espérance.',
    },
    objectives: [
      { ar: 'استعمال الترتيبات والتأليفات.', fr: 'Utiliser arrangements et combinaisons.' },
      { ar: 'حساب احتمال شرطي.', fr: 'Calculer une probabilité conditionnelle.' },
      { ar: 'تحديد قانون متغير عشوائي وأمله الرياضي.', fr: 'Déterminer la loi d’une variable aléatoire et son espérance.' },
    ],
    durationMinutes: 55,
    reviewed: false,
    keywords: ['probabilité', 'combinaison', 'arrangement', 'conditionnelle', 'binomiale', 'espérance', 'احتمال', 'تأليفة', 'ترتيبة', 'شرطي', 'أمل رياضي'],
    sections: [
      {
        id: 'denombrement',
        title: { ar: 'التعداد', fr: 'Dénombrement' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• عدد الترتيبات بدون تكرار لـ $p$ عنصراً من $n$: $A_n^p=\\dfrac{n!}{(n-p)!}$.\n\n• عدد التبديلات: $n!$.\n\n• عدد التأليفات لـ $p$ عنصراً من $n$: $C_n^p=\\dfrac{n!}{p!(n-p)!}$.\n\n• عدد الترتيبات بتكرار: $n^p$.',
              fr: '• Arrangements sans répétition de $p$ éléments parmi $n$ : $A_n^p=\\dfrac{n!}{(n-p)!}$.\n\n• Permutations : $n!$.\n\n• Combinaisons de $p$ éléments parmi $n$ : $C_n^p=\\dfrac{n!}{p!(n-p)!}$.\n\n• Arrangements avec répétition : $n^p$.',
            },
          },
          {
            kind: 'example',
            statement: { ar: 'نسحب في آن واحد $3$ كرات من صندوق يحتوي على $5$ كرات حمراء و $3$ خضراء. ما احتمال سحب كرتين حمراوين بالضبط؟', fr: 'On tire simultanément $3$ boules d’une urne contenant $5$ rouges et $3$ vertes. Probabilité d’obtenir exactement $2$ rouges ?' },
            steps: [
              { ar: '$\\mathrm{card}\\,\\Omega=C_8^3=56$.', fr: '$\\mathrm{card}\\,\\Omega=C_8^3=56$.' },
              { ar: '$p=\\dfrac{C_5^2\\times C_3^1}{56}=\\dfrac{30}{56}=\\dfrac{15}{28}$.', fr: '$p=\\dfrac{C_5^2\\times C_3^1}{56}=\\dfrac{30}{56}=\\dfrac{15}{28}$.' },
            ],
          },
        ],
      },
      {
        id: 'conditionnelle',
        title: { ar: 'الاحتمال الشرطي', fr: 'Probabilité conditionnelle' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• $p_B(A)=\\dfrac{p(A\\cap B)}{p(B)}$ و $p(A\\cap B)=p(B)\\,p_B(A)$.\n\n• **صيغة الاحتمالات الكلية**: إذا كانت $B_1,\\dots,B_n$ تجزيئاً لـ $\\Omega$: $p(A)=\\sum p(B_i)\\,p_{B_i}(A)$.\n\n• $A$ و $B$ **مستقلان** إذا كان $p(A\\cap B)=p(A)\\,p(B)$.',
              fr: '• $p_B(A)=\\dfrac{p(A\\cap B)}{p(B)}$ et $p(A\\cap B)=p(B)\\,p_B(A)$.\n\n• **Probabilités totales** : si $B_1,\\dots,B_n$ forment une partition de $\\Omega$, $p(A)=\\sum p(B_i)\\,p_{B_i}(A)$.\n\n• $A$ et $B$ sont **indépendants** si $p(A\\cap B)=p(A)\\,p(B)$.',
            },
          },
        ],
      },
      {
        id: 'variable',
        title: { ar: 'المتغير العشوائي', fr: 'Variable aléatoire' },
        blocks: [
          {
            kind: 'property',
            content: {
              ar: '• **الأمل الرياضي**: $E(X)=\\sum x_i\\,p(X=x_i)$؛ **المغايرة**: $V(X)=E(X^2)-E(X)^2$؛ **الانحراف الطرازي**: $\\sigma(X)=\\sqrt{V(X)}$.\n\n• **القانون الحداني** $\\mathcal B(n;p)$: عند تكرار اختبار $n$ مرة باستقلالية، احتمال نجاحه $p$: $p(X=k)=C_n^kp^k(1-p)^{n-k}$، و $E(X)=np$ و $V(X)=np(1-p)$.',
              fr: '• **Espérance** : $E(X)=\\sum x_i\\,p(X=x_i)$ ; **variance** : $V(X)=E(X^2)-E(X)^2$ ; **écart-type** : $\\sigma(X)=\\sqrt{V(X)}$.\n\n• **Loi binomiale** $\\mathcal B(n;p)$ : épreuve répétée $n$ fois de façon indépendante, de probabilité de succès $p$ : $p(X=k)=C_n^kp^k(1-p)^{n-k}$, $E(X)=np$, $V(X)=np(1-p)$.',
            },
          },
          {
            kind: 'graph',
            functions: [],
            points: [0, 1, 2, 3, 4].map((k) => ({ x: k, y: [1, 4, 6, 4, 1][k] / 16, label: `${[1, 4, 6, 4, 1][k]}/16` })),
            lines: [0, 1, 2, 3, 4].map((k) => ({ from: [k, 0] as [number, number], to: [k, [1, 4, 6, 4, 1][k] / 16] as [number, number] })),
            x: [-0.5, 4.5],
            y: [-0.05, 0.5],
            caption: { ar: 'قانون $\\mathcal B\\left(4;\\dfrac12\\right)$: عدد الوجوه عند رمي قطعة نقدية $4$ مرات.', fr: 'Loi $\\mathcal B\\left(4;\\dfrac12\\right)$ : nombre de « pile » en $4$ lancers d’une pièce.' },
          },
        ],
      },
    ],
    recap: [
      { ar: '$C_n^p=\\dfrac{n!}{p!(n-p)!}$.', fr: '$C_n^p=\\dfrac{n!}{p!(n-p)!}$.' },
      { ar: 'الحداني: $p(X=k)=C_n^kp^k(1-p)^{n-k}$ و $E(X)=np$.', fr: 'Binomiale : $p(X=k)=C_n^kp^k(1-p)^{n-k}$, $E(X)=np$.' },
    ],
  },
  exercises: [
    {
      id: '2bac-pro-01',
      lessonId,
      levelId: '2bac',
      difficulty: 1,
      topic: 'statistics',
      title: { ar: 'تأليفات', fr: 'Combinaisons' },
      statement: { ar: 'احسب $C_6^2$.', fr: 'Calculer $C_6^2$.' },
      question: { type: 'numeric', answer: 15 },
      hints: [{ ar: '$\\dfrac{6\\times5}{2}$.', fr: '$\\dfrac{6\\times5}{2}$.' }],
      solution: [{ ar: '$C_6^2=15$.', fr: '$C_6^2=15$.' }],
    },
    {
      id: '2bac-pro-02',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'statistics',
      title: { ar: 'احتمال شرطي', fr: 'Probabilité conditionnelle' },
      statement: { ar: '$p(B)=0{,}5$ و $p(A\\cap B)=0{,}2$. احسب $p_B(A)$.', fr: '$p(B)=0{,}5$ et $p(A\\cap B)=0{,}2$. Calculer $p_B(A)$.' },
      question: { type: 'numeric', answer: 0.4, tolerance: 1e-6 },
      hints: [{ ar: '$\\dfrac{0{,}2}{0{,}5}$.', fr: '$\\dfrac{0{,}2}{0{,}5}$.' }],
      solution: [{ ar: '$p_B(A)=0{,}4$.', fr: '$p_B(A)=0{,}4$.' }],
    },
    {
      id: '2bac-pro-03',
      lessonId,
      levelId: '2bac',
      difficulty: 2,
      topic: 'statistics',
      title: { ar: 'قانون حداني', fr: 'Loi binomiale' },
      statement: { ar: '$X$ يتبع $\\mathcal B(10;0{,}3)$. احسب $E(X)$.', fr: '$X$ suit $\\mathcal B(10;0{,}3)$. Calculer $E(X)$.' },
      question: { type: 'numeric', answer: 3, tolerance: 1e-6 },
      hints: [{ ar: '$E(X)=np$.', fr: '$E(X)=np$.' }],
      solution: [{ ar: '$E(X)=10\\times0{,}3=3$.', fr: '$E(X)=10\\times0{,}3=3$.' }],
    },
    {
      id: '2bac-pro-04',
      lessonId,
      levelId: '2bac',
      difficulty: 3,
      topic: 'statistics',
      title: { ar: 'اختبارات متكررة', fr: 'Épreuves répétées' },
      statement: { ar: 'نرمي نرداً متوازناً $3$ مرات. ما احتمال الحصول على الرقم $6$ مرة واحدة بالضبط؟', fr: 'On lance $3$ fois un dé équilibré. Quelle est la probabilité d’obtenir exactement une fois le $6$ ?' },
      question: { type: 'numeric', answer: 75 / 216, tolerance: 1e-4 },
      hints: [{ ar: '$C_3^1\\times\\dfrac16\\times\\left(\\dfrac56\\right)^2$.', fr: '$C_3^1\\times\\dfrac16\\times\\left(\\dfrac56\\right)^2$.' }],
      solution: [{ ar: '$3\\times\\dfrac16\\times\\dfrac{25}{36}=\\dfrac{75}{216}=\\dfrac{25}{72}\\approx0{,}347$.', fr: '$3\\times\\dfrac16\\times\\dfrac{25}{36}=\\dfrac{75}{216}=\\dfrac{25}{72}\\approx0{,}347$.' }],
    },
  ],
};
