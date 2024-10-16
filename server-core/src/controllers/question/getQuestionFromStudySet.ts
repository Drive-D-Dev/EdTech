import { Context } from 'hono';
import { getQuestionsFromStudySet } from '../../services/question/getQuestion';

const getQuestionFromStudySetController = async (c: Context) => {
	const { setId } = c.req.param();
	if (!setId || setId === '') throw 'Study Set Id is required';
	const data = await getQuestionsFromStudySet(parseInt(setId));
	return c.json({
		success: true,
		data: data,
		message: 'Questions from Study Set Get Successfully',
	});
};

export { getQuestionFromStudySetController };
