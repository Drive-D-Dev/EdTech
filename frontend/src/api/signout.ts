import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';

const signoutAPI = async () => {
	const response = await Axios.get<BaseResponse<null>>('/auth/signout');
	return response.data;
};

export { signoutAPI };
