'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { UserCircle, Crown, Zap, Swords, Loader2 } from 'lucide-react'
import { usePlayer } from '@/lib/hooks/use-player'
import { playerApi } from '@/lib/api/players'
import { XpProgress } from '@/components/players/xp-progress'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { toast } from 'sonner'

export default function ProfilePage() {
  const { player, loading, error, refetch } = usePlayer()
  const [gaining, setGaining] = useState(false)

  const handleGainXp = async () => {
    if (!player) return
    setGaining(true)
    try {
      const prevLevel = player.level
      const updated = await playerApi.gainExperience(25)
      if (updated.level > prevLevel) {
        toast.success(`Niveau ${updated.level} atteint ! Capacité augmentée.`)
      } else {
        toast.success('Expérience gagnée !')
      }
      refetch()
    } catch {
      toast.error("Échec du gain d'expérience")
    } finally {
      setGaining(false)
    }
  }

  if (loading) {
    return <LoadingSpinner label="Chargement du profil..." />
  }

  if (error || !player) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-red-400">{error || 'Profil introuvable'}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
          <UserCircle className="h-5 w-5 text-violet-400" />
        </div>
        <h1 className="text-2xl font-bold">Profil</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player Info */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20">
              <UserCircle className="h-8 w-8 text-violet-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{player.username}</h2>
              <p className="text-sm text-slate-400">Joueur</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-slate-400">Niveau</span>
              </div>
              <span className="text-lg font-bold">
                {player.level} <span className="text-sm text-slate-500 font-normal">/ 50</span>
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-violet-400" />
                  <span className="text-sm text-slate-400">Expérience</span>
                </div>
                <span className="text-sm text-slate-300">
                  {player.experience} / {player.xpThreshold}
                </span>
              </div>
              <XpProgress current={player.experience} max={player.xpThreshold} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Swords className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-400">Capacité de collection</span>
              </div>
              <span className="text-lg font-bold">
                {player.monsters.length}{' '}
                <span className="text-sm text-slate-500 font-normal">/ {player.maxMonsters}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
          <h3 className="text-lg font-bold">Actions</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-semibold mb-2">Gagner de l&apos;expérience</h4>
              <p className="text-xs text-slate-400 mb-4">
                Gagnez de l&apos;expérience pour monter en niveau et augmenter votre capacité de collection.
              </p>
              <Button
                onClick={handleGainXp}
                disabled={gaining || player.level >= 50}
                className="bg-violet-600 hover:bg-violet-500 text-white"
              >
                {gaining ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Entraînement...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Gagner XP (+25)
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
