import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { z } from 'zod'

const CheckoutDetails = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
  streetAddress: z.string().min(1, { message: 'Street address is required' }),
  apartment: z.string().min(1, { message: 'Apartment is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  typePayment: z.enum(['cart', 'pix']),
})

export type CheckoutDetailsType = z.infer<typeof CheckoutDetails>

export interface InputBillingDetailsProps {
  firstName: {
    label: string
    register: UseFormRegisterReturn<'firstName'>
  }
  companyName: { label: string; register: UseFormRegisterReturn<'companyName'> }
  streetAddress: {
    label: string
    register: UseFormRegisterReturn<'streetAddress'>
  }
  apartment: { label: string; register: UseFormRegisterReturn<'apartment'> }
  city: { label: string; register: UseFormRegisterReturn<'city'> }
  phoneNumber: { label: string; register: UseFormRegisterReturn<'phoneNumber'> }
  email: { label: string; register: UseFormRegisterReturn<'email'> }
}

export function UseHookFormDetailsCheckout() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CheckoutDetailsType>({
    resolver: zodResolver(CheckoutDetails),
    defaultValues: {
      typePayment: 'cart',
    },
  })

  const inputs: InputBillingDetailsProps = {
    firstName: { label: 'First name', register: register('firstName') },
    companyName: { label: 'Company name', register: register('companyName') },
    streetAddress: {
      label: 'Street Address (optional)',
      register: register('streetAddress'),
    },
    apartment: {
      label: 'Apartment, suite, unit etc.',
      register: register('apartment'),
    },
    city: { label: 'City', register: register('city') },
    phoneNumber: { label: 'Phone number', register: register('phoneNumber') },
    email: { label: 'Email', register: register('email') },
  }

  const handleSubmitForm = (data: CheckoutDetailsType) => {
    console.log('ok')
    console.log(data)
  }

  return {
    inputs,
    control,
    errors,
    handleSubmit: handleSubmit(handleSubmitForm), // ✅ Correto
    reset,
  }
}
