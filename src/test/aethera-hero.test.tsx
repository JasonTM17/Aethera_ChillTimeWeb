import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'
import { heroContent } from '../lib/hero-content'

describe('Aethera hero', () => {
  it('renders the exact editorial content and primary actions', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Beyond silence, we build the eternal.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(heroContent.description)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Begin Journey' })).toHaveLength(2)
    expect(screen.getByLabelText('Aethera home')).toHaveTextContent('Aethera®')
  })

  it('keeps the requested video geometry, fade styling, and manual loop contract', () => {
    render(<App />)
    const video = document.querySelector('video')

    expect(video).not.toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsinline')
    expect(video?.parentElement).toHaveStyle({
      top: '300px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    })
    expect(video?.nextElementSibling).toHaveClass(
      'absolute',
      'inset-0',
      'bg-gradient-to-b',
      'from-background',
      'via-transparent',
      'to-background',
    )
  })

  it('opens the mobile navigation and returns focus after Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    const trigger = screen.getByRole('button', { name: 'Open navigation menu' })

    await user.click(trigger)
    const mobileNavigation = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    expect(within(mobileNavigation).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await user.keyboard('{Escape}')
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})
