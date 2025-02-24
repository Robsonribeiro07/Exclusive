import cookies from 'js-cookie'

export function useIsLoggedIn() {
  return !!cookies.get('token') // Retorna `true` se o token existir, caso contrário `false`
}
