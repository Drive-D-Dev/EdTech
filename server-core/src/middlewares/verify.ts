import { Context, Next } from 'hono';
import { createMiddleware } from 'hono/factory';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import { decode, JWT } from 'next-auth/jwt';

const verifyMiddleware = createMiddleware<{ Variables: { userId: number } }>(
	async (c: Context, next: Next) => {
		try {
			const token = getCookie(c, 'next-auth.session-token');
			if (!token) throw 'Token not found';
			const JWT_SECRET = Bun.env.JWT_SECRET ?? '';

			const nextDecode = await decode({ token, secret: JWT_SECRET });

			const accessToken = (nextDecode as { accessToken: string }).accessToken;
			const verified = await verify(accessToken, JWT_SECRET);
			c.set('userId', verified.id);
			await next();
		} catch (e) {
			return c.json({
				success: false,
				message: e,
				data: null,
			});
		}
	}
);

export { verifyMiddleware };
