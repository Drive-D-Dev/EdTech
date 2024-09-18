import { Hono } from 'hono';
import { submitAnswerController } from '../controllers/submit/submitAnswer';
import { getUserAnswerController } from '../controllers/submit/getUserAnswer';

const submitRouter = new Hono();

submitRouter.post('/submit', submitAnswerController);
submitRouter.get('/result/:studySetId', getUserAnswerController);

export { submitRouter };
