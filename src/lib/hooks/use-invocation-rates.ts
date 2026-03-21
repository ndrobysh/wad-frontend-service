'use client'

import { useState, useEffect } from 'react'
import { invocationApi } from '@/lib/api/invocations'
import type { BaseMonster } from '@/lib/types/invocation'

export function useInvocationRates() {
  const [rates, setRates] = useState<BaseMonster[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRates = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await invocationApi.getRates()
      setRates(data)
    } catch {
      setError("Erreur de chargement des taux d'invocation")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRates()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { rates, loading, error, refetch: fetchRates }
}
