import { useChangeQuantity } from '@/hooks/cart/use-change-quantity'
import { useStateModelRemovingItems } from '@/stores/signup/cart/use-state-modal-removing-itens'
import { ChevronDown, ChevronUp } from 'lucide-react'
interface QuantityItemsCartProps {
  quantityChanger: number
  handleSetValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  productId: string
}
export function QuantityItemsCart({
  quantityChanger,
  productId,
  handleSetValue,
}: QuantityItemsCartProps) {
  const { handleChangeQuantity } = useChangeQuantity()
  const setOpen = useStateModelRemovingItems((set) => set.setOpen)
  const handleChangerQuantityOnblur = () => {
    handleChangeQuantity({
      value: quantityChanger,
      productId,
      typeChanger: 'Replace',
    })
  }

  const handleIncreaseChanger = () => {
    handleChangeQuantity({
      productId,
      typeChanger: 'increase',
      value: 1,
    })
  }

  const handleDecreaseChanger = () => {
    if (quantityChanger === 1) {
      setOpen()
      return
    }
    handleChangeQuantity({
      productId,
      typeChanger: 'decrease',
      value: 1,
    })
  }
  return (
    <div className="w-[4rem] h-[2.5rem] flex items-center justify-between border-2 rounded border-[#999999] px-3">
      <input
        className="font-regular text-base w-5 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
        value={quantityChanger}
        type="number"
        onChange={handleSetValue}
        onBlur={handleChangerQuantityOnblur}
      />

      <div className="flex items-center flex-col h-[80%]">
        <ChevronUp
          size={16}
          className="cursor-pointer"
          onClick={handleIncreaseChanger}
        />
        <ChevronDown
          size={16}
          className="cursor-pointer"
          onClick={handleDecreaseChanger}
        />
      </div>
    </div>
  )
}
