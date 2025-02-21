'use client'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { CreateLocationInformation } from '@/api/user/register/location-information'

export interface DadosFromApiCep {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ddd: string
  ibge: string
  siafi: string
}

const LocationInformationSchema = z.object({
  Pais: z.string().min(1, { message: 'Pais é obrigatório' }),
  Estado: z.string().min(1, { message: 'Estado é obrigatório' }),
  Cidade: z.string().min(1, { message: 'Cidade é obrigatório' }),
  Endereco: z.string().min(1, { message: 'Endereço é obrigatório' }),
  CEP: z.string().min(1, { message: 'cep é obrigatório' }),
})

type locationInformationFormData = z.infer<typeof LocationInformationSchema>

export function useLocationInformationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<locationInformationFormData>({
    resolver: zodResolver(LocationInformationSchema),
    defaultValues: {
      Pais: '',
      Estado: '',
      Cidade: '',
      Endereco: '',
      CEP: '',
    },
  })

  const handleSubmitForm = async (data: locationInformationFormData) => {
    if (!data) return

    const { Pais, Estado, Cidade, Endereco, CEP } = data

    const { redirectUrl } = await CreateLocationInformation({
      Pais,
      Estado,
      Cidade,
      Endereco,
      CEP: Number(CEP),
    })

    const newUrl = new URL(redirectUrl, process.env.NEXT_PUBLIC_URL)

    redirect(newUrl.toString())
  }

  const handleDadosFromApiCep = (data: DadosFromApiCep) => {
    reset({
      Endereco: data.logradouro,
      Cidade: data.localidade,
      Estado: data.uf,
      Pais: 'Brasil',
    })
  }
  return {
    register,
    handleSubmit: handleSubmit(handleSubmitForm),
    errors,
    handleDadosFromApiCep,
    isSubmitting,
    isSubmitSuccessful,
  }
}
