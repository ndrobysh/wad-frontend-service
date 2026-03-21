'use client'

import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export default function AuthenticatedError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="border-2 border-destructive bg-card rounded-sm p-8 flex flex-col items-center gap-4 max-w-md">
        <h2 className="text-xl font-mono font-bold uppercase tracking-wide">Une erreur est survenue</h2>
        <p className="text-muted-foreground text-sm font-mono">{error.message}</p>
        <Button onClick={reset} variant="destructive" className="font-mono">
          <RefreshCw className="h-4 w-4 mr-2" />
          Réessayer
        </Button>
      </div>
    </div>
  )
}
