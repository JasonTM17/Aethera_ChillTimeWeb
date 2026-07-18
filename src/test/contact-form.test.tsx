import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import { AppRoutes } from '../App'

function renderContactPage() {
  return render(
    <MemoryRouter initialEntries={['/reach-us']}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('Reach Us contact form', () => {
  it('reports every required field and focuses the first invalid control', async () => {
    const user = userEvent.setup()
    renderContactPage()

    await user.click(screen.getByRole('button', { name: 'Prepare My Note' }))

    expect(screen.getAllByRole('alert')).toHaveLength(4)
    expect(screen.getByLabelText('Your name')).toHaveFocus()
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Choose the kind of journey.')).toBeInTheDocument()
    expect(
      screen.getByText('Tell us a little more—at least 20 characters.'),
    ).toBeInTheDocument()
  })

  it('prepares an honest email draft after valid input', async () => {
    const user = userEvent.setup()
    renderContactPage()

    await user.type(screen.getByLabelText('Your name'), 'Mira Nguyen')
    await user.type(screen.getByLabelText('Email address'), 'mira@example.com')
    await user.selectOptions(
      screen.getByLabelText('What are we exploring?'),
      'new product',
    )
    await user.type(
      screen.getByLabelText('Tell us what is calling you'),
      'A calmer workspace for independent researchers and writers.',
    )
    await user.click(screen.getByRole('button', { name: 'Prepare My Note' }))

    expect(screen.getByText('Nothing has been sent yet.', { exact: false })).toBeInTheDocument()
    const draftLink = screen.getByRole('link', { name: 'Open Email Draft' })
    expect(draftLink.getAttribute('href')).toContain('mailto:hello@aethera.studio')
    expect(draftLink.getAttribute('href')).toContain('mira%40example.com')

    await user.click(screen.getByRole('button', { name: 'Start Over' }))
    expect(screen.getByRole('button', { name: 'Prepare My Note' })).toBeInTheDocument()
  })
})
