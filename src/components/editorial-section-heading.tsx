import type { ReactNode } from 'react'

type EditorialSectionHeadingProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
}

export function EditorialSectionHeading({
  id,
  eyebrow,
  title,
  description,
}: EditorialSectionHeadingProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-16">
      <div>
        <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
          {eyebrow}
        </p>
        <h2
          id={id}
          className="mt-5 max-w-4xl text-balance font-display text-5xl leading-[0.98] tracking-[-1.8px] text-black sm:text-7xl"
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  )
}
