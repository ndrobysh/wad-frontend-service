'use client'

import Link from 'next/link'
import { Crown, Zap, Trophy, ChevronRight } from 'lucide-react'
import type { Player } from '@/lib/types/player'
import { XpProgress } from '@/components/players/xp-progress'

interface PlayerStatsBarProps {
  player: Player
  monsterCount: number
}

export function PlayerStatsBar({ player, monsterCount }: PlayerStatsBarProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
            <Crown className="h-6 w-6 text-amber-400" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Niveau</p>
            <p className="text-2xl font-bold">{player.level}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
            <Zap className="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Expérience</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{player.experience}</p>
              <p className="text-sm text-slate-500">/ {player.xpThreshold}</p>
            </div>
            <XpProgress current={player.experience} max={player.xpThreshold} className="mt-2" />
          </div>
        </div>
      </div>

      <Link href="/collection" className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 block">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
            <Trophy className="h-6 w-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-slate-400">Collection</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{monsterCount}</p>
              <p className="text-sm text-slate-500">/ {player.maxMonsters}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </Link>
    </div>
  )
}
