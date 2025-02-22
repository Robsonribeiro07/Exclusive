import { render, screen } from '@testing-library/react'

import { usePathname } from 'next/navigation'
import { Breadcrumbs } from './Breadcrumbs'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('Breadcrumbs', () => {
  it('Deve renderiza corretamente o caminho atual da minha url formatada', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/auth/login/cart')

    render(<Breadcrumbs />)

    const text = screen.getByText('auth')
    const text2 = screen.getByText('login')
    const text3 = screen.getByText('cart')

    expect(text).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
    expect(text3).toBeInTheDocument()
  })
})
