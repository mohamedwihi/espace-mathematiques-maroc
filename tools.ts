import type { Localized } from '@/types';

export type ToolId =
  | 'scientific'
  | 'fractions'
  | 'simplify'
  | 'equations'
  | 'systems'
  | 'factor'
  | 'powers'
  | 'gcd'
  | 'percent'
  | 'table'
  | 'grapher'
  | 'derivative'
  | 'integral'
  | 'geometry'
  | 'stats';

export type ToolCategory = 'calc' | 'algebra' | 'analysis' | 'geometry' | 'stats';

export interface ToolMeta {
  id: ToolId;
  category: ToolCategory;
  keywords: string[];
  /** Limites mathématiques affichées à l'élève. */
  limits: Localized;
  /** Exemples de saisie cliquables. */
  examples?: string[];
}

export const tools: ToolMeta[] = [
  {
    id: 'scientific',
    category: 'calc',
    keywords: ['calculatrice', 'sin', 'cos', 'log', 'حاسبة', 'scientifique'],
    examples: ['2^10 - 3*7', 'sqrt(2)*sqrt(8)', 'sin(30)+cos(60)', 'ln(e^3)', 'log(1000)', '5!/(2!*3!)'],
    limits: {
      ar: 'الحسابات تتم بالأعداد العشرية بدقة حوالي 15 رقماً، وقد تظهر أخطاء تقريب صغيرة. لا تدعم الأداة الأعداد العقدية.',
      fr: 'Les calculs sont effectués en virgule flottante (environ 15 chiffres significatifs) ; de petites erreurs d’arrondi peuvent apparaître. Les nombres complexes ne sont pas pris en charge.',
    },
  },
  {
    id: 'fractions',
    category: 'calc',
    keywords: ['fraction', 'كسر', 'simplifier', 'اختزال', 'dénominateur'],
    limits: {
      ar: 'البسط والمقام أعداد صحيحة (12 رقماً على الأكثر). النتيجة مضبوطة ومختزلة.',
      fr: 'Numérateurs et dénominateurs entiers (12 chiffres maximum). Le résultat est exact et irréductible.',
    },
  },
  {
    id: 'simplify',
    category: 'algebra',
    keywords: ['simplifier', 'développer', 'réduire', 'تبسيط', 'نشر', 'expression'],
    examples: ['(x+2)^2 - (x-1)(x+1)', '2x + 3x - 4 + x^2', '(a+b)^2 - 2a*b', '(x^2-1)/(x-1)'],
    limits: {
      ar: 'التبسيط آلي وقد لا يعطي دائماً الشكل المنتظر في الدرس. المتغيرات المسموح بها: x و y و a و b. لا تُعرض خطوات مفصلة للتبسيط العام، ونذكّر بأن تبسيط كسر جبري مثل $\\frac{x^2-1}{x-1}$ يفترض $x\\neq1$.',
      fr: 'La simplification est automatique et ne donne pas toujours la forme attendue en cours. Variables autorisées : x, y, a et b. Pas d’étapes détaillées pour la simplification générale ; simplifier une fraction rationnelle comme $\\frac{x^2-1}{x-1}$ suppose $x\\neq1$.',
    },
  },
  {
    id: 'equations',
    category: 'algebra',
    keywords: ['équation', 'discriminant', 'delta', 'معادلة', 'مميز', 'second degré'],
    examples: ['2x + 3 = 7', 'x^2 - 5x + 6 = 0', '2x^2 - 3x - 2 = 0', 'x^2 + x + 1 = 0', '3(x-1) = x + 5', 'x^2 - 2 = 0'],
    limits: {
      ar: 'تحل الأداة المعادلات الحدودية من الدرجة الأولى والثانية بمعاملات جذرية فقط (المجهول x). المعادلات التي تحتوي على دوال مثل ln أو sin غير مدعومة.',
      fr: 'L’outil résout uniquement les équations polynomiales du premier et du second degré à coefficients rationnels (inconnue x). Les équations contenant ln, sin, etc. ne sont pas prises en charge.',
    },
  },
  {
    id: 'systems',
    category: 'algebra',
    keywords: ['système', 'Cramer', 'Gauss', 'نظمة', 'déterminant'],
    limits: {
      ar: 'أنظمة خطية 2×2 و3×3 بمعاملات جذرية (أعداد صحيحة أو عشرية أو كسور مثل 3/4). الحساب مضبوط.',
      fr: 'Systèmes linéaires 2×2 et 3×3 à coefficients rationnels (entiers, décimaux ou fractions comme 3/4). Calcul exact.',
    },
  },
  {
    id: 'factor',
    category: 'algebra',
    keywords: ['factoriser', 'racine', 'polynôme', 'Horner', 'تحليل', 'حدودية', 'جذر'],
    examples: ['x^3 - 6x^2 + 11x - 6', '2x^2 - 3x - 2', 'x^4 - 1', 'x^3 - 2x', 'x^2 + x + 1'],
    limits: {
      ar: 'تبحث الأداة عن الجذور الجذرية فقط (حدودية من الدرجة 12 على الأكثر بمعاملات جذرية)، ثم تعالج العامل المتبقي من الدرجة الثانية بالمميز. قد يبقى عامل من الدرجة 3 أو أكثر دون تحليل.',
      fr: 'L’outil cherche uniquement les racines rationnelles (polynôme de degré ≤ 12 à coefficients rationnels), puis traite un facteur restant du second degré par le discriminant. Un facteur de degré ≥ 3 peut rester non factorisé.',
    },
  },
  {
    id: 'powers',
    category: 'calc',
    keywords: ['puissance', 'racine', 'logarithme', 'exponentielle', 'قوة', 'جذر', 'لوغاريتم'],
    limits: {
      ar: 'الحساب في مجموعة الأعداد الحقيقية فقط. تبسيط الجذور متاح للأعداد الصحيحة الأصغر من مليار.',
      fr: 'Calcul dans les réels uniquement. La simplification des radicaux est proposée pour les entiers inférieurs à un milliard.',
    },
  },
  {
    id: 'gcd',
    category: 'calc',
    keywords: ['PGCD', 'PPCM', 'Euclide', 'premiers', 'قاسم', 'مضاعف', 'أولية'],
    limits: {
      ar: 'من 2 إلى 8 أعداد صحيحة طبيعية غير منعدمة، 12 رقماً على الأكثر لكل عدد.',
      fr: 'De 2 à 8 entiers naturels non nuls, 12 chiffres maximum chacun.',
    },
  },
  {
    id: 'percent',
    category: 'calc',
    keywords: ['pourcentage', 'proportionnalité', 'évolution', 'نسبة مئوية', 'تناسب'],
    limits: {
      ar: 'النتائج عشرية مقربة إلى 10 أرقام معنوية.',
      fr: 'Résultats décimaux arrondis à 10 chiffres significatifs.',
    },
  },
  {
    id: 'table',
    category: 'analysis',
    keywords: ['tableau de valeurs', 'fonction', 'جدول قيم', 'دالة'],
    examples: ['x^2 - 2x - 3', '1/x', 'sqrt(x)', 'ln(x)', '2^x'],
    limits: {
      ar: '201 سطر على الأكثر. تظهر «غير معرفة» إذا كانت x خارج مجموعة تعريف الدالة.',
      fr: '201 lignes au maximum. « non définie » s’affiche lorsque x est hors de l’ensemble de définition.',
    },
  },
  {
    id: 'grapher',
    category: 'analysis',
    keywords: ['courbe', 'graphique', 'tracer', 'منحنى', 'رسم', 'تمثيل مبياني'],
    examples: ['x^2', 'sin(x)', 'ln(x)', '1/x', 'exp(x)', 'abs(x-1)'],
    limits: {
      ar: 'الرسم يعتمد على حساب قيم الدالة في نقط كثيرة؛ قد لا تظهر بدقة الانقطاعات أو المقاربات العمودية. حتى أربع دوال في نفس المعلم.',
      fr: 'Le tracé repose sur l’échantillonnage de la fonction ; discontinuités et asymptotes verticales peuvent être imparfaitement rendues. Jusqu’à quatre fonctions.',
    },
  },
  {
    id: 'derivative',
    category: 'analysis',
    keywords: ['dérivée', 'dériver', 'tangente', 'مشتقة', 'اشتقاق'],
    examples: ['x^3 - 3x + 1', '(2x+1)/(x-1)', 'x*ln(x)', 'sqrt(x^2+1)', 'sin(2x)', 'exp(-x)*x'],
    limits: {
      ar: 'تحسب الأداة الدالة المشتقة رمزياً لكنها لا تدرس مجموعة التعريف ولا قابلية الاشتقاق (مثلاً $\\sqrt{x}$ غير قابلة للاشتقاق في 0). الشكل المبسط قد يختلف عن شكل الدرس.',
      fr: 'L’outil calcule la dérivée symboliquement mais n’étudie ni le domaine de définition ni la dérivabilité (par ex. $\\sqrt{x}$ n’est pas dérivable en 0). La forme simplifiée peut différer de celle du cours.',
    },
  },
  {
    id: 'integral',
    category: 'analysis',
    keywords: ['intégrale', 'primitive', 'aire', 'تكامل', 'دالة أصلية'],
    examples: ['3x^2 + 2x', '1/x', 'exp(2x)', 'cos(x)', 'x*exp(x)', '(2x+1)^3'],
    limits: {
      ar: 'تجد الأداة الدوال الأصلية الاعتيادية فقط (حدوديات، $\\frac{1}{ax+b}$، $(ax+b)^n$، $e^{ax+b}$، $\\sin$ و $\\cos$ لدالة تآلفية، $\\sqrt{ax+b}$). لا تطبق المكاملة بالأجزاء ولا تغيير المتغير. في الحالات الأخرى تعطي قيمة مقربة للتكامل المحدد بطريقة سيمبسون.',
      fr: 'L’outil ne trouve que les primitives usuelles (polynômes, $\\frac{1}{ax+b}$, $(ax+b)^n$, $e^{ax+b}$, $\\sin$ et $\\cos$ d’une fonction affine, $\\sqrt{ax+b}$). Il n’effectue ni intégration par parties ni changement de variable ; sinon il donne une valeur approchée de l’intégrale définie (méthode de Simpson).',
    },
  },
  {
    id: 'geometry',
    category: 'geometry',
    keywords: ['aire', 'périmètre', 'volume', 'cercle', 'cylindre', 'مساحة', 'محيط', 'حجم'],
    limits: {
      ar: 'كل الأطوال بنفس الوحدة وموجبة قطعاً. القيم التي تتضمن $\\pi$ مقربة.',
      fr: 'Toutes les longueurs dans la même unité et strictement positives. Les valeurs contenant $\\pi$ sont approchées.',
    },
  },
  {
    id: 'stats',
    category: 'stats',
    keywords: ['moyenne', 'médiane', 'écart-type', 'variance', 'combinaison', 'binomiale', 'معدل', 'وسيط', 'احتمال'],
    limits: {
      ar: 'متسلسلة إحصائية متقطعة (500 قيمة على الأكثر)، والمغايرة محسوبة على $N$. تعريف الربيعين المعتمد هو تعريف الحصيصات المتراكمة؛ قد تستعمل بعض الكتب تعريفاً آخر.',
      fr: 'Série statistique discrète (500 valeurs maximum) ; variance calculée sur $N$. Les quartiles suivent la définition par effectifs cumulés ; certains manuels utilisent une autre convention.',
    },
  },
];

export function getTool(id: string | undefined): ToolMeta | undefined {
  return tools.find((t) => t.id === id);
}
