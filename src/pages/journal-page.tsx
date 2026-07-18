import { ContactRail } from '../components/contact-rail'
import { EditorialPageIntro } from '../components/editorial-page-intro'
import { HorizonLedger } from '../components/horizon-ledger'
import { JournalIndex } from '../components/journal-index'
import { journalHorizon } from '../lib/journal-content'

export function JournalPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Journal · Notes from the studio"
        folio="03 / 04"
        aside="The journal slows down the decisions behind the work: attention, restraint, humane technology, and the rituals that make ideas clearer."
        title={
          <>
            Ideas for a more <em className="text-muted">thoughtful digital life.</em>
          </>
        }
        description="Observations on attention, craft, technology, and the quiet decisions that shape how digital places make us feel."
      />

      <HorizonLedger {...journalHorizon} />
      <JournalIndex />

      <ContactRail
        eyebrow="Continue the conversation"
        title="The best ideas become clearer together."
        description="Share what you are building, questioning, or trying to change. We will meet it with curiosity."
      />
    </main>
  )
}
