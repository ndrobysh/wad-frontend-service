'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/use-auth'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || isAuthenticated) return null

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4" suppressHydrationWarning>
      <div className="absolute inset-0 bg-linear-to-br from-violet-900/20 via-transparent to-blue-900/20" />
      <div className="relative w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  )
}
