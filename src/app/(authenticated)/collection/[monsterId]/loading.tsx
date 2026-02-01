import { Skeleton } from '@/components/ui/skeleton'

export default function MonsterDetailLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-10 w-32 rounded-xl bg-white/5" />
      <Skeleton className="h-48 rounded-2xl bg-white/5" />
      <Skeleton className="h-32 rounded-2xl bg-white/5" />
      <Skeleton className="h-48 rounded-2xl bg-white/5" />
    </div>
  )
}
