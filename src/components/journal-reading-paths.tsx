import { Link } from 'react-router'

import { journalEntries, journalReadingPaths } from '../lib/journal-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function JournalReadingPaths() {
  return (
    <section
      className="border-b border-black/10 px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="reading-paths-heading"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="reading-paths-heading"
          eyebrow="Reading paths"
          title={<>Begin with the question <em className="text-muted">already following you.</em></>}
          description="Three routes through the same field of work. Each link opens its reflection in place and can be shared directly."
        />

        <ol className="mt-16 border-t border-black/10 sm:mt-20">
          {journalReadingPaths.map((path) => (
            <li
              key={path.number}
              className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[3.5rem_minmax(11rem,0.55fr)_minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-8 md:py-10"
            >
              <span className="text-xs text-muted">{path.number}</span>
              <h3 className="font-display text-3xl text-black sm:text-4xl">
                {path.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                {path.description}
              </p>
              <ul className="border-t border-black/10">
                {path.slugs.map((slug) => {
                  const entry = journalEntries.find((item) => item.slug === slug)
                  if (!entry) return null

                  return (
                    <li key={slug} className="border-b border-black/10">
                      <Link
                        to={`/journal#${slug}`}
                        className="group flex min-h-12 items-center justify-between gap-5 py-3 text-sm text-black transition-opacity duration-200 hover:opacity-60"
                      >
                        <span>{entry.title}</span>
                        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
