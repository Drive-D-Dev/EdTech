import { Context } from 'hono';
import { sayHello } from '../../services/example/sayHello';

async function GetHelloController(c: Context) {
	const { msg } = c.req.query();
	const result = sayHello(msg);
	c.status(200);
	return c.json({
		success: true,
		payload: result,
		message: 'Hello!!!',
	});
}

export { GetHelloController };
