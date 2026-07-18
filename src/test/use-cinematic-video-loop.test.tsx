import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { CinematicVideoLayer } from '../components/cinematic-video-layer'

function getVideo() {
  const video = document.querySelector('video')

  if (!video) {
    throw new Error('Expected cinematic video to render')
  }

  return video
}

function setVideoTime(video: HTMLVideoElement, currentTime: number, duration: number) {
  Object.defineProperty(video, 'currentTime', {
    configurable: true,
    writable: true,
    value: currentTime,
  })
  Object.defineProperty(video, 'duration', {
    configurable: true,
    value: duration,
  })
}

describe('useCinematicVideoLoop', () => {
  it('fades in and out across the first and final half seconds', () => {
    let nextFrame: FrameRequestCallback | undefined
    vi.mocked(window.requestAnimationFrame).mockImplementation((callback) => {
      nextFrame = callback
      return 17
    })

    render(<CinematicVideoLayer />)
    const video = getVideo()

    setVideoTime(video, 0.25, 10)
    act(() => nextFrame?.(16))
    expect(video).toHaveStyle({ opacity: '0.5' })

    setVideoTime(video, 9.75, 10)
    act(() => nextFrame?.(32))
    expect(video).toHaveStyle({ opacity: '0.5' })
  })

  it('waits 100ms before resetting and replaying an ended video', () => {
    vi.useFakeTimers()
    const play = vi.mocked(HTMLMediaElement.prototype.play)

    render(<CinematicVideoLayer />)
    const video = getVideo()
    setVideoTime(video, 10, 10)

    fireEvent.ended(video)
    expect(video).toHaveStyle({ opacity: '0' })

    act(() => vi.advanceTimersByTime(99))
    expect(play).toHaveBeenCalledTimes(1)

    act(() => vi.advanceTimersByTime(1))
    expect(video.currentTime).toBe(0)
    expect(play).toHaveBeenCalledTimes(2)
  })

  it('cancels animation and pending replay work on unmount', () => {
    vi.useFakeTimers()
    const play = vi.mocked(HTMLMediaElement.prototype.play)
    const cancelAnimationFrame = vi.spyOn(window, 'cancelAnimationFrame')

    const { unmount } = render(<CinematicVideoLayer />)
    fireEvent.ended(getVideo())
    unmount()
    act(() => vi.runAllTimers())

    expect(cancelAnimationFrame).toHaveBeenCalled()
    expect(play).toHaveBeenCalledTimes(1)
  })

  it('shows a stable first frame when reduced motion is preferred', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })

    render(<CinematicVideoLayer />)
    const video = getVideo()

    expect(video).toHaveStyle({ opacity: '1' })
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled()
    expect(window.requestAnimationFrame).not.toHaveBeenCalled()
  })

  it('keeps the white fallback when playback rejects', async () => {
    vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValue(
      new Error('Autoplay blocked'),
    )

    render(<CinematicVideoLayer />)
    const video = getVideo()
    const layer = video.parentElement

    await waitFor(() => {
      expect(layer).toHaveAttribute('data-video-state', 'fallback')
    })
    expect(video).toHaveStyle({ opacity: '0' })
  })
})
