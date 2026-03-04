import { Skeleton } from '@/components/ui/skeleton'

export default function CombatReplayLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-32 rounded bg-white/5" />
      <Skeleton className="h-24 rounded-2xl bg-white/5" />
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
