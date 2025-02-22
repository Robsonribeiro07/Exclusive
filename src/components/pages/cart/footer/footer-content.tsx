import { ApplyCuppomCart } from './apply-cuppom'
import { TotalCart } from './total-cart'

export function FooterContentCart() {
  return (
    <div className="flex justify-between">
      <ApplyCuppomCart />
      <TotalCart />
    </div>
  )
}
