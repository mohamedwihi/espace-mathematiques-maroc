import { useState } from 'react';
import { derivativeOf, type DerivativeResult } from '@/services/math/calculus';
import { evaluateInput, numberTex } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, StepsList, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function DerivativeTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [fx, setFx] = useState('x^3 - 3x + 1');
  const [at, setAt] = useState('');
  const { result, error, run } = useCompute<DerivativeResult>();

  const submit = (f = fx) =>
    run(() => {
      let x: number | undefined;
      if (at.trim()) {
        try {
          x = evaluateInput(at);
        } catch {
          throw new MathError('قيمة x غير صالحة.', 'Valeur de x invalide.');
        }
      }
      return derivativeOf(f, x);
    });

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
          <TextField label={t.tools.ui.function} value={fx} onChange={setFx} invalid={!!error} />
          <TextField label={t.tools.ui.valueAt} value={at} onChange={setAt} placeholder="2" inputMode="decimal" />
        </div>
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setFx(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox label={t.tools.ui.derivative}>
            <Tex tex={`f(x)=${result.fTex}`} display className="text-ink-500" />
            <Tex tex={`f'(x)=${result.dTex}`} display className="text-xl" />
            {result.valueAt && (
              <Tex tex={`f'(${numberTex(result.valueAt.x)})=${numberTex(result.valueAt.value, 10)}`} display />
            )}
          </ResultBox>
          <StepsList steps={result.rules} title={t.tools.ui.rules} />
        </>
      )}
    </div>
  );
}
