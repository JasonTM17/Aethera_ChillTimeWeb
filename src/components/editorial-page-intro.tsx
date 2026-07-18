import type { ReactNode } from 'react'

type EditorialPageIntroProps = {
  eyebrow: string
  title: ReactNode
  description: string
}

export function EditorialPageIntro({
  eyebrow,
  title,
  description,
}: EditorialPageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <p className="animate-fade-rise text-xs font-medium tracking-[0.24em] text-muted uppercase">
        {eyebrow}
      </p>
      <h1 className="animate-fade-rise-delay mt-6 max-w-5xl text-balance font-display text-6xl leading-[0.95] font-normal tracking-[-2.46px] text-black sm:text-7xl lg:text-8xl">
        {title}
      </h1>
      <p className="animate-fade-rise-delay-2 mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    </section>
  )
}
