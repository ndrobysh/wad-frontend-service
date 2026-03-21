'use client'

import Link from 'next/link'
import { StarIcon } from '@/components/icons'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import { cn } from '@/lib/utils'
import type { CombatResponse } from '@/lib/types/combat'

interface CombatResultProps {
  result: CombatResponse
  monster1Name: string
  monster2Name: string
  winnerElementType: string
}

export function CombatResult({ result, monster1Name, monster2Name, winnerElementType }: CombatResultProps) {
  return (
    <div
      className={cn(
        'bg-card border-2 border-primary rounded-sm p-6',
      )}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center bg-secondary rounded-sm border-2 border-primary">
          <StarIcon className="h-7 w-7 text-primary" size={28} />
        </div>

        <div className="flex justify-center py-3">
          <MonsterSprite name={result.winnerName} elementType={winnerElementType} size={96} />
        </div>

        <div className="space-y-1">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-primary/70">
            {monster1Name} vs {monster2Name}
          </p>
          <h2 className="text-2xl font-mono font-bold uppercase tracking-wide text-white">
            Victoire !
          </h2>
          <p className="text-lg font-mono font-semibold text-primary">{result.winnerName}</p>
        </div>

        {result.message && (
          <p className="text-sm text-slate-400 max-w-sm">{result.message}</p>
        )}

        <Link
          href={`/combat/${result.combatId}`}
          className={cn(
            'inline-flex items-center gap-2 rounded-sm px-5 py-2.5',
            'border-2 border-primary bg-primary/10 text-primary',
            'font-mono text-sm font-medium transition-colors',
            'hover:bg-primary/20 hover:text-white',
          )}
        >
          <StarIcon className="h-4 w-4 text-primary" size={16} />
          Voir le replay
        </Link>
      </div>
    </div>
  )
}
