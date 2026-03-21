'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { InvocationIcon } from '@/components/icons'
import { useAuth } from '@/lib/hooks/use-auth'

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await login({ username, password })
      router.push('/dashboard')
    } catch {
      setError('Identifiants incorrects')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-card rounded-sm border-2 border-border bg-card shadow-xl">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="mb-4 text-primary">
          <InvocationIcon size={32} className="text-primary" />
        </div>
        <h1 className="font-mono text-4xl text-primary font-bold tracking-widest mb-3">
          WAD
        </h1>
        <p className="text-muted-foreground text-sm max-w-xs">
          Invoquez des monstres légendaires et construisez votre équipe ultime
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username" className="text-foreground text-sm font-medium font-mono">
            Identifiant
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Entrez votre identifiant"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-required="true"
            autoComplete="username"
            className="h-12"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-foreground text-sm font-medium font-mono">
            Mot de passe
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            autoComplete="current-password"
            className="h-12"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-sm border-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-center gap-2 font-mono"
          >
            <div className="h-2 w-2 rounded-sm bg-destructive" />
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-12 mt-2"
          variant="default"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Connexion...
            </>
          ) : (
            <>
              <InvocationIcon size={20} className="mr-2" />
              Se connecter
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
