import { EditorialPageIntro } from '../components/editorial-page-intro'
import { JourneyCta } from '../components/journey-cta'
import { journalEntries } from '../lib/journal-content'

export function JournalPage() {
  const [leadEntry, ...entries] = journalEntries

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Journal · Notes from the studio"
        title={
          <>
            Ideas for a more <em className="text-muted">thoughtful digital life.</em>
          </>
        }
        description="Observations on attention, craft, technology, and the quiet decisions that shape how digital places make us feel."
      />

      <section className="px-6 sm:px-8" aria-labelledby="journal-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="journal-heading" className="sr-only">
            Journal entries
          </h2>
          <JournalEntry entry={leadEntry} featured />
          <div className="mt-px grid gap-px bg-black/10 md:grid-cols-3">
            {entries.map((entry) => (
              <JournalEntry key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <JourneyCta
        eyebrow="Continue the conversation"
        title="The best ideas become clearer together."
        description="Share what you are building, questioning, or trying to change. We will meet it with curiosity."
      />
    </main>
  )
}

type JournalEntryProps = {
  entry: (typeof journalEntries)[number]
  featured?: boolean
}

function JournalEntry({ entry, featured = false }: JournalEntryProps) {
  return (
    <article
      id={entry.slug}
      className={
        featured
          ? 'scroll-mt-8 rounded-t-[2rem] bg-black px-7 py-12 text-white sm:px-12 sm:py-16 lg:grid lg:grid-cols-[0.6fr_1.4fr] lg:gap-20'
          : 'scroll-mt-8 bg-white px-6 py-10 sm:px-8 sm:py-12'
      }
    >
      <div>
        <span className={`text-xs ${featured ? 'text-white/45' : 'text-muted'}`}>
          {entry.number}
        </span>
        <p
          className={`mt-5 text-xs tracking-[0.18em] uppercase ${featured ? 'text-white/55' : 'text-muted'}`}
        >
          {entry.category}
        </p>
      </div>
      <div className={featured ? 'mt-12 lg:mt-0' : 'mt-12'}>
        <h3
          className={`text-balance font-display leading-[1.02] tracking-[-1.2px] ${
            featured ? 'text-5xl text-white sm:text-7xl' : 'text-4xl text-black'
          }`}
        >
          {entry.title}
        </h3>
        <p
          className={`mt-6 text-sm leading-relaxed ${featured ? 'max-w-2xl text-white/60' : 'text-muted'}`}
        >
          {entry.excerpt}
        </p>
        <p
          className={`mt-8 text-xs ${featured ? 'text-white/45' : 'text-muted'}`}
        >
          {entry.date} · {entry.readTime}
        </p>

        <details className="group mt-8 border-t border-current/15 pt-6">
          <summary className="min-h-11 cursor-pointer list-none content-center text-sm underline decoration-current/30 underline-offset-4 transition-opacity hover:opacity-60">
            <span className="group-open:hidden">Read reflection</span>
            <span className="hidden group-open:inline">Close reflection</span>
          </summary>
          <div
            className={`mt-5 space-y-5 text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-muted'}`}
          >
            {entry.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </article>
  )
}
