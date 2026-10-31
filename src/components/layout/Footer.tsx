import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Send,
  ShieldCheck,
  Twitter,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import { LogoMark } from '@/components/brand/Logo';
import { useI18n } from '@/hooks/useI18n';
import { levels } from '@/data/levels';
import { activeSocialLinks, type SocialNetwork } from '@/data/social';

const socialIcons: Record<SocialNetwork, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
  whatsapp: MessageCircle,
  telegram: Send,
  linkedin: Linkedin,
  x: Twitter,
  email: Mail,
};

export function Footer() {
  const { t, L } = useI18n();
  const year = new Date().getFullYear();

  const explore = [
    { to: '/lessons', label: t.nav.lessons },
    { to: '/exercises', label: t.nav.exercises },
    { to: '/exams', label: t.nav.exams },
    { to: '/exams-3ac', label: t.nav.exams3ac },
    { to: '/exams-bac', label: t.nav.examsBac },
    { to: '/game', label: t.nav.game },
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
            {activeSocialLinks.length > 0 && (
              <div className="mt-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                  {t.footer.follow}
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {activeSocialLinks.map((s) => {
                    const Icon = socialIcons[s.network];
                    return (
                      <li key={s.network}>
                        <a
                          href={s.url}
                          target={s.network === 'email' ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          title={s.label}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ink-200 transition hover:bg-saffron-400 hover:text-ink-950"
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
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
