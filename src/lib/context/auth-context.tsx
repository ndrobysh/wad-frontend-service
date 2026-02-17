'use client'

import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { authApi } from '@/lib/api/auth'
import type { LoginRequest } from '@/lib/types/auth'

interface AuthContextType {
  token: string | null
  username: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: LoginRequest) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('username')
    if (savedToken && savedUser) {
      setToken(savedToken)
      setUsername(savedUser)
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (data: LoginRequest) => {
    const res = await authApi.login(data)
    setToken(res.token)
    setUsername(data.username)
    localStorage.setItem('token', res.token)
    localStorage.setItem('username', data.username)
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUsername(null)
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }, [])

  return (
    <AuthContext.Provider
      value={{
        token,
        username,
        isAuthenticated: !!token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
