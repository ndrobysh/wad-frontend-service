import { Heart, Swords, Shield, Wind } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MonsterStatsProps {
  hp: number
  atk: number
  def: number
  vit: number
  size?: 'sm' | 'lg'
}

const stats = [
  { key: 'hp', label: 'PV', icon: Heart, color: 'text-red-400' },
  { key: 'atk', label: 'ATK', icon: Swords, color: 'text-orange-400' },
  { key: 'def', label: 'DEF', icon: Shield, color: 'text-blue-400' },
  { key: 'vit', label: 'VIT', icon: Wind, color: 'text-emerald-400' },
] as const

export function MonsterStats({ hp, atk, def, vit, size = 'sm' }: MonsterStatsProps) {
  const values = { hp, atk, def, vit }

  if (size === 'lg') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ key, label, icon: Icon, color }) => (
          <div key={key} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <Icon className={cn('h-5 w-5', color)} />
            <div>
              <p className="text-xs text-slate-400">{label}</p>
              <p className="text-lg font-bold">{values[key]}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {stats.map(({ key, icon: Icon, color }) => (
        <div key={key} className="flex items-center gap-2 text-sm">
          <Icon className={cn('h-3.5 w-3.5', color)} />
          <span className="text-slate-300">{values[key]}</span>
        </div>
      ))}
    </div>
  )
}
