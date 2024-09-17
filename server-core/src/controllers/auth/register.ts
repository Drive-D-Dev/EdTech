import { Context } from 'hono';
import { isEmailExist } from '../../services/auth/getUser';
import { createUser } from '../../services/auth/createUser';

const registerController = async (c: Context) => {
	try {
		const { email, password, name } = await c.req.json();
		if (!email || !password || !name) throw 'Email, password, and name are required';
		if (await isEmailExist(email)) throw 'Email already exists';
		await createUser(email, password, name);
		return c.json(
			{
				success: true,
				data: null,
				message: 'User created',
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

export { registerController };
