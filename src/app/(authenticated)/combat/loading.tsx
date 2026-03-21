import { Skeleton } from '@/components/ui/skeleton'

export default function CombatLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-64 rounded-sm bg-secondary" />
      <Skeleton className="h-80 rounded-sm bg-secondary" />
      <Skeleton className="h-8 w-48 rounded-sm bg-secondary" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-sm bg-secondary" />
        ))}
      </div>
    </div>
  )
}
