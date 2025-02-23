import { UseFormRegisterReturn } from 'react-hook-form'
import { InputSkeleton } from './input-skeleton'

interface InputFromDetailsCheckoutProps {
  label: string
  register: UseFormRegisterReturn
  disabled: boolean
}
export function InputFromDetailsCheckout({
  label,
  register,
  disabled,
  ...rest
}: InputFromDetailsCheckoutProps & { disabled: boolean }) {
  return (
    <div>
      <p className="font-regular text-sm text-black opacity-60">{label}</p>
      {disabled ? (
        <InputSkeleton />
      ) : (
        <input
          type="text"
          className="w-full h-[3rem] bg-secondary mt-2 px-3 disabled:opacity-60 disabled:cursor-not-allowed"
          {...rest}
          {...register}
          disabled={disabled}
        />
      )}
    </div>
  )
}
