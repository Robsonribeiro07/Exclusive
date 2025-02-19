import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { IconName } from '../../../../public/category/index'
import { CategoryCard } from './category-card'

const categories = [
  'phone',
  'laptop',
  'smartwatch',
  'camera',
  'headphones',
  'gaming',
] as IconName[]
export function CategoryCarousel() {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem key={category} className="basis-1/6">
            <CategoryCard label={category} icon={category} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center gap-2 absolute right-12 top-[-5rem]">
        <CarouselPrevious className="bg-gray200" />
        <CarouselNext className="bg-gray200" />
      </div>
    </Carousel>
  )
}
