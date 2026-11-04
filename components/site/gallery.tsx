'use client'

import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { bySortOrder, gallery } from '@/lib/site'
import { Eyebrow, SectionHeading } from './primitives'

const rotations = [-3, 2.5, -2, 4, -3.5, 2]

export function Gallery() {
  const items = [...gallery].sort(bySortOrder)
  const scroller = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const update = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  const controlClass =
    'inline-flex size-12 items-center justify-center rounded-full border border-masa/40 text-masa transition-colors hover:bg-masa hover:text-cacao disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-masa'

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="on-dark relative overflow-hidden bg-cacao text-masa">
      <div aria-hidden="true" className="tile-grid pointer-events-none absolute inset-0" />
      <div className="relative px-5 pt-16 sm:px-8 md:pt-24 lg:px-14 lg:pt-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow theme="dark">A Little Flavor, A Little Feeling</Eyebrow>
            <SectionHeading className="mt-6">
              <span id="gallery-title">
                Good food.
                <br />
                <em className="text-clay">Warm moments.</em>
              </span>
            </SectionHeading>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => scrollBy(-1)} disabled={edges.start} className={controlClass}>
              <ArrowLeft aria-hidden="true" className="size-5" />
              <span className="sr-only">Previous photos</span>
            </button>
            <button type="button" onClick={() => scrollBy(1)} disabled={edges.end} className={controlClass}>
              <ArrowRight aria-hidden="true" className="size-5" />
              <span className="sr-only">Next photos</span>
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={scroller}
        onScroll={update}
        aria-label="Photo gallery"
        className="no-scrollbar relative flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-px-5 px-5 pb-20 pt-12 sm:scroll-px-8 sm:px-8 md:pb-28 lg:scroll-px-14 lg:px-14 lg:pb-32"
      >
        {items.map((item, i) => (
          <li
            key={item.image}
            className="w-[78%] shrink-0 snap-start pr-2 sm:w-[46%] lg:w-[30%] [&:not(:first-child)]:-ml-3 sm:[&:not(:first-child)]:-ml-6"
          >
            <figure
              className="group rounded-sm bg-masa p-2.5 pb-4 text-cacao shadow-[0_24px_40px_-20px_rgb(0_0_0/0.7)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-3.5 sm:pb-5"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover"
                />
              </div>
              {item.caption && (
                <figcaption className="mt-3 text-center font-serif text-lg italic sm:text-xl">{item.caption}</figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
