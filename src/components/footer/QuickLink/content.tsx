;<Label label="Wishlist" />
import { Label } from '../labe'
import { Title } from '../title'

export function ContentQuickLink() {
  return (
    <div>
      <Title title="Quick Link" />

      <div className="flex flex-col gap-4 items-start mt-3">
        <Label label="Privacy Policy" />
        <Label label="Terms Of Use" />
        <Label label="FAQ" />
      </div>
    </div>
  )
}
