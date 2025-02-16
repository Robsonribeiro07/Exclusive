import api from "@/lib/axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

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
        const response = await api.post("/auth/new-user", {
          email: user.email,
          name: user.name,
          password: 293891312, // Corrigido erro de digitação
        });

        if (response.status === 200) {
          console.log("Success");
        }
       
        if(response.data.token) {
            (await cookies()).set("token", response.data.token, {
                httpOnly: true,
                path: "/",
                maxAge: 60 * 60 * 24 * 7, // 7 dias
            })
            
        }
        return true;
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        return false;
      }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },
  
};

// 🚀 Correção: Exportando `GET` e `POST` corretamente
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
