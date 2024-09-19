import { validate as emailValidator } from 'email-validator';
import { prisma } from '../..';

const createUser = async (email: string, password: string, name: string) => {
	if (!emailValidator(email)) throw 'Invalid email';
	const hashedPassword = Bun.password.hashSync(password);
	const newUserData = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
			role: 'USER',
		},
	});
	return newUserData;
};

export { createUser };
