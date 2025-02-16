import Image from 'next/image'
import GoogleSvg from '../../../public/google.svg'

import {signIn} from 'next-auth/react'
export function ButtonSignWithGoogle() {
    return (
        <button className="bg-transparent rounded-[4px] text-gray100 w-full h-[3.5rem]" type='button' onClick={() => signIn('google')}>
            <Image src={GoogleSvg} alt="Google" />
        </button>
    )
}