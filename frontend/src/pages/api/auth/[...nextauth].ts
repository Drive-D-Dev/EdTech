import NextAuth, { NextAuthOptions, DefaultSession, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginAPI } from '@/api/login';

declare module 'next-auth' {
	interface User extends DefaultUser {
		token?: string;
	}

	interface Session extends DefaultSession {
		accessToken?: string;
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Please enter both email and password');
				}

				const email = credentials.email;
				const password = credentials.password;

				// Call your API to authenticate
				const response = await loginAPI(email, password);

				if (!response.success) {
					throw new Error('Invalid credentials');
				}

				// Return the user object with the token
				return {
					id: '0', // You can assign a real user id here if available
					token: response.data.token,
				};
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	pages: {
		signIn: '/auth/signin', // Custom sign-in page
	},
	callbacks: {
		// Handle the JWT creation and mapping
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.token || undefined;
			}
			return token;
		},

		// Include the accessToken in the session
		async session({ session, token }) {
			session.accessToken =
				typeof token.accessToken === 'string' ? token.accessToken : undefined;
			return session;
		},
	},
};

export default NextAuth(authOptions);
