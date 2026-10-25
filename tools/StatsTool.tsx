import { useState } from 'react';
import { binomial, counting, describe, type StatsResult } from '@/services/math/statistics';
import { formatNumber, numberTex, type Step } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { Segmented } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, ResultBox, StepsList, TextField, ToolForm } from './ToolUI';

type Mode = 'data' | 'counting' | 'binomial';

function readInt(raw: string, name: string): number {
  const s = raw.trim();
  if (!/^\d{1,4}$/.test(s)) throw new MathError(`${name} يجب أن يكون عدداً صحيحاً طبيعياً.`, `${name} doit être un entier naturel.`);
  return Number(s);
}

function DataMode() {
  const { t } = useI18n();
  const [values, setValues] = useState('8 10 12 12 14 15 15 15 17 20');
  const [freqs, setFreqs] = useState('');
  const { result, error, run } = useCompute<StatsResult>();
  const u = t.tools.ui;
  const fmt = (x: number) => formatNumber(x, 8);

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => run(() => describe(values, freqs))}>
        <TextField label={u.data} value={values} onChange={setValues} placeholder="12 15 9 10.5" hint="12 15 9 10.5 — séparateur : espace ou virgule / الفاصل: مسافة أو فاصلة" />
        <TextField label={u.frequencies} value={freqs} onChange={setFreqs} placeholder="3 5 2 1" />
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3" dir="ltr">
              {[
                [u.count, result.N],
                [u.mean, result.mean],
                [u.median, result.median],
                [u.modeValue, result.modes.map(fmt).join(' ; ')],
                [u.variance, result.variance],
                [u.stdDev, result.std],
                [u.q1, result.q1],
                [u.q3, result.q3],
                [u.range, result.range],
                [u.min, result.min],
                [u.max, result.max],
                [u.sum, result.sum],
              ].map(([label, v]) => (
                <div key={label as string} className="rounded-lg bg-white p-2.5">
                  <dt className="text-xs text-ink-500">{label}</dt>
                  <dd className="font-mono font-semibold">{typeof v === 'number' ? fmt(v) : v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ink-100 bg-white" dir="ltr">
              <table className="w-full text-sm">
                <thead className="bg-ink-50">
                  <tr>
                    <th scope="col" className="px-3 py-2 text-start">{u.value} xᵢ</th>
                    <th scope="col" className="px-3 py-2 text-start">{u.frequency} nᵢ</th>
                    <th scope="col" className="px-3 py-2 text-start">Σ</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {result.rows.map((r) => (
                    <tr key={r.value} className="border-t border-ink-50">
                      <td className="px-3 py-1.5">{fmt(r.value)}</td>
                      <td className="px-3 py-1.5">{r.freq}</td>
                      <td className="px-3 py-1.5">{r.cumul}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}

function CountingMode({ withP }: { withP: boolean }) {
  const { t } = useI18n();
  const [n, setN] = useState('10');
  const [k, setK] = useState('3');
  const [p, setP] = useState('0.5');
  const { result, error, run } = useCompute<{ tex: string; steps: Step[] }>();

  const submit = () =>
    run(() => {
      const nn = readInt(n, 'n');
      const kk = readInt(k, 'k');
      if (withP) {
        const pv = Number(p.replace(',', '.'));
        if (!Number.isFinite(pv)) throw new MathError('قيمة p غير صالحة.', 'Valeur de p invalide.');
        const r = binomial(nn, kk, pv);
        return { tex: `P(X=${kk})\\approx${numberTex(r.prob, 8)}`, steps: r.steps };
      }
      const r = counting(nn, kk);
      const short = (b: bigint) => (b.toString().length > 30 ? numberTex(Number(b), 10) : b.toString());
      return {
        tex: `A_{${nn}}^{${kk}}=${short(r.arrangements)}\\qquad C_{${nn}}^{${kk}}=${short(r.combinations)}`,
        steps: r.steps,
      };
    });

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={submit}>
        <div className="grid grid-cols-3 gap-3">
          <TextField label="n" value={n} onChange={setN} inputMode="numeric" />
          <TextField label="k" value={k} onChange={setK} inputMode="numeric" />
          {withP && <TextField label="p" value={p} onChange={setP} inputMode="decimal" />}
        </div>
      </ToolForm>
      {!withP && <p className="text-xs text-ink-400">{t.tools.ui.probaMode}: n!, Aₙᵏ, Cₙᵏ</p>}
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <Tex tex={result.tex} display className="text-lg" />
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}

export default function StatsTool() {
  const { t } = useI18n();
  const [mode, setMode] = useState<Mode>('data');
  return (
    <div className="space-y-5">
      <Segmented
        label={t.tools.ui.mode}
        value={mode}
        onChange={setMode}
        options={[
          { value: 'data', label: t.tools.ui.dataMode },
          { value: 'counting', label: t.tools.ui.probaMode },
          { value: 'binomial', label: t.tools.ui.binomialMode },
        ]}
      />
      {mode === 'data' && <DataMode />}
      {mode === 'counting' && <CountingMode key="c" withP={false} />}
      {mode === 'binomial' && <CountingMode key="b" withP />}
    </div>
  );
}
