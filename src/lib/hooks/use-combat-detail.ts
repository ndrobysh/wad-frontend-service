'use client'

import { useState, useEffect } from 'react'
import { combatApi } from '@/lib/api/combat'
import type { CombatLog } from '@/lib/types/combat'

export function useCombatDetail(id: string) {
  const [combat, setCombat] = useState<CombatLog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refetch = () => {
    setLoading(true)
    setError(null)
    combatApi.getById(id)
      .then(setCombat)
      .catch(() => setError('Combat introuvable'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    refetch()
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  return { combat, loading, error, refetch }
}
