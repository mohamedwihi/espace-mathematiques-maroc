import { all, create, type MathNode } from 'mathjs';
import type { Localized } from '@/types';
import { MathError } from './rational';

/**
 * Moteur d'expressions sûr.
 * - Aucune utilisation de `eval` ou `new Function` : les saisies sont analysées par le parseur de mathjs,
 *   puis l'arbre syntaxique est VALIDÉ par liste blanche (opérateurs, fonctions et symboles autorisés).
 * - Les affectations, accès aux propriétés, objets, matrices, chaînes, etc. sont refusés.
 */
export const math = create(all, { number: 'number', predictable: true });

export interface Step {
  text: Localized;
  tex?: string;
}

export const step = (ar: string, fr: string, tex?: string): Step => ({ text: { ar, fr }, tex });

const MAX_LENGTH = 240;

const ALLOWED_FUNCTIONS = new Set([
  'sin', 'cos', 'tan', 'asin', 'acos', 'atan',
  'sinh', 'cosh', 'tanh',
  'sqrt', 'cbrt', 'nthRoot', 'abs', 'exp', 'log', 'ln', 'log10', 'log2',
  'floor', 'ceil', 'round', 'factorial', 'min', 'max',
]);
const ALLOWED_OPERATORS = new Set(['add', 'subtract', 'multiply', 'divide', 'pow', 'unaryMinus', 'unaryPlus', 'factorial', 'mod']);
const CONSTANTS = new Set(['pi', 'e']);

/** Normalise les symboles saisis au clavier ou copiés depuis un document. */
export function normalizeInput(raw: string): string {
  return raw
    .replace(/[×·∙]/g, '*')
    .replace(/÷/g, '/')
    .replace(/[−–—]/g, '-')
    .replace(/π/g, 'pi')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/√\s*(\d+(?:\.\d+)?|[a-zA-Z])/g, 'sqrt($1)')
    .replace(/√/g, 'sqrt')
    .replace(/\bln\s*(?=\()/g, 'ln')
    .trim();
}

function syntaxError(): MathError {
  return new MathError(
    'صيغة غير صحيحة. تحقق من الأقواس والعمليات (استعمل النقطة للفاصلة العشرية: 2.5).',
    'Syntaxe incorrecte. Vérifiez les parenthèses et les opérations (utilisez le point décimal : 2.5).',
  );
}

/**
 * Analyse et valide une expression. `variables` : symboles autorisés (ex. ['x']).
 * Convention scolaire marocaine : ln = logarithme népérien, log = logarithme décimal.
 */
