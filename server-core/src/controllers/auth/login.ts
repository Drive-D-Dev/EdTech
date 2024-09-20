import { Context } from 'hono';
import { sign } from 'hono/jwt';
import { setCookie } from 'hono/cookie';
import { getUserByEmail } from '../../services/auth/getUser';

const loginController = async (c: Context) => {
	const { email, password } = await c.req.json();
	if (!email || !password) throw 'Email and password are required';

	const userData = await getUserByEmail(email);
	if (!userData) {
		return c.json(
			{
				success: false,
				data: null,
				message: 'User not found',
			},
			400
		);
	}
	if (!Bun.password.verifySync(password, userData.password)) {
		return c.json(
			{
				success: false,
				data: null,
				message: 'Invalid password',
			},
			400
		);
	}

	const SECRET = Bun.env.JWT_SECRET;
	if (!SECRET) throw 'JWT_SECRET is not defined';

	const token = await sign({ id: userData.id, email: userData.email }, SECRET);

	setCookie(c, 'userToken', token, {
		httpOnly: true,
		secure: true,
		sameSite: 'Lax',
		maxAge: 60 * 60 * 24 * 7,
		path: '/',
	});

	return c.json(
		{
			success: true,
			data: {
				token,
			},
			message: 'Login successful',
		},
		200
	);
};

export { loginController };
