'use client'

import { CombatIcon, StarIcon } from '@/components/icons'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
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
        'bg-card border-2 border-border rounded-sm p-3 pl-4',
        'border-l-4',
        isMonster1Attacker ? 'border-l-[#5fcde4]' : 'border-l-[#f77622]',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={cn(
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border-2 text-xs font-mono font-bold',
              isMonster1Attacker
                ? 'bg-[#5fcde4]/20 text-[#5fcde4] border-[#5fcde4]/50'
                : 'bg-[#f77622]/20 text-[#f77622] border-[#f77622]/50',
            )}
          >
            {turn.turnNumber}
          </div>

          <div className="min-w-0">
            <span
              className={cn(
                'text-sm font-mono font-semibold uppercase tracking-wide',
                isMonster1Attacker ? 'text-[#5fcde4]' : 'text-[#f77622]',
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
          <p className="text-sm font-mono font-bold text-destructive">-{turn.damageDealt} PV</p>
          <p className="text-xs font-mono text-slate-500">{turn.targetRemainingHp} PV restants</p>
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
      <div className="bg-card border-2 border-border rounded-sm p-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <MonsterSprite name={combat.monster1Name} elementType="" size={48} />
            <span
              className={cn(
                'text-lg font-mono font-bold uppercase tracking-wide',
                isMonster1Winner ? 'text-primary' : 'text-white',
              )}
            >
              {combat.monster1Name}
            </span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-destructive/20 border-2 border-destructive/50">
            <CombatIcon className="h-4 w-4 text-destructive" size={16} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <MonsterSprite name={combat.monster2Name} elementType="" size={48} />
            <span
              className={cn(
                'text-lg font-mono font-bold uppercase tracking-wide',
                !isMonster1Winner ? 'text-primary' : 'text-white',
              )}
            >
              {combat.monster2Name}
            </span>
          </div>
        </div>
      </div>

      {/* Winner announcement */}
      <div className="bg-card border-2 border-primary rounded-sm p-4">
        <div className="flex items-center justify-center gap-3">
          <StarIcon className="h-5 w-5 text-primary" size={20} />
          <p className="text-base font-mono font-semibold uppercase tracking-wide text-primary">
            Vainqueur : {combat.winnerName}
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-[#5fcde4]" />
          <span>{combat.monster1Name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-[#f77622]" />
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
      <div className="bg-card border-2 border-border rounded-sm p-5 text-center space-y-1">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
          Résultat final
        </p>
        <p className="text-base font-mono text-slate-300">
          Combat terminé en{' '}
          <span className="font-bold text-white">
            {combat.logs.length} tour{combat.logs.length !== 1 ? 's' : ''}
          </span>
        </p>
        <p className="text-sm font-mono text-primary font-semibold flex items-center justify-center gap-1.5">
          <StarIcon className="inline h-4 w-4 text-primary" size={16} />
          {combat.winnerName} remporte le combat
        </p>
      </div>
    </div>
  )
}
