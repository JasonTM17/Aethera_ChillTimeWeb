import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import { AppRoutes } from '../App'

function renderRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('interior experience', () => {
  it.each([
    ['/studio', 'Field 01', 'Studio ledger', '01 / 04'],
    ['/about', 'Field 02', 'Studio profile', '02 / 04'],
    ['/journal', 'Field 03', 'Reading ledger', '03 / 04'],
    ['/reach-us', 'Field 04', 'Open channel', '04 / 04'],
  ])('gives %s one complete Horizon Ledger', (route, index, label, folio) => {
    renderRoute(route)

    const figure = screen.getByRole('figure')
    const image = figure.querySelector('img')

    expect(screen.getByText(folio)).toBeInTheDocument()
    expect(within(figure).getByText(index)).toBeInTheDocument()
    expect(within(figure).getByText(label)).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/aethera-landscape-poster.webp')
    expect(image).toHaveAttribute('alt', '')
    expect(image).toHaveAttribute('width', '1920')
    expect(image).toHaveAttribute('height', '1068')
  })

  it('keeps essential Studio copy visible while labeling conceptual work honestly', () => {
    renderRoute('/studio')

    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'We shape ideas into places to belong.',
    })

    expect(heading.className).not.toContain('animate-fade-rise')
    expect(screen.getAllByText('Concept study · 2026')).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'One studio, from signal to system.' }),
    ).toBeInTheDocument()
  })

  it('explains what Aethera is, is not, and how the work progresses', () => {
    renderRoute('/about')

    expect(screen.getByRole('heading', { name: 'Aethera is' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Aethera is not' })).toBeInTheDocument()
    expect(screen.getByText('Shared truth')).toBeInTheDocument()
    expect(screen.getByText('Launch rhythm and learning')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Built for the space between a strong idea and the world it must enter.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'The work becomes shared before it becomes polished.',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Aethera brings')).toHaveLength(4)
    expect(
      screen.getByText('There is a meaningful problem beneath the feature list.'),
    ).toBeInTheDocument()
  })

  it('opens Journal reflections without losing stable article identifiers', async () => {
    const user = userEvent.setup()
    renderRoute('/journal')

    const article = document.getElementById('the-useful-weight-of-restraint')
    const summary = within(article as HTMLElement).getByText('Read reflection')

    await user.click(summary)

    expect(article).toBeInTheDocument()
    expect(summary.closest('details')).toHaveAttribute('open')
    expect(screen.getAllByText('Read reflection')).toHaveLength(7)
    expect(screen.getAllByText('Undated studio note')).toHaveLength(4)
  })

  it('makes the Reach Us privacy contract and next steps explicit', async () => {
    const user = userEvent.setup()
    renderRoute('/reach-us')

    expect(screen.getByText('Prepared locally')).toBeInTheDocument()
    expect(
      screen.getByText(/It does not send or store your information on this website\./),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'A clear path, without the theatre.' })).toBeInTheDocument()

    const faq = screen.getByText('What happens to the information I enter?')
    await user.click(faq)
    expect(faq.closest('details')).toHaveAttribute('open')
  })
})
