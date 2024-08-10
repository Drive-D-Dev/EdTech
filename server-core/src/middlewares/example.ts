import { Context, Next } from 'hono';
import { createMiddleware } from 'hono/factory';

const exampleMiddleware = createMiddleware(
	async (c: Context, next: Next) => {
		console.log('Start of middleware');
		await next();
		console.log('End of middleware');
	}
);

export { exampleMiddleware };
