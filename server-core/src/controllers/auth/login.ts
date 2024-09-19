import { Context } from 'hono';
import { sign } from 'hono/jwt';
import { getUserByEmail } from '../../services/auth/getUser';

const loginController = async (c: Context) => {
	try {
		const { email, password } = await c.req.json();
		if (!email || !password) throw 'Email and password are required';

		const userData = await getUserByEmail(email);
		if (!userData) throw 'User not found';
		// if (!(await compare(password, userData.password))) throw 'Password is incorrect';
		if (!Bun.password.verifySync(password, userData.password)) throw 'Password is incorrect';

		const SECRET = Bun.env.JWT_SECRET;
		if (!SECRET) throw 'JWT_SECRET is not defined';

		const token = await sign({ id: userData.id, email: userData.email }, SECRET);

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
