import { prisma } from '../..';

const getWrongQuestionFromUserStudySet = async (userSetId: number) => {
	const data = await prisma.user_Study_Set.findFirst({
		where: {
			id: userSetId,
		},
		include: {
			User_Answer: true,
			Study_Set: {
				include: {
					Study_Set_Questions_List: {
						include: {
							Question: {
								include: {
									Answer: true,
								},
							},
						},
					},
				},
			},
		},
	});

	const AnswerList = data?.Study_Set.Study_Set_Questions_List.map((q) => q.Question.Answer[0]);

	const wrongAnswers = data?.User_Answer.map((usr_ans) => {
		const question = AnswerList?.find((al) => al.question_id === usr_ans.question_id);
		if (question) {
			if (question.choice_id !== usr_ans.choice_id) {
				return question.question_id;
			}
		}
	}).filter((ans) => ans !== null && ans !== undefined);

	const wrongAnswersData = await prisma.question.findMany({
		where: {
			id: {
				in: wrongAnswers,
			},
		},
		select: {
			id: true,
			content: true,
			explanation: true,
			category: true,
			sub_category: true,
			Choice: {
				select: {
					id: true,
					content: true,
				},
			},
		},
	});

	const findAnswerIndex = (questionId: number) => {
		const question = wrongAnswersData?.find((al) => al.id === questionId);
		if (question) {
			const correctChoice = AnswerList?.find((a) => a.question_id === questionId);
			const correctChoiceString = question.Choice.find(
				(c) => c.id === correctChoice?.choice_id
			)?.content;
			for (let i = 1; i <= 4; i++) {
				if (question.Choice[i - 1].content === correctChoiceString) {
					return i;
				}
			}
		}
		return -1;
	};

	return wrongAnswersData.map((q) => {
		return {
			question: q.content,
			options: q.Choice.map((c) => c.content),
			answer: findAnswerIndex(q.id),
			explanation: q.explanation,
			category: q.category,
			sub_category: q.sub_category,
		};
	});
};

export { getWrongQuestionFromUserStudySet };
