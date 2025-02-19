import { StickyHeader } from '@/components/home/StickyHeader'
import { Button } from '@/components/ui/button'

export function HeaderThisMonth() {
  return (
    <div>
      <StickyHeader>
        <p>This Month</p>
      </StickyHeader>

      <div className="w-full flex justify-between mt-3">
        <h1 className="font-semibold text-[2.1rem]">Best Selling Products</h1>
        <Button className="bg-buttonRed w-[9.3125rem] h-[3.2rem]">
          View All
        </Button>
      </div>
    </div>
  )
}
