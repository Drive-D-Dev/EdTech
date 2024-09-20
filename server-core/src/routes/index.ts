import { Hono } from 'hono';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';
import { AIserviceRouter } from './AIservice.routes';
import { submitRouter } from './submit.routes';
import { verifyMiddleware } from '../middlewares/verify';

const mainRouter = new Hono({ strict: false });

mainRouter.route('/auth', authRouter);
mainRouter.route('/ai', AIserviceRouter);
mainRouter.route('/set', studySetRouter);

mainRouter.use(verifyMiddleware);
mainRouter.route('/question', questionRouter);
mainRouter.route('/submit', submitRouter);

export { mainRouter };
