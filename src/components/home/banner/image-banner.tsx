import Image, { StaticImageData } from 'next/image'
interface ImageBannerProps {
  image: string | StaticImageData
  width: number
  height: number
  alt: string
  withBlur?: boolean
}
export function ImageBanner({
  image,
  width,
  height,
  alt,
  withBlur = true,
}: ImageBannerProps) {
  return (
    <div
      className={`flex items-center justify-center relative inset-0 bg-black w-[${width}px] h-[${height}px] px-2`}
    >
      <Image src={image} alt={alt} className="z-10 object-cover" />
      {withBlur && (
        <div className="absolute w-[370px] h-[450px]   bg-[#D9D9D9] opacity-30 blur-[100px]"></div>
      )}
    </div>
  )
}
