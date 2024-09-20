import { Context } from 'hono';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import { getUserByEmail } from '../../services/auth/getUser';

const verifyController = async (c: Context) => {
	const JWT_SECRET = Bun.env.JWT_SECRET;
	if (!JWT_SECRET) throw 'JWT_SECRET is not defined';
	const token = getCookie(c, 'userToken');
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
	const decoded = await verify(token, JWT_SECRET);
	const { email, id } = decoded as { email: string; id: number };
	const userData = await getUserByEmail(email);
	if (!userData || userData.id !== id) {
		return c.json(
			{
				success: false,
				data: null,
				message: 'Invalid token',
			},
			400
		);
	}
	return c.json(
		{
			success: true,
			data: {
				id: userData.id,
				email: userData.email,
				name: userData.name,
			},
			message: 'Token verified',
		},
		200
	);
};

export { verifyController };
