import type { MathNode } from 'mathjs';
import { compileFunction, dependsOn, evaluateNode, math, numberTex, parseExpression, step, toTex, toUserString, type Step } from './engine';
import { polyFromNode, polyToTex, type Poly } from './polynomial';
import { MathError, R, Rational } from './rational';

type AnyNode = MathNode & { fn?: string | { name: string }; args?: MathNode[]; content?: MathNode; name?: string; value?: number };

const fnName = (n: AnyNode) => (typeof n.fn === 'object' ? n.fn.name : undefined);
const strip = (n: MathNode): AnyNode => {
  let cur = n as AnyNode;
  while (cur.type === 'ParenthesisNode') cur = cur.content as AnyNode;
  return cur;
};

/* ====================== Dérivées ====================== */

export interface DerivativeResult {
  fTex: string;
  dTex: string;
  dText: string;
  rules: Step[];
  valueAt?: { x: number; value: number };
}

/** Repère les règles de dérivation utilisées (explication pédagogique). */
function collectRules(node: MathNode): Step[] {
  const found = new Map<string, Step>();
  const add = (key: string, s: Step) => !found.has(key) && found.set(key, s);
  node.traverse((raw) => {
    const n = raw as AnyNode;
    if (n.type === 'OperatorNode') {
      const [a, b] = n.args ?? [];
      if ((n.fn === 'add' || n.fn === 'subtract') && a && b && dependsOn(a) && dependsOn(b)) {
        add('sum', step('مشتقة مجموع:', "Dérivée d'une somme :", "(u+v)'=u'+v'"));
      }
      if (n.fn === 'multiply' && a && b) {
        if (dependsOn(a) && dependsOn(b)) add('product', step('مشتقة جداء:', "Dérivée d'un produit :", "(uv)'=u'v+uv'"));
        else if (dependsOn(a) || dependsOn(b)) add('scalar', step('مشتقة جداء دالة في عدد ثابت:', 'Dérivée de $k\\cdot u$ :', "(ku)'=ku'"));
      }
      if (n.fn === 'divide' && b && dependsOn(b)) {
        add(dependsOn(a) ? 'quotient' : 'inverse', dependsOn(a)
          ? step('مشتقة خارج:', "Dérivée d'un quotient :", "\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}")
          : step('مشتقة مقلوب دالة:', "Dérivée de l'inverse :", "\\left(\\frac 1v\\right)'=-\\frac{v'}{v^2}"));
      }
      if (n.fn === 'pow' && a && b && dependsOn(a) && !dependsOn(b)) {
        add('power', step('مشتقة قوة:', "Dérivée d'une puissance :", "(u^n)'=nu'u^{n-1}"));
      }
      if (n.fn === 'pow' && a && b && !dependsOn(a) && dependsOn(b)) {
        add('expbase', step('مشتقة $a^{u}$:', 'Dérivée de $a^{u}$ :', "(a^{u})'=u'\\ln(a)\\,a^{u}"));
      }
    }
    if (n.type === 'FunctionNode') {
      const name = fnName(n);
      const arg = n.args?.[0];
      if (!arg || !dependsOn(arg)) return;
      const table: Record<string, Step> = {
        sqrt: step('مشتقة الجذر المربع:', 'Dérivée de la racine carrée :', "(\\sqrt u)'=\\frac{u'}{2\\sqrt u}"),
        exp: step('مشتقة الدالة الأسية:', "Dérivée de l'exponentielle :", "(e^u)'=u'e^u"),
        log: step('مشتقة اللوغاريتم النيبيري:', 'Dérivée du logarithme népérien :', "(\\ln u)'=\\frac{u'}{u}"),
        log10: step('مشتقة اللوغاريتم العشري:', 'Dérivée du logarithme décimal :', "(\\log u)'=\\frac{u'}{u\\ln 10}"),
        sin: step('مشتقة الجيب:', 'Dérivée du sinus :', "(\\sin u)'=u'\\cos u"),
        cos: step('مشتقة جيب التمام:', 'Dérivée du cosinus :', "(\\cos u)'=-u'\\sin u"),
        tan: step('مشتقة الظل:', 'Dérivée de la tangente :', "(\\tan u)'=u'(1+\\tan^2u)"),
      };
      if (name && table[name]) add(name, table[name]);
      const inner = strip(arg);
      if (!(inner.type === 'SymbolNode' && inner.name === 'x')) {
        add('chain', step('مشتقة دالة مركبة:', "Dérivée d'une composée :", "(v\\circ u)'=u'\\times(v'\\circ u)"));
      }
    }
  });
  return [...found.values()];
}

