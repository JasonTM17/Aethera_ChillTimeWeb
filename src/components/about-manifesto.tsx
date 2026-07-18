import { aboutManifesto } from '../lib/about-content'

export function AboutManifesto() {
  return (
    <section className="border-y border-black/10 px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="manifesto-heading">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Our point of view
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            A working belief, not a decorative statement.
          </p>
        </div>
        <div>
          <h2 id="manifesto-heading" className="text-balance font-display text-4xl leading-[1.04] tracking-[-1.2px] text-black sm:text-6xl">
            {aboutManifesto.statement}
          </h2>
          <div className="mt-10 grid gap-6 text-base leading-relaxed text-muted sm:grid-cols-2">
            {aboutManifesto.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
