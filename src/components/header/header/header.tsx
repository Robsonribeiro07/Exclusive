import { Heart } from 'lucide-react'
import { Navigation } from './navigation'
import { SearchInput } from './search-input'
import { DetailsProfile } from '@/components/profile/details/details'
import { HandleNavigationLoggin } from './handle-navigation-loggin'
export function Header() {
  return (
    <div className="w-full mt-10 flex items-center h-8  justify-between  max-w-[1170px] ">
      <div className="gap-[11.875rem] flex">
        <h1 className="text-xl text-black font-bold">Exclusive</h1>

        <Navigation />
      </div>

      <div className="flex items-center gap-6">
        <SearchInput />

        <div className="flex gap-6 text-black items-center">
          <Heart className="cursor-pointer" />
          <HandleNavigationLoggin />
          <DetailsProfile />
        </div>
      </div>
    </div>
  )
}
