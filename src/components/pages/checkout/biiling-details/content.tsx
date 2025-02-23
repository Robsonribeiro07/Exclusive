import { CheckboxWithText } from './checkbox-with-text'
import { InputFromDetailsCheckout } from './input'
import { InputBillingDetailsProps } from '@/hooks/checkout/use-hook-form'
export function ContentDetailsCheckout({
  inputs,
  disabled,
}: {
  inputs: InputBillingDetailsProps
  disabled: boolean
}) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {Object.entries(inputs).map(([key, { label, register }]) => (
          <InputFromDetailsCheckout
            key={key}
            label={label}
            register={register}
            disabled={disabled}
          />
        ))}
      </div>

      <CheckboxWithText />
      <button>Submit</button>
    </div>
  )
}
