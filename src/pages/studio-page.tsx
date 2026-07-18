import { EditorialPageIntro } from '../components/editorial-page-intro'
import { JourneyCta } from '../components/journey-cta'
import { studioCapabilities, studioProjects } from '../lib/studio-content'

const artworkStyles = [
  'bg-black before:absolute before:inset-[18%] before:rounded-full before:border before:border-white/25 after:absolute after:top-1/2 after:left-[12%] after:h-px after:w-[76%] after:bg-white/35',
  'bg-black/[0.045] before:absolute before:inset-[12%] before:border before:border-black/15 after:absolute after:inset-[24%] after:rounded-full after:bg-black',
  'bg-black before:absolute before:top-[14%] before:right-[16%] before:size-[42%] before:rounded-full before:bg-white after:absolute after:bottom-[14%] after:left-[14%] after:h-[28%] after:w-[58%] after:border after:border-white/30',
] as const

export function StudioPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Studio · Selected explorations"
        title={
          <>
            We shape ideas into <em className="text-muted">places to belong.</em>
          </>
        }
        description="From first principles to final pixels, Aethera partners with thoughtful founders to create products that feel clear, human, and built to last."
      />

      <section aria-labelledby="selected-work-heading" className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl border-t border-black/10">
          <h2 id="selected-work-heading" className="sr-only">
            Selected work
          </h2>
          {studioProjects.map((project, index) => (
            <article
              key={project.name}
              className="grid gap-10 border-b border-black/10 py-16 md:grid-cols-2 md:items-center md:gap-16 lg:py-24"
            >
              <div
                aria-hidden="true"
                className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ${artworkStyles[index]}`}
              >
                <span className="absolute right-6 bottom-5 z-10 font-display text-7xl text-white/20 sm:text-8xl">
                  {project.number}
                </span>
              </div>

              <div className={index % 2 === 1 ? 'md:-order-1' : undefined}>
                <div className="flex items-center justify-between gap-6 text-xs tracking-[0.18em] text-muted uppercase">
                  <span>{project.name}</span>
                  <span>{project.type}</span>
                </div>
                <h3 className="mt-8 max-w-xl text-balance font-display text-4xl leading-[1.02] tracking-[-1.2px] text-black sm:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Services">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-black/10 px-4 py-2 text-xs text-muted"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium tracking-[0.24em] text-muted uppercase">
            Capabilities
          </p>
          <h2 id="capabilities-heading" className="mt-5 max-w-3xl font-display text-5xl leading-[1] tracking-[-1.8px] text-black sm:text-7xl">
            One studio, from signal to system.
          </h2>
          <div className="mt-16 grid border-t border-black/10 md:grid-cols-3">
            {studioCapabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="border-b border-black/10 py-8 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0"
              >
                <span className="text-xs text-muted">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl text-black">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JourneyCta
        title="Bring us the idea you cannot ignore."
        description="We work best with brave, thoughtful people who want the digital world to feel more human."
      />
    </main>
  )
}
