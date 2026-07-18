import { ContactRail } from '../components/contact-rail'
import { EditorialPageIntro } from '../components/editorial-page-intro'
import { HorizonLedger } from '../components/horizon-ledger'
import { StudioCapabilityLedger } from '../components/studio-capability-ledger'
import { StudioProjectList } from '../components/studio-project-list'
import { studioHorizon } from '../lib/studio-content'

export function StudioPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Studio · Selected explorations"
        folio="01 / 04"
        aside="Ideas become credible when their assumptions are visible. This chapter shows how Aethera turns a belief into a product world."
        title={
          <>
            We shape ideas into <em className="text-muted">places to belong.</em>
          </>
        }
        description="From first principles to final pixels, Aethera partners with thoughtful founders to create products that feel clear, human, and built to last."
      />

      <HorizonLedger {...studioHorizon} />
      <StudioProjectList />
      <StudioCapabilityLedger />

      <ContactRail
        title="Bring us the idea you cannot ignore."
        description="We work best with thoughtful people who want the digital world to feel clearer, more useful, and more human."
      />
    </main>
  )
}
