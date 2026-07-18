import { useCinematicVideoLoop } from '../hooks/use-cinematic-video-loop'
import { heroContent } from '../lib/hero-content'

export function CinematicVideoLayer() {
  const { videoRef, hasVideoError } = useCinematicVideoLoop()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute z-0 overflow-hidden bg-background"
      data-video-state={hasVideoError ? 'fallback' : 'active'}
      style={{ top: '300px', right: 0, bottom: 0, left: 0 }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-out"
        muted
        playsInline
        preload="auto"
        src={heroContent.videoUrl}
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
