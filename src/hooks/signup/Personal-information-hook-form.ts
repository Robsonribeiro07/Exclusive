'use client'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateInformationProfile } from '@/api/user/register/create-information-profile'
import { redirect, usePathname } from 'next/navigation'
import { useStep1ContentsInputs } from '@/stores/signup/steps/step1-contents-inputs'

const PersonalInformationSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  senha: z.string().min(1, { message: 'Senha é obrigatória' }),
  sobrenome: z.string().min(1, { message: 'Sobrenome é obrigatório' }),
  cpf: z.string(),
  tel: z.string(),
})

type personalInformationFormData = z.infer<typeof PersonalInformationSchema>

export function usePersonalInformationForm() {
  const { handleContentInputs, data } = useStep1ContentsInputs()

  const pathName = usePathname()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<personalInformationFormData>({
    resolver: zodResolver(PersonalInformationSchema),
    defaultValues: {
      nome: data.nome,
      sobrenome: data.sobrenome,
      cpf: data.cpf,
      tel: data.tel,
      senha: data.senha,
    },
  })

  const handleSubmitForm = async (data: personalInformationFormData) => {
    if (!data) return

    const { nome, sobrenome, cpf, tel, senha } = data

    const { redirectUrl } = await CreateInformationProfile({
      nome,
      sobrenome,
      cpf,
      tel: Number(tel),
      senha,
    })

    handleContentInputs(data)

    const newUrl = new URL(redirectUrl, process.env.NEXT_PUBLIC_URL)

    newUrl.searchParams.set('callbackUrl', pathName)

    setTimeout(() => {
      redirect(newUrl.toString())
    }, 1000)
  }
  return {
    register,
    handleSubmit: handleSubmit(handleSubmitForm),
    errors,
    isSubmitting,
    isSubmitSuccessful,
  }
}
