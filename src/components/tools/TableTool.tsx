import { useState } from 'react';
import { valueTable } from '@/services/math/calculus';
import { evaluateInput, formatNumber } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function TableTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [fx, setFx] = useState('x^2 - 2x - 3');
  const [start, setStart] = useState('-3');
  const [end, setEnd] = useState('5');
  const [stepSize, setStepSize] = useState('1');
  const { result, error, run } = useCompute<{ x: number; y: number }[]>();

  const num = (raw: string, label: string) => {
    try {
      return evaluateInput(raw);
    } catch {
      throw new MathError(`القيمة «${label}» غير صالحة.`, `Valeur « ${label} » invalide.`);
    }
  };
  const submit = (f = fx) => run(() => valueTable(f, num(start, t.tools.ui.start), num(end, t.tools.ui.end), num(stepSize, t.tools.ui.step)));

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <TextField label={t.tools.ui.function} value={fx} onChange={setFx} />
        <div className="grid grid-cols-3 gap-3">
          <TextField label={t.tools.ui.start} value={start} onChange={setStart} inputMode="decimal" />
          <TextField label={t.tools.ui.end} value={end} onChange={setEnd} inputMode="decimal" />
          <TextField label={t.tools.ui.step} value={stepSize} onChange={setStepSize} inputMode="decimal" />
        </div>
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setFx(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <ResultBox>
          <div className="max-h-[480px] overflow-auto rounded-xl border border-ink-100 bg-white" dir="ltr">
            <table className="w-full text-sm">
              <caption className="sr-only">f(x) = {fx}</caption>
              <thead className="sticky top-0 bg-ink-50">
                <tr>
                  <th scope="col" className="px-4 py-2 text-start font-semibold">x</th>
                  <th scope="col" className="px-4 py-2 text-start font-semibold">f(x)</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {result.map((row) => (
                  <tr key={row.x} className="border-t border-ink-50">
                    <td className="px-4 py-1.5">{formatNumber(row.x)}</td>
                    <td className={`px-4 py-1.5 ${Number.isNaN(row.y) ? 'text-ink-300' : ''}`}>
                      {Number.isNaN(row.y) ? t.tools.ui.undefinedValue : formatNumber(row.y, 8)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ResultBox>
      )}
    </div>
  );
}
