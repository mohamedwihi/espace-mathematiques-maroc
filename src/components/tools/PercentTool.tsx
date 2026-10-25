import { useState } from 'react';
import { percentCompute, type PercentMode } from '@/services/math/arithmetic';
import { evaluateInput, numberTex, type Step } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import type { Localized } from '@/types';
import { ErrorBox, ResultBox, StepsList, TextField, ToolForm } from './ToolUI';

const MODES: { id: PercentMode; name: Localized; fields: Localized[]; defaults: string[] }[] = [
  { id: 'percentOf', name: { ar: 'حساب نسبة مئوية من عدد', fr: "Calculer un pourcentage d'un nombre" }, fields: [{ ar: 'النسبة (%)', fr: 'Pourcentage (%)' }, { ar: 'العدد', fr: 'Nombre' }], defaults: ['15', '240'] },
  { id: 'whatPercent', name: { ar: 'ما النسبة المئوية؟', fr: 'Quel pourcentage ?' }, fields: [{ ar: 'الجزء', fr: 'Partie' }, { ar: 'الكل', fr: 'Total' }], defaults: ['18', '24'] },
  { id: 'increase', name: { ar: 'زيادة بنسبة مئوية', fr: "Augmentation d'un pourcentage" }, fields: [{ ar: 'القيمة الأولية', fr: 'Valeur initiale' }, { ar: 'نسبة الزيادة (%)', fr: 'Taux de hausse (%)' }], defaults: ['350', '20'] },
  { id: 'decrease', name: { ar: 'تخفيض بنسبة مئوية', fr: "Réduction d'un pourcentage" }, fields: [{ ar: 'القيمة الأولية', fr: 'Valeur initiale' }, { ar: 'نسبة التخفيض (%)', fr: 'Taux de baisse (%)' }], defaults: ['350', '30'] },
  { id: 'evolution', name: { ar: 'نسبة التطور', fr: "Taux d'évolution" }, fields: [{ ar: 'القيمة الأولية', fr: 'Valeur initiale' }, { ar: 'القيمة النهائية', fr: 'Valeur finale' }], defaults: ['80', '92'] },
  { id: 'fourth', name: { ar: 'الرابع المتناسب', fr: 'Quatrième proportionnelle' }, fields: [{ ar: 'a', fr: 'a' }, { ar: 'b', fr: 'b' }, { ar: 'c', fr: 'c' }], defaults: ['4', '10', '6'] },
];

export default function PercentTool() {
  const { t, L } = useI18n();
  const [modeId, setModeId] = useState<PercentMode>('percentOf');
  const mode = MODES.find((m) => m.id === modeId)!;
  const [vals, setVals] = useState<string[]>(mode.defaults);
  const { result, error, run, reset } = useCompute<{ value: number; unit: string; steps: Step[] }>();

  const submit = () =>
    run(() => {
      const nums = mode.fields.map((field, i) => {
        try {
          return evaluateInput(vals[i] ?? '');
        } catch {
          throw new MathError(`القيمة «${field.ar}» غير صالحة.`, `Valeur « ${field.fr} » invalide.`);
        }
      });
      return percentCompute(modeId, nums[0], nums[1], nums[2]);
    });

  return (
    <div className="space-y-5">
      <FilterSelect
        label={t.tools.ui.mode}
        value={modeId}
        onChange={(v) => {
          const m = MODES.find((x) => x.id === v)!;
          setModeId(m.id);
          setVals(m.defaults);
          reset();
        }}
        options={MODES.map((m) => ({ value: m.id, label: L(m.name) }))}
      />
      {modeId === 'fourth' && <Tex tex="\dfrac{a}{b}=\dfrac{c}{x}" display />}
      <ToolForm onSubmit={submit}>
        <div className={`grid gap-4 ${mode.fields.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {mode.fields.map((field, i) => (
            <TextField
              key={`${modeId}-${i}`}
              label={L(field)}
              value={vals[i] ?? ''}
              onChange={(v) => setVals((old) => old.map((o, k) => (k === i ? v : o)))}
              inputMode="decimal"
            />
          ))}
        </div>
      </ToolForm>
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            <Tex tex={`${numberTex(result.value, 10)}${result.unit === '%' ? '\\,\\%' : ''}`} display className="text-2xl" />
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
