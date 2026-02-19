export interface TurnLog {
  turnNumber: number
  attackerId: string
  attackerName: string
  skillNum: number
  actionDescription: string
  damageDealt: number
  targetRemainingHp: number
}

export interface CombatLog {
  id: string
  monster1Id: string
  monster1Name: string
  monster2Id: string
  monster2Name: string
  winnerId: string
  winnerName: string
  logs: TurnLog[]
  timestamp: string
}

export interface CombatResponse {
  combatId: string
  winnerId: string
  winnerName: string
  message: string
}

export interface CombatRequest {
  monster1Id: string
  monster2Id: string
}
