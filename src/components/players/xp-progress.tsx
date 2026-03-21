import { cn } from '@/lib/utils'

interface XpProgressProps {
  current: number
  max: number
  className?: string
  colorClass?: string
}

export function XpProgress({ current, max, className, colorClass = 'bg-primary' }: XpProgressProps) {
  const pct = max > 0 ? Math.min((current / max) * 100, 100) : 0

  return (
    <div className={cn('h-3 w-full rounded-none bg-secondary', className)}>
      <div
        className={cn('h-full rounded-none transition-all duration-500', colorClass)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
