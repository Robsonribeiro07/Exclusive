import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '../ui/select'
export function SubHeader() {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-center text-sm text-white ">
      <div className="w-full max-w-[1170px] flex items-center justify-center gap-2 relative">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>

        <p className="font-semibold">ShopNow</p>

        <div className="flex items-center gap-2 absolute right-0">
          <Select defaultValue={'English'}>
            <SelectTrigger className="bg-transparent border-none text-white flex gap-3 ">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Portuguese">Portugues</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  )
}
