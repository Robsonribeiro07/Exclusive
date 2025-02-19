interface CountdownStepProps {
  title: string
  value: number
  IsEnd?: boolean
}

export function CountdownStep({ title, value, IsEnd }: CountdownStepProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-black">{title}</p>

      <div className="flex items-center gap-2 justify-center">
        <p className="text-2xl font-bold">
          {value.toString().padStart(2, '0')}
        </p>

        {/* Adicionando os pontos com mais clareza */}
        <div className="flex flex-col items-center justify-center">
          {!IsEnd && <p className="text-[#E07575] text-2xl">:</p>}
        </div>
      </div>
    </div>
  )
}
