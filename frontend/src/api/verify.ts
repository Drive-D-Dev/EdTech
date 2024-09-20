import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';
import { VerifyResponse } from '@/model/verifyResponse';

const verifyAPI = async () => {
	const res = await Axios.get<BaseResponse<VerifyResponse>>('/auth/verify');

	return res.data;
};

export { verifyAPI };
