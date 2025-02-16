"use client"
import { UseCountdown } from "@/hooks/use-conntwdown"
import { CountdownStep } from "./countdown-step"

export function Countdowm() {

    const {timeLeft} = UseCountdown({date: "2025-02-17"})

     
    return (
        <div className="flex gap-[1.1rem]">
            {Object.entries(timeLeft).map(([keyframe, {value, title}]) => {
                return (
                    <CountdownStep 
                        key={keyframe}
                        title={title}
                        value={value}
                    />
                    
                )
            })  }
        </div>
    )
}