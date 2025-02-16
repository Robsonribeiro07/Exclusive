"use client"
import { PersonalInformation } from "@/components/signup/signup-steps/step-1/step-1";
import { Address } from "@/components/signup/signup-steps/step-2/step-2";
import { StoreInformation } from "@/components/signup/signup-steps/step-3/step-3";
import { StepProgressContent } from "@/components/signup/signup-steps/step-progress-content/step-progress-content";
import { useParams } from "next/navigation";

function Page() {

    const {step} = useParams()

    


    const SIGNUP_STEPS = {
        step1_Profile: <PersonalInformation/>,
        step2_andress: <Address/>,
        step3_storeInformation: <StoreInformation/>,
     } as const
 
 
     return (
 
         <div className="flex justify-center flex-col items-center mb-10 py-10">
            <StepProgressContent/>

             {SIGNUP_STEPS[step as keyof typeof SIGNUP_STEPS]}
         </div>
 
 
 
         
     )

   
}

export default Page 