export function derivativeOf(input: string, at?: number): DerivativeResult {
  const node = parseExpression(input, ['x']);
  let d: MathNode;
  try {
    d = math.simplify(math.derivative(node, 'x'));
  } catch {
    throw new MathError('تعذر اشتقاق هذه الدالة بهذه الأداة.', "Impossible de dériver cette fonction avec cet outil.");
  }
  const result: DerivativeResult = {
    fTex: toTex(node),
    dTex: toTex(d),
    dText: toUserString(d),
    rules: collectRules(node),
  };
  if (at !== undefined) {
    const value = evaluateNode(d, { x: at });
    if (!Number.isFinite(value)) {
      throw new MathError(`الدالة المشتقة غير معرفة في $x=${at}$.`, `La dérivée n'est pas définie en $x=${at}$.`);
    }
    result.valueAt = { x: at, value };
  }
  return result;
}

/* ====================== Primitives et intégrales ====================== */

const C = (v: number) => new math.ConstantNode(v);
const S = (name: string) => new math.SymbolNode(name);
const op = (o: string, f: string, args: MathNode[]) => new math.OperatorNode(o as never, f as never, args);
const fun = (name: string, args: MathNode[]) => new math.FunctionNode(S(name), args);

/** u = a·x + b ? Renvoie [a, b] si l'argument est affine en x. */
function affine(node: MathNode): [Rational, Rational] | null {
  try {
    const p = polyFromNode(node);
    if (p.length === 2 && !p[1].isZero()) return [p[1], p[0]];
    return null;
  } catch {
    return null;
  }
}

function polyPrimitive(p: Poly): Poly {
  return [R(0), ...p.map((c, k) => c.div(R(k + 1)))];
}

interface PrimitiveOut {
  node: MathNode;
  rules: Step[];
}

function divideBy(node: MathNode, a: Rational): MathNode {
  if (a.equals(R(1))) return node;
  return op('/', 'divide', [node, C(a.valueOf())]);
}

