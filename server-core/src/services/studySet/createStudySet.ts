import { prisma } from '../..';
import { AI_JSON_TYPE } from '../../models/AIfile';

const createStudySet = async (data: AI_JSON_TYPE) => {
	const newStudySet = await prisma.study_Set.create({
		data: {
			label: data.topic,
			description: data.describe ?? '',
			Study_Set_Questions_List: {
				create: data.questions.map((q) => {
					return {
						Question: {
							create: {
								content: q.question,
								explanation: q.explanation,
								type: q.type,
								Choice: {
									createMany: {
										data: q.options.map((o: string, index: number) => ({
											content: o,
											number: index + 1,
										})),
									},
								},
							},
						},
					};
				}),
			},
		},
		include: {
			Study_Set_Questions_List: {
				include: {
					Question: {
						include: {
							Choice: true, // Include choices to fetch their IDs later
						},
					},
				},
			},
		},
	});

	const result = await Promise.all(
		newStudySet.Study_Set_Questions_List.map(async (q) => {
			const matched_question = data.questions.find((dataQ) => {
				return (
					dataQ.question === q.Question.content &&
					dataQ.explanation === q.Question.explanation
				);
			});

			if (matched_question) {
				const correctChoice = q.Question.Choice.find((c) => {
					return c.content === matched_question.options[matched_question.answer - 1];
				});

				if (correctChoice) {
					return prisma.answer.create({
						data: {
							question_id: q.Question.id,
							choice_id: correctChoice.id,
						},
					});
				}
			}
			return null;
		})
	);

	const filteredResult = result.filter((res) => res !== null);

	const returnData = {
		id: newStudySet.id,
		label: newStudySet.label,
		description: newStudySet.description,
		Question: newStudySet.Study_Set_Questions_List.map((q) => {
			return {
				id: q.Question.id,
				content: q.Question.content,
				explanation: q.Question.explanation,
				correctChoice: filteredResult.find((r) => r.question_id === q.Question.id)
					?.choice_id,
				Choice: q.Question.Choice.map((c) => {
					return {
						id: c.id,
						content: c.content,
					};
				}),
			};
		}),
	};

	return returnData;
};

export { createStudySet };
