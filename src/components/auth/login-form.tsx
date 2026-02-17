'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Sparkles } from 'lucide-react'
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
    <div className="login-card rounded-2xl border border-white/10 bg-[#12121a] shadow-xl">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-violet-500/20 rounded-2xl blur-xl" />
        </div>
        <h1 className="text-3xl font-bold bg-linear-to-r from-white via-violet-200 to-blue-200 bg-clip-text text-transparent mb-3">
          WAD Gacha
        </h1>
        <p className="text-slate-400 text-sm max-w-xs">
          Invoquez des monstres légendaires et construisez votre équipe ultime
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username" className="text-slate-300 text-sm font-medium">
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
            className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-violet-500/50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password" className="text-slate-300 text-sm font-medium">
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
            className="h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-violet-500/50"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400 flex items-center gap-2"
          >
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full h-12 mt-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold"
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
              <Sparkles className="mr-2 h-5 w-5" />
              Se connecter
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
