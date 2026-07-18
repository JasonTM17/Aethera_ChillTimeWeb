import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-8"
    >
      <p className="animate-fade-rise text-xs font-medium tracking-[0.24em] text-muted uppercase">
        404 · Beyond the map
      </p>
      <h1 className="animate-fade-rise-delay mt-5 max-w-3xl font-display text-6xl leading-[0.95] tracking-[-2px] text-black sm:text-8xl">
        This path has drifted into silence.
      </h1>
      <p className="animate-fade-rise-delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        The page you are looking for is no longer here, but the journey can
        begin again from familiar ground.
      </p>
      <Link
        to="/"
        className="animate-fade-rise-delay-2 mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-10 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        Return Home
      </Link>
    </main>
  )
}
