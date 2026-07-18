import { Link } from 'react-router'

import { siteContent } from '../lib/site-content'

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 px-6 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link
            to="/"
            aria-label="Aethera home"
            className="font-display text-3xl tracking-tight text-black"
          >
            {siteContent.brand}
            <sup className="ml-0.5 align-super text-[0.34em]">
              {siteContent.trademark}
            </sup>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Independent digital studio for meaningful ideas, enduring products,
            and calmer futures.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted sm:justify-end">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-black/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aethera Studio. Made with intention.</p>
        <a
          href={`mailto:${siteContent.email}`}
          className="transition-colors duration-200 hover:text-black"
        >
          {siteContent.email}
        </a>
      </div>
    </footer>
  )
}
