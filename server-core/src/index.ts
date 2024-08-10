import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { mainRouter } from './routes';

const app = new Hono();

app.use(logger());

app.route('', mainRouter);

export default {
	port: 8000,
	fetch: app.fetch,
};
