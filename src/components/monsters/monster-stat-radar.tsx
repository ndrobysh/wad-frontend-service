// src/components/monsters/monster-stat-radar.tsx
'use client'

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

interface MonsterStatRadarProps {
  hp: number
  atk: number
  def: number
  vit: number
}

function getArchetypeLabel(hp: number, atk: number, def: number, vit: number): string {
  const max = Math.max(hp, atk, def, vit)
  const min = Math.min(hp, atk, def, vit)

  // If the spread is small, it's balanced
  if (max - min < max * 0.2) return 'All-Rounder'

  if (max === atk) return 'Glass Cannon'
  if (max === def) return 'Tank'
  if (max === vit) return 'Speedster'
  if (max === hp) return 'Endurance'
  return 'All-Rounder'
}

const statColors: Record<string, string> = {
  PV: '#be4a2f',
  ATK: '#f77622',
  DEF: '#5fcde4',
  VIT: '#38b764',
}

export function MonsterStatRadar({ hp, atk, def, vit }: MonsterStatRadarProps) {
  const data = [
    { stat: 'PV', value: hp },
    { stat: 'ATK', value: atk },
    { stat: 'DEF', value: def },
    { stat: 'VIT', value: vit },
  ]

  const archetype = getArchetypeLabel(hp, atk, def, vit)

  return (
    <div className="rounded-sm border-2 border-border bg-card p-4">
      <h3 className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
        <span className="text-primary">&#9670;</span>
        Profil de Combat
      </h3>

      <div className="flex justify-center">
        <ResponsiveContainer width="100%" height={220}>
          <RadarChart data={data}>
            <PolarGrid stroke="#333c57" />
            <PolarAngleAxis
              dataKey="stat"
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={statColors[payload.value] || '#8b9bb4'}
                  fontSize={11}
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {payload.value}
                </text>
              )}
            />
            <Radar
              dataKey="value"
              stroke="#ffcd75"
              fill="#ffcd75"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <p className="text-center text-[11px] font-mono text-muted-foreground mt-1">
        {archetype}
      </p>
    </div>
  )
}
