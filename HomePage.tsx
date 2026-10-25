import { Link } from 'react-router-dom';
import { CheckCircle2, ClipboardList, FlaskConical, GraduationCap, PenLine, School } from 'lucide-react';
import { levels } from '@/data/levels';
import { lessons } from '@/data/lessons';
import { tools } from '@/data/tools';
import { contentStats } from '@/services/content';
import { Arrow, LessonCard, LevelCard, ToolCard } from '@/components/cards/Cards';
import { SearchBar } from '@/components/ui/SearchBar';
import { Tex } from '@/components/math/Tex';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-200/40 via-transparent to-saffron-200/40 blur-2xl" />
      <div className="relative rounded-3xl border border-ink-100 bg-white p-5 shadow-lift">
        <svg viewBox="0 0 320 200" className="w-full" role="presentation">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e4eaf5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="320" height="200" fill="url(#grid)" rx="12" />
          <line x1="0" y1="140" x2="320" y2="140" stroke="#28355d" strokeWidth="1.5" />
          <line x1="120" y1="0" x2="120" y2="200" stroke="#28355d" strokeWidth="1.5" />
          <path d="M 40 10 Q 140 330 240 10" fill="none" stroke="#178166" strokeWidth="3" strokeLinecap="round" />
          <path d="M 20 175 L 300 35" fill="none" stroke="#f57c0b" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
          <circle cx="80" cy="140" r="4.5" fill="#1a223d" />
          <circle cx="200" cy="140" r="4.5" fill="#1a223d" />
        </svg>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-xl bg-ink-50 px-3 py-2"><Tex tex="\Delta=b^2-4ac" /></div>
          <div className="rounded-xl bg-brand-50 px-3 py-2"><Tex tex="f'(a)=\lim_{h\to0}\tfrac{f(a+h)-f(a)}{h}" /></div>
        </div>
      </div>
      <div className="absolute -bottom-5 -start-4 hidden rounded-2xl border border-ink-100 bg-white px-4 py-2.5 shadow-card sm:block">
        <Tex tex="\int_0^1 x^2\,dx=\tfrac13" />
      </div>
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();
  usePageMeta(t.home.metaTitle, t.meta.defaultDescription);
  const featured = lessons.filter((l) => l.featured).slice(0, 4);
  const college = levels.filter((l) => l.cycle === 'college');
  const lycee = levels.filter((l) => l.cycle === 'lycee');

  const stats = [
    { n: contentStats.lessons, label: t.home.statLessons },
    { n: contentStats.exercises, label: t.home.statExercises },
    { n: contentStats.tools, label: t.home.statTools },
    { n: contentStats.levels, label: t.home.statLevels },
  ];

  return (
    <>
      {/* Accueil */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,160,126,0.10),transparent_55%)]" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-fade-up">
            <p className="chip bg-brand-50 px-3 py-1 text-brand-800">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
              {t.home.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
              {t.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">{t.home.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/lessons" className="btn-primary px-6 text-base">
                {t.home.discoverLessons}
                <Arrow />
              </Link>
              <Link to="/exercises" className="btn-secondary px-6 text-base">
                <PenLine className="h-4 w-4" aria-hidden="true" />
                {t.home.practice}
              </Link>
            </div>
            <div className="mt-8 max-w-xl">
              <SearchBar />
            </div>
          </div>
          <HeroIllustration />
        </div>
        <div className="container-page relative pb-10">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink-100 bg-white/80 px-4 py-3">
                <dt className="text-xs text-ink-500">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-ink-950">{s.n}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Niveaux */}
      <section className="container-page py-16" aria-labelledby="levels-title">
        <div className="max-w-2xl">
          <h2 id="levels-title" className="section-title">{t.home.levelsTitle}</h2>
          <p className="mt-2 text-ink-500">{t.home.levelsText}</p>
        </div>
        {[
          { title: t.home.college, items: college, Icon: School },
          { title: t.home.lycee, items: lycee, Icon: GraduationCap },
        ].map((group) => (
          <div key={group.title} className="mt-8">
            <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink-600">
              <group.Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {group.title}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((level) => (
                <LevelCard key={level.id} level={level} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Cours à la une */}
      <section className="border-y border-ink-100 bg-white py-16" aria-labelledby="featured-title">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="featured-title" className="section-title">{t.home.featuredTitle}</h2>
              <p className="mt-2 text-ink-500">{t.home.featuredText}</p>
            </div>
            <Link to="/lessons" className="btn-ghost">
              {t.common.seeAll}
              <Arrow />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((l) => (
              <LessonCard key={l.id} lesson={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Exercices + Examens */}
      <section className="container-page grid gap-6 py-16 lg:grid-cols-2">
        <div className="card relative overflow-hidden p-6 sm:p-8">
          <PenLine className="absolute -end-4 -top-4 h-28 w-28 text-brand-50" aria-hidden="true" />
          <h2 className="relative text-2xl font-bold">{t.home.exTitle}</h2>
          <p className="relative mt-3 text-ink-500">{t.home.exText}</p>
          <ul className="relative mt-5 space-y-2.5">
            {t.home.exPoints.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Link to="/exercises" className="btn-primary relative mt-6">
            {t.home.exCta}
            <Arrow />
          </Link>
        </div>
        <div className="card relative overflow-hidden bg-ink-950 p-6 text-white sm:p-8">
          <div className="zellige-bg absolute inset-0" aria-hidden="true" />
          <ClipboardList className="absolute -end-4 -top-4 h-28 w-28 text-white/5" aria-hidden="true" />
          <h2 className="relative text-2xl font-bold text-white">{t.home.examsTitle}</h2>
          <p className="relative mt-3 text-ink-200">{t.home.examsText}</p>
          <div className="relative mt-5 flex flex-wrap gap-2">
            {(['continuous', 'local', 'regional', 'national', 'practice'] as const).map((k) => (
              <span key={k} className="chip bg-white/10 text-ink-100">{t.exams.kinds[k]}</span>
            ))}
          </div>
          <Link to="/exams" className="btn-accent relative mt-6">
            {t.home.examsCta}
            <Arrow />
          </Link>
        </div>
      </section>

      {/* Outils */}
      <section className="border-t border-ink-100 bg-white py-16" aria-labelledby="tools-title">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="tools-title" className="section-title">{t.home.toolsTitle}</h2>
              <p className="mt-2 text-ink-500">{t.home.toolsText}</p>
            </div>
            <Link to="/tools" className="btn-ghost">
              {t.home.toolsCta}
              <Arrow />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 9).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Recherche + transparence */}
      <section className="container-page grid gap-6 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-bold">{t.home.searchTitle}</h2>
          <p className="mt-2 text-ink-500">{t.home.searchText}</p>
          <div className="mt-5">
            <SearchBar size="lg" />
          </div>
        </div>
        <div className="card border-saffron-200 bg-saffron-50/60 p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FlaskConical className="h-5 w-5 text-saffron-700" aria-hidden="true" />
            {t.home.honestyTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">{t.home.honestyText}</p>
          <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saffron-800 hover:underline">
            {t.nav.about}
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
