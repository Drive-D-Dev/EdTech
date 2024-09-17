import { Context } from 'hono';
import { getUserByEmail } from '../../services/auth/getUser';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { setSignedCookie } from 'hono/cookie';

const loginController = async (c: Context) => {
	try {
		const { email, password } = await c.req.json();
		if (!email || !password) throw 'Email and password are required';
		const userData = await getUserByEmail(email);
		if (!userData) throw 'User not found';
		if (!(await compare(password, userData.password))) throw 'Password is incorrect';
		const SECRET = Bun.env.JWT_SECRET;
		if (!SECRET) throw 'JWT_SECRET is not defined';
		const token = sign({ email: userData.email }, SECRET, { expiresIn: '1m' });
		const ENV = Bun.env.ENV;
		const COOKIE_SECRET = Bun.env.COOKIE_SECRET;
		if (!ENV) throw 'ENV is not defined';
		if (!COOKIE_SECRET) throw 'COOKIE_SECRET is not defined';
		await setSignedCookie(c, 'userToken', token, COOKIE_SECRET, {
			httpOnly: true,
			path: '/',
			sameSite: ENV === 'DEV' ? 'lax' : 'none',
			secure: ENV !== 'DEV',
			maxAge: 60 * 60 * 24 * 7,
		});
		return c.json(
			{
				success: true,
				data: null,
				message: 'Login successful',
			},
			200
		);
	} catch (e) {
		return c.json(
			{
				success: false,
				message: e,
				data: null,
			},
			400
		);
	}
};

export { loginController };
