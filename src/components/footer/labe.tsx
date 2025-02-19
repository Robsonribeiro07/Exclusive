interface LabelProps {
  label: string
  width?: string
}
export function Label({ label, width }: LabelProps) {
  return (
    <p
      className={`text-[1rem] font-regular text-textColor `}
      style={{ width: width + 'px' }}
    >
      {label}
    </p>
  )
}
