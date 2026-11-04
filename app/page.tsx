import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Story } from '@/components/site/story'
import { MenuPreview } from '@/components/site/menu-preview'
import { Visit } from '@/components/site/visit'
import { Gallery } from '@/components/site/gallery'
import { Closing } from '@/components/site/closing'
import { Footer } from '@/components/site/footer'
import { business } from '@/lib/site'

const dayMap: Record<string, string[]> = {
  'Tuesday–Friday': ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  Saturday: ['Saturday'],
  Sunday: ['Sunday'],
}

const to24 = (t: string) => {
  const [h, period] = t.trim().split(' ')
  let hour = Number(h)
  if (period === 'pm' && hour !== 12) hour += 12
  return `${String(hour).padStart(2, '0')}:00`
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: business.name,
  servesCuisine: 'Mexican',
  telephone: business.phoneE164,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: 'US',
  },
  openingHoursSpecification: business.hours
    .filter((h) => h.time !== 'Closed')
    .map((h) => {
      const [opens, closes] = h.time.split('–')
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[h.days],
        opens: to24(opens),
        closes: to24(closes),
      }
    }),
}

export default function Page() {
  return (
    <div className="min-h-screen p-0 md:p-3 lg:p-5">
      <div className="mx-auto max-w-[1440px] overflow-clip bg-masa md:rounded-xl lg:rounded-2xl">
        <Header />
        <main>
          <Hero />
          <Story />
          <MenuPreview />
          <Visit />
          <Gallery />
          <Closing />
        </main>
        <Footer />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
