import { Link } from 'react-router'

import { siteContent } from '../lib/site-content'

type JourneyCtaProps = {
  eyebrow?: string
  title: string
  description: string
}

export function JourneyCta({
  eyebrow = 'A shared beginning',
  title,
  description,
}: JourneyCtaProps) {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-black px-7 py-12 text-white sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16 lg:py-20">
        <div>
          <p className="text-xs font-medium tracking-[0.24em] text-white/55 uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-4xl text-balance font-display text-5xl leading-[0.98] tracking-[-1.8px] text-white sm:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        </div>
        <Link
          to={siteContent.cta.href}
          className="inline-flex min-h-14 w-fit items-center justify-center rounded-full bg-white px-9 text-sm text-black transition-transform duration-300 hover:scale-[1.03]"
        >
          {siteContent.cta.label}
        </Link>
      </div>
    </section>
  )
}
