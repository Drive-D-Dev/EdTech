"use client";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {Session} from "next-auth";


export interface AuthProviderProps {
  children: React.ReactNode;
  session?: Session | null;
}

export const NextAuthProvider = ({ children, session }: AuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
