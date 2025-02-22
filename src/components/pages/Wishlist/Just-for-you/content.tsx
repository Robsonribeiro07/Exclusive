import { HeaderForYou } from './header'
import { CarouselForYou } from './carousel-for-you'
import { ResponseProducts } from '@/app/(public)/home/products/wishlist/page'

export function ContentForYou({ data }: { data: ResponseProducts[] }) {
  return (
    <div className="flex gap-10 flex-col ">
      <HeaderForYou />
      <CarouselForYou data={data} />
    </div>
  )
}
