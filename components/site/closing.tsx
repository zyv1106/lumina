import { ButtonLink, Eyebrow } from './primitives'
import { CitrusIcon, CornIcon, CupIcon, TileBorder } from './ornaments'
import { Reveal } from './reveal'

export function Closing() {
  return (
    <section aria-labelledby="closing-title" className="paper px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28">
      <TileBorder />
      <div className="relative py-16 md:py-24">
        <CupIcon className="absolute left-0 top-10 hidden size-16 text-terracotta/70 md:block lg:left-[6%]" />
        <CornIcon className="absolute bottom-10 left-[10%] hidden size-14 text-agave md:block" />
        <CitrusIcon className="absolute right-0 top-1/2 hidden size-16 -translate-y-1/2 text-marigold md:block lg:right-[6%]" />
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>See You in Fulshear</Eyebrow>
          <h2 id="closing-title" className="display mt-6 text-balance text-[2.25rem] sm:text-5xl lg:text-[4.5rem]">
            A little more flavor.
            <br />
            <em className="text-terracotta">A little more time together.</em>
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            Authentic Mexican flavor, a fresh modern spirit, and a warm welcome at La Balance Café Mexicana.
          </p>
          <ButtonLink href="#visit" className="mt-8">
            Plan Your Visit
          </ButtonLink>
        </Reveal>
      </div>
      <TileBorder />
    </section>
  )
}
