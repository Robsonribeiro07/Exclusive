'use client'
import { ArrowLeft } from 'lucide-react'
import { Input } from '../../input/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLocationInformationForm } from '@/hooks/signup/Location-information-hook-form'
import { getCep } from '@/api/user/register/cep'
import { useEffect, useState } from 'react'
import { ButtonSubmitOrOnClick } from '../../button-submit-forms/button-submit-or-onclick'
import { useGetTokenDecode } from '@/hooks/signup/get-token-decode'

export function Address() {
  const seachParams = useSearchParams()

  const [isCepReceivedData, setIsCepReceivedData] = useState(false)

  const [userStepComplete, setUserStepComplete] = useState(false)

  const { tokenDecode } = useGetTokenDecode()

  useEffect(() => {
    if (tokenDecode && tokenDecode.progress !== 'step2_andress') {
      setUserStepComplete(true)
    }
  }, [tokenDecode])

  const { push } = useRouter()

  const callbackUrl = seachParams.get('callbackUrl')

  const handleCallBackUrl = async () => {
    document.cookie = `callbackUrl=${true}; path=/`

    return push(callbackUrl ?? '/auth/sign-in/step1_Profile')
  }

  const {
    register,
    handleSubmit,
    errors,
    handleDadosFromApiCep,
    isSubmitting,
    isSubmitSuccessful,
  } = useLocationInformationForm()

  const STEP2_INPUTS = [
    {
      name: 'zipCode',
      placeholder: 'CEP',
      type: 'number',
      register: register('CEP'),
      onBlur: async (e: React.FocusEvent<HTMLInputElement>) => {
        e?.preventDefault()
        const response = await getCep(e.target.value)
        setIsCepReceivedData(true)

        handleDadosFromApiCep(response)
      },
    },

    {
      name: 'country',
      placeholder: 'País',
      type: 'text',
      register: register('Pais'),
      disabled: !isCepReceivedData,
    },

    {
      name: 'state',
      placeholder: 'Estado',
      type: 'text',
      register: register('Estado'),
      disabled: !isCepReceivedData,
    },
    {
      name: 'city',
      placeholder: 'Cidade',
      type: 'text',
      register: register('Cidade'),
      disabled: !isCepReceivedData,
    },
    {
      name: 'address',
      placeholder: 'Endereço',
      type: 'text',
      register: register('Endereco'),
      disabled: !isCepReceivedData,
    },
  ] as const

  const handleNextPageWithUserCompleteStep = () => {
    if (userStepComplete) {
      push('/auth/sign-in/step3   _storeInformation')
    }
  }
  return (
    <div className="w-[23rem] h-[33.125rem] text-black">
      {errors && <p className="text-red-500">{errors.CEP?.message}</p>}
      <h1 className="text-2xl font-medium text-black">Location Information</h1>
      <p className="text-[1rem]">Please enter your location details</p>

      <form className="flex gap-8 flex-col mt-8" onSubmit={handleSubmit}>
        {STEP2_INPUTS.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <div className="w-full flex gap-5 items-center">
          <ArrowLeft onClick={handleCallBackUrl} />
          <ButtonSubmitOrOnClick
            isCompleteStep={userStepComplete}
            isPending={isSubmitting}
            Sucess={isSubmitSuccessful}
            onClick={handleNextPageWithUserCompleteStep}
            disabled={isSubmitting}
          >
            Continue
          </ButtonSubmitOrOnClick>
        </div>
      </form>
    </div>
  )
}