function primitive(raw: MathNode): PrimitiveOut | null {
  const n = strip(raw);

  // Polynômes (y compris produits et puissances développables)
  try {
    const p = polyFromNode(n);
    const P = polyPrimitive(p);
    return {
      node: parseExpression(polyToText(P), ['x']),
      rules: [step('دالة أصلية لحدودية:', "Primitive d'un polynôme :", '\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\quad(n\\neq-1)')],
    };
  } catch {
    /* pas un polynôme : on continue */
  }

  if (!dependsOn(n)) {
    return { node: op('*', 'multiply', [n, S('x')]), rules: [step('دالة أصلية لثابتة:', "Primitive d'une constante :", '\\int k\\,dx=kx+C')] };
  }

  if (n.type === 'OperatorNode') {
    const [a, b] = n.args ?? [];
    if (n.fn === 'add' || n.fn === 'subtract') {
      const pa = primitive(a);
      const pb = primitive(b);
      if (!pa || !pb) return null;
      return {
        node: op(n.fn === 'add' ? '+' : '-', n.fn, [pa.node, pb.node]),
        rules: [step('خطية الدالة الأصلية:', 'Linéarité :', '\\int(u\\pm v)=\\int u\\pm\\int v'), ...pa.rules, ...pb.rules],
      };
    }
    if (n.fn === 'unaryMinus') {
      const pa = primitive(a);
      return pa ? { node: op('-', 'unaryMinus', [pa.node]), rules: pa.rules } : null;
    }
    if (n.fn === 'multiply' && a && b) {
      const [k, f] = !dependsOn(a) ? [a, b] : !dependsOn(b) ? [b, a] : [null, null];
      if (k && f) {
        const pf = primitive(f);
        return pf ? { node: op('*', 'multiply', [k, pf.node]), rules: [step('ثابتة مضروبة:', 'Constante multiplicative :', '\\int k\\,u=k\\int u'), ...pf.rules] } : null;
      }
      return null;
    }
    if (n.fn === 'divide' && a && b) {
      if (!dependsOn(b)) {
        const pa = primitive(a);
        return pa ? { node: op('/', 'divide', [pa.node, b]), rules: pa.rules } : null;
      }
      if (!dependsOn(a)) {
        const den = strip(b);
        // k / (ax+b)
        const lin = affine(den);
        if (lin) {
          const [al] = lin;
          return {
            node: op('*', 'multiply', [a, divideBy(fun('log', [fun('abs', [den])]), al)]),
            rules: [step('دالة أصلية لـ $\\frac{1}{ax+b}$:', 'Primitive de $\\frac{1}{ax+b}$ :', '\\int\\frac{dx}{ax+b}=\\frac1a\\ln|ax+b|+C')],
          };
        }
        // k / (ax+b)^n
        if (den.type === 'OperatorNode' && den.fn === 'pow' && den.args && !dependsOn(den.args[1])) {
          const nExp = evaluateNode(den.args[1]);
          const inner = strip(den.args[0]);
          const l2 = affine(inner);
          if (l2 && nExp !== 1) {
            const [al] = l2;
            const newExp = 1 - nExp;
            return {
              node: op('*', 'multiply', [a, divideBy(op('^', 'pow', [inner, C(newExp)]), al.mul(Rational.fromNumber(newExp)))]),
              rules: [step('دالة أصلية لقوة:', "Primitive d'une puissance :", '\\int(ax+b)^n\\,dx=\\frac{(ax+b)^{n+1}}{a(n+1)}+C')],
            };
          }
        }
      }
      return null;
    }
    if (n.fn === 'pow' && a && b) {
      const base = strip(a);
      // (ax+b)^n avec n constant
      if (!dependsOn(b)) {
        const nExp = evaluateNode(b);
        const lin = affine(base);
        if (!lin) return null;
        const [al] = lin;
        if (nExp === -1) {
          return { node: divideBy(fun('log', [fun('abs', [base])]), al), rules: [step('دالة أصلية لـ $\\frac1u$:', 'Primitive de $\\frac1u$ :', '\\int\\frac{dx}{ax+b}=\\frac1a\\ln|ax+b|+C')] };
        }
        return {
          node: divideBy(op('^', 'pow', [base, C(nExp + 1)]), al.mul(Rational.fromNumber(nExp + 1))),
          rules: [step('دالة أصلية لقوة:', "Primitive d'une puissance :", '\\int(ax+b)^n\\,dx=\\frac{(ax+b)^{n+1}}{a(n+1)}+C\\quad(n\\neq-1)')],
        };
      }
      // e^(ax+b)
      if (base.type === 'SymbolNode' && base.name === 'e') {
        const lin = affine(b);
        if (!lin) return null;
        return { node: divideBy(fun('exp', [b]), lin[0]), rules: [step('دالة أصلية للأسية:', "Primitive de l'exponentielle :", '\\int e^{ax+b}\\,dx=\\frac1a e^{ax+b}+C')] };
      }
      return null;
    }
    return null;
  }

  if (n.type === 'FunctionNode') {
    const name = fnName(n);
    const arg = n.args?.[0];
    if (!arg) return null;
    const lin = affine(arg);
    if (!lin) return null;
    const [al] = lin;
    switch (name) {
      case 'exp':
        return { node: divideBy(fun('exp', [arg]), al), rules: [step('دالة أصلية للأسية:', "Primitive de l'exponentielle :", '\\int e^{ax+b}\\,dx=\\frac1a e^{ax+b}+C')] };
      case 'sin':
        return { node: op('-', 'unaryMinus', [divideBy(fun('cos', [arg]), al)]), rules: [step('دالة أصلية للجيب:', 'Primitive du sinus :', '\\int\\sin(ax+b)\\,dx=-\\frac1a\\cos(ax+b)+C')] };
      case 'cos':
        return { node: divideBy(fun('sin', [arg]), al), rules: [step('دالة أصلية لجيب التمام:', 'Primitive du cosinus :', '\\int\\cos(ax+b)\\,dx=\\frac1a\\sin(ax+b)+C')] };
      case 'sqrt':
        return {
          node: divideBy(op('*', 'multiply', [C(2 / 3), op('^', 'pow', [arg, C(1.5)])]), al),
          rules: [step('دالة أصلية للجذر:', 'Primitive de la racine :', '\\int\\sqrt{ax+b}\\,dx=\\frac{2}{3a}(ax+b)^{\\frac32}+C')],
        };
      default:
        return null;
    }
  }
  return null;
}

function polyToText(p: Poly): string {
  return p
    .map((c, k) => (c.isZero() ? '' : `(${c.num}/${c.den})*x^${k}`))
    .filter(Boolean)
    .join(' + ') || '0';
}

/** Intégrale numérique par la méthode de Simpson (n pair). */
export function simpson(f: (x: number) => number, a: number, b: number, n = 2000): number {
  if (n % 2) n++;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
}

export interface IntegralResult {
  fTex: string;
  primitiveTex?: string;
  rules: Step[];
  definite?: { a: number; b: number; exact?: number; exactTex?: string; numeric: number; steps: Step[] };
}

