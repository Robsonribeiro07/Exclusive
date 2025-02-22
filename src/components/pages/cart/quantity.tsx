import { ChevronDown, ChevronUp } from 'lucide-react'

export function QuantityItemsCart() {
  return (
    <div className="w-[4rem] h-[2.5rem] flex items-center justify-between border-2 rounded border-[#999999] px-3">
      <p className="font-regular text-base ">01</p>

      <div className="flex items-center flex-col h-[80%]">
        <ChevronUp size={16} className="cursor-pointer" />
        <ChevronDown size={16} className="cursor-pointer" />
      </div>
    </div>
  )
}
