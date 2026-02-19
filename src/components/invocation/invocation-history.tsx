'use client'

import Link from 'next/link'
import { History, Clock, ExternalLink, RefreshCw } from 'lucide-react'
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
    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  FAILED: {
    label: 'Échoué',
    className: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
  PENDING: {
    label: 'En attente',
    className: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  MONSTER_CREATED: {
    label: 'Monstre créé',
    className: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <History className="h-5 w-5 text-violet-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Historique des Invocations</h2>
          <p className="text-sm text-slate-400">Vos dernières invocations</p>
        </div>
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border border-white/10 bg-white/5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 mb-4">
            <History className="h-7 w-7 text-slate-500" />
          </div>
          <p className="text-slate-400 font-medium">Aucune invocation pour le moment</p>
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
                className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between gap-4 flex-wrap"
              >
                {/* Left: timestamp + status */}
                <div className="flex items-center gap-3 flex-wrap min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{formatTimestamp(log.timestamp)}</span>
                  </div>

                  <Badge
                    variant="outline"
                    className={cn('text-xs font-medium border shrink-0', statusConfig.className)}
                  >
                    {statusConfig.label}
                  </Badge>

                  {log.errorMessage && (
                    <span className="text-xs text-red-400 truncate max-w-xs">
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
                      className="h-8 gap-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/10"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Relancer
                    </Button>
                  )}

                  {log.status === 'COMPLETED' && log.generatedMonsterId && (
                    <Link
                      href={`/collection/${log.generatedMonsterId}`}
                      className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors px-2 py-1.5 rounded-lg hover:bg-violet-500/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Voir le monstre
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
