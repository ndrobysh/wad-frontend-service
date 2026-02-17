import { getElementConfig } from '@/lib/constants/elements'
import { cn } from '@/lib/utils'

interface ElementBadgeProps {
  elementType: string
  className?: string
}

export function ElementBadge({ elementType, className }: ElementBadgeProps) {
  const config = getElementConfig(elementType)
  const Icon = config.icon

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Icon className="h-4 w-4 text-slate-400" />
      <span className="text-xs text-slate-400 capitalize">{elementType}</span>
    </div>
  )
}
