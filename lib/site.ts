/**
 * Single source of truth for verified business details and CMS-style content.
 * Edit here to update every section of the page at once.
 */

export const business = {
  name: 'La Balance Café Mexicana',
  shortName: 'La Balance',
  descriptor: 'Café Mexicana',
  city: 'Fulshear, Texas',
  street: '8050 FM359',
  locality: 'Fulshear',
  region: 'TX',
  postalCode: '77441',
  phoneDisplay: '281-533-4060',
  phoneHref: 'tel:+12815334060',
  phoneE164: '+12815334060',
  hours: [
    { days: 'Tuesday–Friday', short: 'Tue–Fri', time: '7 am–8 pm' },
    { days: 'Saturday', short: 'Sat', time: '7 am–4 pm' },
    { days: 'Sunday', short: 'Sun', time: '8 am–4 pm' },
    { days: 'Monday', short: 'Mon', time: 'Closed' },
  ],
  /** Add a real profile URL to display a social link in the footer. */
  social: [] as { label: string; href: string }[],
  /** Add an approved menu URL to show a "View Full Menu" button. */
  menuUrl: '' as string,
} as const

export const fullAddress = `${business.street}, ${business.locality}, ${business.region} ${business.postalCode}`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${business.name}, ${fullAddress}`,
)}`

export const navLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
] as const

export type MenuItem = {
  name: string
  description?: string
  price?: string
  image?: string
  dietaryLabel?: string
  visible: boolean
  sortOrder: number
}

export type MenuCategory = {
  title: string
  description: string
  image: string
  imageAlt: string
  icon: 'cup' | 'corn' | 'plate' | 'citrus'
  sortOrder: number
  items: MenuItem[]
}

/**
 * Menu Categories collection. No verified menu has been supplied, so these
 * preview cards describe the brand's stated qualities rather than dishes.
 * Replace with approved categories and items when available.
 * Images are concept assets — replace with approved photography.
 */
export const menuCategories: MenuCategory[] = [
  {
    title: 'Authentic flavor',
    description: 'The vibrant flavors of Mexico, crafted with care and a dedication to quality.',
    image: '/images/menu-1.png',
    imageAlt: 'Concept image: dried chiles, limes, cilantro and onion on cream linen',
    icon: 'corn',
    sortOrder: 1,
    items: [],
  },
  {
    title: 'A fresh, modern twist',
    description: 'Familiar favorites approached with a fresh, contemporary spirit.',
    image: '/images/menu-2.png',
    imageAlt: 'Concept image: stacked ceramic plates beside a cup and cinnamon sticks',
    icon: 'plate',
    sortOrder: 2,
    items: [],
  },
  {
    title: 'Served with heart',
    description: 'Warm hospitality from the moment you walk through our doors.',
    image: '/images/menu-3.png',
    imageAlt: 'Concept image: halved oranges and lime slices beside a glass pitcher',
    icon: 'citrus',
    sortOrder: 3,
    items: [],
  },
]

export type GalleryImage = {
  image: string
  alt: string
  caption?: string
  sortOrder: number
}

/** Gallery collection. Concept assets — replace with approved photography. */
export const gallery: GalleryImage[] = [
  {
    image: '/images/gallery-1.png',
    alt: 'Friends reaching for shared plates around a sunlit table',
    caption: 'Around the table',
    sortOrder: 1,
  },
  {
    image: '/images/gallery-2.png',
    alt: 'A ceramic coffee cup and pastry on a sunny windowsill',
    caption: 'A little café time',
    sortOrder: 2,
  },
  {
    image: '/images/gallery-3.png',
    alt: 'A long wooden table set with terracotta plates for a group',
    caption: 'Made for gathering',
    sortOrder: 3,
  },
  {
    image: '/images/gallery-4.png',
    alt: 'Hands offering a ceramic cup across a café counter',
    caption: 'A warm welcome',
    sortOrder: 4,
  },
  {
    image: '/images/gallery-5.png',
    alt: 'Terracotta pottery and painted tile on a plaster shelf',
    caption: 'The little details',
    sortOrder: 5,
  },
]

export const bySortOrder = <T extends { sortOrder: number }>(a: T, b: T) => a.sortOrder - b.sortOrder
