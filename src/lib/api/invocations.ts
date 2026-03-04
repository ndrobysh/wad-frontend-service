import { apiClient } from './client'
import type { InvocationResponse, BaseMonster, InvocationLog } from '@/lib/types/invocation'

const INVOCATION_API_URL = process.env.NEXT_PUBLIC_INVOCATION_API_URL || 'http://localhost:8084'

export const invocationApi = {
  invoke(): Promise<InvocationResponse> {
    return apiClient<InvocationResponse>(`${INVOCATION_API_URL}/api/invocation/invoke`, {
      method: 'POST',
    })
  },

  recreate(logId: string): Promise<InvocationResponse> {
    return apiClient<InvocationResponse>(`${INVOCATION_API_URL}/api/invocation/recreate/${logId}`, {
      method: 'POST',
    })
  },

  getRates(): Promise<BaseMonster[]> {
    return apiClient<BaseMonster[]>(`${INVOCATION_API_URL}/api/invocation/rates`)
  },

  getHistory(username: string): Promise<InvocationLog[]> {
    return apiClient<InvocationLog[]>(`${INVOCATION_API_URL}/api/invocation/history/${username}`)
  },
}
