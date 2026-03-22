'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProfileIcon, CollectionIcon, CoinIcon } from '@/components/icons'
import { Crown } from 'lucide-react'
import { usePlayer } from '@/lib/hooks/use-player'
import { playerApi } from '@/lib/api/players'
import { XpProgress } from '@/components/players/xp-progress'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { toast } from 'sonner'

export default function ProfilePage() {
  const { player, loading, error, refetch } = usePlayer()
  const [gaining, setGaining] = useState(false)

  const handleGainXp = async () => {
    console.log('gain xp pour', player?.username)
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
        <p className="text-destructive font-mono">{error || 'Profil introuvable'}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-secondary border-2 border-border rounded-sm">
          <ProfileIcon className="h-5 w-5 text-primary" size={20} />
        </div>
        <h1 className="text-2xl font-mono font-bold uppercase tracking-wide">Profil</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player Info */}
        <div className="rounded-sm border-2 border-border bg-card p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center bg-secondary border-2 border-border rounded-sm">
              <ProfileIcon className="h-8 w-8 text-primary" size={32} />
            </div>
            <div>
              <h2 className="text-xl font-mono font-bold">{player.username}</h2>
              <p className="text-sm text-muted-foreground font-mono">Joueur</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground font-mono">Niveau</span>
              </div>
              <span className="text-lg font-mono font-bold">
                {player.level} <span className="text-sm text-muted-foreground font-normal">/ 50</span>
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <CoinIcon className="h-4 w-4 text-primary" size={16} />
                  <span className="text-sm text-muted-foreground font-mono">Expérience</span>
                </div>
                <span className="text-sm text-foreground font-mono">
                  {player.experience} / {player.xpThreshold}
                </span>
              </div>
              <XpProgress current={player.experience} max={player.xpThreshold} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CollectionIcon className="h-4 w-4 text-primary" size={16} />
                <span className="text-sm text-muted-foreground font-mono">Capacité de collection</span>
              </div>
              <span className="text-lg font-mono font-bold">
                {player.monsters.length}{' '}
                <span className="text-sm text-muted-foreground font-normal">/ {player.maxMonsters}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="rounded-sm border-2 border-border bg-card p-6 space-y-6">
          <h3 className="text-lg font-mono font-bold uppercase tracking-wide">Actions</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-sm bg-secondary border-2 border-border">
              <h4 className="text-sm font-mono font-semibold mb-2">Gagner de l&apos;expérience</h4>
              <p className="text-xs text-muted-foreground font-mono mb-4">
                Gagnez de l&apos;expérience pour monter en niveau et augmenter votre capacité de collection.
              </p>
              <Button
                onClick={handleGainXp}
                disabled={gaining || player.level >= 50}
                className="font-mono"
              >
                {gaining ? (
                  <span>... Entraînement...</span>
                ) : (
                  <>
                    <CoinIcon className="h-4 w-4 mr-2" size={16} />
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
