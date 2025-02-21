import { Button } from '@/components/ui/button'
interface HeaderCategoryIdProps {
  totalProducts: number
}
export function HeaderCategoryId({ totalProducts }: HeaderCategoryIdProps) {
  return (
    <header className="flex w-full justify-between text-black">
      <h2 className="text-[1.2rem] font-regular">Wishlist ({totalProducts})</h2>
      <Button className="text-base font-medium bg-transparent w-[7.9375rem] h-[1.5rem] px-[7rem] py-[1.5rem] text-black border border-[#7F7F7F]">
        Move All To Bag
      </Button>
    </header>
  )
}
