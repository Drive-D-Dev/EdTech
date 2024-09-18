import { Axios } from '@/lib/axiosConfig';
import { AnswerPayload } from '@/model/answerPayload';
import { BaseResponse } from '@/model/baseResponse';

const SendUserTest = async (data: AnswerPayload) => {
	const response = await Axios.post<BaseResponse<any>>('/submit/submit', data);
	return response.data;
};

export { SendUserTest };
