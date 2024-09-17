import { prisma } from '../..';

const getQuestionsAnswerAndExplanationInStudySet = async (setId: number) => {
	const data = await prisma.question.findMany({
		where: {
			Study_Set_Questions_List: {
				some: {
					studyset_id: setId,
				},
			},
		},
		select: {
			id: true,
			explanation: true,
			Answer: {
				select: {
					Choice: true,
				},
			},
		},
	});
	const reformatedData = data.map((q) => {
		return {
			id: q.id,
			explanation: q.explanation,
			answer: q.Answer[0].Choice,
		};
	});
	return reformatedData;
};

export { getQuestionsAnswerAndExplanationInStudySet };
