import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

const pageTitles: Record<string, string> = {
  '/': 'Aethera — Digital havens for deep work',
  '/studio': 'Studio — Aethera',
  '/about': 'About — Aethera',
  '/journal': 'Journal — Aethera',
  '/reach-us': 'Reach Us — Aethera',
}

function getHashTargetId(hash: string) {
  try {
    return decodeURIComponent(hash.slice(1))
  } catch {
    return null
  }
}

export function RouteEffects() {
  const { pathname, hash, key } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page not found — Aethera'

    const animationFrameId = window.requestAnimationFrame(() => {
      const routeChanged = previousPathname.current !== pathname

      if (routeChanged) {
        document.getElementById('main-content')?.focus({ preventScroll: true })
      }

      if (hash) {
        const targetId = getHashTargetId(hash)
        const target = targetId ? document.getElementById(targetId) : null

        if (target) {
          const expandable = target?.querySelector<HTMLDetailsElement>(
            '[data-hash-expand]',
          )
          if (expandable) expandable.open = true
          target.scrollIntoView()
          target.focus({ preventScroll: true })
        } else if (routeChanged && window.scrollY !== 0) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      } else if (routeChanged && window.scrollY !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }

      previousPathname.current = pathname
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [hash, key, pathname])

  return null
}
