'use client'

import Link from 'next/link'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import { StarIcon } from '@/components/icons'
import { ArrowRight } from 'lucide-react'
import type { Monster } from '@/lib/types/monster'

interface SummonedMonsterRevealProps {
  monster: Monster
}

export function SummonedMonsterReveal({ monster }: SummonedMonsterRevealProps) {
  const config = getElementConfig(monster.elementType)
  const ElementIcon = config.icon

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-slate-400">Nouveau monstre invoqué !</p>

      <div
        className="rounded-sm border-2 border-border bg-card p-6 border-t-4"
        style={{ borderTopColor: config.color }}
      >
        <div className="flex justify-center py-6">
          <MonsterSprite name={monster.name} elementType={monster.elementType} size={160} className="mx-auto" />
        </div>

        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ElementIcon className={`h-5 w-5 ${config.textClass}`} size={20} />
              <span className={`text-sm capitalize ${config.textClass}`}>{monster.elementType}</span>
            </div>
            <h4 className="text-2xl font-bold text-white">{monster.name}</h4>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-secondary border-2 border-border">
            <StarIcon className="h-4 w-4 text-primary" size={16} />
            <span className="text-sm font-mono font-semibold">Niv. {monster.level}</span>
          </div>
        </div>

        <MonsterStats hp={monster.hp} atk={monster.atk} def={monster.def} vit={monster.vit} size="lg" />

        <div className="flex justify-center pt-4">
          <Link
            href={`/collection/${monster.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Voir les détails
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
