// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { BACKEND_URL } from '@/constant/global';

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

				const response = await fetch(`${BACKEND_URL}/auth/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, password }),
				});

				if (!response.ok) {
					const json = await response.json();
					throw new Error(json.message);
				}

				const user = await response.json();
				if (user && user.id && user.name && user.email) {
					return {
						id: user.id,
						name: user.name,
						email: user.email,
					};
				}
				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
	},
	pages: {
		signIn: '/auth/signin',
	},
};

export default NextAuth(authOptions);
