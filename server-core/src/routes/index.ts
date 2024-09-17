import { Hono } from 'hono';
import { exampleRouter } from './example.routes';
import { questionRouter } from './question.routes';
import { studySetRouter } from './studySet.routes';
import { authRouter } from './auth.routes';
import { cors } from 'hono/cors';

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

mainRouter.route('/example', exampleRouter);
mainRouter.route('/question', questionRouter);
mainRouter.route('/set', studySetRouter);

export { mainRouter };
