import { EditorialPageIntro } from '../components/editorial-page-intro'
import { JourneyCta } from '../components/journey-cta'
import { principles, processSteps } from '../lib/about-content'

export function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="About · Aethera"
        title={
          <>
            We make room for <em className="text-muted">what matters.</em>
          </>
        }
        description="Aethera is an independent digital studio for people building with conviction. We pair strategy, design, and technology to turn meaningful ideas into enduring experiences."
      />

      <section className="px-6 sm:px-8" aria-labelledby="manifesto-heading">
        <div className="mx-auto grid max-w-7xl gap-12 border-y border-black/10 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:py-28">
          <p className="text-xs font-medium tracking-[0.24em] text-muted uppercase">
            Our point of view
          </p>
          <div>
            <h2 id="manifesto-heading" className="text-balance font-display text-4xl leading-[1.05] tracking-[-1.2px] text-black sm:text-6xl">
              The world does not need more noise. It needs better places for
              attention, imagination, and care.
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted sm:grid-cols-2">
              <p>
                We started Aethera around a simple belief: digital products can
                be ambitious without becoming overwhelming. The best technology
                expands human capacity, then quietly gets out of the way.
              </p>
              <p>
                That belief guides how we choose partners, frame problems, and
                make decisions. We seek the essential idea, give it a distinct
                voice, and build the system it needs to endure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium tracking-[0.24em] text-muted uppercase">
            Principles
          </p>
          <h2 id="principles-heading" className="mt-5 max-w-3xl font-display text-5xl leading-[1] tracking-[-1.8px] text-black sm:text-7xl">
            The standards behind the feeling.
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-black/10 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="min-h-80 bg-white p-8 sm:p-10">
                <span className="text-xs text-muted">{principle.number}</span>
                <h3 className="mt-20 font-display text-3xl leading-tight text-black">
                  {principle.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.24em] text-muted uppercase">
                How we work
              </p>
              <h2 id="process-heading" className="mt-5 font-display text-5xl leading-[1] tracking-[-1.8px] text-black sm:text-7xl">
                Close, curious,
                <br /> and clear.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
              Small senior teams stay close to the problem from first
              conversation through launch. No handoffs into the unknown—just a
              shared rhythm and visible decisions.
            </p>
          </div>

          <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.name} className="border-t border-black/20 pt-6">
                <span className="text-xs text-muted">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl text-black">{step.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <JourneyCta
        eyebrow="Make something that lasts"
        title="Let the work feel as true as the idea."
        description="If you are building with purpose and looking for a close creative partner, we would love to listen."
      />
    </main>
  )
}
