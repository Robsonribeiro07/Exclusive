'use client'
import { Product } from '@/api/products/get-products'
import { HeaderCart } from './header'
import { ItemsCart } from './Items-cart'

export function CartContent({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col">
      <HeaderCart />
      <div className="flex flex-col gap-10">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => {
            return (
              <ItemsCart
                key={product.id}
                image={product.images[0]}
                name={product.title}
                price={product.price}
              />
            )
          })
        ) : (
          <p>Nenhum produto no carrinho</p>
        )}
      </div>
    </div>
  )
}
