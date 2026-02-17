'use client'

import { useState, useEffect, useCallback } from 'react'
import { monsterApi } from '@/lib/api/monsters'
import { useAuth } from '@/lib/hooks/use-auth'
import type { Monster } from '@/lib/types/monster'

export function useMonsters() {
  const { username } = useAuth()
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    if (!username) return
    setLoading(true)
    setError(null)
    try {
      const data = await monsterApi.getUserMonsters(username)
      setMonsters(data)
    } catch {
      setError('Erreur de chargement des monstres')
    } finally {
      setLoading(false)
    }
  }, [username])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { monsters, loading, error, refetch: fetch }
}
