import { journalEntries } from '../lib/journal-content'
import { EditorialSectionHeading } from './editorial-section-heading'
import { JournalEntry } from './journal-entry'

export function JournalIndex() {
  const [leadEntry, ...entries] = [...journalEntries].sort((a, b) =>
    b.number.localeCompare(a.number),
  )

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="journal-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="journal-heading"
          eyebrow="Current notes"
          title={<>A small archive of <em className="text-muted">attention.</em></>}
          description="Seven open reflections from the studio. Read them in sequence, follow a thematic path, or address any note directly through its stable link."
        />

        <div className="mt-16 sm:mt-20">
          <JournalEntry entry={leadEntry} featured />
          <div className="border-t border-black/10">
            {entries.map((entry) => (
              <JournalEntry key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
