import { ButtonSignWithGoogle } from './button-sign-with-google'
import { ButtonSubmit } from './button-submit'
import { Input } from './input/input'
import { useSignUpState } from '@/stores/use-state-from-signup'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { IsLoading } from './isLoading'
import { DialogExistingUser } from '../dialogs/signup/dialog-existing-user'
import { useModalExistingUserNotCompletionProfile } from '@/stores/signup/modal-existing-user-not-completion-profile'
import { NewUser } from '@/api/user/register/new-user'

export function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState<{
    email: string
    name: string
    progress: string
  } | null>(null)
  const [errorSenhaNotMatch, setErrorSenhaNotMatch] = useState(false)

  const [tokenSetCookie, setTokenSetCookie] = useState<string | null>(null)

  const { setOpen } = useModalExistingUserNotCompletionProfile()

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)

    const {
      data,
      decodedToken,
      error,
      token: tokenSetCookie,
      progreessCompletion,
    } = await NewUser(formData)

    if (errorSenhaNotMatch) {
      setIsLoading(false)
      setErrorSenhaNotMatch(true)
    }

    if (error === 'User already exists' && decodedToken) {
      console.log(progreessCompletion)

      if (progreessCompletion === 'false') {
        setOpen()
        setToken(decodedToken)
        setTokenSetCookie(tokenSetCookie)

        setIsLoading(false)
      }

      if (progreessCompletion === 'true') {
        window.alert('usuario ja existe faça login')
      }
    }

    if ((data && data.redirectUrl, data?.token)) {
      const newUrl = new URL(data.redirectUrl, process.env.NEXT_PUBLIC_URL)

      redirect(newUrl.toString())
    }

    setIsLoading(false)
  }

  const { setIsReadyAccount } = useSignUpState()

  const inputs = [
    { name: 'email', placeholder: 'Email', type: 'email' },
  ] as const

  return (
    <div className="w-[23rem] h-[33.125rem] text-black">
      {isLoading && <IsLoading />}
      <DialogExistingUser token={token} tookenSetCokkie={tokenSetCookie} />

      {errorSenhaNotMatch && (
        <p className="text-red-500 text-sm">As senhas não coincidem</p>
      )}
      <h1 className="text-2xl font-medium text-black">Create an account</h1>
      <p className="text-[1rem]">Enter your details below</p>
      <form className="flex gap-8 flex-col mt-8 " action={handleSubmit}>
        {inputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <ButtonSubmit disabled={isLoading} />
        <ButtonSignWithGoogle />
      </form>

      <div className="flex w-fit mx-auto text-Label gap-3 mt-3">
        <p>Already have account?</p>
        <p
          className="text-[#4D4D4D] cursor-pointer underline underline-offset-8"
          onClick={setIsReadyAccount}
        >
          Log in
        </p>
      </div>
    </div>
  )
}
