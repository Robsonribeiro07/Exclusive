import { Metadata } from 'next'
import { ButtonSubmit } from './button-submit'
import { Input } from './input/input'
import { useSignUpState } from '@/stores/use-state-from-signup'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign In page',
}

export function SignIn() {
  const { setIsNotReadyAccount } = useSignUpState()

  const inputs = [
    { name: 'name', placeholder: 'Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'password', placeholder: 'Password', type: 'password' },
    {
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      type: 'password',
    },
  ] as const

  return (
    <div className="w-[23rem] h-[33.125rem] text-black">
      <h1 className="text-2xl font-medium text-black">Log in to Exclusive</h1>
      <p className="text-[1rem]">Enter your details below</p>

      <form className="flex gap-8 flex-col mt-8">
        {inputs.map((input) => (
          <Input key={input.name} {...input} />
        ))}
        <ButtonSubmit />
      </form>

      <div className="flex w-fit mx-auto text-Label gap-3 mt-3">
        <p>Already have account?</p>
        <p
          className="text-[#4D4D4D] cursor-pointer underline underline-offset-8"
          onClick={setIsNotReadyAccount}
        >
          Log in
        </p>
      </div>
    </div>
  )
}
