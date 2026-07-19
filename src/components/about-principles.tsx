import { principles } from '../lib/about-content'
import { EditorialSectionHeading } from './editorial-section-heading'

const rowOffsets = ['', 'lg:ml-[8.333%]', 'lg:ml-[16.666%]', 'lg:ml-[8.333%]'] as const

export function AboutPrinciples() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="principles-heading"
          eyebrow="Principles"
          title={<>Standards behind <em className="text-muted">the feeling.</em></>}
          description="These are practical filters for deciding what belongs, what can be simpler, and what the work must protect."
        />

        <div className="mt-16 border-t border-black/10 sm:mt-20">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[4rem_0.8fr_1fr] sm:gap-8 sm:py-10 ${rowOffsets[index]}`}
            >
              <span className="text-xs text-muted">{principle.number}</span>
              <h3 className="font-display text-3xl leading-tight text-black sm:text-4xl">
                {principle.title}
              </h3>
              <div className="max-w-xl">
                <p className="text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
                <p className="mt-5 border-t border-black/10 pt-4 text-sm leading-relaxed text-black">
                  <span className="mr-2 text-[0.68rem] font-medium tracking-[0.14em] text-muted uppercase">
                    In practice
                  </span>
                  {principle.practice}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
