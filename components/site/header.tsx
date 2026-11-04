'use client'

import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business, navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'

function Wordmark({ align = 'center' }: { align?: 'center' | 'left' }) {
  return (
    <a
      href="#home"
      aria-label={`${business.name} — back to top`}
      className={cn('flex min-h-11 flex-col justify-center leading-none', align === 'center' ? 'items-center' : 'items-start')}
    >
      <span className="font-serif text-[1.65rem] tracking-tight sm:text-3xl">
        La Balance<span className="text-terracotta">.</span>
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-ink-muted">{business.descriptor}</span>
    </a>
  )
}

const linkClass =
  'flex min-h-11 items-center px-5 text-sm font-medium transition-colors hover:text-terracotta xl:px-7'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const [left, right] = [navLinks.slice(0, 2), navLinks.slice(2)]

  return (
    <header
      className={cn(
        'paper sticky top-0 z-40 border-b border-rule bg-masa/95 backdrop-blur transition-shadow lg:rounded-t-[inherit]',
        scrolled && 'shadow-[0_8px_24px_-18px_rgb(50_20_15/0.6)]',
      )}
    >
      <div className={cn('hidden grid-cols-[1fr_auto_1fr] items-stretch lg:grid', scrolled ? 'h-16' : 'h-20', 'transition-[height]')}>
        <nav aria-label="Primary" className="flex items-stretch">
          {left.map((l) => (
            <a key={l.href} href={l.href} className={cn(linkClass, 'border-r border-rule')}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center border-x border-rule px-12">
          <Wordmark />
        </div>
        <nav aria-label="Secondary" className="flex items-stretch justify-end">
          {right.map((l) => (
            <a key={l.href} href={l.href} className={cn(linkClass, 'border-l border-rule')}>
              {l.label}
            </a>
          ))}
          <div className="flex items-center border-l border-rule px-5">
            <a
              href={business.phoneHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-terracotta px-4 text-sm font-medium text-masa transition-colors hover:bg-terracotta-deep"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call Us
            </a>
          </div>
        </nav>
      </div>

      <div className="flex h-16 items-center justify-between px-5 sm:px-8 lg:hidden">
        <Wordmark align="left" />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex size-11 items-center justify-center rounded-md border border-rule"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-rule bg-masa px-5 pb-6 pt-2 sm:px-8 lg:hidden"
      >
        <ul className="divide-y divide-rule">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center font-serif text-2xl transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={business.phoneHref}
          className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md bg-terracotta px-5 font-medium text-masa"
        >
          <Phone aria-hidden="true" className="size-4" />
          Call {business.phoneDisplay}
        </a>
      </nav>
    </header>
  )
}
