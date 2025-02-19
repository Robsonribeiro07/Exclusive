import { Send, SendHorizonal } from 'lucide-react'

export function ContentExclusive() {
  return (
    <div className="flex flex-col gap-4 items-start ">
      <h1 className="text-[1.5rem] font-bold text-textColor">Exclusive</h1>
      <h2 className="text-[1.2rem] font-medium text-textColor">Subscribe</h2>

      <p className="text-[1rem] font-regular text-textColor">
        Get 10% off your first order
      </p>

      <div className="flex rounded border border-textColor  items-center w-[80%]">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-transparent border-none p-3 w-[90%] placeholder:font-regular text-textColor"
        />
        <SendHorizonal className="text-textColor w-10" />
      </div>
    </div>
  )
}
