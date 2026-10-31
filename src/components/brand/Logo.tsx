import { Link } from 'react-router-dom';
import { useI18n } from '@/hooks/useI18n';

/** Emblème : portrait « Prof Wihi Mohamed — Mathématique » dans un médaillon rond. */
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      decoding="async"
      className={`rounded-full bg-white object-cover ring-2 ring-brand-600/80 ${className}`}
    />
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <Link to="/" className="group flex items-center gap-3 rounded-xl" aria-label={t.common.appName}>
      <LogoMark size={compact ? 40 : 48} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-bold text-ink-950 sm:text-base">{t.common.appName}</span>
        {!compact && <span className="text-[11px] font-medium text-ink-400">{t.common.appNameAlt}</span>}
      </span>
    </Link>
  );
}
