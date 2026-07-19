import { workingAgreements } from '../lib/about-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function AboutWorkingAgreement() {
  return (
    <section
      className="bg-landscape-wash px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="working-agreement-heading"
    >
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="working-agreement-heading"
          eyebrow="Working agreement"
          title={<>The work becomes shared <em className="text-muted">before it becomes polished.</em></>}
          description="A close partnership needs more than a process. These agreements keep the question visible and the decisions honest from first conversation to real use."
        />

        <ol className="mt-16 border-t border-black/15 sm:mt-20">
          {workingAgreements.map((agreement) => (
            <li
              key={agreement.number}
              className="grid gap-6 border-b border-black/15 py-8 md:grid-cols-[3.5rem_minmax(12rem,0.55fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-7 md:py-10"
            >
              <span className="text-xs text-black">{agreement.number}</span>
              <h3 className="font-display text-3xl leading-tight text-black">
                {agreement.title}
              </h3>
              <div>
                <p className="text-[0.68rem] font-medium tracking-[0.16em] text-black uppercase">
                  Aethera brings
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black">
                  {agreement.promise}
                </p>
              </div>
              <div>
                <p className="text-[0.68rem] font-medium tracking-[0.16em] text-black uppercase">
                  Together we practice
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black">
                  {agreement.practice}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-4xl text-balance font-display text-3xl leading-[1.05] text-black sm:text-5xl">
          Fewer handoffs. Clearer decisions. A system the team can keep tending.
        </p>
      </div>
    </section>
  )
}
