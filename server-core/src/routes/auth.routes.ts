import { Hono } from 'hono';
import { registerController } from '../controllers/auth/register';
import { loginController } from '../controllers/auth/login';
import { verifyController } from '../controllers/auth/verify';
import { signoutController } from '../controllers/auth/signout';

const authRouter = new Hono();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/verify', verifyController);
authRouter.get('/signout', signoutController);

export { authRouter };
