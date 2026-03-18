import { cn } from '@/lib/utils'

interface SegmentedStatBarProps {
  value: number
  maxValue: number
  color: string
  segments?: number
}

export function SegmentedStatBar({ value, maxValue, color, segments = 5 }: SegmentedStatBarProps) {
  const ratio = maxValue > 0 ? value / maxValue : 0
  const filledCount = Math.floor(ratio * segments)
  const hasPartial = ratio * segments - filledCount > 0.25

  return (
    <div className="flex gap-[1px]">
      {Array.from({ length: segments }, (_, i) => {
        const isFilled = i < filledCount
        const isPartial = i === filledCount && hasPartial

        return (
          <div
            key={i}
            className={cn(
              'h-[6px] flex-1 rounded-[1px]',
              isFilled || isPartial ? '' : 'bg-[#333c57]'
            )}
            style={
              isFilled
                ? { backgroundColor: color }
                : isPartial
                  ? { backgroundColor: color, opacity: 0.5 }
                  : undefined
            }
          />
        )
      })}
    </div>
  )
}
