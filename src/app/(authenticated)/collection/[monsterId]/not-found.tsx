import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { CollectionIcon } from '@/components/icons'

export default function MonsterNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-sm border-2 border-border bg-card p-8 flex flex-col items-center gap-4 max-w-md">
        <div className="flex h-16 w-16 items-center justify-center bg-secondary border-2 border-border rounded-sm">
          <CollectionIcon className="h-8 w-8 text-muted-foreground" size={32} />
        </div>
        <h2 className="text-xl font-mono font-bold uppercase tracking-wide">Monstre introuvable</h2>
        <p className="text-muted-foreground text-sm font-mono">
          Ce monstre n&apos;a pas été trouvé dans votre collection
        </p>
        <Link href="/collection">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground font-mono">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la collection
          </Button>
        </Link>
      </div>
    </div>
  )
}
