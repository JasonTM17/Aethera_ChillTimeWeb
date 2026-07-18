export type HorizonFact = {
  label: string
  value: string
}

type HorizonLedgerProps = {
  index: string
  label: string
  note: string
  facts: readonly HorizonFact[]
  imagePosition?: string
}

export function HorizonLedger({
  index,
  label,
  note,
  facts,
  imagePosition = '50% 62%',
}: HorizonLedgerProps) {
  return (
    <div className="px-6 sm:px-8">
      <figure className="mx-auto grid max-w-7xl border-y border-black/10 py-3 lg:grid-cols-[minmax(0,1.8fr)_minmax(18rem,0.8fr)]">
        <div className="animate-horizon-arrive relative h-36 overflow-hidden bg-landscape-wash sm:h-40 lg:h-44">
          <img
            src="/aethera-landscape-poster.webp"
            alt=""
            width="1920"
            height="1068"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>

        <figcaption className="flex items-center border-black/10 bg-white pt-6 lg:min-h-44 lg:border-l lg:pt-0 lg:pl-10">
          <div className="w-full">
            <div className="flex items-center justify-between gap-6 text-xs tracking-[0.18em] text-muted uppercase">
              <span>{index}</span>
              <span>{label}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black">{note}</p>
            <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-black/10 pt-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed text-black">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
