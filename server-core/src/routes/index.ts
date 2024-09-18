import { Hono } from 'hono';
import { exampleRouter } from './example.routes';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';
import { cors } from 'hono/cors';
import { AIserviceRouter } from './AIservice.routes';
import { submitRouter } from './submit.routes';

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

mainRouter.route('/example', exampleRouter);
mainRouter.route('/question', questionRouter);
mainRouter.route('/set', studySetRouter);
mainRouter.route('/submit', submitRouter);

export { mainRouter };
