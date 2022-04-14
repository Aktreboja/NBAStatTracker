import { render, screen } from '@testing-library/react'
import Landing from '../pages/index'
import '@testing-library/jest-dom'

describe('Landing Page', () => {
  it('renders the title of the website (StatsCentral)', () => {
    render(<Landing />)

    const heading = screen.getByRole('title', {
      description: "StatsCentral"
    })

    expect(heading).toBeInTheDocument()
  })
})