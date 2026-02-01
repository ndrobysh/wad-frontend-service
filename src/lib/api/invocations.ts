import { apiClient } from './client'
import type { Monster } from '@/lib/types/monster'

const INVOCATION_API_URL = process.env.INVOCATION_API_URL || 'http://localhost:8084'

export const invocationApi = {
  summon(): Promise<{ monster: Monster }> {
    return apiClient<{ monster: Monster }>(`${INVOCATION_API_URL}/api/invocations/summon`, {
      method: 'POST',
    })
  },
}
