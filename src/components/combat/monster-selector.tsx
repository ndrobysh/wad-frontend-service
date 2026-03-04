'use client'

import { cn } from '@/lib/utils'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { Star } from 'lucide-react'
import type { Monster } from '@/lib/types/monster'

interface MonsterSelectorProps {
  monsters: Monster[]
  selectedId: string | null
  onSelect: (id: string) => void
  disabledId?: string
  label: string
}

export function MonsterSelector({
  monsters,
  selectedId,
  onSelect,
  disabledId,
  label,
}: MonsterSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-slate-300">{label}</p>
      <div className="max-h-64 overflow-y-auto pr-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {monsters.map((monster) => {
            const config = getElementConfig(monster.elementType)
            const ElementIcon = config.icon
            const isSelected = selectedId === monster.id
            const isDisabled = disabledId === monster.id

            return (
              <button
                key={monster.id}
                type="button"
                onClick={() => onSelect(monster.id)}
                disabled={isDisabled}
                className={cn(
                  'rounded-2xl border p-3 text-left transition-all duration-150 cursor-pointer',
                  'bg-white/5 hover:bg-white/10',
                  isSelected
                    ? 'ring-2 ring-violet-500 border-violet-500/50'
                    : config.border,
                  isDisabled && 'opacity-40 pointer-events-none',
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <ElementIcon className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs text-slate-400 capitalize">
                      {monster.elementType}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/10 border border-white/5">
                    <Star className="h-2.5 w-2.5 text-amber-400" />
                    <span className="text-xs font-medium">{monster.level}</span>
                  </div>
                </div>

                <p className="text-sm font-bold text-white mb-2 truncate">
                  {monster.name}
                </p>

                <MonsterStats
                  hp={monster.hp}
                  atk={monster.atk}
                  def={monster.def}
                  vit={monster.vit}
                  size="sm"
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
