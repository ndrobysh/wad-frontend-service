'use client'

import { useState, useEffect, useCallback } from 'react'
import { playerApi } from '@/lib/api/players'
import { useAuth } from '@/lib/hooks/use-auth'
import type { Player } from '@/lib/types/player'

export function usePlayer() {
  const { username } = useAuth()
  const [player, setPlayer] = useState<Player | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    if (!username) return
    setLoading(true)
    setError(null)
    try {
      const data = await playerApi.getByUsername(username)
      setPlayer(data)
    } catch {
      setError('Erreur de chargement du profil')
    } finally {
      setLoading(false)
    }
  }, [username])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { player, loading, error, refetch: fetch }
}
