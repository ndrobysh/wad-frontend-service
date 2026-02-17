import { apiClient } from './client'
import type { Player } from '@/lib/types/player'

const PLAYER_API_URL = process.env.PLAYER_API_URL || 'http://localhost:8082'

export const playerApi = {
  getProfile(): Promise<Player> {
    return apiClient<Player>(`${PLAYER_API_URL}/api/players/profile`)
  },

  getByUsername(username: string): Promise<Player> {
    return apiClient<Player>(`${PLAYER_API_URL}/api/players/${username}`)
  },

  getMonsterIds(): Promise<string[]> {
    return apiClient<string[]>(`${PLAYER_API_URL}/api/players/monsters`)
  },

  getLevel(): Promise<{ username: string; level: number }> {
    return apiClient(`${PLAYER_API_URL}/api/players/level`)
  },

  gainExperience(amount: number): Promise<Player> {
    return apiClient<Player>(`${PLAYER_API_URL}/api/players/experience`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
    })
  },

  addMonster(monsterId: string): Promise<Player> {
    return apiClient<Player>(`${PLAYER_API_URL}/api/players/monsters`, {
      method: 'POST',
      body: JSON.stringify({ monsterId }),
    })
  },

  removeMonster(monsterId: string): Promise<Player> {
    return apiClient<Player>(`${PLAYER_API_URL}/api/players/monsters/${monsterId}`, {
      method: 'DELETE',
    })
  },
}
