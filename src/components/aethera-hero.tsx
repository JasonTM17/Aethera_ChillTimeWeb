import { heroContent } from '../lib/hero-content'
import { CinematicVideoLayer } from './cinematic-video-layer'
import { SiteHeader } from './site-header'

export function AetheraHero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen min-h-dvh w-full overflow-hidden bg-background text-foreground"
    >
      <CinematicVideoLayer />
      <SiteHeader />

      <main
        id="journey"
        className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)' }}
      >
        <h1 className="animate-fade-rise max-w-7xl text-balance font-display text-5xl leading-[0.95] font-normal tracking-[-2.46px] text-black sm:text-7xl md:text-8xl">
          {heroContent.headline.opening}
          <em className="text-muted">{heroContent.headline.silence}</em>
          {heroContent.headline.bridge}
          <em className="text-muted">{heroContent.headline.eternal}</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {heroContent.description}
        </p>

        <a
          href={heroContent.cta.href}
          className="animate-fade-rise-delay-2 mt-12 inline-flex min-h-14 cursor-pointer items-center justify-center rounded-full bg-black px-14 py-5 text-base text-white transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.99]"
        >
          {heroContent.cta.label}
        </a>
      </main>
    </div>
  )
}
