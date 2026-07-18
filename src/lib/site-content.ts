export const siteContent = {
  brand: 'Aethera',
  trademark: '®',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Studio', href: '/studio' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Reach Us', href: '/reach-us' },
  ],
  cta: {
    label: 'Begin Journey',
    href: '/reach-us',
  },
  email: 'hello@aethera.studio',
} as const

export type SiteNavigationItem = (typeof siteContent.navigation)[number]
