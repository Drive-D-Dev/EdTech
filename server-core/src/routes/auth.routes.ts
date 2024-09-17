import { Hono } from 'hono';
import { registerController } from '../controllers/auth/register';
import { loginController } from '../controllers/auth/login';

const authRouter = new Hono();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);

export { authRouter };
