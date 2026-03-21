'use client'

import { cn } from '@/lib/utils'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import { StarIcon } from '@/components/icons'
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
      <p className="text-sm font-mono font-medium uppercase tracking-wide text-slate-300">{label}</p>
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
                  'bg-card border-2 rounded-sm p-3 text-left transition-all duration-150 cursor-pointer',
                  'hover:bg-secondary',
                  isSelected
                    ? 'border-primary ring-2 ring-primary/40'
                    : 'border-border hover:border-primary/40',
                  isDisabled && 'opacity-40 pointer-events-none',
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <ElementIcon className={cn('h-3.5 w-3.5', config.textClass)} size={14} />
                    <span className={cn('text-xs font-mono capitalize', config.textClass)}>
                      {monster.elementType}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-secondary border border-border">
                    <StarIcon className="h-2.5 w-2.5 text-primary" size={10} />
                    <span className="text-xs font-mono font-medium">{monster.level}</span>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <MonsterSprite name={monster.name} elementType={monster.elementType} size={64} />
                </div>

                <p className="text-sm font-mono font-bold text-white mb-2 truncate uppercase tracking-wide">
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
