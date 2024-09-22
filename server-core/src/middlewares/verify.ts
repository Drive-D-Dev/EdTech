import { Context, Next } from 'hono';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';

const verifyMiddleware = async (c: Context, next: Next) => {
	const userToken = getCookie(c, 'userToken');

	if (!userToken) {
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

	const verified = await verify(userToken, JWT_SECRET);
	c.set('userId', verified.id);
	await next();
};

export { verifyMiddleware };
