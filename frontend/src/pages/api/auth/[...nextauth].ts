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
					throw new Error('Invalid credentials');
				}

				const user = await response.json();

				if (user) {
					// Return the user object with the required fields, including `id` and other properties.
					return {
						id: user.id, // Ensure your backend returns an `id` field
						name: user.name,
						email: user.email, // If available
						// Add other user fields as necessary
					};
				}

				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	pages: {
		signIn: '/auth/signin',
	},
};

export default NextAuth(authOptions);
