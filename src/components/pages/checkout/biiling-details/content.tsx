import { InputsDetails } from './inputs-details'

export function ContentDetailsCheckout() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl font-medium mb-5">Billing Details</h1>
      <InputsDetails />
    </div>
  )
}
