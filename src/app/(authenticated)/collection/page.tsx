'use client'

import { Swords, Sparkles } from 'lucide-react'
import { useMonsters } from '@/lib/hooks/use-monsters'
import { MonsterCard } from '@/components/monsters/monster-card'
import { LoadingSpinner } from '@/components/shared/loading-spinner'

export default function CollectionPage() {
  const { monsters, loading, error } = useMonsters()

  if (loading) {
    return <LoadingSpinner label="Chargement de la collection..." />
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
            <Swords className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Votre Collection</h1>
            <p className="text-sm text-slate-400">
              {monsters.length} monstre{monsters.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {monsters.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 mb-4">
            <Sparkles className="h-8 w-8 text-slate-500" />
          </div>
          <p className="text-slate-400 mb-1">Collection vide</p>
          <p className="text-slate-500 text-sm">Invoquez votre premier monstre depuis le Dashboard !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {monsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} href={`/collection/${monster.id}`} />
          ))}
        </div>
      )}
    </>
  )
}
