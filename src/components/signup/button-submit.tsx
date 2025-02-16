interface ButtonSubmitProps {
    disabled?: boolean
}
export function ButtonSubmit({disabled}: ButtonSubmitProps) {
    return (
        <button className="bg-buttonRed rounded-[4px] text-gray100 w-full h-[3.5rem] disabled:opacity-50" disabled={disabled}>
            Create Account
        </button>
    )
}