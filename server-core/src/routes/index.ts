import { Hono } from 'hono';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';
import { cors } from 'hono/cors';
import { AIserviceRouter } from './AIservice.routes';
import { submitRouter } from './submit.routes';
import { verifyMiddleware } from '../middlewares/verify';

const mainRouter = new Hono({ strict: false });

authRouter.use(
	'*',
	cors({
		origin: '*',
		credentials: true,
		allowMethods: ['GET', 'POST', 'OPTIONS'],
		allowHeaders: ['Content-Type'],
	})
);

mainRouter.route('/auth', authRouter);
mainRouter.route('/ai', AIserviceRouter);
mainRouter.route('/set', studySetRouter);

mainRouter.use(verifyMiddleware);
mainRouter.route('/question', questionRouter);
mainRouter.route('/submit', submitRouter);

export { mainRouter };
