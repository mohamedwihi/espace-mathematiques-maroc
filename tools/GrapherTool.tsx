import { useMemo, useState } from 'react';
import { Coordinates, Mafs, Plot, Theme } from 'mafs';
import 'mafs/core.css';
import { Plus, RotateCcw, X } from 'lucide-react';
import { compileFunction, errorMessage } from '@/services/math/engine';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, SyntaxHint, TextField } from './ToolUI';
import type { ToolProps } from './types';

const COLORS = [Theme.green, Theme.blue, Theme.orange, Theme.pink];
const DEFAULT_VIEW = { xMin: '-6', xMax: '6', yMin: '-4', yMax: '6' };

export default function GrapherTool({ meta }: ToolProps) {
  const { t, L } = useI18n();
  const [exprs, setExprs] = useState<string[]>(['x^2 - 2x - 1', 'sin(x)']);
  const [view, setView] = useState(DEFAULT_VIEW);
  const [viewKey, setViewKey] = useState(0);

  const compiled = useMemo(
    () =>
      exprs.map((e) => {
        if (!e.trim()) return { fn: null, error: null };
        try {
          return { fn: compileFunction(e).fn, error: null };
        } catch (err) {
          return { fn: null, error: errorMessage(err) };
        }
      }),
    [exprs],
  );

  const bounds = useMemo(() => {
    const v = { xMin: Number(view.xMin), xMax: Number(view.xMax), yMin: Number(view.yMin), yMax: Number(view.yMax) };
    const ok = Object.values(v).every(Number.isFinite) && v.xMin < v.xMax && v.yMin < v.yMax && v.xMax - v.xMin <= 1e4 && v.yMax - v.yMin <= 1e4;
    return ok ? v : null;
  }, [view]);

  const setExpr = (i: number, v: string) => setExprs((list) => list.map((e, k) => (k === i ? v : e)));

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {exprs.map((e, i) => (
          <div key={i}>
            <div className="flex items-end gap-2">
              <span className="mb-3 inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: COLORS[i] }} aria-hidden="true" />
              <TextField className="flex-1" label={`f${i + 1}(x)`} value={e} onChange={(v) => setExpr(i, v)} invalid={!!compiled[i]?.error} />
              {exprs.length > 1 && (
                <button type="button" className="btn-ghost h-11 w-11 p-0" onClick={() => setExprs((l) => l.filter((_, k) => k !== i))} aria-label={`${t.tools.ui.remove} f${i + 1}`}>
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
            {compiled[i]?.error && <div className="mt-2"><ErrorBox error={compiled[i].error} /></div>}
          </div>
        ))}
        <div className="flex flex-wrap gap-2">
          {exprs.length < 4 && (
            <button type="button" className="btn-secondary btn-sm" onClick={() => setExprs((l) => [...l, ''])}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              {t.tools.ui.addFunction}
            </button>
          )}
          <button
            type="button"
            className="btn-secondary btn-sm"
            onClick={() => {
              setView(DEFAULT_VIEW);
              setViewKey((k) => k + 1);
            }}
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t.tools.ui.resetView}
          </button>
        </div>
      </div>

      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => setExprs((l) => (l.length < 4 ? [...l.filter(Boolean), v] : [...l.slice(0, 3), v]))} />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(['xMin', 'xMax', 'yMin', 'yMax'] as const).map((k) => (
          <TextField key={k} label={t.tools.ui[k]} value={view[k]} onChange={(v) => { setView({ ...view, [k]: v }); setViewKey((x) => x + 1); }} inputMode="decimal" />
        ))}
      </div>
      {!bounds && (
        <ErrorBox error={{ ar: 'حدود العرض غير صالحة (يجب أن يكون الأدنى أصغر من الأقصى).', fr: "Bornes d'affichage invalides (le minimum doit être inférieur au maximum)." }} />
      )}

      {bounds && (
        <figure className="graph-frame">
          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <Mafs key={viewKey} viewBox={{ x: [bounds.xMin, bounds.xMax], y: [bounds.yMin, bounds.yMax] }} preserveAspectRatio={false} height={420} pan zoom>
              <Coordinates.Cartesian subdivisions={2} />
              {compiled.map((c, i) => (c.fn ? <Plot.OfX key={`${i}-${exprs[i]}`} y={c.fn} color={COLORS[i]} /> : null))}
            </Mafs>
          </div>
          <figcaption className="mt-2 text-xs text-ink-400">{L({ ar: 'اسحب للتنقل، واستعمل عجلة الفأرة أو إصبعين للتكبير.', fr: 'Faites glisser pour vous déplacer ; molette ou deux doigts pour zoomer.' })}</figcaption>
        </figure>
      )}
    </div>
  );
}
