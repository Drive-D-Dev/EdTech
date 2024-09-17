import "@/styles/globals.css";
import { Prompt as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import SideNav from "@/components/sidenav";
import { ProfileNav } from "@/components/profile-nav";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
        <div
          vaul-drawer-wrapper=""
          className="flex flex-row max-w-screen-xl mx-auto px-6 py-4 h-screen gap-2"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SideNav />
            <main className="bg-background w-full rounded-2xl min-h-full p-6 overflow-y-auto">
              <ProfileNav />
              {children}
            </main>
          </ThemeProvider>
        </div>
        <Toaster />
    </>
  );
}
