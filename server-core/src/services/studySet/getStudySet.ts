import { prisma } from '../..';

const getAllStudySet = async () => {
	const data = await prisma.study_Set.findMany();
	return data;
};

const getStudySet = async (setId: number) => {
	const data = await prisma.study_Set.findUnique({
		where: {
			id: setId,
	  },});
	return data;
}

export { getAllStudySet, getStudySet };
