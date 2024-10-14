import { Context } from 'hono';
import { AI_JSON_TYPE } from '../../models/AIfile';
import { createStudySet } from '../../services/studySet/createStudySet';
import { AI_Axios } from '../../utils/axiosInstance';

const createNewStudySetController = async (c: Context) => {
	try {
		const body = await c.req.json();
		const raw_ai_response = await AI_Axios.post('/gen_multiple_exam', body);
		if (raw_ai_response.status !== 200) {
			throw 'AI server failed to generate study set';
		}
		const ai_response = (await raw_ai_response.data) as AI_JSON_TYPE;

		const result = await createStudySet(ai_response);
		return c.json({
			success: true,
			data: result.id,
			message: `Study set created successfully as id: ${result.id}`,
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			message: e,
		});
	}
};

export { createNewStudySetController };
