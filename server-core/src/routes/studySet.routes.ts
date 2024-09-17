import { Hono } from 'hono';
import { getMultipleStudySetController } from '../controllers/studyset/getMultipleStudySet';
import { getStudySetController } from '../controllers/studyset/getStudySetById';

const studySetRouter = new Hono({ strict: false });

studySetRouter.get('/', getMultipleStudySetController);
studySetRouter.get('/:amount', getMultipleStudySetController);
studySetRouter.get('/byId/:setId', getStudySetController);

export { studySetRouter };
