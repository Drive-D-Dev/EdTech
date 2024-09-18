import { Context } from 'hono';
import { createStudySet } from '../../services/studySet/createStudySet';
import { AI_JSON_TYPE } from '../../models/AIfile';

const createFromJSONController = async (c: Context) => {
	try {
		const body = await c.req.parseBody();
		let file = body['file[]'] as any as File[];
		if (!Array.isArray(file)) {
			file = [file];
		}

		await Promise.all(
			file.map(async (f, i) => {
				let stringFile = await f.text();

				// Remove garbage from the string
				if (stringFile.startsWith('```json')) {
					stringFile = stringFile
						.replace(/^```json/, '')
						.replace(/```$/, '')
						.trim();
				}

				// Parse and format the JSON data
				const jsonData = JSON.parse(stringFile) as AI_JSON_TYPE;
				const formattedData: AI_JSON_TYPE = {
					topic: jsonData.topic,
					describe: jsonData.describe ?? '',
					questions: jsonData.questions,
				};

				// Create the study set
				await createStudySet(formattedData);
				console.log(`File ${i + 1} parsed successfully`);
			})
		);

		// Return success after all promises are resolved
		return c.json({
			success: true,
			data: null,
			message: 'Data parsed successfully',
		});
	} catch (e) {
		console.error(e);

		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { createFromJSONController };
