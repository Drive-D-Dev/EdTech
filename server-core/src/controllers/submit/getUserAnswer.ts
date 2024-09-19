import { Context } from 'hono';
import { getUserStudySetAnswersWithAnswers } from '../../services/user_studyset/get';

const getUserAnswerController = async (c: Context) => {
	const userId = c.var.userId;

	const studySetId = c.req.param('studySetId');
	const answers = await getUserStudySetAnswersWithAnswers(
		parseInt(studySetId),
		parseInt(userId + '')
	);
	return c.json({
		success: true,
		data: answers,
		message: 'User answers fetched successfully',
	});
};

export { getUserAnswerController };
