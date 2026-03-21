'use client'

import { useState, useCallback } from 'react'
import { InvocationIcon } from '@/components/icons'
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

function extractErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    try {
      const parsed = JSON.parse(err.message)
      if (parsed.message) return parsed.message
    } catch {
      if (err.message) return err.message
    }
  }
  return "Une erreur est survenue lors de l'invocation"
}

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
    } catch (err) {
      setIsAnimating(false)
      const msg = extractErrorMessage(err)
      toast.error(msg)
      refetchHistory()
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
      } catch (err) {
        toast.error(extractErrorMessage(err))
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
        <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
          <InvocationIcon className="h-5 w-5 text-primary" size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-mono font-bold uppercase tracking-wide text-foreground">Portail d&apos;Invocation</h1>
          <p className="text-sm text-muted-foreground font-mono">
            Invoquez de puissants monstres pour agrandir votre équipe de champions
          </p>
        </div>
      </div>

      {/* Summon section */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-xl font-mono uppercase tracking-wide">
            <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
              <InvocationIcon className="h-5 w-5 text-primary" size={20} />
            </div>
            <span>Invoquer un Monstre</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground pl-13">
            Tentez votre chance et découvrez quel monstre vous rejoindra
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
                <span>... Invocation en cours...</span>
              ) : (
                <>
                  <InvocationIcon className="mr-2 h-5 w-5" size={20} />
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
        <div className="rounded-sm border-2 border-border bg-card p-6">
          <p className="text-sm text-destructive font-mono text-center">{ratesError}</p>
        </div>
      ) : (
        <InvocationRates rates={rates} />
      )}

      {/* History section */}
      {historyError ? (
        <div className="rounded-sm border-2 border-border bg-card p-6">
          <p className="text-sm text-destructive font-mono text-center">{historyError}</p>
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
