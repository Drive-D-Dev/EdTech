import { prisma } from '../..';
import { getQuestionsAnswerAndExplanationInStudySet } from '../question/getQuestionsAnswerAndExplanation';

const getUserStudySetAnswersWithAnswers = async (studySetId: number, userId: number) => {
	const userStudySet = await prisma.user_Study_Set.findFirst({
		where: {
			user_id: userId,
			studyset_id: studySetId,
		},
		include: {
			Study_Set: {
				include: {
					Study_Set_Questions_List: {
						include: {
							Question: {
								include: {
									Choice: true,
								},
							},
							Study_Set: true,
						},
					},
				},
			},
		},
	});
	if (!userStudySet) {
		throw new Error('User study set not found');
	}
	const userAnswer = await prisma.user_Answer.findMany({
		where: {
			user_StudySet_id: userStudySet.id,
		},
	});
	const correctAnswers = await getQuestionsAnswerAndExplanationInStudySet(studySetId);
	let correctCount = 0;
	let wrongCount = 0;

	const userAnswersWithCorrectAnswers = userAnswer.map((ua) => {
		const correctAnswer = correctAnswers.find((ca) => ca.id === ua.question_id);
		if (!correctAnswer) {
			throw new Error('Correct answer not found');
		}
		if (ua.choice_id === correctAnswer.answer.id) {
			correctCount++;
		} else {
			wrongCount++;
		}
		return {
			isCorrect: ua.choice_id === correctAnswer.answer.id,
			question_id: ua.question_id,
			user_choice_id: ua.choice_id,
			correct_choice_id: correctAnswer.answer.id,
		};
	});
	return {
		studySetId,
		label: userStudySet.Study_Set.label,
		time: userStudySet.time,
		stat: {
			correct: correctCount,
			wrong: wrongCount,
			percentage: (correctCount / (correctCount + wrongCount)) * 100,
			total: correctCount + wrongCount,
		},
		userAnswers: userStudySet.Study_Set.Study_Set_Questions_List.map((usq) => {
			const userAnswer = userAnswersWithCorrectAnswers.find(
				(ua) => ua.question_id === usq.question_id
			);
			return {
				question_id: usq.question_id,
				content: usq.Question.content,
				explaination: usq.Question.explanation,
				isCorrect: userAnswer?.isCorrect,
				choices: usq.Question.Choice.map((c) => {
					return {
						id: c.id,
						content: c.content,
						isUserAnswer: userAnswer?.user_choice_id === c.id,
						isCorrectAnswer: userAnswer?.correct_choice_id === c.id,
					};
				}),
			};
		}),
	};
};

export { getUserStudySetAnswersWithAnswers };
