import { fitSignals, processSteps } from '../lib/about-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function AboutProcess() {
  return (
    <section className="border-y border-black/10 px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="process-heading"
          eyebrow="How we work"
          title={<>Close, curious, <em className="text-muted">and clear.</em></>}
          description="No handoff into the unknown. The same small senior team stays close from the first truth through the thing people can use."
        />

        <ol className="mt-16 border-t border-black/10 lg:grid lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.name} className="border-b border-black/10 py-8 lg:border-r lg:px-7 lg:last:border-r-0 lg:first:pl-0">
              <span className="text-xs text-muted">0{index + 1}</span>
              <h3 className="mt-8 font-display text-3xl text-black">{step.name}</h3>
              <p className="mt-3 text-xs tracking-[0.12em] text-black uppercase">
                {step.output}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
              A useful fit
            </p>
            <h3 className="mt-5 max-w-sm font-display text-4xl leading-[1.05] tracking-[-1.2px] text-black sm:text-5xl">
              The work has something real to protect.
            </h3>
          </div>
          <ul className="border-t border-black/10">
            {fitSignals.map((signal, index) => (
              <li key={signal} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/10 py-6 text-sm leading-relaxed text-black">
                <span className="text-xs text-muted">0{index + 1}</span>
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
