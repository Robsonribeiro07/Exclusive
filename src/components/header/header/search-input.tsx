import { Search } from 'lucide-react'

export function SearchInput() {
  return (
    <div className="w-[16.2rem] h-[2.5rem] pl-[1.3rem] pr-[0.875rem] flex items-center  py-[0.8rem] rounded-sm bg-inputBacground">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full bg-transparent text-sm text-black"
      />

      <Search color="black" />
    </div>
  )
}
