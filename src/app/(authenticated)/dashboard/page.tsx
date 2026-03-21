'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { InvocationIcon } from '@/components/icons'
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

function extractErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    try {
      const parsed = JSON.parse(err.message)
      if (parsed.message) return parsed.message
    } catch {
      if (err.message) return err.message
    }
  }
  return "Échec de l'invocation"
}

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
    } catch (e) {
      console.error('Erreur chargement dashboard:', e)
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
      const response = await invocationApi.invoke()

      if (response.status === 'COMPLETED' && response.generatedMonsterId) {
        const monster = await monsterApi.getById(response.generatedMonsterId)
        setTimeout(() => {
          setSummonedMonster(monster)
          setIsAnimating(false)
          toast.success(`${monster.name} a rejoint votre équipe !`)
        }, 1500)
        loadData()
      } else {
        setIsAnimating(false)
        toast.error(response.message || "Échec de l'invocation")
      }
    } catch (err) {
      toast.error(extractErrorMessage(err))
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
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-xl font-mono uppercase tracking-wide">
            <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
              <InvocationIcon className="h-5 w-5 text-primary" size={20} />
            </div>
            <span>Portail d&apos;Invocation</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground pl-13">
            Invoquez un nouveau monstre pour rejoindre votre équipe de champions
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <div className="flex justify-center py-8">
            <Button
              onClick={handleSummon}
              disabled={summoning || isAnimating}
              size="lg"
              className="h-14 px-10 text-lg font-bold font-mono disabled:opacity-50"
            >
              {summoning || isAnimating ? (
                <span>... Invocation...</span>
              ) : (
                <>
                  <InvocationIcon className="mr-2 h-5 w-5" size={20} />
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
