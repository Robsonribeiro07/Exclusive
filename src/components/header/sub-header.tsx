import { ChevronDown } from 'lucide-react'
export function SubHeader() {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-center text-sm text-white ">
      <div className="w-full max-w-[1170px] flex items-center justify-center gap-2 relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <p className="font-semibold">ShopNow</p>

        <div className="flex items-center gap-2 absolute right-0">
          <p>English</p>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  )
}
