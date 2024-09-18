import { prisma } from '../..';

const createUserStudySet = async (userId: number, studySetId: number, time: number) => {
	const data = await prisma.user_Study_Set.create({
		data: {
			user_id: userId,
			studyset_id: studySetId,
			time: time,
		},
	});
	return data;
};

export { createUserStudySet };
