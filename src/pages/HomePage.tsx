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
          {/* Théorème d’Al-Kashi : triangle ABC, côtés a = BC, b = CA, c = AB et angle Â */}
          <polygon points="60,160 270,160 140,45" fill="#178166" fillOpacity="0.08" stroke="#28355d" strokeWidth="2" strokeLinejoin="round" />
          <line x1="140" y1="45" x2="270" y2="160" stroke="#178166" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="140" y1="45" x2="140" y2="160" stroke="#28355d" strokeWidth="1.3" strokeDasharray="5 4" />
          <path d="M 140 150 L 150 150 L 150 160" fill="none" stroke="#28355d" strokeWidth="1.2" />
          <path d="M 92 160 A 32 32 0 0 0 78.3 133.7" fill="none" stroke="#f57c0b" strokeWidth="2.5" strokeLinecap="round" />
          <g fill="#1a223d">
            <circle cx="60" cy="160" r="3.5" />
            <circle cx="270" cy="160" r="3.5" />
            <circle cx="140" cy="45" r="3.5" />
          </g>
          <g fontFamily="'Times New Roman', Georgia, serif" fontStyle="italic" fontSize="17" fill="#1a223d">
            <text x="44" y="178">A</text>
            <text x="274" y="178">B</text>
            <text x="134" y="34">C</text>
            <text x="143" y="181" fill="#28355d">H</text>
          </g>
          <g fontFamily="'Times New Roman', Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="18">
            <text x="204" y="186" fill="#28355d">c</text>
            <text x="82" y="100" fill="#28355d">b</text>
            <text x="214" y="96" fill="#178166">a</text>
            <text x="104" y="149" fill="#f57c0b" fontSize="15">Â</text>
          </g>
        </svg>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-xl bg-brand-50 px-3 py-2"><Tex tex="a^2=b^2+c^2-2bc\cos\hat A" /></div>
          <div className="rounded-xl bg-ink-50 px-3 py-2"><Tex tex="\cos\hat A=\tfrac{b^2+c^2-a^2}{2bc}" /></div>
        </div>
      </div>
      <div className="absolute -bottom-5 -start-4 hidden rounded-2xl border border-ink-100 bg-white px-4 py-2.5 shadow-card sm:block">
        <Tex tex="\hat A=90^\circ\Rightarrow a^2=b^2+c^2" />
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
