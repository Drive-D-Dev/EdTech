import { Context } from 'hono';
import { getAllStudySet } from '../../services/studySet/getStudySet';

const getMultipleStudySetController = async (c: Context) => {
	try {
		const data = await getAllStudySet();
		return c.json({
			success: true,
			data: data,
			message: 'Study Set Get Successfully',
		});
	} catch (e) {
		return c.json({
			success: false,
			message: e,
			data: null,
		});
	}
};

export { getMultipleStudySetController };
