import { prisma } from '../..';
import { User_Answer_Request } from '../../models/user_answer_request';

const createUserAnswer = async (data: User_Answer_Request, userStudySet_id: number) => {
	const setId = data.setId;
	const questions = data.Question;
	const result = await Promise.all(
		questions.map(async (q) => {
			return prisma.user_Answer.create({
				data: {
					studyset_id: setId,
					question_id: q.question_id,
					choice_id: q.choice_id,
					user_StudySet_id: userStudySet_id,
				},
			});
		})
	);
	return result;
};

export { createUserAnswer };
