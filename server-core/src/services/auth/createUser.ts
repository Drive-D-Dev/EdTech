import { genSalt, hash } from 'bcrypt';
import { validate as emailValidator } from 'email-validator';
import { prisma } from '../..';

const createUser = async (email: string, password: string, name: string) => {
	if (!Bun.env.AUTH_SALT) throw 'Auth salt is not defined';
	if (!emailValidator(email)) throw 'Invalid email';
	const hashedPassword = await hash(password, await genSalt(parseInt(Bun.env.AUTH_SALT)));
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
