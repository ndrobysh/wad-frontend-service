'use client'

import Link from 'next/link'
import { Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CombatResponse } from '@/lib/types/combat'

interface CombatResultProps {
  result: CombatResponse
  monster1Name: string
  monster2Name: string
}

export function CombatResult({ result, monster1Name, monster2Name }: CombatResultProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6',
        'shadow-lg shadow-amber-500/10',
      )}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20">
          <Trophy className="h-7 w-7 text-amber-400" />
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-500/70">
            {monster1Name} vs {monster2Name}
          </p>
          <h2 className="text-2xl font-bold text-white">Victoire !</h2>
          <p className="text-lg font-semibold text-amber-400">{result.winnerName}</p>
        </div>

        {result.message && (
          <p className="text-sm text-slate-400 max-w-sm">{result.message}</p>
        )}

        <Link
          href={`/combat/${result.combatId}`}
          className={cn(
            'inline-flex items-center gap-2 rounded-xl px-5 py-2.5',
            'border border-amber-500/30 bg-amber-500/10 text-amber-300',
            'text-sm font-medium transition-colors',
            'hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-200',
          )}
        >
          <Trophy className="h-4 w-4" />
          Voir le replay
        </Link>
      </div>
    </div>
  )
}
