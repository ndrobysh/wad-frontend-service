'use client'

import { Percent } from 'lucide-react'
import { ElementBadge } from '@/components/shared/element-badge'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { getElementConfig } from '@/lib/constants/elements'
import { cn } from '@/lib/utils'
import type { BaseMonster } from '@/lib/types/invocation'

interface InvocationRatesProps {
  rates: BaseMonster[]
}

function getRarityColor(rate: number): string {
  if (rate >= 0.3) return 'text-slate-400'
  if (rate >= 0.1) return 'text-blue-400'
  if (rate >= 0.03) return 'text-violet-400'
  return 'text-amber-400'
}

function getRarityBarColor(rate: number): string {
  if (rate >= 0.3) return 'bg-slate-400'
  if (rate >= 0.1) return 'bg-blue-400'
  if (rate >= 0.03) return 'bg-violet-400'
  return 'bg-amber-400'
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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <Percent className="h-5 w-5 text-violet-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Taux d&apos;Invocation</h2>
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
                'rounded-2xl border bg-gradient-to-br p-5 space-y-4 transition-colors',
                config.border,
                config.gradient,
              )}
            >
              {/* Header */}
              <div className="space-y-1.5">
                <h3 className="font-bold text-white leading-tight">{rate.name}</h3>
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
                  <span className={cn('text-2xl font-bold tabular-nums', rarityColor)}>
                    {ratePercent}%
                  </span>
                  <span className={cn('text-xs font-medium', rarityColor)}>{rarityLabel}</span>
                </div>

                {/* Rate bar */}
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all', barColor)}
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
