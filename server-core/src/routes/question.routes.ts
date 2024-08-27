import { Hono } from 'hono';
import { getTopQuestionController } from '../controllers/question/getTopQuestion';

const questionRouter = new Hono();

questionRouter.get('/acc/:amount', getTopQuestionController);

export { questionRouter };
