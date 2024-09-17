import { Context } from 'hono';
import { getQuestionsAnswerAndExplanationInStudySet } from '../../services/question/getQuestionsAnswerAndExplanation';

const getAnswerController = async (c: Context) => {
	try {
		const { setId } = c.req.param();
		if (!setId || setId === '') throw 'Study Set Id is required';
		const data = await getQuestionsAnswerAndExplanationInStudySet(parseInt(setId));
		return c.json({
			success: true,
			data: data,
			message: 'Questions from Study Set Get Successfully',
		});
	} catch (e) {
		console.error(e);
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { getAnswerController };
