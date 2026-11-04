import Image from 'next/image'
import { Clock, MapPin, Phone } from 'lucide-react'
import { business, directionsUrl } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ButtonLink, Eyebrow, SectionHeading } from './primitives'
import { TileBorder } from './ornaments'
import { Reveal } from './reveal'

export function HoursList({ theme = 'light', compact = false }: { theme?: 'light' | 'dark'; compact?: boolean }) {
  return (
    <dl className={cn('divide-y', theme === 'light' ? 'divide-rule' : 'divide-masa/15')}>
      {business.hours.map((h) => (
        <div key={h.days} className={cn('flex items-baseline justify-between gap-4', compact ? 'py-1.5' : 'py-3')}>
          <dt className={cn(compact ? 'text-sm' : 'font-medium')}>{compact ? h.short : h.days}</dt>
          <dd
            className={cn(
              'tabular-nums',
              compact && 'text-sm',
              h.time === 'Closed' && (theme === 'light' ? 'text-ink-muted' : 'text-masa/60'),
            )}
          >
            {h.time}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function ContactBlock({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const muted = theme === 'light' ? 'text-ink-muted' : 'text-masa/70'
  return (
    <address className="not-italic">
      <p className="font-serif text-2xl">{business.name}</p>
      <p className={cn('mt-2 leading-relaxed', muted)}>
        {business.street}
        <br />
        {business.locality}, {business.region} {business.postalCode}
      </p>
      <a
        href={business.phoneHref}
        className="mt-2 inline-flex min-h-11 items-center font-medium underline decoration-terracotta decoration-2 underline-offset-4 hover:text-terracotta"
      >
        {business.phoneDisplay}
      </a>
    </address>
  )
}

export function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="paper border-t border-rule bg-clay/40 px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col">
          <Eyebrow>Come Say Hello</Eyebrow>
          <SectionHeading className="mt-6">
            <span id="visit-title">
              Your table.
              <br />
              Your people.
              <br />
              <em className="text-terracotta">Your next visit.</em>
            </span>
          </SectionHeading>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            Find us in Fulshear and make a little time for something delicious.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary" icon={false}>
              <Phone aria-hidden="true" className="size-4" />
              Call the Café
            </ButtonLink>
          </div>
          <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-lg lg:block">
            <Image
              src="/images/visit.png"
              alt="Concept image: a sunlit café doorway with terracotta planters"
              fill
              sizes="45vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pt-24">
          <div className="overflow-hidden rounded-lg border border-rule bg-masa shadow-[0_24px_50px_-30px_rgb(50_20_15/0.5)]">
            <TileBorder className="border-b border-rule bg-masa py-3" />
            <div className="grid gap-8 p-6 sm:p-9">
              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-terracotta" />
                <ContactBlock />
              </div>
              <div className="flex gap-4 border-t border-rule pt-8">
                <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-terracotta" />
                <div className="flex-1">
                  <h3 className="font-serif text-2xl">Hours</h3>
                  <div className="mt-3">
                    <HoursList />
                  </div>
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-cacao px-5 text-sm font-medium transition-colors hover:bg-cacao hover:text-masa"
              >
                Open in Google Maps
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
