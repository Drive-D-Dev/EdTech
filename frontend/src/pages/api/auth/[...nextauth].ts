// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import { BACKEND_URL } from "@/constant/global"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password")
        }
        const email = credentials.email
        const password = credentials.password

        const response = await fetch(BACKEND_URL+'/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
          const json = await response.json()
          throw new Error(json.message)       
       }

        const user = await response.json()
  
        return { name: user.name }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/signin"
  }
}

export default NextAuth(authOptions)