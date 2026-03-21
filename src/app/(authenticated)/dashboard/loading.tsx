import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-sm bg-secondary" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-sm bg-secondary" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-48 rounded-sm bg-secondary" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`monster-${i}`} className="h-40 rounded-sm bg-secondary" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={`access-${i}`} className="h-20 rounded-sm bg-secondary" />
        ))}
      </div>
    </div>
  )
}