export function parseExpression(input: string, variables: string[] = []): MathNode {
  const src = normalizeInput(input);
  if (!src) throw new MathError('أدخل تعبيراً.', 'Saisissez une expression.');
  if (src.length > MAX_LENGTH) throw new MathError('التعبير طويل جداً.', 'Expression trop longue.');
  if (/[;=<>[\]{}"'`?:\\]/.test(src)) {
    throw new MathError('رموز غير مسموح بها في التعبير.', "Caractères non autorisés dans l'expression.");
  }

  let node: MathNode;
  try {
    node = math.parse(src);
  } catch {
    throw syntaxError();
  }

  const vars = new Set(variables);
  node.traverse((n, path, parent) => {
    switch (n.type) {
      case 'ConstantNode': {
        const value = (n as unknown as { value: unknown }).value;
        if (typeof value !== 'number') throw syntaxError();
        break;
      }
      case 'SymbolNode': {
        const name = (n as unknown as { name: string }).name;
        const isFunctionName = parent?.type === 'FunctionNode' && path === 'fn';
        if (isFunctionName) {
          if (!ALLOWED_FUNCTIONS.has(name)) {
            throw new MathError(`الدالة «${name}» غير مدعومة.`, `La fonction « ${name} » n'est pas prise en charge.`);
          }
        } else if (!vars.has(name) && !CONSTANTS.has(name)) {
          const allowed = [...vars].join(', ') || '—';
          throw new MathError(
            `الرمز «${name}» غير معروف. المتغيرات المسموح بها: ${allowed}`,
            `Symbole « ${name} » inconnu. Variables autorisées : ${allowed}`,
          );
        }
        break;
      }
      case 'FunctionNode': {
        const fn = (n as unknown as { fn: MathNode }).fn;
        if (fn.type !== 'SymbolNode') throw syntaxError();
        break;
      }
      case 'OperatorNode': {
        const op = (n as unknown as { fn: string }).fn;
        if (!ALLOWED_OPERATORS.has(op)) throw syntaxError();
        break;
      }
      case 'ParenthesisNode':
        break;
      default:
        throw syntaxError();
    }
  });

  // ln → log (népérien de mathjs), log(x) → log10(x)
  return node.transform((n) => {
    if (n.type === 'FunctionNode') {
      const f = n as unknown as { fn: { name: string }; args: MathNode[] };
      if (f.fn.name === 'ln') return new math.FunctionNode(new math.SymbolNode('log'), f.args);
      if (f.fn.name === 'log' && f.args.length === 1) return new math.FunctionNode(new math.SymbolNode('log10'), f.args);
    }
    return n;
  });
}

/** Convertit les angles des fonctions trigonométriques en degrés. */
export function toDegreeMode(node: MathNode): MathNode {
  const k = new math.OperatorNode('/', 'divide', [new math.SymbolNode('pi'), new math.ConstantNode(180)]);
  const kInv = new math.OperatorNode('/', 'divide', [new math.ConstantNode(180), new math.SymbolNode('pi')]);
  return node.transform((n) => {
    if (n.type !== 'FunctionNode') return n;
    const f = n as unknown as { fn: { name: string }; args: MathNode[] };
    const name = f.fn.name;
    if (['sin', 'cos', 'tan'].includes(name)) {
      const arg = new math.OperatorNode('*', 'multiply', [new math.ParenthesisNode(f.args[0]), k]);
      return new math.FunctionNode(new math.SymbolNode(name), [arg]);
    }
    if (['asin', 'acos', 'atan'].includes(name)) {
      return new math.OperatorNode('*', 'multiply', [n, kInv]);
    }
    return n;
  });
}

export function evaluateNode(node: MathNode, scope: Record<string, number> = {}): number {
  let value: unknown;
  try {
    value = node.compile().evaluate({ ...scope });
  } catch {
    throw new MathError('تعذر حساب هذا التعبير.', "Impossible d'évaluer cette expression.");
  }
  if (typeof value !== 'number') {
    throw new MathError('النتيجة ليست عدداً حقيقياً.', "Le résultat n'est pas un nombre réel.");
  }
  return value;
}

/** Fonction numérique sûre de x (renvoie NaN hors du domaine de définition). */
export function compileFunction(input: string, variable = 'x'): { fn: (x: number) => number; node: MathNode } {
  const node = parseExpression(input, [variable]);
  const code = node.compile();
  const fn = (x: number) => {
    try {
      const v = code.evaluate({ [variable]: x });
      return typeof v === 'number' && Number.isFinite(v) ? v : NaN;
    } catch {
      return NaN;
    }
  };
  return { fn, node };
}

/** LaTeX d'une expression (log → \ln, log10 → \log). */
export function toTex(node: MathNode): string {
  return node.toTex({
    parenthesis: 'keep',
    implicit: 'hide',
    handler: (n: MathNode, options: object) => {
      if (n.type === 'FunctionNode') {
        const f = n as unknown as { fn: { name: string }; args: MathNode[] };
        if (f.fn.name === 'log10' && f.args.length === 1) return `\\log\\left(${f.args[0].toTex(options)}\\right)`;
        if (f.fn.name === 'log' && f.args.length === 1) return `\\ln\\left(${f.args[0].toTex(options)}\\right)`;
      }
      return undefined;
    },
  } as never);
}

/** Écriture texte lisible par l'élève (ln pour le népérien). */
export function toUserString(node: MathNode): string {
  return node.toString({
    parenthesis: 'keep',
    implicit: 'hide',
    handler: (n: MathNode, options: object) => {
      if (n.type === 'FunctionNode') {
        const f = n as unknown as { fn: { name: string }; args: MathNode[] };
        if (f.fn.name === 'log10' && f.args.length === 1) return `log(${f.args[0].toString(options)})`;
        if (f.fn.name === 'log' && f.args.length === 1) return `ln(${f.args[0].toString(options)})`;
      }
      return undefined;
    },
  } as never);
}

/** Vérifie si un sous-arbre dépend de la variable. */
export function dependsOn(node: MathNode, variable = 'x'): boolean {
  let found = false;
  node.traverse((n, path, parent) => {
    if (n.type === 'SymbolNode' && (n as unknown as { name: string }).name === variable) {
      if (!(parent?.type === 'FunctionNode' && path === 'fn')) found = true;
    }
  });
  return found;
}

/** Évalue une saisie numérique (ex. "3/4", "2^10", "sqrt(2)") sans variable. */
export function evaluateInput(input: string): number {
  const v = evaluateNode(parseExpression(input));
  if (!Number.isFinite(v)) throw new MathError('النتيجة غير منتهية أو غير معرفة.', 'Résultat infini ou non défini.');
  return v;
}

/** Format lisible d'un nombre flottant. */
export function formatNumber(x: number, digits = 10): string {
  if (Number.isNaN(x)) return '—';
  if (!Number.isFinite(x)) return x > 0 ? '+∞' : '-∞';
  if (x === 0) return '0';
  const abs = Math.abs(x);
  if (abs >= 1e12 || abs < 1e-7) {
    const [m, e] = x.toExponential(digits - 1).split('e');
    return `${parseFloat(m)}×10^${Number(e)}`;
  }
  return String(parseFloat(x.toPrecision(digits)));
}

/** Version LaTeX de formatNumber. */
export function numberTex(x: number, digits = 10): string {
  const s = formatNumber(x, digits);
  const m = s.match(/^(-?[\d.]+)×10\^(-?\d+)$/);
  if (m) return `${m[1]}\\times10^{${m[2]}}`;
  return s.replace('∞', '\\infty');
}

/** Message d'erreur localisé quel que soit le type d'erreur. */
export function errorMessage(e: unknown): Localized {
  if (e instanceof MathError) return { ar: e.ar, fr: e.fr };
  return { ar: 'حدث خطأ أثناء الحساب. تحقق من المدخلات.', fr: 'Erreur pendant le calcul. Vérifiez la saisie.' };
}
