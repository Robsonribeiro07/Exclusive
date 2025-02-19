import { CategoryHeader } from './category-header'
import { CategoryCarousel } from './category-carousel'

export function CategoryContent() {
  return (
    <div className="h-full max-h-[19.5625rem] mt-[10.8125rem] flex gap-[4.5625rem] flex-col">
      <CategoryHeader />
      <CategoryCarousel />
    </div>
  )
}
