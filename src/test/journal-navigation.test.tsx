import { render, screen, waitFor } from '@testing-library/react'
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

describe('Journal navigation', () => {
  it('scrolls a direct Journal hash target into view', () => {
    vi.mocked(window.requestAnimationFrame).mockImplementation((callback) => {
      callback(16)
      return 1
    })

    renderRoute('/journal#designing-for-the-quiet-mind')

    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1)
    expect(
      document
        .getElementById('designing-for-the-quiet-mind')
        ?.querySelector('details'),
    ).toHaveAttribute('open')
  })

  it('opens a reading-path target after an in-page hash change', async () => {
    const user = userEvent.setup()
    vi.mocked(window.requestAnimationFrame).mockImplementation((callback) => {
      callback(16)
      return 1
    })

    renderRoute('/journal')

    const target = document.getElementById('the-interface-as-a-host')
    const expandable = target?.querySelector('details')
    expect(expandable).not.toHaveAttribute('open')

    await user.click(
      screen.getByRole('link', { name: 'The interface as a host' }),
    )

    await waitFor(() => expect(expandable).toHaveAttribute('open'))
    expect(target).toBeInTheDocument()
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('ignores a malformed hash without breaking the route', () => {
    vi.mocked(window.requestAnimationFrame).mockImplementation((callback) => {
      callback(16)
      return 1
    })

    expect(() => renderRoute('/journal#%')).not.toThrow()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Ideas for a more thoughtful digital life.',
      }),
    ).toBeInTheDocument()
  })
})
