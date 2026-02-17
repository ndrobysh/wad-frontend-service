'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/hooks/use-auth'
import { playerApi } from '@/lib/api/players'
import { monsterApi } from '@/lib/api/monsters'
import { invocationApi } from '@/lib/api/invocations'
import { PlayerStatsBar } from '@/components/players/player-stats-bar'
import { SummonedMonsterReveal } from '@/components/monsters/summoned-monster-reveal'
import { RecentMonstersPreview } from '@/components/dashboard/recent-monsters-preview'
import { QuickAccessCards } from '@/components/dashboard/quick-access-cards'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { toast } from 'sonner'
import type { Player } from '@/lib/types/player'
import type { Monster } from '@/lib/types/monster'

export default function DashboardPage() {
  const { username } = useAuth()
  const [player, setPlayer] = useState<Player | null>(null)
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [summonedMonster, setSummonedMonster] = useState<Monster | null>(null)
  const [loading, setLoading] = useState(true)
  const [summoning, setSummoning] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const loadData = useCallback(async () => {
    if (!username) return
    try {
      const [playerData, monsterData] = await Promise.all([
        playerApi.getByUsername(username),
        monsterApi.getUserMonsters(username),
      ])
      setPlayer(playerData)
      setMonsters(monsterData)
    } catch {
      toast.error('Erreur de chargement des données')
    } finally {
      setLoading(false)
    }
  }, [username])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handleSummon = async () => {
    setSummoning(true)
    setSummonedMonster(null)
    setIsAnimating(true)

    try {
      const data = await invocationApi.summon()
      setTimeout(() => {
        setSummonedMonster(data.monster)
        setIsAnimating(false)
        toast.success(`${data.monster.name} a rejoint votre équipe !`)
      }, 1500)
      loadData()
    } catch {
      toast.error("Échec de l'invocation")
      setIsAnimating(false)
    } finally {
      setSummoning(false)
    }
  }

  if (loading) {
    return <LoadingSpinner label="Chargement du tableau de bord..." />
  }

  return (
    <>
      {player && <PlayerStatsBar player={player} monsterCount={monsters.length} />}

      {/* Summon Section */}
      <Card className="border-white/10 bg-white/5 rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Sparkles className="h-5 w-5 text-violet-400" />
            </div>
            <span>Portail d&apos;Invocation</span>
          </CardTitle>
          <CardDescription className="text-slate-400 pl-13">
            Invoquez un nouveau monstre pour rejoindre votre équipe de champions
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <div className="flex justify-center py-8">
            <Button
              onClick={handleSummon}
              disabled={summoning || isAnimating}
              size="lg"
              className="h-14 px-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-lg font-bold disabled:opacity-50"
            >
              {summoning || isAnimating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Invocation...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Invoquer
                </>
              )}
            </Button>
          </div>

          {summonedMonster && !isAnimating && <SummonedMonsterReveal monster={summonedMonster} />}
        </CardContent>
      </Card>

      <RecentMonstersPreview monsters={monsters} />
      <QuickAccessCards />
    </>
  )
}
