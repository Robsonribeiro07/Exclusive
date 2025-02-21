import { usePathname } from 'next/navigation'
import { Links } from './links'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('Deve renderiza o link corretamente', () => {
  it('Deve fica com underline caso o pathname seja igual ao passado para link', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/about')

    render(<Links href="/about" name="About" />)

    const link = screen.getByRole('link', { name: 'About' })

    expect(link).toHaveClass('underline')
  })

  it('Deve fica sem o underline caso nao passe nem um pathname', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/')

    render(<Links href="teste" name="teste" />)
    const links = screen.getAllByRole('link', { name: 'teste' })

    links.forEach((link) => {
      expect(link).toHaveClass('no-underline')
    })
  })
})
