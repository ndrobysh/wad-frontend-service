import Link from 'next/link'
import { CollectionIcon } from '@/components/icons'
import { MonsterCard } from '@/components/monsters/monster-card'
import type { Monster } from '@/lib/types/monster'

interface RecentMonstersPreviewProps {
  monsters: Monster[]
}

export function RecentMonstersPreview({ monsters }: RecentMonstersPreviewProps) {
  if (monsters.length === 0) {
    return (
      <div className="bg-card border-2 border-border rounded-sm p-10 text-center">
        <CollectionIcon className="mx-auto h-10 w-10 text-slate-500 mb-3" size={40} />
        <p className="text-slate-400">Invoquez votre premier monstre !</p>
      </div>
    )
  }

  const recent = monsters.slice(-3).reverse()

  return (
    <div className="space-y-4">
      <h2 className="font-mono text-lg uppercase tracking-wide text-white">Derniers Monstres</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {recent.map((monster) => (
          <MonsterCard key={monster.id} monster={monster} href={`/collection/${monster.id}`} />
        ))}
      </div>

      <div className="text-center pt-1">
        <Link
          href="/collection"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-mono"
        >
          Voir toute la collection
          <span className="font-mono">&gt;</span>
        </Link>
      </div>
    </div>
  )
}
