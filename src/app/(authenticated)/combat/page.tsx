'use client'

import { useState } from 'react'
import { Crosshair, Loader2, Swords } from 'lucide-react'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MonsterSelector } from '@/components/combat/monster-selector'
import { CombatResult } from '@/components/combat/combat-result'
import { CombatHistoryList } from '@/components/combat/combat-history-list'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { useMonsters } from '@/lib/hooks/use-monsters'
import { useCombatHistory } from '@/lib/hooks/use-combat-history'
import { combatApi } from '@/lib/api/combat'
import type { CombatResponse } from '@/lib/types/combat'

export default function CombatPage() {
  const { monsters, loading: monstersLoading } = useMonsters()
  const { combats, loading: historyLoading, refetch: refetchHistory } = useCombatHistory()

  const [monster1Id, setMonster1Id] = useState<string | null>(null)
  const [monster2Id, setMonster2Id] = useState<string | null>(null)
  const [simulating, setSimulating] = useState(false)
  const [result, setResult] = useState<CombatResponse | null>(null)

  const monster1 = monsters.find((m) => m.id === monster1Id)
  const monster2 = monsters.find((m) => m.id === monster2Id)

  const canFight = monster1Id !== null && monster2Id !== null && monster1Id !== monster2Id

  const handleSimulate = async () => {
    if (!canFight || !monster1Id || !monster2Id) return

    setSimulating(true)
    setResult(null)
    try {
      const response = await combatApi.simulate({ monster1Id, monster2Id })
      setResult(response)
      toast.success(`${response.winnerName} remporte le combat !`)
      refetchHistory()
    } catch {
      toast.error('Erreur lors du lancement du combat')
    } finally {
      setSimulating(false)
    }
  }

  if (monstersLoading || historyLoading) {
    return <LoadingSpinner label="Chargement de l'arène..." />
  }

  return (
    <>
      {/* Page header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20">
          <Crosshair className="h-5 w-5 text-red-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Arène de Combat</h1>
          <p className="text-sm text-slate-400">
            Affrontez vos monstres dans des duels épiques
          </p>
        </div>
      </div>

      {/* Combat launch section */}
      <Card className="rounded-2xl border border-white/10 bg-white/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20">
              <Swords className="h-5 w-5 text-red-400" />
            </div>
            <span>Choisir les combattants</span>
          </CardTitle>
          <CardDescription className="text-slate-400 pl-13">
            Sélectionnez deux monstres différents pour lancer un combat
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-4">
          {monsters.length < 2 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                <Swords className="h-7 w-7 text-slate-500" />
              </div>
              <p className="text-slate-400">
                Vous devez avoir au moins 2 monstres pour combattre
              </p>
              <p className="text-sm text-slate-500">
                Invoquez davantage de monstres depuis le tableau de bord.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MonsterSelector
                  monsters={monsters}
                  selectedId={monster1Id}
                  onSelect={setMonster1Id}
                  disabledId={monster2Id ?? undefined}
                  label="Monstre 1"
                />
                <MonsterSelector
                  monsters={monsters}
                  selectedId={monster2Id}
                  onSelect={setMonster2Id}
                  disabledId={monster1Id ?? undefined}
                  label="Monstre 2"
                />
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  onClick={handleSimulate}
                  disabled={!canFight || simulating}
                  size="lg"
                  className="h-12 px-8 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold disabled:opacity-50"
                >
                  {simulating ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Combat en cours...
                    </>
                  ) : (
                    <>
                      <Swords className="mr-2 h-5 w-5" />
                      Lancer le combat
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Combat result */}
      {result && monster1 && monster2 && (
        <CombatResult
          result={result}
          monster1Name={monster1.name}
          monster2Name={monster2.name}
        />
      )}

      {/* Combat history section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Historique des Combats</h2>
        <CombatHistoryList combats={combats} />
      </div>
    </>
  )
}
