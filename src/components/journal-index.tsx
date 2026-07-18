import { journalEntries, journalThemes } from '../lib/journal-content'
import { EditorialSectionHeading } from './editorial-section-heading'
import { JournalEntry } from './journal-entry'

export function JournalIndex() {
  const [leadEntry, ...entries] = journalEntries

  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="journal-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="journal-heading"
          eyebrow="Current notes"
          title={<>A small archive of <em className="text-muted">attention.</em></>}
          description="Four open reflections from the studio. Each can be read in place and addressed directly through its stable link."
        />

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-y border-black/10 py-4 text-xs text-muted" aria-label="Journal themes">
          {journalThemes.map((theme) => (
            <li key={theme} className="before:mr-2 before:text-black before:content-['—']">
              {theme}
            </li>
          ))}
        </ul>

        <div className="mt-12 sm:mt-16">
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
