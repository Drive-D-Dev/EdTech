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
	const user = await getUserByEmail(email);
	return user === null ? false : true;
};

export { getUserByEmail, isEmailExist };
