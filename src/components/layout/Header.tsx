import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Languages, Menu, Search, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { useI18n } from '@/hooks/useI18n';

export function useNavItems() {
  const { t } = useI18n();
  return [
    { to: '/', label: t.nav.home, end: true },
    { to: '/levels', label: t.nav.levels },
    { to: '/lessons', label: t.nav.lessons },
    { to: '/exercises', label: t.nav.exercises },
    { to: '/exams', label: t.nav.exams },
    { to: '/tools', label: t.nav.tools },
    { to: '/progress', label: t.nav.progress },
  ];
}

function LangToggle({ className = '' }: { className?: string }) {
  const { t, toggleLang, lang } = useI18n();
  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`btn-secondary btn-sm gap-1.5 ${className}`}
      aria-label={t.nav.switchLangAria}
      lang={lang === 'ar' ? 'fr' : 'ar'}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {t.nav.switchLang}
    </button>
  );
}

export function Header() {
  const { t } = useI18n();
  const items = useNavItems();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition whitespace-nowrap ${
      isActive ? 'bg-brand-50 text-brand-800' : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
    }`;

  return (
    <header role="banner" className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Logo />

        <nav aria-label={t.nav.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/search" className="btn-ghost btn-sm h-10 w-10 p-0" aria-label={t.nav.search} title={t.nav.search}>
            <Search className="h-5 w-5" aria-hidden="true" />
          </Link>
          <LangToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            className="btn-ghost btn-sm h-10 w-10 p-0 xl:hidden"
            aria-label={t.common.menu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden">
          <div className="fixed inset-0 top-16 z-30 bg-ink-950/30" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav
            id="mobile-nav"
            aria-label={t.nav.mainNav}
            className="absolute inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-ink-100 bg-white shadow-lift animate-fade-up"
          >
            <ul className="container-page grid gap-1 py-4">
              {items.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} className={(s) => `${linkClass(s)} block py-3 text-base`}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/about" className={(s) => `${linkClass(s)} block py-3 text-base`}>
                  {t.nav.about}
                </NavLink>
              </li>
              <li className="pt-2 sm:hidden">
                <LangToggle className="w-full" />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
