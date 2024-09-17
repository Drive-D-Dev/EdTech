import { Context } from 'hono';
import { getStudySet } from '../../services/studySet/getStudySet';

const getStudySetController = async (c: Context) => {
	try {
		const { setId } = c.req.param();
		const data = await getStudySet(parseInt(setId));
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

export { getStudySetController };
