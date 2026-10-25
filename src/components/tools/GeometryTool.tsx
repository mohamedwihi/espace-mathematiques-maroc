import { useState } from 'react';
import { computeShape, shapes, type ShapeResult } from '@/services/math/geometry';
import { numberTex } from '@/services/math/engine';
import { Tex } from '@/components/math/Tex';
import { FilterSelect, Segmented } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, TextField, ToolForm } from './ToolUI';

/** Vrai si la valeur s'écrit exactement avec au plus 8 chiffres significatifs. */
const isExact = (v: number) => Math.abs(v - parseFloat(v.toPrecision(8))) < 1e-12;

export default function GeometryTool() {
  const { t, L } = useI18n();
  const [kind, setKind] = useState<'plane' | 'solid'>('plane');
  const [shapeId, setShapeId] = useState('rectangle');
  const [values, setValues] = useState<Record<string, string>>({ L: '8', l: '5' });
  const [unit, setUnit] = useState('cm');
  const { result, error, run, reset } = useCompute<ShapeResult[]>();
  const shape = shapes.find((s) => s.id === shapeId) ?? shapes[0];

  const pick = (id: string) => {
    setShapeId(id);
    setValues({});
    reset();
  };

  const unitTex = (power: 1 | 2 | 3) => {
    const u = unit.trim().replace(/[^a-zA-Z]/g, '').slice(0, 6);
    if (!u) return '';
    return `\\ \\text{${u}}${power > 1 ? `^{${power}}` : ''}`;
  };

  return (
    <div className="space-y-5">
      <Segmented
        label={t.tools.ui.shape}
        value={kind}
        onChange={(k) => {
          setKind(k);
          pick(shapes.find((s) => s.kind === k)!.id);
        }}
        options={[
          { value: 'plane', label: t.tools.ui.plane },
          { value: 'solid', label: t.tools.ui.solid },
        ]}
      />
      <FilterSelect
        label={t.tools.ui.shape}
        value={shapeId}
        onChange={pick}
        options={shapes.filter((s) => s.kind === kind).map((s) => ({ value: s.id, label: L(s.name) }))}
      />
      <ToolForm onSubmit={() => run(() => computeShape(shape, values))}>
        <div className="grid gap-3 sm:grid-cols-3">
          {shape.params.map((p) => (
            <TextField
              key={`${shape.id}-${p.id}`}
              label={`${L(p.label)} (${p.symbol})`}
              value={values[p.id] ?? ''}
              onChange={(v) => setValues((old) => ({ ...old, [p.id]: v }))}
              inputMode="decimal"
            />
          ))}
          <TextField label={t.tools.ui.unitsLabel} value={unit} onChange={setUnit} placeholder="cm" />
        </div>
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <ResultBox>
          <ul className="space-y-3">
            {result.map((r) => (
              <li key={r.measure} className="rounded-xl bg-white p-3">
                <p className="text-sm font-semibold text-ink-700">{t.tools.ui[r.measure]}</p>
                <Tex tex={r.formula} display className="text-ink-500" />
                <Tex
                  tex={`=${r.substituted}${isExact(r.value) && !r.formula.includes('\\pi') && !r.formula.includes('\\sqrt') ? '=' : '\\approx'} ${numberTex(r.value, 8)}${unitTex(r.power)}`}
                  display
                  className="text-lg"
                />
              </li>
            ))}
          </ul>
        </ResultBox>
      )}
    </div>
  );
}
