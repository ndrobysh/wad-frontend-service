'use client'

import { StarIcon } from '@/components/icons'
import { getElementConfig } from '@/lib/constants/elements'
import { XpProgress } from '@/components/players/xp-progress'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import type { Monster } from '@/lib/types/monster'

interface MonsterDetailHeaderProps {
  monster: Monster
}

export function MonsterDetailHeader({ monster }: MonsterDetailHeaderProps) {
  const config = getElementConfig(monster.elementType)
  const ElementIcon = config.icon

  return (
    <div
      className="rounded-sm border-2 border-border bg-card p-6 border-t-4"
      style={{ borderTopColor: config.color }}
    >
      <div className="flex justify-center py-4">
        <MonsterSprite name={monster.name} elementType={monster.elementType} size={160} className="mx-auto" />
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ElementIcon className={`h-5 w-5 ${config.textClass}`} size={20} />
            <span className={`text-sm capitalize ${config.textClass}`}>{monster.elementType}</span>
          </div>
          <h1 className="text-3xl font-bold text-white">{monster.name}</h1>
          <p className="text-sm text-slate-400 mt-1">Propriétaire: {monster.owner}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-secondary border-2 border-border">
            <StarIcon className="h-4 w-4 text-primary" size={16} />
            <span className="text-sm font-mono font-semibold">Niv. {monster.level}</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-slate-400">
              XP: {monster.experience} &bull; Points de compétence: {monster.skillPoints}
            </p>
          </div>
        </div>
      </div>

      <XpProgress current={monster.experience % 100} max={100} colorClass="bg-primary" />
    </div>
  )
}
