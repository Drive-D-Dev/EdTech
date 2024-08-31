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

const getQuestionSortByAccuracyWithChoice = async (amount: number) => {
	const data = await prisma.question.findMany({
		take: amount,
		orderBy: {
			accuracy_percentage: 'desc',
		},
		include: {
			Choice: true,
		},
	});

	return data;
};

export { getQuestionSortByAccuracy, getQuestionSortByAccuracyWithChoice };
