import { useState } from 'react';
import { gcdLcm, parseIntegerList } from '@/services/math/arithmetic';
import type { Step } from '@/services/math/engine';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, StepsList, TextField, ToolForm } from './ToolUI';

export default function GcdTool() {
  const { t } = useI18n();
  const [raw, setRaw] = useState('84, 120');
  const { result, error, run } = useCompute<{ pgcd: number; ppcm: number; steps: Step[] }>();
  const submit = () => run(() => gcdLcm(parseIntegerList(raw)));

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={submit}>
        <TextField label={t.tools.ui.numbers} value={raw} onChange={setRaw} placeholder="84, 120, 36" invalid={!!error} />
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <dl className="grid gap-3 sm:grid-cols-2" dir="ltr">
              <div className="rounded-xl bg-white p-3 text-center">
                <dt className="text-xs font-bold text-ink-500">PGCD</dt>
                <dd className="font-mono text-2xl font-semibold">{result.pgcd}</dd>
              </div>
              <div className="rounded-xl bg-white p-3 text-center">
                <dt className="text-xs font-bold text-ink-500">PPCM</dt>
                <dd className="break-all font-mono text-2xl font-semibold">{result.ppcm}</dd>
              </div>
            </dl>
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
