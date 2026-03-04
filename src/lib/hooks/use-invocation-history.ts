'use client'

import { useState, useEffect, useCallback } from 'react'
import { invocationApi } from '@/lib/api/invocations'
import { useAuth } from '@/lib/hooks/use-auth'
import type { InvocationLog } from '@/lib/types/invocation'

export function useInvocationHistory() {
  const { username } = useAuth()
  const [history, setHistory] = useState<InvocationLog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetch = useCallback(async () => {
    if (!username) return
    setLoading(true)
    setError(null)
    try {
      const data = await invocationApi.getHistory(username)
      setHistory(data)
    } catch {
      setError("Erreur de chargement de l'historique")
    } finally {
      setLoading(false)
    }
  }, [username])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { history, loading, error, refetch: fetch }
}
