import { Hono } from 'hono';
import { getQuestionByAccController } from '../controllers/question/getQuestionByAcc';
import { getQuestionFromStudySetController } from '../controllers/question/getQuestionFromStudySet';
import { getAnswerController } from '../controllers/question/getAnswer';

const questionRouter = new Hono();

questionRouter.get('/acc', getQuestionByAccController);
questionRouter.get('/acc/:amount', getQuestionByAccController);
questionRouter.get('/fromSet/:setId', getQuestionFromStudySetController);
questionRouter.get('/answer/:setId', getAnswerController);

export { questionRouter };
