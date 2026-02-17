import { Skeleton } from '@/components/ui/skeleton'

export default function BestiaryLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-48 rounded-xl bg-white/5" />
      <div className="flex gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-16 rounded-full bg-white/5" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
