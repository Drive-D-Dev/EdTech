import { Context } from 'hono';
import { getSignedCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';

const verifyController = async (c: Context) => {
	const COOKIE_SECRET = Bun.env.COOKIE_SECRET;
	const JWT_SECRET = Bun.env.JWT_SECRET;
	if (!COOKIE_SECRET) throw 'COOKIE_SECRET is not defined';
	if (!JWT_SECRET) throw 'JWT_SECRET is not defined';
	const token = await getSignedCookie(c, COOKIE_SECRET, 'userToken');
	if (!token) throw 'Token not found';
	const decoded = await verify(token, JWT_SECRET);
	return c.json(
		{
			success: true,
			data: decoded,
			message: 'Token verified',
		},
		200
	);
};

export { verifyController };
