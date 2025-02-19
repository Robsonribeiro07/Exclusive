import { Card } from './card'
import { HeaderFeatured } from './header'

import {
  Playstation,
  Women,
  Speaker,
  Gucci,
} from '../../../../../public/temp/index'

export function FeatureContent() {
  return (
    <div className="h-[40rem]">
      <HeaderFeatured />

      <div className="h-full w-full grid grid-cols-2 gap-[2rem] mt-[2.5rem]">
        <div className=" h-full flex items-end bg-black pb-3">
          <Card
            className="bg-black flex flex-col relative h-[70%]"
            left="left-10"
            bottom="bottom-[2.2rem]"
            image={Playstation}
            objectFit="contain"
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
          />
        </div>
        <div className="grid grid-rows-2 gap-[2rem] ">
          <div className="bg-red-500 max-h-[284px]">
            <Card
              className="bg-black flex flex-col justify-end relative"
              image={Women}
              left="left-6"
              bottom="bottom-5"
              title="Women’s Collections"
              description="Featured woman collections that give you another vibe."
            />
          </div>

          <div className="grid grid-cols-2 gap-[1.6875rem] w-full h-full">
            <div className="flex items-center bg-[#1E1E1E]">
              <Card
                className="bg-[#1E1E1E] flex flex-col justify-end relative h-[70%]"
                image={Speaker}
                objectFit="contain"
                left="left-6"
                title="Speaker"
                bottom="bottom-[-1rem]"
                description="Amazon wireless speakers"
              />
            </div>
            <div className="flex items-center bg-[#1E1E1E]">
              <Card
                className="bg-[#1E1E1E] flex flex-col justify-end relative h-[70%]"
                image={Gucci}
                objectFit="contain"
                left="left-6"
                bottom="bottom-[-1rem]"
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
