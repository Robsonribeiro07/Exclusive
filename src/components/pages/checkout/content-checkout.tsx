'use client'
import { Product } from '@/api/products/get-products'
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs'
import { ContentCheckoutBank } from '@/components/pages/checkout/bank-details/content'
import { ContentDetailsCheckout } from '@/components/pages/checkout/biiling-details/content'
import { UseHookFormDetailsCheckout } from '@/hooks/checkout/use-hook-form'
import { useGetDetails } from '@/hooks/user/use-get-details'
import { useEffect } from 'react'
export default function ContentCheckoutDetails({
  products,
}: {
  products: Product[]
}) {
  const { data } = useGetDetails()

  const { handleSubmit, inputs, reset, control, errors } =
    UseHookFormDetailsCheckout()
  useEffect(() => {
    reset({
      firstName: data?.user.name,
      companyName: data?.user.NameStore,
      city: data?.user.cidade,
      phoneNumber: data?.user.tel.toString(),
      email: data?.user.email,
      apartment: data?.user.endereco,
      streetAddress: data?.user.endereco,
    })
  }, [data, reset])
  console.log(data)
  return (
    <div className="w-full max-w-[1170px] mx-auto min-h-screen  py-[2rem]">
      <Breadcrumbs />

      <h1 className="text-2xl font-medium mb-5  mt-[3.75rem]">
        Billing Details
        {errors.typePayment && <p>{errors.typePayment.message}</p>}
      </h1>

      <form
        className="w-full h-full grid grid-cols-[40%_1fr]"
        onSubmit={handleSubmit}
      >
        <ContentDetailsCheckout inputs={inputs} disabled={!data} />
        <ContentCheckoutBank control={control} products={products} />
      </form>
    </div>
  )
}
