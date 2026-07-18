import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'

import { AppRoutes } from '../App'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('Aethera routes', () => {
  it.each([
    ['/studio', 'We shape ideas into places to belong.', 'Studio — Aethera'],
    ['/about', 'We make room for what matters.', 'About — Aethera'],
    [
      '/journal',
      'Ideas for a more thoughtful digital life.',
      'Journal — Aethera',
    ],
    [
      '/reach-us',
      'Start with the idea that will not leave you.',
      'Reach Us — Aethera',
    ],
  ])('renders %s with its own content and title', (route, heading, title) => {
    renderRoute(route)

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(document.title).toBe(title)
  })

  it('marks only the current desktop navigation destination as active', () => {
    renderRoute('/studio')
    const navigation = screen.getByRole('navigation', {
      name: 'Primary navigation',
    })

    expect(within(navigation).getByRole('link', { name: 'Studio' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(navigation).getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('takes the header journey action to the contact page', async () => {
    const user = userEvent.setup()
    renderRoute('/studio')

    await user.click(
      within(screen.getByRole('banner')).getByRole('link', {
        name: 'Begin Journey',
      }),
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Start with the idea that will not leave you.',
      }),
    ).toBeInTheDocument()
  })

  it('closes the Home video lifecycle before a pending replay can fire', () => {
    vi.useFakeTimers()
    const play = vi.mocked(HTMLMediaElement.prototype.play)
    renderRoute('/')
    const video = document.querySelector('video')

    if (!video) throw new Error('Expected Home video')
    fireEvent.ended(video)
    expect(play).toHaveBeenCalledTimes(1)

    fireEvent.click(
      within(
        screen.getByRole('navigation', { name: 'Primary navigation' }),
      ).getByRole('link', { name: 'Studio' }),
    )

    expect(document.querySelector('video')).not.toBeInTheDocument()
    act(() => vi.advanceTimersByTime(100))
    expect(play).toHaveBeenCalledTimes(1)
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled()
  })

  it('traps mobile focus and closes the panel after route navigation', async () => {
    const user = userEvent.setup()
    renderRoute('/')

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Site navigation' })
    const mobileNavigation = within(dialog).getByRole('navigation', {
      name: 'Mobile navigation',
    })
    const homeLink = within(mobileNavigation).getByRole('link', { name: 'Home' })
    const reachUsLink = within(mobileNavigation).getByRole('link', { name: 'Reach Us' })

    expect(homeLink).toHaveFocus()
    await user.tab({ shift: true })
    expect(reachUsLink).toHaveFocus()
    await user.tab()
    expect(homeLink).toHaveFocus()

    await user.click(within(mobileNavigation).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('dialog', { name: 'Site navigation' })).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'We make room for what matters.' }),
    ).toBeInTheDocument()
  })

  it('offers a working recovery path for unknown URLs', async () => {
    const user = userEvent.setup()
    renderRoute('/beyond-the-map')

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'This path has drifted into silence.',
      }),
    ).toBeInTheDocument()
    expect(document.title).toBe('Page not found — Aethera')

    await user.click(screen.getByRole('link', { name: 'Return Home' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Beyond silence, we build the eternal.',
      }),
    ).toBeInTheDocument()
  })
})
