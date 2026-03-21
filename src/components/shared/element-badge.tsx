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
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-1 rounded-sm border-2',
        config.bgClass,
        config.borderClass,
        className
      )}
    >
      <Icon className={cn('h-4 w-4', config.textClass)} />
      <span className={cn('text-xs font-mono capitalize', config.textClass)}>{elementType}</span>
    </div>
  )
}
