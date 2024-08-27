import { Context } from 'hono';
import { getQuestionSortByAccuracy } from '../../services/question/getQuestion';

const getTopQuestionController = async (c: Context) => {
	try {
		const { amount } = c.req.param();
		const questions = await getQuestionSortByAccuracy(parseInt(amount));
		return c.json({
			success: true,
			data: questions,
			message: 'Question Get Successfully',
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { getTopQuestionController };
