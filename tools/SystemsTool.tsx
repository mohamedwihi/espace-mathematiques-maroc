import { useState } from 'react';
import { parseCoefficient, solveSystem, type SystemResult } from '@/services/math/systems';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { Segmented } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, StepsList, ToolForm } from './ToolUI';

const VARS = ['x', 'y', 'z'];
const DEFAULTS: Record<2 | 3, string[][]> = {
  2: [['3', '2', '7'], ['1', '-2', '5']],
  3: [['1', '1', '1', '6'], ['2', '-1', '1', '3'], ['1', '2', '-1', '2']],
};

export default function SystemsTool() {
  const { t } = useI18n();
  const [size, setSize] = useState<2 | 3>(2);
  const [grid, setGrid] = useState<string[][]>(DEFAULTS[2]);
  const { result, error, run, reset } = useCompute<SystemResult>();

  const changeSize = (s: '2' | '3') => {
    const n = Number(s) as 2 | 3;
    setSize(n);
    setGrid(DEFAULTS[n]);
    reset();
  };

  const setCell = (i: number, j: number, v: string) => setGrid((g) => g.map((row, r) => (r === i ? row.map((c, k) => (k === j ? v : c)) : row)));

  const submit = () =>
    run(() => {
      const A = grid.map((row, i) =>
        row.slice(0, size).map((c, j) => {
          try {
            return parseCoefficient(c);
          } catch {
            throw new MathError(`المعامل في السطر ${i + 1} العمود ${j + 1} غير صالح.`, `Coefficient invalide ligne ${i + 1}, colonne ${j + 1}.`);
          }
        }),
      );
      const b = grid.map((row, i) => {
        try {
          return parseCoefficient(row[size]);
        } catch {
          throw new MathError(`الطرف الثاني في السطر ${i + 1} غير صالح.`, `Second membre invalide ligne ${i + 1}.`);
        }
      });
      return solveSystem(A, b);
    });

  return (
    <div className="space-y-5">
      <Segmented
        label={t.tools.ui.size}
        value={String(size) as '2' | '3'}
        onChange={changeSize}
        options={[
          { value: '2', label: '2 × 2' },
          { value: '3', label: '3 × 3' },
        ]}
      />
      <ToolForm onSubmit={submit}>
        <div className="space-y-2 overflow-x-auto" dir="ltr">
          {grid.map((row, i) => (
            <div key={i} className="flex items-center gap-1.5 whitespace-nowrap font-mono">
              {row.slice(0, size).map((c, j) => (
                <span key={j} className="flex items-center gap-1.5">
                  {j > 0 && <span className="text-ink-400">+</span>}
                  <input
                    className="field-mono w-16 px-2 text-center"
                    value={c}
                    onChange={(e) => setCell(i, j, e.target.value)}
                    aria-label={`L${i + 1} — ${VARS[j]}`}
                  />
                  <span className="font-semibold">{VARS[j]}</span>
                </span>
              ))}
              <span className="px-1 text-ink-400">=</span>
              <input className="field-mono w-16 px-2 text-center" value={row[size]} onChange={(e) => setCell(i, size, e.target.value)} aria-label={`L${i + 1} — =`} />
            </div>
          ))}
        </div>
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox label={t.tools.ui.solutions}>
            {result.kind === 'unique' && (
              <Tex tex={result.solution.map((v, j) => `${VARS[j]}=${v.toTex()}`).join(',\\quad ')} display className="text-xl" />
            )}
            {result.kind === 'none' && <Tex tex="S=\varnothing" display className="text-xl" />}
            {result.kind === 'infinite' && <Tex tex="\text{card}(S)=\infty" display className="text-xl" />}
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
