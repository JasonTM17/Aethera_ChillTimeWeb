import { useEffect, useRef, useState } from 'react'

const FADE_DURATION_SECONDS = 0.5
const RESTART_DELAY_MS = 100

function clampOpacity(value: number) {
  return Math.min(1, Math.max(0, value))
}

export function useCinematicVideoLoop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasVideoError, setHasVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    let animationFrameId: number | undefined
    let restartTimeoutId: number | undefined
    let isDisposed = false
    let hasFailed = false
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const setVideoOpacity = (opacity: number) => {
      video.style.opacity = String(clampOpacity(opacity))
    }

    const handlePlaybackFailure = () => {
      if (isDisposed) {
        return
      }

      hasFailed = true
      setVideoOpacity(0)
      setHasVideoError(true)

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }

    const playVideo = () => {
      void video.play().catch(handlePlaybackFailure)
    }

    const updateOpacity = () => {
      if (isDisposed || hasFailed) {
        return
      }

      const { currentTime, duration } = video
      let opacity = 1

      if (currentTime < FADE_DURATION_SECONDS) {
        opacity = currentTime / FADE_DURATION_SECONDS
      } else if (
        Number.isFinite(duration) &&
        duration > 0 &&
        duration - currentTime < FADE_DURATION_SECONDS
      ) {
        opacity = (duration - currentTime) / FADE_DURATION_SECONDS
      }

      setVideoOpacity(opacity)
      animationFrameId = window.requestAnimationFrame(updateOpacity)
    }

    const handleEnded = () => {
      setVideoOpacity(0)

      if (restartTimeoutId !== undefined) {
        window.clearTimeout(restartTimeoutId)
      }

      restartTimeoutId = window.setTimeout(() => {
        if (isDisposed || hasFailed) {
          return
        }

        video.currentTime = 0
        playVideo()
      }, RESTART_DELAY_MS)
    }

    const handleError = () => {
      handlePlaybackFailure()
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)
    setVideoOpacity(0)

    if (prefersReducedMotion) {
      video.pause()
      video.currentTime = 0
      setVideoOpacity(1)
    } else {
      playVideo()
      animationFrameId = window.requestAnimationFrame(updateOpacity)
    }

    return () => {
      isDisposed = true
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
      video.pause()

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId)
      }

      if (restartTimeoutId !== undefined) {
        window.clearTimeout(restartTimeoutId)
      }
    }
  }, [])

  return { videoRef, hasVideoError }
}
