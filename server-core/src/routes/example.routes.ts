import { Hono } from 'hono';
import { GetHelloController } from '../controllers/example/getHello';
import { exampleMiddleware } from '../middlewares/example';

const exampleRouter = new Hono();

exampleRouter.use(exampleMiddleware);

exampleRouter.get('/hello', GetHelloController);

export { exampleRouter };
