import { Skeleton } from '@/components/ui/skeleton'

export default function CombatLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-64 rounded-xl bg-white/5" />
      <Skeleton className="h-80 rounded-2xl bg-white/5" />
      <Skeleton className="h-8 w-48 rounded bg-white/5" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
