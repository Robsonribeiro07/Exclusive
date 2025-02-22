import { Button } from '@/components/ui/button'

export function ApplyCuppomCart() {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Coupon Code"
        className="w-[18.75rem h-[2.5rem] border border-borderGray rounded text-base placeholder:text-sm px-4"
      />

      <Button className="bg-buttonRed rounded text-xs font-medium w-[11rem] h-[2.5rem] hover:bg-buttonRed/80">
        Apply Coupon
      </Button>
    </div>
  )
}
