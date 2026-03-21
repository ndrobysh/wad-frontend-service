import { Skeleton } from '@/components/ui/skeleton'

export default function MonsterDetailLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-10 w-32 rounded-sm bg-secondary" />
      <Skeleton className="h-48 rounded-sm bg-secondary" />
      <Skeleton className="h-32 rounded-sm bg-secondary" />
      <Skeleton className="h-48 rounded-sm bg-secondary" />
    </div>
  )
}
