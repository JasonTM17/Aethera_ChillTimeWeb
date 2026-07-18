import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'

import { siteContent } from '../lib/site-content'

export function MobileNav() {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const [openPathname, setOpenPathname] = useState<string | null>(null)
  const isOpen = openPathname === location.pathname

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPathname(null)
        triggerRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const links = panelRef.current?.querySelectorAll<HTMLElement>('a[href]')

      if (!links?.length) {
        return
      }

      const firstLink = links[0]
      const lastLink = links[links.length - 1]

      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault()
        lastLink.focus()
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault()
        firstLink.focus()
      }
    }

    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus()
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const closeMenu = (restoreFocus = false) => {
    setOpenPathname(null)
    if (restoreFocus) triggerRef.current?.focus()
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="relative z-30 grid size-11 cursor-pointer place-items-center rounded-full border border-black/10 bg-white/65 backdrop-blur-md transition-colors duration-200 hover:bg-white lg:hidden"
        onClick={() =>
          setOpenPathname((current) =>
            current === location.pathname ? null : location.pathname,
          )
        }
      >
        <span className="sr-only">Toggle navigation</span>
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d={isOpen ? 'M3 3l10 10M13 3L3 13' : 'M2 5h12M2 11h12'}
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
        </svg>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-20 bg-white/25 backdrop-blur-[2px] lg:hidden"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              closeMenu(true)
            }
          }}
        >
          <nav
            ref={panelRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute top-24 right-5 left-5 rounded-3xl border border-black/10 bg-white/85 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          >
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `flex min-h-11 items-center rounded-2xl px-4 text-sm transition-colors duration-200 hover:bg-black/5 hover:text-black ${
                    isActive ? 'text-black' : 'text-muted'
                  }`
                }
                onClick={() => closeMenu()}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  )
}
