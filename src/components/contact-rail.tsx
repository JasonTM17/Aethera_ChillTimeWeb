import { useId } from 'react'
import { Link } from 'react-router'

import { siteContent } from '../lib/site-content'

type ContactRailProps = {
  eyebrow?: string
  title: string
  description: string
}

export function ContactRail({
  eyebrow = 'Begin a conversation',
  title,
  description,
}: ContactRailProps) {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-black/10 py-10 sm:py-12 lg:grid-cols-[0.55fr_1.2fr_auto] lg:items-center lg:gap-12">
        <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
          {eyebrow}
        </p>
        <div>
          <h2
            id={headingId}
            className="max-w-3xl text-balance font-display text-4xl leading-[1] tracking-[-1.2px] text-black sm:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
        <Link
          to={siteContent.cta.href}
          className="inline-flex min-h-14 w-fit items-center justify-center rounded-full bg-black px-8 text-sm text-white transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.99]"
        >
          {siteContent.cta.label}
        </Link>
      </div>
    </section>
  )
}
