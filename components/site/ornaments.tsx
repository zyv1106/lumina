import { cn } from '@/lib/utils'

type OrnamentProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function CupIcon({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g {...stroke}>
        <path d="M9 18h24v9a12 12 0 0 1-24 0z" />
        <path d="M33 21h3a5 5 0 0 1 0 10h-4" />
        <path d="M6 42h30" />
        <path d="M16 6c-2 3 2 5 0 8M22 5c-2 3 2 5 0 8M28 6c-2 3 2 5 0 8" />
        <path d="M13 24h16" strokeDasharray="1 3" />
      </g>
    </svg>
  )
}

export function CornIcon({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g {...stroke}>
        <path d="M24 6c5 5 6 14 4 24-1 5-3 9-4 12-1-3-3-7-4-12-2-10-1-19 4-24z" />
        <path d="M24 10v30M20 16h8M19 22h10M19 28h10M21 34h6" />
        <path d="M20 40C12 36 8 28 9 18c5 4 9 10 11 16" />
        <path d="M28 40c8-4 12-12 11-22-5 4-9 10-11 16" />
      </g>
    </svg>
  )
}

export function PlateIcon({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g {...stroke}>
        <circle cx="24" cy="24" r="17" />
        <circle cx="24" cy="24" r="11" />
        <path d="M24 7v3M24 38v3M7 24h3M38 24h3M12 12l2 2M34 34l2 2M12 36l2-2M34 14l2-2" />
      </g>
    </svg>
  )
}

export function CitrusIcon({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g {...stroke}>
        <circle cx="24" cy="24" r="17" />
        <circle cx="24" cy="24" r="14" />
        <path d="M24 10v28M10 24h28M14 14l20 20M34 14 14 34" />
        <circle cx="24" cy="24" r="2" />
      </g>
    </svg>
  )
}

export const ornamentIcons = {
  cup: CupIcon,
  corn: CornIcon,
  plate: PlateIcon,
  citrus: CitrusIcon,
}

export function Sunburst({ className }: OrnamentProps) {
  const rays = Array.from({ length: 16 }, (_, i) => i * 22.5)
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g fill="currentColor">
        {rays.map((deg) => (
          <path key={deg} d="M24 2 26 14H22z" transform={`rotate(${deg} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="8" />
      </g>
    </svg>
  )
}

export function Seal({ className, label = 'Fulshear, Texas' }: OrnamentProps & { label?: string }) {
  const text = `${label} · ${label} · `.toUpperCase()
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <path id="seal-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
      </defs>
      <circle cx="60" cy="60" r="58" fill="var(--color-terracotta)" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="var(--color-masa)" strokeWidth="0.8" />
      <text fill="var(--color-masa)" fontSize="10.5" letterSpacing="2.2" fontFamily="var(--font-dm-sans)">
        <textPath href="#seal-circle">{text}</textPath>
      </text>
      <g transform="translate(42 42) scale(0.75)" fill="var(--color-marigold)">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d="M24 4 25.6 15H22.4z" transform={`rotate(${i * 30} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="6" />
      </g>
    </svg>
  )
}

/** Thin repeating stepped-tile border strip. */
export function TileBorder({ className }: OrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('h-4 w-full text-terracotta', className)}
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16'><g fill='none' stroke='%23b8422b' stroke-width='1.2'><path d='M0 8h4l4-6 4 6h8l4-6 4 6h4'/><path d='M8 14v-2M24 14v-2' stroke='%23d7a33f'/><circle cx='16' cy='8' r='1.6' fill='%235a6750' stroke='none'/></g></svg>")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
      }}
    />
  )
}

export function TileCorner({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 62V2h60" />
        <path d="M8 62V8h54" />
        <path d="M14 14l8 8M22 14l-8 8" />
        <rect x="12" y="12" width="12" height="12" />
        <path d="M32 2v6M44 2v6M2 32h6M2 44h6" />
      </g>
    </svg>
  )
}

/** Restrained stepped divider. */
export function StepDivider({ className }: OrnamentProps) {
  return (
    <svg viewBox="0 0 240 16" aria-hidden="true" focusable="false" className={cn('h-4 w-60', className)}>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M0 12h88l6-6 6 6 6-6h28l6 6 6-6 6 6h88" />
        <circle cx="120" cy="6" r="2.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}
