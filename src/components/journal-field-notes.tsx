import { journalFieldNotes } from '../lib/journal-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function JournalFieldNotes() {
  return (
    <section
      className="bg-landscape-wash px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="field-notes-heading"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="field-notes-heading"
          eyebrow="From the desk"
          title={<>Small observations, <em className="text-muted">kept in view.</em></>}
          description="Undated working notes from the margins of active thinking. Brief enough to carry into the next decision."
        />

        <ol className="mt-16 grid gap-px border-y border-black/15 bg-black/15 sm:mt-20 md:grid-cols-2">
          {journalFieldNotes.map((note) => (
            <li key={note.number} className="min-h-64 bg-landscape-wash p-7 sm:p-9">
              <div className="flex items-center justify-between gap-6 text-xs tracking-[0.15em] text-black uppercase">
                <span>{note.number}</span>
                <span>Undated studio note</span>
              </div>
              <h3 className="mt-10 text-xs font-medium tracking-[0.18em] text-black uppercase">
                {note.label}
              </h3>
              <p className="mt-5 max-w-lg text-balance font-display text-3xl leading-[1.08] text-black sm:text-4xl">
                {note.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
