import { string } from 'zod'
import { InputFromDetailsCheckout } from './input'
interface InputBillingDetailsProps {
  name: { label: string }
  companyName: { label: string }
  Street_Address: { label: string }
  Apartment: { label: string }
  City: { label: string }
  PhoneNumber: { label: string }
  email: { label: string }
}

const inputs: InputBillingDetailsProps = {
  name: { label: 'First name' },
  companyName: { label: 'Company name' },
  Street_Address: { label: 'Street Address(optional)' },
  Apartment: { label: 'Apartment, suite, unit etc.' },
  City: { label: 'City' },
  PhoneNumber: { label: 'Phone number' },
  email: { label: 'Email' },
}

export function InputsDetails() {
  return (
    <div className="flex flex-col gap-5">
      {Object.entries(inputs).map(([key, { label, ...rest }]) => (
        <InputFromDetailsCheckout key={key} label={label} {...rest} />
      ))}
    </div>
  )
}
