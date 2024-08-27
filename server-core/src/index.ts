import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { mainRouter } from './routes';
import { PrismaClient } from '../prisma/client';

const app = new Hono();
export const prisma = new PrismaClient();

app.use(logger());

app.route('', mainRouter);

export default {
	port: 8000,
	fetch: app.fetch,
};
