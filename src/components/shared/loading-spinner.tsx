import { cn } from '@/lib/utils'

export function LoadingSpinner({ label, className }: { label?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 gap-4", className)}>
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-primary rounded-sm animate-bounce [animation-delay:0ms]" />
        <div className="w-3 h-3 bg-primary rounded-sm animate-bounce [animation-delay:150ms]" />
        <div className="w-3 h-3 bg-primary rounded-sm animate-bounce [animation-delay:300ms]" />
      </div>
      {label && <p className="text-sm text-muted-foreground font-mono">{label}</p>}
    </div>
  )
}
