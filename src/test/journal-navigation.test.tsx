import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'

import { AppRoutes } from '../App'
import { journalEntries, journalReadingPaths } from '../lib/journal-content'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('Journal navigation', () => {
  it('keeps entry hashes unique and every reading-path target resolvable', () => {
    const entrySlugs = journalEntries.map((entry) => entry.slug)
    const entrySlugSet = new Set(entrySlugs)

    expect(entrySlugSet.size).toBe(entrySlugs.length)
    for (const path of journalReadingPaths) {
      for (const slug of path.slugs) {
        expect(entrySlugSet.has(slug)).toBe(true)
      }
    }
  })

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
    expect(
      document.getElementById('designing-for-the-quiet-mind'),
    ).toHaveFocus()
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
    expect(target).toHaveFocus()
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('reopens a closed reflection when its current reading path is selected again', async () => {
    const user = userEvent.setup()
    vi.mocked(window.requestAnimationFrame).mockImplementation((callback) => {
      callback(16)
      return 1
    })

    renderRoute('/journal')

    const link = screen.getByRole('link', { name: 'The interface as a host' })
    const target = document.getElementById('the-interface-as-a-host')
    const expandable = target?.querySelector('details')

    await user.click(link)
    await waitFor(() => expect(expandable).toHaveAttribute('open'))
    if (!target) throw new Error('Expected reading-path target')
    await user.click(within(target).getByText('Close reflection'))
    expect(expandable).not.toHaveAttribute('open')

    await user.click(link)
    await waitFor(() => expect(expandable).toHaveAttribute('open'))
    expect(target).toHaveFocus()
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
