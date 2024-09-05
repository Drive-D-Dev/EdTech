import { Hono } from 'hono';
import { getQuestionByAccController } from '../controllers/question/getQuestionByAcc';

const questionRouter = new Hono();

questionRouter.get('/acc', getQuestionByAccController);
questionRouter.get('/acc/:amount', getQuestionByAccController);

export { questionRouter };
