import gaming from './gaming.svg'
import headphones from './headphones.svg'
import laptop from './computer.svg'
import camera from './camera.svg'
import phone from './phone.svg'
import smartwatch from './smartwatch.svg'
import { ComponentType, SVGProps } from 'react'
const typedGaming = gaming as ComponentType<SVGProps<SVGSVGElement>>
const typedHeadphones = headphones as ComponentType<SVGProps<SVGSVGElement>>
const typedLaptop = laptop as ComponentType<SVGProps<SVGSVGElement>>
const typedCamera = camera as ComponentType<SVGProps<SVGSVGElement>>
const typedPhone = phone as ComponentType<SVGProps<SVGSVGElement>>
const typedSmartwatch = smartwatch as ComponentType<SVGProps<SVGSVGElement>>

export {
  typedGaming as gaming,
  typedHeadphones as headphones,
  typedLaptop as laptop,
  typedCamera as camera,
  typedPhone as phone,
  typedSmartwatch as smartwatch,
}
export type IconName =
  | 'gaming'
  | 'headphones'
  | 'laptop'
  | 'camera'
  | 'phone'
  | 'smartwatch'
