import { business, directionsUrl, fullAddress, navLinks } from '@/lib/site'
import { Sunburst } from './ornaments'
import { HoursList } from './visit'

export function Footer() {
  const year = new Date().getFullYear()
  const linkClass = 'inline-flex min-h-11 items-center transition-colors hover:text-clay'

  return (
    <footer className="on-dark bg-cacao px-5 pb-8 pt-16 text-masa sm:px-8 md:pt-24 lg:rounded-b-[inherit] lg:px-14">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">Visit</h2>
          <address className="mt-4 not-italic leading-relaxed text-masa/85">
            {business.street}
            <br />
            {business.locality}, {business.region} {business.postalCode}
          </address>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${fullAddress} (opens Google Maps in a new tab)`}
            className={`${linkClass} underline decoration-terracotta decoration-2 underline-offset-4`}
          >
            Get Directions
          </a>
        </div>
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">Call</h2>
          <a href={business.phoneHref} className={`${linkClass} mt-3 font-serif text-2xl`}>
            {business.phoneDisplay}
          </a>
        </div>
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">Hours</h2>
          <div className="mt-3 max-w-60 text-masa/85">
            <HoursList theme="dark" compact />
          </div>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-clay">Explore</h2>
          <ul className="mt-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {business.social.length > 0 && (
            <ul className="mt-2 flex gap-4">
              {business.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>

      <div className="mt-16 border-t border-masa/15 pt-10 md:mt-24">
        <a href="#home" aria-label="Back to top" className="block">
          <p
            aria-hidden="true"
            className="display whitespace-nowrap text-[clamp(3.5rem,17vw,15rem)] leading-[0.9] tracking-[-0.03em]"
          >
            La Balance<span className="text-terracotta">.</span>
          </p>
        </a>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-clay">
            <Sunburst className="size-4 text-terracotta" />
            Café Mexicana · Fulshear, Texas
          </p>
          <p className="text-sm text-masa/60">
            © {year} {business.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
