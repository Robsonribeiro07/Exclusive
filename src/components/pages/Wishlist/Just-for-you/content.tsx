import { ResponseProducts } from '@/app/(public)/products/wishlist/page'

import { HeaderForYou } from './header'
import { CarouselForYou } from './carousel-for-you'

export function ContentForYou({ data }: { data: ResponseProducts[] }) {
  return (
    <div className="flex gap-10 flex-col ">
      <HeaderForYou />
      <CarouselForYou data={data} />
    </div>
  )
}
