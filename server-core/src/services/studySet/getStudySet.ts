import { prisma } from '../..';

const getAllStudySet = async (amount: number) => {
	const data = Number.isNaN(amount)
		? await prisma.study_Set.findMany()
		: await prisma.study_Set.findMany({
				take: amount,
		  });
	return data;
};

const getStudySet = async (setId: number) => {
	const questions = await prisma.study_Set_Questions_List.findMany({
		where: {
			studyset_id: setId, // Filter by the study set ID
		},
		include: {
			Question: {
				include: {
					Choice: true, // Include all choices related to the question
					Answer: {
						include: {
							Choice: true, // Include the correct choice related to the answer
						},
					},
				},
			},
		},
	});

	return questions;
};

export { getAllStudySet, getStudySet };
