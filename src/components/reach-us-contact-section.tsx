import { firstNotePrompts } from '../lib/reach-us-content'
import { siteContent } from '../lib/site-content'
import { ContactForm } from './contact-form'

export function ReachUsContactSection() {
  return (
    <section className="px-6 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-14 border-t border-black/10 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-16">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Your first note
          </p>
          <h2 id="contact-heading" className="mt-5 font-display text-4xl leading-[1.05] tracking-[-1.2px] text-black sm:text-5xl">
            A conversation,
            <br />not a pitch.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Begin where the work is alive. A short, honest note gives us more to
            understand than a polished deck written too early.
          </p>

          <div className="mt-10 border-t border-black/10 pt-6">
            <h3 className="text-xs tracking-[0.14em] text-muted uppercase">
              What helps
            </h3>
            <ul className="mt-4 space-y-4">
              {firstNotePrompts.map((prompt, index) => (
                <li key={prompt} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-relaxed text-black">
                  <span className="text-xs text-muted">0{index + 1}</span>
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 text-sm">
            <p className="text-xs tracking-[0.14em] text-muted uppercase">
              Prefer direct email?
            </p>
            <a
              href={`mailto:${siteContent.email}`}
              className="mt-3 inline-block min-h-11 content-center text-black underline decoration-black/20 underline-offset-4 transition-colors duration-200 hover:text-muted"
            >
              {siteContent.email}
            </a>
          </div>
        </div>

        <div className="lg:border-l lg:border-black/10 lg:pl-12">
          <div className="mb-8 flex items-center justify-between gap-6 text-xs tracking-[0.14em] text-muted uppercase">
            <span>Project note</span>
            <span>Prepared locally</span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
