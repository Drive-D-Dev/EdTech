import { Hono } from 'hono';
import { getAllStudySetController } from '../controllers/studyset/getAllStudySet';
import { getStudySetController } from '../controllers/studyset/getStudySet';

const studySetRouter = new Hono();

studySetRouter.get('/', getAllStudySetController);
studySetRouter.get('/:setId', getStudySetController);

export { studySetRouter };
