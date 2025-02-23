'use client'
import { Skeleton } from '@/components/ui/skeleton'

export function ItemSkeletonCart() {
  return (
    <div className="grid grid-cols-4 w-full items-center shadow-sm h-[102px] px-4 gap-4">
      <div className="flex gap-4 items-center">
        <Skeleton className="w-[50px] h-[50px]" />
        <Skeleton className="w-[150px] h-[30px]" />
      </div>

      <div className="flex justify-center">
        <Skeleton className="w-[60px] h-[20px]" />
      </div>

      <div className="flex justify-center">
        <Skeleton className="w-[50px] h-[50px]" />
      </div>

      <div className="flex justify-end">
        <Skeleton className="w-[50px] h-[50px]" />
      </div>
    </div>
  )
}
