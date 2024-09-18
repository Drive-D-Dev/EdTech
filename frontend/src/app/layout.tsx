import "@/styles/globals.css";
import { Prompt as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import SideNav from "@/components/sidenav";
import { ProfileNav } from "@/components/profile-nav";
import { NextAuthProvider } from "@/components/next-provider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { getServerSession } from "next-auth";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-backdrop",
          fontSans.variable
        )}
      >
        <div
          vaul-drawer-wrapper=""
          className="flex flex-col sm:flex-row max-w-screen-xl mx-auto sm:px-6 px-2 sm:py-4 py-1 h-screen gap-4"
        >
          <NextAuthProvider session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SideNav />
              <main className="bg-background w-full rounded-2xl min-h-full p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
                <ProfileNav />
                {children}
                <Toaster />
              </main>
            </ThemeProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
