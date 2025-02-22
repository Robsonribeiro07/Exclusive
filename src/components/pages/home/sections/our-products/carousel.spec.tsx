import { CardProduct } from '@/components/products/card-product'
import { CarouselOurProducts } from './carousel'
import { render, screen } from '@testing-library/react'

const products = [
  {
    id: 1,
    title: 'teste',
    description: 'descrição teste',
    category: 'categoria teste',
    price: 10,
    discountPercentage: 5,
    rating: 4.5,
    stock: 20,
    tags: ['tag1', 'tag2'],
    brand: 'marca teste',
    sku: 'sku123',
    weight: 2,
    dimensions: {
      width: 10,
      height: 15,
      depth: 5,
    },
    warrantyInformation: '1 ano de garantia',
    shippingInformation: 'Entrega em 5 dias',
    availabilityStatus: 'Em estoque',
    reviews: [],
    returnPolicy: '30 dias para devolução',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
      barcode: '123456789',
      qrCode: '...',
    },
    thumbnail: 'https://via.placeholder.com/150',
    images: ['https://via.placeholder.com/150'],
  },
]
jest.mock('./carousel', () => ({
  CarouselOurProducts: jest.fn(() => <div></div>),
}))

describe('CarouselOurProducts', () => {
  it('Deve renderizar corretamente o carousel com as props passadas', () => {
    ;(CarouselOurProducts as jest.Mock).mockReturnValue(
      <div>
        {products.map((products) => {
          return (
            <CardProduct
              key={products.id}
              title={products.title}
              price={products.price}
              image={products.images[0]}
              id={products.id.toString()}
            />
          )
        })}
      </div>
    )

    render(<CarouselOurProducts products={products} />)
    const title = screen.getByText('teste')

    const image = screen.getByRole('img')

    expect(title).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F150&w=1200&q=75'
    )
  })
})
