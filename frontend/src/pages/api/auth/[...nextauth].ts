import NextAuth, { NextAuthOptions, DefaultSession, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginAPI } from '@/api/login';

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

				const response = await loginAPI(email, password);

				if (!response.success) {
					throw new Error('Invalid credentials');
				}

				if (response.success) {
					return {
						id: '1',
						email: email,
						name: email,
						token: response.data.token,
					};
				}

				return null;
			},
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // Update the JWT token every 24 hours
	},
	pages: {
		signIn: '/auth/signin',
	},
};

export default NextAuth(authOptions);
