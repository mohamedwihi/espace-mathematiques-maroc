import { tools, type ToolCategory } from '@/data/tools';
import { ToolCard } from '@/components/cards/Cards';
import { PageHeader } from '@/components/ui/PageHeader';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

const CATEGORIES: ToolCategory[] = ['calc', 'algebra', 'analysis', 'geometry', 'stats'];

export default function ToolsPage() {
  const { t } = useI18n();
  usePageMeta(t.tools.metaTitle, t.tools.text);
  return (
    <>
      <PageHeader title={t.tools.title} text={t.tools.text} crumbs={[{ label: t.nav.tools }]} />
      <div className="container-page space-y-10 py-10">
        {CATEGORIES.map((cat) => (
          <section key={cat} aria-labelledby={`cat-${cat}`}>
            <h2 id={`cat-${cat}`} className="mb-4 text-lg font-bold">{t.tools.categories[cat]}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tools
                .filter((tool) => tool.category === cat)
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
