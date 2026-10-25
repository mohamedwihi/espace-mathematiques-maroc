import { useState } from 'react';
import { fractionSteps, readFraction, type FractionOp } from '@/services/math/arithmetic';
import { Tex } from '@/components/math/Tex';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, StepsList, ToolForm } from './ToolUI';
import type { Step } from '@/services/math/engine';

const OPS: FractionOp[] = ['+', '-', '×', '÷'];

function FractionInput({ label, num, den, setNum, setDen }: { label: string; num: string; den: string; setNum: (v: string) => void; setDen: (v: string) => void }) {
  const { t } = useI18n();
  return (
    <fieldset className="rounded-xl border border-ink-100 p-3">
      <legend className="px-1 text-sm font-medium text-ink-700">{label}</legend>
      <div className="flex flex-col items-center gap-1.5" dir="ltr">
        <input className="field-mono w-28 text-center" value={num} onChange={(e) => setNum(e.target.value)} aria-label={`${label} — ${t.tools.ui.numerator}`} inputMode="numeric" />
        <div className="h-0.5 w-28 rounded bg-ink-800" aria-hidden="true" />
        <input className="field-mono w-28 text-center" value={den} onChange={(e) => setDen(e.target.value)} aria-label={`${label} — ${t.tools.ui.denominator}`} inputMode="numeric" />
      </div>
    </fieldset>
  );
}

export default function FractionsTool() {
  const { t } = useI18n();
  const [a, setA] = useState({ num: '3', den: '4' });
  const [b, setB] = useState({ num: '5', den: '6' });
  const [op, setOp] = useState<FractionOp>('+');
  const { result, error, run } = useCompute<{ tex: string; steps: Step[] }>();

  const submit = () =>
    run(() => {
      const fa = readFraction(a.num, a.den, 1);
      const fb = readFraction(b.num, b.den, 2);
      const { result: r, steps } = fractionSteps(fa, fb, op);
      return { tex: r.toTex(), steps };
    });

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={submit}>
        <div className="flex flex-wrap items-center justify-center gap-4" dir="ltr">
          <FractionInput label={t.tools.ui.fraction1} num={a.num} den={a.den} setNum={(v) => setA({ ...a, num: v })} setDen={(v) => setA({ ...a, den: v })} />
          <div role="radiogroup" aria-label={t.tools.ui.operation} className="grid grid-cols-2 gap-1.5">
            {OPS.map((o) => (
              <button
                key={o}
                type="button"
                role="radio"
                aria-checked={op === o}
                onClick={() => setOp(o)}
                className={`h-11 w-11 rounded-lg text-lg font-bold transition ${op === o ? 'bg-brand-700 text-white' : 'bg-ink-100 text-ink-700 hover:bg-ink-200'}`}
              >
                {o}
              </button>
            ))}
          </div>
          <FractionInput label={t.tools.ui.fraction2} num={b.num} den={b.den} setNum={(v) => setB({ ...b, num: v })} setDen={(v) => setB({ ...b, den: v })} />
        </div>
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <Tex tex={result.tex} display className="text-2xl" />
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
