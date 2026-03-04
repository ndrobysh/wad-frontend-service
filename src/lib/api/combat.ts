import { apiClient } from './client'
import type { CombatResponse, CombatLog, CombatRequest } from '@/lib/types/combat'

const COMBAT_API_URL = process.env.NEXT_PUBLIC_COMBAT_API_URL || 'http://localhost:8085'

export const combatApi = {
  simulate(request: CombatRequest): Promise<CombatResponse> {
    return apiClient<CombatResponse>(`${COMBAT_API_URL}/api/combat/simulate`, {
      method: 'POST',
      body: JSON.stringify(request),
    })
  },

  getHistory(): Promise<CombatLog[]> {
    return apiClient<CombatLog[]>(`${COMBAT_API_URL}/api/combat/history`)
  },

  getById(id: string): Promise<CombatLog> {
    return apiClient<CombatLog>(`${COMBAT_API_URL}/api/combat/${id}`)
  },
}
