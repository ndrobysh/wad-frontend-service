'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { StarIcon, CoinIcon, CollectionIcon } from '@/components/icons'
import type { Player } from '@/lib/types/player'
import { XpProgress } from '@/components/players/xp-progress'

interface PlayerStatsBarProps {
  player: Player
  monsterCount: number
}

export function PlayerStatsBar({ player, monsterCount }: PlayerStatsBarProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="rounded-sm border-2 border-border bg-card p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary border-2 border-border">
            <StarIcon className="h-6 w-6 text-primary" size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400">Niveau</p>
            <p className="text-2xl font-mono font-bold">{player.level}</p>
          </div>
        </div>
      </div>

      <div className="rounded-sm border-2 border-border bg-card p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary border-2 border-border">
            <CoinIcon className="h-6 w-6 text-primary" size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-400">Expérience</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-mono font-bold">{player.experience}</p>
              <p className="text-sm font-mono text-slate-500">/ {player.xpThreshold}</p>
            </div>
            <XpProgress current={player.experience} max={player.xpThreshold} className="mt-2" />
          </div>
        </div>
      </div>

      <Link href="/collection" className="group rounded-sm border-2 border-border bg-card p-6 transition-colors hover:border-border/60 block">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary border-2 border-border">
            <CollectionIcon className="h-6 w-6 text-primary" size={24} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-400">Collection</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-mono font-bold">{monsterCount}</p>
              <p className="text-sm font-mono text-slate-500">/ {player.maxMonsters}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </Link>
    </div>
  )
}
