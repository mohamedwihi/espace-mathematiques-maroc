import { useRef, useState } from 'react';
import { Delete, History, Trash2 } from 'lucide-react';
import { evaluateNode, formatNumber, numberTex, parseExpression, toDegreeMode, toTex } from '@/services/math/engine';
import { Rational } from '@/services/math/rational';
import { readJSON, STORAGE_KEYS, writeJSON } from '@/services/storage';
import { Tex } from '@/components/math/Tex';
import { Segmented } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, SyntaxHint } from './ToolUI';
import type { ToolProps } from './types';

interface HistoryItem {
  expr: string;
  result: string;
}

const isHistory = (v: unknown): v is HistoryItem[] =>
  Array.isArray(v) && v.every((i) => i && typeof i.expr === 'string' && typeof i.result === 'string');

const KEYS: { label: string; insert: string }[] = [
  { label: '7', insert: '7' }, { label: '8', insert: '8' }, { label: '9', insert: '9' }, { label: '÷', insert: '/' }, { label: 'sin', insert: 'sin(' }, { label: 'cos', insert: 'cos(' },
  { label: '4', insert: '4' }, { label: '5', insert: '5' }, { label: '6', insert: '6' }, { label: '×', insert: '*' }, { label: 'tan', insert: 'tan(' }, { label: '√', insert: 'sqrt(' },
  { label: '1', insert: '1' }, { label: '2', insert: '2' }, { label: '3', insert: '3' }, { label: '−', insert: '-' }, { label: 'ln', insert: 'ln(' }, { label: 'log', insert: 'log(' },
  { label: '0', insert: '0' }, { label: '.', insert: '.' }, { label: 'π', insert: 'pi' }, { label: '+', insert: '+' }, { label: 'xʸ', insert: '^' }, { label: 'e', insert: 'e' },
  { label: '(', insert: '(' }, { label: ')', insert: ')' }, { label: 'n!', insert: '!' }, { label: '|x|', insert: 'abs(' }, { label: 'eˣ', insert: 'exp(' }, { label: '%', insert: '/100' },
];

export default function ScientificTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [expr, setExpr] = useState('');
  const [mode, setMode] = useState<'deg' | 'rad'>('rad');
  const [history, setHistory] = useState<HistoryItem[]>(() => readJSON(STORAGE_KEYS.calcHistory, [], isHistory));
  const inputRef = useRef<HTMLInputElement>(null);
  const { result, error, run } = useCompute<{ tex: string; value: number; fraction?: string }>();

  const compute = (src = expr) => {
    run(() => {
      let node = parseExpression(src);
      if (mode === 'deg') node = toDegreeMode(node);
      const value = evaluateNode(node);
      let fraction: string | undefined;
      if (Number.isFinite(value) && !Number.isInteger(value) && Math.abs(value) < 1e9) {
        try {
          const r = Rational.fromNumber(value, 1000);
          if (Math.abs(r.valueOf() - value) < 1e-12) fraction = r.toTex();
        } catch {
          /* pas d'écriture fractionnaire simple */
        }
      }
      const out = { tex: toTex(parseExpression(src)), value, fraction };
      const item = { expr: src, result: formatNumber(value) };
      const next = [item, ...history.filter((h) => h.expr !== src)].slice(0, 20);
      setHistory(next);
      writeJSON(STORAGE_KEYS.calcHistory, next);
      return out;
    });
  };

  const insert = (s: string) => {
    const el = inputRef.current;
    if (!el) return setExpr((e) => e + s);
    const start = el.selectionStart ?? expr.length;
    const end = el.selectionEnd ?? expr.length;
    const next = expr.slice(0, start) + s + expr.slice(end);
    setExpr(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + s.length, start + s.length);
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="space-y-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            compute();
          }}
          className="space-y-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label htmlFor="sci-expr" className="field-label mb-0">
              {t.tools.ui.expression}
            </label>
            <Segmented
              label={t.tools.ui.angleMode}
              value={mode}
              onChange={setMode}
              options={[
                { value: 'rad', label: t.tools.ui.radians },
                { value: 'deg', label: t.tools.ui.degrees },
              ]}
            />
          </div>
          <div className="flex gap-2" dir="ltr">
            <input
              id="sci-expr"
              ref={inputRef}
              className="field-mono text-lg"
              value={expr}
              onChange={(e) => setExpr(e.target.value)}
              placeholder="2*sin(pi/6) + sqrt(16)"
              autoComplete="off"
              spellCheck={false}
            />
            <button type="button" className="btn-secondary shrink-0 px-3" onClick={() => setExpr((e) => e.slice(0, -1))} aria-label={t.tools.clear}>
              <Delete className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-1.5" dir="ltr">
            {KEYS.map((k) => (
              <button
                key={k.label}
                type="button"
                onClick={() => insert(k.insert)}
                className={`min-h-[44px] rounded-lg border text-sm font-semibold transition active:scale-95 ${
                  /^[0-9.]$/.test(k.label)
                    ? 'border-ink-100 bg-white text-ink-900 hover:bg-ink-50'
                    : 'border-ink-100 bg-ink-50 text-ink-700 hover:bg-ink-100'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button type="submit" className="btn-primary flex-1">
              = {t.tools.calculate}
            </button>
            <button type="button" className="btn-secondary" onClick={() => setExpr('')}>
              {t.tools.clear}
            </button>
          </div>
        </form>

        <SyntaxHint />
        <Examples
          items={meta.examples}
          onPick={(v) => {
            setExpr(v);
            compute(v);
          }}
        />
        <ErrorBox error={error} />
        {result && (
          <ResultBox>
            <Tex tex={`${result.tex}${mode === 'deg' && /\\(sin|cos|tan|arcsin|arccos|arctan)/.test(result.tex) ? '\\ (\\text{deg})' : ''}`} display className="text-ink-500" />
            <Tex tex={`= ${numberTex(result.value, 12)}`} display className="text-2xl font-semibold" />
            {result.fraction && <Tex tex={`= ${result.fraction}`} display className="text-ink-600" />}
          </ResultBox>
        )}
      </div>

      <aside className="card h-fit p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <History className="h-4 w-4 text-ink-400" aria-hidden="true" />
            {t.tools.ui.history}
          </h3>
          {history.length > 0 && (
            <button
              type="button"
              className="btn-ghost btn-sm"
              onClick={() => {
                setHistory([]);
                writeJSON(STORAGE_KEYS.calcHistory, []);
              }}
              aria-label={t.tools.ui.clearHistory}
              title={t.tools.ui.clearHistory}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="text-sm text-ink-400">—</p>
        ) : (
          <ul className="space-y-1" dir="ltr">
            {history.map((h) => (
              <li key={h.expr}>
                <button
                  type="button"
                  onClick={() => setExpr(h.expr)}
                  className="w-full rounded-lg px-2 py-1.5 text-start font-mono text-xs hover:bg-ink-50"
                >
                  <span className="block truncate text-ink-500">{h.expr}</span>
                  <span className="block font-semibold text-ink-900">= {h.result}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
