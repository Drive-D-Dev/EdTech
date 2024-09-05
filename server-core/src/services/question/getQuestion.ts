import { prisma } from '../..';

const getQuestionSortByAccuracy = async (amount: number) => {
	const data = await prisma.question.findMany({
		take: amount,
		orderBy: {
			accuracy_percentage: 'desc',
		},
	});

	return data;
};

const getQuestionSortByAccuracyWithChoice = async (amount?: number) => {
	if (!amount) {
		return await prisma.question.findMany({
			orderBy: {
				accuracy_percentage: 'desc',
			},
			include: {
				Choice: {
					select: {
						id: true,
						content: true,
						number: true,
						question_id: true,
					},
				},
			},
		});
	}
	return await prisma.question.findMany({
		take: amount,
		orderBy: {
			accuracy_percentage: 'desc',
		},
		include: {
			Choice: {
				select: {
					id: true,
					content: true,
					number: true,
					question_id: true,
				},
			},
		},
	});
};

export { getQuestionSortByAccuracy, getQuestionSortByAccuracyWithChoice };
