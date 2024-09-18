import { Axios } from '@/lib/axiosConfig';
import { BaseResponse } from '@/model/baseResponse';
import { ExamAnswerResultResponse } from '@/model/examAnswerResultResponse';
import useSWR from 'swr';

const fetcher = async (setId: number | string) => {
	const response = await Axios.get<BaseResponse<ExamAnswerResultResponse>>(
		`/submit/result/${setId}`
	);
	return response.data;
};

const GetExamResultAPI = (setId: number | string) => useSWR([setId], ([setId]) => fetcher(setId));

export { GetExamResultAPI };
