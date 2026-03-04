// src/components/monsters/monster-combat-record.tsx
'use client'

import { useMemo } from 'react'
import { useCombatHistory } from '@/lib/hooks/use-combat-history'

interface MonsterCombatRecordProps {
  monsterId: string
}

export function MonsterCombatRecord({ monsterId }: MonsterCombatRecordProps) {
  const { combats, loading, error } = useCombatHistory()

  const { wins, losses, winRate, recentBattles } = useMemo(() => {
    const relevant = combats.filter(
      (c) => c.monster1Id === monsterId || c.monster2Id === monsterId
    )

    let w = 0
    let l = 0
    const battles = relevant.map((c) => {
      const isWin = c.winnerId === monsterId
      if (isWin) w++
      else l++

      const opponentName =
        c.monster1Id === monsterId ? c.monster2Name : c.monster1Name

      return { id: c.id, opponentName, isWin, timestamp: c.timestamp }
    })

    const total = w + l
    return {
      wins: w,
      losses: l,
      winRate: total > 0 ? Math.round((w / total) * 100) : 0,
      recentBattles: battles.slice(0, 5),
    }
  }, [combats, monsterId])

  return (
    <div className="rounded-sm border-2 border-border bg-card p-4">
      <h3 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="text-primary">&#9670;</span>
        Historique de Combat
      </h3>

      {loading ? (
        <p className="text-sm font-mono text-muted-foreground">Chargement...</p>
      ) : error ? (
        <p className="text-sm font-mono text-destructive">{error}</p>
      ) : recentBattles.length === 0 ? (
        <p className="text-sm font-mono text-muted-foreground">Aucun combat enregistré</p>
      ) : (
        <>
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-[#38b764]/10 border-2 border-[#38b764] rounded-sm p-2.5 text-center">
              <div className="text-lg font-mono font-bold text-[#38b764]">{wins}</div>
              <div className="text-[10px] font-mono uppercase text-[#38b764]">Victoires</div>
            </div>
            <div className="bg-[#be4a2f]/10 border-2 border-[#be4a2f] rounded-sm p-2.5 text-center">
              <div className="text-lg font-mono font-bold text-[#be4a2f]">{losses}</div>
              <div className="text-[10px] font-mono uppercase text-[#be4a2f]">Défaites</div>
            </div>
            <div className="bg-primary/10 border-2 border-primary rounded-sm p-2.5 text-center">
              <div className="text-lg font-mono font-bold text-primary">{winRate}%</div>
              <div className="text-[10px] font-mono uppercase text-primary">Taux</div>
            </div>
          </div>

          {/* Recent battles */}
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
            Combats Récents
          </div>
          <div className="space-y-1">
            {recentBattles.map((battle) => (
              <div
                key={battle.id}
                className="flex items-center justify-between bg-background border-2 border-border rounded-sm px-3 py-2"
              >
                <span className="text-xs font-mono text-foreground">
                  vs <span className="text-muted-foreground">{battle.opponentName}</span>
                </span>
                <span
                  className={`text-xs font-mono font-bold ${
                    battle.isWin ? 'text-[#38b764]' : 'text-[#be4a2f]'
                  }`}
                >
                  {battle.isWin ? 'VICTOIRE' : 'DÉFAITE'}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
