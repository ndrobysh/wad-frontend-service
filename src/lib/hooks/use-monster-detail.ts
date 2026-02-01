'use client'

import { useState, useEffect, useCallback } from 'react'
import { monsterApi } from '@/lib/api/monsters'
import type { Monster } from '@/lib/types/monster'

export function useMonsterDetail(id: string) {
  const [monster, setMonster] = useState<Monster | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await monsterApi.getById(id)
      setMonster(data)
    } catch {
      setError('Monstre introuvable')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { monster, loading, error, refetch: fetch }
}
