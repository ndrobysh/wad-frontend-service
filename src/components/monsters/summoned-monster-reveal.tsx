'use client'

import Link from 'next/link'
import { getElementConfig } from '@/lib/constants/elements'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { Star, ArrowRight } from 'lucide-react'
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

      <div className={`rounded-2xl border ${config.border} bg-gradient-to-br ${config.gradient} p-6`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ElementIcon className="h-5 w-5 text-slate-300" />
              <span className="text-sm text-slate-400 capitalize">{monster.elementType}</span>
            </div>
            <h4 className="text-2xl font-bold text-white">{monster.name}</h4>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">Niv. {monster.level}</span>
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
