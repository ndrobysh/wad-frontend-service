export interface SkillTemplate {
  name: string
  baseDamage: number
  cooldown: number
  scalingStat: string
  scalingRatio: number
}

export interface BaseMonster {
  id: string
  name: string
  elementType: string
  hp: number
  atk: number
  def: number
  vit: number
  invocationRate: number
  skills: SkillTemplate[]
}

export type InvocationStatus = 'PENDING' | 'MONSTER_CREATED' | 'COMPLETED' | 'FAILED'

export interface InvocationResponse {
  invocationLogId: string | null
  status: string
  baseMonster: BaseMonster | null
  generatedMonsterId: string | null
  message: string
}

export interface InvocationLog {
  id: string
  username: string
  baseMonsterId: string
  generatedMonsterId: string | null
  status: InvocationStatus
  timestamp: string
  errorMessage: string | null
}
