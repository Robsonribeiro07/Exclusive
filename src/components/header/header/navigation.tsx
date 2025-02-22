'use client'
import { useEffect, useState } from 'react'
import { Links } from './links'
import { decodeToken } from '@/functions/middleware/decode-token'
import Cookies from 'js-cookie'
export function Navigation() {
  const cookiesJwt = Cookies.get('token')

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    async function GetUserTokenDetails() {
      if (!cookiesJwt) return
      const tokenDetails = await decodeToken(cookiesJwt)

      console.log(tokenDetails)

      if (tokenDetails?.progressCompletion === 'true') {
        setIsLoggedIn(true)
      }
    }

    GetUserTokenDetails()
  }, [cookiesJwt])

  const TypeNavigation = isLoggedIn ? 'a' : 'Link'
  return (
    <div className="flex items-center gap-12">
      <Links href="/" name="Home" />
      <Links href="/c" name="Contact" />
      <Links href="/about" name="About" />
      <Links
        href="/auth/sign-in"
        name="Sign Up"
        typeNavigation={TypeNavigation}
      />
    </div>
  )
}
