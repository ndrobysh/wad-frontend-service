'use client'

import { useState, useEffect, useCallback } from 'react'
import { combatApi } from '@/lib/api/combat'
import type { CombatLog } from '@/lib/types/combat'

export function useCombatDetail(id: string) {
  const [combat, setCombat] = useState<CombatLog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await combatApi.getById(id)
      setCombat(data)
    } catch {
      setError('Combat introuvable')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { combat, loading, error, refetch: fetch }
}
