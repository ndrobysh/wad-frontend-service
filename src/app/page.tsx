'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Loader2, 
  Sparkles, 
  LogOut, 
  User, 
  Swords, 
  Zap, 
  Shield, 
  Heart, 
  Wind,
  Crown,
  Flame,
  Droplets,
  Mountain,
  Sun,
  Moon,
  Trophy,
  Star
} from 'lucide-react'

interface Player {
  username: string
  level: number
  experience: number
  xpThreshold: number
  maxMonsters: number
  monsters: string[]
}

interface Monster {
  id: string
  name: string
  elementType: string
  level: number
  hp: number
  atk: number
  def: number
  vit: number
}

const elementConfig: Record<string, { gradient: string, border: string, icon: React.ElementType, glow: string }> = {
  fire: { 
    gradient: 'from-orange-500/20 via-red-500/10 to-amber-500/5', 
    border: 'border-orange-500/30 hover:border-orange-400/50',
    icon: Flame,
    glow: 'shadow-orange-500/20'
  },
  water: { 
    gradient: 'from-blue-500/20 via-cyan-500/10 to-sky-500/5', 
    border: 'border-blue-500/30 hover:border-blue-400/50',
    icon: Droplets,
    glow: 'shadow-blue-500/20'
  },
  earth: { 
    gradient: 'from-amber-600/20 via-yellow-600/10 to-orange-600/5', 
    border: 'border-amber-500/30 hover:border-amber-400/50',
    icon: Mountain,
    glow: 'shadow-amber-500/20'
  },
  wind: { 
    gradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/5', 
    border: 'border-emerald-500/30 hover:border-emerald-400/50',
    icon: Wind,
    glow: 'shadow-emerald-500/20'
  },
  light: { 
    gradient: 'from-yellow-400/20 via-amber-300/10 to-orange-200/5', 
    border: 'border-yellow-400/30 hover:border-yellow-300/50',
    icon: Sun,
    glow: 'shadow-yellow-400/20'
  },
  dark: { 
    gradient: 'from-purple-600/20 via-violet-500/10 to-indigo-500/5', 
    border: 'border-purple-500/30 hover:border-purple-400/50',
    icon: Moon,
    glow: 'shadow-purple-500/20'
  },
}

const getElementConfig = (elementType: string) => {
  return elementConfig[elementType.toLowerCase()] || {
    gradient: 'from-slate-500/20 via-slate-400/10 to-slate-300/5',
    border: 'border-slate-500/30 hover:border-slate-400/50',
    icon: Star,
    glow: 'shadow-slate-500/20'
  }
}

