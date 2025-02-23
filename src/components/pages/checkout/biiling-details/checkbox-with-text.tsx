'use client'

import { Checkbox } from '@/components/ui/checkbox'

export function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2 items-center ">
      <Checkbox
        id="terms1"
        className="data-[state=checked]:bg-redSticker"
        checked
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-regular"
        >
          Save this information for faster check-out next times
        </label>
      </div>
    </div>
  )
}
