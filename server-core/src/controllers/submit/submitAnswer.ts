import { Context } from 'hono';
import { User_Answer_Request } from '../../models/user_answer_request';
import { createUserStudySet } from '../../services/user_studyset/create';
import { createUserAnswer } from '../../services/user_answer/create';

const submitAnswerController = async (c: Context) => {
	const data = await c.req.json<User_Answer_Request>();
	const userId = c.var.userId;
	if (!data.setId) {
		throw 'setId is required';
	}
	const newUserStudySet = await createUserStudySet(userId, data.setId, data.time);
	await createUserAnswer(data, newUserStudySet.id);

	return c.json({
		success: true,
		data: {
			answerStudySetId: newUserStudySet.id,
		},
		message: 'Answer submitted successfully',
	});
};

export { submitAnswerController };
