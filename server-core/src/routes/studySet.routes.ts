import { Hono } from 'hono';
import { getMultipleStudySetController } from '../controllers/studyset/getMultipleStudySet';
import { getStudySetController } from '../controllers/studyset/getStudySetById';
import { createNewStudySetController } from '../controllers/studyset/createNewStudySet';
import { createRedoSetController } from '../controllers/studyset/createRedoSet';

const studySetRouter = new Hono({ strict: false });

studySetRouter.get('/', getMultipleStudySetController);
studySetRouter.get('/:amount', getMultipleStudySetController);
studySetRouter.get('/byId/:setId', getStudySetController);
studySetRouter.post('/create', createNewStudySetController);
studySetRouter.get('/redo/:userStudySetId', createRedoSetController);

export { studySetRouter };
