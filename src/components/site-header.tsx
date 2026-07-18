import { Link, NavLink } from 'react-router'

import { siteContent } from '../lib/site-content'
import { MobileNav } from './mobile-nav'

const ctaClasses =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.99]'

export function SiteHeader() {
  return (
    <header className="relative z-10 px-5 py-6 sm:px-8">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-black px-5 py-3 text-sm text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link
          to="/"
          aria-label="Aethera home"
          className="shrink-0 font-display text-3xl leading-none tracking-tight text-black"
        >
          {siteContent.brand}
          <sup className="ml-0.5 align-super text-[0.34em] leading-none">
            {siteContent.trademark}
          </sup>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteContent.navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `min-h-11 content-center text-sm transition-colors duration-200 hover:text-black ${
                  isActive ? 'text-black' : 'text-muted'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <MobileNav />
          <Link className={ctaClasses} to={siteContent.cta.href}>
            {siteContent.cta.label}
          </Link>
        </div>
      </div>
    </header>
  )
}
