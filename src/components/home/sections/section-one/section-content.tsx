import { NavigationContent } from '../side-navigation/navigation-content'

import { CarouselImage } from './carousel-image'

export function SectionContent() {
  return (
    <div className="w-full h-full max-h-[24.5rem] lg:grid lg:grid-cols-[15.625rem_1fr] text-black flex flex-col   ">
      <NavigationContent />

      <CarouselImage />
    </div>
  )
}
