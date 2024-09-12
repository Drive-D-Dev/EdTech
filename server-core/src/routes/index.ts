import { Hono } from 'hono';
import { exampleRouter } from './example.routes';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';

const mainRouter = new Hono();

mainRouter.route('/example', exampleRouter);
mainRouter.route('/question', questionRouter);
mainRouter.route('/set', studySetRouter);

export { mainRouter };
