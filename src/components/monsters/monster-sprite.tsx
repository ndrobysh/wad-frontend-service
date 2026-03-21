import { getMonsterSprite } from './sprites'
import { getElementConfig } from '@/lib/constants/elements'

interface MonsterSpriteProps {
  name: string
  elementType: string
  size?: number
  className?: string
}

export function MonsterSprite({ name, elementType, size = 128, className }: MonsterSpriteProps) {
  const SpriteComponent = getMonsterSprite(name)

  if (SpriteComponent) {
    return <SpriteComponent size={size} className={className} />
  }

  // Fallback: render element icon at requested size
  const config = getElementConfig(elementType)
  const IconComponent = config.icon
  return (
    <div
      className={`flex items-center justify-center ${className ?? ''}`}
      style={{ width: size, height: size }}
    >
      <IconComponent size={Math.round(size * 0.6)} className={config.textClass} />
    </div>
  )
}
