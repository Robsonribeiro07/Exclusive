import { IconsAbout } from './icons'

export function FeatureCard() {
  return (
    <div className="flex items-center justify-between gap-3 mt-[16rem] w-full max-w-[58.9375rem] mx-auto">
      <IconsAbout
        icon="Truck"
        title="FREE AND FAST DELIVERY"
        description="Free delivery for all orders over $140"
      />
      <IconsAbout
        icon="Headset"
        title="24/7 CUSTOMER SERVICE"
        description="Friendly 24/7 customer support"
      />
      <IconsAbout
        icon="ShieldCheck"
        title="MONEY BACK GUARANTEE"
        description="We reurn money within 30 days"
      />
    </div>
  )
}
