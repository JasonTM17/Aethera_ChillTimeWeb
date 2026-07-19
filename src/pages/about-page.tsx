import { AboutManifesto } from '../components/about-manifesto'
import { AboutOrigin } from '../components/about-origin'
import { AboutPositioning } from '../components/about-positioning'
import { AboutPrinciples } from '../components/about-principles'
import { AboutProcess } from '../components/about-process'
import { AboutWorkingAgreement } from '../components/about-working-agreement'
import { ContactRail } from '../components/contact-rail'
import { EditorialPageIntro } from '../components/editorial-page-intro'
import { HorizonLedger } from '../components/horizon-ledger'
import { aboutHorizon } from '../lib/about-content'

export function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="About · Aethera"
        folio="02 / 04"
        aside="Aethera is not a cast of invented characters. It is a way of staying close to meaningful questions and carrying them carefully into form."
        title={
          <>
            We make room for <em className="text-muted">what matters.</em>
          </>
        }
        description="Aethera is an independent digital studio for people building with conviction. We pair strategy, design, and technology to turn meaningful ideas into enduring experiences."
      />

      <HorizonLedger {...aboutHorizon} />
      <AboutPositioning />
      <AboutOrigin />
      <AboutManifesto />
      <AboutWorkingAgreement />
      <AboutPrinciples />
      <AboutProcess />

      <ContactRail
        eyebrow="Make something that lasts"
        title="Let the work feel as true as the idea."
        description="If you are building with purpose and looking for a close creative partner, begin with the part you cannot stop thinking about."
      />
    </main>
  )
}
