import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { LogoMark } from '@/components/brand/Logo';
import { useI18n } from '@/hooks/useI18n';
import { levels } from '@/data/levels';

export function Footer() {
  const { t, L } = useI18n();
  const year = new Date().getFullYear();

  const explore = [
    { to: '/lessons', label: t.nav.lessons },
    { to: '/exercises', label: t.nav.exercises },
    { to: '/exams', label: t.nav.exams },
    { to: '/tools', label: t.nav.tools },
    { to: '/search', label: t.nav.search },
  ];
  const platform = [
    { to: '/progress', label: t.nav.progress },
    { to: '/about', label: t.nav.about },
  ];

  return (
    <footer role="contentinfo" className="mt-20 bg-ink-950 text-ink-200">
      <div className="zellige-bg">
        <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark size={42} />
              <div>
                <p className="font-display font-bold text-white">{t.common.appName}</p>
                <p className="text-xs text-ink-400">{t.common.appNameAlt}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">{t.footer.tagline}</p>
          </div>

          <FooterCol title={t.footer.explore} links={explore} />
          <FooterCol
            title={t.footer.levels}
            links={levels.map((l) => ({ to: `/levels/${l.id}`, label: `${l.code} — ${L(l.name)}` }))}
          />
          <div>
            <FooterCol title={t.footer.platform} links={platform} />
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink-400">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {t.footer.localData}
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {t.common.appName} — {t.footer.rights}
            </p>
            <p>{t.common.notReviewed}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-ink-300 transition hover:text-saffron-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
