'use client'

import { Trophy, Swords } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CombatLog, TurnLog } from '@/lib/types/combat'

interface CombatReplayProps {
  combat: CombatLog
}

interface TurnRowProps {
  turn: TurnLog
  isMonster1Attacker: boolean
}

function TurnRow({ turn, isMonster1Attacker }: TurnRowProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/10 bg-white/5 p-3 pl-4',
        'border-l-2',
        isMonster1Attacker ? 'border-l-blue-500' : 'border-l-red-500',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={cn(
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
              isMonster1Attacker
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-red-500/20 text-red-400',
            )}
          >
            {turn.turnNumber}
          </div>

          <div className="min-w-0">
            <span
              className={cn(
                'text-sm font-semibold',
                isMonster1Attacker ? 'text-blue-400' : 'text-red-400',
              )}
            >
              {turn.attackerName}
            </span>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
              {turn.actionDescription}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right space-y-0.5">
          <p className="text-sm font-bold text-red-400">-{turn.damageDealt} PV</p>
          <p className="text-xs text-slate-500">{turn.targetRemainingHp} PV restants</p>
        </div>
      </div>
    </div>
  )
}

export function CombatReplay({ combat }: CombatReplayProps) {
  const isMonster1Winner = combat.winnerId === combat.monster1Id

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span
            className={cn(
              'text-lg font-bold',
              isMonster1Winner ? 'text-amber-400' : 'text-white',
            )}
          >
            {combat.monster1Name}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
            <Swords className="h-4 w-4 text-red-400" />
          </div>
          <span
            className={cn(
              'text-lg font-bold',
              !isMonster1Winner ? 'text-amber-400' : 'text-white',
            )}
          >
            {combat.monster2Name}
          </span>
        </div>
      </div>

      {/* Winner announcement */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4">
        <div className="flex items-center justify-center gap-3">
          <Trophy className="h-5 w-5 text-amber-400" />
          <p className="text-base font-semibold text-amber-400">
            Vainqueur : {combat.winnerName}
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span>{combat.monster1Name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span>{combat.monster2Name}</span>
        </div>
      </div>

      {/* Turn timeline */}
      <div className="space-y-2">
        {combat.logs.map((turn: TurnLog) => {
          const isMonster1Attacker = turn.attackerId === combat.monster1Id
          return (
            <TurnRow
              key={turn.turnNumber}
              turn={turn}
              isMonster1Attacker={isMonster1Attacker}
            />
          )
        })}
      </div>

      {/* Final result summary */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center space-y-1">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
          Résultat final
        </p>
        <p className="text-base text-slate-300">
          Combat terminé en{' '}
          <span className="font-bold text-white">{combat.logs.length} tour{combat.logs.length !== 1 ? 's' : ''}</span>
        </p>
        <p className="text-sm text-amber-400 font-semibold">
          <Trophy className="inline h-4 w-4 mr-1 -mt-0.5" />
          {combat.winnerName} remporte le combat
        </p>
      </div>
    </div>
  )
}
