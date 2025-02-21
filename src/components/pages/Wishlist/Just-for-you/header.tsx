import { Button } from '@/components/teste'
import { StickyHeader } from '../../home/StickyHeader'

export function HeaderForYou() {
  return (
    <header className="flex w-full justify-between items-center">
      <StickyHeader
        textColor="#000000"
        fontWeight="font-regular"
        fontSize="text-[1.2rem]"
      >
        Just for you
      </StickyHeader>

      <Button className="text-base font-medium bg-transparent w-[7.9375rem] h-[1.5rem] px-[5rem] py-[1.5rem] text-black border border-[#7F7F7F] flex items-center justify-center whitespace-nowrap hover:bg-white/10">
        See all
      </Button>
    </header>
  )
}
