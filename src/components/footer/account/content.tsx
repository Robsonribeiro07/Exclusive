import { Label } from '../labe'
import { Title } from '../title'

export function ContentAccountFooter() {
  return (
    <div>
      <Title title="Account" />

      <div className="flex flex-col gap-4 items-start mt-3">
        <Label label="My Account" />
        <Label label="Login / Register" />
        <Label label="Cart" />
        <Label label="Wishlist" />
        <Label label="Shop" />
      </div>
    </div>
  )
}
