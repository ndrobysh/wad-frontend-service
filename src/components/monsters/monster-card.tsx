'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
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
      className={`rounded-2xl border ${config.border} bg-linear-to-br ${config.gradient} p-5 hover:border-white/20 transition-colors`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <ElementIcon className="h-4 w-4 text-slate-400" />
          <span className="text-xs text-slate-400 capitalize">{monster.elementType}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 border border-white/5">
          <Star className="h-3 w-3 text-amber-400" />
          <span className="text-xs font-medium">Niv. {monster.level}</span>
        </div>
      </div>

      <h4 className="text-lg font-bold text-white mb-3">{monster.name}</h4>

      <MonsterStats hp={monster.hp} atk={monster.atk} def={monster.def} vit={monster.vit} />
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
