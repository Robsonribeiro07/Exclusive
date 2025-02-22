import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './page'
import { useParams } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
  usePathname: jest.fn(() => '/auth/sign-in/step1_Profile'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}))

describe('Page Sign In', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve renderizar step 1', () => {
    ;(useParams as jest.Mock).mockReturnValue({ step: 'step1_Profile' })

    render(<Page />)

    expect(screen.getByText('Informações Pessoais')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Sobrenome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('CPF/CNPJ')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Telefone')).toBeInTheDocument()
  })

  it('deve renderizar step 2', () => {
    ;(useParams as jest.Mock).mockReturnValue({ step: 'step2_andress' })

    render(<Page />)

    expect(screen.getByText('Location Information')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('País')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Estado')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Cidade')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Endereço')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('CEP')).toBeInTheDocument()
  })
})
