import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const pageTitles: Record<string, string> = {
  '/': 'Aethera — Digital havens for deep work',
  '/studio': 'Studio — Aethera',
  '/about': 'About — Aethera',
  '/journal': 'Journal — Aethera',
  '/reach-us': 'Reach Us — Aethera',
}

export function RouteEffects() {
  const { pathname, hash } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found — Aethera'

    const animationFrameId = window.requestAnimationFrame(() => {
      const routeChanged = previousPathname.current !== pathname

      if (routeChanged) {
        document.getElementById('main-content')?.focus({ preventScroll: true })
      }

      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      } else if (routeChanged && window.scrollY !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }

      previousPathname.current = pathname
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [hash, pathname])

  return null
}
