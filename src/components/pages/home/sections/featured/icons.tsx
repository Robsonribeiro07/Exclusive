import { Headset, ShieldCheck, Truck } from 'lucide-react'

const icons = {
  ShieldCheck,
  Headset,
  Truck,
} as const
interface IconsPros {
  icon: keyof typeof icons
  title: string
  description: string
}
export function IconsAbout({ icon, title, description }: IconsPros) {
  const IconsComponent = icons[icon]
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[5rem] h-[5rem] rounded-full bg-[#959595] flex items-center justify-center">
        <div className="w-[4rem] h-[4rem] bg-black items-center flex justify-center rounded-full">
          <IconsComponent
            className="bg-black rounded-full text-white"
            size={35}
          />
        </div>
      </div>
      <p className="text-[1.2rem] font-semibold">{title}</p>
      <p className="text-xs font-regular">{description}</p>
    </div>
  )
}
