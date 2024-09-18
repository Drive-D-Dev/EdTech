import { getStydySetsAPI } from '@/api/studySet';
// import { BACKEND_URL } from '@/constant/global';
import { BaseResponse } from '@/model/baseResponse';
import { STUDY_SET_RESPONSE } from '@/model/studySetResponse';
import useSWR from 'swr';

// const fetcher = (...args: any[]) => {
// 	console.log(args);

// 	return fetch(...args).then((res) => {
// 		return res.json();
// 	});
// };

const FetchStudysetByAmount = (amount?: number) =>
	useSWR<BaseResponse<STUDY_SET_RESPONSE[]>, boolean>(`${amount}`, (amount: string) =>
		getStydySetsAPI(amount)
	);

export { FetchStudysetByAmount };
