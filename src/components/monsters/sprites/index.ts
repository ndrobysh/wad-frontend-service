export type { SpriteProps } from './dragon-flamboyant'

import { DragonFlamboyantSprite } from './dragon-flamboyant'
import { SlimeAqueuxSprite } from './slime-aqueux'
import { GolemDePierreSprite } from './golem-de-pierre'
import { PhenixCendreSprite } from './phenix-cendre'
import type { SpriteProps } from './dragon-flamboyant'
import type React from 'react'

export { DragonFlamboyantSprite, SlimeAqueuxSprite, GolemDePierreSprite, PhenixCendreSprite }

const SPRITE_MAP: Record<string, React.ComponentType<SpriteProps>> = {
  'Dragon Flamboyant': DragonFlamboyantSprite,
  'Slime Aqueux': SlimeAqueuxSprite,
  'Golem de Pierre': GolemDePierreSprite,
  'Phénix Cendré': PhenixCendreSprite,
  'Phenix Cendré': PhenixCendreSprite,
  'dragon flamboyant': DragonFlamboyantSprite,
  'slime aqueux': SlimeAqueuxSprite,
  'golem de pierre': GolemDePierreSprite,
  'phénix cendré': PhenixCendreSprite,
  'phenix cendré': PhenixCendreSprite,
  'phenix cendre': PhenixCendreSprite,
}

export function getMonsterSprite(name: string): React.ComponentType<SpriteProps> | null {
  return SPRITE_MAP[name] ?? SPRITE_MAP[name.toLowerCase()] ?? null
}
