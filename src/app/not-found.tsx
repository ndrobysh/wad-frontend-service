import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-slate-400 mb-8">Page introuvable</p>
      <Link href="/">
        <Button className="bg-violet-600 hover:bg-violet-500 text-white">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  )
}
