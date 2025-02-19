'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from '@/components/ui/carousel'
import BannerImg from '/public/image.png'
import Image from 'next/image'
import { usePlayAndPauseVideo } from './play-and-pause-video'
import { useEffect, useRef, useState } from 'react'
import { useVisibleElementInPage } from '@/hooks/use-visible-element-in-page'
import { useTabFocus } from '@/hooks/use-tab-focus'

export function CarouselImage() {
  const { setElementref } = usePlayAndPauseVideo()

  const [isMouseHover, setIsMouseHover] = useState(false)
  const NextImage = useRef<HTMLButtonElement>(null)

  const [isHeight, setIsHeight] = useState('h-[344px]')

  const isTabeFoucs = useTabFocus()

  const handleSetHeight = () => {
    setIsHeight('h-[70vh]')
  }
  const handleMouseLeaverSetHeight = () => {
    setIsHeight('h-[344px]')
  }
  const { isVisible, handleSetElementRef } = useVisibleElementInPage()

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isVisible && NextImage.current && !isMouseHover && isTabeFoucs) {
      timer = setInterval(() => {
        NextImage.current?.click()
      }, 5000)
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [isVisible, isMouseHover, isTabeFoucs])

  const carouselContent = [
    { type: 'image', src: BannerImg },
    {
      type: 'Video',
      src: 'https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome-02/xlarge_2x.mp4',
      id: 'video-1',
    },
    {
      type: 'video',
      src: 'https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge_2x.mp4',
      id: 'video-1',
    },
    { type: 'image', src: BannerImg },
  ] as const

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      ref={handleSetElementRef}
    >
      <CarouselContent
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
      >
        {carouselContent.map((item, index) =>
          item.type === 'image' ? (
            <CarouselItem key={index}>
              <Image
                src={item.src}
                alt="banner"
                className="py-[2.09375rem] h-[344px] w-full  object-cover   "
              />
            </CarouselItem>
          ) : (
            <CarouselItem key={index}>
              <video
                src={item.src}
                autoPlay
                muted
                loop
                className={`py-[2.09375rem] 
                                    h-[344px] w-full 
                                    object-cover 
                                    ${isHeight} 
                                    transition-all 
                                    duration-[2s]
                                  
                                    `}
                ref={setElementref(item.id)}
                onMouseOver={handleSetHeight}
                onMouseLeave={handleMouseLeaverSetHeight}
              />
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselNext ref={NextImage} />
    </Carousel>
  )
}
