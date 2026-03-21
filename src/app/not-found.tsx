import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground">
      <div className="rounded-sm border-2 border-border bg-card p-12 flex flex-col items-center gap-4 text-center">
        <h1 className="font-mono text-primary text-6xl font-bold">404</h1>
        <p className="text-muted-foreground font-mono">Page introuvable</p>
        <Link href="/">
          <Button className="font-mono mt-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Button>
        </Link>
      </div>
    </div>
  )
}
