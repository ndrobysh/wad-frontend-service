import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-2xl bg-white/5" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-2xl bg-white/5" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-48 rounded bg-white/5" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`monster-${i}`} className="h-40 rounded-2xl bg-white/5" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={`access-${i}`} className="h-20 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
