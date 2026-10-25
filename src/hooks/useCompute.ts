import { useCallback, useState } from 'react';
import type { Localized } from '@/types';
import { errorMessage } from '@/services/math/engine';

/** Exécute un calcul et capture proprement les erreurs (messages localisés). */
export function useCompute<T>() {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<Localized | null>(null);

  const run = useCallback((fn: () => T) => {
    try {
      setResult(fn());
      setError(null);
    } catch (e) {
      setResult(null);
      setError(errorMessage(e));
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, error, run, reset };
}
