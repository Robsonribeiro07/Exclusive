interface GetTotalCart {
  products:
    | {
        title: string
        price: number
        image: string[]
        quantity: number
        _id: string
      }[]
    | undefined
}
export function getTotalCart({ products }: GetTotalCart) {
  if (!products) return 0
  return products.reduce((acc, curr) => {
    acc += curr.price * curr.quantity
    return acc
  }, 0)
}
