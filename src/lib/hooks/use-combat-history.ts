'use client'

import { useState, useEffect } from 'react'
import { combatApi } from '@/lib/api/combat'
import type { CombatLog } from '@/lib/types/combat'

export function useCombatHistory(): [CombatLog[], boolean, string | null, () => void] {
  const [combats, setCombats] = useState<CombatLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = () => {
    setLoading(true)
    combatApi.getHistory()
      .then(setCombats)
      .catch(() => setError("Erreur chargement historique"))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [combats, loading, error, load]
}
