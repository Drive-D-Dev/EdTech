import { Hono } from 'hono';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';
import { cors } from 'hono/cors';
import { AIserviceRouter } from './AIservice.routes';
import { submitRouter } from './submit.routes';
import { verifyMiddleware } from '../middlewares/verify';
import { errorHandler } from '../middlewares/errorHandler';

const mainRouter = new Hono({ strict: false });

mainRouter.use(
	'*',
	cors({
		origin: ['https://mytestmate.org', 'https://www.mytestmate.org', 'http://localhost:3000'],
		credentials: true,
		allowMethods: ['GET', 'POST', 'OPTIONS'],
		allowHeaders: ['Content-Type'],
	})
);

mainRouter.use(errorHandler);

mainRouter.route('/auth', authRouter);
mainRouter.route('/ai', AIserviceRouter);
mainRouter.route('/set', studySetRouter);

mainRouter.use(verifyMiddleware);
mainRouter.route('/question', questionRouter);
mainRouter.route('/submit', submitRouter);

export { mainRouter };
