import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, SearchX } from 'lucide-react'

export default function MonsterNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 mb-4">
        <SearchX className="h-8 w-8 text-slate-500" />
      </div>
      <h2 className="text-xl font-bold mb-2">Monstre introuvable</h2>
      <p className="text-slate-400 text-sm mb-6">Ce monstre n&apos;existe pas ou a été libéré.</p>
      <Link href="/collection">
        <Button variant="ghost" className="text-slate-400 hover:text-white">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à la collection
        </Button>
      </Link>
    </div>
  )
}
