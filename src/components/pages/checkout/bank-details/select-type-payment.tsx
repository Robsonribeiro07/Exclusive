import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import BandeiraCart from '/public/bandeiras-cart.svg'

interface _SelectTypePayment {
  onChange: () => void
  value: string
}
export function SelectTypePayment({ onChange, value }: _SelectTypePayment) {
  return (
    <RadioGroup defaultValue="card" onValueChange={onChange} value={value}>
      <div className="flex items-center justify-between w-ful">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="cart" id="cart" />
          <label htmlFor="cart">Cartao</label>
        </div>
        <BandeiraCart />
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="pix" id="pix" />
        <label htmlFor="pix">Pix</label>
      </div>
    </RadioGroup>
  )
}
