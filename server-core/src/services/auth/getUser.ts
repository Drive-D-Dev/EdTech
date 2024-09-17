import { prisma } from '../..';

const getUserByEmail = async (email: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	return user;
};

const isEmailExist = async (email: string) => {
	return (await getUserByEmail(email)) !== null;
};

export { getUserByEmail, isEmailExist };
