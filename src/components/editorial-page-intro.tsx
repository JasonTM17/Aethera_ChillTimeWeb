import type { ReactNode } from 'react'

type EditorialPageIntroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  folio?: string
  aside?: string
  compact?: boolean
}

export function EditorialPageIntro({
  eyebrow,
  title,
  description,
  folio,
  aside,
  compact = false,
}: EditorialPageIntroProps) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-6 pt-8 sm:px-8 sm:pt-12 lg:pt-14 ${
        compact ? 'pb-10 sm:pb-12' : 'pb-12 sm:pb-16 lg:pb-20'
      }`}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl leading-[0.95] font-normal tracking-[-2.46px] text-black sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </div>

        {folio && aside ? (
          <aside className="border-t border-black/10 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="text-xs tracking-[0.18em] text-muted uppercase">{folio}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-black">{aside}</p>
          </aside>
        ) : null}
      </div>
    </section>
  )
}
