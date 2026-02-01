import { Skeleton } from '@/components/ui/skeleton'

export default function ProfileLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-12 w-48 rounded-xl bg-white/5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-64 rounded-2xl bg-white/5" />
        <Skeleton className="h-64 rounded-2xl bg-white/5" />
      </div>
    </div>
  )
}
