import { Hono } from 'hono';
import { exampleRouter } from './example.routes';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';

const mainRouter = new Hono({ strict: false });

mainRouter.route('/auth', authRouter);

mainRouter.route('/example', exampleRouter);
mainRouter.route('/question', questionRouter);
mainRouter.route('/set', studySetRouter);

export { mainRouter };
