import { apiClient } from './client'
import type { CombatResponse, CombatLog, CombatRequest } from '@/lib/types/combat'

const COMBAT_API_URL = process.env.NEXT_PUBLIC_COMBAT_API_URL || 'http://localhost:8085'

export async function simulateCombat(request: CombatRequest): Promise<CombatResponse> {
  return apiClient<CombatResponse>(`${COMBAT_API_URL}/api/combat/simulate`, {
    method: 'POST',
    body: JSON.stringify(request),
  })
}

export async function getCombatHistory(): Promise<CombatLog[]> {
  return apiClient<CombatLog[]>(`${COMBAT_API_URL}/api/combat/history`)
}

export async function getCombatById(id: string): Promise<CombatLog> {
  return apiClient<CombatLog>(`${COMBAT_API_URL}/api/combat/${id}`)
}

// re-export as object for backwards compat
export const combatApi = {
  simulate: simulateCombat,
  getHistory: getCombatHistory,
  getById: getCombatById,
}
