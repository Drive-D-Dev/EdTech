import { Axios } from '@/lib/axiosConfig';
import { AnswerPayload } from '@/model/answerPayload';
import { BaseResponse } from '@/model/baseResponse';
import { SubmitResponse } from '@/model/submitResponse';

const SendUserTest = async (data: AnswerPayload) => {
	const response = await Axios.post<BaseResponse<SubmitResponse>>('/submit/submit', data);
	return response.data;
};

export { SendUserTest };
