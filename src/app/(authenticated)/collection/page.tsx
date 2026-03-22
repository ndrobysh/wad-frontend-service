'use client'

import { CollectionIcon, InvocationIcon } from '@/components/icons'
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
        <p className="text-destructive font-mono">{error}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
            <CollectionIcon className="h-5 w-5 text-primary" size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-mono font-bold uppercase tracking-wide">Votre Collection</h1>
            <p className="text-sm text-muted-foreground font-mono">
              {monsters.length} monstre{monsters.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {monsters.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center bg-secondary border-2 border-border rounded-sm mb-4">
            <InvocationIcon className="h-8 w-8 text-muted-foreground" size={32} />
          </div>
          <p className="text-muted-foreground font-mono mb-1">Collection vide</p>
          <p className="text-muted-foreground text-sm font-mono">
            Votre collection attend ses premiers monstres. Invoquez-en un pour commencer !
          </p>
        </div>
      ) : (
      {/* TODO: ajouter pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {monsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} href={`/collection/${monster.id}`} />
          ))}
        </div>
      )}
    </>
  )
}
