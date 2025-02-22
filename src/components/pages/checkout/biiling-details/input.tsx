interface InputFromDetailsCheckoutProps {
  label: string
}
export function InputFromDetailsCheckout({
  label,
  ...rest
}: InputFromDetailsCheckoutProps) {
  return (
    <div>
      <p className="font-regular text-sm text-black opacity-60">{label}</p>
      <input
        type="text"
        className="w-full h-[3rem] bg-secondary mt-2"
        {...rest}
      />
    </div>
  )
}
