import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { mainRouter } from './routes';
import { PrismaClient } from '../prisma/client';
import { errorHandler } from './middlewares/errorHandler';

const app = new Hono();
export const prisma = new PrismaClient();

app.use(errorHandler);
app.use(logger());
app.use(
	'*',
	cors({
		origin: ['https://mytestmate.org', 'https://www.mytestmate.org', 'http://localhost:3000'],
		credentials: true,
	})
);

app.route('/', mainRouter);

export default {
	port: 8000,
	fetch: app.fetch,
};
