import { Context, Next } from 'hono';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import { decode } from 'next-auth/jwt';

const verifyMiddleware = async (c: Context, next: Next) => {
	const token = getCookie(c, 'next-auth.session-token');
	if (!token) {
		return c.json(
			{
				success: false,
				data: null,
				message: 'User Token not found',
			},
			400
		);
	}
	const JWT_SECRET = Bun.env.JWT_SECRET ?? '';

	const nextDecode = await decode({ token, secret: JWT_SECRET });

	const accessToken = (nextDecode as { accessToken: string }).accessToken;
	const verified = await verify(accessToken, JWT_SECRET);
	c.set('userId', verified.id);
	await next();
};

export { verifyMiddleware };
