import { useEffect } from 'react'
import { useLocation } from 'react-router'

const pageTitles: Record<string, string> = {
  '/': 'Aethera — Digital havens for deep work',
  '/studio': 'Studio — Aethera',
  '/about': 'About — Aethera',
  '/journal': 'Journal — Aethera',
  '/reach-us': 'Reach Us — Aethera',
}

export function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found — Aethera'

    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname])

  return null
}
