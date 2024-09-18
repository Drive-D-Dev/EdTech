import { Context } from 'hono';
import { getUserStudySetAnswersWithAnswers } from '../../services/user_studyset/get';

const getUserAnswerController = async (c: Context) => {
	try {
		const userId = 12;
		const studySetId = c.req.param('studySetId');
		const answers = await getUserStudySetAnswersWithAnswers(parseInt(studySetId), userId);
		return c.json({
			success: true,
			data: answers,
			message: 'User answers fetched successfully',
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { getUserAnswerController };
