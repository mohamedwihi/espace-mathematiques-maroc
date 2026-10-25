import { Link } from 'react-router-dom';
import { useI18n } from '@/hooks/useI18n';

/** Emblème : étoile à huit branches (motif zellige) entourant π. */
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect width="64" height="64" rx="16" fill="#136754" />
      <g transform="translate(32 32)">
        <rect x="-17" y="-17" width="34" height="34" rx="3" fill="none" stroke="#fcb94d" strokeWidth="2.6" />
        <rect
          x="-17"
          y="-17"
          width="34"
          height="34"
          rx="3"
          fill="none"
          stroke="#fcb94d"
          strokeWidth="2.6"
          transform="rotate(45)"
        />
      </g>
      <text
        x="32"
        y="41.5"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="26"
        fontWeight="700"
        textAnchor="middle"
        fill="#ffffff"
      >
        π
      </text>
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <Link to="/" className="group flex items-center gap-3 rounded-xl" aria-label={t.common.appName}>
      <LogoMark size={compact ? 34 : 40} className="shrink-0 transition-transform duration-300 group-hover:rotate-[22.5deg]" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-bold text-ink-950 sm:text-base">{t.common.appName}</span>
        {!compact && <span className="text-[11px] font-medium text-ink-400">{t.common.appNameAlt}</span>}
      </span>
    </Link>
  );
}
