'use client'

import Link from 'next/link'
import { StarIcon } from '@/components/icons'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import type { Monster } from '@/lib/types/monster'
import type { MonsterResponse } from '@/lib/types/monster'

interface MonsterCardProps {
  monster: Monster | MonsterResponse
  href?: string
}

export function MonsterCard({ monster, href }: MonsterCardProps) {
  const config = getElementConfig(monster.elementType)
  const ElementIcon = config.icon

  const content = (
    <div
      className="rounded-sm border-2 border-border bg-card p-5 hover:border-border/80 transition-colors border-l-4"
      style={{ borderLeftColor: config.color }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <ElementIcon className={`h-4 w-4 ${config.textClass}`} />
          <span className={`text-xs capitalize ${config.textClass}`}>{monster.elementType}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-secondary border-2 border-border">
          <StarIcon className="h-3 w-3 text-primary" size={12} />
          <span className="text-xs font-mono font-medium">Niv. {monster.level}</span>
        </div>
      </div>

      <h4 className="text-lg font-bold text-white mb-3">{monster.name}</h4>

      <div className="flex justify-center py-3 bg-background/50">
        <MonsterSprite name={monster.name} elementType={monster.elementType} size={96} />
      </div>

      <MonsterStats hp={monster.hp} atk={monster.atk} def={monster.def} vit={monster.vit} />
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
