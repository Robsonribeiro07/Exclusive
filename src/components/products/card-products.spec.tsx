import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { CardProduct } from './card-product'

describe('CardProduct', () => {
  it('should render the card product', () => {
    render(
      <CardProduct
        title="Product 1"
        price={10}
        image="https://via.placeholder.com/150"
      />
    )

    const img = screen.getByRole('img')

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=256&q=75'
    )
  })

  it('Deve renderiza o componente para adiciona ao carrinho quando mouse passar por cima ', async () => {
    render(
      <CardProduct
        title="Product 1"
        price={10}
        image="https://via.placeholder.com/150"
      />
    )

    const cardProduct = screen.getByTestId('card-product')

    const positionInitital = 'bottom-0'

    expect(screen.getByText('Add to Cart')).not.toHaveClass(positionInitital)

    fireEvent.mouseOver(cardProduct)

    await waitFor(
      () => {
        expect(screen.getByText('Add to Cart')).toHaveClass(positionInitital)
      },
      { timeout: 1000 }
    )

    fireEvent.mouseLeave(cardProduct)

    await waitFor(
      () => {
        expect(screen.getByText('Add to Cart')).not.toHaveClass(
          positionInitital
        )
      },
      { timeout: 1000 }
    )
  })
})
