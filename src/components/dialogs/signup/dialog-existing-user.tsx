'use client'

import Card from '@/components/uiverse/alert-existing-account'
import { useModalExistingUserNotCompletionProfile } from '@/stores/signup/modal-existing-user-not-completion-profile'
import { useRouter } from 'next/navigation'

interface DialogExistingUserProps {
  token: {
    email: string
    name: string
    progress: string
  } | null
  tookenSetCokkie: string | null
}
export function DialogExistingUser({
  token,
  tookenSetCokkie,
}: DialogExistingUserProps) {
  const { open, close } = useModalExistingUserNotCompletionProfile()

  const { push } = useRouter()

  if (!open) return null

  const handleRedirectUser = async () => {
    if (!token) return

    const { progress } = token

    if (progress) {
      document.cookie = `token=${tookenSetCokkie}; path=/`

      const baseURL = '/auth/sign-in/'

      console.log(progress)
      console.log('chegou')

      return push(baseURL + progress)
    }
  }

  return (
    <Card handleRedirectUser={handleRedirectUser} handleCloseModal={close} />
  )
}
