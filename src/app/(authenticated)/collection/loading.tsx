import { Skeleton } from '@/components/ui/skeleton'

export default function CollectionLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-64 rounded-xl bg-white/5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
