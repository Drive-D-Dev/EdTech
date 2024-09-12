import { Hono } from 'hono';
import { getAllStudySetController } from '../controllers/studyset/getAllStudySet';

const studySetRouter = new Hono();

studySetRouter.get('/', getAllStudySetController);

export { studySetRouter };
