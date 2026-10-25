import type { ar } from './ar';

/** Remplace chaque chaîne littérale par `string` pour que les autres langues aient la même structure. */
type Widen<T> = T extends string ? string : T extends readonly (infer U)[] ? Widen<U>[] : { [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof ar>;
