import type { LoginRequest, LoginResponse } from '@/lib/types/auth'

const AUTH_API_URL = process.env.AUTH_API_URL || 'http://localhost:8081'

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const res = await fetch(`${AUTH_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Identifiants incorrects')
    }

    return res.json()
  },
}
