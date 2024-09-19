import { Context } from 'hono';
import { isEmailExist } from '../../services/auth/getUser';
import { createUser } from '../../services/auth/createUser';

const registerController = async (c: Context) => {
	const { email, password, name } = await c.req.json();
	if (!email || !password || !name) throw 'Email, password, and name are required';
	if (await isEmailExist(email)) {
		return c.json(
			{
				success: false,
				data: null,
				message: 'Email already exist',
			},
			400
		);
	}
	await createUser(email, password, name);
	return c.json(
		{
			success: true,
			data: null,
			message: 'User created',
		},
		200
	);
};

export { registerController };
