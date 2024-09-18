import { Hono } from 'hono';
import { createFromJSONController } from '../controllers/ai/createFromJSON';

const AIserviceRouter = new Hono();

AIserviceRouter.post('/createfromjson', createFromJSONController);

export { AIserviceRouter };
