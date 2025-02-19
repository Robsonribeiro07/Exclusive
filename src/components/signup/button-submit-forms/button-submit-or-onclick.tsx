import Loader from '@/components/loading/loading1'
import { Check, X } from 'lucide-react'
import { ComponentProps } from 'react'
import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'bg-black text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex-1 items-center justify-center ',
  variants: {
    isPending: {
      true: ' cursor-not-allowed ',
    },
    isCompleteStep: {
      true: 'bg-green-500 hover:bg-green-700 hover:text-white ',
      false: 'bg-black', // i
    },
    Sucess: {
      true: 'bg-green-500 hover:bg-green-700 hover:text-white w-3',
    },
  },
  defaultVariants: {
    isCompleteStep: false,
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  children: ReactNode
  error?: boolean
}

export function ButtonSubmitOrOnClick({
  isPending,
  error,
  isCompleteStep,
  Sucess,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={button({ isCompleteStep, isPending, Sucess })}
    >
      {Sucess ? (
        <Check className="w-5 h-8 mx-auto" />
      ) : isPending ? (
        <Loader />
      ) : error ? (
        <X className="w-5 h-8 mx-auto" />
      ) : (
        props.children
      )}
    </button>
  )
}
