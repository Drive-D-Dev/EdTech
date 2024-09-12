import { prisma } from '../..';

const getAllStudySet = async () => {
	const data = await prisma.study_Set.findMany();
	return data;
};

export { getAllStudySet };
