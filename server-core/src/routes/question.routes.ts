import { Hono } from 'hono';
import { getQuestionFromStudySetController } from '../controllers/question/getQuestionFromStudySet';
import { getAnswerController } from '../controllers/question/getAnswer';

const questionRouter = new Hono();

questionRouter.get('/fromSet/:setId', getQuestionFromStudySetController);
questionRouter.get('/answer/:setId', getAnswerController);

export { questionRouter };
