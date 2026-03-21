'use client'

import { InvocationIcon } from '@/components/icons'
import { ElementBadge } from '@/components/shared/element-badge'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { getElementConfig } from '@/lib/constants/elements'
import { cn } from '@/lib/utils'
import type { BaseMonster } from '@/lib/types/invocation'

interface InvocationRatesProps {
  rates: BaseMonster[]
}

function getRarityColor(rate: number): string {
  if (rate >= 0.3) return 'text-[#7a8194]'
  if (rate >= 0.1) return 'text-[#38b764]'
  if (rate >= 0.03) return 'text-[#5fcde4]'
  return 'text-[#ffcd75]'
}

function getRarityBarColor(rate: number): string {
  if (rate >= 0.3) return 'bg-[#7a8194]'
  if (rate >= 0.1) return 'bg-[#38b764]'
  if (rate >= 0.03) return 'bg-[#5fcde4]'
  return 'bg-[#ffcd75]'
}

function getRarityLabel(rate: number): string {
  if (rate >= 0.3) return 'Commun'
  if (rate >= 0.1) return 'Peu commun'
  if (rate >= 0.03) return 'Rare'
  return 'Légendaire'
}

export function InvocationRates({ rates }: InvocationRatesProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-secondary rounded-sm border-2 border-border">
          <InvocationIcon className="h-5 w-5 text-primary" size={20} />
        </div>
        <div>
          <h2 className="font-mono text-xl uppercase tracking-wide text-white">
            Taux d&apos;Invocation
          </h2>
          <p className="text-sm text-slate-400">Probabilités d&apos;obtenir chaque monstre</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rates.map((rate) => {
          const config = getElementConfig(rate.elementType)
          const ratePercent = (rate.invocationRate * 100).toFixed(0)
          const barWidth = Math.min(rate.invocationRate * 100, 100)
          const rarityColor = getRarityColor(rate.invocationRate)
          const barColor = getRarityBarColor(rate.invocationRate)
          const rarityLabel = getRarityLabel(rate.invocationRate)

          return (
            <div
              key={rate.id}
              className={cn(
                'bg-card border-2 border-border rounded-sm border-l-4 p-5 space-y-4 transition-colors',
                config.borderClass,
              )}
            >
              {/* Header */}
              <div className="space-y-1.5">
                <h3 className="font-mono font-bold uppercase tracking-wide text-white leading-tight">
                  {rate.name}
                </h3>
                <ElementBadge elementType={rate.elementType} />
              </div>

              {/* Stats */}
              <MonsterStats
                hp={rate.hp}
                atk={rate.atk}
                def={rate.def}
                vit={rate.vit}
                size="sm"
              />

              {/* Rate */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <span className={cn('text-2xl font-mono font-bold tabular-nums', rarityColor)}>
                    {ratePercent}%
                  </span>
                  <span className={cn('text-xs font-mono font-medium uppercase', rarityColor)}>
                    {rarityLabel}
                  </span>
                </div>

                {/* Rate bar */}
                <div className="h-3 w-full rounded-none bg-secondary overflow-hidden border border-border">
                  <div
                    className={cn('h-full rounded-none transition-all', barColor)}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
