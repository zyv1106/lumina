import Image from 'next/image'
import { Phone } from 'lucide-react'
import { business, bySortOrder, menuCategories, type MenuCategory } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ButtonLink, Eyebrow, SectionHeading } from './primitives'
import { CornIcon, CupIcon, ornamentIcons, PlateIcon, Sunburst } from './ornaments'
import { Reveal } from './reveal'

function MenuCard({ category, index }: { category: MenuCategory; index: number }) {
  const Icon = ornamentIcons[category.icon]
  const items = category.items.filter((i) => i.visible).sort(bySortOrder)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-masa">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image || '/placeholder.svg'}
          alt={category.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Menu Preview · {String(index + 2).padStart(2, '0')}
          </span>
          <Icon className="size-8 text-terracotta" />
        </div>
        <h3 className="mt-4 font-serif text-[1.75rem] leading-tight">{category.title}</h3>
        <p className="mt-2 text-pretty leading-relaxed text-ink-muted">{category.description}</p>

        {items.length > 0 && (
          <ul className="mt-5 divide-y divide-rule border-t border-rule">
            {items.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.description && <p className="text-sm text-ink-muted">{item.description}</p>}
                  {item.dietaryLabel && (
                    <span className="mt-1 inline-block rounded-full border border-agave px-2 text-[11px] text-agave">
                      {item.dietaryLabel}
                    </span>
                  )}
                </div>
                {item.price && <span className="font-medium tabular-nums">{item.price}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export function MenuPreview() {
  const categories = [...menuCategories].sort(bySortOrder)

  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="paper border-t border-rule px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28"
    >
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>Explore the Menu</Eyebrow>
          <SectionHeading className="mt-6">
            <span id="menu-title">
              Find your next
              <br />
              <em className="text-terracotta">favorite bite.</em>
            </span>
          </SectionHeading>
        </div>
        <div className="max-w-sm">
          <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
            {'Explore what’s on the menu at La Balance.'}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {business.menuUrl && (
              <ButtonLink href={business.menuUrl} target="_blank" rel="noopener noreferrer">
                View Full Menu
              </ButtonLink>
            )}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
        <Reveal className="h-full">
          <article className="on-dark relative flex h-full min-h-[26rem] flex-col justify-between overflow-hidden rounded-lg bg-cacao p-7 text-masa lg:min-h-[32rem]">
            <div
              aria-hidden="true"
              className="tile-grid pointer-events-none absolute inset-0 opacity-70"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">Menu Preview · 01</span>
                <Sunburst className="size-6 text-marigold" />
              </div>
              <h3 className="mt-8 font-serif text-4xl leading-[1.05]">
                Our menu will be shared <em className="text-clay">here soon.</em>
              </h3>
              <p className="mt-4 leading-relaxed text-masa/80">
                {'In the meantime, give us a call and we’ll be happy to tell you what’s cooking.'}
              </p>
            </div>
            <div className="relative mt-8">
              <div className="mb-6 flex gap-4 text-clay">
                <CupIcon className="size-9" />
                <CornIcon className="size-9" />
                <PlateIcon className="size-9" />
              </div>
              <a
                href={business.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-terracotta px-5 text-sm font-medium text-masa transition-colors hover:bg-terracotta-deep"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call for Menu Details
              </a>
            </div>
          </article>
        </Reveal>

        {categories.map((category, i) => (
          <Reveal key={category.title} delay={(i + 1) * 90} className={cn('h-full', i % 2 === 0 ? 'lg:mt-14' : 'lg:mt-6')}>
            <MenuCard category={category} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
