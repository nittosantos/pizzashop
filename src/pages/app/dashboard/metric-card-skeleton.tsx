import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-24" />
      <Skeleton className="h-4 w-52" />
    </>
  )
}
