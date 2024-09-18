import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';
import { STUDY_SET_RESPONSE } from '@/model/studySetResponse';
import { AxiosResponse } from 'axios';

const getStydySetsAPI = async (amount?: string) => {
	const response: AxiosResponse<BaseResponse<STUDY_SET_RESPONSE[]>> = await Axios.get(
		`/set${amount ? `/${amount}` : ''}`
	);
	return response.data;
};

export { getStydySetsAPI };
