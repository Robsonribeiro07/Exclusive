import apiProducts from '@/lib/axios/products'
import { AxiosError } from 'axios'

interface InsertCoupon {
  code: string
  userId: string
  TotalAmount: number
}

export interface ResponseInsertCoupon {
  success: boolean
  discount?: number
  finalPrice?: number
  CodeNameCoupon?: string
  PriceNormal?: number
  error?: string
}

export async function handleInsertCoupon({
  code,
  userId,
  TotalAmount,
}: InsertCoupon): Promise<ResponseInsertCoupon> {
  try {
    const response = await apiProducts.post('/cupons/usage-coupon', {
      code,
      userId,
      TotalAmount,
    })

    return {
      success: true,
      ...response.data, // Retorna os dados do cupom
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        error:
          error.response?.data?.message || 'Erro desconhecido ao aplicar cupom',
      }
    }

    return {
      success: false,
      error: 'Erro inesperado ao aplicar cupom',
    }
  }
}
