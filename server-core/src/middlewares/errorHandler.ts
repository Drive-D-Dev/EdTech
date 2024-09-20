import { Context, Next } from 'hono';

const errorHandler = async (c: Context, next: Next) => {
	try {
		await next();
	} catch (e) {
		console.error(e);
		c.json(
			{
				success: false,
				message: 'Internal Server Error',
				data: null,
			},
			501
		);
	}
};

export { errorHandler };
