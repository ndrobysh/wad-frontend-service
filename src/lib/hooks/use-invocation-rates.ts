'use client'

import { useState, useEffect } from 'react'
import { invocationApi } from '@/lib/api/invocations'
import type { BaseMonster } from '@/lib/types/invocation'

export function useInvocationRates() {
  const [rates, setRates] = useState<BaseMonster[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    invocationApi.getRates()
      .then(setRates)
      .catch(() => setError("Erreur chargement taux"))
      .finally(() => setLoading(false))
  }, [])

  return { rates, loading, error }
}
