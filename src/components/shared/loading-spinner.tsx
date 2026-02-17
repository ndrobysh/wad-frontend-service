import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
  label?: string
}

export function LoadingSpinner({ className, label }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <Loader2 className={cn('h-8 w-8 animate-spin text-violet-400', className)} />
      {label && <p className="text-sm text-slate-400">{label}</p>}
    </div>
  )
}
