import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react' // Ícones para alternar senha
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  name: string
  register?: ReturnType<UseFormRegister<FieldValues>>
}

export function Input({
  placeholder,
  type,
  name,
  register,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className="relative w-full">
      <input
        className="w-full bg-transparent border-b border-[#BFBFBF] py-2 pr-10 placeholder:text-gray-500 focus:outline-none disabled:opacity-50"
        placeholder={placeholder}
        required={true}
        type={inputType}
        name={name}
        {...register}
        {...rest} // Garante que qualquer outra propriedade seja passada
      />

      {isPassword && (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  )
}
