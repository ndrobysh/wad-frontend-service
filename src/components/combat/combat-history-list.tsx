'use client'

import Link from 'next/link'
import { Trophy, Swords } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CombatLog } from '@/lib/types/combat'

interface CombatHistoryListProps {
  combats: CombatLog[]
}

export function CombatHistoryList({ combats }: CombatHistoryListProps) {
  if (combats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 mb-4">
          <Swords className="h-7 w-7 text-slate-500" />
        </div>
        <p className="text-slate-400 font-medium">Aucun combat pour le moment</p>
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
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white truncate">
                    {combat.monster1Name}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase">vs</span>
                  <span className="text-sm font-semibold text-white truncate">
                    {combat.monster2Name}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <div
                    className={cn(
                      'flex items-center gap-1.5 px-2 py-1 rounded-full',
                      'border border-amber-500/30 bg-amber-500/10',
                    )}
                  >
                    <Trophy className="h-3 w-3 text-amber-400" />
                    <span className="text-xs font-medium text-amber-400">
                      {combat.winnerName}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">{formattedDate}</span>
                </div>
              </div>

              <Link
                href={`/combat/${combat.id}`}
                className={cn(
                  'shrink-0 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5',
                  'border border-white/10 bg-white/5 text-slate-300',
                  'text-xs font-medium transition-colors',
                  'hover:bg-white/10 hover:border-white/20 hover:text-white',
                )}
              >
                Voir le replay
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
