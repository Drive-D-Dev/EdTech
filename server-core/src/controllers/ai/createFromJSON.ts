import { Context } from 'hono';
import { createStudySet } from '../../services/studySet/createStudySet';
import { AI_JSON_TYPE } from '../../models/AIfile';

const createFromJSONController = async (c: Context) => {
	const body = await c.req.parseBody();
	let file = body['file'] as File;

	let stringFile = await file.text();

	// Parse and format the JSON data
	const jsonData = JSON.parse(stringFile) as AI_JSON_TYPE[];

	jsonData.map((studySet, sIndex) => {
		if (studySet.topic === undefined || studySet.describe === undefined) {
			throw `Study Set ${sIndex + 1} is missing topic or describe`;
		}
		studySet.questions.map((question, qIndex) => {
			if (!question.question)
				throw `StudySet ${sIndex + 1} Question ${qIndex + 1} is missing question`;
			if (!Array.isArray(question.options))
				throw `StudySet ${sIndex + 1} Question ${qIndex + 1} option is not an array`;
			if (!question.answer)
				throw `StudySet ${sIndex + 1} Question ${qIndex + 1} is missing answer`;
			if (!question.explanation)
				throw `StudySet ${sIndex + 1} Question ${qIndex + 1} is missing explanation`;
			if (typeof question.question_category !== 'string')
				throw `StudySet ${sIndex + 1} Question ${qIndex + 1} is missing question_category`;
			if (typeof question.question_subcategory !== 'string')
				throw `StudySet ${sIndex + 1} Question ${
					qIndex + 1
				} is missing question_subcategory`;
		});
	});

	const result = await Promise.all(
		jsonData.map((data) => {
			return createStudySet(data);
		})
	);

	// Return success after all promises are resolved
	return c.json({
		success: true,
		data: result,
		message: 'Data parsed successfully',
	});
};

export { createFromJSONController };
