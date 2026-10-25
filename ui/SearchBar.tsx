import { useId, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function SearchBar({
  initial = '',
  onSearch,
  size = 'md',
  autoFocus = false,
}: {
  initial?: string;
  onSearch?: (q: string) => void;
  size?: 'md' | 'lg';
  autoFocus?: boolean;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [q, setQ] = useState(initial);
  const id = useId();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim().slice(0, 100);
    if (onSearch) onSearch(query);
    else navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form role="search" onSubmit={submit} className="relative w-full">
      <label htmlFor={id} className="sr-only">
        {t.common.search}
      </label>
      <Search className={`pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-ink-400 ${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`} aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder={t.common.searchPlaceholder}
        autoFocus={autoFocus}
        maxLength={100}
        className={`field ps-11 pe-28 shadow-sm ${size === 'lg' ? 'min-h-[56px] rounded-2xl text-base' : ''}`}
      />
      <button type="submit" className={`btn-primary absolute end-1.5 top-1/2 -translate-y-1/2 ${size === 'lg' ? 'min-h-[44px]' : 'min-h-[34px] py-1.5'}`}>
        {t.common.search}
      </button>
    </form>
  );
}
