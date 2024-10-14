import { Context } from 'hono';
import { getWrongQuestionFromUserStudySet } from '../../services/question/getWrongQuestionFromUserStudySet';
import { AI_Axios } from '../../utils/axiosInstance';

const createRedoSetController = async (c: Context) => {
	try {
		const params = c.req.param();
		const { userStudySetId } = params;

		const wrongAnswerData = await getWrongQuestionFromUserStudySet(parseInt(userStudySetId));

		const ai_response = await AI_Axios.post('/gen_redo', {
			questions: wrongAnswerData,
		});

		if (ai_response.status !== 200) {
			throw 'AI server failed to generate study set';
		}

		// return c.json({
		// 	success: true,
		// 	data: wrongAnswerData,
		// 	message: 'Data fetched successfully',
		// });
		return c.json({
			success: true,
			data: ai_response.data,
			message: 'Data fetched successfully',
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			message: e,
		});
	}
};

export { createRedoSetController };
