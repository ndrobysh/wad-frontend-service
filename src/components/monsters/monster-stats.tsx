import { HpIcon, AtkIcon, DefIcon, VitIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

interface MonsterStatsProps {
  hp: number
  atk: number
  def: number
  vit: number
  size?: 'sm' | 'lg'
}

const stats = [
  { key: 'hp',  label: 'PV',  icon: HpIcon,  color: 'text-[#be4a2f]' },
  { key: 'atk', label: 'ATK', icon: AtkIcon, color: 'text-[#f77622]' },
  { key: 'def', label: 'DEF', icon: DefIcon, color: 'text-[#5fcde4]' },
  { key: 'vit', label: 'VIT', icon: VitIcon, color: 'text-[#38b764]' },
] as const

const statBarColors: Record<string, string> = {
  hp:  'bg-[#be4a2f]',
  atk: 'bg-[#f77622]',
  def: 'bg-[#5fcde4]',
  vit: 'bg-[#38b764]',
}

export function MonsterStats({ hp, atk, def, vit, size = 'sm' }: MonsterStatsProps) {
  const values = { hp, atk, def, vit }
  const maxStat = Math.max(hp, atk, def, vit, 1)

  if (size === 'lg') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ key, label, icon: Icon, color }) => (
          <div key={key} className="flex items-center gap-3 p-3 rounded-sm bg-secondary border-2 border-border">
            <Icon className={cn('h-5 w-5', color)} size={20} />
            <div>
              <p className="text-xs text-slate-400">{label}</p>
              <p className="text-lg font-mono font-bold">{values[key]}</p>
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
          <Icon className={cn('h-3.5 w-3.5', color)} size={14} />
          <span className="font-mono text-slate-300">{values[key]}</span>
        </div>
      ))}
    </div>
  )
}
