import { Card } from './card'
import { HeaderFeatured } from './header'

import {
  Playstation,
  Women,
  Speaker,
  Gucci,
} from '../../../../../../public/temp/index'

export function FeatureContent() {
  return (
    <div className="min-h-fit w-full px-4">
      <HeaderFeatured />

      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 mt-10">
        <div className="flex items-end bg-black pb-3 w-full">
          <Card
            className="bg-black flex flex-col relative h-[80%] max-sm:h-auto max-sm:aspect-[4/4]"
            left="left-6 sm:left-10"
            bottom="bottom-3 sm:bottom-[2.2rem]"
            image={Playstation}
            objectFit="contain"
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
          />
        </div>

        {/* Segunda Coluna - Outros Produtos */}
        <div className="flex flex-col gap-6 md:grid md:grid-rows-2">
          {/* Item 1 - Women's Collection */}
          <div className="min-h-[200px] md:min-h-[284px]">
            <Card
              className="bg-black flex flex-col justify-end relative  w-full max-sm:aspect-[4/3] "
              image={Women}
              left="left-4 sm:left-6"
              bottom="bottom-3 sm:bottom-5"
              title="Women’s Collections"
              description="Featured woman collections that give you another vibe."
            />
          </div>

          {/* Itens 2 e 3 - Speaker & Perfume */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            <div className="flex items-center bg-[#1E1E1E] p-4 rounded-lg">
              <Card
                className="bg-[#1E1E1E] flex flex-col justify-end relative w-full max-sm:aspect-[4/3] h-[70%] max-sm:h-auto"
                image={Speaker}
                objectFit="contain"
                left="left-4 sm:left-6"
                bottom="bottom-2 sm:bottom-[-0.5rem]"
                title="Speaker"
                description="Amazon wireless speakers"
              />
            </div>

            <div className="flex items-center bg-[#1E1E1E] p-4 rounded-lg">
              <Card
                className="bg-[#1E1E1E] flex flex-col justify-end relative  w-full max-sm:aspect-[4/3] h-[70%] max-sm:h-auto"
                image={Gucci}
                objectFit="contain"
                left="left-4 sm:left-6"
                bottom="bottom-2 sm:bottom-[-0.5rem]"
                title="Perfume"
                description="GUCCI INTENSE OUD EDP"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
