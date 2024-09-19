import { Context } from 'hono';
import { getAllStudySet } from '../../services/studySet/getStudySet';

const getMultipleStudySetController = async (c: Context) => {
	const { amount } = c.req.param();
	const data = await getAllStudySet(parseInt(amount));
	return c.json({
		success: true,
		data: data,
		message: 'Study Set Get Successfully',
	});
};

export { getMultipleStudySetController };
