import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';
import { ExamAnswerResultResponse } from '@/model/examAnswerResultResponse';
import useSWR from 'swr';

const GetExamResultAPI = async (setId: number | string) => {
	const response = await Axios.get<BaseResponse<ExamAnswerResultResponse>>(
		`/submit/result/${setId}`
	);
	return response.data;
};

const GetExamResultAPI_SWR = (setId: number | string) =>
	useSWR([setId], ([setId]) => GetExamResultAPI(setId));

export { GetExamResultAPI, GetExamResultAPI_SWR };
