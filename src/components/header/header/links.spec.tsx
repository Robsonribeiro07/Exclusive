import { usePathname } from 'next/navigation'
import { Links } from './links'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { toast } from 'sonner'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('sonner', () => ({
  toast: {
    dismiss: jest.fn(),
    info: jest.fn(),
  },
}))
describe('Deve renderizar o link corretamente', () => {
  it('Deve ficar com underline caso o pathname seja igual ao passado para link', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/about')

    render(<Links href="/about" name="About" />)

    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toHaveClass('underline')
  })

  it('Deve ficar sem o underline caso não passe nenhum pathname', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/')

    render(<Links href="teste" name="teste" />)
    const links = screen.getAllByRole('link', { name: 'teste' })

    links.forEach((link) => {
      expect(link).toHaveClass('no-underline')
    })
  })

  it('Deve renderiza uma tag p  caso o tipo de navigation seja diferente de Link', () => {
    render(<Links href="/about" name="About" typeNavigation="a" />)

    const button = screen.getByText('About')

    expect(button).not.toHaveAttribute('href')
  })
  it('Deve chamar a função handleAlertIsnotTypeLink caso o tipo de navigation seja diferente de Link', async () => {
    render(<Links href="/about" name="About" typeNavigation="a" />)

    const button = screen.getByText('About')

    fireEvent.click(button)

    await waitFor(() => {
      expect(toast.info).toHaveBeenCalledTimes(1)
    })
  })
})
