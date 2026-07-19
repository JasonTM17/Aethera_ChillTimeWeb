import { aboutOrigin } from '../lib/about-content'

export function AboutOrigin() {
  return (
    <section
      className="bg-black px-6 py-20 text-white sm:px-8 sm:py-28"
      aria-labelledby="about-origin-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
              {aboutOrigin.eyebrow}
            </p>
            <h2
              id="about-origin-heading"
              className="mt-5 max-w-5xl text-balance font-display text-5xl leading-[0.98] tracking-[-1.8px] text-white sm:text-7xl"
            >
              {aboutOrigin.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/75 lg:justify-self-end">
            {aboutOrigin.lead}
          </p>
        </div>

        <ol className="mt-16 border-t border-white/25 sm:mt-20">
          {aboutOrigin.chapters.map((chapter) => (
            <li
              key={chapter.number}
              className="grid gap-5 border-b border-white/25 py-8 md:grid-cols-[4rem_minmax(11rem,0.55fr)_minmax(0,1fr)] md:gap-8 md:py-10"
            >
              <span className="text-xs text-white/60">{chapter.number}</span>
              <h3 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                {chapter.title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-white/75">
                {chapter.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
