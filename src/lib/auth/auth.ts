import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import api from '@/lib/axios/axios'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_SECRET_GOOGLE!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const response = await api.post('/auth/new-user', {
          email: user.email,
          name: user.name,
          password: 293891312,
        })

        if (response.status === 200) {
        }

        return true
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)
        return false
      }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      }
    },
  },
}
