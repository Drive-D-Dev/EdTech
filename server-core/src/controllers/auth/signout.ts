import { Context } from 'hono';
import { deleteCookie } from 'hono/cookie';

const signoutController = async (c: Context) => {
	deleteCookie(c, 'userToken');
	return c.json({
		success: true,
		data: null,
		message: 'Signout successful',
	});
};

export { signoutController };