export default function Home() {
  const [token, setToken] = useState<string | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [player, setPlayer] = useState<Player | null>(null)
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [summonedMonster, setSummonedMonster] = useState<Monster | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('username')
    if (savedToken && savedUser) {
      setToken(savedToken)
      setUsername(savedUser)
      loadPlayerData(savedUser, savedToken)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${process.env.AUTH_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        const data = await res.json()
        setToken(data.token)
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', username)
        loadPlayerData(username, data.token)
      } else {
        setError('Identifiants incorrects')
      }
    } catch {
      setError('Erreur de connexion au serveur')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setToken(null)
    setPlayer(null)
    setMonsters([])
    setSummonedMonster(null)
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUsername('')
    setPassword('')
  }

  const loadPlayerData = async (user: string, authToken: string) => {
    try {
      const res = await fetch(`${process.env.PLAYER_API_URL}/api/players/${user}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      })
      if (res.ok) {
        const data = await res.json()
        setPlayer(data)
        loadMonsters(user, authToken)
      }
    } catch {
      console.error('Erreur chargement joueur')
    }
  }

  const loadMonsters = async (user: string, authToken: string) => {
    try {
      const res = await fetch(`${process.env.MONSTER_API_URL}/api/monsters/player/${user}`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      })
      if (res.ok) {
        const data = await res.json()
        setMonsters(data)
      }
    } catch {
      console.error('Erreur chargement monstres')
    }
  }

  const handleSummon = async () => {
    if (!token) return
    setLoading(true)
    setSummonedMonster(null)
    setIsAnimating(true)

    try {
      const res = await fetch(`${process.env.INVOCATION_API_URL}/api/invocations/summon`, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        const data = await res.json()
        setTimeout(() => {
          setSummonedMonster(data.monster)
          setIsAnimating(false)
        }, 1500)
        if (username) loadPlayerData(username, token)
      } else {
        setError('Échec de l\'invocation')
        setIsAnimating(false)
      }
    } catch {
      setError('Erreur d\'invocation')
      setIsAnimating(false)
    } finally {
      setLoading(false)
    }
  }

  // Login Screen
  if (!token) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4" suppressHydrationWarning>
        {/* background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-900/20 via-transparent to-blue-900/20" />
        
        {/* Login Card */}
        <div className="relative w-full max-w-md">
          <div className="login-card rounded-2xl border border-white/10 bg-[#12121a] shadow-xl">
            
            {/* Header */}
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
            
            {/* Form */}
            <div>
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
                  <div role="alert" className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400 flex items-center gap-2">
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
          </div>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/20 to-blue-500/20 border border-white/10">
                <Sparkles className="h-5 w-5 text-violet-400" />
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                WAD Gacha
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                <User className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-300 font-medium">{username}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout} 
                className="rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Déconnexion</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Grid */}
        {player && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20">
                  <Crown className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Niveau</p>
                  <p className="text-2xl font-bold">{player.level}</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
                  <Zap className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Expérience</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">{player.experience}</p>
                    <p className="text-sm text-slate-500">/ {player.xpThreshold}</p>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                    <div 
                      className="h-full rounded-full bg-violet-500"
                      style={{ width: `${(player.experience / player.xpThreshold) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <Trophy className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Collection</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">{monsters.length}</p>
                    <p className="text-sm text-slate-500">/ {player.maxMonsters}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summon Section */}
        <Card className="border-white/10 bg-white/5 rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
                <Sparkles className="h-5 w-5 text-violet-400" />
              </div>
              <span>Portail d'Invocation</span>
            </CardTitle>
            <CardDescription className="text-slate-400 pl-13">
              Invoquez un nouveau monstre pour rejoindre votre équipe de champions
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 pt-4">
            {/* Summon button */}
            <div className="flex justify-center py-8">
              <Button 
                onClick={handleSummon} 
                disabled={loading || isAnimating}
                size="lg"
                className="h-14 px-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-lg font-bold disabled:opacity-50"
              >
                {loading || isAnimating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Invocation...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Invoquer
                  </>
                )}
              </Button>
            </div>

            {/* Summoned Monster Display */}
            {summonedMonster && !isAnimating && (
              <div className="space-y-4">
                <p className="text-center text-sm text-slate-400">Nouveau monstre invoqué !</p>
                
                {(() => {
                  const config = getElementConfig(summonedMonster.elementType)
                  const ElementIcon = config.icon
                  return (
                    <div className={`rounded-2xl border ${config.border} bg-gradient-to-br ${config.gradient} p-6`}>
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <ElementIcon className="h-5 w-5 text-slate-300" />
                              <span className="text-sm text-slate-400 capitalize">{summonedMonster.elementType}</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white">{summonedMonster.name}</h4>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
                            <Star className="h-4 w-4 text-amber-400" />
                            <span className="text-sm font-semibold">Niv. {summonedMonster.level}</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Heart className="h-5 w-5 text-red-400" />
                            <div>
                              <p className="text-xs text-slate-400">PV</p>
                              <p className="text-lg font-bold">{summonedMonster.hp}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Swords className="h-5 w-5 text-orange-400" />
                            <div>
                              <p className="text-xs text-slate-400">ATK</p>
                              <p className="text-lg font-bold">{summonedMonster.atk}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Shield className="h-5 w-5 text-blue-400" />
                            <div>
                              <p className="text-xs text-slate-400">DEF</p>
                              <p className="text-lg font-bold">{summonedMonster.def}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Wind className="h-5 w-5 text-emerald-400" />
                            <div>
                              <p className="text-xs text-slate-400">VIT</p>
                              <p className="text-lg font-bold">{summonedMonster.vit}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Monsters Collection */}
        <Card className="border-white/10 bg-white/5 rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                <Swords className="h-5 w-5 text-blue-400" />
              </div>
              <span>Votre Collection</span>
              {monsters.length > 0 && (
                <span className="ml-2 px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-300">
                  {monsters.length} monstre{monsters.length > 1 ? 's' : ''}
                </span>
              )}
            </CardTitle>
            <CardDescription className="text-slate-400 pl-13">
              Gérez et admirez votre collection de monstres légendaires
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4">
            {monsters.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 mb-4">
                  <Sparkles className="h-8 w-8 text-slate-500" />
                </div>
                <p className="text-slate-400 mb-1">Collection vide</p>
                <p className="text-slate-500 text-sm">Invoquez votre premier monstre !</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {monsters.map((monster) => {
                  const config = getElementConfig(monster.elementType)
                  const ElementIcon = config.icon
                  return (
                    <div 
                      key={monster.id}
                      className={`rounded-2xl border ${config.border} bg-linear-to-br ${config.gradient} p-5 hover:border-white/20 transition-colors`}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <ElementIcon className="h-4 w-4 text-slate-400" />
                            <span className="text-xs text-slate-400 capitalize">{monster.elementType}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 border border-white/5">
                            <Star className="h-3 w-3 text-amber-400" />
                            <span className="text-xs font-medium">Niv. {monster.level}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-white mb-3">{monster.name}</h4>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Heart className="h-3.5 w-3.5 text-red-400" />
                            <span className="text-slate-300">{monster.hp}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Swords className="h-3.5 w-3.5 text-orange-400" />
                            <span className="text-slate-300">{monster.atk}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Shield className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-slate-300">{monster.def}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Wind className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-slate-300">{monster.vit}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Error Toast */}
        {error && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3">
              <p className="text-sm text-red-400">{error}</p>
              <button onClick={() => setError('')} className="text-red-400 hover:text-red-300">✕</button>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/5 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-slate-500 text-sm">WAD Gacha • Projet IMT</p>
        </div>
      </footer>
    </div>
  )
}
