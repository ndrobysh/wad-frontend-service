import {
  FireIcon,
  WaterIcon,
  EarthIcon,
  StarIcon,
} from '@/components/icons'

export interface ElementConfig {
  color: string
  bgClass: string
  borderClass: string
  textClass: string
  icon: React.ElementType
  label: string
}

export const elementConfig: Record<string, ElementConfig> = {
  feu: {
    color: 'var(--color-fire)',
    bgClass: 'bg-[#f77622]/15',
    borderClass: 'border-[#f77622]/40 hover:border-[#f77622]/60',
    textClass: 'text-[#f77622]',
    icon: FireIcon,
    label: 'Feu',
  },
  eau: {
    color: 'var(--color-water)',
    bgClass: 'bg-[#5fcde4]/15',
    borderClass: 'border-[#5fcde4]/40 hover:border-[#5fcde4]/60',
    textClass: 'text-[#5fcde4]',
    icon: WaterIcon,
    label: 'Eau',
  },
  terre: {
    color: 'var(--color-earth)',
    bgClass: 'bg-[#a77b5b]/15',
    borderClass: 'border-[#a77b5b]/40 hover:border-[#a77b5b]/60',
    textClass: 'text-[#a77b5b]',
    icon: EarthIcon,
    label: 'Terre',
  },
}

const defaultConfig: ElementConfig = {
  color: 'var(--muted-foreground)',
  bgClass: 'bg-secondary/50',
  borderClass: 'border-border hover:border-muted-foreground/50',
  textClass: 'text-muted-foreground',
  icon: StarIcon,
  label: 'Inconnu',
}

export function getElementConfig(elementType: string): ElementConfig {
  return elementConfig[elementType.toLowerCase()] || defaultConfig
}
