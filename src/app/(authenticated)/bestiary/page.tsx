'use client'

import { useState, useEffect } from 'react'
import { BestiaryIcon } from '@/components/icons'
import { monsterApi } from '@/lib/api/monsters'
import { MonsterCard } from '@/components/monsters/monster-card'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { elementConfig } from '@/lib/constants/elements'
import { cn } from '@/lib/utils'
import type { MonsterResponse } from '@/lib/types/monster'

const elementFilters = ['all', ...Object.keys(elementConfig)] as const

export default function BestiaryPage() {
  const [monsters, setMonsters] = useState<MonsterResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    monsterApi
      .getAllMonsters()
      .then(setMonsters)
      .catch((err) => {
        console.log('bestiary load failed:', err) // FIXME: meilleure gestion erreurs
        setError('Erreur de chargement du bestiaire')
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? monsters : monsters.filter((m) => m.elementType.toLowerCase() === filter)

  if (loading) {
    return <LoadingSpinner label="Chargement du bestiaire..." />
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
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
          <BestiaryIcon className="h-5 w-5 text-primary" size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-mono font-bold uppercase tracking-wide">Bestiaire</h1>
          <p className="text-sm text-muted-foreground font-mono">Tous les monstres existants</p>
        </div>
      </div>

      {/* Element filter */}
      <div className="flex items-center gap-2 flex-wrap">
        {elementFilters.map((el) => {
          const cfg = el !== 'all' ? elementConfig[el] : null
          const Icon = cfg?.icon
          return (
            <button
              key={el}
              onClick={() => setFilter(el)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-medium transition-colors border-2',
                filter === el
                  ? 'border-primary bg-secondary text-foreground'
                  : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50',
              )}
            >
              {Icon && <Icon className="h-3.5 w-3.5" />}
              <span>{el === 'all' ? 'Tous' : cfg?.label ?? el}</span>
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-muted-foreground font-mono">Aucun monstre trouvé</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>
      )}
    </>
  )
}
