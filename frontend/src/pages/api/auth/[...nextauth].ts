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
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const user = await fetch(BACKEND_URL+'/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        })

        if (!user) {
          return null
        }
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordValid) {
          return null
        }
        return { id: user.id, name: user.name, username: user.username }
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