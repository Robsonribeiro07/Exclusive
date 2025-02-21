import { render, screen } from '@testing-library/react'
import { StarRating } from './SartRating'

describe('StartRating', () => {
  it('Deve renderiza as Estrelas com base na quantidade de avaliaçoes positivas', () => {
    render(<StarRating totalReviews={10} positiveReviews={8} />)

    const filledStar = screen.getAllByTestId(/star-/)

    const FilterStart = filledStar.filter((Star) => {
      return Star.classList.contains('fill-yellow-400')
    })

    expect(FilterStart).toHaveLength(4)

    const halfsStart = filledStar.filter((Star) => {
      return !Star.classList.contains('fill-yellow-400')
    })

    expect(halfsStart).toHaveLength(1)
  })
  it('Deve renderiza 0 estrelas se nao houver avaliaçoes', () => {
    render(<StarRating totalReviews={0} positiveReviews={0} />)

    const filledStar = screen.queryAllByTestId(/star-/)

    const FilterStart = filledStar.filter((Star) => {
      return Star.classList.contains('fill-yellow-400')
    })

    expect(FilterStart).toHaveLength(0)
  })

  it('Deve renderizar corretamente com avaliaçoes Maximas', () => {
    render(<StarRating totalReviews={10} positiveReviews={10} />)

    const filledStar = screen.getAllByTestId(/star-/)

    const FilterStart = filledStar.filter((Star) => {
      return Star.classList.contains('fill-yellow-400')
    })

    expect(FilterStart).toHaveLength(5)
  })
})
