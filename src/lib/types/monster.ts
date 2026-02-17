export interface MonsterSkillRatio {
  stat: string
  percent: number
}

export interface MonsterSkill {
  num: number
  dmg: number
  ratio: MonsterSkillRatio
  cooldown: number
  level: number
  lvlMax: number
}

export interface Monster {
  id: string
  owner: string
  templateId: number
  name: string
  elementType: string
  hp: number
  atk: number
  def: number
  vit: number
  level: number
  experience: number
  skillPoints: number
  skills: MonsterSkill[]
}

export interface MonsterResponse {
  id: string
  name: string
  elementType: string
  hp: number
  atk: number
  def: number
  vit: number
  level: number
}
