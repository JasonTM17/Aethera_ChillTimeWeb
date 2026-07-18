import { studioProjects } from '../lib/studio-content'
import { EditorialSectionHeading } from './editorial-section-heading'

const artworkStyles = {
  orbit: {
    surface: 'bg-black',
    first: 'top-[14%] left-[12%] size-[58%] rounded-full border border-white/30',
    second: 'right-[12%] bottom-[20%] h-px w-[52%] bg-white/45',
    third: 'right-[17%] bottom-[12%] size-3 rounded-full bg-white',
    number: 'text-white/20',
  },
  archive: {
    surface: 'bg-landscape-wash',
    first: 'inset-[11%] border border-black/15',
    second: 'inset-[23%] border border-black/25',
    third: 'top-[19%] right-[18%] size-[18%] rounded-full bg-black',
    number: 'text-black/15',
  },
  stillpoint: {
    surface: 'bg-black',
    first: 'top-[13%] right-[14%] size-[42%] rounded-full bg-white',
    second: 'bottom-[15%] left-[13%] h-[28%] w-[58%] border border-white/30',
    third: 'bottom-[25%] left-[23%] h-px w-[38%] bg-white/55',
    number: 'text-white/20',
  },
} as const

export function StudioProjectList() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="selected-work-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="selected-work-heading"
          eyebrow="Selected explorations"
          title={<>Three ideas, made <em className="text-muted">specific.</em></>}
          description="These self-initiated studies show how we frame a problem and carry one product belief through strategy, experience, and expression."
        />

        <div className="mt-16 border-t border-black/10 sm:mt-20">
          {studioProjects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-10 border-b border-black/10 py-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-14 lg:gap-20 lg:py-24"
            >
              <ConceptArtwork
                variant={project.artworkVariant}
                number={project.number}
              />

              <div className={index % 2 === 1 ? 'md:-order-1' : undefined}>
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.14em] text-muted uppercase">
                  <span>{project.name} · {project.type}</span>
                  <span>{project.status}</span>
                </div>
                <h3 className="mt-7 max-w-xl text-balance font-display text-4xl leading-[1.02] tracking-[-1.2px] text-black sm:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                  {project.description}
                </p>

                <dl className="mt-8 grid border-y border-black/10 sm:grid-cols-2">
                  <div className="py-5 sm:pr-6">
                    <dt className="text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                      Hypothesis
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-black">
                      {project.hypothesis}
                    </dd>
                  </div>
                  <div className="border-t border-black/10 py-5 sm:border-t-0 sm:border-l sm:pl-6">
                    <dt className="text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                      Method
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-black">
                      {project.method}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted" aria-label="Study disciplines">
                  {project.services.map((service) => (
                    <li key={service} className="before:mr-2 before:text-black before:content-['—']">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

type ConceptArtworkProps = {
  variant: keyof typeof artworkStyles
  number: string
}

function ConceptArtwork({ variant, number }: ConceptArtworkProps) {
  const styles = artworkStyles[variant]

  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[4/3] overflow-hidden ${styles.surface}`}
    >
      <span className={`absolute ${styles.first}`} />
      <span className={`absolute ${styles.second}`} />
      <span className={`absolute ${styles.third}`} />
      <span className={`absolute right-6 bottom-4 font-display text-7xl sm:text-8xl ${styles.number}`}>
        {number}
      </span>
    </div>
  )
}
