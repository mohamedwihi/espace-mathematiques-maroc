import { GraduationCap, School } from 'lucide-react';
import { levels } from '@/data/levels';
import { LevelCard } from '@/components/cards/Cards';
import { PageHeader } from '@/components/ui/PageHeader';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function LevelsPage() {
  const { t } = useI18n();
  usePageMeta(t.levels.metaTitle, t.levels.text);
  return (
    <>
      <PageHeader title={t.levels.title} text={t.levels.text} crumbs={[{ label: t.nav.levels }]} />
      <div className="container-page space-y-12 py-10">
        {[
          { title: t.home.college, cycle: 'college', Icon: School },
          { title: t.home.lycee, cycle: 'lycee', Icon: GraduationCap },
        ].map((g) => (
          <section key={g.cycle} aria-labelledby={`cycle-${g.cycle}`}>
            <h2 id={`cycle-${g.cycle}`} className="mb-5 flex items-center gap-2 text-xl font-bold">
              <g.Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {g.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {levels
                .filter((l) => l.cycle === g.cycle)
                .map((l) => (
                  <LevelCard key={l.id} level={l} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
