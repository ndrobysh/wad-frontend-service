'use client'

import { useState, useCallback } from 'react'
import { Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { SummonedMonsterReveal } from '@/components/monsters/summoned-monster-reveal'
import { InvocationRates } from '@/components/invocation/invocation-rates'
import { InvocationHistory } from '@/components/invocation/invocation-history'
import { invocationApi } from '@/lib/api/invocations'
import { monsterApi } from '@/lib/api/monsters'
import { useInvocationRates } from '@/lib/hooks/use-invocation-rates'
import { useInvocationHistory } from '@/lib/hooks/use-invocation-history'
import type { Monster } from '@/lib/types/monster'

export default function InvocationPage() {
  const {
    rates,
    loading: ratesLoading,
    error: ratesError,
  } = useInvocationRates()

  const {
    history,
    loading: historyLoading,
    error: historyError,
    refetch: refetchHistory,
  } = useInvocationHistory()

  const [summoning, setSummoning] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [summonedMonster, setSummonedMonster] = useState<Monster | null>(null)
  const [retrying, setRetrying] = useState(false)

  const handleSummon = useCallback(async () => {
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
        refetchHistory()
      } else {
        setIsAnimating(false)
        toast.error(response.message || "Échec de l'invocation")
        refetchHistory()
      }
    } catch {
      setIsAnimating(false)
      toast.error("Une erreur est survenue lors de l'invocation")
    } finally {
      setSummoning(false)
    }
  }, [refetchHistory])

  const handleRetry = useCallback(
    async (logId: string) => {
      setRetrying(true)
      try {
        const response = await invocationApi.recreate(logId)
        if (response.status === 'COMPLETED') {
          toast.success("L'invocation a été relancée avec succès !")
        } else {
          toast.error(response.message || "Échec de la relance de l'invocation")
        }
        refetchHistory()
      } catch {
        toast.error("Erreur lors de la relance de l'invocation")
      } finally {
        setRetrying(false)
      }
    },
    [refetchHistory],
  )

  const isPageLoading = ratesLoading && historyLoading

  if (isPageLoading) {
    return <LoadingSpinner label="Chargement du portail d'invocation..." />
  }

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <Sparkles className="h-5 w-5 text-violet-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Portail d&apos;Invocation</h1>
          <p className="text-sm text-slate-400">
            Invoquez de puissants monstres pour agrandir votre équipe de champions
          </p>
        </div>
      </div>

      {/* Summon section */}
      <Card className="border-white/10 bg-white/5 rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
              <Sparkles className="h-5 w-5 text-violet-400" />
            </div>
            <span>Invoquer un Monstre</span>
          </CardTitle>
          <CardDescription className="text-slate-400 pl-13">
            Tentez votre chance et découvrez quel monstre vous rejoindra
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          <div className="flex justify-center py-8">
            <Button
              onClick={handleSummon}
              disabled={summoning || isAnimating}
              size="lg"
              className="h-14 px-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-lg font-bold disabled:opacity-50 transition-colors"
            >
              {summoning || isAnimating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Invocation en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Invoquer
                </>
              )}
            </Button>
          </div>

          {summonedMonster && !isAnimating && (
            <SummonedMonsterReveal monster={summonedMonster} />
          )}
        </CardContent>
      </Card>

      {/* Rates section */}
      {ratesError ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-red-400 text-center">{ratesError}</p>
        </div>
      ) : (
        <InvocationRates rates={rates} />
      )}

      {/* History section */}
      {historyError ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-red-400 text-center">{historyError}</p>
        </div>
      ) : (
        <InvocationHistory
          history={history}
          onRetry={handleRetry}
          retrying={retrying}
        />
      )}
    </div>
  )
}
