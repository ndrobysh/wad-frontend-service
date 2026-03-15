'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useMonsterDetail } from '@/lib/hooks/use-monster-detail'
import { monsterApi } from '@/lib/api/monsters'
import { playerApi } from '@/lib/api/players'
import { MonsterProfileSidebar } from '@/components/monsters/monster-profile-sidebar'
import { MonsterStatRadar } from '@/components/monsters/monster-stat-radar'
import { MonsterSkills } from '@/components/monsters/monster-skills'
import { MonsterCombatRecord } from '@/components/monsters/monster-combat-record'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
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
        <p className="text-destructive font-mono mb-4">{error || 'Monstre introuvable'}</p>
        <Link href="/collection">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la collection
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6">
      <MonsterProfileSidebar
        monster={monster}
        onTrain={handleTrain}
        onDelete={handleDelete}
        training={training}
        deleting={deleting}
      />

      <div className="space-y-4">
        <MonsterStatRadar
          hp={monster.hp}
          atk={monster.atk}
          def={monster.def}
          vit={monster.vit}
        />

        <MonsterSkills monster={monster} onUpdate={refetch} />

        <MonsterCombatRecord monsterId={monster.id} />
      </div>
    </div>
  )
}
