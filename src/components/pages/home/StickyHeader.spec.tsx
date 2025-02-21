import { StickyHeader } from './StickyHeader'
import { render, screen } from '@testing-library/react'

describe('StickyHeader', () => {
  it('Deveria Renderiza Corretamente os titles', () => {
    render(<StickyHeader>teste</StickyHeader>)
    expect(screen.getByText('teste')).toBeInTheDocument()
  })
})
