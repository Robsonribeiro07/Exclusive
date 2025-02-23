'use client'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { CreateStoreInformation } from '@/api/user/register/create-store-information'

const StoreInformationSchema = z.object({
  NameStore: z.string().min(1, { message: 'Nome é obrigatório' }),
  DescriptionStore: z.string().min(1, { message: 'Senha é obrigatória' }),
  Categorias: z.string().min(1, { message: 'Sobrenome é obrigatório' }),
})

type storeInformationSchema = z.infer<typeof StoreInformationSchema>

export function useStoreInformationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<storeInformationSchema>({
    resolver: zodResolver(StoreInformationSchema),
    defaultValues: {
      NameStore: '',
      DescriptionStore: '',
      Categorias: '',
    },
  })

  const handleSubmitForm = async (data: storeInformationSchema) => {
    if (!data) return

    const { NameStore, DescriptionStore, Categorias } = data

    await CreateStoreInformation({
      NameStore,
      DescriptionStore,
      Categorias,
    })

    redirect('/home')
  }
  return {
    register,
    handleSubmit: handleSubmit(handleSubmitForm),
    errors,
    isSubmitting,
  }
}
