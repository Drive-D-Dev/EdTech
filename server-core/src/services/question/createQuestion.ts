import { prisma } from '../..';
import { AI_QUESTION } from '../../models/AIfile';

const createNewQuestionFromJSON = async (data: AI_QUESTION) => {
	const newQuestion = await prisma.question.create({
		data: {
			content: data.question,
			explanation: data.explanation,
			Choice: {
				create: data.options.map((option: string, index: number) => {
					return {
						number: index,
						content: option,
					};
				}),
			},
		},
	});
};
