'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Dumbbell, Loader2, Trash2 } from 'lucide-react'
import { useMonsterDetail } from '@/lib/hooks/use-monster-detail'
import { monsterApi } from '@/lib/api/monsters'
import { playerApi } from '@/lib/api/players'
import { MonsterDetailHeader } from '@/components/monsters/monster-detail-header'
import { MonsterStats } from '@/components/monsters/monster-stats'
import { MonsterSkills } from '@/components/monsters/monster-skills'
import { ConfirmDialog } from '@/components/shared/confirm-dialog'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { toast } from 'sonner'
import Link from 'next/link'

export default function MonsterDetailPage() {
  const params = useParams<{ monsterId: string }>()
  const router = useRouter()
  const { monster, loading, error, refetch } = useMonsterDetail(params.monsterId)
  const [training, setTraining] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const handleTrain = async () => {
    if (!monster) return
    setTraining(true)
    try {
      const prevLevel = monster.level
      const updated = await monsterApi.gainExperience(monster.id, 25)
      if (updated.level > prevLevel) {
        toast.success(`${monster.name} est passé au niveau ${updated.level} !`)
      } else {
        toast.success(`${monster.name} a gagné de l'expérience !`)
      }
      refetch()
    } catch {
      toast.error("Échec de l'entraînement")
    } finally {
      setTraining(false)
    }
  }

  const handleDelete = async () => {
    if (!monster) return
    setDeleting(true)
    try {
      await monsterApi.delete(monster.id)
      await playerApi.removeMonster(monster.id)
      toast.success(`${monster.name} a été libéré`)
      router.push('/collection')
    } catch {
      toast.error('Échec de la suppression')
      setDeleting(false)
    }
  }

  if (loading) {
    return <LoadingSpinner label="Chargement du monstre..." />
  }

  if (error || !monster) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-red-400 mb-4">{error || 'Monstre introuvable'}</p>
        <Link href="/collection">
          <Button variant="ghost" className="text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la collection
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/collection">
          <Button variant="ghost" className="text-slate-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Collection
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleTrain}
            disabled={training}
            className="bg-amber-600 hover:bg-amber-500 text-white"
          >
            {training ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Dumbbell className="h-4 w-4 mr-2" />
            )}
            Entraîner
          </Button>

          <ConfirmDialog
            trigger={
              <Button variant="ghost" disabled={deleting} className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              </Button>
            }
            title="Libérer ce monstre ?"
            description={`Êtes-vous sûr de vouloir libérer ${monster.name} ? Cette action est irréversible.`}
            confirmLabel="Libérer"
            onConfirm={handleDelete}
            variant="destructive"
          />
        </div>
      </div>

      <MonsterDetailHeader monster={monster} />

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-bold mb-4">Statistiques</h3>
        <MonsterStats hp={monster.hp} atk={monster.atk} def={monster.def} vit={monster.vit} size="lg" />
      </div>

      <MonsterSkills monster={monster} onUpdate={refetch} />
    </>
  )
}
