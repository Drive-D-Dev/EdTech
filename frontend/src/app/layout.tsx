'use client';
import '@/styles/globals.css';
import { Prompt as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import SideNav from '@/components/sidenav';
import { ProfileNav } from '@/components/profile-nav';
import { UserContextProvider } from '@/lib/context';
import { VerifyProvider } from '@/lib/verifyProvider';
import { GoogleTagManager } from '@next/third-parties/google';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});
interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<GoogleTagManager gtmId='G-8KVLQE9B32' />
			<body
				className={cn('min-h-screen font-sans antialiased bg-backdrop', fontSans.variable)}
			>
				<div
					vaul-drawer-wrapper=''
					className='flex flex-col sm:flex-row max-w-screen-xl mx-auto sm:px-6 px-2 sm:py-4 py-1 h-screen gap-4'
				>
					{/* <NextAuthProvider session={session}> */}
					<UserContextProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange
						>
							<SideNav />
							<main className='bg-background w-full rounded-2xl min-h-full p-4 sm:p-6 overflow-y-auto overflow-x-hidden'>
								<ProfileNav />
								<VerifyProvider>{children}</VerifyProvider>
								<Toaster />
							</main>
						</ThemeProvider>
					</UserContextProvider>
					{/* </NextAuthProvider> */}
				</div>
			</body>
		</html>
	);
}
