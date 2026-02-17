'use client'

import { Star } from 'lucide-react'
import { getElementConfig } from '@/lib/constants/elements'
import { XpProgress } from '@/components/players/xp-progress'
import type { Monster } from '@/lib/types/monster'

interface MonsterDetailHeaderProps {
  monster: Monster
}

export function MonsterDetailHeader({ monster }: MonsterDetailHeaderProps) {
  const config = getElementConfig(monster.elementType)
  const ElementIcon = config.icon

  return (
    <div className={`rounded-2xl border ${config.border} bg-gradient-to-br ${config.gradient} p-6`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ElementIcon className="h-5 w-5 text-slate-300" />
            <span className="text-sm text-slate-400 capitalize">{monster.elementType}</span>
          </div>
          <h1 className="text-3xl font-bold text-white">{monster.name}</h1>
          <p className="text-sm text-slate-400 mt-1">Propriétaire: {monster.owner}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Niv. {monster.level}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">
              XP: {monster.experience} &bull; Points de compétence: {monster.skillPoints}
            </p>
          </div>
        </div>
      </div>

      <XpProgress current={monster.experience % 100} max={100} colorClass="bg-amber-500" />
    </div>
  )
}
