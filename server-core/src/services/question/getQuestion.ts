import { prisma } from '../..';

const getQuestionsFromStudySet = async (setId: number) => {
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
			content: true,
			Choice: true,
		},
	});
	return data;
};

export { getQuestionsFromStudySet };
