// src/components/monsters/monster-profile-sidebar.tsx
'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Dumbbell, Trash2 } from 'lucide-react'
import { StarIcon } from '@/components/icons'
import { MonsterSprite } from '@/components/monsters/monster-sprite'
import { SegmentedStatBar } from '@/components/monsters/segmented-stat-bar'
import { ConfirmDialog } from '@/components/shared/confirm-dialog'
import { getElementConfig } from '@/lib/constants/elements'
import type { Monster } from '@/lib/types/monster'

interface MonsterProfileSidebarProps {
  monster: Monster
  onTrain: () => void
  onDelete: () => void
  training: boolean
  deleting: boolean
}

const statConfig = [
  { key: 'hp' as const, label: 'PV', color: '#be4a2f' },
  { key: 'atk' as const, label: 'ATK', color: '#f77622' },
  { key: 'def' as const, label: 'DEF', color: '#5fcde4' },
  { key: 'vit' as const, label: 'VIT', color: '#38b764' },
]

export function MonsterProfileSidebar({
  monster,
  onTrain,
  onDelete,
  training,
  deleting,
}: MonsterProfileSidebarProps) {
  const config = getElementConfig(monster.elementType)
  const ElementIcon = config.icon
  const maxStat = Math.max(monster.hp, monster.atk, monster.def, monster.vit, 1)
  const xpInLevel = monster.experience % 100

  return (
    <aside className="flex flex-col md:sticky md:top-6 md:self-start">
      {/* Back link */}
      <Link href="/collection" className="mb-4">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Collection
        </Button>
      </Link>

      {/* Sprite with pixel border frame */}
      <div className="flex justify-center mb-4">
        <div className="border-[3px] border-primary p-1">
          <div className="bg-background border-2 border-border">
            <MonsterSprite name={monster.name} elementType={monster.elementType} size={140} />
          </div>
        </div>
      </div>

      {/* Name & Element */}
      <div className="text-center mb-3">
        <h1 className="text-xl font-mono font-bold text-foreground">{monster.name}</h1>
        <div className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-1 bg-secondary rounded-sm">
          <ElementIcon className={`h-3.5 w-3.5 ${config.textClass}`} size={14} />
          <span className={`text-xs font-mono uppercase ${config.textClass}`}>{monster.elementType}</span>
        </div>
      </div>

      {/* Level & XP */}
      <div className="bg-background border-2 border-border rounded-sm p-3 mb-3">
        <div className="flex items-center justify-center gap-2 mb-2">
          <StarIcon className="h-4 w-4 text-primary" size={16} />
          <span className="font-mono font-bold text-sm">Niv. {monster.level}</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-none overflow-hidden">
          <div
            className="h-full rounded-none"
            style={{
              width: `${xpInLevel}%`,
              background: 'linear-gradient(90deg, #ffcd75, #f77622)',
            }}
          />
        </div>
        <p className="text-center text-[10px] font-mono text-muted-foreground mt-1.5">
          XP: {xpInLevel}/100 &bull; {monster.skillPoints} pts dispo
        </p>
      </div>

      {/* Stats with segmented bars */}
      <div className="bg-background border-2 border-border rounded-sm p-3 mb-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-2">
          Statistiques
        </div>
        <div className="space-y-2">
          {statConfig.map(({ key, label, color }) => (
            <div key={key}>
              <div className="flex justify-between text-xs font-mono mb-0.5">
                <span style={{ color }}>{label}</span>
                <span className="text-muted-foreground">{monster[key]}</span>
              </div>
              <SegmentedStatBar value={monster[key]} maxValue={maxStat} color={color} />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto">
        <Button
          onClick={onTrain}
          disabled={training}
          className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-[#f77622] rounded-sm font-mono text-xs"
        >
          {training ? (
            <span className="font-mono">...</span>
          ) : (
            <>
              <Dumbbell className="h-4 w-4 mr-1.5" />
              Entraîner
            </>
          )}
        </Button>

        <ConfirmDialog
          trigger={
            <Button
              variant="ghost"
              disabled={deleting}
              className="border-2 border-destructive bg-background hover:bg-destructive/10 text-destructive rounded-sm px-2.5"
            >
              {deleting ? <span className="font-mono text-xs">...</span> : <Trash2 className="h-4 w-4" />}
            </Button>
          }
          title="Libérer ce monstre ?"
          description={`Êtes-vous sûr de vouloir libérer ${monster.name} ? Cette action est irréversible.`}
          confirmLabel="Libérer"
          onConfirm={onDelete}
          variant="destructive"
        />
      </div>
    </aside>
  )
}
