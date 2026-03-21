'use client'

import Link from 'next/link'
import { CombatIcon, StarIcon } from '@/components/icons'
import { cn } from '@/lib/utils'
import type { CombatLog } from '@/lib/types/combat'

interface CombatHistoryListProps {
  combats: CombatLog[]
}

export function CombatHistoryList({ combats }: CombatHistoryListProps) {
  if (combats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center bg-secondary rounded-sm border-2 border-border mb-4">
          <CombatIcon className="h-7 w-7 text-slate-500" size={28} />
        </div>
        <p className="text-slate-400 font-mono font-medium">Aucun combat pour le moment</p>
        <p className="text-slate-500 text-sm mt-1">
          Lancez votre premier combat depuis l&apos;arène ci-dessus !
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {combats.map((combat) => {
        const formattedDate = new Date(combat.timestamp).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })

        return (
          <div
            key={combat.id}
            className="bg-card border-2 border-border rounded-sm p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-mono font-semibold text-white truncate uppercase tracking-wide">
                    {combat.monster1Name}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">vs</span>
                  <span className="text-sm font-mono font-semibold text-white truncate uppercase tracking-wide">
                    {combat.monster2Name}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <div
                    className={cn(
                      'flex items-center gap-1.5 px-2 py-1 rounded-sm',
                      'border-2 border-primary/50 bg-primary/10',
                    )}
                  >
                    <StarIcon className="h-3 w-3 text-primary" size={12} />
                    <span className="text-xs font-mono font-medium text-primary">
                      {combat.winnerName}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{formattedDate}</span>
                </div>
              </div>

              <Link
                href={`/combat/${combat.id}`}
                className={cn(
                  'shrink-0 inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5',
                  'border-2 border-border bg-secondary text-slate-300',
                  'text-xs font-mono font-medium transition-colors',
                  'hover:border-primary/50 hover:text-white',
                )}
              >
                &gt; Replay
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
