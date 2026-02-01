import { cn } from '@/lib/utils'

interface XpProgressProps {
  current: number
  max: number
  className?: string
  colorClass?: string
}

export function XpProgress({ current, max, className, colorClass = 'bg-violet-500' }: XpProgressProps) {
  const pct = max > 0 ? Math.min((current / max) * 100, 100) : 0

  return (
    <div className={cn('h-1.5 w-full rounded-full bg-white/10', className)}>
      <div
        className={cn('h-full rounded-full transition-all duration-500', colorClass)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
