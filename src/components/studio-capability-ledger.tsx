import { studioCapabilities, studioWorkingModels } from '../lib/studio-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function StudioCapabilityLedger() {
  return (
    <section className="border-y border-black/10 px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="capabilities-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="capabilities-heading"
          eyebrow="Capability ledger"
          title={<>One studio, from <em className="text-muted">signal to system.</em></>}
          description="A small senior practice stays close to the essential question, then follows it through the whole experience."
        />

        <ol className="mt-16 border-t border-black/10 sm:mt-20">
          {studioCapabilities.map((capability) => (
            <li
              key={capability.title}
              className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[4rem_0.7fr_1fr] sm:gap-8 sm:py-10"
            >
              <span className="text-xs text-muted">{capability.number}</span>
              <h3 className="font-display text-3xl leading-tight text-black sm:text-4xl">
                {capability.title}
              </h3>
              <div>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-black">
                  {capability.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
              Ways to work together
            </p>
            <h3 className="mt-5 max-w-sm font-display text-4xl leading-[1.05] tracking-[-1.2px] text-black sm:text-5xl">
              The shape follows the question.
            </h3>
          </div>
          <ol className="border-t border-black/10">
            {studioWorkingModels.map((model, index) => (
              <li key={model.name} className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[3rem_0.8fr_1fr] sm:gap-6">
                <span className="text-xs text-muted">0{index + 1}</span>
                <div>
                  <h4 className="font-display text-2xl text-black">{model.name}</h4>
                  <p className="mt-2 text-xs text-muted">{model.bestFor}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">{model.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
