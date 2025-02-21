import { Button } from '@/components/ui/button'
interface HeaderCategoryIdProps {
  totalProducts: number
}
export function HeaderCategoryId({ totalProducts }: HeaderCategoryIdProps) {
  return (
    <header className="flex w-full justify-between text-black">
      <h2 className="text-[1.2rem] font-regular">Wishlist ({totalProducts})</h2>
      <Button className="text-base font-medium bg-transparent w-[5.9375rem] h-[1.5rem] px-[6rem] py-[1.5rem] text-black border border-[#7F7F7F] hover:bg-white/10 rounded">
        Move All To Bag
      </Button>
    </header>
  )
}
