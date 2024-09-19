import { Context, Next } from 'hono';
import { createMiddleware } from 'hono/factory';

const errorHandler = createMiddleware(async (c: Context, next: Next) => {
	try {
		await next();
	} catch (error) {
		console.error(error);
		c.json(
			{
				success: false,
				message: 'Internal Server Error',
				data: null,
			},
			500
		);
	}
});

export { errorHandler };
