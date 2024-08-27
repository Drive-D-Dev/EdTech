import { Hono } from 'hono';
import { exampleRouter } from './example.routes';
import { questionRouter } from './question.routes';

const mainRouter = new Hono();

mainRouter.route('/example', exampleRouter);
mainRouter.route('/question', questionRouter);

export { mainRouter };
