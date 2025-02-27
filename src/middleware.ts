import { NextRequest, NextResponse } from 'next/server'
import { decodeToken } from './functions/middleware/decode-token'
import next from 'next'

const routerFromRegister = [
  '/auth/sign-in',
  '/auth/sign-in/step1_Profile',
  '/auth/sign-in/step2_andress',
  '/auth/sign-in/step3_storeInformation',
]

const routerPrivate = ['/home/cart']

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request
  const isLoggedIn = request.cookies.get('token')
  const redirect = nextUrl.clone()

  const isLoginRoute = routerFromRegister.includes(nextUrl.pathname)

  // const isRouterPrivate = routerPrivate.includes(nextUrl.pathname)

  // // if (isRouterPrivate && !isLoggedIn) {
  // //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/home`)
  // // }
  const PermissitionRedirectUrl = request.cookies.get('callbackUrl')

  // Se o usuário não estiver logado e não estiver na tel
  //a de login, redireciona para login
  // if (!isLoggedIn && nextUrl.pathname == '/auth/sign-in') {
  //   redirect.pathname = '/auth/sign-in'
  //   return NextResponse.redirect(redirect)
  // }

  // Se o usuário está logado e está em uma rota de s, verificar progresso
  if (isLoggedIn && isLoginRoute) {
    const decodedToken: {
      email: string
      name: string
      progress: string
      progressCompletion: string
    } = await decodeToken(isLoggedIn.value)

    if (nextUrl.pathname.includes(decodedToken.progress)) {
      return NextResponse.next()
    }

    if (
      !PermissitionRedirectUrl ||
      (PermissitionRedirectUrl?.value === 'false' &&
        !request.nextUrl.pathname.includes('/step'))
    ) {
      if (decodedToken.progress === 'step1_Profile') {
        if (nextUrl.pathname !== '/auth/sign-in/step1_Profile') {
          redirect.pathname = '/auth/sign-in/step1_Profile'
          return NextResponse.redirect(redirect)
        }
      } else if (decodedToken.progress === 'step2_andress') {
        if (nextUrl.pathname !== '/auth/sign-in/step2_andress') {
          redirect.pathname = '/auth/sign-in/step2_andress'
          return NextResponse.redirect(redirect)
        }
      } else if (decodedToken.progress === 'step3_storeInformation') {
        if (nextUrl.pathname !== '/auth/sign-in/step3_storeInformation') {
          redirect.pathname = '/auth/sign-in/step3_storeInformation'
          return NextResponse.redirect(redirect)
        } else if (decodedToken.progressCompletion === 'true') {
          redirect.pathname = '/'
          return NextResponse.redirect(redirect)
        }
      }
    }
  }

  const permision =
    PermissitionRedirectUrl?.value === 'true' &&
    !request.nextUrl.pathname.includes('/auth/sign-in')

  if (permision) {
    const response = NextResponse.next()
    if (!response) return NextResponse.next()
    response.cookies.set('callbackUrl', 'false', {
      path: '/',
    })
    return response
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
