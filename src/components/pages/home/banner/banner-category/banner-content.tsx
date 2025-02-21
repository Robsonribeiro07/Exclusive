'use client'
import { UseCountdown } from '@/hooks/use-conntwdown'
import { ImageBanner } from '../image-banner'
import banner from '/public/product/image.png'
import { Countdowm } from './countdowm'
import { Button } from '@/components/ui/button'
export function BannerContent() {
  const { timeLeft } = UseCountdown({ date: '2025-03-01' })
  return (
    <div className="w-full h-fit bg-black flex justify-around px-[3.5rem] mt-[6rem]  flex-col sm:flex-row">
      <div className="py-[3.5rem]">
        <p className="text-[#00FF66] text-[1rem]">Categories</p>
        <p className="lg:text-3xl text-xl font-semibold text-[#FAFAFA]">
          Enhance Your <br /> Music Experience
        </p>

        <div className="flex gap-[1.1rem] select-none mt-[2.9rem]">
          {Object.entries(timeLeft).map(([key, { value, title }]) => {
            return <Countdowm key={key} title={title} value={value} />
          })}
        </div>

        <Button className="w-[10.6875rem] h-[3.2rem]  text-white bg-[#00FF66] rounded mt-12 hover:bg-[#00FF66]/80">
          Buy now
        </Button>
      </div>

      <ImageBanner image={banner} width={300} height={300} alt="banner " />
    </div>
  )
}
