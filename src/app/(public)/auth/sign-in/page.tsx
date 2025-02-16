
"use client"
import Image from 'next/image'
import BakgroundImage from '../../../../../public/image-logim.png'
import { useSignUpState } from '@/stores/use-state-from-signup'
import { SignIn } from '@/components/signup/sign-in'
import { SignUpPage } from '@/components/signup/sign-up'



function SignUp() {
    const {isReadyAccount } = useSignUpState()

    

    return (
        
        <div className='grid grid-cols-2 w-full mt-5 '>
            <Image src={BakgroundImage} alt='background'  />

            
            <div className='flex items-center justify-center'>
                {isReadyAccount ? <SignIn/> : <SignUpPage/>}
            </div>
            
            
        </div>
    )
}

export default SignUp