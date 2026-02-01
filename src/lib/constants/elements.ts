import {
  Flame,
  Droplets,
  Mountain,
  Wind,
  Sun,
  Moon,
  Star,
} from 'lucide-react'

export interface ElementConfig {
  gradient: string
  border: string
  icon: React.ElementType
  glow: string
}

export const elementConfig: Record<string, ElementConfig> = {
  fire: {
    gradient: 'from-orange-500/20 via-red-500/10 to-amber-500/5',
    border: 'border-orange-500/30 hover:border-orange-400/50',
    icon: Flame,
    glow: 'shadow-orange-500/20',
  },
  water: {
    gradient: 'from-blue-500/20 via-cyan-500/10 to-sky-500/5',
    border: 'border-blue-500/30 hover:border-blue-400/50',
    icon: Droplets,
    glow: 'shadow-blue-500/20',
  },
  earth: {
    gradient: 'from-amber-600/20 via-yellow-600/10 to-orange-600/5',
    border: 'border-amber-500/30 hover:border-amber-400/50',
    icon: Mountain,
    glow: 'shadow-amber-500/20',
  },
  wind: {
    gradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/5',
    border: 'border-emerald-500/30 hover:border-emerald-400/50',
    icon: Wind,
    glow: 'shadow-emerald-500/20',
  },
  light: {
    gradient: 'from-yellow-400/20 via-amber-300/10 to-orange-200/5',
    border: 'border-yellow-400/30 hover:border-yellow-300/50',
    icon: Sun,
    glow: 'shadow-yellow-400/20',
  },
  dark: {
    gradient: 'from-purple-600/20 via-violet-500/10 to-indigo-500/5',
    border: 'border-purple-500/30 hover:border-purple-400/50',
    icon: Moon,
    glow: 'shadow-purple-500/20',
  },
}

const defaultConfig: ElementConfig = {
  gradient: 'from-slate-500/20 via-slate-400/10 to-slate-300/5',
  border: 'border-slate-500/30 hover:border-slate-400/50',
  icon: Star,
  glow: 'shadow-slate-500/20',
}

export function getElementConfig(elementType: string): ElementConfig {
  return elementConfig[elementType.toLowerCase()] || defaultConfig
}
