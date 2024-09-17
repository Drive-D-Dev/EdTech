import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import SideNav from "@/components/sidenav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[#E2E8EC]",
          fontSans.variable
        )}
      >
        <div
          vaul-drawer-wrapper=""
          className="flex flex-row max-w-screen-xl mx-auto px-6 py-4 h-screen gap-4"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SideNav />
            <main className="bg-white w-full rounded-lg min-h-full p-4">
              {children}
            </main>
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
