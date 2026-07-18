import { aboutPositioning } from '../lib/about-content'
import { EditorialSectionHeading } from './editorial-section-heading'

export function AboutPositioning() {
  return (
    <section className="px-6 py-24 sm:px-8 sm:py-32" aria-labelledby="positioning-heading">
      <div className="mx-auto max-w-7xl">
        <EditorialSectionHeading
          id="positioning-heading"
          eyebrow="Our shape"
          title={<>Small by design. <em className="text-muted">Broad in what we can hold.</em></>}
          description="Aethera is a close creative practice for work that needs a center, a system, and enough care to become real."
        />

        <div className="mt-16 grid sm:mt-20 lg:grid-cols-2">
          <PositioningColumn
            title="Aethera is"
            items={aboutPositioning.is}
            tone="dark"
          />
          <PositioningColumn
            title="Aethera is not"
            items={aboutPositioning.isNot}
            tone="light"
          />
        </div>
      </div>
    </section>
  )
}

type PositioningColumnProps = {
  title: string
  items: readonly { title: string; description: string }[]
  tone: 'dark' | 'light'
}

function PositioningColumn({ title, items, tone }: PositioningColumnProps) {
  const isDark = tone === 'dark'

  return (
    <div className={isDark ? 'bg-black p-8 text-white sm:p-10 lg:p-12' : 'bg-landscape-wash p-8 text-black sm:p-10 lg:p-12'}>
      <h3 className={`font-display text-4xl ${isDark ? 'text-white' : 'text-black'}`}>
        {title}
      </h3>
      <ul className={`mt-10 border-t ${isDark ? 'border-white/20' : 'border-black/15'}`}>
        {items.map((item) => (
          <li key={item.title} className={`py-6 ${isDark ? 'border-b border-white/20' : 'border-b border-black/15'}`}>
            <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              {item.title}
            </p>
            <p className={`mt-3 max-w-md text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-muted'}`}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
