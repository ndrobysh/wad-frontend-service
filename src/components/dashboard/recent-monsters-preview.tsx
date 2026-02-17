import Link from 'next/link'
import { ArrowRight, Ghost } from 'lucide-react'
import { MonsterCard } from '@/components/monsters/monster-card'
import type { Monster } from '@/lib/types/monster'

interface RecentMonstersPreviewProps {
  monsters: Monster[]
}

export function RecentMonstersPreview({ monsters }: RecentMonstersPreviewProps) {
  if (monsters.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <Ghost className="mx-auto h-10 w-10 text-slate-500 mb-3" />
        <p className="text-slate-400">Invoquez votre premier monstre !</p>
      </div>
    )
  }

  const recent = monsters.slice(-3).reverse()

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Derniers Monstres</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {recent.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} href={`/collection/${monster.id}`} />
        ))}
      </div>

      <div className="text-center pt-1">
        <Link
          href="/collection"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          Voir toute la collection
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
