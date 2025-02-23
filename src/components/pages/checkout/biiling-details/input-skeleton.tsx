import { Skeleton } from '@/components/ui/skeleton'

export function InputSkeleton() {
  return (
    <Skeleton className="w-full h-[3rem] bg-secondary mt-2 px-3 disabled:opacity-60 disabled:cursor-not-allowed" />
  )
}
