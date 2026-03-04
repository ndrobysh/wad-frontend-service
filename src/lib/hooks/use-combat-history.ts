'use client'

import { useState, useEffect, useCallback } from 'react'
import { combatApi } from '@/lib/api/combat'
import type { CombatLog } from '@/lib/types/combat'

export function useCombatHistory() {
  const [combats, setCombats] = useState<CombatLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await combatApi.getHistory()
      setCombats(data)
    } catch {
      setError("Erreur de chargement de l'historique des combats")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { combats, loading, error, refetch: fetch }
}
