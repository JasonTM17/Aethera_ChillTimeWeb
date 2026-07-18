import { heroContent } from '../lib/hero-content'
import { MobileNav } from './mobile-nav'

const ctaClasses =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.99]'

export function SiteHeader() {
  return (
    <header className="relative z-10 px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <a
          href="#hero"
          aria-label="Aethera home"
          className="shrink-0 font-display text-3xl leading-none tracking-tight text-black"
        >
          {heroContent.brand}
          <sup className="ml-0.5 align-super text-[0.34em] leading-none">
            {heroContent.trademark}
          </sup>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {heroContent.navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? 'page' : undefined}
              className={`min-h-11 content-center text-sm transition-colors duration-200 hover:text-black ${
                index === 0 ? 'text-black' : 'text-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <MobileNav />
          <a className={ctaClasses} href={heroContent.cta.href}>
            {heroContent.cta.label}
          </a>
        </div>
      </div>
    </header>
  )
}
