import { useState } from 'react';
import { powersCompute, type PowerMode } from '@/services/math/arithmetic';
import { evaluateInput, numberTex, type Step } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { Segmented } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, StepsList, TextField, ToolForm } from './ToolUI';

export default function PowersTool() {
  const { t } = useI18n();
  const [mode, setMode] = useState<PowerMode>('power');
  const [x, setX] = useState('2');
  const [y, setY] = useState('10');
  const { result, error, run, reset } = useCompute<{ value: number; steps: Step[] }>();

  const fields: Record<PowerMode, { x: string; y?: string; tex: string }> = {
    power: { x: t.tools.ui.base, y: t.tools.ui.exponent, tex: 'a^n' },
    root: { x: t.tools.ui.radicand, y: t.tools.ui.index, tex: '\\sqrt[n]{a}' },
    log: { x: t.tools.ui.argument, y: t.tools.ui.base, tex: '\\log_b(x)' },
    ln: { x: t.tools.ui.argument, tex: '\\ln(x)' },
    exp: { x: t.tools.ui.argument, tex: 'e^x' },
  };
  const f = fields[mode];

  const read = (raw: string, label: string) => {
    try {
      return evaluateInput(raw);
    } catch {
      throw new MathError(`القيمة «${label}» غير صالحة.`, `Valeur « ${label} » invalide.`);
    }
  };

  const submit = () => run(() => powersCompute(mode, read(x, f.x), f.y ? read(y, f.y) : 0));

  return (
    <div className="space-y-5">
      <Segmented
        label={t.tools.ui.mode}
        value={mode}
        onChange={(m) => {
          setMode(m);
          reset();
          if (m === 'root') { setX('72'); setY('2'); }
          if (m === 'log') { setX('1000'); setY('10'); }
          if (m === 'power') { setX('2'); setY('10'); }
          if (m === 'ln' || m === 'exp') setX('2');
        }}
        options={[
          { value: 'power', label: 'aⁿ' },
          { value: 'root', label: 'ⁿ√a' },
          { value: 'log', label: 'log_b' },
          { value: 'ln', label: 'ln' },
          { value: 'exp', label: 'exp' },
        ]}
      />
      <div className="text-ink-500">
        <Tex tex={f.tex} />
      </div>
      <ToolForm onSubmit={submit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label={f.x} value={x} onChange={setX} inputMode="decimal" hint="ex. 2, -3.5, 1/2, e, pi" />
          {f.y && <TextField label={f.y} value={y} onChange={setY} inputMode="decimal" />}
        </div>
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <Tex tex={`\\approx ${numberTex(result.value, 12)}`} display className="text-2xl" />
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
