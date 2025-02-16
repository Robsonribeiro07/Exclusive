"use client"
import { Check } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import {tv, VariantProps} from 'tailwind-variants'


const buttonAction = {
    primary: () => console.log("primary"),
    secondary: () => console.log("secondary"),
}

const button = tv({
    base: 'rounded-m px-4 py-2',
    variants: {
        size: {
            sm: 'px-4 py-2 rounded-sm',
            md: 'px-6 py-3 rounded-md',
            lg: 'px-8 py-4 rounded-lg',
        },
        variant: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-500 text-white',
        },
        
        sucess: {
            true: 'bg-green-500 text-white',
        }
    },
    defaultVariants: {
        size: 'md',
        variant: 'primary',
    },
})

interface ButtonProps extends ComponentProps <'button'>, VariantProps<typeof button>{
    children: ReactNode
}


export function Button({...props}: ButtonProps) {
    
        return <button {...props} className={button({...props})} onClick={buttonAction[props.variant ?? 'primary']}>
            {props.sucess ? <Check/> : props.children}
        </button>
}
