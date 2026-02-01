import { ApiError } from '@/lib/types/api'

export async function apiClient<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (token) {
    ;(headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(url, { ...options, headers })

  if (!res.ok) {
    if (res.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      window.location.href = '/login'
      throw new ApiError(401, 'Session expirée')
    }

    const message = await res.text().catch(() => 'Erreur serveur')
    throw new ApiError(res.status, message)
  }

  const text = await res.text()
  if (!text) return undefined as T
  return JSON.parse(text) as T
}
