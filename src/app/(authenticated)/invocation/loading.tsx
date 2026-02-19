import { Skeleton } from '@/components/ui/skeleton'

export default function InvocationLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-64 rounded-xl bg-white/5" />
      <Skeleton className="h-64 rounded-2xl bg-white/5" />
      <Skeleton className="h-8 w-48 rounded bg-white/5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
