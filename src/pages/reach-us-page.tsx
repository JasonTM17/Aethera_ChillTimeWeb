import { ContactForm } from '../components/contact-form'
import { EditorialPageIntro } from '../components/editorial-page-intro'
import { siteContent } from '../lib/site-content'

export function ReachUsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden">
      <EditorialPageIntro
        eyebrow="Reach Us · Begin gently"
        title={
          <>
            Start with the idea that <em className="text-muted">will not leave you.</em>
          </>
        }
        description="Tell us what you are building, why it matters, and where the path feels uncertain. A thoughtful first note is enough."
      />

      <section className="px-6 pb-24 sm:px-8 sm:pb-32" aria-labelledby="contact-heading">
        <div className="mx-auto grid max-w-7xl gap-16 border-t border-black/10 pt-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:pt-24">
          <div>
            <h2 id="contact-heading" className="font-display text-4xl leading-tight text-black sm:text-5xl">
              A conversation,
              <br /> not a pitch.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Every note leaves through your own email app, so you can review it
              before sending. If there is a meaningful fit, we will begin with a
              focused conversation—no deck required.
            </p>

            <dl className="mt-12 space-y-8 border-t border-black/10 pt-8 text-sm">
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  Email directly
                </dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${siteContent.email}`}
                    className="text-black underline decoration-black/20 underline-offset-4 transition-colors hover:text-muted"
                  >
                    {siteContent.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  Best suited for
                </dt>
                <dd className="mt-3 max-w-sm leading-relaxed text-black">
                  New digital products, meaningful repositioning, and close
                  creative partnerships.
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  Working rhythm
                </dt>
                <dd className="mt-3 max-w-sm leading-relaxed text-black">
                  Remote by nature, deeply collaborative, and available across
                  time zones by intention.
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  )
}
