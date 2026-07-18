import type { RefObject } from 'react'

type ContactFormConfirmationProps = {
  containerRef: RefObject<HTMLDivElement | null>
  draftHref: string
  onStartOver: () => void
}

export function ContactFormConfirmation({
  containerRef,
  draftHref,
  onStartOver,
}: ContactFormConfirmationProps) {
  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      aria-live="polite"
      className="border-y border-black/10 bg-landscape-wash p-8 outline-none sm:p-12"
    >
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
        Your note is ready
      </p>
      <h3 className="mt-5 font-display text-5xl leading-none tracking-[-1.5px] text-black">
        One last, human step.
      </h3>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
        Nothing has been sent yet. Open the prepared email, review your note,
        and send it from your own email app.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={draftHref}
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm text-white transition-transform duration-200 hover:scale-[1.03]"
        >
          Open Email Draft
        </a>
        <button
          type="button"
          className="min-h-14 cursor-pointer rounded-full border border-black/15 px-8 text-sm text-black transition-colors duration-200 hover:bg-black/5"
          onClick={onStartOver}
        >
          Start Over
        </button>
      </div>
    </div>
  )
}
