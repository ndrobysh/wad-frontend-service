'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, Loader2, Zap } from 'lucide-react'
import { monsterApi } from '@/lib/api/monsters'
import { toast } from 'sonner'
import type { Monster, MonsterSkill } from '@/lib/types/monster'

interface MonsterSkillsProps {
  monster: Monster
  onUpdate: () => void
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
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-violet-400" />
          Compétences
        </h3>
        <p className="text-slate-400 text-sm">Aucune compétence disponible</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Zap className="h-5 w-5 text-violet-400" />
        Compétences
      </h3>

      <div className="space-y-3">
        {monster.skills.map((skill) => (
          <div
            key={skill.num}
            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-white">Compétence {skill.num}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                  Niv. {skill.level}/{skill.lvlMax}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>Dégâts: {skill.dmg}</span>
                <span>
                  Ratio: {skill.ratio.stat} {(skill.ratio.percent * 100).toFixed(0)}%
                </span>
                <span>CD: {skill.cooldown} tours</span>
              </div>
            </div>

            <Button
              size="sm"
              onClick={() => handleUpgrade(skill)}
              disabled={monster.skillPoints < 1 || skill.level >= skill.lvlMax || upgradingSkill === skill.num}
              className="ml-4 bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-50"
            >
              {upgradingSkill === skill.num ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <ArrowUp className="h-4 w-4 mr-1" />
                  Améliorer
                </>
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
