import { render, screen } from '@testing-library/react'
import { ButtonSubmitOrOnClick } from './button-submit-or-onclick'

describe('Renderiza Botao submit', () => {
  it('Deve renderiza o loading', () => {
    const { container } = render(
      <ButtonSubmitOrOnClick isPending>
        <p>ola</p>
      </ButtonSubmitOrOnClick>
    )

    const loading = container.querySelector('.loading-wave')
    expect(loading).toBeInTheDocument()
  })

  it('Deve renderiza o button Continuar', () => {
    render(
      <ButtonSubmitOrOnClick>
        <p>Continuar</p>
      </ButtonSubmitOrOnClick>
    )

    const button = screen.getByRole('button', { name: 'Continuar' })
    expect(button).toBeInTheDocument()
  })

  it('deve renderiza o buton sucess', () => {
    const { container } = render(
      <ButtonSubmitOrOnClick Sucess>
        <p>Continuar</p>
      </ButtonSubmitOrOnClick>
    )

    const check = container.querySelector('svg')

    expect(check).toHaveClass('lucide-check')
  })
})
