'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CombatReplay } from '@/components/combat/combat-replay'
import { LoadingSpinner } from '@/components/shared/loading-spinner'
import { useCombatDetail } from '@/lib/hooks/use-combat-detail'

interface CombatReplayPageProps {
  params: Promise<{ combatId: string }>
}

export default function CombatReplayPage({ params }: CombatReplayPageProps) {
  const { combatId } = React.use(params)
  const { combat, loading, error } = useCombatDetail(combatId)

  if (loading) {
    return <LoadingSpinner label="Chargement du replay..." />
  }

  if (error || !combat) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-destructive font-mono mb-4">{error || 'Combat introuvable'}</p>
        <Link href="/combat">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;arène
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Link href="/combat">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Arène
          </Button>
        </Link>
      </div>

      <CombatReplay combat={combat} />
    </>
  )
}
