import type { JournalEntryContent } from '../lib/journal-content'

type JournalEntryProps = {
  entry: JournalEntryContent
  featured?: boolean
}

export function JournalEntry({ entry, featured = false }: JournalEntryProps) {
  return (
    <article
      id={entry.slug}
      className={
        featured
          ? 'scroll-mt-8 bg-black px-7 py-12 text-white sm:px-12 sm:py-16 lg:grid lg:grid-cols-[5rem_13rem_1fr] lg:gap-8'
          : 'scroll-mt-8 grid border-b border-black/10 py-9 md:grid-cols-[5rem_13rem_1fr] md:gap-8 md:py-11'
      }
    >
      <div>
        <span className={`text-xs ${featured ? 'text-white/45' : 'text-muted'}`}>
          {entry.number}
        </span>
      </div>

      <div className={featured ? 'mt-8 lg:mt-0' : 'mt-4 md:mt-0'}>
        <p className={`text-xs tracking-[0.14em] uppercase ${featured ? 'text-white/55' : 'text-muted'}`}>
          {entry.category}
        </p>
        <p className={`mt-3 text-xs ${featured ? 'text-white/45' : 'text-muted'}`}>
          {entry.date}<br />{entry.readTime}
        </p>
      </div>

      <div className={featured ? 'mt-8 lg:mt-0' : 'mt-7 md:mt-0'}>
        <h3 className={`text-balance font-display leading-[1.02] tracking-[-1.2px] ${featured ? 'text-5xl text-white sm:text-7xl' : 'text-4xl text-black sm:text-5xl'}`}>
          {entry.title}
        </h3>
        <p className={`mt-6 max-w-2xl text-sm leading-relaxed ${featured ? 'text-white/60' : 'text-muted'}`}>
          {entry.excerpt}
        </p>

        <details className="group mt-8 border-t border-current/15 pt-2">
          <summary className="min-h-12 cursor-pointer list-none content-center text-sm underline decoration-current/30 underline-offset-4 transition-opacity duration-200 hover:opacity-60">
            <span className="group-open:hidden">Read reflection</span>
            <span className="hidden group-open:inline">Close reflection</span>
          </summary>
          <div className={`mt-5 max-w-2xl space-y-5 text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-muted'}`}>
            {entry.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </article>
  )
}
