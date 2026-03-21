'use client'

import Link from 'next/link'
import { ScrollIcon } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { InvocationLog, InvocationStatus } from '@/lib/types/invocation'

interface InvocationHistoryProps {
  history: InvocationLog[]
  onRetry: (logId: string) => void
  retrying: boolean
}

interface StatusConfig {
  label: string
  className: string
}

const STATUS_CONFIG: Record<InvocationStatus, StatusConfig> = {
  COMPLETED: {
    label: 'Terminé',
    className: 'bg-[#38b764]/20 text-[#38b764] border-[#38b764]/50 rounded-sm',
  },
  FAILED: {
    label: 'Échoué',
    className: 'bg-destructive/20 text-destructive border-destructive/50 rounded-sm',
  },
  PENDING: {
    label: 'En attente',
    className: 'bg-[#ffcd75]/20 text-[#ffcd75] border-[#ffcd75]/50 rounded-sm',
  },
  MONSTER_CREATED: {
    label: 'Monstre créé',
    className: 'bg-[#5fcde4]/20 text-[#5fcde4] border-[#5fcde4]/50 rounded-sm',
  },
}

function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function InvocationHistory({ history, onRetry, retrying }: InvocationHistoryProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-secondary rounded-sm border-2 border-border">
          <ScrollIcon className="h-5 w-5 text-primary" size={20} />
        </div>
        <div>
          <h2 className="font-mono text-xl uppercase tracking-wide text-white">
            Historique des Invocations
          </h2>
          <p className="text-sm text-slate-400">Vos dernières invocations</p>
        </div>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-card border-2 border-border rounded-sm">
          <div className="flex h-14 w-14 items-center justify-center bg-secondary rounded-sm mb-4 border-2 border-border">
            <ScrollIcon className="h-7 w-7 text-slate-500" size={28} />
          </div>
          <p className="text-slate-400 font-mono font-medium">Aucune invocation pour le moment</p>
          <p className="text-slate-500 text-sm mt-1">
            Lancez votre première invocation pour la voir apparaître ici.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((log) => {
            const statusConfig = STATUS_CONFIG[log.status]

            return (
              <div
                key={log.id}
                className="bg-card border-2 border-border rounded-sm p-4 flex items-center justify-between gap-4 flex-wrap"
              >
                {/* Left: timestamp + status */}
                <div className="flex items-center gap-3 flex-wrap min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0 font-mono">
                    <span className="text-slate-600">[</span>
                    <span>{formatTimestamp(log.timestamp)}</span>
                    <span className="text-slate-600">]</span>
                  </div>

                  <Badge
                    variant="outline"
                    className={cn('text-xs font-mono font-medium border shrink-0', statusConfig.className)}
                  >
                    {statusConfig.label}
                  </Badge>

                  {log.errorMessage && (
                    <span className="text-xs text-destructive truncate max-w-xs font-mono">
                      {log.errorMessage}
                    </span>
                  )}
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {log.status === 'FAILED' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={retrying}
                      onClick={() => onRetry(log.id)}
                      className="h-8 gap-1.5 text-xs font-mono text-slate-400 hover:text-white hover:bg-secondary rounded-sm border border-border"
                    >
                      {retrying ? '...' : '[Relancer]'}
                    </Button>
                  )}

                  {log.status === 'COMPLETED' && log.generatedMonsterId && (
                    <Link
                      href={`/collection/${log.generatedMonsterId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors px-2 py-1.5 rounded-sm hover:bg-primary/10 border border-primary/30"
                    >
                      &gt; Voir le monstre
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
