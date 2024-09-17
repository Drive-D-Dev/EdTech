import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';

const loginAPI = async (
	email: string,
	password: string,
	name: string
): Promise<BaseResponse<null>> => {
	const response = await Axios.post('/auth/register', {
		name,
		email,
		password,
	});
	return response.data;
};

export { loginAPI };
