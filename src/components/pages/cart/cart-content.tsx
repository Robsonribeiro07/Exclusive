'use client'
import { HeaderCart } from './header'
import { ItemsCart } from './Items-cart'
import { Button } from '../../ui/button'
import { useGetProductsCart } from '@/hooks/cart/use-get-products'
import { ItemSkeletonCart } from './item-seleton'

export function CartContent() {
  const { products, isFetching } = useGetProductsCart()

  console.log(`products${JSON.stringify(products)}`)
  return (
    <div className="flex flex-col">
      <HeaderCart />
      <div className="flex flex-col gap-10 flex-1">
        {isFetching || !products ? (
          // Mostra 3 Skeletons para simular os itens do carrinho
          <ItemSkeletonCart />
        ) : products && !products?.products.length ? (
          <p>Nenhum produto no carrinho</p>
        ) : (
          products?.products.map((product) => (
            <ItemsCart
              key={product._id}
              image={product.image[0]}
              name={product.title}
              price={product.price}
              quantity={product.quantity}
              productId={product._id}
            />
          ))
        )}

        <div className="flex justify-between w-full">
          <Button
            variant="outline"
            className="rounded border-[#7F7F7F] px-10 py-5"
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
