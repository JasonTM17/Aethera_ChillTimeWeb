import { EditorialPageIntro } from '../components/editorial-page-intro'
import { HorizonLedger } from '../components/horizon-ledger'
import { ReachUsContactSection } from '../components/reach-us-contact-section'
import { ReachUsNextSteps } from '../components/reach-us-next-steps'
import { reachHorizon } from '../lib/reach-us-content'

export function ReachUsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Reach Us · Begin gently"
        folio="04 / 04"
        aside="You do not need the perfect brief. Begin with the change you want to make and the part that still feels unresolved."
        compact
        title={
          <>
            Start with the idea that <em className="text-muted">will not leave you.</em>
          </>
        }
        description="Tell us what you are building, why it matters, and where the path feels uncertain. A thoughtful first note is enough."
      />

      <HorizonLedger {...reachHorizon} />
      <ReachUsContactSection />
      <ReachUsNextSteps />
    </main>
  )
}
