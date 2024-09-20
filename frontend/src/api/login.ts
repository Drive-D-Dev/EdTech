import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';
import { LoginResponse } from '@/model/loginResponse';
import cookie from 'js-cookie';

const loginAPI = async (email: string, password: string) => {
	const response = await Axios.post<BaseResponse<LoginResponse>>('/auth/login', {
		email,
		password,
	});

	return response.data;
};

export { loginAPI };
