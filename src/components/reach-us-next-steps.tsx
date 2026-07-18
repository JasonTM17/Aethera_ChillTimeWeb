import { nextSteps, reachFaqs } from '../lib/reach-us-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function ReachUsNextSteps() {
  return (
    <section className="border-y border-black/10 px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="next-steps-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="next-steps-heading"
          eyebrow="After the note"
          title={<>A clear path, without <em className="text-muted">the theatre.</em></>}
          description="No automated funnel and no promise made before we understand the question. Just a transparent way to discover whether the work belongs together."
        />

        <ol className="mt-16 border-t border-black/10 lg:grid lg:grid-cols-3">
          {nextSteps.map((step) => (
            <li key={step.number} className="border-b border-black/10 py-8 lg:border-r lg:px-8 lg:last:border-r-0 lg:first:pl-0">
              <span className="text-xs text-muted">{step.number}</span>
              <h3 className="mt-8 font-display text-3xl leading-tight text-black">
                {step.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
              Useful answers
            </p>
            <h3 className="mt-5 max-w-sm font-display text-4xl leading-[1.05] tracking-[-1.2px] text-black sm:text-5xl">
              Before you write.
            </h3>
          </div>
          <div className="border-t border-black/10">
            {reachFaqs.map((faq) => (
              <details key={faq.question} className="group border-b border-black/10">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-sm text-black">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-lg text-muted group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-lg text-muted group-open:inline">−</span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
