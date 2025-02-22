'use client'
import { Product } from '@/api/products/get-products'
import { HeaderCart } from './header'
import { ItemsCart } from './Items-cart'
import { Button } from '../../ui/button'

export function CartContent({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col">
      <HeaderCart />
      <div className="flex flex-col gap-10 flex-1">
        {Array.isArray(products) && products.length > 0 ? (
          products.slice(0, 3).map((product) => {
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
        <div className="flex justify-between w-full">
          <Button
            variant="outline"
            className="rounded  border-[#7F7F7F] px-10 py-5"
          >
            Return To Shop
          </Button>
          <Button
            variant="outline"
            className="rounded px-10 py-5 border-[#7F7F7F]"
          >
            Update Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
