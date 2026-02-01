import { apiClient } from './client'
import type { Monster, MonsterResponse } from '@/lib/types/monster'

const MONSTER_API_URL = process.env.MONSTER_API_URL || 'http://localhost:8083'

export const monsterApi = {
  getPlayerMonsters(): Promise<Monster[]> {
    return apiClient<Monster[]>(`${MONSTER_API_URL}/api/monsters`)
  },

  getUserMonsters(owner: string): Promise<Monster[]> {
    return apiClient<Monster[]>(`${MONSTER_API_URL}/api/monsters/player/${owner}`)
  },

  getAllMonsters(): Promise<MonsterResponse[]> {
    return fetch(`${MONSTER_API_URL}/api/monsters/list`).then((res) => {
      if (!res.ok) throw new Error('Failed to fetch monsters')
      return res.json()
    })
  },

  getById(id: string): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monsters/${id}`)
  },

  gainExperience(id: string, amount: number): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monsters/${id}/experience`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
    })
  },

  upgradeSkill(id: string, skillNum: number): Promise<Monster> {
    return apiClient<Monster>(`${MONSTER_API_URL}/api/monsters/${id}/upgrade-skill`, {
      method: 'POST',
      body: JSON.stringify({ skillNum }),
    })
  },

  delete(id: string): Promise<{ message: string; id: string }> {
    return apiClient(`${MONSTER_API_URL}/api/monsters/${id}`, {
      method: 'DELETE',
    })
  },
}
