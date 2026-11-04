import { ArrowDown, ArrowRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Theme = 'light' | 'dark'

export function Eyebrow({ children, theme = 'light', className }: { children: ReactNode; theme?: Theme; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs',
        theme === 'light' ? 'border-cacao/40 text-cacao' : 'border-masa/40 text-masa',
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-terracotta" />
      {children}
    </p>
  )
}

export function SectionHeading({
  as: Tag = 'h2',
  children,
  className,
}: {
  as?: 'h1' | 'h2' | 'h3'
  children: ReactNode
  className?: string
}) {
  return <Tag className={cn('display text-balance text-[2.25rem] sm:text-5xl lg:text-[4.25rem]', className)}>{children}</Tag>
}

type ButtonVariant = 'primary' | 'secondary' | 'secondary-dark' | 'light'

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-terracotta text-masa hover:bg-terracotta-deep',
  secondary: 'border border-cacao text-cacao hover:bg-cacao hover:text-masa',
  'secondary-dark': 'border border-masa/60 text-masa hover:bg-masa hover:text-cacao',
  light: 'bg-masa text-cacao hover:bg-clay',
}

export function ButtonLink({
  variant = 'primary',
  className,
  children,
  icon = true,
  ...props
}: ComponentProps<'a'> & { variant?: ButtonVariant; icon?: boolean }) {
  return (
    <a
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium tracking-wide transition-colors duration-200',
        buttonStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon && <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </a>
  )
}

export function TextLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'inline-flex min-h-12 items-center gap-2 text-sm font-medium underline decoration-terracotta decoration-2 underline-offset-[6px] transition-colors hover:text-terracotta',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export function CircularCta({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        'group flex aspect-square flex-col items-center justify-center rounded-full bg-terracotta text-center text-masa shadow-[0_12px_30px_-12px_rgb(50_20_15/0.6)] ring-4 ring-masa transition-transform duration-300 hover:scale-[1.04] hover:bg-terracotta-deep',
        className,
      )}
    >
      <span className="font-serif text-lg leading-[1.05] sm:text-2xl">
        Come
        <br />
        <em>Say Hola</em>
      </span>
      <ArrowDown aria-hidden="true" className="mt-1.5 size-4 transition-transform duration-300 group-hover:translate-y-0.5 sm:size-5" />
    </a>
  )
}
