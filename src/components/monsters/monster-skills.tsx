'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollIcon } from '@/components/icons'
import { monsterApi } from '@/lib/api/monsters'
import { toast } from 'sonner'
import type { Monster, MonsterSkill } from '@/lib/types/monster'

interface MonsterSkillsProps {
  monster: Monster
  onUpdate: () => void
}

function getSkillColor(stat: string): string {
  switch (stat.toLowerCase()) {
    case 'atk': return '#f77622'
    case 'def': return '#5fcde4'
    case 'hp': case 'pv': return '#be4a2f'
    case 'vit': return '#38b764'
    default: return '#ffcd75'
  }
}

export function MonsterSkills({ monster, onUpdate }: MonsterSkillsProps) {
  const [upgradingSkill, setUpgradingSkill] = useState<number | null>(null)

  const handleUpgrade = async (skill: MonsterSkill) => {
    setUpgradingSkill(skill.num)
    try {
      await monsterApi.upgradeSkill(monster.id, skill.num)
      toast.success(`Compétence ${skill.num} améliorée !`)
      onUpdate()
    } catch {
      toast.error("Échec de l'amélioration")
    } finally {
      setUpgradingSkill(null)
    }
  }

  if (!monster.skills || monster.skills.length === 0) {
    return (
      <div className="rounded-sm border-2 border-border bg-card p-4">
        <h3 className="text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="text-primary">&#9670;</span>
          Compétences
        </h3>
        <p className="text-slate-400 text-sm">Aucune compétence disponible</p>
      </div>
    )
  }

  return (
    <div className="rounded-sm border-2 border-border bg-card p-4">
      <h3 className="text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="text-primary">&#9670;</span>
        Compétences
      </h3>

      <div className="space-y-3">
        {monster.skills.map((skill, index) => (
          <div
            key={`${skill.num}-${index}`}
            className="flex items-center justify-between bg-[#1a1c2c] border-2 border-border border-l-[3px] rounded-sm p-3"
            style={{ borderLeftColor: getSkillColor(skill.ratio.stat) }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-white">{skill.name || `Compétence ${skill.num}`}</span>
                {skill.level >= skill.lvlMax ? (
                  <span className="bg-[#38b764] text-[#1a1c2c] font-mono text-[10px] px-2 py-0.5 rounded-sm font-bold">
                    MAX
                  </span>
                ) : (
                  <span className="bg-secondary border border-border text-primary font-mono text-[10px] px-2 py-0.5 rounded-sm">
                    Niv. {skill.level}/{skill.lvlMax}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
                <span>Dégâts: {skill.dmg}</span>
                <span>
                  Ratio: {skill.ratio.stat} {skill.ratio.percent.toFixed(0)}%
                </span>
                <span>CD: {skill.cooldown} tours</span>
              </div>
            </div>

            {skill.level >= skill.lvlMax ? (
              <Button
                size="sm"
                disabled
                className="ml-4 bg-secondary text-muted-foreground rounded-sm font-mono text-xs cursor-not-allowed"
              >
                MAX
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={() => handleUpgrade(skill)}
                disabled={monster.skillPoints < 1 || upgradingSkill === skill.num}
                className="ml-4 bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-[#f77622] rounded-sm font-mono text-xs"
              >
                {upgradingSkill === skill.num ? (
                  <span className="font-mono">...</span>
                ) : (
                  '▲ UP'
                )}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
