import { apiClient } from './client'
import type { Monster, MonsterResponse } from '@/lib/types/monster'

const MONSTER_API_URL = process.env.NEXT_PUBLIC_MONSTER_API_URL || 'http://localhost:8083'

export const monsterApi = {
  getPlayerMonsters(): Promise<Monster[]> {
    return apiClient<Monster[]>(`${MONSTER_API_URL}/api/monster`)
  },

  getUserMonsters(owner: string): Promise<Monster[]> {
    return apiClient<Monster[]>(`${MONSTER_API_URL}/api/monster/player/${owner}`)
  },

  getAllMonsters(): Promise<MonsterResponse[]> {
    return apiClient<MonsterResponse[]>(`${MONSTER_API_URL}/api/monster/list`)
  },

  getById(id: string): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monster/${id}`)
  },

  gainExperience(id: string, amount: number): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monster/${id}/experience`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
    })
  },

  upgradeSkill(id: string, skillNum: number): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monster/${id}/upgrade-skill`, {
      method: 'POST',
      body: JSON.stringify({ skillNum }),
    })
  },

  delete(id: string): Promise<{ message: string; id: string }> {
    return apiClient(`${MONSTER_API_URL}/api/monster/${id}`, {
      method: 'DELETE',
    })
  },
}
