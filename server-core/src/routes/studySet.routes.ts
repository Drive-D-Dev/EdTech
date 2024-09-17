import { Hono } from 'hono';
import { getMultipleStudySetController } from '../controllers/studyset/getMultipleStudySet';
import { getStudySetController } from '../controllers/studyset/getStudySetById';

const studySetRouter = new Hono();

studySetRouter.get('/', getMultipleStudySetController);
studySetRouter.get('/:setId', getStudySetController);

export { studySetRouter };
