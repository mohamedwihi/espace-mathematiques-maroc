import { Link } from 'react-router-dom';
import { SearchBar } from '@/components/ui/SearchBar';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function NotFoundPage() {
  const { t } = useI18n();
  usePageMeta(t.notFound.metaTitle);
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-7xl font-bold text-brand-700" dir="ltr" aria-hidden="true">
        4<span className="text-saffron-500">0</span>4
      </p>
      <h1 className="mt-4 text-3xl font-bold">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-ink-500">{t.notFound.text}</p>
      <div className="mt-8 w-full max-w-lg">
        <SearchBar />
      </div>
      <Link to="/" className="btn-primary mt-6">
        {t.common.backHome}
      </Link>
    </div>
  );
}
