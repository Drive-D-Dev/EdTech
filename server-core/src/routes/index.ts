import { Hono } from 'hono';
import { exampleRouter } from './example.routes';

const mainRouter = new Hono();

mainRouter.route('/example', exampleRouter);

export { mainRouter };