export function integralOf(input: string, bounds?: { a: number; b: number }): IntegralResult {
  const node = parseExpression(input, ['x']);
  const prim = primitive(node);
  const result: IntegralResult = { fTex: toTex(node), rules: [] };
  let F: MathNode | undefined;
  if (prim) {
    try {
      F = math.simplify(prim.node);
    } catch {
      F = prim.node;
    }
    let primTex: string;
    try {
      // Polynôme : écriture ordonnée par puissances décroissantes, coefficients exacts
      primTex = polyToTex(polyPrimitive(polyFromNode(node)));
    } catch {
      primTex = toTex(F);
    }
    result.primitiveTex = `${primTex}+C`;
    result.rules = dedupe(prim.rules);
  }

  if (bounds) {
    const { a, b } = bounds;
    const { fn } = compileFunction(input);
    const samples = 400;
    for (let i = 0; i <= samples; i++) {
      const x = a + ((b - a) * i) / samples;
      if (!Number.isFinite(fn(x))) {
        throw new MathError('الدالة غير معرفة أو غير متصلة في نقطة من المجال $[a;b]$: لا يمكن حساب التكامل بهذه الأداة.', "La fonction n'est pas définie (ou pas continue) en un point de $[a;b]$ : l'intégrale ne peut pas être calculée par cet outil.");
      }
    }
    const numeric = simpson(fn, a, b);
    const steps: Step[] = [];
    let exact: number | undefined;
    let exactTex: string | undefined;
    if (F) {
      const Fb = evaluateNode(F, { x: b });
      const Fa = evaluateNode(F, { x: a });
      exact = Fb - Fa;
      steps.push(step('نستعمل دالة أصلية $F$:', 'On utilise une primitive $F$ :', `\\int_{${numberTex(a)}}^{${numberTex(b)}}f(x)\\,dx=\\big[F(x)\\big]_{${numberTex(a)}}^{${numberTex(b)}}=F(${numberTex(b)})-F(${numberTex(a)})`));
      steps.push(step('نعوض:', 'On remplace :', `${numberTex(Fb, 8)}-\\left(${numberTex(Fa, 8)}\\right)=${numberTex(exact, 10)}`));
      // Valeur exacte rationnelle pour les polynômes à bornes rationnelles
      try {
        const p = polyFromNode(node);
        const P = polyPrimitive(p);
        const ra = Rational.fromNumber(a);
        const rb = Rational.fromNumber(b);
        const ev = (r: Rational) => [...P].reverse().reduce((acc, c) => acc.mul(r).add(c), R(0));
        exactTex = ev(rb).sub(ev(ra)).toTex();
      } catch {
        exactTex = undefined;
      }
    } else {
      steps.push(step('لم تجد الأداة دالة أصلية بالقواعد الأساسية: نكتفي بقيمة مقربة.', "L'outil n'a pas trouvé de primitive avec les règles usuelles : on donne une valeur approchée.", `\\int_{${numberTex(a)}}^{${numberTex(b)}}f(x)\\,dx\\approx${numberTex(numeric, 8)}`));
    }
    result.definite = { a, b, exact, exactTex, numeric, steps };
  }
  if (!prim && !bounds) {
    throw new MathError(
      'لم تجد الأداة دالة أصلية بالقواعد الأساسية. أدخل حدّين لحساب قيمة مقربة للتكامل.',
      "Aucune primitive trouvée avec les règles usuelles. Saisissez des bornes pour obtenir une valeur approchée de l'intégrale.",
    );
  }
  return result;
}

function dedupe(steps: Step[]): Step[] {
  const seen = new Set<string>();
  return steps.filter((s) => {
    const key = s.tex ?? s.text.fr;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* ====================== Tableau de valeurs ====================== */

export function valueTable(input: string, start: number, end: number, stepSize: number): { x: number; y: number }[] {
  if (stepSize <= 0) throw new MathError('الخطوة يجب أن تكون موجبة قطعاً.', 'Le pas doit être strictement positif.');
  if (end < start) throw new MathError('النهاية يجب أن تكون أكبر من البداية.', 'La fin doit être supérieure au début.');
  const count = Math.floor((end - start) / stepSize + 1e-9) + 1;
  if (count > 201) throw new MathError('عدد الأسطر كبير جداً (201 على الأكثر). كبّر الخطوة.', 'Trop de lignes (201 maximum). Augmentez le pas.');
  const { fn } = compileFunction(input);
  return Array.from({ length: count }, (_, i) => {
    const x = parseFloat((start + i * stepSize).toPrecision(12));
    return { x, y: fn(x) };
  });
}
