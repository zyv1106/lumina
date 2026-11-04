import Image from 'next/image'
import { ButtonLink, Eyebrow, SectionHeading } from './primitives'
import { Seal, StepDivider, TileCorner } from './ornaments'
import { Reveal } from './reveal'

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="paper px-5 py-16 sm:px-8 md:py-24 lg:px-14 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow>A Little About La Balance</Eyebrow>
          <SectionHeading className="mt-6" >
            <span id="story-title">
              A warm welcome.
              <br />
              <em className="text-terracotta">A vibrant taste of Mexico.</em>
            </span>
          </SectionHeading>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            In the heart of Fulshear, La Balance Café Mexicana brings together authentic Mexican flavor, a fresh modern
            spirit, and hospitality that makes you feel welcome.
          </p>
          <StepDivider className="mt-8 text-rule" />
          <p className="mt-6 font-serif text-2xl italic">Come for the flavor. Stay for the feeling.</p>
          <ButtonLink href="#visit" variant="secondary" className="mt-8">
            Come Say Hello
          </ButtonLink>
        </Reveal>

        <Reveal className="relative lg:col-span-7" delay={120}>
          <div className="relative ml-auto w-[82%] lg:w-[78%]">
            <TileCorner className="absolute -right-3 -top-3 size-14 text-agave sm:-right-5 sm:-top-5 sm:size-16" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/story-large.png"
                alt="Concept image: a cozy café corner with plaster walls, terracotta pottery and woven chairs"
                fill
                sizes="(min-width: 1024px) 45vw, 82vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 left-0 w-[46%] rotate-[-3deg] rounded-md bg-masa p-2 shadow-[0_20px_40px_-20px_rgb(50_20_15/0.6)] sm:p-3 lg:w-[40%]">
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src="/images/story-small.png"
                alt="Concept image: coffee poured from a clay pot into a terracotta cup"
                fill
                sizes="(min-width: 1024px) 22vw, 46vw"
                className="object-cover"
              />
            </div>
          </div>
          <Seal className="absolute left-[6%] top-[6%] size-20 sm:size-28 lg:left-[10%]" />
        </Reveal>
      </div>
    </section>
  )
}
