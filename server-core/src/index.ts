import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { mainRouter } from './routes';
import { PrismaClient } from '../prisma/client';

const app = new Hono();
export const prisma = new PrismaClient();

app.use(logger());
app.use(
	'*',
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

app.route('', mainRouter);

export default {
	port: 8000,
	fetch: app.fetch,
};
