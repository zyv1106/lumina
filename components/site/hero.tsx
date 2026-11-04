import Image from 'next/image'
import { ButtonLink, CircularCta, Eyebrow, TextLink } from './primitives'
import { Sunburst } from './ornaments'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="paper">
      <div className="px-5 pb-20 pt-12 sm:px-8 sm:pb-24 md:pt-16 lg:px-14 lg:pb-28 lg:pt-20">
        <Eyebrow>Fulshear, Texas · Café Mexicana</Eyebrow>
        <h1
          id="hero-title"
          className="display mt-6 text-[clamp(2.75rem,11vw,4rem)] sm:text-[clamp(4.25rem,10vw,5.5rem)] lg:text-[clamp(6rem,8.6vw,8rem)]"
        >
          Authentic Mexican Flavor,
          <br />
          <em className="text-terracotta">Served with Heart.</em>
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            A fresh, modern take on the flavors of Mexico, with a warm welcome right here in Fulshear.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:mr-[18%] lg:mr-[22%]">
            <ButtonLink href="#menu">Explore the Menu</ButtonLink>
            <TextLink href="#visit">Plan Your Visit</TextLink>
          </div>
        </div>
      </div>

      <div className="relative px-0 sm:px-8 lg:px-14">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/8] sm:rounded-lg lg:aspect-[16/7]">
          <Image
            src="/images/hero.png"
            alt="Concept image: sunlit café table with terracotta plates, cups, limes and fresh herbs"
            fill
            priority
            sizes="(min-width: 1440px) 1330px, 100vw"
            className="object-cover object-[50%_60%]"
          />
        </div>
        <CircularCta
          href="#visit"
          className="absolute right-5 top-0 w-28 -translate-y-1/2 sm:right-14 sm:w-36 lg:right-[12%] lg:w-44"
        />
        <Sunburst className="absolute left-8 top-0 hidden size-7 -translate-y-1/2 text-marigold sm:block lg:left-16" />
      </div>
    </section>
  )
}
